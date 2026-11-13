"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";

interface BlogEditorialHeroProps {
  onScrollToContent?: () => void;
}

const BlogEditorialHero: React.FC<BlogEditorialHeroProps> = ({ onScrollToContent }) => {
  const heroRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Instant visual presentation for users with reduced motion preferences
        gsap.set(".hero-word, .hero-manifesto-sub, .hero-action-row, .sculpted-image-mask, .hero-author-pill", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      // 1. Sophisticated Staggered Word-Reveal Animation
      const words = heroRef.current?.querySelectorAll(".hero-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }

      // 2. Subtle Upward Reveal for Editorial Description
      gsap.fromTo(
        ".hero-manifesto-sub",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.45,
        }
      );

      // 3. Upward Reveal for Call-To-Action Row
      gsap.fromTo(
        ".hero-action-row",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          delay: 0.6,
        }
      );

      // 4. Smooth Organic Reveal & Subtle Scale Transition for Hero Artwork
      gsap.fromTo(
        ".sculpted-image-mask",
        { opacity: 0, scale: 1.04 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      // 5. Gentle, Controlled Parallax on Scroll (Natural, reversible, non-rotational)
      if (imageFrameRef.current && heroRef.current) {
        gsap.to(imageFrameRef.current, {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 6. Smooth Entrance Animation for Floating Founder Pill
      gsap.fromTo(
        ".hero-author-pill",
        { y: 28, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.75,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="editorial-organic-hero" aria-label="Vastora Tech Blog Editorial Hero">
      <div className="editorial-fluid-container">
        {/* Top Minimal Editorial Masthead */}
        <div className="hero-editorial-masthead">
          <div className="masthead-left">
            <span className="masthead-dot" aria-hidden="true" />
            <span className="masthead-label">Vastora Tech Journal</span>
            <span className="masthead-sep" aria-hidden="true">|</span>
            <span className="masthead-edition">Issue 28 • Perspectives</span>
          </div>

          <div className="masthead-right">
            <span className="masthead-curated">Curated by Engineering &amp; Design Guild</span>
          </div>
        </div>

        {/* Asymmetric Organic Hero Grid */}
        <div className="hero-organic-grid">
          {/* Left Column: Bold, Expressive Editorial Headline & Context */}
          <div className="hero-text-column">
            <h1 ref={titleRef} className="hero-expressive-title">
              <span className="hero-title-row">
                <span className="word-mask"><span className="hero-word">Ideas</span></span>{" "}
                <span className="word-mask"><span className="hero-word">that</span></span>
              </span>
              <span className="hero-title-row">
                <span className="word-mask"><span className="hero-word">move</span></span>{" "}
                <span className="word-mask"><span className="hero-word">business</span></span>
              </span>
              <span className="hero-title-row">
                <span className="word-mask">
                  <span className="hero-word title-accent-italic">forward.</span>
                </span>
              </span>
            </h1>

            <p className="hero-manifesto-sub">
              Empirical perspectives on headless commerce, systems engineering, conversion psychology, and brand authority from our senior engineering practice.
            </p>

            {/* Call to Action and Curated Blueprint Metadata */}
            <div className="hero-action-row">
              <button
                type="button"
                onClick={onScrollToContent}
                className="hero-organic-cta-btn"
                aria-label="Explore Stories - Scroll to articles"
              >
                <span>Explore Stories</span>
                <span className="btn-organic-dot" aria-hidden="true">
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </button>

              <div className="hero-read-indicator">
                <span className="read-count">12 Curated Blueprints</span>
                <span className="read-time-avg">5–8 min deep reads</span>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Sculpted 3D Digital Commerce Artwork */}
          <div className="hero-image-column">
            <div ref={imageFrameRef} className="hero-sculpted-image-wrap">
              {/* Subtle ambient under-glow for layered natural depth */}
              <div className="hero-visual-aura" aria-hidden="true" />

              {/* Organic Asymmetrical Mask Frame */}
              <div className="sculpted-image-mask">
                <EditorialImage
                  src="/assets/img/blog/editorial-hero-sculpture.jpg"
                  alt="Vastora Tech 3D Digital Commerce & Software Architecture Editorial Artwork"
                  className="hero-lead-photo"
                  loading="eager"
                />
                <span className="sculpted-glass-specular-edge" aria-hidden="true" />
              </div>

              {/* Floating Overlapping Founder Thesis Pill */}
              <div className="hero-author-pill" role="note" aria-label="Featured thesis by Shashank Tripathi">
                <div className="pill-avatar" aria-hidden="true">
                  <span>ST</span>
                </div>
                <div className="pill-info">
                  <span className="pill-name">Shashank Tripathi</span>
                  <span className="pill-role">Founder &amp; Enterprise Architect</span>
                </div>
                <span className="pill-tag">Featured Thesis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Bottom Seam Flowing into Next Section */}
      <div className="hero-organic-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="curve-svg">
          <path
            d="M0,0 C360,45 1080,45 1440,0 L1440,60 L0,60 Z"
            fill="#F7F5F0"
          />
        </svg>
      </div>
    </section>
  );
};

export default BlogEditorialHero;
