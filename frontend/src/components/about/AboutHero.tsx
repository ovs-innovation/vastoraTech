"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, ChevronDown, Layers } from "lucide-react";
import gsap from "gsap";
import banner_img from "@/assets/img/about/About-inner-10.jpg";

interface WordItem {
  text: string;
  isBlue?: boolean;
}

const headlineWords: WordItem[] = [
  { text: "We" },
  { text: "Build" },
  { text: "Digital", isBlue: true },
  { text: "Experiences", isBlue: true },
  { text: "That" },
  { text: "Move" },
  { text: "Businesses", isBlue: true },
  { text: "Forward.", isBlue: true },
];

const AboutHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const leadTextRef = useRef<HTMLParagraphElement>(null);
  const trustBarRef = useRef<HTMLDivElement>(null);

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, moveX: 0, moveY: 0 });

  // GSAP Signature Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Headline word-by-word reveal
      const validWords = wordsRef.current.filter(Boolean);
      if (validWords.length > 0) {
        gsap.fromTo(
          validWords,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.055,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }

      // 2. Cinematic Clip-Path image reveal
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          {
            clipPath: "inset(100% 0% 0% 0% round 24px)",
            scale: 1.08,
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.35,
          }
        );
      }

      // 3. Subtle slow moving blue gradient orb behind image
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          x: 25,
          y: -25,
          scale: 1.15,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 4. Supporting text fade up
      if (leadTextRef.current) {
        gsap.fromTo(
          leadTextRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.65 }
        );
      }

      // 5. CTA scale & fade in
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { scale: 0.92, opacity: 0, y: 16 },
          { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.4)", delay: 0.8 }
        );
      }

      // 6. Trust bar fade in
      if (trustBarRef.current) {
        gsap.fromTo(
          trustBarRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.95 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Subtle mouse-responsive parallax effect on hero image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageBoxRef.current) return;
      const rect = imageBoxRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      // Subtle, controlled tilt (max 4.5 degrees)
      setTilt({
        rotateX: Math.max(-4.5, Math.min(4.5, -mouseY * 4.5)),
        rotateY: Math.max(-4.5, Math.min(4.5, mouseX * 4.5)),
        moveX: mouseX * 8,
        moveY: mouseY * 8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("brand-showcase") || document.getElementById("our-story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="vt-hero-awwwards" ref={heroRef} aria-label="About Vastora Tech Hero">
      {/* Background Soft Lighting Gradients */}
      <div className="vt-hero-bg-canvas" aria-hidden="true">
        <div className="vt-hero-light-orb orb-top-left" />
        <div className="vt-hero-light-orb orb-center" />
        <div className="vt-hero-subtle-grid" />
      </div>

      <div className="container vt-hero-container">
        <div className="row align-items-center g-5">
          {/* Left Column: Headline, Narrative, and Actions */}
          <div className="col-lg-7 col-xl-6">
            <div className="vt-hero-content">
              {/* Badge */}
              <div className="vt-section-badge">
                <span className="vt-badge-dot" />
                <span>ABOUT VASTORA TECH</span>
              </div>

              {/* Signature Word-by-Word Headline */}
              <h1 className="vt-hero-title">
                {headlineWords.map((item, idx) => (
                  <span key={idx} className="vt-word-mask">
                    <span
                      ref={(el) => {
                        wordsRef.current[idx] = el;
                      }}
                      className={`vt-word-inner ${item.isBlue ? "is-blue" : ""}`}
                    >
                      {item.text}
                    </span>
                    {idx < headlineWords.length - 1 && " "}
                  </span>
                ))}
              </h1>

              {/* Short Company Introduction */}
              <p className="vt-hero-intro" ref={leadTextRef}>
                We are a creative engineering and digital innovation studio. Since 2014, we have
                co-created high-impact web architectures, enterprise eCommerce platforms, and
                scalable digital ecosystems designed to accelerate market leadership.
              </p>

              {/* CTA Action Button */}
              <div className="vt-hero-actions" ref={ctaRef}>
                <Link href="/contact" className="vt-hero-cta-btn">
                  <span className="cta-text">Let&apos;s Work Together</span>
                  <span className="cta-icon-pill">
                    <ArrowRight size={16} />
                  </span>
                </Link>

                <Link href="/product/e-commerce-solutions" className="vt-hero-link-btn">
                  <span>Explore Solutions</span>
                  <ArrowRight size={14} className="link-arrow" />
                </Link>
              </div>

              {/* Minimal Trust Checkpoints */}
              <div className="vt-hero-trust-row" ref={trustBarRef}>
                <div className="trust-pill">
                  <ShieldCheck size={16} className="trust-icon" />
                  <span>ISO-Certified Engineering</span>
                </div>
                <div className="trust-divider" />
                <div className="trust-pill">
                  <Sparkles size={16} className="trust-icon" />
                  <span>10+ Years Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Image Composition with Parallax & Clip-path */}
          <div className="col-lg-5 col-xl-6">
            <div className="vt-hero-visual" ref={imageBoxRef}>
              {/* Subtle Blue Gradient Orb Behind Image */}
              <div className="hero-gradient-orb" ref={orbRef} aria-hidden="true" />

              {/* Main Image Frame with 3D Tilt Parallax */}
              <div
                className="hero-image-frame"
                ref={imageFrameRef}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(${tilt.moveX}px, ${tilt.moveY}px, 0)`,
                }}
              >
                <div className="image-aspect-box">
                  <Image
                    src={banner_img}
                    alt="Vastora Tech Innovation Team"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                    className="hero-main-photo"
                  />
                  <div className="image-overlay-scrim" />
                </div>

                {/* Floating Metrics Badge: Top Right */}
                <div className="hero-floating-badge badge-top-right">
                  <div className="badge-icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div className="badge-text-box">
                    <span className="badge-kicker">PROVEN TRACK RECORD</span>
                    <strong className="badge-heading">10+ Years of Impact</strong>
                  </div>
                </div>

                {/* Floating Metrics Badge: Bottom Left */}
                <div className="hero-floating-badge badge-bottom-left">
                  <div className="badge-icon-box">
                    <Layers size={16} />
                  </div>
                  <div className="badge-text-box">
                    <span className="badge-kicker">CLIENT SATISFACTION</span>
                    <strong className="badge-heading">99.4% Retention Rate</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div
          className="vt-hero-scroll-prompt"
          onClick={handleScrollDown}
          role="button"
          tabIndex={0}
          aria-label="Scroll to discover more"
        >
          <div className="scroll-track">
            <div className="scroll-dot" />
          </div>
          <span className="scroll-label">Scroll to explore</span>
          <ChevronDown size={14} className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
