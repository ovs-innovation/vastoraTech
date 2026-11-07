"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Share2,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  category: string;
  icon: React.ReactNode;
  tintCls: string;
  accentColor: string;
  description: string;
  chips: string[];
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "E-commerce Solutions",
    category: "FLAGSHIP SOLUTION",
    icon: <ShoppingBag size={24} strokeWidth={2.2} />,
    tintCls: "tint-blue",
    accentColor: "#0062f5",
    description:
      "Complete eCommerce website development with bespoke UX, high-converting checkout flows, payment gateway integration, and smart admin dashboards to scale sales effortlessly.",
    chips: ["Shopify Plus", "Custom Cart", "Payment Gateways"],
    link: "/product/e-commerce-solutions",
  },
  {
    id: 2,
    title: "Web Development",
    category: "HIGH-PERFORMANCE",
    icon: <Globe size={24} strokeWidth={2.2} />,
    tintCls: "tint-cyan",
    accentColor: "#0284c7",
    description:
      "Professional web design and full-stack engineering to build fast, responsive, and secure websites. We create robust online platforms engineered for conversion.",
    chips: ["Next.js 14", "React", "Headless CMS"],
    link: "/services/web-development-services",
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "CROSS-PLATFORM",
    icon: <Smartphone size={24} strokeWidth={2.2} />,
    tintCls: "tint-indigo",
    accentColor: "#6366f1",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We build high-speed, scalable, and intuitive mobile experiences tailored to your business goals.",
    chips: ["iOS & Android", "React Native", "Flutter"],
    link: "/services/mobile-app-development-services",
  },
  {
    id: 4,
    title: "UI/UX & Product Design",
    category: "DESIGN SYSTEMS",
    icon: <Palette size={24} strokeWidth={2.2} />,
    tintCls: "tint-violet",
    accentColor: "#8b5cf6",
    description:
      "Human-centric interface design and design systems that turn visitors into loyal buyers through intuitive user journeys, interactive micro-animations, and visual polish.",
    chips: ["Figma Prototypes", "Design Systems", "User Journey"],
    link: "/services/web-development-services",
  },
  {
    id: 5,
    title: "SEO & Speed Optimization",
    category: "SEARCH VISIBILITY",
    icon: <TrendingUp size={24} strokeWidth={2.2} />,
    tintCls: "tint-amber",
    accentColor: "#d97706",
    description:
      "Data-driven SEO audits and performance engineering that propel your search engine rankings, optimize Core Web Vitals, and generate recurring organic traffic.",
    chips: ["Core Web Vitals", "Speed 99+", "Technical Audit"],
    link: "/services/seo-services",
  },
  {
    id: 6,
    title: "Social & Growth Marketing",
    category: "BRAND REACH",
    icon: <Share2 size={24} strokeWidth={2.2} />,
    tintCls: "tint-emerald",
    accentColor: "#10b981",
    description:
      "High-impact digital marketing campaigns that drive brand awareness, targeted customer acquisition, engagement, and sustainable digital visibility.",
    chips: ["Paid Ad Funnels", "Multi-Channel", "Lead Generation"],
    link: "/services/social-media-marketing-services",
  },
];

interface ServicesAreaHomeFourProps {
  style?: boolean;
}

const ServicesAreaHomeFour: React.FC<ServicesAreaHomeFourProps> = ({ style }) => {
  return (
    <section className="services-area-enhanced">
      <div className="container">
        {/* Header */}
        <div className="services-header-wrap">
          <div className="services-status-badge">
            <span className="badge-pulse-dot" aria-hidden="true" />
            <span className="badge-label">END-TO-END CAPABILITIES</span>
          </div>

          <h2 className="services-main-title">
            High-Impact Services,{" "}
            <span className="gradient-highlight">Engineered for Scale.</span>
          </h2>

          <p className="services-main-desc">
            From enterprise eCommerce architectures to modern full-stack web platforms and growth marketing, we build digital solutions that dominate markets and accelerate business revenue.
          </p>
        </div>

        {/* 6-Card Balanced Bento Grid */}
        <div className="services-bento-grid">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="service-card"
              style={{ "--card-accent": item.accentColor } as React.CSSProperties}
            >
              {/* Header row */}
              <div className="card-header-row">
                <div className={`service-icon-box ${item.tintCls}`}>
                  {item.icon}
                </div>
                <span className="service-category-pill">{item.category}</span>
              </div>

              {/* Title & Description */}
              <h3 className="service-title">{item.title}</h3>
              <p className="service-description">{item.description}</p>

              {/* Deliverable Micro-Chips */}
              <div className="service-chips-row">
                {item.chips.map((chip, idx) => (
                  <span key={idx} className="tech-chip">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="service-action-wrap">
                <Link href={item.link} className="service-action-btn">
                  <span>Explore Solution</span>
                  <ArrowRight size={14} className="arrow-ico" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Strip */}
        <div className="services-consultation-strip">
          <div className="consultation-left">
            <div className="consult-sparkle-box">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="consult-heading">
                Have a custom eCommerce or web project in mind?
              </div>
              <p className="consult-subtext">
                Speak directly with our technical architects to map out your architecture and timeline.
              </p>
            </div>
          </div>
          <div className="consultation-right">
            <Link href="/contact" className="consult-btn">
              <span>Book Free Tech Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaHomeFour;