"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Smartphone,
  Globe,
} from "lucide-react";

const HeroBannerHomeFive = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={sectionRef} className="vt-hero-simple-section fix" aria-label="Hero Banner">
      <div className="container custom-container">
        {/* Centered Hero Header Content */}
        <div className="vt-hero-content-center">
          {/* Eyebrow Pill */}
          <div className="vt-hero-badge">
            <span className="badge-pulse-dot" />
            <span>FULL-STACK WEB & MOBILE APP DEVELOPMENT</span>
          </div>

          {/* Heading: Launch your Online store with us (Black and Blue with Bespoke Styling) */}
          <h1 className="vt-hero-heading">
            Launch your{" "}
            <span className="vt-hero-highlight-phrase">
              <span className="vt-hero-serif-italic">Online store</span>
              <svg
                className="vt-hero-hand-underline"
                viewBox="0 0 280 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 14C70 4 175 3 277 11.5"
                  stroke="#0062F5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            with us
          </h1>

          {/* Subtitle (One-Liner) */}
          <p className="vt-hero-subtitle">
            High-converting eCommerce websites and mobile apps built to scale your business.
          </p>

          {/* CTA Buttons Next */}
          <div className="vt-hero-btn-group">
            <Link href="/contact" className="vt-hero-primary-btn" aria-label="Start Your Project">
              <span>Start Your Project</span>
              <ArrowRight size={17} className="btn-arrow-icon" />
            </Link>

            <Link href="/product/e-commerce-solutions" className="vt-hero-secondary-btn" aria-label="Explore Solutions">
              <Sparkles size={16} className="btn-sparkle-icon" />
              <span>Explore Solutions</span>
            </Link>
          </div>

          {/* Quick Trust Signals */}
          <div className="vt-hero-trust-bar">
            <div className="trust-item">
              <CheckCircle2 size={15} className="trust-check" />
              <span>Custom Web Development</span>
            </div>
            <span className="trust-sep">•</span>
            <div className="trust-item">
              <CheckCircle2 size={15} className="trust-check" />
              <span>iOS & Android Mobile Apps</span>
            </div>
            <span className="trust-sep">•</span>
            <div className="trust-item">
              <CheckCircle2 size={15} className="trust-check" />
              <span>5-Day Fast Track Launch</span>
            </div>
          </div>
        </div>

        {/* Hero Device Showcase: Laptop & Mobile Duo */}
        <div className="vt-device-showcase-stage">
          {/* Floating Pill: Web Development (Top Left) */}
          <div className="vt-floating-badge badge-left-web" aria-hidden="true">
            <div className="badge-icon-box web-icon-box">
              <Code2 size={18} />
            </div>
            <div className="badge-content">
              <span className="badge-micro-label">High-Performance</span>
              <strong className="badge-main-label">Web Development</strong>
            </div>
          </div>

          {/* Laptop Mockup (Centerpiece) */}
          <div className="vt-laptop-mockup-wrap">
            <div className="laptop-screen-bezel">
              <div className="laptop-camera-notch">
                <span className="camera-dot" />
              </div>

              {/* Laptop Browser Header Bar */}
              <div className="laptop-browser-bar">
                <div className="browser-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="browser-url-pill">
                  <Globe size={11} className="url-lock-icon" />
                  <span>https://vastoratech.com/web-development</span>
                </div>
                <div className="browser-badge-live">
                  <span className="live-dot" />
                  <span>LIVE PLATFORM</span>
                </div>
              </div>

              {/* Laptop Screen Content (Website) */}
              <div className="laptop-screen-content">
                <Image
                  src="/assets/img/portfolio/project-portfolio-1.png"
                  alt="Vastora Tech Web Development Platform"
                  width={1400}
                  height={780}
                  className="laptop-display-img"
                  priority={true}
                />
              </div>
            </div>

            {/* Laptop Aluminum Base Shelf */}
            <div className="laptop-base-shelf">
              <div className="base-thumb-notch" />
            </div>
            <div className="laptop-ambient-shadow" aria-hidden="true" />
          </div>

          {/* Smartphone Mockup (Overlapping Front-Right) */}
          <div className="vt-mobile-mockup-wrap">
            <div className="mobile-chassis">
              {/* Dynamic Island / Speaker Pill */}
              <div className="mobile-dynamic-island">
                <span className="island-camera" />
              </div>

              {/* Mobile App Screen Content */}
              <div className="mobile-screen-content">
                <Image
                  src="/assets/img/portfolio/mob1.png"
                  alt="Vastora Tech Mobile App Development"
                  width={391}
                  height={850}
                  className="mobile-display-img"
                  priority={true}
                />
              </div>

              {/* Mobile Home Bar */}
              <div className="mobile-home-indicator" />
            </div>

            {/* Floating Pill Attached to Mobile (App Development) */}
            <div className="vt-mobile-floating-tag" aria-hidden="true">
              <div className="mobile-tag-icon">
                <Smartphone size={16} />
              </div>
              <div className="mobile-tag-text">
                <span className="tag-sub">iOS & Android</span>
                <strong className="tag-title">App Development</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerHomeFive;
