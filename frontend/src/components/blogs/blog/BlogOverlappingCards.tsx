"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogOverlappingCardsProps {
  articles: EditorialArticle[];
}

const BlogOverlappingCards: React.FC<BlogOverlappingCardsProps> = ({ articles }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const baseCardRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  // Take 3 articles for the overlapping composition
  const mainArticle = articles[1] || articles[0];
  const leftArticle = articles[3] || articles[0];
  const rightArticle = articles[4] || articles[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      });

      if (baseCardRef.current) {
        tl.fromTo(
          baseCardRef.current,
          { y: 80, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );
      }

      if (leftCardRef.current) {
        tl.fromTo(
          leftCardRef.current,
          { x: -90, y: 60, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.7"
        );
      }

      if (rightCardRef.current) {
        tl.fromTo(
          rightCardRef.current,
          { x: 90, y: -40, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.7"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [articles]);

  return (
    <section ref={sectionRef} className="editorial-overlapping-section" aria-label="Overlapping Editorial Composition">
      <div className="editorial-fluid-container">
        {/* Overhead Meta */}
        <div className="overlapping-overhead">
          <span className="over-badge">SPATIAL COMPOSITION</span>
          <span className="over-divider">—</span>
          <span className="over-info">ASYMMETRIC PERSPECTIVES</span>
        </div>

        {/* The Overlapping Stage */}
        <div className="overlapping-stage-container">
          {/* 1. Base Large Anchor Card */}
          <div ref={baseCardRef} className="overlap-base-anchor-card">
            <div className="base-card-split">
              <div className="base-media-frame">
                <Link href={`/blog-details/${mainArticle.slug || mainArticle.id}`}>
                  <EditorialImage
                    src={mainArticle.image}
                    alt={mainArticle.title}
                    fallbackIndex={2}
                    category={mainArticle.category}
                    className="base-core-img"
                  />
                  <div className="base-vignette" />
                </Link>
              </div>

              <div className="base-content-frame">
                <span className="base-cat-tag">{mainArticle.category}</span>
                <h3 className="base-title">
                  <Link href={`/blog-details/${mainArticle.slug || mainArticle.id}`}>
                    {mainArticle.title}
                  </Link>
                </h3>
                <p className="base-desc">{mainArticle.description}</p>
                <Link href={`/blog-details/${mainArticle.slug || mainArticle.id}`} className="base-cta-link">
                  <span>Read Investigation</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* 2. Left Floating Overlapping Card */}
          <div ref={leftCardRef} className="overlap-floating-card card-left-float">
            <div className="floating-inner">
              <span className="float-pill">{leftArticle.category}</span>
              <h4 className="float-title">
                <Link href={`/blog-details/${leftArticle.slug || leftArticle.id}`}>
                  {leftArticle.title}
                </Link>
              </h4>
              <p className="float-excerpt">{leftArticle.description}</p>
              <div className="float-action">
                <span className="float-read-time">{leftArticle.readTime} MIN READ</span>
                <Link href={`/blog-details/${leftArticle.slug || leftArticle.id}`} className="float-arrow-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* 3. Right Floating Overlapping Card */}
          <div ref={rightCardRef} className="overlap-floating-card card-right-float">
            <div className="floating-inner">
              <span className="float-pill">{rightArticle.category}</span>
              <h4 className="float-title">
                <Link href={`/blog-details/${rightArticle.slug || rightArticle.id}`}>
                  {rightArticle.title}
                </Link>
              </h4>
              <p className="float-excerpt">{rightArticle.description}</p>
              <div className="float-action">
                <span className="float-read-time">{rightArticle.readTime} MIN READ</span>
                <Link href={`/blog-details/${rightArticle.slug || rightArticle.id}`} className="float-arrow-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOverlappingCards;

