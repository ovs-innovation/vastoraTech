"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Compass, Search, Cpu, TrendingUp, Sparkles } from "lucide-react";

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TEXT_LEFT_OFFSET = 126; // Unified vertical baseline for all 4 text blocks

const steps: StepItem[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Understanding Your Needs and Goals",
    description:
      "We dive deep into your brand vision, operational bottlenecks, target audience, and growth objectives to lay an airtight foundation for sustainable technical success.",
    icon: <Search size={16} />,
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Developing a Custom Strategy",
    description:
      "We architect a bespoke technical and creative roadmap tailored specifically to your market positioning, conversion funnels, microservices, and revenue targets.",
    icon: <Compass size={16} />,
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Implementing the Strategy and Monitoring Results",
    description:
      "Our engineering and marketing specialists deploy high-impact digital solutions with continuous integration while monitoring analytics, telemetry, and KPIs in real time.",
    icon: <Cpu size={16} />,
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Continuous Optimization and Improvement",
    description:
      "We continuously refine user journeys, execute iterative A/B conversion tests, and scale your digital ecosystem for compounding, long-term brand authority and profitability.",
    icon: <TrendingUp size={16} />,
  },
];

// Initial SSR default values (pure geometric circular arc)
const DEFAULT_NODE_X = [34, 83, 83, 34];
const DEFAULT_PATH = "M 18.7 15.0 A 428 428 0 0 1 18.7 485.0";

const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [nodeXPositions, setNodeXPositions] = useState<number[]>(DEFAULT_NODE_X);
  const [pathD, setPathD] = useState<string>(DEFAULT_PATH);

  /**
   * Calculates a mathematically pure circular arc passing directly through the centers of
   * all 4 checkpoint dots using true circle geometry (x = Cx + sqrt(R^2 - (y - Cy)^2)).
   */
  const updateGeometricArc = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width === 0 || containerRect.height === 0) return;

    const rowYs: number[] = [];
    for (let i = 0; i < steps.length; i++) {
      const el = stepRowRefs.current[i];
      if (!el) return;
      const r = el.getBoundingClientRect();
      // Center of the checkpoint dot: top of row + 15px (halfway into 28px dot + 1px top)
      rowYs.push(r.top + 15 - containerRect.top);
    }

    if (rowYs.length === 4) {
      const y0 = rowYs[0];
      const y3 = rowYs[3];
      const Hspan = Math.max(100, y3 - y0);
      const Yc = (y0 + y3) / 2;

      // Arc curvature bulge to the right
      const dx = 52;
      const R = Math.round(((Hspan / 2) ** 2 + dx ** 2) / (2 * dx));
      const Xmin = 34;
      const Xmax = Xmin + dx;
      const Cx = Xmax - R;

      // Compute exact X on circle for each step
      const calculatedX = rowYs.map((y) => {
        const dy = y - Yc;
        const under = R * R - dy * dy;
        if (under < 0) return Xmin;
        return Math.round(Cx + Math.sqrt(under));
      });

      setNodeXPositions(calculatedX);

      // Smooth lead-in above first dot and lead-out below last dot on same circle
      const yStart = Math.max(0, y0 - 24);
      const yEnd = Math.min(containerRect.height, y3 + 24);
      const dyStart = yStart - Yc;
      const dyEnd = yEnd - Yc;
      const xStart = (Cx + Math.sqrt(Math.max(0, R * R - dyStart * dyStart))).toFixed(1);
      const xEnd = (Cx + Math.sqrt(Math.max(0, R * R - dyEnd * dyEnd))).toFixed(1);

      // SVG native circular arc command
      const arcPath = `M ${xStart} ${yStart.toFixed(1)} A ${R} ${R} 0 0 1 ${xEnd} ${yEnd.toFixed(1)}`;
      setPathD(arcPath);
    }
  }, []);

  useEffect(() => {
    updateGeometricArc();

    const t1 = setTimeout(updateGeometricArc, 60);
    const t2 = setTimeout(updateGeometricArc, 260);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateGeometricArc();
      });
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateGeometricArc);

    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateGeometricArc).catch(() => {});
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", updateGeometricArc);
    };
  }, [updateGeometricArc]);

  return (
    <section className="vt-process-section" id="how-we-work" aria-label="Our Process">
      <div className="container">
        <div className="vt-process-layout">
          {/* Left Column: Editorial Headline & Overview */}
          <div className="vt-process-left">
            <div className="vt-section-badge">
              <span className="vt-badge-dot" />
              <span>HOW WE WORK</span>
            </div>

            <h2 className="vt-process-title">
              <span className="title-dark">From Vision to</span>
              <span className="title-blue">Reality.</span>
            </h2>

            <p className="vt-process-subtext">
              We engineer high-impact solutions through a disciplined 4-stage methodology that
              ensures technical rigor, transparent velocity, and compounding client returns.
            </p>

            <div className="vt-process-callout">
              <div className="callout-icon-box">
                <Sparkles size={18} />
              </div>
              <div className="callout-body">
                <strong>Structured Agile Delivery</strong>
                <p>Every milestone is validated against real-world conversion metrics and commercial KPIs.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Flawlessly Rounded Circular Arc Timeline */}
          <div className="vt-process-right" ref={containerRef}>
            {/* Pure SVG Geometric Circular Arc */}
            <svg
              className="vt-arc-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="arcBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.65" />
                </linearGradient>
              </defs>
              {/* Subtle background guide path */}
              <path d={pathD} className="arc-path-bg" />
              {/* Primary illuminated gradient circular arc */}
              <path d={pathD} className="arc-path-line" stroke="url(#arcBlueGrad)" />
            </svg>

            {/* The 4 Checkpoint Steps */}
            <div className="vt-arc-list">
              {steps.map((step, idx) => {
                const isActive = activeStep === step.id;
                const nodeX = nodeXPositions[idx] ?? DEFAULT_NODE_X[idx];
                const connectorLeft = nodeX + 14;
                const connectorWidth = Math.max(6, TEXT_LEFT_OFFSET - connectorLeft - 10);

                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      stepRowRefs.current[idx] = el;
                    }}
                    className={`vt-arc-item ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    onClick={() => setActiveStep((prev) => (prev === step.id ? null : step.id))}
                  >
                    {/* Concentric Node Circle Centered Exactly on Circular Arc */}
                    <div
                      className="vt-arc-node"
                      style={{ left: `${nodeX - 14}px` }}
                      aria-hidden="true"
                    >
                      <div className="node-ring">
                        <div className="node-center-dot" />
                      </div>
                    </div>

                    {/* Subtle horizontal connector from the dot to the uniform text column */}
                    <div
                      className="node-connector-line"
                      style={{
                        left: `${connectorLeft}px`,
                        width: `${connectorWidth}px`,
                      }}
                      aria-hidden="true"
                    />

                    {/* Step Content: ALL 4 ITEMS UNIFORMLY ALIGNED TO EXACTLY TEXT_LEFT_OFFSET */}
                    <div
                      className="vt-arc-info"
                      style={{ paddingLeft: `${TEXT_LEFT_OFFSET}px` }}
                    >
                      <div className="step-num-badge">
                        <span className="step-num">{step.stepNumber}</span>
                        <span className="step-num-sep">/</span>
                        <span className="step-num-total">04</span>
                      </div>
                      <h3 className="vt-arc-heading">{step.title}</h3>
                      <p className="vt-arc-description">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;