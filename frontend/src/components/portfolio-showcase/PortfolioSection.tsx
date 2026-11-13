"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolio_data_2 from "@/data/portfolio-data-2";
import HorizontalProjectTrack from "./HorizontalProjectTrack";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PortfolioSectionProps {
  heading?: string;
  kicker?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  heading = "Our work.",
  kicker = "FEATURED CASE STUDIES",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // GSAP context for clean garbage collection & no memory leaks
    const ctx = gsap.context(() => {
      // Only pin and scrub on desktop & tablet screens (>= 768px)
      if (window.innerWidth >= 768 && containerRef.current && trackRef.current) {
        const track = trackRef.current;
        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
      }
    }, containerRef);

    // Refresh after DOM and images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", checkMobile);
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <section
      className={`cinematic-portfolio-section ${isMobile ? "is-mobile-touch" : "is-desktop-pinned"}`}
      ref={containerRef}
      id="cinematic-portfolio"
      style={{ backgroundColor: "#296cb3" }}
      aria-label="Our Work Portfolio Showcase"
    >
      {/* Top Header Floating Overlay (stays pinned with section) */}
      <div className="cinematic-header-bar">
        <div className="header-meta">
          <span className="header-kicker">{kicker}</span>
          <h2 className="header-main-title">{heading}</h2>
        </div>

        {/* Minimalist Progress Meter */}
        <div className="header-progress-wrap" aria-hidden="true">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="progress-counter">
            {String(Math.min(portfolio_data_2.length, Math.max(1, Math.ceil(scrollProgress * portfolio_data_2.length)))).padStart(2, "0")}{" "}
            / {String(portfolio_data_2.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Horizontal Scrolling Track Viewport */}
      <div className="cinematic-viewport-wrapper">
        <HorizontalProjectTrack
          projects={portfolio_data_2}
          trackRef={trackRef}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
