"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
    // Dynamic observer to update the activeLayer HUD badge as cards scroll into the sticky dock
    const panels = panelsContainerRef.current?.querySelectorAll(".organic-stack-panel");
    if (!panels || panels.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexStr = entry.target.getAttribute("data-panel-index");
            if (indexStr) {
              const idx = parseInt(indexStr, 10);
              if (!isNaN(idx)) setActiveLayer(idx);
            }
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-90px 0px -40% 0px",
      }
    );

    panels.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
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

        {/* Viewport Frame for Stacking Panels: Smooth natural sticky stacking */}
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
