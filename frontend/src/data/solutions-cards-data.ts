export interface SolutionCardItem {
  id: number;
  number: string;
  heading: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
  accentColor?: string;
}

export const solutionsCardsData: SolutionCardItem[] = [
  {
    id: 1,
    number: "01",
    heading: "E-commerce Solutions",
    description:
      "Complete eCommerce website development with bespoke UX, high-converting checkout flows, payment gateway integration, and smart admin dashboards to scale sales effortlessly.",
    category: "FLAGSHIP SOLUTION",
    tags: ["Shopify Plus", "Custom Cart", "Payment Gateways"],
    link: "/product/e-commerce-solutions",
    accentColor: "#0062f5",
  },
  {
    id: 2,
    number: "02",
    heading: "Web Development",
    description:
      "Professional web design and full-stack engineering to build fast, responsive, and secure websites. We create robust online platforms engineered for conversion.",
    category: "HIGH-PERFORMANCE",
    tags: ["Next.js 14", "React", "Headless CMS"],
    link: "/services/web-development-services",
    accentColor: "#0284c7",
  },
  {
    id: 3,
    number: "03",
    heading: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We build high-speed, scalable, and intuitive mobile experiences tailored to your business goals.",
    category: "CROSS-PLATFORM",
    tags: ["iOS & Android", "React Native", "Flutter"],
    link: "/services/mobile-app-development-services",
    accentColor: "#6366f1",
  },
  {
    id: 4,
    number: "04",
    heading: "UI/UX & Product Design",
    description:
      "Human-centric interface design and design systems that turn visitors into loyal buyers through intuitive user journeys, interactive micro-animations, and visual polish.",
    category: "DESIGN SYSTEMS",
    tags: ["Figma Prototypes", "Design Systems", "User Journey"],
    link: "/services/web-development-services",
    accentColor: "#8b5cf6",
  },
  {
    id: 5,
    number: "05",
    heading: "SEO & Speed Optimization",
    description:
      "Data-driven SEO audits and performance engineering that propel your search engine rankings, optimize Core Web Vitals, and generate recurring organic traffic.",
    category: "SEARCH VISIBILITY",
    tags: ["Core Web Vitals", "Speed 99+", "Technical Audit"],
    link: "/services/seo-services",
    accentColor: "#d97706",
  },
  {
    id: 6,
    number: "06",
    heading: "Social & Growth Marketing",
    description:
      "High-impact digital marketing campaigns that drive brand awareness, targeted customer acquisition, engagement, and sustainable digital visibility.",
    category: "BRAND REACH",
    tags: ["Paid Ad Funnels", "Multi-Channel", "Lead Generation"],
    link: "/services/social-media-marketing-services",
    accentColor: "#10b981",
  },
];

export default solutionsCardsData;
