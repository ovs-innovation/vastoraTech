"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogFloatingCollageProps {
  articles: EditorialArticle[];
}

const BlogFloatingCollage: React.FC<BlogFloatingCollageProps> = ({ articles }) => {
  const collageRef = useRef<HTMLElement>(null);

  // 3 distinct articles for this art-directed organic collage
  const c1 = articles[4] || articles[0]; // Large Pebble Spread
  const c2 = articles[5] || articles[1] || articles[0]; // Arched Pillar
  const c3 = articles[6] || articles[2] || articles[0]; // Scoop Feature

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = collageRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || (typeof window !== "undefined" && window.innerWidth < 1024)) {
      gsap.set(".collage-sculpture", {
        clearProps: "all",
        opacity: 1,
        visibility: "visible",
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Ensure all cards are 100% visible immediately — never faded or translucent while reading
      gsap.set(".collage-sculpture", { opacity: 1, visibility: "visible" });

      // Smooth organic parallax: subtle opposing drift, restrained and comfortable to read
      // scrub: 1.0 ensures direct tactile responsiveness without inertia lag
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.0,
          invalidateOnRefresh: true,
        },
      });

      // Story A glides gently downwards (restrained amplitude)
      tl.fromTo(
        ".collage-sculpture-a",
        { y: -20 },
        { y: 20, ease: "none" },
        0
      )
      // Story B glides gently upwards
      .fromTo(
        ".collage-sculpture-b",
        { y: 20 },
        { y: -20, ease: "none" },
        0
      )
      // Story C settles forward gracefully
      .fromTo(
        ".collage-sculpture-c",
        { y: 15 },
        { y: -15, ease: "none" },
        0
      );

    }, collageRef);

    return () => ctx.revert();
  }, [articles]);

  return (
    <section ref={collageRef} className="organic-collage-section" aria-label="Spatial Organic Collage">
      <div className="editorial-fluid-container">
        {/* Overhead Badge */}
        <div className="collage-overhead-row">
          <div className="overhead-badge-pill">
            <span className="badge-index">03</span>
            <span className="badge-sep">/</span>
            <span className="badge-text">Organic Perspectives</span>
          </div>

          <span className="overhead-subtitle">
            Asymmetric Layouts &amp; Sculptural Image Masks
          </span>
        </div>

        {/* The Organic Collage Canvas */}
        <div className="organic-collage-canvas">
          {/* ========================================================
              Story A: Large Asymmetric Pebble Spread (Left)
              ======================================================== */}
          <article className="collage-sculpture collage-sculpture-a">
            <Link href={`/blog-details/${c1.slug || c1.id}`} className="sculpture-link">
              <div className="sculpture-pebble-frame">
                <EditorialImage
                  src={c1.image}
                  alt={c1.title}
                  fallbackIndex={4}
                  category={c1.category}
                  className="pebble-photo"
                />
                <span className="sculpture-cat-pill">{c1.category}</span>
              </div>

              <div className="sculpture-overlapping-card">
                <div className="meta-compact-row">
                  <span className="meta-date">{c1.publishedAt}</span>
                  <span className="meta-bullet">•</span>
                  <span className="meta-read">{c1.readTime} min read</span>
                </div>

                <h3 className="sculpture-headline">{c1.title}</h3>
                <p className="sculpture-desc">{c1.description}</p>

                <div className="sculpture-action-row">
                  <span className="author-tag">By {c1.author}</span>
                  <span className="read-arrow-link">
                    <span>Read Article</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* ========================================================
              Story B: Arched Pillar Frame (Top Right)
              ======================================================== */}
          <article className="collage-sculpture collage-sculpture-b">
            <Link href={`/blog-details/${c2.slug || c2.id}`} className="sculpture-link">
              <div className="sculpture-arch-frame">
                <EditorialImage
                  src={c2.image}
                  alt={c2.title}
                  fallbackIndex={5}
                  category={c2.category}
                  className="arch-photo"
                />
                <span className="sculpture-cat-pill">{c2.category}</span>
              </div>

              <div className="sculpture-text-body">
                <div className="meta-compact-row">
                  <span className="meta-date">{c2.publishedAt}</span>
                  <span className="meta-bullet">•</span>
                  <span className="meta-read">{c2.readTime} min read</span>
                </div>

                <h4 className="sculpture-title-md">{c2.title}</h4>
                <p className="sculpture-desc-sm">{c2.description}</p>

                <span className="read-arrow-link">
                  <span>Explore Insight</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          </article>

          {/* ========================================================
              Story C: Horizontal Scoop Feature (Bottom Right)
              ======================================================== */}
          <article className="collage-sculpture collage-sculpture-c">
            <Link href={`/blog-details/${c3.slug || c3.id}`} className="sculpture-link scoop-layout">
              <div className="sculpture-scoop-frame">
                <EditorialImage
                  src={c3.image}
                  alt={c3.title}
                  fallbackIndex={6}
                  category={c3.category}
                  className="scoop-photo"
                />
              </div>

              <div className="sculpture-scoop-content">
                <div className="meta-compact-row">
                  <span className="sculpture-cat-chip">{c3.category}</span>
                  <span className="meta-read">{c3.readTime} min read</span>
                </div>

                <h4 className="sculpture-title-md">{c3.title}</h4>
                <p className="sculpture-desc-sm">{c3.description}</p>

                <div className="sculpture-action-row">
                  <span className="author-tag">By {c3.author}</span>
                  <span className="read-arrow-link">
                    <span>Read Story</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogFloatingCollage;
