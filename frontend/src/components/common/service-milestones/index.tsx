import { CSSProperties } from "react";

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
    title: "Requirement Understanding & Client Onboarding",
    
    icon: "fa-solid fa-handshake-simple",
  },
  {
    title: "Theme Selection & Design Finalization (White-Label Model)",
    
    icon: "fa-solid fa-swatchbook",
  },
  {
    title: "Development & Functionality Integration",
    
    icon: "fa-solid fa-code-merge",
  },
  {
    title: "Testing & Quality Check",
     
    icon: "fa-solid fa-shield-check",
  },
  {
    title: "Delivery Within 5 Days",
    
    icon: "fa-solid fa-truck-fast",
  },
  {
    title: "Maintenance, Security & Support",
    
    icon: "fa-solid fa-life-ring",
  },
];

// Mobile app milestones mirror the base steps but drop the delivery promise
const mobileAppMilestoneSteps: MilestoneStep[] = baseMilestoneSteps.filter(
  (step) => step.title !== "Delivery Within 5 Days"
);

const seoMilestoneSteps: MilestoneStep[] = [
  {
    title: "Website Audit & SEO Analysis",
    icon: "fa-solid fa-magnifying-glass-chart",
    description:
      "Complete audit covering technical issues, site speed, structure, indexing, and competitor benchmarks.",
  },
  {
    title: "Keyword Research & Strategy Planning",
    icon: "fa-solid fa-bullseye",
    description:
      "Identify high-intent keywords, map them to priority pages, and craft a clear roadmap for execution.",
  },
  {
    title: "On-Page SEO Optimization",
    icon: "fa-solid fa-layer-group",
    description:
      "Tune titles, metadata, headings, URLs, imagery, content structure, and internal links for relevance.",
  },
  {
    title: "Technical SEO Fixes",
    icon: "fa-solid fa-screwdriver-wrench",
    description:
      "Improve performance, mobile UX, crawlability, sitemaps, robots directives, schema, and site health.",
  },
  {
    title: "Off-Page SEO & Backlinks",
    icon: "fa-solid fa-link",
    description:
      "Secure quality backlinks via outreach, directories, guest posts, and consistent brand mentions.",
  },
  {
    title: "Monthly Tracking & Reporting",
    icon: "fa-solid fa-chart-line",
    description:
      "Monitor rankings, traffic, conversions, and iterate continually for steady compounding growth.",
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
  const meta = serviceMeta[serviceKey];
  const milestoneStepsMap: Partial<Record<ServiceMilestoneKey, MilestoneStep[]>> = {
    "mobile-app-development": mobileAppMilestoneSteps,
    "seo-optimization": seoMilestoneSteps,
    "social-media-marketing": socialMilestoneSteps,
  };
  const milestoneSteps = milestoneStepsMap[serviceKey] ?? baseMilestoneSteps;
  const accentStyle = {
    ["--milestone-accent" as const]: meta.accent,
  } as CSSProperties;

  return (
    <section className={`service-milestone-area pb-90 ${className ?? ""}`}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <div className="tpsection-wrapper mb-55">
              <span className="tpsection-subtitle">{meta.eyebrow}</span>
              <h2 className="tpsection-title-two">{meta.title}</h2>
              <p>{meta.copy}</p>
              <div className="service-milestone-tags">
                {meta.tags.map((tag) => (
                  <span key={`${serviceKey}-${tag}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="milestone-track milestone-track--horizontal" style={accentStyle}>
          {milestoneSteps.map((step, index) => (
            <div
              className="milestone-card milestone-card--pill milestone-card--horizontal"
              key={step.title}
            >
              <div className="milestone-node">
                <div className="milestone-circle">
                  <i className={step.icon} />
                </div>
                <span className="milestone-stage">Stage {index + 1}</span>
              </div>
              <h4 className="milestone-card__title">{step.title}</h4>
              {step.description && (
                <p className="milestone-card__desc">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export type { ServiceMilestoneKey };
export default ServiceMilestoneTimeline;
