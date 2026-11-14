"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogEditorialGridProps {
  articles: EditorialArticle[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Intentional variety of organic card spans and image masks
const getOrganicCardVariant = (index: number) => {
  const mod = index % 5;
  if (mod === 0) return { spanClass: "grid-span-hero", maskClass: "mask-pebble-right" };
  if (mod === 1) return { spanClass: "grid-span-tall", maskClass: "mask-arch-vertical" };
  if (mod === 2) return { spanClass: "grid-span-wide", maskClass: "mask-scoop-horizontal" };
  if (mod === 3) return { spanClass: "grid-span-duet-a", maskClass: "mask-pebble-left" };
  return { spanClass: "grid-span-duet-b", maskClass: "mask-contour-smooth" };
};

const BlogEditorialGrid: React.FC<BlogEditorialGridProps> = ({
  articles,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const gridSectionRef = useRef<HTMLElement>(null);
  const cardElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      cardElementsRef.current.forEach((el) => {
        if (!el) return;

        // Controlled, subtle entrance without aggressive fading or washed-out text
        // Cards start at high contrast (opacity: 0.85) and settle at full 1.0 opacity
        // once: true ensures cards remain sharp, legible, and never wash out when scrolling
        gsap.fromTo(
          el,
          { y: 20, opacity: 0.85 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    }, gridSectionRef);

    return () => ctx.revert();
  }, [articles, currentPage]);

  if (!articles || articles.length === 0) {
    return (
      <div className="editorial-empty-state">
        <div className="empty-state-card">
          <span className="empty-icon"><i className="fa-solid fa-compass"></i></span>
          <h3 className="empty-title">No matching articles found</h3>
          <p className="empty-desc">
            Try adjusting your search terms or select another category from the filter bar above.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section ref={gridSectionRef} className="organic-archive-section" aria-label="Curated Editorial Archive">
      <div className="editorial-fluid-container">
        {/* Archive Section Header */}
        <div className="archive-header-dock">
          <div className="archive-eyebrow-pill">
            <span className="badge-index">06</span>
            <span className="badge-sep">/</span>
            <span className="badge-text">Curated Archive</span>
          </div>

          <h2 className="archive-title">
            All Perspectives &amp; Blueprints
          </h2>
        </div>

        {/* 12-Column Asymmetric Organic Grid */}
        <div className="organic-12col-grid">
          {articles.map((item, idx) => {
            const detailUrl = `/blog-details/${item.slug || item.id}`;
            const { spanClass, maskClass } = getOrganicCardVariant(idx);

            return (
              <article
                key={item.id || idx}
                ref={(el) => {
                  cardElementsRef.current[idx] = el;
                }}
                className={`organic-archive-card ${spanClass}`}
              >
                <Link href={detailUrl} className="archive-link-shell">
                  {/* Organic Sculpted Media Frame */}
                  <div className={`card-media-frame ${maskClass}`}>
                    <EditorialImage
                      src={item.image}
                      alt={item.title}
                      fallbackIndex={idx}
                      category={item.category}
                      className="card-photo"
                    />
                    <span className="card-cat-badge">{item.category}</span>
                  </div>

                  {/* Editorial Text Content Frame */}
                  <div className="card-content-frame">
                    <div className="meta-compact-line">
                      <span className="meta-date">{item.publishedAt}</span>
                      <span className="meta-bullet">•</span>
                      <span className="meta-read">{item.readTime} min read</span>
                    </div>

                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.description}</p>

                    <div className="card-footer-row">
                      <span className="author-name">By {item.author}</span>
                      <span className="card-read-action">
                        <span>Read Article</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Pagination Dock: Organic Pill Buttons */}
        {totalPages > 1 && (
          <nav className="organic-pagination-dock" aria-label="Article pagination">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              className="pagination-arrow-pill"
              aria-label="Previous page"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Previous</span>
            </button>

            <div className="pagination-numbers-group">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                const isActive = pageNum === currentPage;

                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => onPageChange(pageNum)}
                    className={`pagination-num-circle ${isActive ? "is-active" : ""}`}
                    aria-label={`Page ${pageNum}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              className="pagination-arrow-pill"
              aria-label="Next page"
            >
              <span>Next</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default BlogEditorialGrid;
