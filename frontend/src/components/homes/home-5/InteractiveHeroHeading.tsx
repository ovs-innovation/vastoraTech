"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const PILL_HIGHLIGHTS = [
  "High-Converting Architecture",
  "0.8s Ultra-Fast Load Speed",
  "Headless Next.js & Shopify Plus",
  "Custom Smart Admin Dashboard",
  "100% Full Code Ownership",
];

interface LiquidItemPos {
  el: HTMLElement;
  x: number;
  y: number;
  maxScale: number;
  lift: number;
}

interface InteractiveHeroHeadingProps {
  className?: string;
}

const InteractiveHeroHeading: React.FC<InteractiveHeroHeadingProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Smooth lerp physics and proximity tracking refs
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const rafId = useRef<number | null>(null);
  const itemsCache = useRef<LiquidItemPos[]>([]);

  // Smooth sliding editorial ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTickerIdx((prev) => (prev + 1) % PILL_HIGHLIGHTS.length);
        setIsFading(false);
      }, 300);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Cache element positions relative to container
  const updateItemsCache = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const items: LiquidItemPos[] = [];

    const letterNodes = containerRef.current.querySelectorAll<HTMLElement>(".liquid-letter");
    letterNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      items.push({
        el: node,
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
        maxScale: 1.18,
        lift: -3.2,
      });
    });

    itemsCache.current = items;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateItemsCache();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateItemsCache]);

  const animateDroplet = useCallback(() => {
    if (!containerRef.current) return;

    const ease = 0.16;
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

    const lensX = currentPos.current.x;
    const lensY = currentPos.current.y;

    containerRef.current.style.setProperty("--lens-x", `${lensX.toFixed(2)}px`);
    containerRef.current.style.setProperty("--lens-y", `${lensY.toFixed(2)}px`);

    const R = 38;

    itemsCache.current.forEach((item) => {
      const dist = Math.hypot(item.x - lensX, item.y - lensY);
      if (dist < R && isHoveredRef.current) {
        const intensity = Math.cos((dist / R) * (Math.PI / 2));
        const scale = 1 + (item.maxScale - 1) * intensity;
        const lift = item.lift * intensity;

        item.el.style.transform = `translateY(${lift.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        if (intensity > 0.18) {
          item.el.classList.add("water-zoomed");
        } else {
          item.el.classList.remove("water-zoomed");
        }
      } else {
        if (item.el.classList.contains("water-zoomed") || item.el.style.transform) {
          item.el.style.transform = "";
          item.el.classList.remove("water-zoomed");
        }
      }
    });

    if (isHoveredRef.current) {
      rafId.current = requestAnimationFrame(animateDroplet);
    } else {
      const dx = Math.abs(targetPos.current.x - currentPos.current.x);
      const dy = Math.abs(targetPos.current.y - currentPos.current.y);
      if (dx > 0.1 || dy > 0.1) {
        rafId.current = requestAnimationFrame(animateDroplet);
      } else {
        itemsCache.current.forEach((item) => {
          item.el.style.transform = "";
          item.el.classList.remove("water-zoomed");
        });
        rafId.current = null;
      }
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    targetPos.current = { x, y };
    currentPos.current = { x, y };
    containerRef.current.style.setProperty("--lens-x", `${x.toFixed(2)}px`);
    containerRef.current.style.setProperty("--lens-y", `${y.toFixed(2)}px`);

    isHoveredRef.current = true;
    setIsActive(true);
    updateItemsCache();

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(animateDroplet);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(animateDroplet);
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setIsActive(false);

    itemsCache.current.forEach((item) => {
      item.el.style.transform = "";
      item.el.classList.remove("water-zoomed");
    });
  };

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const renderWordCluster = (word: string, keyPrefix: string) => {
    return (
      <span className="word-cluster" key={keyPrefix}>
        {word.split("").map((char, cIdx) => (
          <span key={`${keyPrefix}-${cIdx}`} className="liquid-letter">
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`hero-left-story-stage ${isActive ? "lens-active" : ""} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 100% Solid Monumental Typography */}
      <h1 className="banner-5-title clean-hero-title">
        <span className="heading-line-wrap">
          {renderWordCluster("Launch", "w-launch")}{" "}
          {renderWordCluster("Your", "w-your")}
        </span>
        <br />
        <span className="heading-line-wrap">
          {renderWordCluster("Ecommerce", "w-ecom")}{" "}
          {renderWordCluster("Store", "w-store")}
        </span>
        <br />
        <span className="heading-line-wrap">
          {renderWordCluster("in", "w-in")}{" "}
          {renderWordCluster("Just", "w-just")}{" "}
          <span className="hero-days-highlight word-cluster">
            <span className="days-text">
              <span className="liquid-letter">5</span>{" "}
              <span className="liquid-letter">D</span>
              <span className="liquid-letter">a</span>
              <span className="liquid-letter">y</span>
              <span className="liquid-letter">s</span>
            </span>
            <svg
              className="hero-brush-stroke"
              viewBox="0 0 178 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="brushStrokeGradMain" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M 6,13.5 C 38,8.5 82,6.5 116,8.5"
                stroke="url(#brushStrokeGradMain)"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
              <path
                d="M 146,11 C 155,11.6 164,12.3 173,13"
                stroke="#3b82f6"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="hero-title-dot" aria-hidden="true" />
        </span>
      </h1>

      {/* Smooth Editorial Ticker Line (No typewriter deletion glitches!) */}
      <div className="hero-editorial-ticker-pill">
        <span className="ticker-spark-icon" aria-hidden="true">✦</span>
        <span className={`ticker-text-slider ${isFading ? "fade-out" : "fade-in"}`}>
          {PILL_HIGHLIGHTS[tickerIdx]}
        </span>
      </div>

      {/* Liquid Water Droplet Follower */}
      <div
        className={`hero-water-droplet ${isActive ? "is-active" : ""}`}
        aria-hidden="true"
      >
        <div className="droplet-surface" />
        <span className="droplet-specular" />
        <span className="droplet-specular-secondary" />
      </div>
    </div>
  );
};

export default InteractiveHeroHeading;
