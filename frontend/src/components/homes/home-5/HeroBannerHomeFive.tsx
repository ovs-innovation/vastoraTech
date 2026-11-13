"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroVisualEcosystem from "./HeroVisualEcosystem";
import CinematicSilkAtmosphere from "./CinematicSilkAtmosphere";

const HeroBannerHomeFive = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Smooth scroll handler when clicking the intentional bottom scroll indicator
  const handleScrollDownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = document.getElementById("partnerships");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="huge-hero-section fix"
    >
      {/* Cinematic 3D Architectural Silk-Wave Atmosphere & Ambient Depth */}
      <CinematicSilkAtmosphere />

      <div className="container custom-container h-100">
        <div className="row align-items-center h-100 huge-hero-row">
          {/* Left Column: Bold Monumental Agency Typography & Luxury CTAs */}
          <div className="col-xl-6 col-lg-6 col-md-12 huge-hero-left-col">
            <div className="huge-hero-content">
              {/* Category Eyebrow Pill with Live Radar Beacon */}
              <div className="huge-agency-eyebrow">
                <span className="eyebrow-beacon" aria-hidden="true">
                  <span className="beacon-ping" />
                  <span className="beacon-dot" />
                </span>
                <span className="eyebrow-text">BESPOKE COMMERCE ARCHITECTURE</span>
                <span className="eyebrow-divider" aria-hidden="true" />
                <span className="eyebrow-tag" aria-hidden="true">FLAGSHIP GRADE</span>
              </div>

              {/* Monumental Editorial Headline with Kinetic Light Sweep & High Attraction */}
              <h1 className="huge-monumental-headline">
                <span className="headline-row row-first">Launch Your</span>
                <span className="headline-row row-second">
                  <span className="headline-shimmer-wrap">
                    <span className="headline-text-gradient">Ecommerce Store</span>
                    <span className="headline-ambient-sheen" aria-hidden="true" />
                  </span>
                </span>
                <span className="headline-row row-third">
                  <span className="word-in-just">in Just</span>{" "}
                  <span className="headline-badge-accent">
                    <span className="headline-gradient-days">5 Days</span>
                    <span className="headline-accent-period">.</span>
                  </span>
                </span>
              </h1>

              {/* High-Impact Luxury Agency CTA Row */}
              <div className="huge-hero-cta-group">
                <Link
                  href="/contact"
                  className="huge-primary-luxury-btn"
                  aria-label="Start Your Ecommerce Project with Vastora Tech"
                >
                  <span className="btn-shimmer-sweep" aria-hidden="true" />
                  <span className="btn-status-beacon" aria-hidden="true">
                    <span className="beacon-core" />
                  </span>
                  <span className="btn-title-text">Start Your Project</span>
                  <span className="btn-arrow-capsule" aria-hidden="true">
                    <ArrowRight size={16} className="arrow-icon" />
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  className="huge-secondary-luxury-btn"
                  aria-label="Explore Flagship Case Studies"
                >
                  <Sparkles size={15} className="secondary-sparkle-ico" />
                  <span className="secondary-title-text">View Flagships</span>
                  <span className="secondary-count-tag" aria-hidden="true">34+</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Freestanding 3D Monolith Sculpture & Spatial Stage */}
          <div className="col-xl-6 col-lg-6 col-md-12 huge-hero-right-col">
            <HeroVisualEcosystem />
          </div>
        </div>
      </div>

      {/* Sleek Intentional Hero Scroll Down Indicator (Fixed Safe Bottom Position - Zero Overlap) */}
      <div
        className="hero-scroll-indicator-pill"
        onClick={handleScrollDownClick}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to exploration content"
      >
        <div className="scroll-pill-chassis">
          <span className="scroll-pill-dot" />
          <span className="scroll-pill-text">Scroll down</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerHomeFive;
