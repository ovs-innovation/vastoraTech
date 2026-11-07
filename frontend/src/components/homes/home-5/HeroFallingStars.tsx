"use client";

import React from "react";

const HeroFallingStars: React.FC = () => {
  return (
    <div className="hero-falling-stars-canvas" aria-hidden="true">
      {/* Dynamic Shooting / Falling Stars */}
      <div className="shooting-star star-1" />
      <div className="shooting-star star-2" />
      <div className="shooting-star star-3" />
      <div className="shooting-star star-4" />
      <div className="shooting-star star-5" />

      {/* Gentle Twinkling Stars */}
      <span className="twinkle-sparkle ts-1">✦</span>
      <span className="twinkle-sparkle ts-2">★</span>
      <span className="twinkle-sparkle ts-3">✦</span>
      <span className="twinkle-sparkle ts-4">★</span>
      <span className="twinkle-sparkle ts-5">✦</span>
      <span className="twinkle-sparkle ts-6">★</span>
    </div>
  );
};

export default HeroFallingStars;
