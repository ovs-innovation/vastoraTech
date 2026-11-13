'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderFive from '@/layout/headers/HeaderFive';
import FooterFive from '@/layout/footers/FooterFive';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Design Tools Categories
type ToolCategory = 'all' | 'prototyping' | 'motion' | 'research' | 'tokens';

interface ToolItem {
  name: string;
  category: 'prototyping' | 'motion' | 'research' | 'tokens';
  role: string;
  iconSymbol: string;
}

const DESIGN_TOOLS: ToolItem[] = [
  { name: 'Figma & FigJam', category: 'prototyping', role: 'Auto-Layout, Master Components & User Flows', iconSymbol: '🎨' },
  { name: 'Spline 3D & WebGL', category: 'motion', role: 'Interactive 3D Meshes & Physics Canvas', iconSymbol: '🌀' },
  { name: 'Storybook & Tokens', category: 'tokens', role: 'Living Component Systems & Code Parity', iconSymbol: '📚' },
  { name: 'Lottie & Rive', category: 'motion', role: 'Vector State-Machine Micro-Animations', iconSymbol: '✨' },
  { name: 'Maze User Testing', category: 'research', role: 'Unmoderated Usability Testing & Heatmaps', iconSymbol: '🧪' },
  { name: 'Tailwind UI & Tokens', category: 'tokens', role: 'Developer Handoff Variables & Spec Redlines', iconSymbol: '🌊' },
  { name: 'Hotjar & Clarity', category: 'research', role: 'Session Recordings & Friction Audits', iconSymbol: '🔥' },
  { name: 'Zeroheight Studio', category: 'tokens', role: 'Design System Documentation Portals', iconSymbol: '📖' },
  { name: 'Principle & Protopie', category: 'motion', role: 'Advanced Sensor & Gesture Prototyping', iconSymbol: '⚡' },
  { name: 'Contrast & Stark', category: 'research', role: 'WCAG 2.1 AA Accessibility Auditing', iconSymbol: '👁️' },
  { name: 'Zeplin Handoff', category: 'tokens', role: 'Pixel-Accurate CSS/Swift/Kotlin Exporting', iconSymbol: '📐' },
  { name: 'OptimalSort IA', category: 'research', role: 'Information Architecture & Card Sorting', iconSymbol: '🗂️' },
];

// The 6 Core UI/UX Design Services
const SIX_SERVICES = [
  {
    id: 1,
    title: 'Product Discovery & UX Research',
    serviceTag: 'User Empathy & IA',
    desc: 'Uncover real user pain points before creating a single pixel. We conduct stakeholder interviews, competitor heuristic reviews, behavioral analytics, and persona journey mapping.',
    features: [
      'In-depth stakeholder & user interviews',
      'Data-driven user personas & empathy maps',
      'Information Architecture (IA) & site tree hierarchy',
      'Competitor UX benchmarking & heuristic teardowns',
    ],
    iconSymbol: '🧠',
  },
  {
    id: 2,
    title: 'Wireframing & Clickable Prototypes',
    serviceTag: 'Figma Interactive Flows',
    desc: 'Test your product workflows without writing a line of code. We produce low-fidelity sketches and high-fidelity interactive Figma prototypes with realistic transitions and data states.',
    features: [
      'Low-fidelity rapid concept wireframing',
      'Interactive clickable Figma prototypes with real states',
      'Edge-case user scenario & error state coverage',
      'Stakeholder validation & user feedback testing loops',
    ],
    iconSymbol: '📱',
  },
  {
    id: 3,
    title: 'Native Mobile App UI/UX Design',
    serviceTag: 'iOS & Android Standards',
    desc: 'Elevate mobile engagement with thumb-friendly interfaces. Built strictly according to Apple Human Interface Guidelines and Google Material 3 with haptic-ready micro-interactions.',
    features: [
      'Apple iOS & Google Material 3 native paradigms',
      'Dynamic Island, Live Activities & WidgetKit design',
      'Frictionless 1-hand reach navigation patterns',
      'Micro-interactions, swipe gestures & smooth haptics',
    ],
    iconSymbol: '📲',
  },
  {
    id: 4,
    title: 'SaaS Platforms & Enterprise Dashboards',
    serviceTag: 'Data Density & Portals',
    desc: 'Transform complex workflows and dense metrics into intuitive, clean dashboards. We design modular data tables, multi-tier navigation, filtering matrices, and effortless dark/light modes.',
    features: [
      'Dense data visualization & interactive analytics charts',
      'Role-based access control (RBAC) user views',
      'Advanced sorting, multi-filter & bulk action tables',
      'Harmonious Light Mode & Dark Mode design tokens',
    ],
    iconSymbol: '📊',
  },
  {
    id: 5,
    title: 'Scalable Design Systems & Token Architecture',
    serviceTag: 'Design-to-Code Parity',
    desc: 'Empower your engineering team to build 3x faster with zero design debt. We construct comprehensive Figma component libraries, auto-layout hierarchies, and synchronized tokens.',
    features: [
      'Atomic design methodology (Atoms, Molecules, Organisms)',
      'Figma auto-layout 5.0 with responsive constraints',
      'Token variables (Color, Typography, Spacing, Elevation)',
      'Storybook & Tailwind UI component sync guidelines',
    ],
    iconSymbol: '🎨',
  },
  {
    id: 6,
    title: 'Conversion Rate Optimization (CRO) Redesign',
    serviceTag: 'Revenue & Checkout UX',
    desc: 'Turn leaky funnels into high-converting revenue drivers. We audit existing websites, identify drop-off friction, and redesign checkout journeys, landing pages, and CTA hierarchies.',
    features: [
      'Heuristic drop-off audit & heat-map evaluation',
      'Frictionless 1-page checkout & lead forms',
      'Visual hierarchy restructuring & persuasive storytelling',
      'A/B test ready UI variants for validation',
    ],
    iconSymbol: '💎',
  },
];

// Interactive Design Archetype Simulator
type ArchetypeKey = 'fintech' | 'saas' | 'luxury' | 'health';

interface ArchetypeData {
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  canvasTitle: string;
  stat1Label: string;
  stat1Val: string;
  stat2Label: string;
  stat2Val: string;
  buttonText: string;
}

const ARCHETYPE_DATA: Record<ArchetypeKey, ArchetypeData> = {
  fintech: {
    title: 'Fintech & Neo-Banking Glassmorphism',
    badge: 'Fintech / Banking',
    description: 'Bank-grade security combined with consumer-grade delight. Subtle blurred backdrops, crisp biometric cues, and high-trust data visualizations.',
    deliverables: [
      'Frosted Glassmorphism & High-Contrast Typography',
      'Biometric FaceID & Secure Keypad Flow',
      'Real-Time Balance & Expense Breakdown Charts',
      'WCAG 2.1 AA High-Contrast Accessibility',
    ],
    canvasTitle: 'NeoBank Mobile App • Figma Canvas',
    stat1Label: 'Task Completion',
    stat1Val: '0.8s Ultra-Fast',
    stat2Label: 'System Usability Score',
    stat2Val: '92.4 / 100',
    buttonText: 'Adopt Fintech Archetype →',
  },
  saas: {
    title: 'SaaS Analytics & Cloud Enterprise Dashboard',
    badge: 'SaaS / B2B Cloud',
    description: 'Engineered for operational clarity. Dense data tables with horizontal scroll locks, customizable widget layouts, and responsive dark mode themes.',
    deliverables: [
      'Modular Drag-and-Drop Dashboard Widgets',
      'Dense Multi-Filter Data Grid with Sticky Headers',
      'Role-Based Navigation & Workspace Switcher',
      'Synchronized Light & Dark Theme Tokens',
    ],
    canvasTitle: 'Enterprise Cloud Portal • Master Component',
    stat1Label: 'Daily Active Usability',
    stat1Val: '+48% Lift',
    stat2Label: 'Dev Handoff Speed',
    stat2Val: '3.4x Faster',
    buttonText: 'Explore SaaS Dashboard UI →',
  },
  luxury: {
    title: 'Luxury D2C & mCommerce Storefront',
    badge: 'D2C / Luxury Retail',
    description: 'Editorial elegance meets high-converting commerce. High-res product staging, fluid sticky add-to-bag triggers, and seamless 1-tap checkout drawers.',
    deliverables: [
      'Bespoke Editorial Typography & Staggered Grids',
      'Micro-Animated Product Drawer & Swatches',
      'Frictionless 1-Tap Apple/Google Pay Checkout',
      'Interactive 360° Product Zoom Experience',
    ],
    canvasTitle: 'Aura Luxury Flagship • Mobile First',
    stat1Label: 'Checkout Conversion',
    stat1Val: '+38.5% Uplift',
    stat2Label: 'Cart Drop-Off Rate',
    stat2Val: 'Dropped by 52%',
    buttonText: 'Elevate Brand Storefront →',
  },
  health: {
    title: 'Healthtech & Gamified Mobile App',
    badge: 'Health & Habit SaaS',
    description: 'Fostering sustained daily user habits through positive reinforcement loops, cheerful micro-animations, and calming, accessible color palettes.',
    deliverables: [
      'Calming Pastel Hues & Empathetic Microcopy',
      'Gamified Streaks, Badges & Milestone Rings',
      'HealthKit & Wearable Telemetry Charts',
      'Accessible Scalable Fonts & Screen Reader Tags',
    ],
    canvasTitle: 'PulseHealth Tracker • Prototype State',
    stat1Label: 'Day-30 Retention',
    stat1Val: '82.6% High Active',
    stat2Label: 'User Satisfaction',
    stat2Val: '4.95 / 5.0 Rating',
    buttonText: 'Build Healthtech App UI →',
  },
};

// Estimator Configurations
const PROJECT_TYPES = [
  { id: 'saas', label: 'New Web App / SaaS (Figma UI)', baseWeeks: '3–5 Weeks', basePrice: '₹35,000 – ₹65,000 ($1,400 – $2,500)', roadmap: 'UX Research + Complete Desktop/Mobile UI' },
  { id: 'mobile', label: 'Mobile App (iOS + Android UI)', baseWeeks: '4–6 Weeks', basePrice: '₹40,000 – ₹75,000 ($1,500 – $2,800)', roadmap: 'Native Flows + Interactive Clickable Prototype' },
  { id: 'redesign', label: 'Website / Landing Redesign (CRO)', baseWeeks: '2–4 Weeks', basePrice: '₹25,000 – ₹48,000 ($1,000 – $1,800)', roadmap: 'Drop-off Audit + High-Converting Visual Redesign' },
  { id: 'designsystem', label: 'Complete Design System Overhaul', baseWeeks: '3–5 Weeks', basePrice: '₹45,000 – ₹85,000 ($1,800 – $3,200)', roadmap: 'Atomic Token Architecture + Storybook Guidelines' },
];

const SCOPE_OPTIONS = [
  { id: 'mvp', label: 'MVP Sprint Launch (8–15 Screens)' },
  { id: 'core', label: 'Core Product Build (20–40 Screens)' },
  { id: 'enterprise', label: 'Enterprise Platform (50+ Screens + Token System)' },
];

const ADDON_OPTIONS = [
  { id: 'lottie', label: 'Custom Vector Micro-Animations & Lottie' },
  { id: 'maze', label: 'Unmoderated User Testing via Maze (100 Users)' },
  { id: 'storybook', label: 'Storybook Token & Tailwind Spec Handoff' },
  { id: 'darkmode', label: 'Complete Dark Mode & High-Contrast Parity' },
];

// 6-Stage Process Lifecycle
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Empathize & User Persona Definition',
    desc: 'Conducting stakeholder interviews, user journey mapping, and competitor heuristic evaluations to define exact user problems and product goals.',
  },
  {
    step: '02',
    title: 'Information Architecture & Wireframing',
    desc: 'Structuring site navigation trees, content priority matrices, and drafting low-fidelity wireframes to validate usability before aesthetic styling.',
  },
  {
    step: '03',
    title: 'High-Fidelity UI & Visual Styling',
    desc: 'Applying curated typography, modern color theory, elevation scales, and auto-layout master components to create breathtaking interfaces.',
  },
  {
    step: '04',
    title: 'Interactive Clickable Prototyping',
    desc: 'Linking screen states, modal drawers, hover triggers, and dynamic micro-interactions inside Figma so you can test the full experience on real phones.',
  },
  {
    step: '05',
    title: 'Usability Testing & Heuristic Refinement',
    desc: 'Putting prototypes in front of real target users, uncovering friction points, analyzing heatmaps, and iterating until the SUS score exceeds 85+.',
  },
  {
    step: '06',
    title: 'Pixel-Perfect Developer Token Handoff',
    desc: 'Delivering production-ready Figma files with named layers, responsive constraints, exported assets, and token documentation for zero implementation errors.',
  },
];

// Head-to-Head Benchmark Rows
const BENCHMARK_ROWS = [
  {
    feature: 'Design System & Token Architecture',
    vastora: 'Auto-Layout 5.0 master components with synchronized code tokens',
    generic: 'Disconnected static screens with inconsistent padding and fonts',
    freelance: 'Messy unlabeled Figma layers without auto-layout',
  },
  {
    feature: 'Interactive Clickable Prototypes',
    vastora: 'High-fidelity prototypes with realistic micro-interactions and transitions',
    generic: 'Static PNG mockups that cannot be tested with real users',
    freelance: 'Basic screen linking with zero edge-case coverage',
  },
  {
    feature: 'Conversion & Behavioral Psychology',
    vastora: 'Rooted in cognitive load reduction, Fitts’s Law, and CRO funnels',
    generic: 'Chases surface-level trends that look pretty but fail to convert',
    freelance: 'Copies Dribbble shots without business logic',
  },
  {
    feature: 'Accessibility Standards (WCAG)',
    vastora: '100% WCAG 2.1 AA compliant color contrasts and font scales',
    generic: 'Often ignores contrast ratios and screen readers',
    freelance: 'Never tested for accessibility or readability',
  },
  {
    feature: 'Developer Handoff Quality',
    vastora: 'Pixel-perfect spec redlines, Tailwind tokens, and Storybook docs',
    generic: 'Leaves developers guessing responsive break points and spacing',
    freelance: 'Developers struggle to translate designs into code',
  },
  {
    feature: 'Source File Ownership & IP',
    vastora: 'Full 100% transfer of Figma source files and components on Day 1',
    generic: 'Retains master file access or charges extra for source files',
    freelance: 'Risk of lost assets or inaccessible personal accounts',
  },
];

// FAQ Data
const FAQ_ITEMS = [
  {
    id: 'uiux-faq-1',
    question: 'What do professional UI/UX design services in Noida include?',
    answer:
      'Our UI/UX design services encompass the entire product design lifecycle: user research, competitor heuristic audits, information architecture, low-fi wireframing, high-fidelity clickable Figma prototypes, scalable design systems, usability testing, and pixel-perfect developer token handoffs.',
  },
  {
    id: 'uiux-faq-2',
    question: 'Do we get full access and ownership of the Figma source files?',
    answer:
      'Yes, 100%! From day one, you have view and edit access to your dedicated Figma project files. Upon project completion, full intellectual property and file ownership are completely transferred to your team with organized master components, variables, and assets.',
  },
  {
    id: 'uiux-faq-3',
    question: 'What is the key difference between UI and UX design?',
    answer:
      'UX (User Experience) design focuses on how the product works: the architecture, user journey, logic, and problem-solving that make using the product effortless. UI (User Interface) design focuses on how the product looks and feels: the visual aesthetics, typography, color harmony, button states, and micro-interactions.',
  },
  {
    id: 'uiux-faq-4',
    question: 'How long does a typical UI/UX design project take?',
    answer:
      'A focused MVP design sprint (8–15 screens) typically takes 2 to 3 weeks. Full mobile applications or complex SaaS platforms (25–50+ screens with a complete design system) generally require 4 to 6 weeks from initial research to final developer handoff.',
  },
  {
    id: 'uiux-faq-5',
    question: 'How do you ensure developers can accurately code the design?',
    answer:
      'We design with code in mind. Every component is built using Figma auto-layout, named semantic tokens (spacing, typography, color), and responsive breakpoints that map directly to modern CSS, Tailwind, SwiftUI, and Jetpack Compose. We also participate in developer walkthroughs to guarantee zero design deviation.',
  },
  {
    id: 'uiux-faq-6',
    question: 'Do you redesign existing websites and mobile apps for better conversions?',
    answer:
      'Yes! We frequently perform Conversion Rate Optimization (CRO) redesigns. We evaluate your current user drop-off points, analyze session recordings, eliminate unnecessary clicks, and modernize the visual identity to significantly increase form completions and sales.',
  },
  {
    id: 'uiux-faq-7',
    question: 'What is included in a scalable Design System?',
    answer:
      'A design system includes a foundational style guide (typography scale, color palettes, elevation shadows, icon library), atomic UI components (buttons, input fields, modals, navigation bars, dropdowns) with all interactive states (default, hover, active, disabled), and clear usage guidelines.',
  },
  {
    id: 'uiux-faq-8',
    question: 'Can I hire dedicated UI/UX designers near me in Noida / Delhi NCR?',
    answer:
      'Yes! Vastora Tech is headquartered in Noida. You can collaborate directly with our senior product designers on flexible sprint-based projects or monthly retainer models, with options for on-site design thinking workshops in Delhi NCR as well as seamless remote collaboration globally.',
  },
];

const UxUiDesignServices: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState<ToolCategory>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>('uiux-faq-1');

  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);

  const processSectionRef = useRef<HTMLElement>(null);
  const processHeaderRef = useRef<HTMLDivElement>(null);
  const processGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = bentoGridRef.current
      ? (Array.from(bentoGridRef.current.children) as HTMLElement[])
      : [];

    const processCards = processGridRef.current
      ? (Array.from(processGridRef.current.children) as HTMLElement[])
      : [];

    const ctx = gsap.context(() => {
      if (servicesHeaderRef.current) {
        gsap.fromTo(
          servicesHeaderRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: servicesHeaderRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (processHeaderRef.current) {
        gsap.fromTo(
          processHeaderRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: processHeaderRef.current,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px)', () => {
        if (cards.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          });

          tl.fromTo(
            [cards[0], cards[3]].filter(Boolean),
            { x: -360, opacity: 0, rotateY: 16, scale: 0.88 },
            { x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 1.05, ease: 'power3.out', stagger: 0.16 },
            0
          );

          tl.fromTo(
            [cards[2], cards[5]].filter(Boolean),
            { x: 360, opacity: 0, rotateY: -16, scale: 0.88 },
            { x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 1.05, ease: 'power3.out', stagger: 0.16 },
            0
          );

          tl.fromTo(
            [cards[1], cards[4]].filter(Boolean),
            { y: 110, opacity: 0, scale: 0.84 },
            { y: 0, opacity: 1, scale: 1, duration: 1.05, ease: 'power3.out', stagger: 0.16 },
            0.08
          );
        }

        if (processCards.length) {
          const processTl = gsap.timeline({
            scrollTrigger: {
              trigger: processGridRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          });

          processTl.fromTo(
            [processCards[0], processCards[3]].filter(Boolean),
            { x: -360, opacity: 0, rotateY: 16, scale: 0.88 },
            { x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 1.05, ease: 'power3.out', stagger: 0.16 },
            0
          );

          processTl.fromTo(
            [processCards[2], processCards[5]].filter(Boolean),
            { x: 360, opacity: 0, rotateY: -16, scale: 0.88 },
            { x: 0, opacity: 1, rotateY: 0, scale: 1, duration: 1.05, ease: 'power3.out', stagger: 0.16 },
            0
          );

          processTl.fromTo(
            [processCards[1], processCards[4]].filter(Boolean),
            { y: 110, opacity: 0, scale: 0.84 },
            { y: 0, opacity: 1, scale: 1, duration: 1.05, ease: 'power3.out', stagger: 0.16 },
            0.08
          );

          const badges = processCards.map((c) => c.querySelector('.step-num-badge')).filter(Boolean);
          if (badges.length) {
            processTl.fromTo(
              badges,
              { scale: 0.5, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)', stagger: 0.08 },
              0.4
            );
          }
        }
      });

      mm.add('(max-width: 991px) and (min-width: 701px)', () => {
        if (cards.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });

          tl.fromTo(
            [cards[0], cards[2], cards[4]].filter(Boolean),
            { x: -240, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'power3.out', stagger: 0.14 },
            0
          );

          tl.fromTo(
            [cards[1], cards[3], cards[5]].filter(Boolean),
            { x: 240, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'power3.out', stagger: 0.14 },
            0
          );
        }

        if (processCards.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: processGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });

          tl.fromTo(
            [processCards[0], processCards[2], processCards[4]].filter(Boolean),
            { x: -240, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'power3.out', stagger: 0.14 },
            0
          );

          tl.fromTo(
            [processCards[1], processCards[3], processCards[5]].filter(Boolean),
            { x: 240, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'power3.out', stagger: 0.14 },
            0
          );
        }
      });

      mm.add('(max-width: 700px)', () => {
        cards.forEach((card, idx) => {
          const fromLeft = idx % 2 === 0;
          gsap.fromTo(
            card,
            { x: fromLeft ? -60 : 60, y: 50, opacity: 0, scale: 0.94 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

        processCards.forEach((card, idx) => {
          const fromLeft = idx % 2 === 0;
          gsap.fromTo(
            card,
            { x: fromLeft ? -60 : 60, y: 50, opacity: 0, scale: 0.94 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const filteredTools =
    activeToolTab === 'all'
      ? DESIGN_TOOLS
      : DESIGN_TOOLS.filter((t) => t.category === activeToolTab);

  return (
    <>
      <HeaderFive />
      <main className="uiux-service-redesign-wrapper">
        {/* ========================================================
            1. HERO SECTION WITH INTEGRATED BREADCRUMB PILL
            ======================================================== */}
        <section className="uiux-hero-section">
          <div className="container">
            <div className="uiux-hero-header">
              {/* Integrated Breadcrumb Pill Badge */}
              <div>
                <div className="vt-breadcrumb-pill">
                  <Link href="/" className="pill-home-link">
                    Home
                  </Link>
                  <span className="pill-dot-sep">·</span>
                  <span className="pill-current-label">UI/UX Design Services</span>
                </div>
              </div>

              {/* Eyebrow Badge */}
              <div>
                <div className="uiux-eyebrow-badge">
                  <span className="badge-dot"></span>
                  <span className="badge-text">AWARD-WINNING UI/UX DESIGN STUDIO IN NOIDA</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="uiux-main-title">
                Crafting Human-Centric Interfaces That Turn <br />
                <span className="highlight-purple">Curious Visitors Into Devoted Customers</span>
              </h1>

              {/* Subtitle */}
              <p className="uiux-main-subtitle">
                We design intuitive digital products, enterprise design systems, and responsive web & mobile experiences.
                Rooted in cognitive psychology, rapid Figma prototyping, and pixel-perfect design-to-code execution.
              </p>

              {/* Trust / Metric Strip */}
              <div className="uiux-trust-strip">
                <span className="trust-strip-item highlight-purple">
                  <span className="icon-symbol">💎</span>
                  Pixel-Perfect Figma Component Systems
                </span>
                <span className="trust-strip-item highlight-pink">
                  <span className="icon-symbol">🚀</span>
                  3.2x Average Conversion Rate Uplift
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">⚡</span>
                  Interactive Clickable Prototypes
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">🧠</span>
                  WCAG 2.1 AA Accessibility Standards
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">📐</span>
                  Zero-Friction Developer Token Handoff
                </span>
              </div>
            </div>

            {/* Interactive Design Stack Card */}
            <div className="uiux-design-stack-card">
              <div className="stack-card-top">
                <div className="stack-title-box">
                  <div className="stack-icon-badge">✨</div>
                  <div>
                    <h3>Modern Design System & Tooling Matrix</h3>
                    <p>Engineered with industry-standard design, prototyping & token sync platforms</p>
                  </div>
                </div>

                <div className="stack-tabs-nav">
                  <button
                    className={`stack-tab-btn ${activeToolTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('all')}
                  >
                    All Tools
                  </button>
                  <button
                    className={`stack-tab-btn ${activeToolTab === 'prototyping' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('prototyping')}
                  >
                    Figma & Layout
                  </button>
                  <button
                    className={`stack-tab-btn ${activeToolTab === 'motion' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('motion')}
                  >
                    Motion & 3D
                  </button>
                  <button
                    className={`stack-tab-btn ${activeToolTab === 'research' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('research')}
                  >
                    UX Testing & IA
                  </button>
                  <button
                    className={`stack-tab-btn ${activeToolTab === 'tokens' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('tokens')}
                  >
                    Tokens & Handoff
                  </button>
                </div>
              </div>

              <div className="tools-chips-grid">
                {filteredTools.map((tool, idx) => (
                  <div key={idx} className="tool-chip-item">
                    <div className="chip-logo">{tool.iconSymbol}</div>
                    <div className="chip-details">
                      <div className="chip-name">{tool.name}</div>
                      <div className="chip-role">{tool.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. THE 6 CORE UI/UX DESIGN SERVICES (BENTO GRID)
            ======================================================== */}
        <section className="uiux-services-section" ref={servicesSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={servicesHeaderRef}>
              <span className="section-eyebrow">Comprehensive Capabilities</span>
              <h2 className="section-heading">Our 6 Core UI/UX Design Services</h2>
              <p className="section-subtext">
                Every screen, component, animation, and flow is meticulously crafted to eliminate friction and elevate
                brand perception.
              </p>
            </div>

            <div className="uiux-bento-grid" ref={bentoGridRef}>
              {SIX_SERVICES.map((srv, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={srv.id}
                    className={`uiux-bento-card card-idx-${idx + 1} ${
                      isLeft ? 'card-side-left' : isRight ? 'card-side-right' : 'card-center'
                    }`}
                  >
                    <div>
                      <div className="card-header-row">
                        <div className="service-icon-box">{srv.iconSymbol}</div>
                        <span className="service-idx-badge">0{srv.id}</span>
                      </div>

                      <div className="service-content-block">
                        <h3 className="service-card-title">{srv.title}</h3>
                        <p className="service-card-desc">{srv.desc}</p>

                        <ul className="service-feature-checklist">
                          {srv.features.map((feat, fIdx) => (
                            <li key={fIdx}>
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-card-footer">
                      <Link
                        href={`/contact?service=${encodeURIComponent(srv.title)}`}
                        className="service-learn-more"
                      >
                        <span>Design This Product</span>
                        <span className="arrow-icon">→</span>
                      </Link>
                      <span className="service-tag">{srv.serviceTag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. 6-STAGE HUMAN-CENTERED BLUEPRINT
            ======================================================== */}
<section className="uiux-process-section" ref={processSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={processHeaderRef}>
              <span className="section-eyebrow">Design Methodology</span>
              <h2 className="section-heading">Our 6-Stage Human-Centered Blueprint</h2>
              <p className="section-subtext">
                How we guide digital products from ambiguous ideas into high-converting, award-worthy realities.
              </p>
            </div>

            <div className="process-steps-grid" ref={processGridRef}>
              {PROCESS_STAGES.map((stg, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={stg.step}
                    className={`process-step-card step-idx-${idx + 1} ${
                      isLeft ? 'card-side-left' : isRight ? 'card-side-right' : 'card-center'
                    }`}
                  >
                    <div className="step-num-badge">{stg.step}</div>
                    <h3 className="step-title">{stg.title}</h3>
                    <p className="step-desc">{stg.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. FREQUENTLY ASKED QUESTIONS
            ======================================================== */}
        <section className="uiux-faq-section">
          <div className="container">
            <div className="faq-header-wrap">
              <span className="faq-eyebrow">Frequently Asked Questions</span>
              <h2 className="faq-title">UI/UX Design FAQs</h2>
              <p className="faq-subtitle">
                Clear answers regarding Figma source files, design systems, timelines, and developer handoffs.
              </p>
            </div>

            <div className="faq-accordion-list">
              {FAQ_ITEMS.map((faq) => {
                const isActive = activeFaq === faq.id;
                return (
                  <div key={faq.id} className={`faq-item-card ${isActive ? 'is-active' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isActive ? null : faq.id)}
                      aria-expanded={isActive}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle-icon">{isActive ? '×' : '+'}</span>
                    </button>
                    {isActive && (
                      <div className="faq-answer-pane">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            8. CLOSING HIGH-CONVERSION CTA BANNER
            ======================================================== */}
        <section className="uiux-cta-section">
          <div className="container">
            <div className="uiux-cta-box">
              <span className="cta-eyebrow">Ready To Redefine Your Digital Product?</span>
              <h2 className="cta-title">Build An Interface That Users Fall In Love With</h2>
              <p className="cta-desc">
                Partner with Noida’s premier UI/UX design studio. Receive an expert UX heuristic audit, interactive Figma
                prototype consultation, and milestone roadmap within 24 hours.
              </p>
              <div className="cta-buttons-wrap">
                <Link
                  href="/contact?service=UI%20UX%20Design"
                  className="btn-primary-white"
                >
                  Start Your Design Project →
                </Link>
                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%2C%20I%20want%20to%20discuss%20a%20UI%2FUX%20Design%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-whatsapp"
                >
                  <span>💬</span>
                  <span>Instant WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterFive style_audit={true} />
    </>
  );
};

export default UxUiDesignServices;