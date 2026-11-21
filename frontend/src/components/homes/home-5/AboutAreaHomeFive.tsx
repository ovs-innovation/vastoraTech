"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  ShieldCheck,
  Star,
  ArrowRight,
  BadgeCheck,
  Clock,
  Award,
  Sparkles,
  Users,
} from "lucide-react";
import CountTwo from "@/components/common/CountTwo";
import about_bg_img from "@/assets/img/bg/about-5-bg-21.jpg";

const impactStats = [
  {
    id: 1,
    icon: <Clock size={22} strokeWidth={2.2} />,
    cls: "",
    iconCls: "",
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
    <section className="about-area-enhanced" id="about">
      <div className="container custom-container">
        {/* Main Content & Leadership Showcase */}
        <div className="row align-items-center">
          {/* Left Column: Clean Narrative, Concise Cards, and CTA */}
          <div className="col-lg-7">
            <div className="vt-about-left-content">
              {/* Category Pill */}
              <div className="vt-about-badge">
                <span className="vt-badge-dot" />
                <span className="vt-badge-text">ABOUT VASTORA TECH</span>
              </div>

              {/* Clean Headline */}
              <h2 className="vt-about-title">
                Building eCommerce Success,{" "}
                <span className="vt-about-highlight">Engineered to Scale.</span>
              </h2>

              {/* Concise Subtitle */}
              <p className="vt-about-desc">
                We engineer high-performance eCommerce platforms and bespoke web applications that help ambitious brands convert faster and scale effortlessly.
              </p>

              {/* Two Clean Value Proposition Cards */}
              <div className="vt-about-cards-grid">
                {/* Card 1: High-Converting Stores */}
                <div className="vt-about-card">
                  <div className="vt-card-icon-box">
                    <Rocket size={22} strokeWidth={2.2} />
                  </div>
                  <div className="vt-card-content">
                    <h3 className="vt-card-heading">High-Converting Stores</h3>
                    <p className="vt-card-text">
                      Sub-second page speeds, frictionless checkout funnels, and UX engineered to drive revenue.
                    </p>
                  </div>
                </div>

                {/* Card 2: Scalable Architecture */}
                <div className="vt-about-card">
                  <div className="vt-card-icon-box vt-icon-cyan">
                    <ShieldCheck size={22} strokeWidth={2.2} />
                  </div>
                  <div className="vt-card-content">
                    <h3 className="vt-card-heading">Scalable Architecture</h3>
                    <p className="vt-card-text">
                      Headless microservices, automated inventory &amp; CRM sync, and enterprise-grade data security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Action CTA Row */}
              <div className="vt-about-action-row">
                <Link href="/about" className="vt-about-btn-primary">
                  Learn More About Us <ArrowRight size={15} />
                </Link>
                <div className="vt-about-tech-pills">
                  <span className="vt-tech-pill">Shopify Plus</span>
                  <span className="vt-tech-pill">Next.js &amp; React</span>
                  <span className="vt-tech-pill">Custom Web &amp; Apps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Framed Founder Card */}
          <div className="col-lg-5">
            <div className="vt-founder-stage">
              <div className="vt-founder-card">
                {/* Floating Trust Rating Badge */}
                <div className="vt-founder-rating-badge">
                  <div className="vt-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="vt-rating-text">4.9/5 Rating</span>
                  <span className="vt-rating-sub">• 1.8k+ Reviews</span>
                </div>

                {/* Portrait Photo Viewport */}
                <div className="vt-founder-photo-wrapper">
                  <Image
                    src={about_bg_img}
                    alt="Shashank Tripathi - Founder & CEO"
                    priority
                    className="vt-founder-img"
                  />
                </div>

                {/* Bottom Identity Pill */}
                <div className="vt-founder-nameplate">
                  <div className="vt-founder-name-row">
                    <span className="vt-founder-name">Shashank Tripathi</span>
                    <BadgeCheck size={16} className="vt-verified-badge" />
                  </div>
                  <span className="vt-founder-title">Founder &amp; Chief Executive Officer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Metrics Strip */}
        <div className="about-impact-metrics-row">
          <div className="impact-stats-grid">
            {impactStats.map((item) => (
              <div key={item.id} className={`impact-stat-pod ${item.cls}`}>
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
