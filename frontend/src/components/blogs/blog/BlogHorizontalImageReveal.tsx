"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";
import { EditorialArticle } from "@/data/editorial-blog-data";

interface BlogHorizontalImageRevealProps {
  article: EditorialArticle;
}

const BlogHorizontalImageReveal: React.FC<BlogHorizontalImageRevealProps> = ({ article }) => {
  const containerRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !imageFrameRef.current) return;

      // Scrubbed expansion animation: Starts at inset 10% and scale 0.9, expands to full width on scroll
      gsap.fromTo(
        imageFrameRef.current,
        {
          clipPath: "inset(0% 8% 0% 8% round 4px)",
          scale: 0.94,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      // Opposing text slide in
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "top 25%",
              scrub: 0.8,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const detailUrl = `/blog-details/${article.slug || article.id}`;

  return (
    <section ref={containerRef} className="editorial-horizontal-reveal-section" aria-label="Featured Visual Essay">
      <div className="editorial-fluid-container">
        {/* Overhead Indicator */}
        <div className="reveal-overhead-meta">
          <span className="meta-tag-pill">{article.category}</span>
          <span className="meta-divider">—</span>
          <span className="meta-caption">IMMERSED VISUAL ESSAY // {article.editorialNumber}</span>
          <span className="meta-read-time">{article.readTime} MIN READ</span>
        </div>

        {/* Expanding Image Stage */}
        <div ref={imageFrameRef} className="reveal-expanding-stage">
          <Link href={detailUrl} className="stage-image-link" aria-label={article.title}>
            <EditorialImage
              src={article.image}
              alt={article.title}
              fallbackIndex={1}
              category={article.category}
              className="reveal-core-image"
              loading="eager"
            />
            <div className="stage-gradient-vignette" />

            <div className="stage-floating-caption">
              <span className="caption-badge">DEEP DIVE INVESTIGATION</span>
              <span className="caption-arrow"><i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </Link>
        </div>

        {/* Asymmetric Content Entrance */}
        <div ref={textContentRef} className="reveal-text-composition">
          <div className="text-left-lead">
            <h2 className="reveal-article-title">
              <Link href={detailUrl}>
                {article.title}
              </Link>
            </h2>
            <p className="reveal-article-desc">
              {article.description}
            </p>
          </div>

          <div className="text-right-action">
            {article.highlightQuote && (
              <blockquote className="reveal-quote">
                &ldquo;{article.highlightQuote}&rdquo;
              </blockquote>
            )}

            <div className="reveal-author-strip">
              <div className="author-data">
                <span className="author-name">{article.author}</span>
                <span className="author-title">{article.authorRole}</span>
              </div>

              <Link href={detailUrl} className="reveal-read-cta">
                <span>Read Full Essay</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHorizontalImageReveal;

