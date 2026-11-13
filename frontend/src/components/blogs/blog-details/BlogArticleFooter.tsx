"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogArticleFooterProps {
  currentArticle: {
    title: string;
    slug?: string;
    category?: string;
  };
  prevArticle?: EditorialArticle | null;
  nextArticle?: EditorialArticle | null;
  relatedArticles: EditorialArticle[];
}

const fallbackCardImg = "/assets/img/blog/blog-grid-2.jpg";

const RelatedCard: React.FC<{ article: EditorialArticle }> = ({ article }) => {
  const [imgSrc, setImgSrc] = useState(article.image || fallbackCardImg);
  const detailUrl = `/blog-details/${article.slug || article.id}`;

  const formattedDate = React.useMemo(() => {
    if (!article.publishedAt) return "Recent";
    try {
      const d = new Date(article.publishedAt);
      if (isNaN(d.getTime())) return article.publishedAt;
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return article.publishedAt;
    }
  }, [article.publishedAt]);

  return (
    <article className="related-story-card">
      <Link href={detailUrl} className="related-thumb-link" aria-label={article.title}>
        <div className="related-thumb-wrap">
          <img
            src={imgSrc}
            alt={article.title}
            className="related-cover-img"
            loading="lazy"
            onError={() => setImgSrc(fallbackCardImg)}
          />
          <span className="related-category-pill">{article.category}</span>
        </div>
      </Link>
      <div className="related-card-content">
        <div className="related-meta-strip">
          <span>{formattedDate}</span>
          <span className="meta-separator" aria-hidden="true">•</span>
          <span>{article.readTime || 6} MIN READ</span>
        </div>
        <h3 className="related-story-title">
          <Link href={detailUrl}>{article.title}</Link>
        </h3>
        {article.description && (
          <p className="related-story-snippet">{article.description}</p>
        )}
        <div className="related-card-footer">
          <span className="related-author-name">{article.author}</span>
          <Link href={detailUrl} className="read-more-link" aria-label={`Read ${article.title}`}>
            <span>Read Story</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

const BlogArticleFooter: React.FC<BlogArticleFooterProps> = ({
  prevArticle,
  nextArticle,
  relatedArticles,
}) => {
  return (
    <footer className="editorial-article-footer-area">
      <div className="container editorial-footer-container">
        {/* 1. Previous / Next Article Navigation */}
        {(prevArticle || nextArticle) && (
          <nav className="article-prev-next-nav" aria-label="Adjacent Articles">
            {prevArticle ? (
              <Link
                href={`/blog-details/${prevArticle.slug || prevArticle.id}`}
                className="prev-next-card prev-card"
              >
                <div className="nav-arrow-badge" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </div>
                <div className="nav-text-col">
                  <span className="nav-sub-label">PREVIOUS ESSAY</span>
                  <h4 className="nav-article-title">{prevArticle.title}</h4>
                </div>
              </Link>
            ) : (
              <div className="prev-next-card-empty" aria-hidden="true" />
            )}

            {nextArticle ? (
              <Link
                href={`/blog-details/${nextArticle.slug || nextArticle.id}`}
                className="prev-next-card next-card"
              >
                <div className="nav-text-col text-end">
                  <span className="nav-sub-label">NEXT ESSAY</span>
                  <h4 className="nav-article-title">{nextArticle.title}</h4>
                </div>
                <div className="nav-arrow-badge" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            ) : (
              <div className="prev-next-card-empty" aria-hidden="true" />
            )}
          </nav>
        )}

        {/* 2. Curated Related Articles Section */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="related-articles-section" aria-label="Related Publications">
            <div className="section-header-row">
              <div>
                <span className="section-eyebrow">EDITORIAL CONTINUATION</span>
                <h2 className="section-headline">Related Insights & Perspectives</h2>
              </div>
              <Link href="/blog" className="view-all-stories-btn">
                <span>All Publications</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="related-stories-grid">
              {relatedArticles.slice(0, 3).map((rel) => (
                <RelatedCard key={rel.id || rel.slug} article={rel} />
              ))}
            </div>
          </section>
        )}

        {/* 3. High-Converting Project Discussion CTA */}
        <section className="editorial-closing-cta-banner" aria-label="Start a Project with Vastora Tech">
          <div className="cta-ambient-mesh" aria-hidden="true" />
          <div className="cta-inner-layout">
            <div className="cta-copy-col">
              <span className="cta-badge">ENGINEERING PARTNERSHIP</span>
              <h2 className="cta-title">Let&apos;s build your next digital platform.</h2>
              <p className="cta-desc">
                From high-converting eCommerce flagships to custom web software and cloud systems, talk to our senior engineering leads for an in-depth consultation.
              </p>
            </div>
            <div className="cta-action-col">
              <Link href="/contact" className="cta-primary-btn">
                <span>Start a Project Discussion</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/services" className="cta-secondary-btn">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default BlogArticleFooter;

