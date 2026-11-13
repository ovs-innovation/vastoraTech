"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

export interface DemoItem {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category?: string;
  images?: string[];
  image?: any;
  demoUrl?: string;
}

const FALLBACK_PORTFOLIO_IMAGES = [
  "/assets/img/portfolio/project-portfolio-1.png",
  "/assets/img/portfolio/project-portfolio-2.png",
  "/assets/img/portfolio/project-portfolio-3.png",
  "/assets/img/portfolio/project-portfolio-4.png",
  "/assets/img/portfolio/project-portfolio-5.png",
  "/assets/img/portfolio/project-portfolio-10.png",
  "/assets/img/portfolio/project-portfolio-6.png",
  "/assets/img/portfolio/project-portfolio-8.png",
  "/assets/img/portfolio/project-portfolio-9.png",
];

interface DemosHorizontalShowcaseProps {
  demos: DemoItem[];
  loading?: boolean;
  heading?: string;
  kicker?: string;
}

const DemosHorizontalShowcase: React.FC<DemosHorizontalShowcaseProps> = ({
  demos,
  loading = false,
  heading = "Our work.",
  kicker = "CURATED CASE STUDIES",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Touch drag swipe tracking
  const touchStartXRef = useRef<number>(0);
  const touchDeltaXRef = useRef<number>(0);

  const total = demos.length;

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Gentle auto-advance every 6 seconds when not hovered
  useEffect(() => {
    if (total <= 1 || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [total, isHovered, handleNext]);

  // Keyboard navigation (Left / Right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaXRef.current = e.touches[0].clientX - touchStartXRef.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaXRef.current < -50) {
      handleNext();
    } else if (touchDeltaXRef.current > 50) {
      handlePrev();
    }
  };

  if (loading) {
    return (
      <div className="cinematic-demos-loading">
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="loading-text">Loading showcase...</p>
      </div>
    );
  }

  if (total === 0) {
    return (
      <div className="cinematic-demos-empty">
        <ShoppingBag size={44} className="empty-icon" />
        <h3 className="empty-title">No projects match your filter</h3>
        <p className="empty-desc">
          Try resetting the category filter or searching with different keywords.
        </p>
      </div>
    );
  }

  // Calculate circular offset distance for 3D stage (-1 = Left, 0 = Center, +1 = Right)
  const getCardPositionDiff = (idx: number): number => {
    let diff = (idx - currentIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const activeNumber = String(currentIndex + 1).padStart(2, "0");
  const totalCount = String(total).padStart(2, "0");
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <section
      className="cinematic-portfolio-section is-continuous-carousel"
      id="cinematic-portfolio-demos"
      aria-label="Our Work Portfolio Showcase"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient Spotlight Glow behind the Center Card */}
      <div className="cinematic-ambient-spotlight" aria-hidden="true" />

      {/* Header Bar: "Our work." with progress counter and navigation arrows */}
      <div className="cinematic-header-bar">
        <div className="header-meta">
          <span className="header-kicker">{kicker}</span>
          <h2 className="header-main-title">{heading}</h2>
        </div>

        <div className="header-controls-wrap">
          <div className="header-progress-wrap" aria-hidden="true">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="progress-counter">
              {activeNumber} / {totalCount}
            </span>
          </div>

          <div className="header-nav-arrows">
            <button
              type="button"
              className="carousel-nav-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous project card"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              className="carousel-nav-btn next-btn"
              onClick={handleNext}
              aria-label="Next project card"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Coverflow Stage with Front, Left, and Right Side Cards */}
      <div className="stage-3d-wrapper">
        <div className="stage-3d-track">
          {demos.map((demo, idx) => {
            const diff = getCardPositionDiff(idx);
            const isCenter = diff === 0;
            const isNext = diff === 1;
            const isPrev = diff === -1;
            const isHidden = Math.abs(diff) >= 2;

            const rawImg = demo.images?.[0] || demo.image;
            const isPrimaryFailed = !rawImg || imageErrors[demo.slug];
            const imgSrc = isPrimaryFailed
              ? FALLBACK_PORTFOLIO_IMAGES[idx % FALLBACK_PORTFOLIO_IMAGES.length]
              : rawImg;

            let positionClass = "is-hidden-card";
            if (isCenter) positionClass = "is-center-card";
            else if (isNext) positionClass = "is-next-card";
            else if (isPrev) positionClass = "is-prev-card";

            return (
              <article
                key={demo.slug || idx}
                className={`clean-stage-card ${positionClass}`}
                data-slug={demo.slug}
                data-diff={diff}
                aria-hidden={isHidden}
                onClick={() => {
                  if (isNext) {
                    handleNext();
                  } else if (isPrev) {
                    handlePrev();
                  } else if (isCenter) {
                    const targetUrl = demo.demoUrl || `/product/e-commerce-solutions/${demo.slug}`;
                    if (targetUrl.startsWith("http")) {
                      window.open(targetUrl, "_blank", "noopener,noreferrer");
                    } else {
                      window.location.href = targetUrl;
                    }
                  }
                }}
              >
                {/* 100% Clean Website Canvas Mockup */}
                <div className="card-mockup-canvas">
                  <Image
                    src={imgSrc}
                    alt={demo.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 880px"
                    className="card-mockup-img"
                    onError={() => {
                      if (!imageErrors[demo.slug]) {
                        setImageErrors((prev) => ({ ...prev, [demo.slug]: true }));
                      }
                    }}
                    priority={isCenter || isNext || isPrev}
                    draggable={false}
                  />
                </div>

                {/* Next Hover Button on Incoming Right Card */}
                {isNext && (
                  <div
                    className="card-hover-button-wrap next-wrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next Project"
                  >
                    <button type="button" className="pure-hover-btn next-btn-pill">
                      <span>Next</span>
                    </button>
                  </div>
                )}

                {/* Prev Hover Button on Incoming Left Card */}
                {isPrev && (
                  <div
                    className="card-hover-button-wrap prev-wrap"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous Project"
                  >
                    <button type="button" className="pure-hover-btn prev-btn-pill">
                      <span>Prev</span>
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DemosHorizontalShowcase;
