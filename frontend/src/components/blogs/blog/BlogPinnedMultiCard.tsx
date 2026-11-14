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
      if (prefersReducedMotion) {
        gsap.set(
          ".organic-section-header, .choreographed-featured-card, .supporting-card-1, .supporting-card-2, .curators-pick-pill-wrapper, .featured-photo-element, .supporting-photo-element",
          {
            opacity: 1,
            x: 0,
            y: 0,
            yPercent: 0,
            scale: 1,
            clearProps: "all",
          }
        );
        return;
      }

      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
      const isShortScreen = typeof window !== "undefined" && window.innerHeight < 720;
      const enablePin = isDesktop && !isShortScreen;
      const slideX = isDesktop ? 55 : 28;

      // Master Scroll-Driven Timeline:
      // Expanded pin duration (+=200% ~ 1600-1800px) positioned right under the navbar (72px).
      // Entrance finishes early (~0.25) so the cards remain stationary and fully readable (opacity: 1)
      // for the vast majority (~63%) of the scroll interval before a smooth, natural unpin transition.
      // scrub: 1.0 guarantees 1:1 responsive, bidirectional tactile control without lagging.
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: enablePin ? "top 72px" : "top 82%",
          end: enablePin ? "+=200%" : "top 18%",
          pin: enablePin,
          pinSpacing: enablePin,
          scrub: 1.0,
          anticipatePin: enablePin ? 1 : 0,
          invalidateOnRefresh: true,
        },
      });

      // 1. Header Reveal (Progress 0.00 -> 0.14): Eyebrow, Main Headline, Lead Description
      masterTl.fromTo(
        ".organic-section-header",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.14,
          ease: "power2.out",
        },
        0.0
      );

      // 2. Large Left Featured Card (Progress 0.03 -> 0.20): Horizontal slide-in with subtle depth scale
      masterTl.fromTo(
        ".choreographed-featured-card",
        {
          x: -slideX,
          opacity: 0,
          scale: 0.97,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.17,
          ease: "power2.out",
        },
        0.03
      );

      // 3. First Right-Side Supporting Card (Progress 0.06 -> 0.22): Smooth glide from right
      masterTl.fromTo(
        ".supporting-card-1",
        {
          x: slideX,
          opacity: 0,
          scale: 0.97,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.16,
          ease: "power2.out",
        },
        0.06
      );

      // 4. Second Right-Side Supporting Card (Progress 0.09 -> 0.24): Controlled stagger
      masterTl.fromTo(
        ".supporting-card-2",
        {
          x: slideX,
          opacity: 0,
          scale: 0.97,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.15,
          ease: "power2.out",
        },
        0.09
      );

      // 5. Curator's Pick Pill (Progress 0.12 -> 0.25): Floats up smoothly below right cards
      masterTl.fromTo(
        ".curators-pick-pill-wrapper",
        {
          y: 16,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.13,
          ease: "power2.out",
        },
        0.12
      );

      // 6. Deliberate Stationary Reading Hold Phase (Progress 0.25 -> 0.88)
      // All cards remain at opacity: 1, scale: 1, perfectly settled and stationary,
      // giving the visitor ample scroll time to read the featured story and headlines.
      masterTl.to({}, { duration: 0.63 }, 0.25);

      // 7. Smooth, natural exit transition into Section 02 (Progress 0.88 -> 1.00)
      // Gentle shift prevents sudden snaps or premature section transitions.
      masterTl.to(
        ".choreographed-featured-card, .supporting-card-1, .supporting-card-2, .curators-pick-pill-wrapper",
        {
          y: -16,
          opacity: 0.92,
          duration: 0.12,
          ease: "power1.inOut",
        },
        0.88
      );

      // 8. Subtle, non-distracting optical parallax on images across the full scroll
      masterTl.fromTo(
        ".featured-photo-element",
        {
          yPercent: -3,
        },
        {
          yPercent: 3,
          duration: 1.0,
          ease: "none",
        },
        0.0
      );

      masterTl.fromTo(
        ".supporting-card-1 .supporting-photo-element",
        {
          yPercent: -2,
        },
        {
          yPercent: 2,
          duration: 1.0,
          ease: "none",
        },
        0.0
      );

      masterTl.fromTo(
        ".supporting-card-2 .supporting-photo-element",
        {
          yPercent: -3,
        },
        {
          yPercent: 2,
          duration: 1.0,
          ease: "none",
        },
        0.0
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
