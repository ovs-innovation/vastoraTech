"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// Client Brand Logos
import brand_log_6 from "@/assets/img/brand/trimmed/brand6.png";   // Candy Floss
import brand_log_7 from "@/assets/img/brand/trimmed/brand7.png";   // Natures Pharmaceuticals
import brand_log_23 from "@/assets/img/brand/trimmed/brand23.png"; // Ace Divino
import brand_log_9 from "@/assets/img/brand/trimmed/brand9.png";   // Khalihar
import brand_log_5 from "@/assets/img/brand/trimmed/brand5.png";   // Q-Travel Tech
import brand_log_22 from "@/assets/img/brand/trimmed/brand22.png"; // Civic Portal (Lotus)
import brand_log_1 from "@/assets/img/brand/trimmed/brand1.png";   // CredSol
import brand_log_2 from "@/assets/img/brand/trimmed/brand2.png";   // Botso AI
import brand_log_28 from "@/assets/img/brand/trimmed/brand28.png"; // Kaari Organic
import brand_log_20 from "@/assets/img/brand/trimmed/brand20.png"; // D Allure Couture

export interface OrbitalClientCard {
  id: number;
  name: string;
  logo: StaticImageData;
  tag: string;
  highlight: string;
  partnerSince: string;
  caseStudyUrl: string;
}

const ORBITAL_CLIENTS: OrbitalClientCard[] = [
  {
    id: 7,
    name: "Natures Pharmaceuticals",
    logo: brand_log_7,
    tag: "Healthcare D2C",
    highlight: "Compliant E-Commerce Platform",
    partnerSince: "Partner since 2021",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 23,
    name: "ACE DIVINO",
    logo: brand_log_23,
    tag: "Luxury Real Estate",
    highlight: "Virtual Tour & Lead Funnel",
    partnerSince: "Partner since 2022",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 6,
    name: "Candy Floss",
    logo: brand_log_6,
    tag: "Kids eCommerce",
    highlight: "3.2x Mobile Conversion Rate",
    partnerSince: "Partner since 2021",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 9,
    name: "KHALIHAR",
    logo: brand_log_9,
    tag: "Adventure & Sports",
    highlight: "Dynamic Event Booking Platform",
    partnerSince: "Partner since 2023",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 5,
    name: "Q-Travel Tech",
    logo: brand_log_5,
    tag: "Aviation Tech",
    highlight: "Dynamic Flight Booking Engine",
    partnerSince: "Partner since 2022",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 22,
    name: "Civic Portal",
    logo: brand_log_22,
    tag: "Public Sector",
    highlight: "High-Traffic Information Hub",
    partnerSince: "Partner since 2020",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 1,
    name: "CredSol",
    logo: brand_log_1,
    tag: "FinTech Platform",
    highlight: "4.2x Faster Loan Funnel",
    partnerSince: "Partner since 2022",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 2,
    name: "Botso AI",
    logo: brand_log_2,
    tag: "CX Automation",
    highlight: "24/7 Smart Conversational AI",
    partnerSince: "Partner since 2023",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 28,
    name: "Kaari Organic",
    logo: brand_log_28,
    tag: "Clean Beauty",
    highlight: "Fast Headless Checkout",
    partnerSince: "Partner since 2022",
    caseStudyUrl: "/portfolio",
  },
  {
    id: 20,
    name: "D Allure Couture",
    logo: brand_log_20,
    tag: "Luxury Fashion",
    highlight: "Headless High-Speed Store",
    partnerSince: "Partner since 2021",
    caseStudyUrl: "/portfolio",
  },
];

const OrbitalBrandEcosystem: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0.55); // initial angle highlighting Natures Pharma in front
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null); // Only active on real user hover
  const [stageDimensions, setStageDimensions] = useState({ rx: 540, rz: 235, tiltY: 72 });

  const stageRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const hoveredCardIdRef = useRef<number | null>(null);
  const cardElementRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const handleCardMouseEnter = (id: number) => {
    if (isDraggingRef.current) return;
    hoveredCardIdRef.current = id;
    setHoveredCardId(id);
  };

  const handleCardMouseLeave = (id: number) => {
    if (hoveredCardIdRef.current === id) {
      hoveredCardIdRef.current = null;
      setHoveredCardId(null);
    }
  };

  const clearHover = () => {
    hoveredCardIdRef.current = null;
    setHoveredCardId(null);
  };

  // Global window listener: ensures popover immediately vanishes when cursor leaves card bounds
  useEffect(() => {
    const handleGlobalPointerMove = (e: MouseEvent | PointerEvent) => {
      if (hoveredCardIdRef.current !== null) {
        const activeCardEl = cardElementRefs.current.get(hoveredCardIdRef.current);
        if (activeCardEl) {
          const rect = activeCardEl.getBoundingClientRect();
          // Tolerance margin around card and its popover
          const margin = 16;
          const isInside =
            e.clientX >= rect.left - margin &&
            e.clientX <= rect.right + margin &&
            e.clientY >= rect.top - margin &&
            e.clientY <= rect.bottom + margin;

          if (!isInside) {
            hoveredCardIdRef.current = null;
            setHoveredCardId(null);
          }
        } else {
          hoveredCardIdRef.current = null;
          setHoveredCardId(null);
        }
      }
    };

    const handleScrollOrBlur = () => {
      if (hoveredCardIdRef.current !== null) {
        hoveredCardIdRef.current = null;
        setHoveredCardId(null);
      }
    };

    window.addEventListener("pointermove", handleGlobalPointerMove, { passive: true });
    window.addEventListener("scroll", handleScrollOrBlur, { passive: true });
    window.addEventListener("blur", handleScrollOrBlur);

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("scroll", handleScrollOrBlur);
      window.removeEventListener("blur", handleScrollOrBlur);
    };
  }, []);

  // Responsive radii based on container width - grand height and spacious 3D depth
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setStageDimensions({ rx: 200, rz: 110, tiltY: 30 });
      } else if (width < 768) {
        setStageDimensions({ rx: 290, rz: 145, tiltY: 42 });
      } else if (width < 992) {
        setStageDimensions({ rx: 390, rz: 180, tiltY: 54 });
      } else if (width < 1200) {
        setStageDimensions({ rx: 470, rz: 210, tiltY: 62 });
      } else {
        setStageDimensions({ rx: 540, rz: 235, tiltY: 72 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous smooth cinematic orbital rotation
  useEffect(() => {
    let lastTime = performance.now();

    const animateOrbit = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Auto-orbit slowly when not dragging and not hovering over a specific card
      if (!isDraggingRef.current && hoveredCardId === null) {
        setRotationAngle((prev) => (prev + delta * 0.16) % (2 * Math.PI));
      }

      animFrameRef.current = requestAnimationFrame(animateOrbit);
    };

    animFrameRef.current = requestAnimationFrame(animateOrbit);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [hoveredCardId]);

  // Mouse & Touch Drag Handlers for Interactive 3D Spinning
  const handlePointerDown = (e: React.PointerEvent) => {
    clearHover();
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartAngleRef.current = rotationAngle;
    if (stageRef.current) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    // Map drag distance to angular rotation
    const sensitivity = 0.0045;
    setRotationAngle(dragStartAngleRef.current + dx * sensitivity);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    if (stageRef.current) {
      stageRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={stageRef}
      className="orbital-ecosystem-stage"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={clearHover}
      onMouseLeave={clearHover}
      aria-label="3D Interactive Client Brand Orbital Showcase"
    >
      {/* 3D Kinetic Perspective Stage */}
      <div className="orbital-perspective-chassis">

        {/* 1. Underlying Luminous Vector Orbital Tracks & Caustic Rings */}
        <div className="orbital-vector-tracks" aria-hidden="true">
          <svg
            className="orbital-tracks-svg"
            viewBox="0 0 1140 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="orbitalRingGradPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#0062f5" stopOpacity="0.3" />
                <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
              </linearGradient>

              <radialGradient id="centerPedestalGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0062f5" stopOpacity="0.32" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Stage Floor Ambient Light Bloom */}
            <ellipse cx="570" cy="235" rx="440" ry="145" fill="url(#centerPedestalGlow)" />

            {/* Outermost Orbit Guide Track */}
            <ellipse
              cx="570"
              cy="230"
              rx="520"
              ry="180"
              stroke="rgba(255, 255, 255, 0.75)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />

            {/* Primary Neon Elliptical Rail */}
            <ellipse
              cx="570"
              cy="230"
              rx="470"
              ry="160"
              stroke="url(#orbitalRingGradPrimary)"
              strokeWidth="2"
            />

            {/* Inner Concentric Stage Rings */}
            <ellipse
              cx="570"
              cy="232"
              rx="240"
              ry="82"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeOpacity="0.6"
            />
            <ellipse
              cx="570"
              cy="232"
              rx="170"
              ry="58"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeOpacity="0.8"
            />
          </svg>
        </div>

        {/* 2. Central Luminescent Opal Sphere & Orbital Rings */}
        <div className="orbital-center-core" aria-hidden="true">
          {/* Floor Caustic Contact Shadow */}
          <div className="core-floor-shadow" />

          {/* Central Circular Stage Pedestal */}
          <div className="core-glass-pedestal">
            <span className="pedestal-rim-upper" />
            <span className="pedestal-glass-body" />
            <span className="pedestal-rim-lower" />
          </div>

          {/* Central Iridescent Opal Pearl Sphere */}
          <div className="core-opal-sphere">
            <div className="sphere-specular-highlight" />
            <div className="sphere-equator-sheen" />
            <div className="sphere-iridescent-glow" />
            <div className="sphere-fresnel-rim" />
          </div>

          {/* Double Fine 3D Glass Rings Orbiting Central Sphere */}
          <div className="core-inner-orbit-ring ring-tilted-1" />
          <div className="core-inner-orbit-ring ring-tilted-2" />
        </div>

        {/* 3. 3D Elliptical Ring of Glassmorphic Client Brand Cards */}
        <div className="orbital-cards-constellation">
          {ORBITAL_CLIENTS.map((client, index) => {
            const total = ORBITAL_CLIENTS.length;
            // Angle around ellipse
            const angle = rotationAngle + (index / total) * 2 * Math.PI;

            // Cartesian 3D Coordinates
            const x = Math.sin(angle) * stageDimensions.rx;
            const z = Math.cos(angle) * stageDimensions.rz;
            const y = Math.cos(angle) * stageDimensions.tiltY;

            // Depth calculation: z from -rz to +rz
            const depthRatio = (z + stageDimensions.rz) / (2 * stageDimensions.rz); // 0 (far back) to 1 (front center)
            const scale = 0.72 + depthRatio * 0.38; // scale from 0.72 (back) to 1.10 (front)
            const opacity = 0.52 + depthRatio * 0.48; // opacity from 0.52 to 1.0
            const zIndex = Math.round(20 + depthRatio * 70); // z-index from 20 to 90
            const blur = (1 - depthRatio) * 1.8; // subtle depth-of-field blur on back cards

            const isHoveredCard = hoveredCardId === client.id;
            const isFrontmost = depthRatio > 0.88;

            return (
              <div
                key={`orbital-card-${client.id}`}
                ref={(el) => {
                  if (el) cardElementRefs.current.set(client.id, el);
                  else cardElementRefs.current.delete(client.id);
                }}
                className={`orbital-brand-card-chassis ${isHoveredCard ? "card-highlighted" : ""} ${
                  isFrontmost ? "card-frontmost" : ""
                }`}
                style={{
                  transform: `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(
                    1
                  )}px) scale(${scale.toFixed(3)})`,
                  opacity: opacity.toFixed(2),
                  zIndex: isHoveredCard ? 150 : zIndex,
                  filter: blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : "none",
                }}
                onMouseEnter={() => handleCardMouseEnter(client.id)}
                onMouseLeave={() => handleCardMouseLeave(client.id)}
                onPointerEnter={() => handleCardMouseEnter(client.id)}
                onPointerLeave={() => handleCardMouseLeave(client.id)}
              >
                <div className="glassmorphic-card-body">
                  {/* Subtle Top Specular Glass Reflection */}
                  <span className="card-glass-specular-edge" aria-hidden="true" />

                  {/* Brand Client Logo */}
                  <div className="card-logo-viewport">
                    <Image
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="card-client-logo"
                      priority={client.id === 7 || client.id === 23}
                    />
                  </div>

                  {/* Dynamic Neon Cyan Halo on Active/Hover */}
                  <div className="card-neon-halo" aria-hidden="true" />
                </div>

                {/* Interactive Case Study Pill: ONLY appears when mouse hovers over this card */}
                {isHoveredCard && (
                  <div className="card-hover-popover" role="tooltip">
                    <Link
                      href={client.caseStudyUrl}
                      className="popover-cta-pill"
                      aria-label={`View ${client.name} Case Study`}
                    >
                      <span className="cta-pill-text">View Case Study</span>
                      <ArrowRight size={13} className="cta-arrow" />
                    </Link>

                    <div className="popover-metadata-tag">
                      <span className="metadata-dot" />
                      <span className="metadata-text">{client.partnerSince}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrbitalBrandEcosystem;

