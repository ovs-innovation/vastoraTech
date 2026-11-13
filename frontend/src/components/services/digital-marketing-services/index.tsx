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

// Tech / Channel Stack Categories
type StackCategory = 'all' | 'paid' | 'organic' | 'analytics';

interface StackItem {
  name: string;
  category: 'paid' | 'organic' | 'analytics';
  role: string;
  iconSymbol: string;
}

const STACK_ITEMS: StackItem[] = [
  { name: 'Google Ads (PPC)', category: 'paid', role: 'Smart Bidding & Performance Max', iconSymbol: '🎯' },
  { name: 'Meta Ads Manager', category: 'paid', role: 'Advantage+ & Micro-Audience Targeting', iconSymbol: '📱' },
  { name: 'LinkedIn Marketing', category: 'paid', role: 'High-LTV B2B Account Targeting', iconSymbol: '💼' },
  { name: 'Technical SEO Suite', category: 'organic', role: 'Enterprise Crawling & Semantics', iconSymbol: '🔍' },
  { name: 'Content Architecture', category: 'organic', role: 'Topical Authority Clusters', iconSymbol: '✍️' },
  { name: 'HubSpot & CRM', category: 'analytics', role: 'Pipeline & Lifecycle Automation', iconSymbol: '⚙️' },
  { name: 'Klaviyo & Omnichannel', category: 'paid', role: 'SMS & Email Predictive LTV Flows', iconSymbol: '✉️' },
  { name: 'GA4 & GTM Server-Side', category: 'analytics', role: 'CAPI & First-Party Tracking', iconSymbol: '📊' },
  { name: 'Looker Studio', category: 'analytics', role: 'Real-Time ROI Executive Dashboards', iconSymbol: '📈' },
  { name: 'Optimizely / VWO', category: 'analytics', role: 'Hypothesis-Driven CRO Testing', iconSymbol: '🧪' },
  { name: 'TikTok Ads Network', category: 'paid', role: 'UGC & Spark Ad Scalability', iconSymbol: '🎵' },
  { name: 'SEMrush & Ahrefs', category: 'organic', role: 'Competitor Reverse-Engineering', iconSymbol: '⚡' },
];

// The 6 Core Digital Marketing Services
const SIX_SERVICES = [
  {
    id: 1,
    title: 'High-ROAS Paid Search & PPC Campaigns',
    channelTag: 'Google & Bing Ads',
    desc: 'Capture high-intent buyers at the exact moment of search. We architect multi-tier keyword structures, negative matching matrices, and automated smart bidding algorithms that slash CPA.',
    features: [
      'Performance Max & Search Network mastery',
      'Hyper-targeted negative keyword filtering',
      'Dynamic search ads & automated RSA testing',
      'First-page absolute top impression share tuning',
    ],
    iconSymbol: '🎯',
  },
  {
    id: 2,
    title: 'Performance Social Advertising (Meta & TikTok)',
    channelTag: 'Paid Social Ads',
    desc: 'Transform social feeds into predictable customer acquisition engines. We deploy creative fatigue monitoring, custom audience lookalikes, and rapid-iteration UGC video ads.',
    features: [
      'High-converting video and carousel creatives',
      'Meta Conversions API (CAPI) server-side tracking',
      'Dynamic product ads (DPA) retargeting loops',
      'TikTok Spark ads and influencer amplification',
    ],
    iconSymbol: '📱',
  },
  {
    id: 3,
    title: 'Enterprise SEO & Organic Search Dominance',
    channelTag: 'Organic Visibility',
    desc: 'Compound long-term organic revenue with holistic technical optimization, deep topical authority mapping, and white-hat digital PR link acquisition.',
    features: [
      'Core Web Vitals & technical crawl budget audits',
      'High-commercial intent keyword conquesting',
      'Semantic schema & rich snippet integration',
      'Editorial outreach & authoritative backlink building',
    ],
    iconSymbol: '🌐',
  },
  {
    id: 4,
    title: 'Conversion Rate Optimization (CRO) & Testing',
    channelTag: 'Funnel Optimization',
    desc: 'Double your returns without increasing your media spend. We systematically remove conversion friction through heatmaps, user recordings, and statistical A/B split testing.',
    features: [
      'Full-funnel drop-off and friction analysis',
      'Mobile-first checkout and landing page UX',
      'Copywriting psychological hooks & value anchors',
      'Statistically validated A/B experiment roadmaps',
    ],
    iconSymbol: '⚡',
  },
  {
    id: 5,
    title: 'Omnichannel Lifecycle & Retention Automation',
    channelTag: 'Email & SMS Marketing',
    desc: 'Maximize customer lifetime value through hyper-personalized behavioral email, SMS, and WhatsApp messaging sequences that re-engage and upsell automatically.',
    features: [
      'Predictive abandoned checkout and win-back flows',
      'VIP tiering, loyalty clubs, and referral loops',
      'Dynamic product recommendation blocks',
      'Advanced deliverability & inbox placement tuning',
    ],
    iconSymbol: '✉️',
  },
  {
    id: 6,
    title: 'Multi-Touch Attribution & Growth Analytics',
    channelTag: 'Data & Telemetry',
    desc: 'Eliminate marketing blind spots with unified first-party attribution modeling. Track every touchpoint from initial impression to closed deal in a single real-time dashboard.',
    features: [
      'Server-side Google Tag Manager (sGTM) pipelines',
      'Cross-platform multi-touch attribution models',
      'Real-time Looker Studio executive reporting',
      'Custom CAC, LTV, and blended ROAS telemetry',
    ],
    iconSymbol: '📊',
  },
];

// The 6-Stage Digital Growth Process
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Market Intelligence & CAC Benchmarking',
    desc: 'We reverse-engineer your competitors’ ad spend, top-converting funnels, keyword dominance, and unit economics to uncover immediate growth opportunities.',
  },
  {
    step: '02',
    title: 'Full-Funnel Growth Architecture',
    desc: 'We map out tailored multi-channel customer journeys—aligning search, social, display, and retention touchpoints into an integrated compounding acquisition engine.',
  },
  {
    step: '03',
    title: 'Creative Asset & Copy Engineering',
    desc: 'Our in-house creative team designs high-CTR ad formats, thumb-stopping short-form videos, and conversion-focused landing pages engineered for your ideal customer personas.',
  },
  {
    step: '04',
    title: 'Campaign Deployment & Algorithmic Tuning',
    desc: 'We launch across targeted channels with precision server-side tracking, clean bid management, and strict budget gating to validate initial traction with minimum risk.',
  },
  {
    step: '05',
    title: 'Aggressive CRO & Split-Testing Iteration',
    desc: 'We ruthlessly test headline hooks, creative variations, landing page layouts, and bidding strategies to maximize blended ROAS and lower customer acquisition costs.',
  },
  {
    step: '06',
    title: 'Compounding Scaling & Channel Diversification',
    desc: 'Once winning funnels demonstrate positive unit economics, we scale budgets aggressively while expanding into secondary acquisition channels for maximum market share.',
  },
];

// FAQ Items
const FAQ_ITEMS = [
  {
    id: 'dm-faq-1',
    q: 'Which digital marketing channels will deliver the fastest ROI for my business?',
    a: 'For immediate, high-intent revenue, Google Paid Search (PPC) and Meta Retargeting typically yield the fastest returns. For sustainable, compounding value over 3–6 months, SEO and email lifecycle automation deliver the highest profit margins. We architect a blended strategy that balances short-term cash flow with long-term brand equity.',
  },
  {
    id: 'dm-faq-2',
    q: 'How does Vastora Tech track and report digital marketing results?',
    a: 'We provide 24/7 access to live Looker Studio executive dashboards integrated directly with GA4, Google Ads, Meta, and your CRM. You see verified first-party metrics including blended ROAS, exact CAC, conversion numbers, and net profit contribution rather than misleading vanity metrics.',
  },
  {
    id: 'dm-faq-3',
    q: 'Do you handle creative ad production and copywriting?',
    a: 'Yes, 100%. Our dedicated creative team produces all ad banners, responsive social formats, short-form video scripts, UGC direction, and persuasive direct-response copywriting tailored to your brand identity.',
  },
  {
    id: 'dm-faq-4',
    q: 'What is your recommended minimum monthly ad spend?',
    a: 'We work with clients ranging from fast-growing startups spending ₹50,000–₹2,00,000 ($1,000–$3,000) per month to enterprise brands deploying ₹10,00,000+ ($15,000+) monthly. Our management models are tailored to ensure positive unit economics at every growth stage.',
  },
  {
    id: 'dm-faq-5',
    q: 'Why choose Vastora Tech over traditional digital marketing agencies?',
    a: 'Most traditional agencies treat channels in isolation and rely on vanity metrics like impressions and clicks. Vastora Tech combines senior full-stack engineering with deep growth marketing—ensuring lightning-fast landing page speed, robust server-side attribution, and aggressive A/B experimentation that directly maximizes bottom-line revenue.',
  },
];

const DigitalMarketingServices: React.FC = () => {
  const [activeStackTab, setActiveStackTab] = useState<StackCategory>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>('dm-faq-1');

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
      // 1. Bento Section Header Reveal
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

      const mm = gsap.matchMedia();

      // Desktop: 3-column layout
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

      // Tablet: 2-column layout
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

      // Mobile: 1-column layout
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

  const filteredStack =
    activeStackTab === 'all'
      ? STACK_ITEMS
      : STACK_ITEMS.filter((t) => t.category === activeStackTab);

  return (
    <>
      <HeaderFive />
      <main className="dm-redesign-wrapper">
        {/* ========================================================
            1. HERO & DIGITAL GROWTH ECOSYSTEM
            ======================================================== */}
        <section className="dm-hero-section">
          <div className="container">
            <div className="dm-hero-header">
              {/* Integrated Breadcrumb Pill Badge */}
              <nav aria-label="Breadcrumb" className="vt-breadcrumb-pill">
                <Link href="/" className="pill-home-link">
                  Home
                </Link>
                <span className="pill-dot-sep">·</span>
                <span className="pill-current-label">Digital Marketing Services</span>
              </nav>

              <br />

              {/* Eyebrow Status Badge */}
              <div className="dm-eyebrow-badge">
                <span className="badge-dot" />
                <span className="badge-text">Top Digital Marketing Agency in Noida & Delhi NCR</span>
              </div>

              {/* Main Headline */}
              <h1 className="dm-main-title">
                Performance Digital Marketing{' '}
                <span className="highlight-blue">Engineered for Growth</span>
              </h1>

              {/* Subtitle */}
              <p className="dm-main-subtitle">
                We engineer hyper-targeted multi-channel acquisition campaigns that predictably scale revenue. From high-ROAS paid media and search dominance to full-funnel lifecycle retention.
              </p>

              {/* Trust & Performance Metrics Strip */}
              <div className="dm-trust-strip">
                <div className="trust-strip-item highlight-emerald">
                  <span>🎯</span>
                  <span>3.8x Avg Client ROAS</span>
                </div>
                <div className="trust-strip-item">
                  <span>⚡</span>
                  <span>Top 1% Click-Through Rate</span>
                </div>
                <div className="trust-strip-item">
                  <span>🛡️</span>
                  <span>100% Verified CAPI Attribution</span>
                </div>
                <div className="trust-strip-item">
                  <span>📈</span>
                  <span>Zero Wasted Ad Spend</span>
                </div>
              </div>
            </div>

            {/* Interactive Growth Stack Showcase */}
            <div className="dm-stack-showcase-card">
              <div className="stack-card-top">
                <div className="stack-title-box">
                  <div className="stack-icon-badge">🚀</div>
                  <div>
                    <h3>Omnichannel Growth Stack</h3>
                    <p>Enterprise ad networks, telemetry tools, and attribution engines</p>
                  </div>
                </div>

                <div className="stack-tabs-nav">
                  <button
                    type="button"
                    className={`stack-tab-btn ${activeStackTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('all')}
                  >
                    All Channels
                  </button>
                  <button
                    type="button"
                    className={`stack-tab-btn ${activeStackTab === 'paid' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('paid')}
                  >
                    Paid Advertising
                  </button>
                  <button
                    type="button"
                    className={`stack-tab-btn ${activeStackTab === 'organic' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('organic')}
                  >
                    Organic & SEO
                  </button>
                  <button
                    type="button"
                    className={`stack-tab-btn ${activeStackTab === 'analytics' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('analytics')}
                  >
                    Analytics & Data
                  </button>
                </div>
              </div>

              <div className="stack-chips-grid">
                {filteredStack.map((item, idx) => (
                  <div key={idx} className="stack-chip-item">
                    <div className="chip-logo">{item.iconSymbol}</div>
                    <div className="chip-details">
                      <div className="chip-name">{item.name}</div>
                      <div className="chip-role">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. THE 6 CORE DIGITAL MARKETING SERVICES (BENTO GRID)
            ======================================================== */}
        <section className="dm-services-section" ref={servicesSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={servicesHeaderRef}>
              <span className="section-eyebrow">Comprehensive Capabilities</span>
              <h2 className="section-heading">Our 6 Core Digital Marketing Services</h2>
              <p className="section-subtext">
                Every ad creative, bid algorithm, landing page test, and email sequence is engineered to maximize conversion velocity and customer lifetime value.
              </p>
            </div>

            <div className="services-bento-grid" ref={bentoGridRef}>
              {SIX_SERVICES.map((srv, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={srv.id}
                    className={`service-bento-card card-idx-${idx + 1} ${
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
                        <span>Scale With This</span>
                        <span className="arrow-icon">→</span>
                      </Link>
                      <span className="service-channel-tag">{srv.channelTag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. 6-STAGE DIGITAL GROWTH LIFECYCLE
            ======================================================== */}
        <section className="dm-process-section" ref={processSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={processHeaderRef}>
              <span className="section-eyebrow">Growth Methodology</span>
              <h2 className="section-heading">Our 6-Stage Digital Growth Blueprint</h2>
              <p className="section-subtext">
                A battle-tested methodology designed to eliminate ad spend waste, establish unit economics, and aggressively scale profitable revenue.
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
        <section className="dm-faq-section">
          <div className="container">
            <div className="faq-header-wrap">
              <span className="faq-eyebrow">Frequently Asked Questions</span>
              <h2 className="faq-title">Digital Marketing FAQs</h2>
              <p className="faq-subtitle">
                Clear answers about channels, campaign setups, minimum budgets, and our attribution reporting standards.
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
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <span className="faq-toggle-icon">{isActive ? '−' : '+'}</span>
                    </button>
                    {isActive && (
                      <div className="faq-answer-block">
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
            5. CLOSING CTA BANNER
            ======================================================== */}
        <section className="dm-cta-section">
          <div className="container">
            <div className="dm-cta-card">
              <span className="cta-eyebrow">Accelerate Your Growth</span>
              <h2 className="cta-heading">Ready to Scale Your Customer Acquisition?</h2>
              <p className="cta-sub">
                Book a confidential 30-minute growth strategy session with our senior digital marketing architects to audit your current campaigns and identify untapped ROAS opportunities.
              </p>
              <div className="cta-actions-row">
                <Link href="/contact?service=Digital%20Marketing" className="btn-cta-white">
                  <span>Claim Your Free Growth Audit →</span>
                </Link>
                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech,%20I'd%20like%20to%20discuss%20a%20digital%20marketing%20growth%20strategy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta-whatsapp"
                >
                  <i className="fa-brands fa-whatsapp" />
                  <span>Chat on WhatsApp</span>
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

export default DigitalMarketingServices;
