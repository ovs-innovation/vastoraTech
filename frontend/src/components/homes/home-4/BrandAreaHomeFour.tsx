"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OrbitalBrandEcosystem from "./OrbitalBrandEcosystem";

const BrandAreaHomeFour: React.FC = () => {
  return (
    <section
      className="leeep-client-trust-section orbital-ecosystem-section"
      id="partnerships"
      aria-label="Vastora Tech Client Ecosystem"
    >
      {/* 1. Cinematic 3D Spatial Environment (Silk Waves, Architectural Fluted Glass & Cobalt Corner Accents) */}
      <div className="ecosystem-backdrop-environment" aria-hidden="true">
        {/* Soft flowing porcelain silk waves */}
        <div className="porcelain-silk-waves">
          <svg
            viewBox="0 0 1440 680"
            fill="none"
            preserveAspectRatio="none"
            className="silk-waves-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-60 180 C 320 80, 680 240, 1080 120 C 1240 70, 1380 100, 1520 130"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="2"
            />
            <path
              d="M-50 320 C 260 210, 640 410, 1020 280 C 1240 200, 1400 240, 1540 270"
              stroke="rgba(56, 189, 248, 0.28)"
              strokeWidth="2"
            />
            <path
              d="M-40 480 C 380 360, 780 560, 1180 430 C 1320 380, 1440 410, 1550 440"
              stroke="rgba(0, 98, 245, 0.15)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Far Left: Architectural Vertical Fluted Glass Texture */}
        <div className="architectural-fluted-glass" />

        {/* Bottom Left Corner: Rich Royal Cobalt Wave + Floating Sapphire Sphere */}
        <div className="corner-wave-cobalt corner-bottom-left">
          <svg
            className="cobalt-wave-svg"
            viewBox="0 0 420 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-40 380 L -40 160 C 80 120, 210 180, 280 280 C 320 340, 360 380, 420 400 L -40 400 Z"
              fill="url(#cobaltWaveGradientBL)"
            />
            <path
              d="M-40 160 C 80 120, 210 180, 280 280"
              stroke="rgba(255, 255, 255, 0.7)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="cobaltWaveGradientBL" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0052ff" />
                <stop offset="55%" stopColor="#0035b8" />
                <stop offset="100%" stopColor="#001860" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Sapphire Pearl Sphere above bottom-left wave */}
          <div className="floating-sapphire-sphere bl-corner-sphere">
            <span className="sphere-specular-core" />
            <span className="sphere-horizon-reflection" />
            <span className="sphere-fresnel-rim" />
            <span className="sphere-caustic-shadow" />
          </div>
        </div>

        {/* Top Right Corner: Rich Royal Cobalt Wave + Grid lines + Floating Sapphire Sphere + Sparkle */}
        <div className="corner-wave-cobalt corner-top-right">
          <svg
            className="cobalt-wave-svg"
            viewBox="0 0 460 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120 -20 C 180 80, 290 140, 480 160 L 480 -20 Z"
              fill="url(#cobaltWaveGradientTR)"
            />
            <path
              d="M120 -20 C 180 80, 290 140, 480 160"
              stroke="rgba(255, 255, 255, 0.75)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="cobaltWaveGradientTR" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0052ff" />
                <stop offset="60%" stopColor="#0035b8" />
                <stop offset="100%" stopColor="#001550" />
              </linearGradient>
            </defs>
          </svg>

          {/* Cyber Grid Lines over the top-right wave */}
          <div className="corner-cyber-grid" />

          {/* Floating Sapphire Pearl Sphere in top-right */}
          <div className="floating-sapphire-sphere tr-corner-sphere">
            <span className="sphere-specular-core" />
            <span className="sphere-horizon-reflection" />
            <span className="sphere-fresnel-rim" />
            <span className="sphere-caustic-shadow" />
          </div>

          {/* 4-Point Sparkle Star */}
          <div className="corner-sparkle-star">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0 C12 7, 17 12, 24 12 C17 12, 12 17, 12 24 C12 17, 7 12, 0 12 C7 12, 12 7, 12 0 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Open Editorial Header */}
      <div className="container">
        <div className="stage-header text-center">
          <div className="stage-eyebrow-badge">
            <span className="eyebrow-pulse-dot" aria-hidden="true" />
            <span className="eyebrow-text">PARTNERSHIP ECOSYSTEM</span>
          </div>

          <h2 className="leeep-headline">
            Trusted by the <span className="leeep-headline-accent">best</span>
          </h2>
        </div>
      </div>

      {/* 3. Centerpiece: Dynamic 3D Orbital Carousel with Glassmorphic Cards & Center Core */}
      <div className="stage-orbital-ecosystem-wrapper">
        <OrbitalBrandEcosystem />
      </div>

      {/* 4. Action Footer with Glowing Luxury Pill Button */}
      <div className="container">
        <div className="stage-cta-footer text-center">
          <Link href="/portfolio" className="stage-cta-button">
            <span>Explore Client Work</span>
            <ArrowUpRight className="cta-icon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandAreaHomeFour;
