"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogEditorialFeaturedProps {
  article: EditorialArticle;
}

const BlogEditorialFeatured: React.FC<BlogEditorialFeaturedProps> = ({ article }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const detailUrl = `/blog-details/${article.slug || article.id}`;

  return (
    <section
      ref={sectionRef}
      className={`editorial-featured-section ${inView ? "is-revealed" : ""}`}
      aria-label="Featured Story"
    >
      <div className="container editorial-featured-container">
        {/* Section Header Eyebrow */}
        <div className="featured-section-eyebrow">
          <span className="eyebrow-accent-number">FEATURED ESSAY // {article.editorialNumber}</span>
          <span className="eyebrow-line" />
          <span className="eyebrow-status">DEEP DIVE ANALYSIS</span>
        </div>

        <div className="featured-grid-composition">
          {/* ========================================================
              LEFT: LARGE FEATURED IMAGE (Clip-Path Reveal + Scale 1.12 -> 1)
              ======================================================== */}
          <div className="featured-image-col">
            <Link href={detailUrl} className="featured-image-stage" aria-label={article.title}>
              <div className="image-clip-mask">
                <img
                  src={article.image}
                  alt={article.title}
                  className="featured-cover-img"
                  loading="eager"
                />
              </div>

              {/* Floating Spatial Badge */}
              <div className="featured-floating-tag">
                <span className="tag-dot" />
                <span className="tag-text">{article.category}</span>
              </div>
            </Link>
          </div>

          {/* ========================================================
              RIGHT: ARTICLE CONTENT (Enters from right, staggered reveal)
              ======================================================== */}
          <div className="featured-content-col">
            <div className="featured-meta-header">
              <span className="featured-category-pill">{article.category}</span>
              <span className="featured-date">{article.publishedAt}</span>
              <span className="meta-bullet">•</span>
              <span className="featured-read-time">{article.readTime} MIN READ</span>
            </div>

            <h2 className="featured-story-title">
              <Link href={detailUrl}>
                {article.title}
              </Link>
            </h2>

            <p className="featured-story-description">
              {article.description}
            </p>

            {article.highlightQuote && (
              <blockquote className="featured-story-quote">
                &ldquo;{article.highlightQuote}&rdquo;
              </blockquote>
            )}

            <div className="featured-footer-action">
              <div className="author-meta-card">
                <div className="author-avatar-initials">
                  {article.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="author-info">
                  <span className="author-name">{article.author}</span>
                  <span className="author-role">{article.authorRole}</span>
                </div>
              </div>

              <Link href={detailUrl} className="read-story-cta-btn" aria-label={`Read ${article.title}`}>
                <span>Read Story</span>
                <span className="cta-arrow-circle" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEditorialFeatured;

