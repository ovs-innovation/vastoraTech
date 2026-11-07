"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import executive_photo from "@/assets/img/team/team-61.jpg";

interface ProjectFeatureContent {
  sub_title: string;
  title: string;
  feature_lists: {
    id: number;
    title: string;
    sm_info: string;
    tag: string;
    iconClass: string;
    icon: string;
  }[];
}

const project_feature_content: ProjectFeatureContent = {
  sub_title: "Why Marketing & Branding Matter",
  title: "Transform Your Business with Strategic Digital Marketing",
  feature_lists: [
    {
      id: 1,
      title: "Marketing That Creates Demand",
      sm_info:
        "Reach the right audience with effective ecommerce solutions in India. We help convert visitors into loyal customers.",
      tag: "#DemandGeneration",
      iconClass: "pod-emerald",
      icon: "fa-solid fa-bullhorn",
    },
    {
      id: 2,
      title: "Branding That Builds Trust",
      sm_info:
        "As a professional ecommerce website development company, we create designs that build credibility and trust.",
      tag: "#BrandAuthority",
      iconClass: "pod-blue",
      icon: "fa-solid fa-shield-halved",
    },
    {
      id: 3,
      title: "Growth Strategies That Drive Results",
      sm_info:
        "We are a results-driven SEO services company and digital marketing agency focused on increasing your leads and sales.",
      tag: "#RevenueGrowth",
      iconClass: "pod-violet",
      icon: "fa-solid fa-chart-line-up",
    },
  ],
};

const { sub_title, title, feature_lists } = project_feature_content;

interface ProjectFeaturHomefiveProps {
  style?: boolean;
}

const ProjectFeaturHomefive: React.FC<ProjectFeaturHomefiveProps> = ({ style }) => {
  return (
    <section className="strategic-marketing-section" id="marketing-feature">
      <div className="marketing-ambient-aura"></div>

      <div className="container">
        <div className="marketing-bento-grid">
          {/* Left Column: Framed Executive Visual with Floating Glass Pods */}
          <div className="marketing-visual-stage">
            <div className="portrait-frame-card">
              <div className="portrait-img-wrap">
                <Image
                  src={executive_photo}
                  alt="Marketing & Strategic Branding"
                  priority
                />
              </div>
            </div>

            {/* Floating Glass Pod 1: ROI Growth */}
            <div className="floating-pod-roi">
              <div className="roi-icon-pod">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <div className="roi-text-group">
                <div className="roi-stat-num">+284% ROI</div>
                <div className="roi-stat-label">Verified Campaign Lift</div>
              </div>
            </div>

            {/* Floating Glass Pod 2: Rating & Satisfaction */}
            <div className="floating-pod-rating">
              <div className="rating-stars-pod">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="rating-text-group">
                <div className="rating-score">4.9 / 5 Rating</div>
                <div className="rating-desc">99% Client Retention</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Bento Features */}
          <div className="marketing-content-stage">
            <div className="marketing-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">{sub_title}</span>
            </div>

            <h2 className="marketing-main-title">
              {title.split("with")[0]}with{" "}
              <span className="gradient-highlight">
                {title.split("with")[1] || "Strategic Digital Marketing"}
              </span>
            </h2>

            <p className="marketing-lead-desc">
              We engineer full-funnel digital marketing strategies, conversion-focused
              creative branding, and search dominance that turn first-time clicks into
              long-term enterprise brand loyalty.
            </p>

            {/* 3 Bento Feature Cards */}
            <div className="marketing-features-list">
              {feature_lists.map((item) => (
                <div key={item.id} className="feature-bento-pod">
                  <div className={`feature-icon-pod ${item.iconClass}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="feature-text-block">
                    <div className="feature-title-row">
                      <h3 className="feature-title">{item.title}</h3>
                      <span className="feature-tag-chip">{item.tag}</span>
                    </div>
                    <p className="feature-desc">{item.sm_info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="marketing-action-row">
              <Link href="/about" className="marketing-cta-btn">
                <span>Learn More About Us</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <div className="marketing-guarantee-pill">
                <i className="fa-solid fa-circle-check"></i>
                <span>Data-Driven ROI • Certified Growth Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeaturHomefive;