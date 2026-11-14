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
        y: 16,
        scale: 0.99,
        autoAlpha: 0,
        zIndex: 9,
        pointerEvents: "none",
      });
      gsap.set(".organic-stack-panel-3", {
        x: 0,
        y: 16,
        scale: 0.99,
        autoAlpha: 0,
        zIndex: 8,
        pointerEvents: "none",
      });
      gsap.set(".organic-stack-panel-4", {
        x: 0,
        y: 16,
        scale: 0.99,
        autoAlpha: 0,
        zIndex: 7,
        pointerEvents: "none",
      });

      // Master Scroll-Driven Timeline:
      // Pinned at "top 72px" right below the navbar.
      // end: "+=460%" gives ~3,800px of scroll travel for generous, comfortable reading holds.
      // scrub: 1.0 ensures 1:1 tactile, reversible control without inertia lag or jumps.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          pin: true,
          pinSpacing: true,
          start: "top 72px",
          end: "+=460%",
          scrub: 1.0,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.25) setActiveLayer(1);
            else if (p < 0.50) setActiveLayer(2);
            else if (p < 0.75) setActiveLayer(3);
            else setActiveLayer(4);
          },
        },
      });

      // -------------------------------------------------------------
      // PHASE 1: Card 01 Reading Hold (t = 0.0 -> 3.6)
      // Only Card 01 is visible at full opacity 1.0. Cards 02-04 are hidden.
      // -------------------------------------------------------------
      tl.to({}, { duration: 3.6 }, 0.0);

      // -------------------------------------------------------------
      // TRANSITION 1: Card 01 -> Card 02 (t = 3.6 -> 3.9)
      // Card 01 cleanly exits upward as Card 02 rises into full opacity.
      // Fast, clean 0.3s transition ensures cards do not linger in faded states.
      // -------------------------------------------------------------
      tl.to(".organic-stack-panel-1", {
        y: -16,
        scale: 0.99,
        autoAlpha: 0,
        pointerEvents: "none",
        zIndex: 9,
        duration: 0.3,
        ease: "power2.inOut",
      }, 3.6);

      tl.fromTo(".organic-stack-panel-2",
        { y: 16, scale: 0.99, autoAlpha: 0, zIndex: 10, pointerEvents: "none" },
        { y: 0, scale: 1, autoAlpha: 1, zIndex: 10, pointerEvents: "auto", duration: 0.3, ease: "power2.inOut" },
        3.6
      );

      // -------------------------------------------------------------
      // PHASE 2: Card 02 Reading Hold (t = 3.9 -> 7.5)
      // Card 02 is 100% visible, centered, stationary, sharp, full opacity.
      // Cards 01, 03, 04 are completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to({}, { duration: 3.6 }, 3.9);

      // -------------------------------------------------------------
      // TRANSITION 2: Card 02 -> Card 03 (t = 7.5 -> 7.8)
      // -------------------------------------------------------------
      tl.to(".organic-stack-panel-2", {
        y: -16,
        scale: 0.99,
        autoAlpha: 0,
        pointerEvents: "none",
        zIndex: 9,
        duration: 0.3,
        ease: "power2.inOut",
      }, 7.5);

      tl.fromTo(".organic-stack-panel-3",
        { y: 16, scale: 0.99, autoAlpha: 0, zIndex: 10, pointerEvents: "none" },
        { y: 0, scale: 1, autoAlpha: 1, zIndex: 10, pointerEvents: "auto", duration: 0.3, ease: "power2.inOut" },
        7.5
      );

      // -------------------------------------------------------------
      // PHASE 3: Card 03 Reading Hold (t = 7.8 -> 11.4)
      // Card 03 is 100% visible, centered, stationary, sharp, full opacity.
      // Cards 01, 02, 04 are completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to({}, { duration: 3.6 }, 7.8);

      // -------------------------------------------------------------
      // TRANSITION 3: Card 03 -> Card 04 (t = 11.4 -> 11.7)
      // -------------------------------------------------------------
      tl.to(".organic-stack-panel-3", {
        y: -16,
        scale: 0.99,
        autoAlpha: 0,
        pointerEvents: "none",
        zIndex: 9,
        duration: 0.3,
        ease: "power2.inOut",
      }, 11.4);

      tl.fromTo(".organic-stack-panel-4",
        { y: 16, scale: 0.99, autoAlpha: 0, zIndex: 10, pointerEvents: "none" },
        { y: 0, scale: 1, autoAlpha: 1, zIndex: 10, pointerEvents: "auto", duration: 0.3, ease: "power2.inOut" },
        11.4
      );

      // -------------------------------------------------------------
      // PHASE 4: Card 04 Final Reading Hold (t = 11.7 -> 15.3)
      // Card 04 is 100% visible, centered, stationary, sharp, full opacity.
      // Cards 01, 02, 03 are completely hidden (visibility: hidden).
      // -------------------------------------------------------------
      tl.to({}, { duration: 3.6 }, 11.7);
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
