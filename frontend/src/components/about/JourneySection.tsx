"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import journeyImg from "@/assets/img/banner/about-inner-1.jpeg";

const JourneySection: React.FC = () => {
  return (
    <section className="vt-journey-section" id="our-journey">
      {/* Subtle Oversized Background Watermark */}
      <div className="vt-journey-watermark" aria-hidden="true">
        JOURNEY
      </div>

      <div className="container vt-journey-container">
        <div className="row align-items-center">
          {/* Left Column: Narrative Storytelling with Timeline Accent */}
          <div className="col-lg-6 vt-journey-text-col">
            <div className="vt-section-badge">
              <span className="vt-badge-dot" />
              <span>Our Story</span>
            </div>

            <h2 className="vt-section-title">
              Our Journey
            </h2>

            <div className="vt-journey-timeline-accent">
              <p className="journey-body-text">
                Vastorate was founded with a vision to break the boundaries of digital innovation and empower entrepreneurs everywhere. Inspired by the real challenges businesses face, our journey began in 2014 with a passionate team and a bold idea: to deliver technology that is not only powerful, but also accessible for all.
              </p>

              <p className="journey-body-text">
                From a single office to an international presence, we’ve achieved major milestones — 2,000+ projects delivered, 1,900+ happy clients, and numerous industry awards. Every step has been guided by our commitment to customer success and innovation. Our story is still being written — together with you.
              </p>
            </div>
          </div>

          {/* Right Column: Framed Editorial Photograph */}
          <div className="col-lg-6 vt-journey-image-col">
            <div className="journey-img-frame">
              <Image
                src={journeyImg}
                alt="Vastorate Journey Team"
                className="img-fluid"
                priority={false}
              />

              {/* Floating Pill Accent */}
              <div className="journey-floating-pill">
                <Sparkles size={14} className="pill-star" />
                <span>Founded 2014 · Decade of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
