"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle, EDITORIAL_ARTICLES } from "@/data/editorial-blog-data";

interface BlogPinnedMultiCardProps {
  articles: EditorialArticle[];
}

const BlogPinnedMultiCard: React.FC<BlogPinnedMultiCardProps> = ({ articles }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Take the 3 articles for the signature 1-featured-left + 2-supporting-right layout, plus Curator's Pick
  const featuredArticle = articles[0] || EDITORIAL_ARTICLES[0];
  const supporting1 = articles[1] || EDITORIAL_ARTICLES[1];
  const supporting2 = articles[2] || EDITORIAL_ARTICLES[2];
  const curatorArticle = articles[3] || EDITORIAL_ARTICLES[3];

  // Distinctive cover guarantees: prevents duplicate images across the composition
  const featuredCover = featuredArticle.image || "/assets/img/blog/blog-big-6.jpg";
  const supporting1Cover =
    supporting1.image && supporting1.image !== featuredCover
      ? supporting1.image
      : "/assets/img/blog/blog-grid-1.jpg";
  const supporting2Cover =
    supporting2.image && supporting2.image !== featuredCover && supporting2.image !== supporting1Cover
      ? supporting2.image
      : "/assets/img/blog/blog-grid-2.jpg";
  const curatorCover =
    curatorArticle.image &&
    curatorArticle.image !== featuredCover &&
    curatorArticle.image !== supporting1Cover &&
    curatorArticle.image !== supporting2Cover
      ? curatorArticle.image
      : "/assets/img/blog/blog-grid-3.jpg";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Always ensure all cards and text are fully visible
      gsap.set(
        ".organic-section-header, .choreographed-featured-card, .supporting-card-1, .supporting-card-2, .curators-pick-pill-wrapper",
        {
          opacity: 1,
          visibility: "visible",
          x: 0,
          y: 0,
        }
      );

      if (prefersReducedMotion) return;

      // Smooth, natural entrance as the section scrolls into view
      gsap.from(".organic-section-header", {
        y: 18,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".choreographed-featured-card", {
        y: 24,
        scale: 0.99,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".supporting-card-1, .supporting-card-2, .curators-pick-pill-wrapper", {
        y: 20,
        stagger: 0.1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          once: true,
        },
      });

      // Subtle, non-distracting optical parallax on images across scroll
      gsap.fromTo(
        ".featured-photo-element",
        { yPercent: -2 },
        {
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        ".supporting-photo-element",
        { yPercent: -2 },
        {
          yPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [articles]);

  return (
    <section
      ref={sectionRef}
      className="pinned-organic-section"
      aria-label="Architectural Perspectives — Choreographed thinking in motion"
    >
      <div className="editorial-fluid-container">
        {/* ========================================================
            1. Section Heading & Details (Refined Editorial Format)
            ======================================================== */}
        <header className="organic-section-header">
          <div className="header-eyebrow">
            <span className="eyebrow-index">01</span>
            <span className="eyebrow-divider">—</span>
            <span className="eyebrow-title">ARCHITECTURAL PERSPECTIVES</span>
          </div>

          <div className="header-title-split">
            <h2 className="header-main-headline">
              Choreographed thinking in motion.
            </h2>
            <p className="header-lead-text">
              Each story is treated as an original editorial spread, combining organic shape masks, deep technical research, and human typography.
            </p>
          </div>
        </header>

        {/* ========================================================
            2. Structured Editorial Grid Arena
            1 Large Featured Left + 2 Matching Smaller Cards Right
            ======================================================== */}
        <div className="organic-stage-canvas">
          {/* ----------------------------------------------------
              Featured Article Card (Left Column)
              ---------------------------------------------------- */}
          <article className="choreographed-card choreographed-featured-card">
            <Link
              href={`/blog-details/${featuredArticle.slug || featuredArticle.id}`}
              className="featured-card-link"
              aria-label={`Read Master Blueprint: ${featuredArticle.title}`}
            >
              <div className="featured-image-crown">
                <EditorialImage
                  src={featuredCover}
                  alt={featuredArticle.title}
                  fallbackIndex={0}
                  category={featuredArticle.category}
                  className="featured-photo-element"
                  loading="eager"
                />
                <div className="featured-sheen-overlay" aria-hidden="true" />
                <span className="featured-cat-badge">{featuredArticle.category || "ECOMMERCE"}</span>
                <span className="featured-edition-pill">Issue 01 • Master Blueprint</span>
              </div>

              <div className="featured-content-body">
                <div className="featured-meta-line">
                  <span className="meta-index-num">01</span>
                  <span className="meta-dot" aria-hidden="true">•</span>
                  <span className="meta-date-text">{featuredArticle.publishedAt || "2026-06-13"}</span>
                  <span className="meta-dot" aria-hidden="true">•</span>
                  <span className="meta-read-text">{featuredArticle.readTime ? `${featuredArticle.readTime} min deep read` : "8 min deep read"}</span>
                </div>

                <h3 className="featured-headline">{featuredArticle.title}</h3>
                <p className="featured-excerpt">{featuredArticle.description}</p>

                <div className="featured-footer-row">
                  <div className="featured-author-block">
                    <div className="author-monogram-circle" aria-hidden="true">
                      {featuredArticle.author ? featuredArticle.author.slice(0, 2).toUpperCase() : "VA"}
                    </div>
                    <div className="author-text-meta">
                      <span className="author-name-label">By {featuredArticle.author || "Vastoratech"}</span>
                      <span className="author-role-label">{featuredArticle.authorRole || "Technical Contributor"}</span>
                    </div>
                  </div>

                  <span className="featured-cta-button">
                    <span className="cta-text">Read Full Blueprint</span>
                    <span className="cta-arrow-circle" aria-hidden="true">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* ----------------------------------------------------
              Supporting Stories Column (Right Column: Matching Pair)
              ---------------------------------------------------- */}
          <div className="choreographed-supporting-column">
            {/* Supporting Story 1 (Top) */}
            <article className="choreographed-card supporting-card-item supporting-card-1">
              <Link
                href={`/blog-details/${supporting1.slug || supporting1.id}`}
                className="supporting-card-link"
                aria-label={`Explore Thesis: ${supporting1.title}`}
              >
                <div className="supporting-thumb-media">
                  <EditorialImage
                    src={supporting1Cover}
                    alt={supporting1.title}
                    fallbackIndex={1}
                    category={supporting1.category}
                    className="supporting-photo-element"
                  />
                  <span className="supporting-badge">{supporting1.category || "ECOMMERCE"}</span>
                </div>

                <div className="supporting-content-panel">
                  <div className="supporting-meta-bar">
                    <span className="supporting-num">02</span>
                    <span className="meta-dot" aria-hidden="true">•</span>
                    <span className="supporting-date">{supporting1.publishedAt || "2026-06-11"}</span>
                    <span className="meta-dot" aria-hidden="true">•</span>
                    <span className="supporting-read">{supporting1.readTime ? `${supporting1.readTime} min` : "5 min"}</span>
                  </div>

                  <h4 className="supporting-title">{supporting1.title}</h4>
                  <p className="supporting-desc">{supporting1.description}</p>

                  <div className="supporting-action-bar">
                    <span className="supporting-link-cta">
                      <span>Explore Thesis</span>
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Supporting Story 2 (Bottom) */}
            <article className="choreographed-card supporting-card-item supporting-card-2">
              <Link
                href={`/blog-details/${supporting2.slug || supporting2.id}`}
                className="supporting-card-link"
                aria-label={`Read Empirical Study: ${supporting2.title}`}
              >
                <div className="supporting-thumb-media">
                  <EditorialImage
                    src={supporting2Cover}
                    alt={supporting2.title}
                    fallbackIndex={2}
                    category={supporting2.category}
                    className="supporting-photo-element"
                  />
                  <span className="supporting-badge">{supporting2.category || "ECOMMERCE"}</span>
                </div>

                <div className="supporting-content-panel">
                  <div className="supporting-meta-bar">
                    <span className="supporting-num">03</span>
                    <span className="meta-dot" aria-hidden="true">•</span>
                    <span className="supporting-date">{supporting2.publishedAt || "2026-06-06"}</span>
                    <span className="meta-dot" aria-hidden="true">•</span>
                    <span className="supporting-read">{supporting2.readTime ? `${supporting2.readTime} min` : "5 min"}</span>
                  </div>

                  <h4 className="supporting-title">{supporting2.title}</h4>
                  <p className="supporting-desc">{supporting2.description}</p>

                  <div className="supporting-action-bar">
                    <span className="supporting-link-cta">
                      <span>Read Empirical Study</span>
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Floating Curator's Pick Pill */}
            <div className="curators-pick-pill-wrapper">
              <Link
                href={`/blog-details/${curatorArticle.slug || curatorArticle.id}`}
                className="curators-pick-floating-pill"
                aria-label={`Curator's Pick: ${curatorArticle.title}`}
              >
                <div className="curator-avatar-thumb">
                  <EditorialImage
                    src={curatorCover}
                    alt={curatorArticle.title}
                    fallbackIndex={3}
                    category={curatorArticle.category}
                    className="curator-thumb-img"
                  />
                </div>

                <div className="curator-pill-meta">
                  <div className="curator-badge-row">
                    <span className="curator-sparkle" aria-hidden="true">✦</span>
                    <span className="curator-label">CURATOR&apos;S PICK</span>
                    <span className="curator-category-tag">{curatorArticle.category || "SEO"}</span>
                  </div>
                  <p className="curator-title-text">{curatorArticle.title}</p>
                </div>

                <span className="curator-action-arrow" aria-hidden="true">
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

export default BlogPinnedMultiCard;
