"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

interface ShowcaseItem {
  id: string;
  num: string;
  title: string;
  category: string;
  subtitle: string;
  tags: string[];
  image: string;
  client?: string;
  metric?: string;
  link: string;
}

const servicesItems: ShowcaseItem[] = [
  {
    id: "ecom",
    num: "01",
    title: "E-Commerce Platforms & Headless Architecture",
    category: "FLAGSHIP ARCHITECTURE",
    subtitle: "Custom high-speed Shopify Plus, Next.js commerce, and multi-vendor systems designed for record conversion rates.",
    tags: ["Shopify Plus", "Next.js 14", "Custom Cart Flow", "Payment Gateways"],
    image: "/assets/img/portfolio/project-portfolio-1.png",
    client: "Featured: TossMart E-Commerce Platform",
    metric: "+185% Sales Growth",
    link: "/product/e-commerce-solutions",
  },
  {
    id: "web-dev",
    num: "02",
    title: "Enterprise Full-Stack Web Development",
    category: "HIGH-PERFORMANCE",
    subtitle: "Scalable digital ecosystems, cloud microservices, and interactive web experiences engineered for 99+ speed scores.",
    tags: ["React & Node.js", "Serverless", "Tailwind & SCSS", "API Architecture"],
    image: "/assets/img/portfolio/project-portfolio-2.png",
    client: "Featured: CandyFloss Digital Experience",
    metric: "0.8s Page Load Speed",
    link: "/services/web-development-services",
  },
  {
    id: "mobile",
    num: "03",
    title: "Native & Cross-Platform Mobile Applications",
    category: "MOBILE ECOSYSTEMS",
    subtitle: "Intuitive iOS and Android apps with biometric auth, push notifications, offline sync, and frictionless user flows.",
    tags: ["React Native", "Flutter", "iOS & Android", "Realtime Sync"],
    image: "/assets/img/portfolio/mob1.png",
    client: "Featured: TossMart Mobile Shopping App",
    metric: "4.9/5 User Rating",
    link: "/services/mobile-app-development-services",
  },
  {
    id: "uiux",
    num: "04",
    title: "Human-Centric UI/UX & Design Systems",
    category: "AWARDS & USABILITY",
    subtitle: "World-class interface design, design tokens, micro-interactions, and conversion-funnel psychology.",
    tags: ["Figma Design System", "Wireframing", "A/B Conversion UX", "Prototyping"],
    image: "/assets/img/portfolio/project-portfolio-4.png",
    client: "Featured: Global FinTech Dashboard",
    metric: "3.2x User Engagement",
    link: "/services/web-development-services",
  },
  {
    id: "seo-speed",
    num: "05",
    title: "Technical SEO & Core Web Vitals Optimization",
    category: "ORGANIC SCALE",
    subtitle: "Data-driven SEO dominance, structured schema markup, and Core Web Vitals engineering to outrank competitors.",
    tags: ["Core Web Vitals", "Speed 99+", "Schema Markup", "Screaming Frog Audit"],
    image: "/assets/img/portfolio/project-portfolio-6.png",
    client: "Featured: Multi-Regional Healthcare Portal",
    metric: "#1 Ranking Keywords",
    link: "/services/seo-services",
  },
  {
    id: "growth",
    num: "06",
    title: "Social Growth & High-ROI Performance Marketing",
    category: "REVENUE ACCELERATION",
    subtitle: "Targeted full-funnel acquisition, paid ad scaling, and retention marketing campaigns delivering predictable ROAS.",
    tags: ["Meta & Google Ads", "Funnel Tracking", "Email Automation", "ROAS 4.8x"],
    image: "/assets/img/portfolio/project-portfolio-10.png",
    client: "Featured: D2C Fashion Brand Scale",
    metric: "4.8x Verified ROAS",
    link: "/services/social-media-marketing-services",
  },
];

const projectItems: ShowcaseItem[] = [
  {
    id: "p1",
    num: "01",
    title: "TossMart — Smart Electronics & Gadgets Store",
    category: "E-COMMERCE PLATFORM",
    subtitle: "Comprehensive modern e-commerce platform with automated logistics and instantaneous checkout flows.",
    tags: ["E-Commerce", "Instant Checkout", "Next.js", "Payment Gateways"],
    image: "/assets/img/portfolio/project-portfolio-1.png",
    client: "Live Production Store",
    metric: "15,000+ Monthly Orders",
    link: "https://tossmart.com/",
  },
  {
    id: "p2",
    num: "02",
    title: "CandyFloss — Luxury Beauty & Salon Booking",
    category: "BEAUTY & WELLNESS",
    subtitle: "Bespoke beauty booking and product retail storefront with real-time therapist scheduling.",
    tags: ["Luxury UI/UX", "Appointment Engine", "Mobile-First"],
    image: "/assets/img/portfolio/project-portfolio-2.png",
    client: "CandyFloss Beauty Palace",
    metric: "98% Satisfaction Rate",
    link: "https://candyflossbeautypalace.com/",
  },
  {
    id: "p3",
    num: "03",
    title: "The Learn Skills — Global EdTech Platform",
    category: "EDTECH ECOSYSTEM",
    subtitle: "Interactive learning management system with live webinars, student dashboards, and certification tests.",
    tags: ["LMS", "Video Streaming", "Student Portal"],
    image: "/assets/img/portfolio/project-portfolio-3.png",
    client: "The Learn Skills EdTech",
    metric: "50,000+ Enrolled Students",
    link: "https://thelearnskills.com/",
  },
  {
    id: "p4",
    num: "04",
    title: "EstateNest — High-End Real Estate Portal",
    category: "PROP-TECH",
    subtitle: "Virtual property walk-throughs, 3D floor plans, and intelligent mortgage calculators.",
    tags: ["Virtual Tour", "Map Integration", "Lead CRM"],
    image: "/assets/img/portfolio/project-portfolio-4.png",
    client: "EstateNest Properties",
    metric: "$42M Properties Listed",
    link: "/portfolio",
  },
];

interface HugeHoverShowcaseProps {
  titleBadge?: string;
  heading?: string;
  highlightText?: string;
  description?: string;
  initialMode?: "services" | "projects";
}

const HugeHoverShowcase: React.FC<HugeHoverShowcaseProps> = ({
  titleBadge = "Awwwards Benchmark Feature",
  heading = "Next-Generation Capabilities,",
  highlightText = "Revealed with Precision.",
  description = "Inspired by Huge Inc & Basic Agency — Hover over any capability to instantly inspect architecture visuals, client metrics, and tech stacks.",
  initialMode = "services",
}) => {
  const [activeTab, setActiveTab] = useState<"services" | "projects">(initialMode);
  const [hoveredItem, setHoveredItem] = useState<ShowcaseItem | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringList, setIsHoveringList] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentList = activeTab === "services" ? servicesItems : projectItems;

  useEffect(() => {
    // Detect touch-only devices to optimize mobile UX
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnterItem = (item: ShowcaseItem) => {
    setHoveredItem(item);
    setIsHoveringList(true);
  };

  const handleMouseLeaveList = () => {
    setIsHoveringList(false);
    setHoveredItem(null);
  };

  return (
    <section
      className="huge-hover-showcase-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveList}
    >
      <div className="ambient-background-glow" aria-hidden="true" />

      <div className="container">
        {/* Header with Switcher */}
        <div className="showcase-header-wrap">
          <div className="header-left">
            <div className="huge-badge">
              <span className="huge-badge-dot" />
              <span className="huge-badge-text">{titleBadge}</span>
            </div>
            <h2 className="huge-title">
              {heading}{" "}
              <span className="gradient-highlight">{highlightText}</span>
            </h2>
            <p className="huge-desc">{description}</p>
          </div>

          <div className="header-right">
            {/* Mode Switcher Tabs */}
            <div className="mode-switcher" role="tablist">
              <button
                type="button"
                className={`switch-tab ${activeTab === "services" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("services");
                  setHoveredItem(null);
                }}
              >
                <Layers size={15} />
                <span>Core Services</span>
              </button>
              <button
                type="button"
                className={`switch-tab ${activeTab === "projects" ? "active" : ""}`}
                onClick={() => {
                  setActiveTab("projects");
                  setHoveredItem(null);
                }}
              >
                <Sparkles size={15} />
                <span>Featured Works</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Cursor-Follower Preview Box (Desktop) */}
        {!isTouchDevice && hoveredItem && (
          <div
            className={`huge-floating-preview ${isHoveringList ? "visible" : ""}`}
            style={{
              transform: `translate3d(${cursorPos.x + 30}px, ${cursorPos.y - 120}px, 0)`,
            }}
          >
            <div className="preview-card-inner">
              <div className="preview-image-wrap">
                <Image
                  src={hoveredItem.image}
                  alt={hoveredItem.title}
                  width={340}
                  height={220}
                  className="preview-img"
                  priority
                />
                <div className="preview-overlay" />
              </div>
              <div className="preview-meta-pill">
                <div className="meta-badge-text">
                  <Zap size={13} className="text-amber-400" />
                  <span>{hoveredItem.metric || hoveredItem.category}</span>
                </div>
                <div className="meta-client-text">{hoveredItem.client}</div>
              </div>
            </div>
          </div>
        )}

        {/* The Interactive List */}
        <div
          className={`huge-interactive-list ${isHoveringList ? "has-active-hover" : ""}`}
          onMouseEnter={() => setIsHoveringList(true)}
        >
          {currentList.map((item) => {
            const isCurrent = hoveredItem?.id === item.id;
            return (
              <div
                key={item.id}
                className={`huge-list-row ${isCurrent ? "is-active" : ""}`}
                onMouseEnter={() => handleMouseEnterItem(item)}
              >
                <Link href={item.link} className="huge-row-link">
                  {/* Left Column: Number & Category Badge */}
                  <div className="row-col-num">
                    <span className="item-number">{item.num}</span>
                    <span className="item-category-pill">{item.category}</span>
                  </div>

                  {/* Center Column: Big Bold Title & Micro-tags */}
                  <div className="row-col-main">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-subtitle">{item.subtitle}</p>

                    <div className="item-tags-row">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="micro-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Metric & Arrow */}
                  <div className="row-col-action">
                    {item.metric && (
                      <div className="item-metric-badge">
                        <ShieldCheck size={14} className="metric-icon" />
                        <span>{item.metric}</span>
                      </div>
                    )}
                    <div className="action-circle-btn" aria-label="Explore Details">
                      <ArrowUpRight size={20} className="arrow-icon" />
                    </div>
                  </div>
                </Link>

                {/* Mobile Inline Preview (Shown only on small screens) */}
                <div className="mobile-inline-preview">
                  <div className="mobile-img-box">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={180}
                      className="mobile-img"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Agency Guarantee Strip */}
        <div className="huge-bottom-strip">
          <div className="strip-item">
            <span className="dot-green" />
            <span className="strip-text">
              High-Speed Next.js 14 & Headless Commerce Stack
            </span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <span className="dot-blue" />
            <span className="strip-text">
              99+ Google Core Web Vitals Guaranteed
            </span>
          </div>
          <div className="strip-divider" />
          <div className="strip-item">
            <span className="dot-violet" />
            <span className="strip-text">
              Bespoke UI/UX Approved by Awwwards Standards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HugeHoverShowcase;

