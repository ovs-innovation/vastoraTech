"use client";

import React from "react";
import { Code2, Zap, ShieldCheck, HeartHandshake } from "lucide-react";

const cultureItems = [
  {
    icon: Code2,
    number: "01",
    title: "Clean, Scalable Architecture",
    description:
      "We build with maintainable, future-proof frameworks — Next.js, TypeScript, headless commerce, and cloud-native microservices engineered to grow effortlessly.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Rapid Sprints & Clear Milestones",
    description:
      "No endless meetings or opaque timelines. We work in disciplined agile sprints with clear weekly deliverables and transparent progress reporting.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Enterprise Quality & Security",
    description:
      "From rigorous automated testing and CI/CD pipelines to enterprise-grade data security and 99.98% architecture uptime SLA guarantees.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Direct Engineering Access",
    description:
      "You speak directly with the engineers and architects building your product — eliminating layers of miscommunication and ensuring alignment.",
  },
];

const TeamCulture: React.FC = () => {
  return (
    <section className="vt-team-culture-section">
      <div className="container">
        <div className="vt-team-section-header text-center">
          <div className="vt-team-sub-badge">
            <span className="dot" />
            <span>HOW WE OPERATE</span>
          </div>
          <h2 className="vt-team-section-title">
            Engineered for Precision, <span className="highlight-blue">Built for Impact</span>
          </h2>
          <p className="vt-team-section-subtitle">
            Our engineering philosophy bridges innovative technical architecture with practical business outcomes.
          </p>
        </div>

        <div className="vt-team-culture-grid">
          {cultureItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="vt-team-culture-card">
                <div className="vt-culture-card-top">
                  <div className="vt-culture-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="vt-culture-number">{item.number}</span>
                </div>
                <h3 className="vt-culture-title">{item.title}</h3>
                <p className="vt-culture-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
