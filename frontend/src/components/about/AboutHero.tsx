"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Layers, Compass, TrendingUp, ShoppingBag, Terminal } from "lucide-react";

const AboutHero: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized offset from center of viewport (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="vt-hero-section" aria-label="About Vastora Tech Hero">
      {/* Ambient Visual Mesh & Grid */}
      <div className="vt-hero-mesh" aria-hidden="true">
        <div
          className="mesh-orb mesh-orb-1"
          style={{
            transform: `translate(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px)`,
          }}
        />
        <div
          className="mesh-orb mesh-orb-2"
          style={{
            transform: `translate(${mouseOffset.x * -8}px, ${mouseOffset.y * -8}px)`,
          }}
        />
        <div className="vt-grid-lines" />
      </div>

      <div className="container vt-hero-container">
        <div className="row align-items-center">
          {/* Left Column: Premium Editorial Typography */}
          <div className="col-lg-7 col-md-12">
            {/* Integrated Breadcrumb Pill Badge */}
            <nav aria-label="Breadcrumb" className="vt-breadcrumb-pill">
              <Link href="/" className="pill-home-link">Home</Link>
              <span className="pill-dot-sep">·</span>
              <span className="pill-current-label">About Vastora Tech</span>
            </nav>

            {/* Main Expressive Headline */}
            <h1 className="vt-hero-title">
              About <span className="vt-title-gradient">Vastora Tech</span>
            </h1>

            {/* Subtitle / Philosophy Statement */}
            <p className="vt-hero-subtext">
              Pioneering high-performance web platforms, enterprise eCommerce ecosystems, and strategic digital experiences engineered for transformative growth.
            </p>
          </div>

          {/* Right Column: Abstract Interactive Engineering Ecosystem */}
          <div className="col-lg-5 col-md-12">
            <div className="vt-hero-visual-wrap">
              <div
                className="vt-orbit-system"
                style={{
                  transform: `translate(${mouseOffset.x * 6}px, ${mouseOffset.y * 6}px)`,
                }}
              >
                {/* Concentric Orbital Rings */}
                <div className="orbit-ring orbit-ring-outer" />
                <div className="orbit-ring orbit-ring-mid" />
                <div className="orbit-ring orbit-ring-inner" />

                {/* Central Technological Core */}
                <div
                  className="orbit-core"
                  style={{
                    transform: `translate(-50%, -50%) translate(${mouseOffset.x * 3}px, ${mouseOffset.y * 3}px)`,
                  }}
                >
                  <span className="core-symbol">V</span>
                  <div className="core-radar" />
                </div>

                {/* Minimal Technology Node: Development */}
                <div
                  className="orbit-node node-node-tech"
                  style={{
                    transform: `translate(${mouseOffset.x * 7}px, ${mouseOffset.y * 5}px)`,
                  }}
                >
                  <span className="node-icon-dot" />
                  <Terminal size={14} className="text-primary me-1" />
                  <span>Development</span>
                </div>

                {/* Minimal Technology Node: Strategy */}
                <div
                  className="orbit-node node-node-strategy"
                  style={{
                    transform: `translate(${mouseOffset.x * -6}px, ${mouseOffset.y * 6}px)`,
                  }}
                >
                  <span className="node-icon-dot" />
                  <Compass size={14} className="text-info me-1" />
                  <span>Strategy</span>
                </div>

                {/* Minimal Technology Node: Commerce */}
                <div
                  className="orbit-node node-node-commerce"
                  style={{
                    transform: `translate(${mouseOffset.x * 8}px, ${mouseOffset.y * -5}px)`,
                  }}
                >
                  <span className="node-icon-dot" />
                  <ShoppingBag size={14} className="text-success me-1" />
                  <span>Commerce</span>
                </div>

                {/* Minimal Technology Node: Growth */}
                <div
                  className="orbit-node node-node-growth"
                  style={{
                    transform: `translate(${mouseOffset.x * -7}px, ${mouseOffset.y * -6}px)`,
                  }}
                >
                  <span className="node-icon-dot" />
                  <TrendingUp size={14} className="text-indigo me-1" />
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
