"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
  Zap,
  BadgeCheck,
  Clock,
  Award,
  Sparkles,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import CountTwo from "@/components/common/CountTwo";
import about_bg_img from "@/assets/img/bg/about-5-bg-21.jpg";

interface PillDetail {
  title: string;
  detail: string;
}

const missionPills: PillDetail[] = [
  {
    title: "5.2x Faster Page Load Speeds",
    detail: "Next.js ISR + Cloudflare Edge Workers deliver sub-200ms Global TTFB for lightning conversions.",
  },
  {
    title: "High-Converting Checkout Funnels",
    detail: "Single-page frictionless checkouts with automated 1-click buy buttons and predictive upsells.",
  },
  {
    title: "99.99% Architecture SLA Uptime",
    detail: "Containerized multi-region AWS cloud clusters engineered for massive flash-sale concurrency.",
  },
];

const purposePills: PillDetail[] = [
  {
    title: "Headless & Microservices Design",
    detail: "Composable architecture decoupling Shopify Plus backend from dynamic high-speed Next.js frontends.",
  },
  {
    title: "Automated Inventory & CRM Sync",
    detail: "Real-time bidirectional ERP, CRM, and omnichannel WMS inventory data synchronization pipelines.",
  },
  {
    title: "Enterprise-Grade Data Security",
    detail: "PCI-DSS Level 1 compliant architectures with end-to-end encryption and automated pentesting.",
  },
];

// Rich array of modern tech stack for continuous infinite loop marquee
const techStackBadges = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#0284c7" },
  { name: "Shopify Plus", color: "#10b981" },
  { name: "Node.js", color: "#16a34a" },
  { name: "AWS Cloud", color: "#f59e0b" },
  { name: "Stripe", color: "#6366f1" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "GraphQL", color: "#e535ab" },
  { name: "Docker", color: "#2496ed" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Redis", color: "#dc2626" },
  { name: "Vercel", color: "#000000" },
];

const impactStats = [
  {
    id: 1,
    icon: <Clock size={22} strokeWidth={2.2} />,
    cls: "",
    countNumber: 10,
    label: "Years of Experience",
    microBadge: "Industry Leadership",
  },
  {
    id: 2,
    icon: <Award size={22} strokeWidth={2.2} />,
    cls: "pod-cyan",
    iconCls: "icon-cyan",
    countNumber: 2000,
    label: "Successful Projects",
    microBadge: "High-Scale Stores",
  },
  {
    id: 3,
    icon: <Sparkles size={22} strokeWidth={2.2} />,
    cls: "pod-emerald",
    iconCls: "icon-emerald",
    countNumber: 1900,
    label: "Happy Customers",
    microBadge: "98.6% Retention Rate",
  },
  {
    id: 4,
    icon: <Users size={22} strokeWidth={2.2} />,
    cls: "pod-indigo",
    iconCls: "icon-indigo",
    countNumber: 50,
    label: "Team Members",
    microBadge: "In-House Specialists",
  },
];

const AboutAreaHomeFive: React.FC = () => {
  // 3D Parallax Tilt for the Founder Glass Stage
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Interactive Micro-interactions: Expand/Detail on Click
  const [expandedCard, setExpandedCard] = useState<"mission" | "purpose" | null>(null);
  const [activePillIndex, setActivePillIndex] = useState<{ card: string; idx: number } | null>(null);

  // 3D Count-up On-Scroll trigger
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 12,
      y: (x / rect.width) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const toggleExpand = (card: "mission" | "purpose") => {
    setExpandedCard((prev) => (prev === card ? null : card));
  };

  const togglePillDetail = (card: string, idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePillIndex?.card === card && activePillIndex.idx === idx) {
      setActivePillIndex(null);
    } else {
      setActivePillIndex({ card, idx });
    }
  };

  return (
    <section className="about-area-enhanced about-spatial-section" id="about">
      {/* 1. Cinematic 3D Spatial Environment (Cobalt Wave, Silk Curves, Fluted Glass & Sapphire Spheres) */}
      <div className="about-spatial-backdrop" aria-hidden="true">
        {/* Soft flowing porcelain silk waves */}
        <div className="about-silk-waves">
          <svg
            viewBox="0 0 1440 680"
            fill="none"
            preserveAspectRatio="none"
            className="about-silk-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-50 220 C 320 120, 680 280, 1080 180 C 1240 130, 1380 150, 1520 180"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="2"
            />
            <path
              d="M-40 380 C 260 270, 640 460, 1020 340 C 1240 270, 1400 300, 1540 330"
              stroke="rgba(56, 189, 248, 0.25)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Far Left: Architectural Vertical Fluted Glass Striations */}
        <div className="about-fluted-glass" />

        {/* Sweeping Deep Royal Cobalt Wave on Upper Right (wrapping around Founder Showcase) */}
        <div className="about-cobalt-wave">
          <svg
            viewBox="0 0 720 540"
            fill="none"
            className="cobalt-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M180 -40 C 240 140, 360 260, 560 360 C 640 400, 700 440, 780 470 L 780 -40 Z"
              fill="url(#aboutCobaltGrad)"
            />
            <path
              d="M180 -40 C 240 140, 360 260, 560 360 C 640 400, 700 440, 780 470"
              stroke="rgba(255, 255, 255, 0.75)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="aboutCobaltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0052ff" />
                <stop offset="60%" stopColor="#0035b8" />
                <stop offset="100%" stopColor="#001a66" />
              </linearGradient>
            </defs>
          </svg>

          {/* Cyber Grid Texture Overlay across Cobalt Wave */}
          <div className="about-cyber-grid" />
        </div>

        {/* Floating Sapphire Chrome Spheres with 3D Specular Highlights */}
        <div
          className="about-sapphire-sphere sphere-bl"
          style={{
            transform: `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, 0)`,
          }}
        >
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        <div
          className="about-sapphire-sphere sphere-mid"
          style={{
            transform: `translate3d(${tilt.y * 2.2}px, ${-tilt.x * 2.2}px, 0)`,
          }}
        >
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        <div
          className="about-sapphire-sphere sphere-tr-inner"
          style={{
            transform: `translate3d(${tilt.y * 2.8}px, ${-tilt.x * 2.8}px, 0)`,
          }}
        >
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        <div
          className="about-sapphire-sphere sphere-tr-outer"
          style={{
            transform: `translate3d(${tilt.y * 3.4}px, ${-tilt.x * 3.4}px, 0)`,
          }}
        >
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>
      </div>

      <div className="container">
        {/* Main Upper Row: Content + 3D Founder Stage */}
        <div className="row align-items-center">
          {/* Left Column: Eyebrow, Title, Bento Cards, and Tech Stack Strip */}
          <div className="col-lg-7">
            <div className="about-left-content">
              {/* Status Eyebrow Badge */}
              <div className="about-status-badge">
                <span className="badge-pulse-dot" aria-hidden="true">
                  <span className="about-pulse-ring" />
                </span>
                <span className="badge-label">ABOUT VASTORA TECH</span>
              </div>

              {/* Main Headline */}
              <h2 className="about-main-title">
                Building eCommerce Success,{" "}
                <span className="gradient-highlight">Engineered to Scale.</span>
              </h2>

              {/* Subtitle Description */}
              <p className="about-main-desc">
                At Vastora Tech, we empower businesses to launch, scale, and grow their online stores with smart, high-performance eCommerce website development and professional web design and development solutions.
              </p>

              {/* Mission & Purpose Glassmorphic Bento Cards with Micro-interaction: Expand/Detail on Click */}
              <div className="about-bento-grid">
                {/* Bento Card 1: Our Mission */}
                <div
                  className={`about-bento-card ${expandedCard === "mission" ? "card-is-expanded" : ""}`}
                  onClick={() => toggleExpand("mission")}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedCard === "mission"}
                  aria-label="Our Mission card. Click to expand technical details."
                >
                  <span className="card-glass-specular-rim" aria-hidden="true" />
                  <div className="card-top-row">
                    <div className="card-icon-box">
                      <Rocket size={22} strokeWidth={2.2} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="card-micro-tag">ACCELERATED GROWTH</span>
                      <span className="card-expand-indicator" title="Click to view full breakdown">
                        {expandedCard === "mission" ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </span>
                    </div>
                  </div>
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-desc">
                    To empower businesses with smart, scalable eCommerce solutions that drive faster growth and better customer experiences.
                  </p>

                  {/* Smooth Hover State with gradient borders on pills */}
                  <div className="card-pills-list">
                    {missionPills.map((item, idx) => {
                      const isActive = activePillIndex?.card === "mission" && activePillIndex.idx === idx;
                      return (
                        <div
                          key={idx}
                          className={`bento-check-pill ${isActive ? "pill-active" : ""}`}
                          onClick={(e) => togglePillDetail("mission", idx, e)}
                          title="Click to view metric details"
                        >
                          <div className="pill-header-row">
                            <CheckCircle2 size={13} className="pill-check-icon" />
                            <span className="pill-label-text">{item.title}</span>
                          </div>
                          {(expandedCard === "mission" || isActive) && (
                            <div className="pill-expanded-detail">
                              <span>{item.detail}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bento Card 2: Our Purpose */}
                <div
                  className={`about-bento-card ${expandedCard === "purpose" ? "card-is-expanded" : ""}`}
                  onClick={() => toggleExpand("purpose")}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedCard === "purpose"}
                  aria-label="Our Purpose card. Click to expand technical details."
                >
                  <span className="card-glass-specular-rim" aria-hidden="true" />
                  <div className="card-top-row">
                    <div className="card-icon-box icon-cyan">
                      <ShieldCheck size={22} strokeWidth={2.2} />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="card-micro-tag tag-cyan">FUTURE-PROOF TECH</span>
                      <span className="card-expand-indicator" title="Click to view full breakdown">
                        {expandedCard === "purpose" ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </span>
                    </div>
                  </div>
                  <h3 className="card-title">Our Purpose</h3>
                  <p className="card-desc">
                    To be a trusted eCommerce engineering partner helping brands launch, scale, and lead with innovative technology.
                  </p>

                  {/* Smooth Hover State with gradient borders on pills */}
                  <div className="card-pills-list">
                    {purposePills.map((item, idx) => {
                      const isActive = activePillIndex?.card === "purpose" && activePillIndex.idx === idx;
                      return (
                        <div
                          key={idx}
                          className={`bento-check-pill pill-cyan ${isActive ? "pill-active" : ""}`}
                          onClick={(e) => togglePillDetail("purpose", idx, e)}
                          title="Click to view architecture details"
                        >
                          <div className="pill-header-row">
                            <CheckCircle2 size={13} className="pill-check-icon" />
                            <span className="pill-label-text">{item.title}</span>
                          </div>
                          {(expandedCard === "purpose" || isActive) && (
                            <div className="pill-expanded-detail">
                              <span>{item.detail}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modern Engineering Stack Strip: Continuous Infinite Loop Marquee Animation */}
              <div className="about-tech-stack-strip">
                <div className="tech-stack-header">
                  <span className="tech-stack-label">
                    <Zap size={14} color="#0062f5" /> POWERED BY MODERN ENGINEERING STACK
                  </span>
                  <Link href="/portfolio" className="tech-stack-link">
                    Explore Solutions <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Continuous Infinite Loop Marquee Container */}
                <div className="tech-marquee-viewport" aria-label="Modern Engineering Stack Infinite Marquee">
                  <div className="tech-marquee-track">
                    {/* First Track Copy */}
                    <div className="tech-marquee-group">
                      {techStackBadges.map((t, idx) => (
                        <span key={`tech-1-${idx}`} className="tech-badge-chip">
                          <span className="tech-dot" style={{ background: t.color }} />
                          {t.name}
                        </span>
                      ))}
                    </div>
                    {/* Seamless Duplicated Group for Infinite Loop */}
                    <div className="tech-marquee-group" aria-hidden="true">
                      {techStackBadges.map((t, idx) => (
                        <span key={`tech-2-${idx}`} className="tech-badge-chip">
                          <span className="tech-dot" style={{ background: t.color }} />
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Spatial Founder Stage with Glass Frame & Floating Parallax */}
          <div className="col-lg-5">
            <div
              className="about-founder-3d-stage"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="founder-perspective-chassis"
                style={{
                  transform: `perspective(1100px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(
                    2
                  )}deg)`,
                }}
              >
                {/* 3D Glass Orbital Rings around the Founder Stage with Independent Depth */}
                <div
                  className="founder-orbit-ring ring-1"
                  aria-hidden="true"
                  style={{
                    transform: `translateZ(25px) rotateX(${(-tilt.x * 1.3).toFixed(1)}deg) rotateY(${(
                      -tilt.y * 1.3
                    ).toFixed(1)}deg)`,
                  }}
                />
                <div
                  className="founder-orbit-ring ring-2"
                  aria-hidden="true"
                  style={{
                    transform: `translateZ(45px) rotateX(${(tilt.x * 1.5).toFixed(1)}deg) rotateY(${(
                      tilt.y * 1.5
                    ).toFixed(1)}deg)`,
                  }}
                />

                {/* Outer Glassmorphic Frame Chassis */}
                <div className="founder-glass-frame">
                  <span className="frame-glass-specular-edge" aria-hidden="true" />

                  {/* Inner Photo Viewport */}
                  <div className="founder-photo-viewport">
                    <Image
                      src={about_bg_img}
                      alt="Shashank Tripathi - Founder & CEO"
                      priority
                      className="founder-portrait-img"
                    />
                  </div>
                </div>

                {/* Floating 3D Badge 1: Client Rating with Glass Card Hover State */}
                <div className="portrait-glass-badge badge-rating" role="tooltip">
                  <div className="badge-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <div className="badge-text-primary">4.9 / 5 Client Rating</div>
                  <div className="badge-text-secondary">1.8k+ Global Reviews</div>

                  {/* Micro-interactive Glass Detail on Hover */}
                  <div className="badge-hover-glass-detail">
                    <span className="detail-tag">VERIFIED PARTNER</span>
                    <span className="detail-metric">99.4% CSAT Score</span>
                  </div>
                </div>

                {/* Floating 3D Badge 2: Certified Partner with Glass Card Hover State */}
                <div className="portrait-glass-badge badge-certified" role="tooltip">
                  <div className="badge-icon-box">
                    <ShieldCheck size={22} color="#0062f5" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="badge-text-primary">Certified eCommerce Partner</div>
                    <div className="badge-text-secondary">Enterprise Architects</div>
                  </div>

                  {/* Micro-interactive Glass Detail on Hover */}
                  <div className="badge-hover-glass-detail">
                    <span className="detail-tag">TIER-1 ARCHITECTURE</span>
                    <span className="detail-metric">Shopify Plus &amp; AWS Core</span>
                  </div>
                </div>

                {/* Founder Identity Pill (Bottom Center) */}
                <div className="portrait-founder-pill">
                  <BadgeCheck size={16} className="founder-check-icon" />
                  <span className="founder-name">Shashank Tripathi</span>
                  <span className="founder-dot">•</span>
                  <span className="founder-role">FOUNDER &amp; CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3D Impact Metrics Counter Grid (3D Count-up On-Scroll Animation) */}
        <div ref={statsRef} className="about-impact-metrics-row">
          <div className="impact-stats-grid">
            {impactStats.map((item) => (
              <div key={item.id} className={`impact-stat-pod ${item.cls}`}>
                <span className="pod-specular-rim" aria-hidden="true" />
                <div className={`stat-icon-wrapper ${item.iconCls || ""}`}>
                  {item.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number-row">
                    <span className="stat-value">
                      {statsInView ? (
                        <CountTwo number={item.countNumber} />
                      ) : (
                        <span>0</span>
                      )}
                    </span>
                  </div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-micro-badge">{item.microBadge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaHomeFive;
