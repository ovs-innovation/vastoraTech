"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogHorizontalGalleryProps {
  articles: EditorialArticle[];
}

const BlogHorizontalGallery: React.FC<BlogHorizontalGalleryProps> = ({ articles }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 6 articles for the horizontal curated showcase
  const galleryItems = articles.slice(0, 6);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || (typeof window !== "undefined" && window.innerWidth < 1025)) return;

    const sectionEl = sectionRef.current;
    const trackEl = trackRef.current;
    if (!sectionEl || !trackEl) return;

    const calculateDistance = () => trackEl.scrollWidth - window.innerWidth + 200;

    const ctx = gsap.context(() => {
      const distance = calculateDistance();

      // Horizontal gallery scroll animation:
      // - start: "top 72px" docks directly below the fixed navbar (height 72px) so HUD is not clipped
      // - scrub: 1.0 ensures immediate 1:1 tactile responsiveness without sluggish inertia lag
      // - end: distance + 950 expands scroll interval so cards glide at a deliberate, comfortable pace
      // - distance + 200 ensures the final 6th card is completely visible and fully readable before unpinning
      gsap.to(trackEl, {
        x: () => -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          pin: true,
          scrub: 1.0,
          start: "top 72px",
          end: () => `+=${distance + 950}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = Math.round(self.progress * 100);
            setScrollProgress(p);
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [articles]);

  return (
    <section ref={sectionRef} className="organic-horizontal-section" aria-label="Horizontal Editorial Showcase">
      {/* Top Organic Wave Transition */}
      <div className="section-curved-seam-top" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="seam-svg">
          <path d="M0,0 C480,50 960,50 1440,0 L1440,60 L0,60 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Gallery Header Info Strip */}
      <div className="gallery-header-hud">
        <div className="editorial-fluid-container hud-flex-container">
          <div className="hud-badge-group">
            <span className="hud-index">04</span>
            <span className="hud-sep">/</span>
            <span className="hud-label">Horizontal Exploration</span>
            <span className="hud-dash">—</span>
            <span className="hud-desc">Curated Architecture Blueprints</span>
          </div>

          <div className="hud-progress-dock">
            <span className="progress-text">Progress: {scrollProgress}%</span>
            <div className="progress-organic-track">
              <div ref={progressBarRef} className="progress-organic-fill" style={{ width: `${scrollProgress}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Moving Track */}
      <div className="horizontal-gallery-viewport">
        <div ref={trackRef} className="gallery-slider-track">
          {galleryItems.map((item, idx) => {
            const detailUrl = `/blog-details/${item.slug || item.id}`;

            return (
              <div key={item.id || idx} className="gallery-organic-item">
                <article className="gallery-organic-card">
                  {/* Organic Sculpted Media Frame (52% card height) */}
                  <div className="card-organic-media-frame">
                    <Link href={detailUrl} className="media-anchor" aria-label={item.title}>
                      <EditorialImage
                        src={item.image}
                        alt={item.title}
                        fallbackIndex={idx + 2}
                        category={item.category}
                        className="card-photo"
                      />
                    </Link>
                    <span className="media-cat-pill">{item.category}</span>
                  </div>

                  {/* Panel Content Block */}
                  <div className="card-organic-content">
                    <div className="meta-compact-line">
                      <span className="meta-date">{item.publishedAt}</span>
                      <span className="meta-bullet">•</span>
                      <span className="meta-read">{item.readTime} min read</span>
                    </div>

                    <h3 className="card-headline">
                      <Link href={detailUrl}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="card-desc">{item.description}</p>

                    <div className="card-action-bar">
                      <span className="author-name">By {item.author}</span>
                      <Link href={detailUrl} className="card-read-pill">
                        <span>Read Blueprint</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Organic Wave Transition */}
      <div className="section-curved-seam-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="seam-svg">
          <path d="M0,60 C480,10 960,10 1440,60 L1440,0 L0,0 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
};

export default BlogHorizontalGallery;
