"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutFinalCta: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const lightOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Slow moving background gradient lighting
      if (lightOrbRef.current) {
        gsap.to(lightOrbRef.current, {
          x: 40,
          y: -30,
          scale: 1.25,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 2. Headline smooth reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Subtext fade in
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.15,
            scrollTrigger: {
              trigger: subtextRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Action buttons scale & fade
      if (actionsRef.current) {
        gsap.fromTo(
          actionsRef.current,
          { opacity: 0, scale: 0.94, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.75,
            ease: "back.out(1.3)",
            delay: 0.3,
            scrollTrigger: {
              trigger: actionsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vt-final-cta-section" ref={sectionRef} aria-label="Start a Project CTA">
      {/* Background Soft Lighting Gradients */}
      <div className="final-cta-bg" aria-hidden="true">
        <div className="cta-light-orb" ref={lightOrbRef} />
        <div className="cta-dot-matrix" />
      </div>

      <div className="container">
        <div className="cta-content-wrapper">
          {/* Badge */}
          <div className="cta-top-badge">
            <span className="badge-dot" />
            <span>START YOUR TRANSFORMATION</span>
          </div>

          {/* Required Exact Headline */}
          <h2 className="cta-headline" ref={headlineRef}>
            Ready to Build Something <span className="highlight-cyan">Extraordinary?</span>
          </h2>

          {/* Required Exact Supporting Text */}
          <p className="cta-subtext" ref={subtextRef}>
            Let&apos;s transform your ideas into meaningful digital experiences.
          </p>

          {/* Large White CTA Button with Blue Text */}
          <div className="cta-actions-group" ref={actionsRef}>
            <Link href="/contact" className="cta-btn-white-primary">
              <span className="btn-label">Start a Conversation</span>
              <span className="btn-icon-bubble">
                <ArrowRight size={18} />
              </span>
            </Link>

            <Link href="/portfolio" className="cta-btn-glass-secondary">
              <span>View Case Studies</span>
              <ArrowRight size={14} className="arrow-icon" />
            </Link>
          </div>

          {/* Reassurance Checkpoints */}
          <div className="cta-reassurances-row">
            <div className="reassurance-pill">
              <ShieldCheck size={16} />
              <span>Strict NDA Protected</span>
            </div>
            <div className="reassurance-sep" />
            <div className="reassurance-pill">
              <Clock size={16} />
              <span>Rapid 14-Day Delivery Sprints</span>
            </div>
            <div className="reassurance-sep" />
            <div className="reassurance-pill">
              <Sparkles size={16} />
              <span>Dedicated Technical Lead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCta;
