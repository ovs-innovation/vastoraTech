"use client";

import { CSSProperties, useState } from "react";

type ServiceMilestoneKey =
  | "web-development"
  | "mobile-app-development"
  | "digital-marketing"
  | "seo-optimization"
  | "social-media-marketing";

interface ServiceMilestoneTimelineProps {
  serviceKey: ServiceMilestoneKey;
  className?: string;
}

type MilestoneStep = {
  title: string;
  icon: string;
  description?: string;
};

const baseMilestoneSteps: MilestoneStep[] = [
  {
    title: "Increase Brand Awareness",
    description: "Social media platforms allow businesses to reach a large audience.Our social media marketing agency helps brands improve visibility and build strong brand recognition online.",
    
    icon: "fa-solid fa-handshake-simple",
  },
  {
    title: "Better Customer Engagement",
    description: "Through creative content and community management, businesses can interact directly with their audience and build strong relationships with customers.",
    
    icon: "fa-solid fa-swatchbook",
  },
  {
    title: "More Website Traffic",
    description: "Strategic campaigns and engaging content drive targeted users from social media platforms to your website, helping improve business growth.",
    
    icon: "fa-solid fa-code-merge",
  },
  {
    title: " Lead Generation & Sales",
    description: "A professional SMM company in Noida can create targeted advertising campaigns that generate quality leads and increase conversions.",
     
    icon: "fa-solid fa-shield-check",
  },
  {
    title: "Build Brand Trust",
    description: "Consistent social media presence helps businesses establish credibility and trust among potential customers.",
    
    icon: "fa-solid fa-truck-fast",
  },
  {
    title: "Long-Term Business Growth",
    description: "Working with the best social media marketing agency ensures consistent brand growth, improved engagement, and long-term digital success.",
    
    icon: "fa-solid fa-life-ring",
  },
];

// Mobile app milestones mirror the base steps but drop the delivery promise
const mobileAppMilestoneSteps: MilestoneStep[] = baseMilestoneSteps.filter(
  (step) => step.title !== "Delivery Within 5 Days"
);

const seoMilestoneSteps: MilestoneStep[] = [
  {
    title: "Higher Google Rankings",
    icon: "fa-solid fa-magnifying-glass-chart",
    description:
      "Our SEO services in Noida help your website appear on the first page of search engines, making it easier for potential customers to find your business online.",
  },
  {
    title: "Increase Website Traffic",
    icon: "fa-solid fa-bullseye",
    description:
      "By targeting the right keywords such as SEO services near me and industry-specific search terms, we bring highly relevant visitors to your website.",
  },
  {
    title: "Better Brand Visibility",
    icon: "fa-solid fa-layer-group",
    description:
      "Strong search engine optimization improves your brand presence across search engines and helps establish trust with potential customers.",
  },
  {
    title: "Quality Leads & Conversions",
    icon: "fa-solid fa-screwdriver-wrench",
    description:
      "SEO attracts users who are actively searching for your services, increasing the chances of converting visitors into paying customers.",
  },
  {
    title: "Long-Term Business Growth",
    icon: "fa-solid fa-link",
    description:
      "Unlike paid ads, SEO services provide long-term results by continuously improving your website authority and search rankings.",
  },
  {
    title: "Competitive Advantage",
    icon: "fa-solid fa-chart-line",
    description:
      "Working with a professional SEO agency in Noida like Vastora Tech helps your business stay ahead of competitors in search engine rankings.",
  },
];

const socialMilestoneSteps: MilestoneStep[] = [
  {
    title: "Strategy & Planning",
    icon: "fa-solid fa-route",
    description: "Define goals, target audience, competitors, and content roadmap.",
  },
  {
    title: "Profile Optimization",
    icon: "fa-solid fa-user-gear",
    description: "Optimize all social profiles for branding, visibility, and trust.",
  },
  {
    title: "Content Creation",
    icon: "fa-solid fa-pen-nib",
    description: "Design engaging posts, reels, stories, and brand-aligned creatives.",
  },
  {
    title: "Posting & Management",
    icon: "fa-solid fa-calendar-check",
    description: "Consistent posting, scheduling, and community management across comments and DMs.",
  },
  {
    title: "Paid Ads & Promotion",
    icon: "fa-solid fa-bullhorn",
    description: "Run targeted ad campaigns to boost reach, leads, and conversions.",
  },
  {
    title: "Performance Tracking",
    icon: "fa-solid fa-chart-line",
    description: "Monitor analytics, measure growth, and refine strategy every month.",
  },
];

const serviceMeta: Record<
  ServiceMilestoneKey,
  { eyebrow: string; title: string; copy: string; tags: string[]; accent: string }
> = {
  "web-development": {
    eyebrow: "Delivery Playbook",
    title: "Web Development Milestones",
    copy:
        "6-Step Web Development Milestone Process",
    tags: ["Custom Builds", "Headless CMS", "B2B Portals"],
    accent: "#8a7a54",
  },
  "mobile-app-development": {
    eyebrow: "Launch Blueprint",
    title: "App Development Milestones",
    copy:
      "6-Step Mobile App Milestone Process",
    tags: ["Native & Hybrid", "App Store Ready", "Continuous Delivery"],
    accent: "#2B6BB3",
  },
  "digital-marketing": {
    eyebrow: "Growth Sprints",
    title: "Digital Marketing Milestones",
    copy:
      "Campaigns stay nimble because creative, media, and analytics squads operate on the same milestone-driven rhythm.",
    tags: ["Omnichannel", "Performance Labs", "Growth Experiments"],
    accent: "#c7653c",
  },
  "seo-optimization": {
    eyebrow: "Optimization Track",
    title: "SEO Milestones",
    copy:
      "6-Step SEO Milestone Process",
    tags: ["Audits", "Content Ops", "Link Velocity"],
    accent: "#5f8a63",
  },
  "social-media-marketing": {
    eyebrow: "Engagement Cadence",
    title: "Social Media Milestones",
    copy:
      "6-Step Social Media Marketing Milestone Process.",
    tags: ["Strategy", "Brand Voice", "Community"],
    accent: "#d24c86",
  },
};
const ServiceMilestoneTimeline = ({ serviceKey, className }: ServiceMilestoneTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const meta = serviceMeta[serviceKey];
  const milestoneStepsMap: Partial<Record<ServiceMilestoneKey, MilestoneStep[]>> = {
    "mobile-app-development": mobileAppMilestoneSteps,
    "seo-optimization": seoMilestoneSteps,
    // "social-media-marketing": socialMilestoneSteps,
  };
  const milestoneSteps = milestoneStepsMap[serviceKey] ?? baseMilestoneSteps;
  const accentStyle = {
    ["--milestone-accent" as const]: meta.accent,
  } as CSSProperties;

  return (
    <section className={`service-milestone-area pt-00 pb-00 ${className ?? ""}`}>
      <div className="container">

        
        <div className="milestone-track milestone-track--horizontal" style={{ ...accentStyle, alignItems: 'flex-start' }}>
          {milestoneSteps.map((step, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                className="milestone-card milestone-card--pill milestone-card--horizontal cursor-pointer group"
                style={{
                  padding: isOpen ? "22px 20px 20px" : "14px 14px 14px",
                  transition: "padding 0.3s ease-in-out",
                }}
                key={step.title}
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <div className="milestone-node">
                  <div className="milestone-circle">
                    <i className={step.icon} />
                  </div>
                  <span className="milestone-stage">Benefit {index + 1}</span>
                </div>
                <h4 className="milestone-card__title">{step.title}</h4>
                {step.description && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? "16px" : "0px",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p className="milestone-card__desc" style={{ margin: 0 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export type { ServiceMilestoneKey };
export default ServiceMilestoneTimeline;