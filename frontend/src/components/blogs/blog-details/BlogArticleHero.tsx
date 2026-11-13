"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BlogArticleHeroProps {
  article: {
    title: string;
    category?: string;
    description?: string;
    image?: string;
    author?: string;
    authorRole?: string;
    createdAt?: string;
    readTime?: number | string;
    editorialNumber?: string;
    tags?: string[];
  };
}

const fallbackHeroImg = "/assets/img/blog/blog-big-6.jpg";

const BlogArticleHero: React.FC<BlogArticleHeroProps> = ({ article }) => {
  const [copied, setCopied] = useState(false);
  const [imgSrc, setImgSrc] = useState(article.image || fallbackHeroImg);

  const formattedDate = React.useMemo(() => {
    if (!article.createdAt) return "Recent Publication";
    try {
      const d = new Date(article.createdAt);
      if (isNaN(d.getTime())) return article.createdAt;
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return article.createdAt;
    }
  }, [article.createdAt]);

  const authorName = article.author || "Vastora Tech Engineering";
  const authorRole = article.authorRole || "Editorial & Architecture Guild";
  const initials = authorName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(article.title);

  return (
    <section className="editorial-article-hero" aria-label="Article Overview">
      <div className="container editorial-hero-container">
        {/* 1. Breadcrumb & Publication Back-Link */}
        <nav className="editorial-hero-breadcrumb" aria-label="Breadcrumbs">
          <Link href="/" className="crumb-link">Home</Link>
          <span className="crumb-divider" aria-hidden="true">/</span>
          <Link href="/blog" className="crumb-link">Blog & Insights</Link>
          <span className="crumb-divider" aria-hidden="true">/</span>
          <span className="crumb-current">{article.category || "Editorial"}</span>
        </nav>

        {/* 2. Top Category Badge & Editorial Meta Strip */}
        <div className="editorial-hero-eyebrow-row">
          <span className="editorial-category-badge">
            <span className="category-pulse-dot" aria-hidden="true" />
            {article.category || "Engineering"}
          </span>
          {article.editorialNumber && (
            <span className="editorial-essay-number">
              ESSAY #{article.editorialNumber}
            </span>
          )}
          <span className="editorial-read-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readTime || 6} MIN READ
          </span>
        </div>

        {/* 3. Hero Title & Lead Excerpt */}
        <h1 className="editorial-hero-title">{article.title}</h1>

        {article.description && (
          <p className="editorial-hero-lead-text">{article.description}</p>
        )}

        {/* 4. Author Byline & Social Share Controls */}
        <div className="editorial-hero-meta-bar">
          <div className="author-byline-card">
            <div className="author-avatar-orb" aria-hidden="true">
              <span>{initials}</span>
            </div>
            <div className="author-text-info">
              <span className="author-full-name">{authorName}</span>
              <span className="author-title-role">{authorRole} • {formattedDate}</span>
            </div>
          </div>

          <div className="editorial-share-group" aria-label="Share article">
            <span className="share-label">Share:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-share-btn share-linkedin"
              aria-label="Share on LinkedIn"
              title="Share on LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-share-btn share-twitter"
              aria-label="Share on X / Twitter"
              title="Share on X (Twitter)"
            >
              <i className="fa-brands fa-x-twitter" aria-hidden="true" />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-share-btn share-whatsapp"
              aria-label="Share on WhatsApp"
              title="Share on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={handleCopyLink}
              className="editorial-share-btn share-copy"
              aria-label="Copy article link"
              title="Copy link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {copied && <span className="copy-toast" role="status">Link Copied!</span>}
            </button>
          </div>
        </div>

        {/* 5. Large High-Resolution Featured Image Stage */}
        <div className="editorial-hero-image-stage">
          <div className="image-frame-inner">
            <img
              src={imgSrc}
              alt={article.title}
              className="hero-featured-cover-img"
              loading="eager"
              onError={() => setImgSrc("/assets/img/blog/blog-grid-1.jpg")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleHero;

