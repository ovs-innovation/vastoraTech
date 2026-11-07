"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  ShoppingCart,
  MoreHorizontal,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import vastoraOrb from "@/assets/img/banner/hero_vastora_pure_logo.png";

const HeroVisualEcosystem: React.FC = () => {
  const [activeBarHover, setActiveBarHover] = useState<number | null>(null);
  const [isSpeedScanning, setIsSpeedScanning] = useState(false);

  const salesBars = [
    { height: 40, day: "Mon", val: "$3.1k" },
    { height: 55, day: "Tue", val: "$4.2k" },
    { height: 35, day: "Wed", val: "$2.8k" },
    { height: 70, day: "Thu", val: "$5.6k" },
    { height: 85, day: "Fri", val: "$6.9k" },
    { height: 100, day: "Sat", val: "$8.2k" },
  ];

  const handleSpeedHover = () => {
    setIsSpeedScanning(true);
    setTimeout(() => setIsSpeedScanning(false), 1600);
  };

  return (
    <div className="hero-3d-ecosystem-wrapper">
      {/* Background Ambient Glow & Light Rays */}
      <div className="hero-3d-backdrop" aria-hidden="true">
        <div className="ambient-radial-glow" />
        <div className="ambient-light-sweep" />
      </div>

      {/* Spacious 3D Interactive Stage */}
      <div className="hero-3d-stage">
        {/* ========================================================
            CENTER CORE: PURE 3D BLUE VASTORA LOGO (UNCONGESTED & PROMINENT)
            ======================================================== */}
        <div className="hero-center-orb-wrap" title="Vastora Tech">
          <div className="orb-glow-halo" aria-hidden="true" />
          <Image
            src={vastoraOrb}
            alt="Vastora 3D Blue Logo"
            width={380}
            height={380}
            className="hero-center-orb-img"
            priority
          />
        </div>

        {/* ========================================================
            1. TOP-LEFT: DEDICATED SOCIAL MEDIA & CREATOR GROWTH CARD
            (High-Priority Feature for Social Media Authority)
            ======================================================== */}
        <Link
          href="/services/social-media-marketing-services"
          className="hero-floating-card card-social-growth float-anim-1"
          title="Explore Social Media Marketing Services"
        >
          <div className="social-growth-header">
            <div className="social-title-wrap">
              <span className="social-pulse-dot" />
              <span className="social-card-tag">Social Growth &amp; Reach</span>
            </div>
            <ArrowUpRight size={13} className="social-arrow-icon" />
          </div>

          <div className="social-headline-row">
            <span className="social-reach-val">15M+</span>
            <span className="social-reach-label">Viral Views</span>
          </div>

          {/* Official Channel Icons Row */}
          <div className="social-channels-row">
            {/* Instagram */}
            <div className="channel-icon-pill insta-pill" title="Instagram Growth">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#ffffff" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.5" stroke="#ffffff" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" />
              </svg>
            </div>

            {/* YouTube */}
            <div className="channel-icon-pill yt-pill" title="YouTube Growth">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffffff">
                <path d="M21.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.6.5A2.7 2.7 0 0 0 2.5 7.2C2 8.8 2 12 2 12s0 3.2.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.6.5 7.6.5 7.6.5s6 0 7.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM10 15V9l5.5 3-5.5 3z" />
              </svg>
            </div>

            {/* Facebook / Meta */}
            <div className="channel-icon-pill fb-pill" title="Meta &amp; Facebook Ads">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffffff">
                <path d="M14 13.5h2.5l.5-3H14v-1.8c0-.8.3-1.4 1.4-1.4H17V4.6c-.5-.1-1.4-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.3v2H8v3h2.5V22h3.5v-8.5z" />
              </svg>
            </div>

            {/* LinkedIn */}
            <div className="channel-icon-pill li-pill" title="LinkedIn B2B">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="#ffffff">
                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5s-2.48-1.12-2.48-2.5c0-1.39 1.11-2.5 2.48-2.5s2.48 1.11 2.48 2.5zm.02 4.5H0V24h5V8zm7.98 0H8.02V24h4.96v-8.4c0-4.48 5.82-4.85 5.82 0V24H24v-10.4c0-8.1-8.73-7.82-11.02-3.82V8z" />
              </svg>
            </div>

            <span className="social-community-tag">500k+ Fans</span>
          </div>
        </Link>

        {/* ========================================================
            2. TOP-RIGHT: TOTAL SALES & ROI CHART
            (Proves E-Commerce & Growth Results)
            ======================================================== */}
        <div className="hero-floating-card card-sales float-anim-3">
          <div className="sales-card-header">
            <span className="sales-label">TOTAL SALES</span>
            <MoreHorizontal size={14} className="sales-more-dots" />
          </div>
          <div className="sales-metric-row">
            <span className="sales-metric-val">$24,780</span>
            <span className="sales-growth-pill">
              <TrendingUp size={10} className="growth-arr" /> +42%
            </span>
          </div>

          {/* Interactive 6-Bar Graph */}
          <div className="sales-bars-graph">
            {salesBars.map((bar, idx) => (
              <div
                key={idx}
                className={`graph-bar ${activeBarHover === idx ? "hovered" : ""} ${
                  idx === 5 ? "active" : ""
                }`}
                style={{ height: `${bar.height}%` }}
                onMouseEnter={() => setActiveBarHover(idx)}
                onMouseLeave={() => setActiveBarHover(null)}
              >
                <div className="bar-tooltip">
                  {bar.day}: {bar.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            3. BOTTOM-LEFT: PAGESPEED 98 SPEED BADGE
            (Proves Engineering Quality & Google Performance)
            ======================================================== */}
        <div
          className="hero-floating-card card-pagespeed float-anim-2"
          onMouseEnter={handleSpeedHover}
        >
          <div className="pagespeed-top-row">
            <div className="pagespeed-icon-badge">
              <TrendingUp size={13} className="speed-arr-ico" />
            </div>
            <span className="pagespeed-title">PageSpeed Score</span>
            <span className="pagespeed-badge-green">Excellent</span>
          </div>
          <div className="pagespeed-score-big">
            98
            {isSpeedScanning && <span className="scanning-pill">Testing...</span>}
          </div>
          <div className="pagespeed-progress-track">
            <div
              className={`pagespeed-progress-fill ${isSpeedScanning ? "is-scanning" : ""}`}
              style={{ width: "98%" }}
            />
          </div>
          <div className="pagespeed-sub-text">0.4s Fast LCP • 100% Mobile Ready</div>
        </div>

        {/* ========================================================
            4. BOTTOM-RIGHT: NEW ORDER NOTIFICATION TOAST
            (Proves Active Verified Transactions)
            ======================================================== */}
        <div className="hero-floating-card card-neworder float-anim-4">
          <div className="order-cart-icon-sq">
            <ShoppingCart size={14} />
          </div>
          <div className="order-details-col">
            <div className="order-head-line">
              <span className="order-id">New Order #4829</span>
              <span className="order-time-tag">Just now</span>
            </div>
            <div className="order-amount-line">
              <span className="order-price-val">$210.00</span>
              <span className="order-verified-tag">
                <CheckCircle2 size={11} className="v-check" /> Stripe Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisualEcosystem;
