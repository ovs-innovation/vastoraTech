"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import banner_img from "@/assets/img/about/About-inner-10.jpg";

const WhoWeAre: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  // 3D perspective tilt on image hover
  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
    const rotateY = ((x - centerX) / centerX) * 6;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleImageMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  // Magnetic effect for Contact Us button
  const handleBtnMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnOffset({ x: x * 0.28, y: y * 0.28 });
  };

  const handleBtnMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <section className="vt-who-we-are-section" id="who-we-are">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column (55%): Oversized Framed Photo with 3D Tilt */}
          <div className="col-lg-6 col-xl-6 vt-visual-column">
            <div
              ref={imageContainerRef}
              className="vt-image-container"
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                ["--mouse-x" as any]: `${tilt.glareX}%`,
                ["--mouse-y" as any]: `${tilt.glareY}%`,
              }}
            >
              <Image
                src={banner_img}
                alt="Vastora Tech Team"
                priority
                className="vt-image-main"
              />
              <div className="vt-image-overlay" />
              <div className="vt-pointer-glare" />

              {/* Floating detail tag */}
              <div className="vt-image-badge">
                <span className="badge-icon">
                  <Layers size={18} />
                </span>
                <div>
                  <div className="badge-title">Engineering Culture</div>
                  <div className="badge-sub">High-Impact Digital Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (45%): Editorial Narrative */}
          <div className="col-lg-6 col-xl-6 vt-content-column">
            <div className="vt-section-badge">
              <span className="vt-badge-dot" />
              <span>Who We Are</span>
            </div>

            <h2 className="vt-section-title">
              Who We Are
            </h2>

            <p className="vt-story-p">
              Vastora Tech is your digital partner for modern{" "}
              <Link href="/services/web-development-services">Website Development</Link> and scalable{" "}
              <Link href="/product/e-commerce-solutions">E-Commerce Solutions</Link>. We combine
              strategy, design, and technology to build high-performing websites and online stores
              tailored to your business goals.
            </p>

            <p className="vt-story-p">
              Our team also helps you get discovered online with result-driven{" "}
              <Link href="/services/seo-services">SEO Services</Link> and engaging social media
              marketing, so your brand can reach and convert the right audience.
            </p>

            <p className="vt-story-p">
              Explore some of the work we’ve done on our{" "}
              <Link href="/portfolio">Projects Page</Link>, or let’s discuss how we can support
              your next idea.
            </p>

            {/* Magnetic Hover Contact CTA */}
            <div className="vt-magnetic-cta-wrap">
              <Link
                ref={buttonRef}
                href="/contact"
                className="vt-magnetic-btn"
                onMouseMove={handleBtnMouseMove}
                onMouseLeave={handleBtnMouseLeave}
                style={{
                  transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                }}
              >
                <span className="btn-text">Contact Us</span>
                <span className="btn-icon-arrow">
                  <ArrowRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
