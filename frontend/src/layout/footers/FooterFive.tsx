"use client";

import React from "react";
import Link from "next/link";
import HeaderLogoHomeFive from "@/svg/logo/header_logo_home_5";

interface FooterFiveProps {
  style?: boolean;
  style_audit?: boolean;
  style_2?: boolean;
}

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/about" },
  { title: "Projects", link: "/portfolio" },
  { title: "Services", link: "/services" },
  { title: "Team", link: "/team" },
  { title: "Contact", link: "/contact" },
];

const legalLinks = [
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms & Conditions", link: "/terms-conditions" },
  { title: "Security Standards", link: "/terms-conditions" },
  { title: "Services SLA", link: "/services" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/in",
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
  {
    name: "Twitter",
    icon: "fa-brands fa-x-twitter",
    url: "https://x.com/Vastora_tech",
  },
];

const FooterFive: React.FC<FooterFiveProps> = ({ style, style_audit, style_2 }) => {
  return (
    <footer className="footer-enhanced-wrap">
      <div className="footer-ambient-aura"></div>

      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Contact Hub */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link">
              <HeaderLogoHomeFive />
            </Link>

            <p className="footer-brand-desc">
              Improve efficiency, provide a better customer experience, and scale
              effortlessly with modern enterprise technology services available.
            </p>

            <div className="footer-contact-actions">
              <a href="tel:+918595658592" className="footer-phone-pill">
                <div className="phone-icon-pod">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="phone-info">
                  <span className="phone-label">Active Line</span>
                  <span className="phone-number">+91 8595658592</span>
                </div>
              </a>

              <Link href="/contact" className="footer-enquire-btn">
                <span>Enquire Now</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-links-col">
            <div className="footer-col-header">
              <span className="header-dot"></span>
              <h4 className="header-title">About</h4>
            </div>

            <ul className="footer-links-list">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Trust */}
          <div className="footer-links-col">
            <div className="footer-col-header">
              <span className="header-dot"></span>
              <h4 className="header-title">Legal</h4>
            </div>

            <ul className="footer-links-list">
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Information & Operating Hours */}
          <div className="footer-hours-col">
            <div className="footer-col-header">
              <span className="header-dot"></span>
              <h4 className="header-title">Information</h4>
            </div>

            <div className="footer-hours-card">
              <div className="hours-row">
                <span className="hours-day">Working days:</span>
                <span className="hours-time">10:00 AM – 6:30 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Saturday:</span>
                <span className="hours-time">10:00 AM – 6:30 PM</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Sunday:</span>
                <span className="hours-time closed">Closed</span>
              </div>

              <div className="support-badge-row">
                <i className="fa-solid fa-envelope"></i>
                <span>vastoratech@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="footer-bottom-bar">
          <p className="footer-copy-text">
            &copy; 2026 Copyrights by <strong>Vastora Tech</strong>. All Rights Reserved.
            Designed by <strong>Vastora Tech</strong>.
          </p>

          <div className="footer-social-row">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-box"
                aria-label={s.name}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;