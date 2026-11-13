"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EditorialImage from "./EditorialImage";

interface StoryChapter {
  id: string;
  number: string;
  category: string;
  title: string;
  lead: string;
  paragraphs: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  visualImage: string;
  visualTitle: string;
  visualSubtitle: string;
  ctaText: string;
  ctaLink: string;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-ecom",
    number: "01",
    category: "eCommerce Growth",
    title: "Engineering high-converting commerce engines that scale past eight figures.",
    lead: "Conversion rate isn’t a cosmetic design layer; it is an exact architectural science.",
    paragraphs: [
      "Traditional eCommerce storefronts suffer from heavy plugin bloat, sluggish checkout handoffs, and third-party script latency that drives mobile abandonment.",
      "We build decoupled headless platforms with optimistic UI updates and localized checkout flows engineered to convert up to 2.8x higher on mobile devices.",
    ],
    metrics: [
      { label: "Mobile Conversion Lift", value: "+280%" },
      { label: "Target TTI (Time to Interactive)", value: "< 240ms" },
    ],
    tags: ["Headless Shopify Plus", "Checkout Ergonomics", "Zero Dropped Sessions"],
    visualImage: "/assets/img/blog/blog-big-2.jpg",
    visualTitle: "Conversion Telemetry & Cart Ergonomics",
    visualSubtitle: "Sub-second checkout flow architecture",
    ctaText: "Explore eCommerce Solutions",
    ctaLink: "/services",
  },
  {
    id: "chapter-webdev",
    number: "02",
    category: "Website Development",
    title: "Full-stack engineering built for durability, speed, and uncompromising precision.",
    lead: "Code is a strategic asset. If your foundation is brittle, your digital brand is vulnerable.",
    paragraphs: [
      "We architect high-concurrency web portals using modern Next.js 14 App Router, distributed edge handlers, and hardened microservices.",
      "By isolating backend compute through clean GraphQL and REST endpoints, our architectures handle massive viral traffic spikes during flash sales without downtime.",
    ],
    metrics: [
      { label: "Lighthouse Performance Standard", value: "98 - 100" },
      { label: "Availability SLA Standard", value: "99.99%" },
    ],
    tags: ["Next.js 14 App Router", "Edge Cache Middleware", "Microservices SLA"],
    visualImage: "/assets/img/blog/blog-big-1.jpg",
    visualTitle: "Distributed Edge Architecture",
    visualSubtitle: "Global multi-region performance nodes",
    ctaText: "Explore Engineering Stack",
    ctaLink: "/about",
  },
  {
    id: "chapter-seo",
    number: "03",
    category: "SEO & Digital Strategy",
    title: "Dominating organic search through technical authority and semantic graph structures.",
    lead: "Modern SEO is an engineering discipline, not a copywriting trick.",
    paragraphs: [
      "Google algorithms now penalize sluggish interaction latencies (INP) and prioritize interconnected entity schemas that power AI-generated search overviews.",
      "Our technical SEO strategy automates JSON-LD schema networks and constructs programmatic landing page hierarchies that capture high-intent organic buyers.",
    ],
    metrics: [
      { label: "Organic Impression Velocity", value: "+420%" },
      { label: "Indexed Entity Authority", value: "Tier 1" },
    ],
    tags: ["Semantic Schemas", "INP Optimization", "Entity Graph Mapping"],
    visualImage: "/assets/img/blog/blog-grid-1.jpg",
    visualTitle: "Semantic Entity Telemetry",
    visualSubtitle: "Algorithmic search graph optimization",
    ctaText: "Explore SEO Blueprint",
    ctaLink: "/services",
  },
  {
    id: "chapter-tech",
    number: "04",
    category: "Technology & Innovation",
    title: "Deploying predictive discovery and resilient data pipelines across enterprise retail.",
    lead: "The future belongs to storefronts that understand what the buyer wants before they ask.",
    paragraphs: [
      "We integrate vector-based product recommendations, real-time behavioral personalization, and event-driven webhook orchestrations that link inventory, CRM, and fulfillment instantly.",
      "From headless POS integrations to automated multi-currency pricing, we turn complex technical hurdles into competitive advantages that compound enterprise value.",
    ],
    metrics: [
      { label: "Real-time Operations Processed", value: "4.8M / Day" },
      { label: "Cache Response Hit Rate", value: "99.4%" },
    ],
    tags: ["Predictive AI", "Event Orchestration", "Redis Architecture"],
    visualImage: "/assets/img/blog/blog-big-4.jpg",
    visualTitle: "Real-time Data Orchestration",
    visualSubtitle: "Event-driven infrastructure for retail",
    ctaText: "Initiate Technical Consultation",
    ctaLink: "/contact",
  },
];

const BlogStickyStorytelling: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const storyBlockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      storyBlockRefs.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveStoryIndex(index);
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="editorial-sticky-story-section" aria-label="Interactive Storytelling Experience">
      <div className="editorial-fluid-container">
        {/* Overhead Section Badge */}
        <div className="sticky-overhead-hud">
          <span className="hud-badge">NARRATIVE CHAPTERS // 04 DISPATCHES</span>
          <span className="hud-line" />
          <span className="hud-info">VASTORA TECH ENTERPRISE DISPATCH</span>
        </div>

        <div className="sticky-split-layout">
          {/* ========================================================
              LEFT COLUMN: STICKY VISUAL THEATER (92% FLUID WIDTH)
              ======================================================== */}
          <div className="sticky-visual-pod-col">
            <div className="sticky-visual-viewport-box">
              <div className="visual-media-theater">
                {STORY_CHAPTERS.map((story, idx) => {
                  const isActive = idx === activeStoryIndex;
                  return (
                    <div
                      key={story.id}
                      className={`theater-canvas-slide ${isActive ? "is-active-slide" : ""}`}
                      aria-hidden={!isActive}
                    >
                      <EditorialImage
                        src={story.visualImage}
                        alt={story.visualTitle}
                        fallbackIndex={idx}
                        category={story.category}
                        className="theater-core-img"
                      />
                      <div className="theater-vignette" />

                      {/* Dynamic HUD Telemetry Bar */}
                      <div className="theater-telemetry-hud">
                        <div className="hud-title-bar">
                          <span className="telemetry-live-dot" />
                          <span className="telemetry-label">{story.visualTitle}</span>
                        </div>
                        <div className="hud-stats-grid">
                          {story.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="stat-unit">
                              <span className="stat-value">{m.value}</span>
                              <span className="stat-label">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chapter Indicator Tag */}
                      <div className="theater-chapter-pill">
                        <span>CHAPTER {story.number}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Tabs for Quick Reference */}
              <div className="sticky-chapter-quicknav" role="tablist">
                {STORY_CHAPTERS.map((story, idx) => {
                  const isCurrent = idx === activeStoryIndex;
                  return (
                    <button
                      key={story.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      className={`chapter-tab-button ${isCurrent ? "is-selected" : ""}`}
                      onClick={() => {
                        const target = storyBlockRefs.current[idx];
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }}
                    >
                      <span className="tab-idx">{story.number}</span>
                      <span className="tab-name">{story.category}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SCROLLING STORY CHAPTERS
              ======================================================== */}
          <div className="sticky-narrative-flow-col">
            {STORY_CHAPTERS.map((story, idx) => {
              const isCurrent = idx === activeStoryIndex;

              return (
                <div
                  key={story.id}
                  ref={(el) => {
                    storyBlockRefs.current[idx] = el;
                  }}
                  className={`story-chapter-article ${isCurrent ? "is-active-chapter" : ""}`}
                >
                  <div className="chapter-meta-top">
                    <span className="chapter-index">STORY // {story.number}</span>
                    <span className="chapter-cat-badge">{story.category}</span>
                  </div>

                  <h3 className="chapter-heading">{story.title}</h3>

                  <p className="chapter-lead">{story.lead}</p>

                  <div className="chapter-paragraphs">
                    {story.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="chapter-body-p">{p}</p>
                    ))}
                  </div>

                  <div className="chapter-tag-list">
                    {story.tags.map((t, tIdx) => (
                      <span key={tIdx} className="chapter-tag">{t}</span>
                    ))}
                  </div>

                  <div className="chapter-cta-box">
                    <Link href={story.ctaLink} className="chapter-link-btn">
                      <span>{story.ctaText}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStickyStorytelling;
