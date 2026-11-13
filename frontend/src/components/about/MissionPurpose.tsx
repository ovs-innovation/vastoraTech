"use client";

import React, { useEffect, useRef } from "react";
import { Compass, Target, Sparkles, Layers, ShieldCheck, Zap, Globe2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MissionPurpose: React.FC = () => {
  const missionBlockRef = useRef<HTMLDivElement>(null);
  const visionBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle fade-up entrance animation for Mission block
      if (missionBlockRef.current) {
        gsap.fromTo(
          missionBlockRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: missionBlockRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Gentle fade-up entrance animation for Vision block
      if (visionBlockRef.current) {
        gsap.fromTo(
          visionBlockRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionBlockRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="vt-mission-vision-section" id="mission-vision" aria-label="Our Mission and Vision">
      {/* ========================================================
          EDITORIAL PANEL 1: OUR MISSION (Pure White #FFFFFF)
          ======================================================== */}
      <div className="mission-panel-white" ref={missionBlockRef}>
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column: Heading and Narrative */}
            <div className="col-lg-6">
              <div className="editorial-text-wrap">
                <div className="vt-section-badge">
                  <span className="vt-badge-dot" />
                  <span>OUR MISSION</span>
                </div>

                <h2 className="editorial-main-title">
                  Engineering Resilient Digital Systems That{" "}
                  <span className="text-primary-blue">Fuel Market Dominance.</span>
                </h2>

                <p className="editorial-lead">
                  At Vastora Tech, our mission is to eliminate digital friction between ambitious businesses
                  and their customers. We blend high-performance Next.js architectures, modern cloud
                  microservices, and human-first UX design into platforms that perform under pressure and convert relentlessly.
                </p>

                <p className="editorial-body">
                  We don’t settle for off-the-shelf templates. Every architecture we produce is bespoke,
                  built for speed, accessibility, and high transaction volume, ensuring your company
                  commands digital authority from day one.
                </p>
              </div>
            </div>

            {/* Right Column: 3 Elegant Accent Graphic Pillars */}
            <div className="col-lg-6">
              <div className="editorial-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="pillar-info">
                    <h3 className="pillar-title">Architectural Rigor</h3>
                    <p className="pillar-desc">
                      Zero-compromise engineering, high-throughput microservices, sub-second latency, and ISO-grade security standards.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Compass size={22} />
                  </div>
                  <div className="pillar-info">
                    <h3 className="pillar-title">Human-Centered Design</h3>
                    <p className="pillar-desc">
                      Intuitive, bespoke UX journeys meticulously designed to elevate brand perception, reduce bounce rates, and multiply conversions.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Zap size={22} />
                  </div>
                  <div className="pillar-info">
                    <h3 className="pillar-title">Measurable Commercial ROI</h3>
                    <p className="pillar-desc">
                      Every code release and design iteration is mapped to measurable business outcomes, customer retention, and compounding revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          EDITORIAL PANEL 2: OUR VISION (Very Light Blue #F4F8FF)
          ======================================================== */}
      <div className="vision-panel-lightblue" ref={visionBlockRef}>
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column: 3 Strategic Horizon Pillars */}
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="editorial-pillars-grid">
                <div className="pillar-item vision-pillar">
                  <div className="pillar-icon-box">
                    <Globe2 size={22} />
                  </div>
                  <div className="pillar-info">
                    <h3 className="pillar-title">Headless Commerce Everywhere</h3>
                    <p className="pillar-desc">
                      Pioneering decoupled, ultra-fast eCommerce storefronts deployed seamlessly at the edge for instant worldwide load times.
                    </p>
                  </div>
                </div>

                <div className="pillar-item vision-pillar">
                  <div className="pillar-icon-box">
                    <Sparkles size={22} />
                  </div>
                  <div className="pillar-info">
                    <h3 className="pillar-title">AI-Accelerated Platforms</h3>
                    <p className="pillar-desc">
                      Integrating predictive user personalization, intelligent search, and autonomous business workflows directly into digital platforms.
                    </p>
                  </div>
                </div>

                <div className="pillar-item vision-pillar">
                  <div className="pillar-icon-box">
                    <Layers size={22} />
                  </div>
                  <div className="pillar-info">
                    <h3 className="pillar-title">Uncapped Global Scale</h3>
                    <p className="pillar-desc">
                      Building elastic serverless architectures capable of seamlessly supporting millions of concurrent transactions with zero degradation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heading and Forward-Looking Narrative */}
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="editorial-text-wrap">
                <div className="vt-section-badge">
                  <span className="vt-badge-dot" />
                  <span>OUR VISION</span>
                </div>

                <h2 className="editorial-main-title">
                  Shaping the Global Standard for{" "}
                  <span className="text-primary-blue">Intelligent Digital Commerce.</span>
                </h2>

                <p className="editorial-lead">
                  We envision an ecosystem where digital commerce is fluid, context-aware, and effortlessly
                  responsive. As modern consumers demand instant gratification, Vastora Tech leads the frontier of intelligent full-stack engineering.
                </p>

                <p className="editorial-body">
                  By converging modern frontend performance, headless composable architectures, and AI-assisted
                  conversion optimization, we empower our partners to stay 5 steps ahead of their competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPurpose;
