'use client'

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import portfolio_data_2 from "@/data/portfolio-data-2";
import {
  ExternalLink,
  Lock,
  Monitor,
  Smartphone,
  Search,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  RotateCw,
  FolderKanban,
  Check
} from "lucide-react";

// Initial items per page
const perView = 6;

// All unique categories
const categories = ["All", ...Array.from(new Set(portfolio_data_2.map((item) => item.category)))];

const getCategoryClass = (category: string) => {
  switch (category.toLowerCase()) {
    case "e-commerce":
      return "badge-ecommerce";
    case "beauty":
      return "badge-beauty";
    case "e-learning":
      return "badge-elearning";
    case "hotel booking":
      return "badge-hotel";
    case "travel":
      return "badge-travel";
    case "real estate":
      return "badge-realestate";
    case "engineering":
      return "badge-engineering";
    case "health":
      return "badge-health";
    default:
      return "badge-default";
  }
};

const getDomain = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const PortfolioAreaTwo = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [next, setNext] = useState(perView);
  const [globalView, setGlobalView] = useState<"desktop" | "mobile">("desktop");
  const [cardOverrides, setCardOverrides] = useState<Record<number, "desktop" | "mobile">>({});

  // Filter items based on active category and search query
  const filteredItems = useMemo(() => {
    return portfolio_data_2.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.sm_des.toLowerCase().includes(q) ||
        item.tags?.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Deduplicate items just in case
  const uniqueItems = useMemo(() => {
    return Array.from(new Map(filteredItems.map((item) => [item.id + item.title, item])).values());
  }, [filteredItems]);

  // Displayed slice
  const displayedItems = uniqueItems.slice(0, next);

  // Category switch handler
  const handleCategorySelect = (cate: string) => {
    setActiveCategory(cate);
    setNext(perView);
  };

  // Load more handler
  const handleLoadMore = () => {
    setNext((prev) => prev + 3);
  };

  // Toggle single card view between desktop & mobile
  const toggleCardDeviceView = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCardOverrides((prev) => {
      const current = prev[id] || globalView;
      return {
        ...prev,
        [id]: current === "desktop" ? "mobile" : "desktop",
      };
    });
  };

  // Change global view
  const handleGlobalViewChange = (mode: "desktop" | "mobile") => {
    setGlobalView(mode);
    setCardOverrides({});
  };

  return (
    <section className="portfolio-redesign-wrapper">
      <div className="container">
        {/* ========================================================
            HERO / HEADER SECTION
            ======================================================== */}
        <div className="portfolio-hero-header">
          {/* Breadcrumb Navigation */}
          <div className="portfolio-breadcrumb">
            <Link href="/">Home</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">Projects</span>
          </div>

          {/* Eyebrow Badge */}
          <div>
            <div className="portfolio-eyebrow-badge">
              <span className="badge-dot" />
              <span className="badge-text">Case Studies &amp; Portfolio</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="portfolio-main-title">
            Our <span className="gradient-highlight">Case Studies</span>
          </h1>

          {/* Subtitle */}
          <h2 className="portfolio-main-subtitle">
            We have an experienced team of production and inspection <br className="d-none d-md-inline" /> personnel to ensure quality.
          </h2>

          {/* Agency Quality Trust Badges */}
          <div className="portfolio-trust-strip">
            <div className="trust-strip-item">
              <CheckCircle2 className="trust-check-icon" />
              <span>100% Custom Engineering</span>
            </div>
            <div className="trust-strip-item">
              <CheckCircle2 className="trust-check-icon" />
              <span>Mobile &amp; Desktop Optimized</span>
            </div>
            <div className="trust-strip-item">
              <CheckCircle2 className="trust-check-icon" />
              <span>Real-World Production Deployments</span>
            </div>
            <div className="trust-strip-item">
              <CheckCircle2 className="trust-check-icon" />
              <span>High-Performance Architectures</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            CONTROLS & FILTER BAR
            ======================================================== */}
        <div className="portfolio-controls-bar">
          {/* Top Row: Search & Global Device Switcher */}
          <div className="controls-utility-row">
            {/* Instant Search */}
            <div className="search-box-wrap">
              <Search className="search-icon-svg" size={16} />
              <input
                type="text"
                className="portfolio-search-input"
                placeholder="Search case studies, industries or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Global Device Preview Switcher */}
            <div className="device-switcher-global">
              <span className="switcher-label">Preview Mode:</span>
              <button
                type="button"
                className={`device-switch-btn ${globalView === "desktop" ? "active" : ""}`}
                onClick={() => handleGlobalViewChange("desktop")}
              >
                <Monitor size={14} />
                <span>Desktop</span>
              </button>
              <button
                type="button"
                className={`device-switch-btn ${globalView === "mobile" ? "active" : ""}`}
                onClick={() => handleGlobalViewChange("mobile")}
              >
                <Smartphone size={14} />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Filter Pills */}
          <div className="category-pills-row">
            {categories.map((cate, i) => {
              const count =
                cate === "All"
                  ? portfolio_data_2.length
                  : portfolio_data_2.filter((item) => item.category === cate).length;

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleCategorySelect(cate)}
                  className={`category-filter-pill ${cate === activeCategory ? "active" : ""}`}
                >
                  <span>{cate}</span>
                  <span className="pill-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PROJECT CARDS SHOWCASE GRID
            ======================================================== */}
        {displayedItems.length > 0 ? (
          <div className="portfolio-grid-row">
            {displayedItems.map((item) => {
              const currentMode = cardOverrides[item.id] || globalView;
              const domain = getDomain(item.link);
              const badgeClass = getCategoryClass(item.category);

              return (
                <div
                  key={item.id + item.title}
                  className="col-lg-4 col-md-6 col-12 portfolio-card-col"
                >
                  <div className="portfolio-card">
                    {/* Browser Chrome Header Mockup */}
                    <div className="card-browser-bar">
                      <div className="mac-window-controls" aria-hidden="true">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                      </div>

                      <div className="browser-address-pill" title={item.link}>
                        <Lock className="lock-icon-svg" />
                        <span className="address-text">{domain}</span>
                      </div>

                      {/* Card-level Device Preview Switcher */}
                      <button
                        type="button"
                        className={`card-device-toggle ${currentMode === "mobile" ? "is-mobile" : ""}`}
                        onClick={(e) => toggleCardDeviceView(e, item.id)}
                        title={`Switch to ${currentMode === "desktop" ? "Mobile" : "Desktop"} view`}
                        aria-label="Toggle device view"
                      >
                        {currentMode === "desktop" ? (
                          <>
                            <Smartphone />
                            <span>Mobile</span>
                          </>
                        ) : (
                          <>
                            <Monitor />
                            <span>Desktop</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Viewport Image Area */}
                    <div className={`browser-viewport ${currentMode === "desktop" ? "view-desktop" : "view-mobile"}`}>
                      {/* Overlay Badges */}
                      <div className="viewport-overlay-badges">
                        <span className={`industry-badge ${badgeClass}`}>
                          {item.category}
                        </span>
                        <span className="live-status-pill">
                          <span className="status-dot-green" />
                          <span>Live Site</span>
                        </span>
                      </div>

                      {/* Viewport Screen Content */}
                      {currentMode === "desktop" ? (
                        <div className="preview-image-desktop">
                          <Image
                            src={item.img}
                            alt={`${item.title} Desktop View`}
                            title={item.title}
                            priority={item.id <= 3}
                          />
                        </div>
                      ) : (
                        <div className="phone-mockup-frame">
                          <Image
                            src={item.mobileImg}
                            alt={`${item.title} Mobile View`}
                            title={`${item.title} Mobile`}
                          />
                        </div>
                      )}

                      {/* Hover Overlay with Live Launch Action */}
                      <div className="hover-action-overlay">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-launch-btn"
                        >
                          <span>Explore Live Project</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Card Content Details */}
                    <div className="project-card-body">
                      <div className="card-title-row">
                        <h3 className="project-card-title">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        </h3>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card-cta-btn"
                          aria-label={`Open ${item.title} website in new tab`}
                          title="Visit website"
                        >
                          <ExternalLink />
                        </a>
                      </div>

                      <p className="project-card-desc">{item.sm_des}</p>

                      {/* Fixed Tags Pills (Separated chips, no text gluing) */}
                      <div className="project-tags-wrap">
                        {item.tags &&
                          item.tags.map((tag, idx) => (
                            <span key={idx} className="project-tag-pill">
                              #{tag}
                            </span>
                          ))}
                      </div>

                      {/* Card Footer */}
                      <div className="project-card-footer">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-view-live-link"
                        >
                          <span>Visit Live Website</span>
                          <ExternalLink />
                        </a>
                        <span className="verified-client-badge">
                          <Check size={12} />
                          <span>Verified Client</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="portfolio-empty-state">
            <div className="empty-icon-wrap">
              <FolderKanban />
            </div>
            <h4 className="empty-title">No Case Studies Found</h4>
            <p className="empty-desc">
              We couldn&apos;t find any projects matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or picking another category.
            </p>
            <button
              type="button"
              className="empty-reset-btn"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================
            LOAD MORE & PROGRESS SECTION
            ======================================================== */}
        {uniqueItems.length > 0 && (
          <div className="portfolio-pagination-bar">
            <div className="pagination-progress-wrap">
              <span className="progress-text">
                Showing {Math.min(next, uniqueItems.length)} of {uniqueItems.length} Case Studies
              </span>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${Math.min(100, (Math.min(next, uniqueItems.length) / uniqueItems.length) * 100)}%`,
                  }}
                />
              </div>
            </div>

            {next < uniqueItems.length ? (
              <button
                type="button"
                className="load-more-modern-btn"
                onClick={handleLoadMore}
              >
                <RotateCw />
                <span>Load More Case Studies</span>
              </button>
            ) : (
              <div className="all-loaded-indicator">
                <CheckCircle2 />
                <span>All {uniqueItems.length} case studies loaded</span>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            BOTTOM AGENCY CONVERSION CTA CARD
            ======================================================== */}
        <div className="portfolio-agency-cta-card">
          <div className="cta-content-grid">
            <div className="cta-text-group">
              <div className="cta-eyebrow">
                <Sparkles />
                <span>Custom Engineering &amp; Growth</span>
              </div>
              <h3 className="cta-headline">
                Ready to Build Your Next High-Impact Digital Platform?
              </h3>
              <p className="cta-desc">
                Partner with Vastora Tech to engineer custom web applications, high-converting e-commerce stores, and digital products tailored to scale your brand.
              </p>
            </div>

            <div className="cta-buttons-group">
              <Link href="/contact" className="cta-primary-btn">
                <span>Get a Free Quote</span>
                <ArrowRight />
              </Link>
              <Link href="/product/e-commerce-solutions" className="cta-secondary-btn">
                <span>E-Commerce Solutions</span>
              </Link>
            </div>
          </div>

          <div className="cta-trust-footer">
            <div className="trust-footer-item">
              <Check />
              <span>Full-Cycle Development</span>
            </div>
            <div className="trust-footer-item">
              <Check />
              <span>Guaranteed Delivery Timelines</span>
            </div>
            <div className="trust-footer-item">
              <Check />
              <span>Enterprise Grade Security</span>
            </div>
            <div className="trust-footer-item">
              <Check />
              <span>24/7 Ongoing Tech Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaTwo;