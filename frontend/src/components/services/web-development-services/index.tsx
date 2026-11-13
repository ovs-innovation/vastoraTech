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

// Tech Stack Categories
type StackCategory = 'all' | 'frontend' | 'backend' | 'cloud';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'cloud';
  role: string;
  iconSymbol: string;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'Next.js 14/15', category: 'frontend', role: 'App Router / SSR & Edge', iconSymbol: '▲' },
  { name: 'React 19', category: 'frontend', role: 'Component Architecture', iconSymbol: '⚛' },
  { name: 'TypeScript', category: 'frontend', role: 'Strict Type Safety', iconSymbol: 'TS' },
  { name: 'Tailwind CSS', category: 'frontend', role: 'Atomic Responsive Design', iconSymbol: '🌊' },
  { name: 'Node.js', category: 'backend', role: 'High-Concurrency Runtime', iconSymbol: '🟢' },
  { name: 'Express / NestJS', category: 'backend', role: 'Modular Microservices', iconSymbol: '⚡' },
  { name: 'MongoDB', category: 'backend', role: 'NoSQL Scalable Document DB', iconSymbol: '🍃' },
  { name: 'PostgreSQL', category: 'backend', role: 'Relational ACID Data Layer', iconSymbol: '🐘' },
  { name: 'Redis', category: 'backend', role: 'In-Memory Sub-ms Caching', iconSymbol: '⚡' },
  { name: 'AWS Cloud', category: 'cloud', role: 'Global Elastic Infrastructure', iconSymbol: '☁' },
  { name: 'Vercel Edge', category: 'cloud', role: 'Instant Global CDN & Edge', iconSymbol: '▲' },
  { name: 'Docker', category: 'cloud', role: 'Containerized Microservices', iconSymbol: '🐳' },
];

// The 6 Core Web Development Services
const SIX_SERVICES = [
  {
    id: 1,
    title: 'Custom Full-Stack Web Applications',
    techTag: 'Next.js / Node.js',
    desc: 'High-performance web applications built from scratch with modern frameworks. Designed for fluid responsiveness, clean architecture, and seamless scalability.',
    features: [
      'Server-Side Rendering (SSR) & Static Generation',
      'Modular TypeScript & React component system',
      'Role-based authentication & secure user portals',
      'Blazing-fast sub-second edge response times',
    ],
    iconSymbol: '💻',
  },
  {
    id: 2,
    title: 'High-Converting E-Commerce Stores',
    techTag: 'Headless Commerce',
    desc: 'Custom Shopify Plus, WooCommerce, and headless commerce platforms tailored to boost average order value, checkout conversions, and customer retention.',
    features: [
      'Frictionless 1-click checkout & instant payment gateways',
      'Real-time automated inventory & logistics sync',
      'Mobile-first performance for maximum mobile buyers',
      'Custom discount engines, upsells & analytics',
    ],
    iconSymbol: '🛍️',
  },
  {
    id: 3,
    title: 'Enterprise CMS, CRM & ERP Web Portals',
    techTag: 'Enterprise Portals',
    desc: 'Robust management platforms, business dashboards, booking systems, and CRM workflows that automate manual operations and streamline internal pipelines.',
    features: [
      'Custom admin dashboards with fine-grained RBAC',
      'Real-time interactive data analytics & export',
      'Automated customer & operational workflow triggers',
      'Multi-tenant data isolation & cloud backup',
    ],
    iconSymbol: '📊',
  },
  {
    id: 4,
    title: 'Corporate & High-Performance Brand Websites',
    techTag: 'Brand & Landing',
    desc: 'Showcase your company with bespoke visual design, interactive micro-animations, and high-converting storytelling engineered to turn visitors into qualified leads.',
    features: [
      '100/100 Google Lighthouse Core Web Vitals',
      'Conversion-centered lead capture & CTA journeys',
      'Complete cross-device & mobile fluid adaptation',
      'Technical SEO audit & structured schema markup',
    ],
    iconSymbol: '🌐',
  },
  {
    id: 5,
    title: 'Custom REST & GraphQL API Integration',
    techTag: 'REST / GraphQL',
    desc: 'Connect your web application to third-party services, payment processors, logistics partners, WhatsApp/SMS engines, and legacy enterprise software.',
    features: [
      'Secure JWT & OAuth 2.0 encrypted API endpoints',
      'Real-time WebSockets & bidirectional data sync',
      'Stripe, Razorpay, PayPal & custom gateways',
      'High-throughput rate limiting & DDoS protection',
    ],
    iconSymbol: '🔌',
  },
  {
    id: 6,
    title: 'Website Maintenance, Speed Optimization & SLA',
    techTag: '24/7 Support & SLA',
    desc: 'Keep your platform fast, secure, and always updated with proactive SLA monitoring, Core Web Vitals optimization, and 24/7 technical incident coverage.',
    features: [
      '99.9% Uptime monitoring & rapid incident response',
      'Continuous performance tuning & database caching',
      'Automated daily cloud backups & vulnerability scans',
      'Ongoing feature additions & software version upgrades',
    ],
    iconSymbol: '🛡️',
  },
];

// Agile Process Stages
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Discovery & System Blueprint',
    desc: 'We map out user flows, database architecture, third-party integrations, and performance benchmarks to establish an unambiguous technical roadmap.',
  },
  {
    step: '02',
    title: 'UI/UX Interactive Prototyping',
    desc: 'Interactive Figma designs with tailored micro-interactions, responsive tokens, and conversion-focused customer journeys built for your target audience.',
  },
  {
    step: '03',
    title: 'Sprint-Based Full-Stack Development',
    desc: 'Modular, typed engineering in 1-week sprints using Next.js and Node.js. You receive weekly staging demonstrations with verifiable code progress.',
  },
  {
    step: '04',
    title: 'Rigorous Testing & Security Audits',
    desc: 'Automated end-to-end testing, cross-browser compatibility, load testing, and OWASP security vulnerability scans ensure zero defects.',
  },
  {
    step: '05',
    title: 'Production Deployment & CDN Tuning',
    desc: 'Zero-downtime deployment to AWS or Vercel edge networks with global caching, SSL certificates, automated CI/CD, and 100/100 Lighthouse scores.',
  },
  {
    step: '06',
    title: 'Post-Launch Warranty & Growth SLA',
    desc: 'Ongoing support, performance monitoring, routine database optimization, and rapid feature upgrades so your platform grows seamlessly.',
  },
];

// FAQ Items
const FAQ_LIST = [
  {
    q: 'Which is the top web development company in Noida?',
    a: 'Vastora Tech is a premier web development company in Noida, trusted for building high-performance, SEO-friendly, and scalable web solutions using modern stacks like Next.js, React, Node.js, and headless commerce engines.',
  },
  {
    q: 'Do you offer custom business website development services?',
    a: 'Yes, we provide end-to-end custom development services tailored to your specific brand, including custom UI/UX design, modular backends, payment gateway integration, and business workflow dashboards.',
  },
  {
    q: 'How much does website development cost and how is it billed?',
    a: 'Costs depend on feature scope and architecture. Corporate websites typically start from ₹20,000–₹45,000, while complex custom web applications or eCommerce stores range from ₹45,000–₹1,20,000+. All projects are billed in milestone-based sprints with defined deliverables.',
  },
  {
    q: 'How long does it take to develop a modern web platform?',
    a: 'A standard high-performance business website takes 2–3 weeks. Custom web applications, SaaS dashboards, or full eCommerce architectures typically require 4–8 weeks with weekly staging demos.',
  },
  {
    q: 'Will my website be SEO-friendly and fully mobile-responsive?',
    a: 'Yes, 100%. Every platform we engineer is mobile-first, semantic, and optimized for sub-second load times. We implement automated schema markups, meta tags, and SSR to ensure top Google search visibility.',
  },
  {
    q: 'Do we own the full source code and intellectual property?',
    a: 'Yes, absolutely. Upon completion, 100% of the intellectual property, source code repositories, and credentials belong to you with zero vendor lock-in.',
  },
];

const WebDevelopment = () => {
  const [selectedStackCat, setSelectedStackCat] = useState<StackCategory>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesHeaderRef = useRef<HTMLDivElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);

  const processSectionRef = useRef<HTMLElement>(null);
  const processHeaderRef = useRef<HTMLDivElement>(null);
  const processGridRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger animation: cards fly in from left and right sides and place at center
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
      // 1. Subtle Bento Section Header Reveal
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

      // 2. Process Section Header Reveal
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

      // 3. Responsive ScrollTrigger Animation
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP: 3-Column Layout
      // ==========================================
      mm.add('(min-width: 992px)', () => {
        // --- A. BENTO SERVICES CARDS ---
        if (cards.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          });

          // Left cards (0 & 3) fly in from the far left of the screen and place at center
          tl.fromTo(
            [cards[0], cards[3]],
            {
              x: -360,
              opacity: 0,
              rotateY: 16,
              scale: 0.88,
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              stagger: 0.16,
            },
            0
          );

          // Right cards (2 & 5) fly in from the far right of the screen and place at center
          tl.fromTo(
            [cards[2], cards[5]],
            {
              x: 360,
              opacity: 0,
              rotateY: -16,
              scale: 0.88,
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              stagger: 0.16,
            },
            0
          );

          // Center cards (1 & 4) emerge from bottom/center into place
          tl.fromTo(
            [cards[1], cards[4]],
            {
              y: 110,
              opacity: 0,
              scale: 0.84,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              stagger: 0.16,
            },
            0.08
          );
        }

        // --- B. 6-STAGE PROCESS CARDS ---
        if (processCards.length) {
          const processTl = gsap.timeline({
            scrollTrigger: {
              trigger: processGridRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          });

          // Left process cards (01 & 04): fly in from far left of screen to center
          processTl.fromTo(
            [processCards[0], processCards[3]].filter(Boolean),
            {
              x: -360,
              opacity: 0,
              rotateY: 16,
              scale: 0.88,
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              stagger: 0.16,
            },
            0
          );

          // Right process cards (03 & 06): fly in from far right of screen to center
          processTl.fromTo(
            [processCards[2], processCards[5]].filter(Boolean),
            {
              x: 360,
              opacity: 0,
              rotateY: -16,
              scale: 0.88,
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              stagger: 0.16,
            },
            0
          );

          // Center process cards (02 & 05): emerge from bottom/center into place
          processTl.fromTo(
            [processCards[1], processCards[4]].filter(Boolean),
            {
              y: 110,
              opacity: 0,
              scale: 0.84,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.05,
              ease: 'power3.out',
              stagger: 0.16,
            },
            0.08
          );

          // Pop step number badges on landing
          const badges = processCards
            .map((c) => c.querySelector('.step-num-badge'))
            .filter(Boolean);
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

      // ==========================================
      // TABLET: 2-Column Layout
      // ==========================================
      mm.add('(max-width: 991px) and (min-width: 701px)', () => {
        // Bento cards
        if (cards.length) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });

          tl.fromTo(
            [cards[0], cards[2], cards[4]],
            {
              x: -240,
              opacity: 0,
              scale: 0.9,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.95,
              ease: 'power3.out',
              stagger: 0.14,
            },
            0
          );

          tl.fromTo(
            [cards[1], cards[3], cards[5]],
            {
              x: 240,
              opacity: 0,
              scale: 0.9,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.95,
              ease: 'power3.out',
              stagger: 0.14,
            },
            0
          );
        }

        // Process cards
        if (processCards.length) {
          const processTl = gsap.timeline({
            scrollTrigger: {
              trigger: processGridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });

          processTl.fromTo(
            [processCards[0], processCards[2], processCards[4]].filter(Boolean),
            { x: -240, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'power3.out', stagger: 0.14 },
            0
          );

          processTl.fromTo(
            [processCards[1], processCards[3], processCards[5]].filter(Boolean),
            { x: 240, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 0.95, ease: 'power3.out', stagger: 0.14 },
            0
          );
        }
      });

      // ==========================================
      // MOBILE: 1-Column Layout
      // ==========================================
      mm.add('(max-width: 700px)', () => {
        // Bento cards
        cards.forEach((card, idx) => {
          const fromLeft = idx % 2 === 0;
          gsap.fromTo(
            card,
            {
              x: fromLeft ? -110 : 110,
              opacity: 0,
              scale: 0.92,
            },
            {
              x: 0,
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

        // Process cards
        processCards.forEach((card, idx) => {
          const fromLeft = idx % 2 === 0;
          gsap.fromTo(
            card,
            {
              x: fromLeft ? -110 : 110,
              opacity: 0,
              scale: 0.92,
            },
            {
              x: 0,
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

  // Filter tech stack chips
  const filteredTech = TECH_ITEMS.filter((item) => {
    if (selectedStackCat === 'all') return true;
    return item.category === selectedStackCat;
  });

  return (
    <>
      <HeaderFive />
      <main className="web-dev-redesign-wrapper">
        {/* ========================================================
            1. HERO & ARCHITECTURE ECOSYSTEM
            ======================================================== */}
        <section className="web-dev-hero-section">
          <div className="container">
            <div className="web-dev-hero-header">
              {/* Integrated Breadcrumb Pill Badge (matching user design) */}
              <nav aria-label="Breadcrumb" className="vt-breadcrumb-pill">
                <Link href="/" className="pill-home-link">Home</Link>
                <span className="pill-dot-sep">·</span>
                <span className="pill-current-label">Web Development Services</span>
              </nav>

              <br />

              {/* Eyebrow Status Badge */}
              <div className="web-dev-eyebrow-badge">
                <span className="badge-dot" />
                <span className="badge-text">Top Web Development Company in Noida</span>
              </div>

              {/* Main Headline */}
              <h1 className="web-dev-main-title">
                Full-Stack Web Development{' '}
                <span className="highlight-blue">Engineered for Scale</span>
              </h1>

              {/* Subtitle */}
              <p className="web-dev-main-subtitle">
                We engineer ultra-fast, SEO-optimized, and conversion-focused web platforms. From custom SaaS web apps and enterprise portals to high-traffic eCommerce architectures built with Next.js & Node.js.
              </p>

              {/* Trust & Speed Metrics Strip */}
              <div className="web-dev-trust-strip">
                <div className="trust-strip-item highlight-emerald">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100/100 Core Web Vitals</span>
                </div>
                <div className="trust-strip-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span>Sub-300ms Global Edge Speed</span>
                </div>
                <div className="trust-strip-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944z" clipRule="evenodd" />
                  </svg>
                  <span>Zero Technical Debt</span>
                </div>
                <div className="trust-strip-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>Weekly Sprint Demos</span>
                </div>
              </div>
            </div>

            {/* Interactive Tech Stack Matrix */}
            <div className="web-dev-stack-showcase-card">
              <div className="stack-card-top">
                <div className="stack-title-box">
                  <div className="stack-icon-badge">⚡</div>
                  <div>
                    <h3>Modern Engineering Stack</h3>
                    <p>Clean, typed, and battle-tested technologies used by top tech companies</p>
                  </div>
                </div>

                <div className="stack-tabs-nav">
                  <button
                    type="button"
                    className={`stack-tab-btn ${selectedStackCat === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedStackCat('all')}
                  >
                    All Tech
                  </button>
                  <button
                    type="button"
                    className={`stack-tab-btn ${selectedStackCat === 'frontend' ? 'active' : ''}`}
                    onClick={() => setSelectedStackCat('frontend')}
                  >
                    Frontend
                  </button>
                  <button
                    type="button"
                    className={`stack-tab-btn ${selectedStackCat === 'backend' ? 'active' : ''}`}
                    onClick={() => setSelectedStackCat('backend')}
                  >
                    Backend & APIs
                  </button>
                  <button
                    type="button"
                    className={`stack-tab-btn ${selectedStackCat === 'cloud' ? 'active' : ''}`}
                    onClick={() => setSelectedStackCat('cloud')}
                  >
                    Cloud & DevOps
                  </button>
                </div>
              </div>

              <div className="stack-chips-grid">
                {filteredTech.map((tech, idx) => (
                  <div key={idx} className="stack-chip-item">
                    <div className="chip-logo">{tech.iconSymbol}</div>
                    <div className="chip-details">
                      <div className="chip-name">{tech.name}</div>
                      <div className="chip-role">{tech.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. THE 6 CORE WEB DEVELOPMENT SERVICES (BENTO SHOWCASE)
            ======================================================== */}
        <section className="web-dev-services-section" ref={servicesSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={servicesHeaderRef}>
              <span className="section-eyebrow">Our Core Expertise</span>
              <h2 className="section-heading">6 Tailored Web Development Services</h2>
              <p className="section-subtext">
                Whether you need a custom SaaS platform, a high-converting online store, or an enterprise portal, our senior architects deliver robust, secure, and production-ready web systems.
              </p>
            </div>

            <div className="services-bento-grid" ref={bentoGridRef}>
              {SIX_SERVICES.map((svc, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={svc.id}
                    className={`service-bento-card card-idx-${idx + 1} ${
                      isLeft ? 'card-side-left' : isRight ? 'card-side-right' : 'card-center'
                    }`}
                  >
                    <div>
                      <div className="card-header-row">
                        <div className="service-icon-box">{svc.iconSymbol}</div>
                        <span className="service-idx-badge">0{svc.id}</span>
                      </div>

                      <div className="service-content-block">
                        <h3 className="service-card-title">{svc.title}</h3>
                        <p className="service-card-desc">{svc.desc}</p>

                        <ul className="service-feature-checklist">
                          {svc.features.map((feat, fIdx) => (
                            <li key={fIdx}>
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-card-footer">
                      <Link href={`/contact?service=${encodeURIComponent(svc.title)}`} className="service-learn-more">
                        <span>Start Project</span>
                        <span className="arrow-icon">→</span>
                      </Link>
                      <span className="service-tech-tag">{svc.techTag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. 6-STAGE AGILE PROCESS TIMELINE
            ======================================================== */}
        <section className="web-dev-process-section" ref={processSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={processHeaderRef}>
              <span className="section-eyebrow">Agile Methodology</span>
              <h2 className="section-heading">Our 6-Stage Web Development Process</h2>
              <p className="section-subtext">
                A transparent, milestone-driven development process engineered to eliminate surprises and guarantee on-time delivery.
              </p>
            </div>

            <div className="process-steps-grid" ref={processGridRef}>
              {PROCESS_STAGES.map((st, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={st.step}
                    className={`process-step-card step-idx-${idx + 1} ${
                      isLeft ? 'card-side-left' : isRight ? 'card-side-right' : 'card-center'
                    }`}
                  >
                    <div className="step-num-badge">{st.step}</div>
                    <h3 className="step-title">{st.title}</h3>
                    <p className="step-desc">{st.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. FAQS ACCORDION
            ======================================================== */}
        <section className="web-dev-faq-section">
          <div className="container">
            <div className="faq-header-wrap">
              <span className="faq-eyebrow">Everything You Need to Know</span>
              <h2 className="faq-title">Website Development FAQs</h2>
              <p className="faq-subtitle">
                Clear answers regarding our web engineering stacks, delivery timelines, custom pricing, and intellectual property.
              </p>
            </div>

            <div className="faq-accordion-list">
              {FAQ_LIST.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`faq-item-card ${isOpen ? 'is-active' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-toggle-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="faq-chevron-svg"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-pane">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            7. CLOSING CTA BANNER
            ======================================================== */}
        <section className="web-dev-cta-section">
          <div className="container">
            <div className="web-dev-cta-box">
              <span className="cta-eyebrow">Let’s Start Building</span>
              <h2 className="cta-title">Ready to Launch Your High-Performance Website?</h2>
              <p className="cta-desc">
                Schedule a free 30-minute architecture strategy session with our senior web engineers to map out your technical requirements and receive an actionable quote.
              </p>

              <div className="cta-buttons-wrap">
                <Link href="/contact?service=Web%20Development" className="btn-primary-white">
                  <span>Start Your Project Today →</span>
                </Link>
                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-whatsapp"
                >
                  <i className="fa-brands fa-whatsapp" />
                  <span>WhatsApp Strategy Call</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterFive style={true} />
    </>
  );
};

export default WebDevelopment;
