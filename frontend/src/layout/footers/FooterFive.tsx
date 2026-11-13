"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeaderLogoHomeFive from "@/svg/logo/header_logo_home_5";

interface FooterFiveProps {
  style?: boolean;
  style_audit?: boolean;
  style_2?: boolean;
}

const navLinks = [
  { title: "Home", link: "/", active: true },
  { title: "About us", link: "/about" },
  { title: "Projects", link: "/portfolio" },
  { title: "Services", link: "/services" },
  { title: "Team", link: "/team" },
  { title: "Contact", link: "/contact" },
];

const legalLinks = [
  { title: "Privacy Policy", link: "/privacy-policy", hasArrow: true },
  { title: "Terms & Conditions", link: "/terms-conditions" },
  { title: "Security Standards", link: "/terms-conditions" },
  { title: "Services SLA", link: "/services" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/company/vastoratech/",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/vastoratech/",
  },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    url: "https://www.youtube.com/@VastoraTech",
  },
  {
    name: "Pinterest",
    icon: "fa-brands fa-pinterest-p",
    url: "https://in.pinterest.com/vastorat/",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook-f",
    url: "https://www.facebook.com/profile.php?id=61578752105209",
  },
];

const FooterFive: React.FC<FooterFiveProps> = ({ style, style_audit, style_2 }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="footer-spatial-canvas" role="contentinfo">
      {/* ========================================================
          1. 3D SPATIAL BACKGROUND ENVIRONMENT
          Fluted Glass, Sweeping Cobalt Wave, Constellations & Spheres
          ======================================================== */}
      <div className="footer-bg-layer" aria-hidden="true">
        {/* Far-left Architectural Fluted Glass Vertical Strips */}
        <div className="footer-fluted-glass" />

        {/* Sweeping Dynamic Royal Cobalt Oceanic Wave */}
        <div className="footer-ocean-wave-wrap">
          <svg
            className="footer-cobalt-wave-svg"
            viewBox="0 0 1440 480"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#031b4d" />
                <stop offset="45%" stopColor="#063aa8" />
                <stop offset="85%" stopColor="#0256d0" />
                <stop offset="100%" stopColor="#0066ff" />
              </linearGradient>

              <linearGradient id="footerWaveHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(56, 189, 248, 0.9)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.95)" />
                <stop offset="100%" stopColor="rgba(56, 189, 248, 0.4)" />
              </linearGradient>

              <filter id="waveGlow" x="-5%" y="-10%" width="110%" height="130%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ambient Wave Underlayer */}
            <path
              d="M0,190 C320,290 680,110 1050,220 C1220,270 1340,210 1440,160 L1440,480 L0,480 Z"
              fill="url(#footerWaveGrad)"
              opacity="0.95"
            />

            {/* Specular Edge Crest Line */}
            <path
              d="M0,190 C320,290 680,110 1050,220 C1220,270 1340,210 1440,160"
              stroke="url(#footerWaveHighlight)"
              strokeWidth="2.5"
              fill="none"
              filter="url(#waveGlow)"
            />
          </svg>

          {/* Cyber Grid Texture across lower-left & bottom base */}
          <div className="footer-cyber-grid" />

          {/* Constellation Network Lines & Pulsing Nodes over Cobalt Wave */}
          <svg className="footer-constellation-network" viewBox="0 0 1200 360" fill="none">
            {/* Constellation Links */}
            <line x1="620" y1="210" x2="710" y2="160" stroke="rgba(147, 197, 253, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="710" y1="160" x2="800" y2="200" stroke="rgba(147, 197, 253, 0.35)" strokeWidth="1" />
            <line x1="800" y1="200" x2="900" y2="170" stroke="rgba(147, 197, 253, 0.35)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="710" y1="160" x2="760" y2="250" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1" />
            <line x1="800" y1="200" x2="860" y2="270" stroke="rgba(147, 197, 253, 0.25)" strokeWidth="1" />
            <line x1="900" y1="170" x2="980" y2="220" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1" />

            {/* Glowing Network Nodes */}
            <circle cx="620" cy="210" r="3" fill="#67e8f9" className="pulse-node" />
            <circle cx="710" cy="160" r="3.5" fill="#ffffff" className="pulse-node" />
            <circle cx="800" cy="200" r="4" fill="#38bdf8" className="pulse-node" />
            <circle cx="900" cy="170" r="3" fill="#67e8f9" className="pulse-node" />
            <circle cx="760" cy="250" r="2.5" fill="#93c5fd" />
            <circle cx="860" cy="270" r="3" fill="#ffffff" className="pulse-node" />
            <circle cx="980" cy="220" r="3" fill="#38bdf8" />
          </svg>

          {/* 4-Point Diamond Sparkle Star (Bottom Right) */}
          <div className="footer-diamond-sparkle" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>

        {/* 3D Sapphire Chrome Sphere 1 (Bottom Left Wave Crest) */}
        <div className="footer-sapphire-sphere sphere-bottom-left" aria-hidden="true">
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>

        {/* 3D Sapphire Chrome Sphere 2 (Middle Right Wave Slope) */}
        <div className="footer-sapphire-sphere sphere-mid-right" aria-hidden="true">
          <span className="sphere-specular" />
          <span className="sphere-horizon" />
          <span className="sphere-fresnel" />
          <span className="sphere-shadow" />
        </div>
      </div>

      {/* ========================================================
          2. MAIN CONTENT 4-COLUMN ARCHITECTURE
          Brand Hub | About Links | Legal Links | Information Schedule Card
          ======================================================== */}
      <div className="container footer-content-container">
        <div className="footer-spatial-grid">
          {/* Column 1: Brand Identity & Active Line */}
          <div className="footer-brand-column">
            <Link href="/" className="footer-brand-logo-link" aria-label="Vastora Tech Home">
              <HeaderLogoHomeFive style={{ maxHeight: 42, width: "auto" }} />
            </Link>

            <p className="footer-brand-tagline">
              Improve efficiency, provide a better customer experience, and scale effortlessly with modern enterprise technology services available.
            </p>

            <div className="footer-action-pod-group">
              {/* Glassmorphic Active Line Phone Pod with Dynamic Radar Pulse */}
              <a
                href="tel:+918595658592"
                className="footer-active-phone-pod"
                aria-label="Call Vastora Tech Active Line at +91 8595658592"
              >
                <div className="phone-icon-pod">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="phone-meta">
                  <div className="phone-live-indicator">
                    <span className="live-dot" />
                    <span className="live-text">Active Line</span>
                  </div>
                  <span className="phone-number">+91 8595658592</span>
                </div>

                {/* Radar pulse ripples on the right side */}
                <div className="radar-pulse-emitter" aria-hidden="true">
                  <span className="radar-wave wave-1" />
                  <span className="radar-wave wave-2" />
                  <span className="radar-core-dot" />
                </div>
              </a>

              {/* Luxury Electric Blue Enquire Now Button */}
              <Link href="/contact" className="footer-enquire-pill-btn">
                <span>Enquire Now</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links (ABOUT) */}
          <div className="footer-nav-column">
            <div className="footer-column-heading">
              <span className="heading-dot" />
              <h3 className="heading-title">ABOUT</h3>
            </div>

            <ul className="footer-links-list">
              {navLinks.map((item, idx) => {
                const isHovered = hoveredLink === `about-${idx}`;
                return (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className={`footer-link-item ${item.active ? "link-active" : ""}`}
                      onMouseEnter={() => setHoveredLink(`about-${idx}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="link-title">{item.title}</span>
                      {item.active && <span className="active-bullet-dot" aria-hidden="true">●</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Legal & Standards Links (LEGAL) */}
          <div className="footer-nav-column">
            <div className="footer-column-heading">
              <span className="heading-dot" />
              <h3 className="heading-title">LEGAL</h3>
            </div>

            <ul className="footer-links-list">
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="footer-link-item"
                    onMouseEnter={() => setHoveredLink(`legal-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="link-title">{item.title}</span>
                    {item.hasArrow && <span className="link-arrow-indicator" aria-hidden="true">→</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Majestic Glassmorphic Operating Hours Schedule Card */}
          <div className="footer-schedule-column">
            <div className="footer-column-heading">
              <span className="heading-dot" />
              <h3 className="heading-title">INFORMATION</h3>
            </div>

            <div className="footer-glass-schedule-card">
              <div className="card-top-rim" aria-hidden="true" />

              <div className="schedule-hours-body">
                <div className="schedule-row">
                  <span className="schedule-label">Working days:</span>
                  <span className="schedule-val">10:00 AM – 6:30 PM</span>
                </div>

                <div className="schedule-row">
                  <span className="schedule-label">Saturday:</span>
                  <span className="schedule-val">10:00 AM – 6:30 PM</span>
                </div>

                <div className="schedule-row">
                  <span className="schedule-label">Sunday:</span>
                  <span className="schedule-val">
                    <span className="badge-closed">Closed</span>
                  </span>
                </div>
              </div>

              <div className="schedule-card-divider" />

              <a
                href="mailto:vastoratech@gmail.com"
                className="schedule-email-action"
                aria-label="Email Vastora Tech"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>vastoratech@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. BOTTOM BASE: COPYRIGHT & FROSTED SOCIAL SUITE
            Deep Midnight Cobalt Base Row
            ======================================================== */}
        <div className="footer-base-row">
          <p className="footer-copyright-note">
            &copy; 2026 Copyrights by <strong>Vastora Tech</strong>. All Rights Reserved
          </p>

          <div className="footer-base-right-group">
            {/* Frosted Social Media Icon Pills */}
            <div className="footer-frosted-socials" aria-label="Social media links">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-frosted-squircle"
                  aria-label={`Vastora Tech on ${s.name}`}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;
