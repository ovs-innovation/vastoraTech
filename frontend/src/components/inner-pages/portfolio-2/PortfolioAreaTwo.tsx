"use client";

import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import portfolio_data_2 from "@/data/portfolio-data-2";
import { Search, X, ArrowUpRight, Globe } from "lucide-react";

// Project specific descriptive subtitles
const projectSubtitles: Record<number, string> = {
  1: "Smart eCommerce Platform & Gadget Ecosystem",
  2: "Luxury Salon Booking & Beauty Experience",
  3: "EdTech Course Marketplace & Training Portal",
  4: "Hotel & Banquet Reservation Architecture",
  5: "Curated Tour Packages & Travel Booking Hub",
  6: "Commercial & Residential Property Marketplace",
  8: "Civil Engineering & Design Portfolio Platform",
  9: "Electrical Safety Testing & Tagging Compliance",
  10: "Holistic Health Consulting & Herbal Wellness",
};

// Signature rotation angles for realistic stacked paper effect (-3.5 to +3.5 deg)
const projectRotations: Record<number, { main: number; layer1: number; layer2: number }> = {
  1: { main: -2.2, layer1: 3.5, layer2: -4.0 },
  2: { main: 2.8, layer1: -3.2, layer2: 3.8 },
  3: { main: -1.8, layer1: 2.5, layer2: -3.0 },
  4: { main: 3.2, layer1: -3.8, layer2: 2.6 },
  5: { main: -2.6, layer1: 3.2, layer2: -2.4 },
  6: { main: 1.9, layer1: -2.8, layer2: 3.4 },
  8: { main: -3.1, layer1: 2.9, layer2: -3.6 },
  9: { main: 2.4, layer1: -3.5, layer2: 2.9 },
  10: { main: -1.6, layer1: 3.1, layer2: -2.8 },
};

type PortfolioItem = (typeof portfolio_data_2)[0];

const getDomain = (url: string) => {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const PortfolioAreaTwo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredProject, setHoveredProject] = useState<PortfolioItem | null>(null);
  const [displayProject, setDisplayProject] = useState<PortfolioItem | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<number | null>(null);

  // Keep display project populated so card can animate out smoothly
  useEffect(() => {
    if (hoveredProject) {
      setDisplayProject(hoveredProject);
    }
  }, [hoveredProject]);

  // References for ultra-smooth 60fps cursor follower physics
  const portalRef = useRef<HTMLDivElement | null>(null);
  const layerTopRef = useRef<HTMLDivElement | null>(null);
  const layerMiddleRef = useRef<HTMLDivElement | null>(null);
  const layerBottomRef = useRef<HTMLDivElement | null>(null);

  // Target mouse coordinates and smoothed positions
  const targetPos = useRef({ x: 0, y: 0, active: false });
  const currentPos = useRef({ x: 0, y: 0 });
  const middlePos = useRef({ x: 0, y: 0 });
  const bottomPos = useRef({ x: 0, y: 0 });
  const activeRotations = useRef({ main: 0, layer1: 0, layer2: 0 });

  // Update base rotation whenever hoveredProject changes
  useEffect(() => {
    if (hoveredProject) {
      activeRotations.current = projectRotations[hoveredProject.id] || {
        main: 1.5,
        layer1: -2.5,
        layer2: 3.0,
      };
    }
  }, [hoveredProject]);

  // Global mousemove tracking across window for zero lag
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  // High-performance animation frame loop (Lerp with dynamic trailing physics)
  useEffect(() => {
    let rafId: number;

    const animate = () => {
      if (portalRef.current && targetPos.current.active) {
        // Smooth lerp interpolation for the main photo layer
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.16;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.16;

        // Trailing lerp for the middle paper layer (slight delay)
        middlePos.current.x += (targetPos.current.x - middlePos.current.x) * 0.11;
        middlePos.current.y += (targetPos.current.y - middlePos.current.y) * 0.11;

        // Trailing lerp for the bottom paper layer (even more physical lag)
        bottomPos.current.x += (targetPos.current.x - bottomPos.current.x) * 0.08;
        bottomPos.current.y += (targetPos.current.y - bottomPos.current.y) * 0.08;

        // Velocity-based dynamic tilt
        const deltaX = targetPos.current.x - currentPos.current.x;
        const deltaY = targetPos.current.y - currentPos.current.y;
        const dynamicTilt = Math.max(-4.5, Math.min(4.5, deltaX * 0.05 + deltaY * 0.015));

        // Viewport boundaries clamping (prevents clipping offscreen)
        const halfWidth = 245;
        const halfHeight = 165;
        const windowW = typeof window !== "undefined" ? window.innerWidth : 1440;
        const windowH = typeof window !== "undefined" ? window.innerHeight : 900;

        const posX = Math.max(halfWidth + 16, Math.min(windowW - halfWidth - 16, currentPos.current.x));
        const posY = Math.max(halfHeight + 16, Math.min(windowH - halfHeight - 16, currentPos.current.y));

        // Position the main portal exactly over cursor
        portalRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;

        // Apply physical rotations and paper layer offsets
        if (layerTopRef.current) {
          layerTopRef.current.style.transform = `rotate(${activeRotations.current.main + dynamicTilt}deg)`;
        }
        if (layerMiddleRef.current) {
          const lagX = (middlePos.current.x - currentPos.current.x) * 0.28;
          const lagY = (middlePos.current.y - currentPos.current.y) * 0.28;
          layerMiddleRef.current.style.transform = `rotate(${activeRotations.current.layer1 - dynamicTilt * 0.4}deg) translate3d(${lagX - 5}px, ${lagY + 3}px, 0)`;
        }
        if (layerBottomRef.current) {
          const lagX = (bottomPos.current.x - currentPos.current.x) * 0.48;
          const lagY = (bottomPos.current.y - currentPos.current.y) * 0.48;
          layerBottomRef.current.style.transform = `rotate(${activeRotations.current.layer2 + dynamicTilt * 0.3}deg) translate3d(${lagX + 8}px, ${lagY + 6}px, 0)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Track global window mousemove so cursor-following is buttery smooth
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    targetPos.current.x = e.clientX;
    targetPos.current.y = e.clientY;
    targetPos.current.active = true;
  }, []);

  // Categories list with count
  const allCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(portfolio_data_2.map((item) => item.category)))];
  }, []);

  // Filtered project list
  const filteredProjects = useMemo(() => {
    return portfolio_data_2.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category.toLowerCase() === activeCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.sm_des.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        (projectSubtitles[item.id] && projectSubtitles[item.id].toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      className="editorial-portfolio-section"
      onMouseMove={handleMouseMove}
    >
      {/* Hidden preloader for instant, latency-free hover transition */}
      <div className="portfolio-preloader-cache" aria-hidden="true">
        {portfolio_data_2.map((item) => (
          <Image
            key={`preload-${item.id}`}
            src={item.img}
            alt={item.title}
            width={10}
            height={10}
            priority
          />
        ))}
      </div>

      <div className="container-fluid editorial-container">
        {/* Page Editorial Header */}
        <div className="editorial-header">
          <div className="editorial-eyebrow-line">
            <span className="editorial-badge-dot" />
            <span className="editorial-eyebrow-text">Our Work</span>
            <span className="editorial-eyebrow-sep">/</span>
            <span className="editorial-eyebrow-sub">Selected Case Studies</span>
            <span className="editorial-count-tag">
              ({filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"})
            </span>
          </div>

          <h1 className="editorial-main-title">
            <span className="title-black">Integrated brand</span>
            <br />
            <span className="title-black">experiences that </span>
            <span className="title-blue">
              <span className="oval-wrap">
                <span className="oval-text">move</span>
                <svg
                  className="oval-sketch-svg"
                  viewBox="0 0 120 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M14 26 C 18 10, 96 6, 112 21 C 118 31, 100 47, 52 49 C 18 50, 4 39, 8 25 C 11 15, 42 7, 82 8"
                    stroke="#0062f5"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              hearts—
            </span>
            <br />
            <span className="title-serif-needle title-blue">and the needle.</span>
          </h1>

          <p className="editorial-subtitle">
            A curated index of bespoke eCommerce architectures, high-speed web platforms, and digital
            identities engineered for scalable commercial impact.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="editorial-controls-bar">
          {/* Category Tabs */}
          <div className="editorial-categories" role="tablist" aria-label="Project Categories">
            {allCategories.map((cat) => {
              const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
              const count =
                cat === "All"
                  ? portfolio_data_2.length
                  : portfolio_data_2.filter(
                      (p) => p.category.toLowerCase() === cat.toLowerCase()
                    ).length;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`editorial-cat-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span className="cat-label">{cat}</span>
                  <span className="cat-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Minimalist Search Bar */}
          <div className="editorial-search-wrap">
            <Search size={16} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search by client, project, or solution..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="editorial-search-input"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Editorial Table Structure */}
        <div
          className="editorial-table-wrap"
          onMouseLeave={() => {
            setHoveredProject(null);
            targetPos.current.active = false;
          }}
        >
          {/* Table Header Columns */}
          <div className="editorial-table-header" aria-hidden="true">
            <div className="col-cell col-client">Client</div>
            <div className="col-cell col-project">Project</div>
            <div className="col-cell col-solutions">Solutions</div>
            <div className="col-cell col-action"></div>
          </div>

          {/* Table Rows */}
          {filteredProjects.length > 0 ? (
            <div className="editorial-table-body">
              {filteredProjects.map((item) => {
                const isHovered = hoveredProject?.id === item.id;
                const isMobileExpanded = expandedMobileId === item.id;
                const subtitle =
                  projectSubtitles[item.id] ||
                  `${item.category} Platform Architecture`;

                return (
                  <div
                    key={item.id}
                    className={`editorial-table-row ${isHovered ? "is-hovered" : ""}`}
                    onMouseEnter={(e) => {
                      if (!targetPos.current.active) {
                        currentPos.current.x = e.clientX;
                        currentPos.current.y = e.clientY;
                        middlePos.current.x = e.clientX;
                        middlePos.current.y = e.clientY;
                        bottomPos.current.x = e.clientX;
                        bottomPos.current.y = e.clientY;
                      }
                      setHoveredProject(item);
                      targetPos.current.x = e.clientX;
                      targetPos.current.y = e.clientY;
                      targetPos.current.active = true;
                    }}
                    onMouseMove={(e) => {
                      targetPos.current.x = e.clientX;
                      targetPos.current.y = e.clientY;
                      targetPos.current.active = true;
                    }}
                    onClick={() => {
                      // On mobile: toggle accordion; on desktop: open project link
                      if (typeof window !== "undefined" && window.innerWidth <= 991) {
                        setExpandedMobileId(isMobileExpanded ? null : item.id);
                      }
                    }}
                  >
                    {/* Column 1: Client Name & Category */}
                    <div className="col-cell col-client">
                      <span className="client-name">{item.title}</span>
                      <span className="client-category-mobile">{item.category}</span>
                    </div>

                    {/* Column 2: Project Headline & Description */}
                    <div className="col-cell col-project">
                      <span className="project-title">{subtitle}</span>
                      <span className="project-desc-short">{item.sm_des}</span>
                    </div>

                    {/* Column 3: Solutions Tags */}
                    <div className="col-cell col-solutions">
                      <div className="solutions-pills">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="solution-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Column: External Live Link */}
                    <div className="col-cell col-action">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link-btn"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit live site for ${item.title}`}
                      >
                        <span className="link-text">Visit</span>
                        <ArrowUpRight size={15} className="link-arrow" />
                      </a>
                    </div>

                    {/* Mobile Expandable Preview Drawer (Touch Friendly) */}
                    {isMobileExpanded && (
                      <div className="mobile-row-drawer">
                        <div className="mobile-image-wrap">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            sizes="100vw"
                            className="mobile-preview-img"
                          />
                        </div>
                        <div className="mobile-drawer-footer">
                          <span className="mobile-domain">
                            <Globe size={13} />
                            {getDomain(item.link)}
                          </span>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mobile-visit-btn"
                          >
                            <span>Open Live Website</span>
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Clean Empty State */
            <div className="editorial-empty-state">
              <p className="empty-title">No projects found</p>
              <p className="empty-desc">
                No case studies match your search criteria &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                className="empty-reset-btn"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Cursor-Following Floating Stacked-Paper Preview Portal */}
        <div
          ref={portalRef}
          className={`editorial-floating-preview-portal ${
            hoveredProject ? "is-visible" : ""
          }`}
          aria-hidden="true"
        >
          {displayProject && (
            <div className="stacked-paper-deck">
              {/* Bottom Paper Sheet with Physical Trailing Lag */}
              <div
                ref={layerBottomRef}
                className="paper-layer layer-bottom"
              />

              {/* Middle Paper Sheet with Intermediate Trailing Lag */}
              <div
                ref={layerMiddleRef}
                className="paper-layer layer-middle"
              />

              {/* Top Main Photograph Layer */}
              <div
                ref={layerTopRef}
                className="paper-layer layer-top"
              >
                <div className="photo-container">
                  <Image
                    src={displayProject.img}
                    alt={displayProject.title}
                    fill
                    sizes="(max-width: 1200px) 420px, 520px"
                    className="preview-photo"
                    priority
                  />
                  {/* Subtle photo vignette */}
                  <div className="photo-vignette" />

                  {/* Domain pill badge on photo bottom */}
                  <div className="photo-domain-badge">
                    <span className="domain-dot" />
                    <span className="domain-text">
                      {getDomain(displayProject.link)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioAreaTwo;
