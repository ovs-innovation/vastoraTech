"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CHAPTERS_DATA = [
  {
    num: "01",
    tag: "INSIGHTS",
    title: "Good ideas deserve better digital experiences.",
    desc: "Empirical behavioral science meets rigorous software architecture. We eliminate checkout friction so buyer intent converts effortlessly into sustainable growth.",
  },
  {
    num: "02",
    tag: "COMMERCE",
    title: "Sub-second storefronts engineered for enterprise scale.",
    desc: "Headless Shopify architectures, distributed edge caches, and optimistic UI updates designed to compound revenue with zero downtime.",
  },
  {
    num: "03",
    tag: "TECHNOLOGY",
    title: "Resilient systems built for durability, speed, and precision.",
    desc: "Decoupled microservices, Next.js App Router, and event-driven data pipelines that withstand massive seasonal traffic peaks without flinching.",
  },
  {
    num: "04",
    tag: "GROWTH",
    title: "Dominating organic search through technical authority.",
    desc: "Automated schema networks, Core Web Vitals optimization, and semantic entity hierarchies that modern search algorithms actively reward.",
  },
];

const BlogBrandStatement: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const slabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(".slab-giant-num, .slab-title, .slab-desc", {
        clearProps: "all",
        opacity: 1,
        visibility: "visible",
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Natural, crisp typographic entrance on each organic slab:
      // Finishes early (top 60%) so it is 100% visible and settled during the full reading phase
      slabRefs.current.forEach((slab) => {
        if (!slab) return;

        const numEl = slab.querySelector(".slab-giant-num");
        const titleEl = slab.querySelector(".slab-title");
        const descEl = slab.querySelector(".slab-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slab,
            start: "top 88%",
            end: "top 58%",
            scrub: 1.0,
          },
        });

        if (numEl) {
          tl.fromTo(numEl, { x: 20, opacity: 0.8 }, { x: 0, opacity: 1, ease: "power1.out" }, 0);
        }
        if (titleEl) {
          tl.fromTo(titleEl, { y: 14, opacity: 0.8 }, { y: 0, opacity: 1, ease: "power1.out" }, 0.05);
        }
        if (descEl) {
          tl.fromTo(descEl, { y: 12, opacity: 0.8 }, { y: 0, opacity: 1, ease: "power1.out" }, 0.1);
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="organic-manifesto-section" aria-label="Brand Philosophy Slabs">
      <div className="editorial-fluid-container">
        {/* Overhead Natural Header */}
        <div className="manifesto-overhead-row">
          <div className="overhead-badge-pill">
            <span className="badge-index">05</span>
            <span className="badge-sep">/</span>
            <span className="badge-text">Foundational Pillars</span>
          </div>

          <span className="overhead-subtitle">
            Four Commitments to Architectural Excellence
          </span>
        </div>

        {/* 4 Sculptural Slabs with Asymmetric Curves */}
        <div className="manifesto-slabs-stack">
          {CHAPTERS_DATA.map((chap, idx) => (
            <div
              key={chap.num}
              ref={(el) => {
                slabRefs.current[idx] = el;
              }}
              className={`organic-slab slab-variant-${(idx % 2) + 1}`}
            >
              <div className="slab-id-box">
                <span className="slab-giant-num">{chap.num}</span>
                <span className="slab-tag-badge">{chap.tag}</span>
              </div>

              <div className="slab-copy-box">
                <h3 className="slab-title">{chap.title}</h3>
                <p className="slab-desc">{chap.desc}</p>
              </div>

              <div className="slab-arrow-indicator">
                <div className="indicator-circle">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBrandStatement;
