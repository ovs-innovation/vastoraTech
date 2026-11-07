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
  BadgeCheck
} from "lucide-react";
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

const AboutAreaHomeFive = () => {
  return (
    <section className="about-area-enhanced">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Content, Bento Cards, and Tech Stack Strip */}
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

              {/* Mission & Purpose Bento Cards */}
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
                        <span>{pill}</span>
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
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Tech Stack Strip */}
              <div className="about-tech-stack-strip">
                <div className="tech-stack-header">
                  <span className="tech-stack-label">
                    <Zap size={14} color="#0062f5" /> Powered by Modern Engineering Stack
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

          {/* Right Column: Framed Leadership Portrait with Floating Badges & Identity */}
          <div className="col-lg-5">
            <div className="about-portrait-wrap">
              <div className="portrait-ambient-glow" aria-hidden="true" />

              <div className="portrait-frame">
                <Image
                  src={about_bg_img}
                  alt="Vastora Tech Leadership"
                  priority
                  className="portrait-img"
                />
              </div>

              {/* Floating Glass Badge 1 (Top Rating) */}
              <div className="portrait-glass-badge badge-rating">
                <div className="badge-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <div className="badge-text-primary">4.9 / 5 Client Rating</div>
                <div className="badge-text-secondary">1.8k+ Global Reviews</div>
              </div>

              {/* Floating Glass Badge 2 (Certified Partner) */}
              <div className="portrait-glass-badge badge-certified">
                <div className="badge-icon-box">
                  <ShieldCheck size={22} color="#0062f5" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="badge-text-primary">Certified eCommerce Partner</div>
                  <div className="badge-text-secondary">Enterprise Architects</div>
                </div>
              </div>

              {/* Founder Identity Pill */}
              <div className="portrait-founder-pill">
                <BadgeCheck size={16} className="founder-check-icon" />
                <span className="founder-name">Shashank Tripathi</span>
                <span className="founder-dot">•</span>
                <span className="founder-role">Founder &amp; CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAreaHomeFive;