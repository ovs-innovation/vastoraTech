'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeaderFive from '@/layout/headers/HeaderFive';
import FooterFive from '@/layout/footers/FooterFive';

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

// Interactive Estimator Options
const PROJECT_TYPES = [
  { id: 'custom-web', label: 'Custom Web Application', baseWeeks: 4, basePrice: '₹35,000 – ₹75,000 ($1,500 – $3,000)' },
  { id: 'ecommerce', label: 'E-Commerce Platform', baseWeeks: 5, basePrice: '₹45,000 – ₹90,000 ($2,000 – $4,000)' },
  { id: 'portal', label: 'Enterprise Portal / ERP', baseWeeks: 7, basePrice: '₹60,000 – ₹1,30,000 ($2,500 – $5,500)' },
  { id: 'brand-site', label: 'Corporate / Brand Website', baseWeeks: 3, basePrice: '₹20,000 – ₹45,000 ($800 – $1,800)' },
];

const COMPLEXITY_LEVELS = [
  { id: 'mvp', label: 'Standard MVP (Core Features)', mult: 1, labelWeeks: 'Standard Timeline' },
  { id: 'growth', label: 'Growth Scale (APIs + Dashboards)', mult: 1.3, labelWeeks: '+ 1-2 Sprints' },
  { id: 'enterprise', label: 'Full Enterprise (Custom Workflows)', mult: 1.6, labelWeeks: '+ 2-3 Sprints' },
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

// Benchmark Matrix
const BENCHMARK_ITEMS = [
  { feature: 'Page Load Speed', vastora: '< 0.4s (Instant Edge SSR / CDN)', legacy: '3.5s – 6.0s (Slow shared servers)' },
  { feature: 'Core Web Vitals', vastora: '100 / 100 (All green metrics)', legacy: 'Fails Google Core Web Vitals' },
  { feature: 'Codebase Quality', vastora: 'Clean Modular TypeScript & React', legacy: 'Bloated PHP & heavy monolithic plugins' },
  { feature: 'Mobile Experience', vastora: '100% Fluid & Mobile-First UX', legacy: 'Clunky templates with misalignments' },
  { feature: 'Security Architecture', vastora: 'OWASP-compliant, sanitized, enterprise SSL', legacy: 'Vulnerable plugin exploits & spam' },
  { feature: 'Future Scalability', vastora: 'Effortlessly scales to 1M+ users', legacy: 'Crashes during high-traffic spikes' },
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
  const [selectedProjectType, setSelectedProjectType] = useState<string>('custom-web');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('mvp');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filter tech stack chips
  const filteredTech = TECH_ITEMS.filter((item) => {
    if (selectedStackCat === 'all') return true;
    return item.category === selectedStackCat;
  });

  // Calculate dynamic estimate
  const currentProj = PROJECT_TYPES.find((p) => p.id === selectedProjectType) || PROJECT_TYPES[0];
  const currentComp = COMPLEXITY_LEVELS.find((c) => c.id === selectedComplexity) || COMPLEXITY_LEVELS[0];
  const calculatedWeeks = Math.ceil(currentProj.baseWeeks * currentComp.mult);

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
        <section className="web-dev-services-section">
          <div className="container">
            <div className="section-header-wrap">
              <span className="section-eyebrow">Our Core Expertise</span>
              <h2 className="section-heading">6 Tailored Web Development Services</h2>
              <p className="section-subtext">
                Whether you need a custom SaaS platform, a high-converting online store, or an enterprise portal, our senior architects deliver robust, secure, and production-ready web systems.
              </p>
            </div>

            <div className="services-bento-grid">
              {SIX_SERVICES.map((svc) => (
                <div key={svc.id} className="service-bento-card">
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
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. UNIQUE ESTIMATOR & TIMELINE CALCULATOR
            ======================================================== */}
        <section className="web-dev-estimator-section">
          <div className="container">
            <div className="estimator-card-wrapper">
              <div className="estimator-header">
                <span className="estimator-eyebrow">Interactive Estimator</span>
                <h3>Calculate Your Project Timeline & Scope</h3>
                <p>Select your requirements below to see an instant timeline estimate and recommended architecture.</p>
              </div>

              <div className="estimator-grid">
                {/* Left Controls */}
                <div className="estimator-controls">
                  <div className="control-group">
                    <label className="control-label">1. Select Project Type</label>
                    <div className="pill-options-wrap">
                      {PROJECT_TYPES.map((pt) => (
                        <button
                          key={pt.id}
                          type="button"
                          className={`estimator-option-btn ${selectedProjectType === pt.id ? 'active' : ''}`}
                          onClick={() => setSelectedProjectType(pt.id)}
                        >
                          {pt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="control-group">
                    <label className="control-label">2. Select Scope & Complexity</label>
                    <div className="pill-options-wrap">
                      {COMPLEXITY_LEVELS.map((cl) => (
                        <button
                          key={cl.id}
                          type="button"
                          className={`estimator-option-btn ${selectedComplexity === cl.id ? 'active' : ''}`}
                          onClick={() => setSelectedComplexity(cl.id)}
                        >
                          {cl.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Summary Dashboard */}
                <div className="estimator-summary-card">
                  <span className="summary-badge">⚡ Architecture Estimation</span>
                  <h4 className="summary-title">{currentProj.label}</h4>

                  <div className="summary-metrics-row">
                    <div className="metric-box">
                      <div className="metric-label">Estimated Delivery</div>
                      <div className="metric-val">{calculatedWeeks} Weeks</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-label">Agile Sprints</div>
                      <div className="metric-val">{Math.ceil(calculatedWeeks / 2)} Sprints</div>
                    </div>
                  </div>

                  <div className="summary-stack-rec">
                    <strong>Recommended Stack:</strong> Next.js 14 App Router, TypeScript, Node.js Microservices, MongoDB & AWS Cloud CDN.
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(currentProj.label)}`}
                    className="estimator-cta-btn"
                  >
                    <span>Claim Free Architecture Review →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. 6-STAGE AGILE PROCESS TIMELINE
            ======================================================== */}
        <section className="web-dev-process-section">
          <div className="container">
            <div className="section-header-wrap">
              <span className="section-eyebrow">Agile Methodology</span>
              <h2 className="section-heading">Our 6-Stage Web Development Process</h2>
              <p className="section-subtext">
                A transparent, milestone-driven development process engineered to eliminate surprises and guarantee on-time delivery.
              </p>
            </div>

            <div className="process-steps-grid">
              {PROCESS_STAGES.map((st) => (
                <div key={st.step} className="process-step-card">
                  <div className="step-num-badge">{st.step}</div>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            5. BENCHMARK COMPARISON MATRIX
            ======================================================== */}
        <section className="web-dev-benchmark-section">
          <div className="container">
            <div className="section-header-wrap">
              <span className="section-eyebrow">Why We Are Different</span>
              <h2 className="section-heading">Vastora Tech vs Legacy Agencies</h2>
              <p className="section-subtext">
                See how modern engineering and cloud architecture directly translates to higher conversions and zero downtime.
              </p>
            </div>

            <div className="benchmark-table-card">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Key Architectural Metric</th>
                      <th className="highlight-col">✨ Vastora Tech Modern Stack</th>
                      <th>Traditional Legacy Agencies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENCHMARK_ITEMS.map((item, idx) => (
                      <tr key={idx}>
                        <td className="feature-name">{item.feature}</td>
                        <td className="highlight-col">{item.vastora}</td>
                        <td className="legacy-col">{item.legacy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. FAQS ACCORDION
            ======================================================== */}
        <section className="contact-faq-section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="faq-header">
              <span className="faq-eyebrow">Everything You Need to Know</span>
              <h3 className="faq-title">Website Development FAQs</h3>
            </div>

            <div className="faq-accordion-list">
              {FAQ_LIST.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <svg
                        className="faq-toggle-icon"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-content">
                        <p style={{ margin: 0 }}>{faq.a}</p>
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