"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team_data from "@/data/team";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutTeamShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Staggered entrance animation on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 390;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="vt-team-showcase-section" id="team" ref={sectionRef} aria-label="Meet Our Team">
      {/* Background Soft Lighting Gradients */}
      <div className="team-bg-ambient" aria-hidden="true">
        <div className="team-ambient-glow glow-1" />
        <div className="team-ambient-glow glow-2" />
        <div className="team-dot-matrix" />
      </div>

      <div className="container">
        {/* Header with Navigation Controls */}
        <div className="team-header-row">
          <div className="header-text-block">
            <div className="team-badge">
              <span className="badge-dot" />
              <span>THE MINDS BEHIND VASTORA</span>
            </div>

            {/* Required Exact Heading */}
            <h2 className="team-title">
              The People Behind Our <span className="highlight-cyan">Innovation.</span>
            </h2>

            <p className="team-subtitle">
              A multidisciplinary powerhouse of full-stack engineers, cloud architects, and growth
              strategists dedicated to delivering transformative client results.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="team-slider-actions">
            <button
              type="button"
              className="slider-nav-btn btn-prev"
              onClick={() => scroll("left")}
              aria-label="Previous team members"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="slider-nav-btn btn-next"
              onClick={() => scroll("right")}
              aria-label="Next team members"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Team Cards Gallery */}
        <div className="team-scroll-viewport" ref={scrollContainerRef}>
          <div className="team-scroll-track">
            {team_data.map((member, idx) => {
              const isHovered = activeIdx === idx;
              const isLeadership = member.id === 1;

              return (
                <div
                  key={member.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className={`team-clean-card ${isHovered ? "is-focused" : ""}`}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  {/* Photo Frame with Rounded Corners & Subtle Zoom */}
                  <div className="team-card-photo-box">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 300px, 360px"
                      className="team-avatar-img"
                      priority={idx < 3}
                    />
                    <div className="team-photo-scrim" />

                    {/* Role Tag Pill */}
                    <span className="team-role-pill">
                      {isLeadership ? "Leadership" : "Specialist"}
                    </span>
                  </div>

                  {/* Name, Designation & Socials */}
                  <div className="team-card-details">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.job_title}</p>

                    <div className="team-member-socials">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={15} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Twitter`}
                      >
                        <Twitter size={15} />
                      </a>
                      <a
                        href="mailto:vastoratech@gmail.com"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to View Full Team */}
        <div className="team-bottom-cta">
          <Link href="/team" className="team-explore-link">
            <span>Explore All Specialists</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamShowcase;
