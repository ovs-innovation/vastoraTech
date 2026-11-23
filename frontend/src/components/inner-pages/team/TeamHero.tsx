"use client";

import React from "react";
import Link from "next/link";
import { Users, Award, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { icon: Users, label: "Core Specialists", value: "6+" },
  { icon: ShieldCheck, label: "In-House Engineering", value: "100%" },
  { icon: Award, label: "Projects Delivered", value: "50+" },
  { icon: Zap, label: "Client Satisfaction", value: "99.8%" },
];

const TeamHero: React.FC = () => {
  return (
    <section className="vt-team-hero">
      <div className="vt-team-hero-bg-grid" aria-hidden="true" />
      <div className="vt-team-hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="vt-team-hero-content text-center">
          {/* Breadcrumb Path */}
          <nav className="vt-team-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="current">Our Team</span>
          </nav>

          {/* Badge */}
          <div className="vt-team-pill-badge">
            <span className="badge-pulse" />
            <span>The Minds Behind Vastora Tech</span>
          </div>

          {/* Heading */}
          <h1 className="vt-team-hero-title">
            The Engineers, Designers & Innovators{" "}
            <span className="highlight-blue">Powering Your Growth.</span>
          </h1>

          {/* Subtitle */}
          <p className="vt-team-hero-subtitle">
            A high-caliber collective of software developers, application architects, and creative technologists dedicated to engineering scalable, high-converting digital solutions.
          </p>

          {/* Quick Stats Grid */}
          <div className="vt-team-stats-strip">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="vt-team-stat-item">
                  <div className="vt-team-stat-icon">
                    <Icon size={18} />
                  </div>
                  <div className="vt-team-stat-text">
                    <span className="stat-val">{stat.value}</span>
                    <span className="stat-lbl">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
