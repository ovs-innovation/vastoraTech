"use client";

import React, { useState, useEffect, useRef } from "react";
import { Award, Briefcase, HeartHandshake, Users } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "Pioneering digital excellence since 2014",
    icon: <Award size={24} />,
  },
  {
    id: 2,
    value: 2000,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "High-speed web & eCommerce systems",
    icon: <Briefcase size={24} />,
  },
  {
    id: 3,
    value: 1900,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Across 14+ countries and global markets",
    icon: <HeartHandshake size={24} />,
  },
  {
    id: 4,
    value: 50,
    suffix: "+",
    label: "Team Specialists",
    sublabel: "Engineers, UX designers & strategists",
    icon: <Users size={24} />,
  },
];

// Smooth Animated Number that always displays real metrics
const AnimatedStatNumber: React.FC<{ target: number }> = ({ target }) => {
  const [displayValue, setDisplayValue] = useState<number>(target);
  const spanRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    // Start at 0 on client mount to begin animation
    setDisplayValue(0);

    const el = spanRef.current;
    if (!el) {
      setDisplayValue(target);
      return;
    }

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1600; // 1.6s
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(ease * target);
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setDisplayValue(target);
        }
      };

      requestAnimationFrame(tick);
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    } else {
      startAnimation();
    }

    // Safety fallback: if not intersected within 800ms, display the full target number
    const timer = setTimeout(() => {
      if (!animatedRef.current) {
        startAnimation();
      }
    }, 800);

    return () => {
      if (observer) observer.disconnect();
      clearTimeout(timer);
    };
  }, [target]);

  return <span ref={spanRef}>{displayValue.toLocaleString()}</span>;
};

const CompanyStats: React.FC = () => {
  return (
    <section className="vt-stats-section" id="company-impact-numbers" aria-label="Company Impact and Statistics">
      <div className="container">
        {/* Section Header */}
        <div className="vt-stats-header text-center">
          <div className="vt-section-badge mb-3">
            <span className="vt-badge-dot" />
            <span>MEASURABLE IMPACT</span>
          </div>
          <h2 className="vt-stats-title">
            Proven Numbers That <span className="highlight-blue">Speak for Themselves.</span>
          </h2>
          <p className="vt-stats-subtitle">
            A decade of relentless technical iteration and client dedication translated into hard metrics.
          </p>
        </div>

        <div className="vt-stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="vt-stat-card">
              <div className="stat-card-icon-pill">{stat.icon}</div>

              <div className="stat-number-wrap">
                <AnimatedStatNumber target={stat.value} />
                <span className="stat-plus">{stat.suffix}</span>
              </div>

              <h3 className="stat-card-heading">{stat.label}</h3>
              <p className="stat-card-sublabel">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;