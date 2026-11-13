"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogArticleSidebarProps {
  recentArticles: EditorialArticle[];
  categoriesWithCount?: { name: string; count: number }[];
  currentCategory?: string;
}

const fallbackThumb = "/assets/img/blog/blog-grid-1.jpg";

const RecentPostItem: React.FC<{ post: EditorialArticle }> = ({ post }) => {
  const [imgSrc, setImgSrc] = useState(post.image || fallbackThumb);

  const formattedDate = React.useMemo(() => {
    if (!post.publishedAt) return "Recent";
    try {
      const d = new Date(post.publishedAt);
      if (isNaN(d.getTime())) return post.publishedAt;
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return post.publishedAt;
    }
  }, [post.publishedAt]);

  const detailUrl = `/blog-details/${post.slug || post.id}`;

  return (
    <article className="sidebar-recent-card">
      <Link href={detailUrl} className="recent-thumb-frame" aria-label={post.title}>
        <img
          src={imgSrc}
          alt={post.title}
          className="recent-thumb-img"
          loading="lazy"
          onError={() => setImgSrc(fallbackThumb)}
        />
      </Link>
      <div className="recent-content">
        <span className="recent-cat-tag">{post.category}</span>
        <h4 className="recent-title">
          <Link href={detailUrl}>{post.title}</Link>
        </h4>
        <div className="recent-meta-row">
          <span>{formattedDate}</span>
          <span className="meta-dot" aria-hidden="true">•</span>
          <span>{post.readTime || 5} min read</span>
        </div>
      </div>
    </article>
  );
};

const BlogArticleSidebar: React.FC<BlogArticleSidebarProps> = ({
  recentArticles,
  categoriesWithCount = [
    { name: "eCommerce", count: 4 },
    { name: "SEO", count: 2 },
    { name: "Technology", count: 2 },
    { name: "Digital", count: 2 },
    { name: "Marketing", count: 1 },
    { name: "Social Media", count: 1 },
  ],
  currentCategory,
}) => {
  return (
    <aside className="editorial-article-sidebar" aria-label="Article Sidebar">
      <div className="sidebar-sticky-rail">
        {/* Widget 1: Curated Recent Stories (Working Images Guaranteed) */}
        <div className="sidebar-widget-card widget-recent-posts">
          <div className="widget-header">
            <span className="widget-eyebrow">CURATED DISPATCHES</span>
            <h3 className="widget-title">Recent Stories</h3>
          </div>
          <div className="recent-posts-list">
            {recentArticles.slice(0, 4).map((post) => (
              <RecentPostItem key={post.id || post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Widget 2: Category Exploration */}
        <div className="sidebar-widget-card widget-categories">
          <div className="widget-header">
            <span className="widget-eyebrow">TOPIC DIRECTORY</span>
            <h3 className="widget-title">Explore Categories</h3>
          </div>
          <div className="categories-pill-cloud">
            {categoriesWithCount.map((cat) => {
              const isActive = currentCategory?.toLowerCase() === cat.name.toLowerCase();
              return (
                <Link
                  key={cat.name}
                  href={`/blog?category=${encodeURIComponent(cat.name)}`}
                  className={`category-cloud-pill ${isActive ? "is-active" : ""}`}
                >
                  <span className="pill-name">{cat.name}</span>
                  <span className="pill-count">{cat.count}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Widget 3: Engineering Consultation CTA */}
        <div className="sidebar-widget-card widget-engineering-cta">
          <div className="cta-ambient-glow" aria-hidden="true" />
          <span className="cta-kicker">ENGINEERING ADVISORY</span>
          <h4 className="cta-heading">Scale your next digital product with Vastora Tech.</h4>
          <p className="cta-body">
            Direct access to senior software architects for eCommerce re-platforming, technical SEO, and cloud infrastructure.
          </p>
          <Link href="/contact" className="sidebar-cta-btn">
            <span>Start a Discussion</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default BlogArticleSidebar;

