"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle, EDITORIAL_ARTICLES } from "@/data/editorial-blog-data";

interface BlogStackedPanelsProps {
  articles: EditorialArticle[];
}

const BlogStackedPanels: React.FC<BlogStackedPanelsProps> = ({ articles }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState(1);

  // 4 distinct articles for the 4 sequential layers
  const cards = [
    {
      num: "01",
      article: articles[0] || EDITORIAL_ARTICLES[0],
      maskClass: "mask-pebble-right",
      fallbackIndex: 0,
      panelClass: "organic-stack-panel-1",
    },
    {
      num: "02",
      article: articles[1] || EDITORIAL_ARTICLES[1],
      maskClass: "mask-pebble-left",
      fallbackIndex: 1,
      panelClass: "organic-stack-panel-2",
    },
    {
      num: "03",
      article: articles[2] || EDITORIAL_ARTICLES[2],
      maskClass: "mask-arch-top",
      fallbackIndex: 2,
      panelClass: "organic-stack-panel-3",
    },
    {
      num: "04",
      article: articles[3] || EDITORIAL_ARTICLES[3],
      maskClass: "mask-scoop-smooth",
      fallbackIndex: 3,
      panelClass: "organic-stack-panel-4",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion || (typeof window !== "undefined" && window.innerWidth < 1024)) {
        // Natural stacked layout for mobile / tablet or reduced motion
        gsap.set(".organic-stack-panel", {
          clearProps: "all",
          opacity: 1,
          visibility: "visible",
        });
        return;
      }

      // Initial Setup:
      // Card 01 is active in foreground, perfectly centered (y: 0, scale: 1, autoAlpha: 1).
      // Cards 02, 03, 04 are hidden via autoAlpha: 0 (which sets visibility: hidden).
      // Inactive cards take up zero rendering space and can NEVER ghost or peek behind the active card.
      gsap.set(".organic-stack-panel-1", {
        x: 0,
        y: 0,
        scale: 1,
        autoAlpha: 1,
        zIndex: 10,
        pointerEvents: "auto",
      });
      gsap.set(".organic-stack-panel-2", {
        x: 0,
        y: 20,
        scale: 0.98,
        autoAlpha: 0,
        zIndex: 9,
        pointerEvents: "none",
      });
      gsap.set(".organic-stack-panel-3", {
        x: 0,
        y: 20,
        scale: 0.98,
        autoAlpha: 0,
        zIndex: 8,
        pointerEvents: "none",
      });
      gsap.set(".organic-stack-panel-4", {
        x: 0,
        y: 20,
        scale: 0.98,
        autoAlpha: 0,
        zIndex: 7,
        pointerEvents: "none",
      });

      // Master Scroll-Driven Timeline:
      // Pinned at "top 72px" right below the navbar.
      // end: "+=380%" gives ~3,200px of scroll travel for relaxed, comfortable reading holds.
      // scrub: 1.0 ensures 1:1 tactile, reversible control without inertia lag or jumps.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          pin: true,
          pinSpacing: true,
          start: "top 72px",
          end: "+=380%",
          scrub: 1.0,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.28) setActiveLayer(1);
            else if (p < 0.55) setActiveLayer(2);
            else if (p < 0.82) setActiveLayer(3);
            else setActiveLayer(4);
          },
        },
      });

      // -------------------------------------------------------------
      // PHASE 1: Card 01 Reading Hold (t = 0.0 -> 2.2)
      // Only Card 01 is visible (autoAlpha: 1). Cards 02-04 are hidden.
      // -------------------------------------------------------------
      tl.to({}, { duration: 2.2 }, 0.0);

      // -------------------------------------------------------------
      // TRANSITION 1A: Card 01 Exits (t = 2.2 -> 2.6)
      // Card 01 glides upward slightly (-20px) and fades out to autoAlpha: 0.
      // At t = 2.6, Card 01 is completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to(".organic-stack-panel-1", {
        y: -20,
        scale: 0.98,
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.in",
      }, 2.2);

      // -------------------------------------------------------------
      // TRANSITION 1B: Card 02 Enters (t = 2.6 -> 3.0)
      // Card 01 is ALREADY hidden. Card 02 becomes visible and rises into place.
      // ZERO simultaneous visibility: no overlapping text, no blended images!
      // -------------------------------------------------------------
      tl.fromTo(".organic-stack-panel-2",
        { y: 20, scale: 0.98, autoAlpha: 0, pointerEvents: "none" },
        { y: 0, scale: 1, autoAlpha: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" },
        2.6
      );

      // -------------------------------------------------------------
      // PHASE 2: Card 02 Reading Hold (t = 3.0 -> 5.2)
      // Card 02 is 100% visible, centered, stationary, sharp, readable.
      // Cards 01, 03, 04 are completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to({}, { duration: 2.2 }, 3.0);

      // -------------------------------------------------------------
      // TRANSITION 2A: Card 02 Exits (t = 5.2 -> 5.6)
      // -------------------------------------------------------------
      tl.to(".organic-stack-panel-2", {
        y: -20,
        scale: 0.98,
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.in",
      }, 5.2);

      // -------------------------------------------------------------
      // TRANSITION 2B: Card 03 Enters (t = 5.6 -> 6.0)
      // -------------------------------------------------------------
      tl.fromTo(".organic-stack-panel-3",
        { y: 20, scale: 0.98, autoAlpha: 0, pointerEvents: "none" },
        { y: 0, scale: 1, autoAlpha: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" },
        5.6
      );

      // -------------------------------------------------------------
      // PHASE 3: Card 03 Reading Hold (t = 6.0 -> 8.2)
      // Card 03 is 100% visible, centered, stationary, sharp, readable.
      // Cards 01, 02, 04 are completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to({}, { duration: 2.2 }, 6.0);

      // -------------------------------------------------------------
      // TRANSITION 3A: Card 03 Exits (t = 8.2 -> 8.6)
      // -------------------------------------------------------------
      tl.to(".organic-stack-panel-3", {
        y: -20,
        scale: 0.98,
        autoAlpha: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.in",
      }, 8.2);

      // -------------------------------------------------------------
      // TRANSITION 3B: Card 04 Enters (t = 8.6 -> 9.0)
      // -------------------------------------------------------------
      tl.fromTo(".organic-stack-panel-4",
        { y: 20, scale: 0.98, autoAlpha: 0, pointerEvents: "none" },
        { y: 0, scale: 1, autoAlpha: 1, pointerEvents: "auto", duration: 0.4, ease: "power2.out" },
        8.6
      );

      // -------------------------------------------------------------
      // PHASE 4: Card 04 Final Reading Hold (t = 9.0 -> 11.2)
      // Card 04 is 100% visible, centered, stationary, sharp, readable.
      // Cards 01, 02, 03 are completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to({}, { duration: 2.2 }, 9.0);
    }, sectionRef);

    return () => ctx.revert();
  }, [articles]);

  return (
    <section ref={sectionRef} className="organic-stacked-section" aria-label="Organic Stacked Storytelling">
      {/* Curved Section Entrance Boundary */}
      <div className="section-curved-crest" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="crest-svg">
          <path d="M0,60 C480,10 960,10 1440,60 L1440,60 L0,60 Z" fill="#F7F5F0" />
        </svg>
      </div>

      <div className="editorial-fluid-container stacked-container">
        {/* Overhead Natural Header with Live Active Layer Indicator */}
        <div className="stacked-overhead-row">
          <div className="overhead-badge-pill">
            <span className="badge-index">02</span>
            <span className="badge-sep">/</span>
            <span className="badge-text">Layered Storytelling</span>
          </div>

          <span className="overhead-subtitle">
            04 Interconnected Architecture Slabs • Active Layer 0{activeLayer} / 04
          </span>
        </div>

        {/* Viewport Frame for Stacking Panels: Pure white fixed card frame */}
        <div ref={panelsContainerRef} className="organic-stacked-viewport">
          {cards.map((card, idx) => {
            const item = card.article;
            const detailUrl = `/blog-details/${item.slug || item.id}`;

            return (
              <article
                key={card.num}
                className={`organic-stack-panel ${card.panelClass}`}
                data-panel-index={idx + 1}
              >
                <div className="panel-organic-split">
                  <div className="panel-text-block">
                    <div className="panel-meta-header">
                      <span className="panel-large-num">{card.num}</span>
                      <span className="panel-cat-chip">{item.category}</span>
                    </div>

                    <h3 className="panel-title">
                      <Link href={detailUrl}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="panel-desc">
                      {item.description && item.description.length > 170
                        ? `${item.description.slice(0, 165).trim()}...`
                        : item.description}
                    </p>

                    <div className="panel-author-footer">
                      <div className="author-copy">
                        <span className="author-name">By {item.author}</span>
                        <span className="read-time">{item.readTime} min deep read</span>
                      </div>

                      <Link href={detailUrl} className="panel-read-btn">
                        <span>Read Layer</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="panel-media-block">
                    <div className={`media-curved-mask ${card.maskClass}`}>
                      <EditorialImage
                        src={item.image}
                        alt={item.title}
                        fallbackIndex={card.fallbackIndex}
                        category={item.category}
                        className="panel-img"
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogStackedPanels;
