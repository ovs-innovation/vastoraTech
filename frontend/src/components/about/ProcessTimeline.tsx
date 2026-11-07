"use client";

import React, { useState } from "react";
import { Search, Compass, Cpu, TrendingUp } from "lucide-react";

interface StepItem {
  id: number;
  displayNumber: string;
  title: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    id: 1,
    displayNumber: "01",
    title: "Understanding Your Needs and Goals",
    icon: <Search size={18} />,
  },
  {
    id: 2,
    displayNumber: "02",
    title: "Developing a Custom Strategy",
    icon: <Compass size={18} />,
  },
  {
    id: 3,
    displayNumber: "03",
    title: "Implementing the Strategy and Monitoring Results",
    icon: <Cpu size={18} />,
  },
  {
    id: 4,
    displayNumber: "04",
    title: "Continuous Optimization and Improvement",
    icon: <TrendingUp size={18} />,
  },
];

const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="vt-process-section" id="how-we-do-it">
      <div className="container">
        {/* Section Header */}
        <div className="vt-process-header">
          <div className="vt-section-badge">
            <span className="vt-badge-dot" />
            <span>How we do it</span>
          </div>
          <h2 className="vt-section-title">
            Helping others Succeed
          </h2>
        </div>

        {/* Desktop Horizontal Connected Timeline */}
        <div className="vt-timeline-desktop">
          {/* Animated Connecting SVG Path */}
          <svg
            className="vt-timeline-line-svg"
            viewBox="0 0 1000 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="2" x2="1000" y2="2" className="line-bg" />
            <line x1="0" y1="2" x2="1000" y2="2" className="line-active" />
            <circle cx="20" cy="2" r="4" className="line-pulse-dot" />
          </svg>

          {/* Steps Grid */}
          <div className="vt-timeline-grid">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  className={`vt-process-card ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  {/* Geometric Marker Node */}
                  <div className="card-node-indicator">
                    <span className="node-inner-dot" />
                  </div>

                  {/* Step Number */}
                  <span className="card-step-num">{step.displayNumber}</span>

                  {/* Step Title */}
                  <h3 className="card-step-title">{step.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="vt-timeline-mobile">
          {steps.map((step) => (
            <div key={`m-${step.id}`} className="vt-mobile-step-card">
              <span className="mobile-node-dot" />
              <div className="mobile-step-num">{step.displayNumber}</div>
              <h3 className="mobile-step-title">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
