"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavMenu from "./Menu/nav-menu";
import OffcanvasArea from "@/components/common/OffcanvasArea";
import HeaderLogoHomeFive from "@/svg/logo/header_logo_home_5";
import useSticky from "@/hooks/use-sticky";

const HeaderFive = () => {
  const { sticky } = useSticky();
  const [openCanvas, setOpenCanvas] = useState(false);

  return (
    <>
      <header className="vastora-header-wrapper">
        <div
          id="header-sticky"
          className={`vastora-navbar ${
            sticky ? "header-sticky is-sticky" : ""
          }`}
        >
          <div className="vastora-navbar-container">
            {/* 1. Brand Logo */}
            <div className="vastora-navbar-brand">
              <Link href="/" aria-label="Vastora Tech - Home" className="brand-logo-link">
                <HeaderLogoHomeFive className="vastora-brand-logo header-logo-home-five" />
              </Link>
            </div>

            {/* 2. Desktop Navigation Menu */}
            <div className="vastora-navbar-nav d-none d-xl-block">
              <nav className="tp-main-menu-content" aria-label="Main Navigation">
                <NavMenu />
              </nav>
            </div>

            {/* 3. Right Action Area */}
            <div className="vastora-navbar-actions">
              {/* Enhanced 'Get a Quote' Call to Action */}
              <div className="header-quote-wrapper d-none d-sm-block">
                <Link
                  href="/contact"
                  className="enhanced-quote-button"
                  aria-label="Get a Quote from Vastora Tech"
                >
                  <span className="btn-content">
                    <span className="btn-label">Get a Quote</span>
                    <span className="btn-arrow-icon" aria-hidden="true">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33334 8H12.6667"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 3.33334L12.6667 8.00001L8 12.6667"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="btn-glow-layer" aria-hidden="true" />
                </Link>
              </div>

              {/* Modern Hamburger Button for Mobile / Tablet */}
              <div className="offcanvas-toggle-wrapper d-xl-none">
                <button
                  type="button"
                  className="modern-hamburger-btn"
                  onClick={() => setOpenCanvas(true)}
                  aria-label="Open mobile menu"
                >
                  <span className="hamburger-line line-1" />
                  <span className="hamburger-line line-2" />
                  <span className="hamburger-line line-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasArea openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
    </>
  );
};

export default HeaderFive;
