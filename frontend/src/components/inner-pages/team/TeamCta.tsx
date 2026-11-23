"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const TeamCta: React.FC = () => {
  return (
    <section className="vt-team-cta-section">
      <div className="container">
        <div className="vt-team-cta-box">
          <div className="vt-team-cta-bg-glow" aria-hidden="true" />
          
          <div className="vt-team-cta-content text-center">
            <div className="vt-team-cta-badge">
              <Sparkles size={14} />
              <span>START YOUR NEXT PROJECT</span>
            </div>

            <h2 className="vt-team-cta-title">
              Ready to Build With Our Team of Experts?
            </h2>

            <p className="vt-team-cta-desc">
              Whether you need a high-converting eCommerce store, custom web platform, or full digital transformation — our engineers are ready to build it.
            </p>

            <div className="vt-team-cta-actions">
              <Link href="/contact" className="vt-cta-primary-btn">
                <span>Schedule a Free Strategy Call</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/e-commerce-solutions" className="vt-cta-secondary-btn">
                <span>Explore Our Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCta;
