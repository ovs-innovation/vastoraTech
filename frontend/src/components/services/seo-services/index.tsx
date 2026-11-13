'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import Link from 'next/link';
import HeaderFive from '@/layout/headers/HeaderFive';
import FooterFive from '@/layout/footers/FooterFive';

// Tool Categories
type ToolCategory = 'all' | 'technical' | 'keywords' | 'backlinks' | 'analytics';

interface ToolItem {
  name: string;
  category: 'technical' | 'keywords' | 'backlinks' | 'analytics';
  role: string;
  iconSymbol: string;
}

const SEO_TOOLS: ToolItem[] = [
  { name: 'Screaming Frog', category: 'technical', role: 'Enterprise Deep Crawl & Index Audit', iconSymbol: '🐸' },
  { name: 'Google Search Console', category: 'technical', role: 'Real-Time Indexing & Core Web Vitals', iconSymbol: '🔍' },
  { name: 'Ahrefs Enterprise', category: 'keywords', role: 'Competitor Gap & Backlink Analytics', iconSymbol: '⚡' },
  { name: 'Semrush', category: 'keywords', role: 'Keyword Difficulty & SERP Volatility', iconSymbol: '📊' },
  { name: 'Surfer SEO & NLP', category: 'keywords', role: 'Topical Authority & Semantic TF-IDF', iconSymbol: '🏄' },
  { name: 'Pitchbox Outreach', category: 'backlinks', role: 'High-DR Editorial PR & Guest Features', iconSymbol: '📬' },
  { name: 'Google Analytics 4', category: 'analytics', role: 'Conversion Attribution & User Paths', iconSymbol: '📈' },
  { name: 'Schema.org / JSON-LD', category: 'technical', role: 'Rich Snippets & Knowledge Graph', iconSymbol: '🏷️' },
  { name: 'Majestic SEO', category: 'backlinks', role: 'Trust Flow & Topical Citation Quality', iconSymbol: '👑' },
  { name: 'Google Lighthouse', category: 'technical', role: 'Speed Index & Core Web Vitals 95+', iconSymbol: '💡' },
  { name: 'Looker Studio', category: 'analytics', role: 'Live Real-Time SERP Client Dashboard', iconSymbol: '📊' },
  { name: 'Moz Pro & DA Tracker', category: 'backlinks', role: 'Domain Authority & Spam Score Defense', iconSymbol: '🛡️' },
];

// The 6 Core SEO Services
const SIX_SERVICES = [
  {
    id: 1,
    title: 'Technical SEO & Core Web Vitals Overhaul',
    serviceTag: 'Architecture & Speed',
    desc: 'Eliminate crawl errors and indexing roadblocks. We optimize website architecture, JavaScript rendering, XML sitemaps, canonical loops, and achieve 90+ Core Web Vitals scores.',
    features: [
      'Sub-1.2s Largest Contentful Paint (LCP) acceleration',
      'JavaScript SSR rendering & crawl budget optimization',
      'Structured JSON-LD schema markup & entity graph',
      '404 remediation, 301 redirect chains & canonical fixes',
    ],
    iconSymbol: '⚙️',
  },
  {
    id: 2,
    title: 'High-Impact On-Page & Semantic SEO',
    serviceTag: 'Topical Authority',
    desc: 'Align your content with Google’s Helpful Content & NLP algorithms. We craft intent-driven heading structures, semantic entity clustering, and high-conversion internal linking networks.',
    features: [
      'Search intent mapping (Transactional, Commercial & Info)',
      'Entity-based topical cluster and pillar page silos',
      'High-CTR title tag & meta description engineering',
      'Internal PageRank distribution & anchor text optimization',
    ],
    iconSymbol: '📑',
  },
  {
    id: 3,
    title: 'White-Hat Authority Backlink Acquisition',
    serviceTag: 'High-DA Digital PR',
    desc: 'Build undeniable domain authority. We secure editorial guest features, niche-relevant digital PR placements, and brand citations on real websites with DR 50+ to DR 85+.',
    features: [
      '100% Real editorial websites (Zero PBNs or link farms)',
      'Contextual in-content links with natural anchor diversity',
      'Broken link reclamation & competitor link intercept',
      'Toxic backlink disavow audits & penalty recovery',
    ],
    iconSymbol: '🔗',
  },
  {
    id: 4,
    title: 'Local SEO & Google Business Profile (GBP)',
    serviceTag: 'Local 3-Pack Dominance',
    desc: 'Capture nearby high-intent buyers in Noida, Delhi NCR, and targeted city hubs. We optimize your Google Business Profile, local NAP citations, and geo-targeted landing pages.',
    features: [
      'Google Maps 3-Pack ranking optimization',
      '100% Consistent NAP (Name, Address, Phone) citations',
      'Geo-targeted service area pages with local schema',
      'Automated 5-star customer review generation workflows',
    ],
    iconSymbol: '📍',
  },
  {
    id: 5,
    title: 'E-Commerce SEO (Shopify & Custom Stores)',
    serviceTag: 'mCommerce & Product SEO',
    desc: 'Turn your product and category pages into high-ranking revenue magnets. We handle faceted navigation crawl bloat, product schema, rich review stars, and transactional keywords.',
    features: [
      'Faceted navigation & filter pagination crawl control',
      'Product Schema (Price, Availability, AggregateRating)',
      'Category page intent optimization for high buyer intent',
      'Out-of-stock redirection & seasonal collection SEO',
    ],
    iconSymbol: '🛍️',
  },
  {
    id: 6,
    title: 'Algorithm-Proof SEO Content Strategy',
    serviceTag: 'E-E-A-T Content Hubs',
    desc: 'High-converting content engineered to rank #1 and drive qualified leads. We write comprehensive guides, commercial comparison pages, and execute continuous content refresh cycles.',
    features: [
      'Google E-E-A-T compliant author bios & trust signals',
      'Bottom-of-the-funnel comparison & alternative pages',
      'Continuous content refreshing to reclaim decaying ranks',
      'High-converting lead magnets & in-article CTA hooks',
    ],
    iconSymbol: '✍️',
  },
];

// Interactive SERP Simulator Sectors
type SectorKey = 'b2b' | 'ecommerce' | 'local' | 'saas';

interface SectorData {
  title: string;
  badge: string;
  description: string;
  pillars: string[];
  serpTitle: string;
  serpUrl: string;
  serpSnippet: string;
  stat1Label: string;
  stat1Val: string;
  stat2Label: string;
  stat2Val: string;
  buttonText: string;
}

const SECTOR_DATA: Record<SectorKey, SectorData> = {
  b2b: {
    title: 'B2B Enterprise & High-Ticket Services',
    badge: 'B2B & Corporate',
    description: 'Target high-value commercial keywords searched by decision-makers, executives, and enterprise buyers looking for immediate vendor contracts.',
    pillars: [
      'Commercial & Transactional Intent Silos',
      'High-DR Tech Publication Backlinks',
      'Case Study Schema & Client Trust Proof',
      'Top-of-Funnel Problem Breakdown Guides',
    ],
    serpTitle: 'Best Enterprise Solutions Company | #1 Trusted Agency',
    serpUrl: 'https://vastoratech.com/services/enterprise-solutions',
    serpSnippet:
      'Looking for reliable enterprise solutions? Vastora Tech provides scalable digital architectures, enterprise software, and cloud integrations. Rated 4.9/5 by 120+ global companies.',
    stat1Label: 'Monthly Clicks',
    stat1Val: '18,400+ Visits',
    stat2Label: 'Average SERP Rank',
    stat2Val: '#1.4 Top Position',
    buttonText: 'Dominate B2B Search Terms →',
  },
  ecommerce: {
    title: 'E-Commerce & D2C Store Sales Domination',
    badge: 'E-Commerce Retail',
    description: 'Capture consumers searching for exact products, category collections, and purchase-ready commercial comparison queries with rich product stars.',
    pillars: [
      'Product AggregateRating Schema',
      'Category Silo Internal Link Mesh',
      'High-Intent Buying Keyword Targeting',
      'Zero Duplicate URL Canonicalization',
    ],
    serpTitle: 'Premium Store Collection | Fast Delivery & Best Prices',
    serpUrl: 'https://vastoratech.com/shop/premium-products',
    serpSnippet:
      '★★★★★ Rating: 4.9 · 850 reviews · In stock · Free Shipping. Explore our verified collection with instant checkout, 100% genuine warranty, and same-day delivery options.',
    stat1Label: 'Organic Orders Lift',
    stat1Val: '+215% Sales',
    stat2Label: 'Product Page CTR',
    stat2Val: '14.8% Click-Through',
    buttonText: 'Scale E-Commerce Rankings →',
  },
  local: {
    title: 'Local Google 3-Pack & City Map Domination',
    badge: 'Local Clinic / Retail',
    description: 'Own the top 3 spots in Google Maps when nearby customers search "near me" or "in Noida / Delhi NCR", driving phone calls and physical store walk-ins.',
    pillars: [
      'Google Business Profile Geo-Grid Ranking',
      'Local Citation & NAP Sync Across 80+ Directories',
      'Geo-Tagged Image Metadata & Posts',
      'Automated 5-Star Customer Feedback Loop',
    ],
    serpTitle: 'Top Rated Agency in Noida | Open Now · 5.0 Star Reviews',
    serpUrl: 'https://vastoratech.com/locations/noida-sector-62',
    serpSnippet:
      'Google Verified · 5.0 ★ (240+ reviews). Located in Noida Sector 62. Providing top-rated professional services with 24/7 client support. Call today for a free on-site consultation.',
    stat1Label: 'Direct Phone Inquiries',
    stat1Val: '320+ Calls/mo',
    stat2Label: 'Map Direction Requests',
    stat2Val: '680+ Monthly',
    buttonText: 'Rank #1 on Google Maps →',
  },
  saas: {
    title: 'SaaS Platforms & Software Keywords',
    badge: 'SaaS & Tech Products',
    description: 'Outrank legacy software giants on competitor alternative terms, product feature queries, and free trial discovery searches.',
    pillars: [
      'Alternative & Competitor VS Landing Pages',
      'SoftwareApplication Schema Markup',
      'Developer API Documentation SEO',
      'High-Authority Tech Domain Backlinks',
    ],
    serpTitle: 'Top Rated Cloud Platform | Start Your 14-Day Free Trial',
    serpUrl: 'https://vastoratech.com/software/features',
    serpSnippet:
      'The fastest cloud software for modern teams. Deploy in minutes with automated backups, 99.99% uptime SLA, and zero credit card required to start your free trial.',
    stat1Label: 'Free Trial Signups',
    stat1Val: '1,450+ Monthly',
    stat2Label: 'Customer Acquisition Cost',
    stat2Val: '65% Reduction',
    buttonText: 'Accelerate SaaS Organic Growth →',
  },
};

// Estimator Configurations
const TRAFFIC_OPTIONS = [
  { id: 'early', label: 'Under 2,500 visits / month (Early Stage)', multiplier: '4.5x Growth', price: '₹18,000 – ₹32,000 ($650 – $1,200)/mo', roadmap: 'Technical Health Fix + Fast-Track Keywords' },
  { id: 'growing', label: '2,500 – 15,000 visits / month (Growing)', multiplier: '3.2x Growth', price: '₹35,000 – ₹65,000 ($1,250 – $2,400)/mo', roadmap: 'Topical Silos + High-DR Editorial Backlinks' },
  { id: 'enterprise', label: '15,000 – 60,000+ visits / month (Scale)', multiplier: '2.5x Growth', price: '₹70,000 – ₹1,30,000 ($2,500 – $4,800)/mo', roadmap: 'Enterprise Content Scale + International SEO' },
];

const SCOPE_OPTIONS = [
  { id: 'local', label: 'Local Dominance (Google Maps + Noida/NCR)' },
  { id: 'national', label: 'National Organic Scale (Pan-India / USA)' },
  { id: 'ecommerce', label: 'E-Commerce Product & Category Domination' },
];

const DELIVERABLE_OPTIONS = [
  { id: 'tech', label: 'Core Web Vitals & JavaScript Speed Overhaul' },
  { id: 'backlinks', label: 'High-DR 50+ Editorial Guest Backlinks' },
  { id: 'content', label: '8x Semantic Topical Hub Authority Articles' },
  { id: 'competitor', label: 'Competitor Keyword Gap Intercept' },
];

// 6-Stage Process Lifecycle
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Full-Spectrum Technical Audit & Crawl Analysis',
    desc: 'Using Screaming Frog and Search Console to uncover crawl traps, render bottlenecks, canonical conflicts, schema errors, and site architecture defects.',
  },
  {
    step: '02',
    title: 'Competitor Keyword Gap & Intent Mapping',
    desc: 'Reverse-engineering your top 5 ranking competitors to pinpoint high-volume, low-competition keywords with commercial and transactional intent.',
  },
  {
    step: '03',
    title: 'On-Page Overhaul & Schema Markup Deployment',
    desc: 'Optimizing existing URLs with semantic NLP keyword density, heading hierarchies, internal linking meshes, and complete JSON-LD structured data.',
  },
  {
    step: '04',
    title: 'High-DA Editorial Outreach & Digital PR Links',
    desc: 'Securing contextual in-article backlinks on established, high-traffic industry publications with DR 50+ to DR 85+ (100% white-hat, zero PBNs).',
  },
  {
    step: '05',
    title: 'Core Web Vitals & Page Experience Acceleration',
    desc: 'Fine-tuning server response times, caching, image compression, and CSS/JS payloads to secure 95+ Google Lighthouse scores across all mobile devices.',
  },
  {
    step: '06',
    title: 'Bi-Weekly SERP Telemetry & Continuous Scaling',
    desc: 'Real-time rank tracking across desktop and mobile, traffic attribution in Looker Studio, and iterative sprint reviews to defend and expand positions.',
  },
];

// Head-to-Head Benchmark Rows
const BENCHMARK_ROWS = [
  {
    feature: 'Link Building Standard',
    vastora: '100% Real editorial links on DR 50–85+ authority publications',
    generic: 'Spammy directory submissions & low-tier PBN networks',
    freelance: 'Unverified links with severe Google penalty risk',
  },
  {
    feature: 'Technical SEO & Core Web Vitals',
    vastora: 'Developer-level code optimizations & 95+ PageSpeed scores',
    generic: 'Basic automated WordPress plugin checklist only',
    freelance: 'No technical capability to edit server or template code',
  },
  {
    feature: 'Algorithm Penalty Protection',
    vastora: 'White-hat architecture built for Google Helpful Content updates',
    generic: 'Vulnerable to sudden Google core update traffic crashes',
    freelance: 'Zero liability when algorithms de-index client pages',
  },
  {
    feature: 'Search Intent & Semantic Content',
    vastora: 'Entity-based NLP topical clusters & commercial buyer funnels',
    generic: 'Keyword-stuffed low-quality AI articles that fail to rank',
    freelance: 'Basic surface-level blog posts without conversion hooks',
  },
  {
    feature: 'Reporting Transparency',
    vastora: 'Live 24/7 Looker Studio dashboard with exact rank positions',
    generic: 'Vague end-of-month static PDF summaries with vanity charts',
    freelance: 'Occasional screenshots or no formal updates',
  },
  {
    feature: 'Revenue & Conversion Focus',
    vastora: 'Prioritizes high-intent commercial keywords that generate sales',
    generic: 'Focuses on useless zero-intent keywords to fake success',
    freelance: 'Tracks vanity rankings with zero business value',
  },
];

// FAQ Data
const FAQ_ITEMS = [
  {
    id: 'seo-faq-1',
    question: 'Which is the best SEO company in Noida?',
    answer:
      'Vastora Tech is recognized as a premier SEO company in Noida and India. We engineer data-driven, white-hat SEO strategies combining deep technical website audits, Core Web Vitals optimization, high-DA editorial link acquisition, and semantic entity content architectures that deliver sustainable #1 Google rankings.',
  },
  {
    id: 'seo-faq-2',
    question: 'What do comprehensive SEO services in Noida include?',
    answer:
      'Our full-spectrum SEO services include complete technical site audits, Core Web Vitals speed acceleration, competitor keyword gap analysis, on-page semantic content optimization, structured JSON-LD schema implementation, high-authority white-hat link building, Google Business Profile (Local SEO), and bi-weekly performance reporting.',
  },
  {
    id: 'seo-faq-3',
    question: 'How long does search engine optimization take to show measurable results?',
    answer:
      'Initial crawl improvements and ranking upticks are typically observed within 4 to 8 weeks following technical fixes and on-page optimization. Significant organic traffic compounding, top-3 keyword positions, and inbound lead surges generally materialize within 3 to 6 months of consistent white-hat execution.',
  },
  {
    id: 'seo-faq-4',
    question: 'Do you provide specialized SEO for eCommerce stores (Shopify, WooCommerce)?',
    answer:
      'Yes! We specialize in eCommerce SEO, focusing on product schema markup with real review stars, faceted navigation crawl control, category silo architecture, product page speed optimization, and transactional keyword targeting that directly increases online store sales.',
  },
  {
    id: 'seo-faq-5',
    question: 'What is your approach to off-page SEO and link building?',
    answer:
      'We practice 100% white-hat, editorial outreach link building. We never use Private Blog Networks (PBNs), automated link farms, or spam directories. Our digital PR specialists secure contextual, in-content backlinks on legitimate high-DR (50+) industry publications that withstand every Google core update.',
  },
  {
    id: 'seo-faq-6',
    question: 'Why should I hire a local SEO agency in Noida rather than an overseas freelancer?',
    answer:
      'Partnering with a local SEO agency in Noida gives you dedicated account managers who understand Delhi NCR and Indian market dynamics, localized search intent, and Google Maps local 3-pack algorithms, backed by an in-house engineering team with enterprise-level technical expertise.',
  },
  {
    id: 'seo-faq-7',
    question: 'How much do professional SEO services cost in Noida?',
    answer:
      'SEO investment depends on your market competitiveness, website size, and geographic target. Local SEO packages start from ₹18,000 – ₹32,000 ($650 – $1,200) per month, while competitive national and eCommerce campaigns scale depending on the volume of content and high-authority links required. We offer transparent monthly sprints with zero locked-in contracts.',
  },
  {
    id: 'seo-faq-8',
    question: 'Do you provide live transparent SEO reports?',
    answer:
      'Yes, absolutely. Every client receives access to a custom 24/7 Looker Studio dashboard that connects directly to Google Search Console and Google Analytics 4, displaying live keyword positions, organic click impressions, and verified conversion metrics in real-time.',
  },
];

const SeoServices: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState<ToolCategory>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>('seo-faq-1');

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
    activeToolTab === 'all' ? SEO_TOOLS : SEO_TOOLS.filter((t) => t.category === activeToolTab);

  return (
    <>
      <HeaderFive />
      <main className="seo-service-redesign-wrapper">
        {/* ========================================================
            1. HERO SECTION WITH INTEGRATED BREADCRUMB PILL
            ======================================================== */}
        <section className="seo-hero-section">
          <div className="container">
            <div className="seo-hero-header">
              {/* Integrated Breadcrumb Pill Badge */}
              <div>
                <div className="vt-breadcrumb-pill">
                  <Link href="/" className="pill-home-link">
                    Home
                  </Link>
                  <span className="pill-dot-sep">·</span>
                  <span className="pill-current-label">SEO Services</span>
                </div>
              </div>

              {/* Eyebrow Badge */}
              <div>
                <div className="seo-eyebrow-badge">
                  <span className="badge-dot"></span>
                  <span className="badge-text">#1 RANKED SEO & ORGANIC GROWTH COMPANY IN NOIDA</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="seo-main-title">
                Dominate Google Page 1 with <br />
                <span className="highlight-emerald">Data-Driven, White-Hat SEO Architecture</span>
              </h1>

              {/* Subtitle */}
              <p className="seo-main-subtitle">
                Stop losing high-intent buyers to competitors. We combine deep technical SEO, Core Web Vitals
                optimization, authoritative niche backlink acquisition, and semantic entity search indexing to turn
                Google into your #1 revenue pipeline.
              </p>

              {/* Trust / Metric Strip */}
              <div className="seo-trust-strip">
                <span className="trust-strip-item highlight-emerald">
                  <span className="icon-symbol">🏆</span>
                  100% White-Hat Algorithm Compliant
                </span>
                <span className="trust-strip-item highlight-blue">
                  <span className="icon-symbol">📈</span>
                  350% Average Organic Traffic Growth
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">⚡</span>
                  95+ Core Web Vitals Guarantee
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">🔗</span>
                  High-DA Real Editorial Backlinks
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">📊</span>
                  Live 24/7 SERP Rank Dashboard
                </span>
              </div>
            </div>

            {/* Interactive SEO Tooling Matrix Card */}
            <div className="seo-tools-matrix-card">
              <div className="matrix-card-top">
                <div className="matrix-title-box">
                  <div className="matrix-icon-badge">⚡</div>
                  <div>
                    <h3>Enterprise SEO Tooling & Tech Stack</h3>
                    <p>Powered by world-class crawling, keyword intelligence & attribution platforms</p>
                  </div>
                </div>

                <div className="matrix-tabs-nav">
                  <button
                    className={`matrix-tab-btn ${activeToolTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('all')}
                  >
                    All Tools
                  </button>
                  <button
                    className={`matrix-tab-btn ${activeToolTab === 'technical' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('technical')}
                  >
                    Technical & Speed
                  </button>
                  <button
                    className={`matrix-tab-btn ${activeToolTab === 'keywords' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('keywords')}
                  >
                    Keywords & NLP
                  </button>
                  <button
                    className={`matrix-tab-btn ${activeToolTab === 'backlinks' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('backlinks')}
                  >
                    Authority & Links
                  </button>
                  <button
                    className={`matrix-tab-btn ${activeToolTab === 'analytics' ? 'active' : ''}`}
                    onClick={() => setActiveToolTab('analytics')}
                  >
                    Analytics & GA4
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
            2. THE 6 CORE SEO SERVICES (BENTO GRID)
            ======================================================== */}
        <section className="seo-services-section" ref={servicesSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={servicesHeaderRef}>
              <span className="section-eyebrow">Comprehensive Capabilities</span>
              <h2 className="section-heading">Our 6 Core Search Optimization Services</h2>
              <p className="section-subtext">
                From technical architecture audits to compounding high-intent link networks, our holistic organic campaigns
                drive lasting revenue.
              </p>
            </div>

            <div className="seo-bento-grid" ref={bentoGridRef}>
              {SIX_SERVICES.map((srv, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={srv.id}
                    className={`seo-bento-card card-idx-${idx + 1} ${
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
                        <span>Rank For This</span>
                        <span className="arrow-icon">→</span>
                      </Link>
                      <span className="service-discipline-tag">{srv.serviceTag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. 6-STAGE SEARCH DOMINANCE BLUEPRINT
            ======================================================== */}
<section className="seo-process-section" ref={processSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={processHeaderRef}>
              <span className="section-eyebrow">Search Dominance Lifecycle</span>
              <h2 className="section-heading">Our 6-Stage Organic Blueprint</h2>
              <p className="section-subtext">
                How we methodically transform underperforming domains into authoritative, high-ranking industry leaders.
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
        <section className="seo-faq-section">
          <div className="container">
            <div className="faq-header-wrap">
              <span className="faq-eyebrow">Frequently Asked Questions</span>
              <h2 className="faq-title">SEO Services FAQs</h2>
              <p className="faq-subtitle">
                Clear answers regarding search rankings, white-hat link acquisition, technical audits, and timelines.
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
        <section className="seo-cta-section">
          <div className="container">
            <div className="seo-cta-box">
              <span className="cta-eyebrow">Ready To Claim Google Page 1?</span>
              <h2 className="cta-title">Turn Search Engines Into Your #1 Inbound Revenue Pipeline</h2>
              <p className="cta-desc">
                Partner with Noida’s highest-rated technical SEO team. Get a free, comprehensive technical SEO audit and
                keyword opportunity breakdown within 24 hours.
              </p>
              <div className="cta-buttons-wrap">
                <Link
                  href="/contact?service=SEO%20Services"
                  className="btn-primary-white"
                >
                  Claim Your Free Technical SEO Audit →
                </Link>
                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%2C%20I%20want%20to%20discuss%20an%20SEO%20project"
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

export default SeoServices;