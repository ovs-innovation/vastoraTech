"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menu_data from "./menu-data";
import Image from "next/image";

const NavMenu = () => {
  const pathname = usePathname();

  const isItemActive = (link: string, id: number) => {
    if (!pathname) return false;
    if (id === 1) return pathname === "/";
    if (id === 3) return pathname.startsWith("/services");
    if (id === 4) return pathname.includes("e-commerce");
    if (id === 5) return pathname.startsWith("/portfolio");
    if (id === 6) return pathname.startsWith("/blog");
    if (id === 7) return pathname === "/contact";
    if (link === "#") return false;
    return pathname === link || pathname.startsWith(link);
  };

  return (
    <ul className="vastora-nav-list">
      {menu_data.map((item, i) => {
        const active = isItemActive(item.link, item.id);
        const isServices = item.id === 3;
        const isEcommerce = item.id === 4;

        return (
          <li
            key={i}
            className={`vastora-nav-item ${
              isServices ? "header-services has-dropdown has-mega-menu" : ""
            } ${active ? "active" : ""}`}
          >
            <Link
              href={item.link}
              className={`vastora-nav-link ${active ? "active" : ""}`}
            >
              <span className="nav-text-wrap">
                {item.title}
                {isEcommerce && (
                  <span className="nav-badge-pill hot">
                    <span className="nav-badge-dot" />
                    HOT
                  </span>
                )}
              </span>
              {isServices && (
                <span className="nav-chevron-icon" aria-hidden="true">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              )}
            </Link>

            {isServices && (
              <div className="vastora-mega-menu-dropdown tp-mega-menu tp-submenu submenu">
                <div className="mega-menu-inner-grid">
                  {/* Left Column: Services Overview */}
                  <div className="mega-services-column">
                    <div className="mega-services-header">
                      <div className="mega-header-title-wrap">
                        <span className="mega-services-pill">Capabilities</span>
                        <h4 className="mega-column-title">Services Overview</h4>
                      </div>
                      <Link href="/services" className="mega-view-all-link">
                        <span>View All</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <ul className="mega-services-list">
                      {item.sub_menus?.map((service_item, s_index) => {
                        const serviceDescriptions: Record<string, string> = {
                          "Web Development": "Custom, fast & scalable web platforms",
                          "Mobile App Development": "Native iOS & Android mobile apps",
                          "Social Media Marketing": "Audience growth & brand engagement",
                          "SEO Services": "Rank #1 and scale organic traffic",
                          "E-commerce Solutions": "High-converting online stores",
                          "UI/UX Design": "Intuitive UX & modern product design",
                        };
                        const serviceColorClasses: Record<string, string> = {
                          "Web Development": "theme-blue",
                          "Mobile App Development": "theme-purple",
                          "Social Media Marketing": "theme-rose",
                          "SEO Services": "theme-emerald",
                          "E-commerce Solutions": "theme-amber",
                          "UI/UX Design": "theme-cyan",
                        };
                        const titleKey = service_item.title || "";
                        const desc = serviceDescriptions[titleKey] || "Tailored digital solutions";
                        const colorClass = serviceColorClasses[titleKey] || "theme-blue";

                        return (
                          <li key={s_index} className="mega-service-item">
                            <Link
                              href={service_item.link}
                              className="mega-service-link"
                            >
                              <span className={`service-icon-wrap ${colorClass}`}>
                                <Image
                                  src={service_item.demo_img}
                                  alt={service_item.title || "VastoraTech"}
                                  title={service_item.title || "VastoraTech"}
                                  width={28}
                                  height={28}
                                />
                              </span>
                              <span className="service-text-group">
                                <span className="service-title-row">
                                  <span className="service-title-text">
                                    {service_item.title}
                                  </span>
                                  <span className="service-hover-arrow" aria-hidden="true">
                                    →
                                  </span>
                                </span>
                                <span className="service-desc-text">
                                  {desc}
                                </span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right Column: Premium Banner Card with Person Visual */}
                  <div className="mega-banner-column">
                    <div className="mega-banner-wrap">
                      <div className="banner-ambient-glow" aria-hidden="true" />
                      
                      <div className="mega-banner-content">
                        <span className="mega-banner-tag">
                          ✨ Full-Cycle Agency
                        </span>
                        <h5 className="mega-banner-title-2">
                          Scale Your Brand <br /> With Custom Tech
                        </h5>
                        <div className="mega-banner-points">
                          <span className="point-item">✓ Fast 5-Day Launch</span>
                          <span className="point-item">✓ Scalable Architecture</span>
                        </div>
                        <div className="mega-banner-btn">
                          <Link href="/services" className="banner-cta-link">
                            <span>Explore All Services</span>
                            <span className="btn-arrow-diag" aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>

                      {item.m_banner && (
                        <div className="mega-banner-thumb">
                          <Image
                            src={item.m_banner}
                            alt="Vastora Tech Software Development"
                            title="Vastora Tech"
                            priority={true}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;

