"use client";

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import team_data from "@/data/team";

interface TeamMember3D {
  id: number;
  avatar: any;
  name: string;
  job_title: string;
  tag: string;
}

interface Floating3DCardsSectionProps {
  title?: string;
  badge?: string;
  description?: string;
}

const CARD_WIDTH = 350;
const CARD_GAP = 28;

const Floating3DCardsSection: React.FC<Floating3DCardsSectionProps> = ({
  badge = "The Minds Behind Vastora",
  title = "Meet Our Team of Experts, Driving Digital Excellence.",
  description = "A collaborative powerhouse of full-stack engineers, cloud architects, and growth strategists dedicated to delivering transformative client results.",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Map original team data from team.ts with clean upright alignment
  const enrichedTeam: TeamMember3D[] = useMemo(() => {
    return team_data.map((item) => ({
      ...item,
      tag: item.id === 1 ? "Leadership" : "Expert",
    }));
  }, []);

  // Repeat 3 times to create a seamless infinite loop
  const repeatedTeam = useMemo(
    () => [...enrichedTeam, ...enrichedTeam, ...enrichedTeam],
    [enrichedTeam]
  );

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Continuous animation state managed via ref
  const posRef = useRef({
    currentX: 0,
    speed: 0.75, // continuous drift speed in px/frame
    lastScrollY: 0,
    scrollVelocity: 0,
  });

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Scroll listener for parallax velocity acceleration
  const handleScroll = useCallback(() => {
    if (reducedMotion) return;
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - posRef.current.lastScrollY;
    posRef.current.lastScrollY = currentScrollY;

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        // Clamp delta to prevent sudden jerky acceleration
        const clampedDelta = Math.max(-50, Math.min(50, delta));
        posRef.current.scrollVelocity += clampedDelta * 0.22;
        // Cap overall accumulated velocity
        posRef.current.scrollVelocity = Math.max(-18, Math.min(18, posRef.current.scrollVelocity));
      }
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    posRef.current.lastScrollY = window.scrollY;
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Main high-performance Animation Loop with delta-time normalization
  useEffect(() => {
    if (reducedMotion) return;

    let rafId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = Math.min(currentTime - lastTime, 48); // avoid huge jump when tab becomes inactive
      lastTime = currentTime;
      const dt = elapsed / 16.67; // normalized to standard 60fps unit

      // Elegant gentle drift base speed
      const effectiveBaseSpeed = isHovered ? 0.08 : 0.52;

      // Smooth exponential velocity decay
      posRef.current.scrollVelocity *= Math.pow(0.93, dt);

      // Smooth step
      const step = (effectiveBaseSpeed + posRef.current.scrollVelocity * 0.055) * dt;
      posRef.current.currentX -= step;

      // 1 full cycle of team cards
      const singleSetWidth = enrichedTeam.length * (CARD_WIDTH + CARD_GAP);
      while (posRef.current.currentX <= -singleSetWidth) {
        posRef.current.currentX += singleSetWidth;
      }
      while (posRef.current.currentX > 0) {
        posRef.current.currentX -= singleSetWidth;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current.currentX}px, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered, reducedMotion, enrichedTeam.length]);

  return (
    <section
      ref={containerRef}
      className="floating-3d-cards-section team-enhanced-section"
      id="team-showcase"
      style={{ backgroundColor: "#296cb3" }}
      aria-label="Meet Our Team of Experts in 3D Floating Space"
    >
      {/* Subtle top ambient aura */}
      <div className="floating-ambient-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="floating-section-header team-header-wrap">
          {badge && (
            <div className="floating-header-badge team-badge">
              <span className="badge-dot" />
              <span className="badge-text">{badge}</span>
            </div>
          )}
          <h2 className="floating-header-title team-title">
            Meet Our Team of Experts,{" "}
            <span className="gradient-highlight">Driving Digital Excellence.</span>
          </h2>
          {description && (
            <p className="floating-header-desc team-sub-desc">{description}</p>
          )}
        </div>
      </div>

      {/* 3D Scene Viewport with Perspective */}
      <div
        className="floating-3d-viewport team-tilt-track-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={trackRef} className="floating-3d-track team-tilt-track">
          {repeatedTeam.map((member, idx) => {
            return (
              <div
                key={`${member.id}-${idx}`}
                className="floating-card-anchor team-tilted-card-anchor"
                style={{
                  width: `${CARD_WIDTH}px`,
                  minWidth: `${CARD_WIDTH}px`,
                  maxWidth: `${CARD_WIDTH}px`,
                  flex: `0 0 ${CARD_WIDTH}px`,
                }}
              >
                <div className="floating-card-inner team-tilted-card">
                  {/* Photo Container with Rounded Frame & Role Badge */}
                  <div className="floating-card-avatar-box team-tilted-photo-box">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 340px, 420px"
                      className="floating-card-avatar-img team-tilted-avatar"
                      priority={idx < 4}
                    />
                    <span className="floating-card-role-tag team-role-tag">
                      {member.tag}
                    </span>
                  </div>

                  {/* Member Name & Job Designation */}
                  <div className="floating-card-details team-tilted-content">
                    <h3 className="floating-card-name team-tilted-name">{member.name}</h3>
                    <p className="floating-card-designation team-tilted-role">{member.job_title}</p>

                    <div className="floating-card-divider" />

                    {/* Social Icon Links */}
                    <div className="floating-card-socials">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Twitter`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a
                        href="mailto:vastoratech@gmail.com"
                        aria-label={`Email ${member.name}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA Button from Original Design */}
      <div className="container">
        <div className="floating-cta-row">
          <Link href="/team" className="floating-join-btn">
            <span>Explore Entire Team</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Floating3DCardsSection;
