"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

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

const allBrandLogos: { id: number; img: StaticImageData }[] = [
  { id: 1, img: brand_log_1 },
  { id: 2, img: brand_log_2 },
  { id: 3, img: brand_log_3 },
  { id: 4, img: brand_log_4 },
  { id: 5, img: brand_log_5 },
  { id: 6, img: brand_log_6 },
  { id: 7, img: brand_log_7 },
  { id: 8, img: brand_log_8 },
  { id: 9, img: brand_log_9 },
  { id: 10, img: brand_log_10 },
  { id: 11, img: brand_log_11 },
  { id: 12, img: brand_log_12 },
  { id: 13, img: brand_log_13 },
  { id: 14, img: brand_log_14 },
  { id: 15, img: brand_log_15 },
  { id: 16, img: brand_log_16 },
  { id: 17, img: brand_log_17 },
  { id: 18, img: brand_log_18 },
  { id: 19, img: brand_log_19 },
  { id: 20, img: brand_log_20 },
  { id: 21, img: brand_log_21 },
  { id: 22, img: brand_log_22 },
  { id: 23, img: brand_log_23 },
  { id: 24, img: brand_log_24 },
  { id: 25, img: brand_log_25 },
  { id: 26, img: brand_log_26 },
  { id: 27, img: brand_log_27 },
  { id: 28, img: brand_log_28 },
  { id: 29, img: brand_log_29 },
  { id: 30, img: brand_log_30 },
  { id: 31, img: brand_log_31 },
  { id: 32, img: brand_log_32 },
  { id: 33, img: brand_log_33 },
  { id: 34, img: brand_log_34 },
];

const ClientMarquee: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Split brands into 2 rows for dual-direction infinite marquee
  const rowOneBrands = allBrandLogos.slice(0, 17);
  const rowTwoBrands = allBrandLogos.slice(17, 34);

  // Repeat for continuous seamless loop
  const infiniteRowOne = [...rowOneBrands, ...rowOneBrands, ...rowOneBrands];
  const infiniteRowTwo = [...rowTwoBrands, ...rowTwoBrands, ...rowTwoBrands];

  return (
    <section
      className="vt-client-showcase-section"
      id="brand-showcase"
      aria-label="Trusted Industry Leaders"
    >
      {/* Background Animated Ambient Lighting */}
      <div className="vt-marquee-ambient" aria-hidden="true">
        <div className="ambient-orb orb-left" />
        <div className="ambient-orb orb-right" />
        <div className="ambient-dot-grid" />
      </div>

      <div className="container">
        {/* Clean, Focused Header — Free of Clutter */}
        <div className="vt-client-header text-center">
          <div className="client-header-badge">
            <span className="badge-radar">
              <span className="radar-ping" />
            </span>
            <span>CLIENT PARTNERSHIPS</span>
          </div>

          <h2 className="client-header-title">
            TRUSTED BY <span className="highlight-blue">INDUSTRY LEADERS</span>
          </h2>
        </div>
      </div>

      {/* Marquee Stage with Edge Gradients & Dual Scrolling Tracks */}
      <div
        className="vt-marquee-stage"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft edge fade masks for seamless entry/exit */}
        <div className="marquee-edge-fade edge-left" aria-hidden="true" />
        <div className="marquee-edge-fade edge-right" aria-hidden="true" />

        {/* Row 1: Leftward continuous scroll */}
        <div className={`marquee-strip strip-forward ${isHovered ? "is-paused" : ""}`}>
          <div className="strip-inner">
            {infiniteRowOne.map((item, idx) => (
              <div key={`logo-r1-${item.id}-${idx}`} className="client-logo-card">
                <div className="logo-img-wrapper">
                  <Image
                    src={item.img}
                    alt={`Vastora Partner ${item.id}`}
                    width={220}
                    height={68}
                    className="client-logo-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward continuous scroll */}
        <div className={`marquee-strip strip-reverse ${isHovered ? "is-paused" : ""}`}>
          <div className="strip-inner">
            {infiniteRowTwo.map((item, idx) => (
              <div key={`logo-r2-${item.id}-${idx}`} className="client-logo-card">
                <div className="logo-img-wrapper">
                  <Image
                    src={item.img}
                    alt={`Vastora Partner ${item.id}`}
                    width={220}
                    height={68}
                    className="client-logo-img"
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

export default ClientMarquee;
