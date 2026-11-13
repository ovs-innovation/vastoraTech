"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import crystalSculptureFlawless from "@/assets/img/hero/sculpture-v-crystal-flawless.png";

const HeroVisualEcosystem: React.FC = () => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)",
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Responsive 3D perspective tilt (smooth & subtle)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTiltStyle({
      transform: `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.015)`,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <div
      className="monumental-sculpture-stage"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Vastora Tech Kinetic 3D Brand Installation"
    >
      {/* 3D Dynamic Parallax Chassis */}
      <div ref={stageRef} className="sculpture-3d-chassis" style={tiltStyle}>
        
        {/* Layer 1: Back Elements (z-index: 1 - Strictly Behind the V) */}
        <div className="stage-depth-layer stage-layer-back" aria-hidden="true">
          {/* Single 3D Glass Orbital Ring - Back Arc (Loops Behind the V) */}
          <div className="single-glass-orbit-chassis orbit-arc-back">
            <svg
              className="orbit-vector-canvas"
              viewBox="0 0 620 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="singleRingBackGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="25%" stopColor="#7dd3fc" stopOpacity="0.75" />
                  <stop offset="55%" stopColor="#0284c7" stopOpacity="0.35" />
                  <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              {/* Upper / Back Arc of the Single Continuous Glass Torus */}
              <path
                d="M 12 115 A 298 90 0 0 1 608 115"
                stroke="url(#singleRingBackGrad)"
                strokeWidth="7.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="orbit-specular-glint glint-back-arc" />
          </div>

          {/* Floating Sapphire Chrome Sphere 2 (Mid-Depth Behind Left Arm of V) */}
          <div className="floating-sapphire-sphere sphere-mid-back">
            <div className="sphere-specular-core" />
            <div className="sphere-horizon-reflection" />
            <div className="sphere-fresnel-rim" />
            <div className="sphere-caustic-shadow" />
          </div>
        </div>

        {/* Layer 2: Multilayer 3D Glass Pedestal Platform (z-index: 1.5 - Directly Beneath V) */}
        <div className="glass-pedestal-stage-3d" aria-hidden="true">
          {/* Ground Floor Volumetric Caustic Bloom */}
          <div className="stage-floor-caustic-ambient" />

          {/* Precision 3D Vector Glass Pedestal System */}
          <svg
            className="pedestal-vector-chassis"
            viewBox="0 0 740 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Lower Tier Cylinder Wall 3D Glass Gradient */}
              <linearGradient id="pedLowerWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.4" />
                <stop offset="14%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="48%" stopColor="#0284c7" stopOpacity="0.65" />
                <stop offset="78%" stopColor="#38bdf8" stopOpacity="0.82" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
              </linearGradient>

              {/* Upper Tier Cylinder Wall 3D Glass Gradient (Reflective Bevel) */}
              <linearGradient id="pedUpperWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.5" />
                <stop offset="16%" stopColor="#7dd3fc" stopOpacity="0.9" />
                <stop offset="32%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="52%" stopColor="#0284c7" stopOpacity="0.7" />
                <stop offset="82%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0.45" />
              </linearGradient>

              {/* Top Glass Surface Ambient Translucency */}
              <radialGradient id="pedTopGlassSurface" cx="50%" cy="38%" rx="50%" ry="44%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                <stop offset="35%" stopColor="#e0f2fe" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#bae6fd" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.5" />
              </radialGradient>

              {/* Luminous Neon Rim Gradient */}
              <linearGradient id="pedNeonEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="25%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="78%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
              </linearGradient>

              {/* V Reflection Floor Caustic */}
              <radialGradient id="pedVReflectionGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0062f5" stopOpacity="0.45" />
                <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* 1. Base Floor Caustic Glow */}
            <ellipse cx="370" cy="182" rx="355" ry="72" fill="url(#pedVReflectionGlow)" />

            {/* 2. LOWER TIER: Base Glass Step */}
            {/* Lower Cylinder 3D Front Wall (Thickness: 18px from y=166 to y=184, rx=335, ry=58) */}
            <path
              d="M 35 166 A 335 58 0 0 0 705 166 L 705 184 A 335 58 0 0 1 35 184 Z"
              fill="url(#pedLowerWallGrad)"
            />
            {/* Lower Front Base Neon Rim */}
            <path
              d="M 35 184 A 335 58 0 0 0 705 184"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeOpacity="0.85"
              fill="none"
            />
            {/* Lower Step Top Surface Disc */}
            <ellipse
              cx="370"
              cy="166"
              rx="335"
              ry="58"
              fill="#e0f2fe"
              fillOpacity="0.32"
              stroke="url(#pedNeonEdgeGrad)"
              strokeWidth="1.5"
            />

            {/* 3. UPPER TIER: Primary Glass Pedestal Stage */}
            {/* Upper Cylinder 3D Front Wall (Thickness: 24px from y=130 to y=154, rx=278, ry=48) */}
            <path
              d="M 92 130 A 278 48 0 0 0 648 130 L 648 154 A 278 48 0 0 1 92 154 Z"
              fill="url(#pedUpperWallGrad)"
            />
            {/* Upper Cylinder Base Contact Rim */}
            <path
              d="M 92 154 A 278 48 0 0 0 648 154"
              stroke="#0284c7"
              strokeWidth="2"
              strokeOpacity="0.75"
              fill="none"
            />
            {/* Upper Primary Translucent Glass Surface */}
            <ellipse
              cx="370"
              cy="130"
              rx="278"
              ry="48"
              fill="url(#pedTopGlassSurface)"
              stroke="url(#pedNeonEdgeGrad)"
              strokeWidth="2.5"
            />

            {/* Concentric Electric-Blue & White Neon Ring on Top Surface */}
            <ellipse
              cx="370"
              cy="130"
              rx="215"
              ry="36"
              stroke="#ffffff"
              strokeWidth="2"
              strokeOpacity="0.9"
              fill="none"
            />
            <ellipse
              cx="370"
              cy="130"
              rx="218"
              ry="37"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeOpacity="0.85"
              fill="none"
            />

            {/* Central Specular Floor Reflection Sheen */}
            <ellipse
              cx="370"
              cy="130"
              rx="145"
              ry="24"
              fill="#ffffff"
              fillOpacity="0.45"
            />

            {/* Ambient Occlusion & Contact Shadow Directly Beneath Tip of V */}
            <ellipse
              cx="370"
              cy="130"
              rx="68"
              ry="13"
              fill="#03256c"
              fillOpacity="0.55"
            />
          </svg>
        </div>

        {/* Layer 3: Central Standalone 3D Sapphire Crystal V (z-index: 2) */}
        <div className="sculpture-monolith-body">
          {/* Backstage Ambient Volumetric Halo behind V */}
          <div className="sculpture-backstage-halo" aria-hidden="true" />

          {/* Upward Blue Bounce Illumination from Pedestal onto underside of V */}
          <div className="sculpture-base-illumination" aria-hidden="true" />

          <Image
            src={crystalSculptureFlawless}
            alt="Vastora Tech Sapphire Crystal 3D Monolith Sculpture"
            className="monolith-couture-image"
            priority
            draggable={false}
          />

          {/* Subtle Ambient Specular Glare */}
          <div className="monolith-specular-glare" aria-hidden="true" />
        </div>

        {/* Layer 4: Front Elements (z-index: 3 - Strictly In Front of the V) */}
        <div className="stage-depth-layer stage-layer-front" aria-hidden="true">
          {/* Single 3D Glass Orbital Ring - Front Arc (Sweeps Across Front Waist of the V) */}
          <div className="single-glass-orbit-chassis orbit-arc-front">
            <svg
              className="orbit-vector-canvas"
              viewBox="0 0 620 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="singleRingFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="20%" stopColor="#7dd3fc" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0062f5" stopOpacity="0.25" />
                  <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
                </linearGradient>
              </defs>
              {/* Lower / Front Arc of the Single Continuous Glass Torus */}
              <path
                d="M 608 115 A 298 90 0 0 1 12 115"
                stroke="url(#singleRingFrontGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            {/* Front Specular Glint Highlight on Ring */}
            <div className="orbit-specular-glint glint-front-arc" />
          </div>

          {/* Floating Sapphire Chrome Sphere 3 with Translucent Frosted Glass Pedestal (Bottom-Right) */}
          <div className="pedestal-sphere-assembly">
            {/* 1. Floating Sapphire Chrome Sphere 3 (Rendered cleanly on top) */}
            <div className="floating-sapphire-sphere sphere-pedestal-top">
              <div className="sphere-specular-core" />
              <div className="sphere-horizon-reflection" />
              <div className="sphere-fresnel-rim" />
            </div>

            {/* 2. Frosted Glass Pedestal Base (Rendered underneath the sphere) */}
            <div className="glass-pedestal-base">
              <span className="pedestal-cap-rim" />
              <span className="pedestal-glass-body" />
              <span className="pedestal-floor-rim" />
              <span className="pedestal-contact-shadow" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroVisualEcosystem;
