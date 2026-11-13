"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Award, Rocket, Globe2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import journeyImg from "@/assets/img/banner/about-inner-1.jpeg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const milestones: StoryMilestone[] = [
  {
    year: "2014",
    title: "Foundation & Vision",
    description:
      "Vastora Tech was founded with a single mission: combine rigorous modern engineering with human-centered design to help businesses scale fearlessly.",
    icon: <Rocket size={18} />,
  },
  {
    year: "2017",
    title: "Enterprise eCommerce Units",
    description:
      "Launched specialized custom storefront and microservices engineering, building high-conversion checkout flows and cloud systems.",
    icon: <Sparkles size={18} />,
  },
  {
    year: "2020",
    title: "Global Reach & 1,000+ Deployments",
    description:
      "Expanded partnerships across India, the United States, United Kingdom, and Australia, surpassing 1,000 successful production deployments.",
    icon: <Globe2 size={18} />,
  },
  {
    year: "2024+",
    title: "Next-Gen Headless & Digital Impact",
    description:
      "Now a 50+ person powerhouse delivering next-gen headless Next.js platforms, enterprise cloud architectures, and compounding digital ROI.",
    icon: <Award size={18} />,
  },
];

const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text column fade up with stagger
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textColRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Image smooth clip-path reveal
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          {
            clipPath: "inset(0% 100% 0% 0% round 24px)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            opacity: 1,
            duration: 1.15,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Subtle scroll-linked visual parallax on image
      if (imageParallaxRef.current) {
        gsap.to(imageParallaxRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vt-story-section" id="our-story" ref={sectionRef} aria-label="Company Story">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Column: Narrative Storytelling */}
          <div className="col-lg-6">
            <div className="story-content-block" ref={textColRef}>
              <div className="vt-section-badge">
                <span className="vt-badge-dot" />
                <span>OUR STORY & HERITAGE</span>
              </div>

              {/* Required Exact Headline */}
              <h2 className="story-headline">
                More Than Technology. <span className="text-primary-blue">We Create Impact.</span>
              </h2>

              <p className="story-lead-paragraph">
                At Vastora Tech, we believe true digital innovation isn’t just about lines of code—it’s
                about building digital instruments that move businesses forward, engage audiences deeply,
                and unlock lasting commercial advantage.
              </p>

              <p className="story-body-paragraph">
                Founded in 2014, we evolved from a passionate group of full-stack engineers into a
                globally recognized digital engineering studio. We partner with ambitious startups,
                DTC leaders, and enterprise organizations across 4 continents to design, build, and
                scale transformative web and eCommerce solutions.
              </p>

              {/* Milestone Mini-Timeline */}
              <div className="story-milestones-grid">
                {milestones.map((m, idx) => (
                  <div key={idx} className="story-milestone-item">
                    <div className="milestone-year-pill">
                      <span className="pill-dot" />
                      <span>{m.year}</span>
                    </div>
                    <div className="milestone-body">
                      <h3 className="milestone-title">{m.title}</h3>
                      <p className="milestone-desc">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact Guarantee Checklist */}
              <div className="story-checkpoints">
                <div className="checkpoint-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>100% In-House Engineering — Zero Outsourcing</span>
                </div>
                <div className="checkpoint-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>Transparent Agile Sprints & Daily Communication</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Scroll-linked Parallax */}
          <div className="col-lg-6">
            <div className="story-visual-wrap">
              <div className="story-image-outer" ref={imageFrameRef}>
                <div className="story-image-inner" ref={imageParallaxRef}>
                  <Image
                    src={journeyImg}
                    alt="Vastora Tech Team and Office Atmosphere"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                    className="story-photo"
                  />
                  <div className="story-image-scrim" />
                </div>

                {/* Floating Heritage Badge */}
                <div className="story-floating-stat">
                  <div className="stat-icon-circle">
                    <Award size={20} />
                  </div>
                  <div className="stat-text-area">
                    <strong className="stat-number">2,000+</strong>
                    <span className="stat-label">Production Deployments Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
