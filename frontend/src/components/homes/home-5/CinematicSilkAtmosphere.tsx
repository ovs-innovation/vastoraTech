"use client";

import React from "react";

const CinematicSilkAtmosphere: React.FC = () => {
  return (
    <div className="cinematic-silk-atmosphere" aria-hidden="true">
      {/* 1. Underlying Soft Volumetric Porcelain Ambient Gradients */}
      <div className="porcelain-ambient-backdrop" />
      <div className="porcelain-volumetric-light-cone" />

      {/* 2. Fluted Architectural Glass Pillars (Far Left Behind Content) */}
      <div className="fluted-glass-pillars">
        <span className="fluted-rib" />
        <span className="fluted-rib" />
        <span className="fluted-rib" />
        <span className="fluted-rib" />
        <span className="fluted-rib" />
        <span className="fluted-rib" />
        <span className="fluted-rib" />
        <span className="fluted-rib" />
      </div>

      {/* 3. Scalable Resolution-Independent 3D Porcelain Silk Waves */}
      <svg
        className="silk-waves-vector-canvas"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Wave Drop Shadow for 3D Architectural Folds */}
          <filter id="porcelainShadow" x="-10%" y="-10%" width="120%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#023e8a" floodOpacity="0.14" />
          </filter>

          <filter id="porcelainDeepShadow" x="-10%" y="-10%" width="120%" height="150%">
            <feDropShadow dx="0" dy="28" stdDeviation="24" floodColor="#001d66" floodOpacity="0.18" />
          </filter>

          {/* Upper Porcelain Canopy Wave Gradient */}
          <linearGradient id="silkGradCanopy" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="35%" stopColor="#e2eeff" stopOpacity="0.88" />
            <stop offset="70%" stopColor="#c5dcfe" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#a9cbfe" stopOpacity="0.55" />
          </linearGradient>

          {/* Middle Sculptural Cove Wave Gradient */}
          <linearGradient id="silkGradCove" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#f3f8ff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#dbe8fe" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#bed8fe" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a5c9fd" stopOpacity="0.35" />
          </linearGradient>

          {/* Lower Floor Dune Gradient */}
          <linearGradient id="silkGradFloorDune" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#e4efff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#c9e0fe" stopOpacity="0.4" />
          </linearGradient>

          {/* Rich Cobalt Liquid Wave (Bottom Left) */}
          <linearGradient id="liquidCobaltGrad" x1="0%" y1="20%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#04268e" />
            <stop offset="30%" stopColor="#004cd8" />
            <stop offset="65%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Volumetric Radial Glow on Stage */}
          <radialGradient id="stageBackdropBloom" cx="72%" cy="46%" r="52%">
            <stop offset="0%" stopColor="#0062f5" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="80%" stopColor="#dbeafe" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Stage Atmospheric Volumetric Light */}
        <rect x="0" y="0" width="1440" height="720" fill="url(#stageBackdropBloom)" />

        {/* 1. Middle Architectural Cove Wall (Framing the Left Typography and Right Stage) */}
        <path
          d="M 240 0 C 420 180, 560 250, 960 250 C 1240 250, 1370 380, 1440 460 L 1440 720 L 180 720 C 340 500, 180 200, 240 0 Z"
          fill="url(#silkGradCove)"
        />
        {/* Specular Rim on Middle Cove */}
        <path
          d="M 240 0 C 420 180, 560 250, 960 250 C 1240 250, 1370 380, 1440 460"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* 2. Major Upper Porcelain Silk Wave Canopy (Casting 3D Ambient Shadow Downward) */}
        <path
          d="M 460 0 C 720 95, 980 45, 1440 170 L 1440 0 Z"
          fill="url(#silkGradCanopy)"
          filter="url(#porcelainShadow)"
        />
        {/* Specular Crest Highlight on Upper Wave */}
        <path
          d="M 460 0 C 720 95, 980 45, 1440 170"
          stroke="rgba(255, 255, 255, 0.98)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* 3. Lower Stage Floor Dune (Passing Behind the Pedestal) */}
        <path
          d="M 620 720 C 780 540, 1120 460, 1440 540 L 1440 720 Z"
          fill="url(#silkGradFloorDune)"
          filter="url(#porcelainShadow)"
        />
        <path
          d="M 620 720 C 780 540, 1120 460, 1440 540"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 4. Rich Cobalt Liquid Wave Sweeping Across Bottom-Left */}
        <path
          d="M 0 440 C 110 440, 210 520, 310 720 L 0 720 Z"
          fill="url(#liquidCobaltGrad)"
          filter="url(#porcelainDeepShadow)"
        />
        {/* Dual Luminous Specular Rails on Cobalt Wave */}
        <path
          d="M 0 440 C 110 440, 210 520, 310 720"
          stroke="rgba(255, 255, 255, 0.95)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 0 468 C 90 468, 180 550, 260 720"
          stroke="rgba(56, 189, 248, 0.75)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* 4. Floating Sapphire Chrome Sphere 1 (Bottom Left above Cobalt Wave) */}
      <div className="floating-sapphire-sphere sphere-bottom-left" aria-hidden="true">
        <div className="sphere-specular-core" />
        <div className="sphere-horizon-reflection" />
        <div className="sphere-fresnel-rim" />
        <div className="sphere-caustic-shadow" />
      </div>

      {/* 5. Upper-Right Luxury 4-Point Diamond Sparkle Star */}
      <div className="luxury-sparkle-star" aria-hidden="true">
        <div className="star-photon-glow" />
        <svg
          className="star-diamond-shape"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central 4-Point Diamond Star */}
          <path
            d="M 26 2 Q 26 26 2 26 Q 26 26 26 50 Q 26 26 50 26 Q 26 26 26 2 Z"
            fill="#ffffff"
          />
          {/* Horizontal Flare Ray */}
          <line
            x1="0"
            y1="26"
            x2="52"
            y2="26"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.2"
          />
          {/* Vertical Flare Ray */}
          <line
            x1="26"
            y1="0"
            x2="26"
            y2="52"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </div>
  );
};

export default CinematicSilkAtmosphere;

