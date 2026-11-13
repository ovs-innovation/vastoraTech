"use client";

import React from "react";
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
} from "lucide-react";
import CountTwo from "@/components/common/CountTwo";
import about_bg_img from "@/assets/img/bg/about-5-bg-21.jpg";

const missionPills = [
  "3.2x Faster Page Load Speeds",
  "High-Converting Checkout Funnels",
  "99.98% Architecture SLA Uptime",
];

const purposePills = [
  "Headless & Microservices Design",
  "Automated Inventory & CRM Sync",
  "Enterprise-Grade Data Security",
];

const techStackBadges = [
  { name: "Next.js", color: "#000000" },
  { name: "React", color: "#0284c7" },
  { name: "Shopify Plus", color: "#10b981" },
  { name: "Node.js", color: "#16a34a" },
  { name: "AWS Cloud", color: "#f59e0b" },
  { name: "Stripe", color: "#6366f1" },
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
        <div className="about-sapphire-sphere sphere-bl">
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        <div className="about-sapphire-sphere sphere-mid">
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        <div className="about-sapphire-sphere sphere-tr-inner">
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        <div className="about-sapphire-sphere sphere-tr-outer">
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>
      </div>

      <div className="container custom-container">
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

              {/* Mission & Purpose Bento Value Cards */}
              <div className="about-bento-grid">
                {/* Bento Card 1: Our Mission */}
                <div className="about-bento-card">
                  <div className="card-top-row">
                    <div className="card-icon-box">
                      <Rocket size={22} strokeWidth={2.2} />
                    </div>
                    <span className="card-micro-tag">ACCELERATED GROWTH</span>
                  </div>
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-desc">
                    To empower businesses with smart, scalable eCommerce solutions that drive faster growth and better customer experiences.
                  </p>

                  <div className="card-pills-list">
                    {missionPills.map((pill, idx) => (
                      <div key={idx} className="bento-check-pill">
                        <CheckCircle2 size={13} className="pill-check-icon" />
                        <span className="pill-label-text">{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bento Card 2: Our Purpose */}
                <div className="about-bento-card">
                  <div className="card-top-row">
                    <div className="card-icon-box icon-cyan">
                      <ShieldCheck size={22} strokeWidth={2.2} />
                    </div>
                    <span className="card-micro-tag tag-cyan">FUTURE-PROOF TECH</span>
                  </div>
                  <h3 className="card-title">Our Purpose</h3>
                  <p className="card-desc">
                    To be a trusted eCommerce engineering partner helping brands launch, scale, and lead with innovative technology.
                  </p>

                  <div className="card-pills-list">
                    {purposePills.map((pill, idx) => (
                      <div key={idx} className="bento-check-pill pill-cyan">
                        <CheckCircle2 size={13} className="pill-check-icon" />
                        <span className="pill-label-text">{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Tech Stack Strip */}
              <div className="about-tech-stack-strip">
                <div className="tech-stack-header">
                  <span className="tech-stack-label">
                    <Zap size={14} color="#0062f5" /> POWERED BY MODERN ENGINEERING STACK
                  </span>
                  <Link href="/product/e-commerce-solutions" className="tech-stack-link">
                    Explore Solutions <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="tech-badges-row">
                  {techStackBadges.map((t, idx) => (
                    <span key={idx} className="tech-badge-chip">
                      <span className="tech-dot" style={{ background: t.color }} />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Leadership Portrait with Orbital Rings & Badges */}
          <div className="col-lg-5">
            <div className="about-founder-3d-stage">
              <div className="founder-perspective-chassis">
                {/* 3D Glass Orbital Neon Rings wrapping cleanly around the Founder Stage */}
                <div className="founder-orbit-ring ring-1" aria-hidden="true" />
                <div className="founder-orbit-ring ring-2" aria-hidden="true" />

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

                {/* Floating 3D Badge 1: Client Rating */}
                <div className="portrait-glass-badge badge-rating">
                  <div className="badge-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <div className="badge-text-primary">4.9 / 5 Client Rating</div>
                  <div className="badge-text-secondary">1.8k+ Global Reviews</div>
                </div>

                {/* Floating 3D Badge 2: Certified Partner */}
                <div className="portrait-glass-badge badge-certified">
                  <div className="badge-icon-box">
                    <ShieldCheck size={22} color="#0062f5" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="badge-text-primary">Certified eCommerce Partner</div>
                    <div className="badge-text-secondary">Enterprise Architects</div>
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

        {/* Bottom Row: 3D Impact Metrics Counter Grid (Seamless inside the same 3D Spatial Canvas) */}
        <div className="about-impact-metrics-row">
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
                      <CountTwo number={item.countNumber} />
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
