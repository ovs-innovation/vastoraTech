"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const rowOneBrands = [
  { id: 23, name: "ACE DIVINO", logo: "/assets/img/brand/trimmed/brand23.png" },
  { id: 6, name: "Candy Floss", logo: "/assets/img/brand/trimmed/brand6.png" },
  { id: 7, name: "Natures Pharmaceuticals", logo: "/assets/img/brand/trimmed/brand7.png" },
  { id: 9, name: "KHALIHAR", logo: "/assets/img/brand/trimmed/brand9.png" },
  { id: 5, name: "Q-Travel Tech", logo: "/assets/img/brand/trimmed/brand5.png" },
  { id: 1, name: "CredSol", logo: "/assets/img/brand/trimmed/brand1.png" },
  { id: 2, name: "Botso AI", logo: "/assets/img/brand/trimmed/brand2.png" },
  { id: 28, name: "Kaari Organic", logo: "/assets/img/brand/trimmed/brand28.png" },
  { id: 20, name: "D Allure Couture", logo: "/assets/img/brand/trimmed/brand20.png" },
  { id: 22, name: "Civic Portal", logo: "/assets/img/brand/trimmed/brand22.png" },
];

const rowTwoBrands = [
  { id: 10, name: "Brand Ten", logo: "/assets/img/brand/trimmed/brand10.png" },
  { id: 11, name: "Brand Eleven", logo: "/assets/img/brand/trimmed/brand11.png" },
  { id: 12, name: "Brand Twelve", logo: "/assets/img/brand/trimmed/brand12.png" },
  { id: 13, name: "Brand Thirteen", logo: "/assets/img/brand/trimmed/brand13.png" },
  { id: 14, name: "Brand Fourteen", logo: "/assets/img/brand/trimmed/brand14.png" },
  { id: 15, name: "Brand Fifteen", logo: "/assets/img/brand/trimmed/brand15.png" },
  { id: 16, name: "Brand Sixteen", logo: "/assets/img/brand/trimmed/brand16.png" },
  { id: 17, name: "Brand Seventeen", logo: "/assets/img/brand/trimmed/brand17.png" },
  { id: 18, name: "Brand Eighteen", logo: "/assets/img/brand/trimmed/brand18.png" },
  { id: 19, name: "Brand Nineteen", logo: "/assets/img/brand/trimmed/brand19.png" },
];

const BrandAreaHomeFour: React.FC = () => {
  return (
    <section
      className="vt-brand-clean-section"
      id="partnerships"
      aria-label="Our Trusted Clients & Partners"
    >
      <div className="container">
        {/* Section Header */}
        <div className="vt-brand-header text-center">
          <div className="vt-brand-eyebrow">
            <span className="badge-dot" />
            <span>PARTNERSHIP ECOSYSTEM</span>
          </div>

          <h2 className="vt-brand-heading">
            Trusted by the <span className="vt-brand-serif-italic">best</span>
          </h2>

          <p className="vt-brand-subheading">
            Powering high-impact digital experiences for 150+ leading enterprises, fast-growing brands, and innovative startups.
          </p>
        </div>
      </div>

      {/* Infinite Logo Slider Container */}
      <div className="vt-brand-slider-wrapper">
        {/* Track 1: Scrolls Left */}
        <div className="vt-brand-marquee-row row-scroll-left">
          <div className="vt-brand-marquee-track">
            {[...rowOneBrands, ...rowOneBrands].map((item, idx) => (
              <div key={`r1-${item.id}-${idx}`} className="vt-brand-card">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={42}
                  className="brand-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Scrolls Right */}
        <div className="vt-brand-marquee-row row-scroll-right">
          <div className="vt-brand-marquee-track">
            {[...rowTwoBrands, ...rowTwoBrands].map((item, idx) => (
              <div key={`r2-${item.id}-${idx}`} className="vt-brand-card">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={42}
                  className="brand-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Footer Action */}
      <div className="container">
        <div className="vt-brand-footer text-center">
          <Link href="/portfolio" className="vt-brand-explore-btn">
            <span>Explore Client Work & Case Studies</span>
            <ArrowUpRight size={15} className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandAreaHomeFour;
