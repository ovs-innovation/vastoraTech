"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleTableOfContents from "./BlogArticleTableOfContents";
import BlogArticleSidebar from "./BlogArticleSidebar";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogArticleLayoutProps {
  article: {
    _id?: string;
    title: string;
    slug?: string;
    category?: string;
    description?: string;
    content?: string;
    author?: string;
    authorRole?: string;
    authorBio?: string;
    createdAt?: string;
    readTime?: number | string;
    tags?: string[];
    highlightQuote?: string;
    faqs?: { question: string; answer: string }[];
  };
  recentArticles: EditorialArticle[];
}

const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = ({
  article,
  recentArticles,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const authorName = article.author || "Vastora Tech Engineering";
  const authorRole = article.authorRole || "Editorial & Architecture Guild";
  const initials = authorName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = encodeURIComponent(article.title);

  return (
    <section className="editorial-reading-layout-section" aria-label="Article Content">
      <div className="container editorial-reading-container">
        <div className="row g-5">
          {/* ========================================================
              LEFT: MAIN READING COLUMN (Articles, Headings, Callouts, FAQs)
              ======================================================== */}
          <div className="col-lg-8 col-xl-8">
            <div className="editorial-main-content-panel">
              {/* 1. Interactive Table of Contents */}
              <BlogArticleTableOfContents contentHtml={article.content} />

              {/* 2. Main Formatted Article HTML */}
              <article className="editorial-rendered-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      article.content ||
                      `<p class="lead-text">${article.description || ""}</p>`,
                  }}
                />
              </article>

              {/* 3. Interactive Article FAQs (if available) */}
              {Array.isArray(article.faqs) && article.faqs.length > 0 && (
                <div className="editorial-faq-card">
                  <div className="faq-card-header">
                    <span className="faq-eyebrow">FREQUENT QUESTIONS</span>
                    <h3 className="faq-heading">Frequently Asked Questions</h3>
                  </div>
                  <div className="accordion editorial-faq-accordion" id="articleFaqList">
                    {article.faqs.map((faq, idx) => {
                      const isOpen = activeFaq === idx;
                      return (
                        <div key={idx} className="editorial-faq-item">
                          <button
                            type="button"
                            className={`faq-question-btn ${isOpen ? "is-open" : ""}`}
                            onClick={() => setActiveFaq(isOpen ? null : idx)}
                            aria-expanded={isOpen}
                          >
                            <span className="faq-q-text">{faq.question}</span>
                            <span className="faq-arrow-icon" aria-hidden="true">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </span>
                          </button>
                          {isOpen && (
                            <div className="faq-answer-panel">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Article Tags Cloud */}
              {Array.isArray(article.tags) && article.tags.length > 0 && (
                <div className="editorial-tags-strip" aria-label="Article Topics">
                  <span className="tags-label">Tags:</span>
                  <div className="tags-pill-wrap">
                    {article.tags.map((tag, i) => (
                      <span key={i} className="editorial-topic-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. End-of-Article Share Controls */}
              <div className="editorial-bottom-share-row">
                <span className="share-prompt">Enjoyed this dispatch? Share with your network:</span>
                <div className="share-actions">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-share-pill"
                    aria-label="Share on LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-share-pill"
                    aria-label="Share on X"
                  >
                    <i className="fa-brands fa-x-twitter" aria-hidden="true" />
                    <span>X</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="editorial-share-pill share-pill-copy"
                    aria-label="Copy Link"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copied ? "Copied!" : "Copy Link"}</span>
                  </button>
                </div>
              </div>

              {/* 6. Comprehensive Author Bio Card */}
              <div className="editorial-author-bio-card">
                <div className="author-bio-avatar-stage" aria-hidden="true">
                  <span>{initials}</span>
                </div>
                <div className="author-bio-content">
                  <div className="author-bio-header">
                    <div>
                      <span className="bio-written-by">WRITTEN BY</span>
                      <h4 className="bio-author-name">{authorName}</h4>
                      <span className="bio-author-role">{authorRole}</span>
                    </div>
                  </div>
                  <p className="bio-statement">
                    {article.authorBio ||
                      "Architecting scalable web applications, enterprise eCommerce engines, and high-performance digital platforms at Vastora Tech. Focused on sub-second rendering, resilient systems design, and conversion-first engineering."}
                  </p>
                  <div className="author-bio-links">
                    <Link href="/blog" className="bio-archive-link">
                      <span>View All Articles by Vastora Tech</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT: INTELLIGENT STICKY SIDEBAR (Recent Posts, Categories, CTA)
              ======================================================== */}
          <div className="col-lg-4 col-xl-4">
            <BlogArticleSidebar
              recentArticles={recentArticles}
              currentCategory={article.category}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleLayout;

