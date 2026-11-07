"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

// Brands images (34 partner logos)
import brand_log_1 from "@/assets/img/brand/brand1.png";
import brand_log_2 from "@/assets/img/brand/brand2.png";
import brand_log_3 from "@/assets/img/brand/brand3.png";
import brand_log_4 from "@/assets/img/brand/brand4.png";
import brand_log_5 from "@/assets/img/brand/brand5.png";
import brand_log_6 from "@/assets/img/brand/brand6.png";
import brand_log_7 from "@/assets/img/brand/brand7.png";
import brand_log_8 from "@/assets/img/brand/brand8.png";
import brand_log_9 from "@/assets/img/brand/brand9.png";
import brand_log_10 from "@/assets/img/brand/brand10.png";
import brand_log_11 from "@/assets/img/brand/brand11.png";
import brand_log_12 from "@/assets/img/brand/brand12.png";
import brand_log_13 from "@/assets/img/brand/brand13.png";
import brand_log_14 from "@/assets/img/brand/brand14.png";
import brand_log_15 from "@/assets/img/brand/brand15.png";
import brand_log_16 from "@/assets/img/brand/brand16.png";
import brand_log_17 from "@/assets/img/brand/brand17.png";
import brand_log_18 from "@/assets/img/brand/brand18.png";
import brand_log_19 from "@/assets/img/brand/brand19.png";
import brand_log_20 from "@/assets/img/brand/brand20.png";
import brand_log_21 from "@/assets/img/brand/brand21.png";
import brand_log_22 from "@/assets/img/brand/brand22.png";
import brand_log_23 from "@/assets/img/brand/brand23.png";
import brand_log_24 from "@/assets/img/brand/brand24.png";
import brand_log_25 from "@/assets/img/brand/brand25.png";
import brand_log_26 from "@/assets/img/brand/brand26.png";
import brand_log_27 from "@/assets/img/brand/brand27.png";
import brand_log_28 from "@/assets/img/brand/brand28.png";
import brand_log_29 from "@/assets/img/brand/brand29.png";
import brand_log_30 from "@/assets/img/brand/brand30.png";
import brand_log_31 from "@/assets/img/brand/brand31.png";
import brand_log_32 from "@/assets/img/brand/brand32.png";
import brand_log_33 from "@/assets/img/brand/brand33.png";
import brand_log_34 from "@/assets/img/brand/brand34.png";

const allBrands = [
  brand_log_1,
  brand_log_2,
  brand_log_3,
  brand_log_4,
  brand_log_5,
  brand_log_6,
  brand_log_7,
  brand_log_8,
  brand_log_9,
  brand_log_10,
  brand_log_11,
  brand_log_12,
  brand_log_13,
  brand_log_14,
  brand_log_15,
  brand_log_16,
  brand_log_17,
  brand_log_18,
  brand_log_19,
  brand_log_20,
  brand_log_21,
  brand_log_22,
  brand_log_23,
  brand_log_24,
  brand_log_25,
  brand_log_26,
  brand_log_27,
  brand_log_28,
  brand_log_29,
  brand_log_30,
  brand_log_31,
  brand_log_32,
  brand_log_33,
  brand_log_34,
];

const actionTags = [
  "Enterprise Delivery",
  "Design Systems",
  "CX Automation",
];

const BrandAreaHomeFour = () => {
  const [activeTag, setActiveTag] = useState("Enterprise Delivery");

  // Split brands into 2 rows for dual-direction infinite marquee
  const rowOneBrands = allBrands.slice(0, 17);
  const rowTwoBrands = allBrands.slice(17, 34);

  return (
    <section className="client-showcase cyber-showcase-section">
      <div className="container">
        <div className="client-showcase__inner">
          <div className="text-center">
            {/* Status Radar Eyebrow */}
            <div className="cyber-eyebrow-pill">
              <span className="radar-pulse-dot" aria-hidden="true">
                <span className="pulse-ring" />
              </span>
              <span className="eyebrow-text">TRUSTED BY 180+ GLOBAL ENTERPRISES</span>
            </div>

            {/* Dual-Tone Cyber Heading */}
            <h2 className="cyber-showcase-title">
              Where ambitious teams partner with a{" "}
              <span className="cyber-gradient-highlight">
                trusted web development company.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="cyber-showcase-subtitle">
              From startups to global enterprises, Vastora Tech helps businesses launch and grow with modern websites, eCommerce platforms, and digital solutions.
            </p>

            {/* Interactive Filter Chips */}
            <div className="cyber-tags-row">
              {actionTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`cyber-tag-chip ${activeTag === tag ? "is-active" : ""}`}
                >
                  <span className="chip-dot" aria-hidden="true" />
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dual-Row Seamless Infinite Marquee Ribbon */}
      <div className="cyber-marquee-shell">
        {/* Row 1: Leftward Infinite Drift */}
        <div className="cyber-marquee-row">
          <div className="cyber-marquee-track track-left">
            {[...rowOneBrands, ...rowOneBrands].map((logo, index) => (
              <div key={`row1-brand-${index}`} className="cyber-glass-card">
                <div className="card-logo-wrap">
                  <Image
                    src={logo}
                    alt={`Partner Brand ${index + 1}`}
                    className="brand-img"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Drift */}
        <div className="cyber-marquee-row">
          <div className="cyber-marquee-track track-right">
            {[...rowTwoBrands, ...rowTwoBrands].map((logo, index) => (
              <div key={`row2-brand-${index}`} className="cyber-glass-card">
                <div className="card-logo-wrap">
                  <Image
                    src={logo}
                    alt={`Partner Brand ${index + 18}`}
                    className="brand-img"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAreaHomeFour;
