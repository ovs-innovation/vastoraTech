'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeaderFive from '@/layout/headers/HeaderFive';
import FooterFive from '@/layout/footers/FooterFive';

// Tech Stack Categories
type StackCategory = 'all' | 'cross-platform' | 'native' | 'backend-cloud';

interface TechItem {
  name: string;
  category: 'cross-platform' | 'native' | 'backend-cloud';
  role: string;
  iconSymbol: string;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'React Native', category: 'cross-platform', role: '0.74+ New Architecture / Hermes', iconSymbol: '⚛️' },
  { name: 'Flutter 3.x', category: 'cross-platform', role: 'Dart & Impeller 60FPS Engine', iconSymbol: '💙' },
  { name: 'Swift 6 & SwiftUI', category: 'native', role: 'Native iOS / iPadOS / WatchOS', iconSymbol: '🍏' },
  { name: 'Kotlin & Compose', category: 'native', role: 'Modern Declarative Android', iconSymbol: '🤖' },
  { name: 'Node.js & NestJS', category: 'backend-cloud', role: 'High-Concurrency Mobile APIs', iconSymbol: '🟢' },
  { name: 'Firebase Suite', category: 'backend-cloud', role: 'FCM Push, Auth & Firestore', iconSymbol: '🔥' },
  { name: 'SQLite / Watermelon', category: 'cross-platform', role: 'Sub-ms Offline-First Local DB', iconSymbol: '💾' },
  { name: 'AWS Amplify', category: 'backend-cloud', role: 'Elastic Cloud Sync & Auth', iconSymbol: '☁️' },
  { name: 'WebSockets & gRPC', category: 'backend-cloud', role: 'Real-Time Bi-Directional Feeds', iconSymbol: '⚡' },
  { name: 'Fastlane & CI/CD', category: 'native', role: 'Automated TestFlight & Store Deploy', iconSymbol: '🚀' },
  { name: 'GraphQL & Apollo', category: 'backend-cloud', role: 'Payload-Optimized Queries', iconSymbol: '📊' },
  { name: 'Sentry & Telemetry', category: 'backend-cloud', role: 'Zero-Crash APM & Observability', iconSymbol: '🛡️' },
];

// The 6 Core Mobile App Development Services
const SIX_SERVICES = [
  {
    id: 1,
    title: 'Cross-Platform App Development',
    techTag: 'React Native / Flutter',
    desc: 'Build high-performance, single-codebase applications that deliver 99% native fidelity on both iOS and Android, cutting development timelines and costs by up to 40%.',
    features: [
      'Near-zero latency 60 FPS animations with Impeller/Hermes',
      'Shared business logic with native platform hooks',
      'Single QA pipeline for rapid feature iterations',
      'Cost-efficient maintenance and simultaneous store updates',
    ],
    iconSymbol: '📱',
  },
  {
    id: 2,
    title: 'Native iOS App Development',
    techTag: 'Swift 6 & SwiftUI',
    desc: 'Bespoke iOS applications engineered specifically for the Apple ecosystem. Harness hardware acceleration, Metal graphics, FaceID biometric authentication, and WidgetKit.',
    features: [
      'Strict adherence to Apple Human Interface Guidelines',
      'Dynamic Island, Live Activities & WidgetKit integration',
      'Apple Pay 1-tap checkout & secure Keychain storage',
      'Flawless backward compatibility across iOS versions',
    ],
    iconSymbol: '🍎',
  },
  {
    id: 3,
    title: 'Native Android App Development',
    techTag: 'Kotlin & Jetpack Compose',
    desc: 'High-speed, scalable Android applications built using modern declarative UI, MVVM/MVI clean architecture, and optimized for hundreds of device form factors.',
    features: [
      'Jetpack Compose reactive UI with Material 3 styling',
      'Google Play In-App Billing, Passkey & BiometricPrompt',
      'Background workers & battery-optimized wake locks',
      'Targeted APK size minimization & ProGuard code obfuscation',
    ],
    iconSymbol: '🤖',
  },
  {
    id: 4,
    title: 'Mobile Commerce & D2C Store Apps',
    techTag: 'mCommerce & Instant Checkout',
    desc: 'Turn your e-commerce store into a pocket powerhouse. Engage shoppers with rich push notifications, lightning-fast 1-click checkout, and automated abandoned cart recovery.',
    features: [
      'Instant UPI, Credit Card, Apple Pay & Google Pay checkout',
      'High-converting segmented push notification engine',
      'Real-time inventory synchronization with Shopify / custom ERP',
      'Offline product catalog caching for zero-loading UX',
    ],
    iconSymbol: '🛍️',
  },
  {
    id: 5,
    title: 'Mobile Backend, Cloud APIs & Real-Time Sync',
    techTag: 'Node.js / Firebase / WebSockets',
    desc: 'Power your mobile apps with resilient cloud infrastructure, real-time bidirectional messaging, live GPS tracking, and bank-grade OAuth2/JWT token encryption.',
    features: [
      'Sub-50ms API response time via regional edge endpoints',
      'Live WebSockets for chat, driver dispatch & real-time telemetry',
      'Scalable MongoDB / PostgreSQL / Redis caching layer',
      'Role-based access control with rate limiting & DDoS defense',
    ],
    iconSymbol: '⚡',
  },
  {
    id: 6,
    title: 'App Store Publishing, SLA & Maintenance',
    techTag: '100% Approval Guarantee',
    desc: 'We navigate the rigorous Apple App Store and Google Play Store review processes end-to-end, guaranteeing 100% compliance, followed by proactive 24/7 SLA maintenance.',
    features: [
      'End-to-end App Store & Google Play submission and metadata SEO',
      'Annual iOS & Android major OS update compatibility',
      'Real-time crash monitoring and rapid emergency hotfixes',
      'Continuous performance tuning, SDK patches and feature updates',
    ],
    iconSymbol: '🛡️',
  },
];

// Interactive Smartphone Previewer Industries
type IndustryKey = 'ecommerce' | 'ondemand' | 'fintech' | 'saas';

interface IndustryData {
  title: string;
  badge: string;
  description: string;
  modules: string[];
  phoneTitle: string;
  stat1Label: string;
  stat1Val: string;
  stat2Label: string;
  stat2Val: string;
  buttonText: string;
}

const INDUSTRY_PREVIEWS: Record<IndustryKey, IndustryData> = {
  ecommerce: {
    title: 'Next-Gen Mobile Commerce & D2C',
    badge: 'D2C Retail & Shopping',
    description: 'Provide your customers with a frictionless mobile storefront featuring instant 1-tap checkout, interactive product cards, and flash-sale push campaigns that convert.',
    modules: [
      '1-Tap UPI / Apple Pay Gateway',
      'Live Order GPS Tracking',
      'Personalized Push Flash Alerts',
      'Instant In-App Search & Filters',
    ],
    phoneTitle: 'Flash Store Mobile App',
    stat1Label: 'Checkout Speed',
    stat1Val: '1.4s Avg',
    stat2Label: 'Conversion Boost',
    stat2Val: '+42%',
    buttonText: 'Order Placed • Track Live',
  },
  ondemand: {
    title: 'Hyperlocal & On-Demand Booking Apps',
    badge: 'On-Demand & Logistics',
    description: 'Empower users with live geolocation mapping, instant driver/service dispatch, bidirectional WebSockets chat, and automated milestone SMS updates.',
    modules: [
      'Live Turn-by-Turn Mapbox Routing',
      'In-App Audio & Text Messaging',
      'Automated Dynamic Fare Calculator',
      'Multi-Vendor Partner Dashboard',
    ],
    phoneTitle: 'Hyperlocal Courier & Rides',
    stat1Label: 'Dispatch Latency',
    stat1Val: '< 800ms',
    stat2Label: 'GPS Accuracy',
    stat2Val: 'Sub-3m High-Res',
    buttonText: 'Driver Arriving in 3 Mins',
  },
  fintech: {
    title: 'Secure Fintech & Digital Wallet Apps',
    badge: 'Fintech & Digital Banking',
    description: 'Bank-grade security combined with fluid consumer UX. Incorporate encrypted ledger balances, instant peer-to-peer UPI transfers, and biometric FaceID authorizations.',
    modules: [
      'Hardware Enclave FaceID / Fingerprint',
      'End-to-End Encrypted UPI / Cards',
      'Instant Ledger & Statement Export',
      'Automated Fraud & Anomaly Alerts',
    ],
    phoneTitle: 'NeoBank Mobile Wallet',
    stat1Label: 'Security Standard',
    stat1Val: 'AES-256 / PCI-DSS',
    stat2Label: 'Transaction Speed',
    stat2Val: '0.9s Instant',
    buttonText: '₹4,500 Sent Successfully',
  },
  saas: {
    title: 'Health, Fitness & Habit Tracking Apps',
    badge: 'Health & Subscription SaaS',
    description: 'Keep subscribers captivated with gamified streak rewards, local offline caching, Apple HealthKit / Google Fit integrations, and recurring in-app subscriptions.',
    modules: [
      'Offline-First Local Data Sync',
      'Apple HealthKit & Google Fit API',
      'Streak Badges & Social Challenges',
      'StoreKit 2 Auto-Renew Subscriptions',
    ],
    phoneTitle: 'PulseFit Daily Tracker',
    stat1Label: 'Day-30 Retention',
    stat1Val: '84.6%',
    stat2Label: 'Frame Rate',
    stat2Val: '60 FPS Ultra-Smooth',
    buttonText: '10,420 Steps • Daily Goal Met',
  },
};

// Interactive Estimator Configurations
const PLATFORM_OPTIONS = [
  { id: 'cross', label: 'Cross-Platform (iOS + Android)', weeks: 5, price: '₹45,000 – ₹85,000 ($1,800 – $3,200)', stack: 'React Native / Flutter' },
  { id: 'ios', label: 'Native iOS Only (Swift)', weeks: 4, price: '₹40,000 – ₹75,000 ($1,500 – $2,800)', stack: 'Swift 6 & SwiftUI' },
  { id: 'android', label: 'Native Android Only (Kotlin)', weeks: 4, price: '₹38,000 – ₹72,000 ($1,400 – $2,700)', stack: 'Kotlin & Jetpack Compose' },
  { id: 'ecosystem', label: 'Complete Ecosystem (iOS + Android + Web)', weeks: 8, price: '₹75,000 – ₹1,50,000 ($3,000 – $6,000)', stack: 'React Native + Next.js + Node' },
];

const COMPLEXITY_OPTIONS = [
  { id: 'mvp', label: 'MVP Sprint Launch (Core Features)', weekMod: 0, priceMod: 0 },
  { id: 'growth', label: 'Scalable Growth Product (Advanced Logic)', weekMod: 2, priceMod: 25000 },
  { id: 'enterprise', label: 'Enterprise Concurrency (High-Volume)', weekMod: 4, priceMod: 50000 },
];

const MODULE_OPTIONS = [
  { id: 'push', label: 'Push Notifications & FCM', weeks: 0.5 },
  { id: 'payment', label: 'Payment Gateway & In-App Purchases', weeks: 1 },
  { id: 'gps', label: 'Real-Time GPS & Geofencing', weeks: 1.5 },
  { id: 'ai', label: 'On-Device AI / Smart Recommendation', weeks: 2 },
];

// 6-Stage Engineering Process Lifecycle
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Product Discovery & Wireframing',
    desc: 'We map out your product vision, user journey diagrams, core feature backlog, and create interactive Figma prototypes tailored for mobile interaction paradigms.',
  },
  {
    step: '02',
    title: 'Design System & Micro-Interactions',
    desc: 'Crafting fluid, human-centric UI following Apple Human Interface Guidelines and Google Material 3 standards, complete with haptic feedback and smooth micro-animations.',
  },
  {
    step: '03',
    title: 'Agile Native & Hybrid Architecture',
    desc: 'Sprint-based engineering utilizing clean MVVM/MVI architecture, offline-first SQLite synchronization, and encrypted REST/GraphQL mobile API communication.',
  },
  {
    step: '04',
    title: 'Device Farm QA & Stress Testing',
    desc: 'Automated and manual testing across 50+ real physical iPhones, iPads, and Android handsets to verify memory usage, battery drain, and zero-crash stability.',
  },
  {
    step: '05',
    title: 'App Store & Google Play Publishing',
    desc: 'We manage full compliance, privacy disclosure manifests, App Store Optimization (ASO) metadata, screenshots, and guarantee 100% approval without delays.',
  },
  {
    step: '06',
    title: 'Post-Launch Telemetry & SLA Evolution',
    desc: 'Real-time Crashlytics monitoring, annual major iOS & Android OS upgrades, feature enhancements, and continuous sub-hour emergency response coverage.',
  },
];

// Head-to-Head Benchmark Matrix
const BENCHMARK_ROWS = [
  {
    feature: 'App Store & Play Store Approval Guarantee',
    vastora: '100% Guaranteed with full compliance handling',
    legacy: 'Frequent rejections & slow back-and-forth',
    freelance: 'Unpredictable, client handles rejections',
  },
  {
    feature: 'Render Smoothness & Animation Fidelity',
    vastora: 'Rock-solid 60 FPS Native Performance',
    legacy: 'Laggy hybrid web-views or janky frame drops',
    freelance: 'Basic UI without performance profiling',
  },
  {
    feature: 'Offline-First Data Synchronization',
    vastora: 'Built-in local cache (SQLite / WatermelonDB)',
    legacy: 'App crashes or freezes on poor connectivity',
    freelance: 'Rarely implemented, online-only APIs',
  },
  {
    feature: 'Code Architecture & Scalability',
    vastora: 'Clean Architecture (MVVM / Modular Repositories)',
    legacy: 'Tightly coupled monolithic spaghetti code',
    freelance: 'Ad-hoc scripting, hard to hand over',
  },
  {
    feature: 'Source Code Ownership & IP Protection',
    vastora: '100% Full IP Transfer to Client on Day 1',
    legacy: 'Restricted access or recurring licensing fees',
    freelance: 'Risk of abandoned code & missing keys',
  },
  {
    feature: 'Post-Launch SLA & OS Upgrade Support',
    vastora: 'Active 24/7 Monitoring & Annual OS upgrades',
    legacy: 'High hourly retainers or slow turnaround',
    freelance: 'Ghosting after delivery',
  },
];

// FAQ Data
const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Which is the best mobile app development company in Noida?',
    answer:
      'Vastora Tech is recognized as a premier mobile app development company in Noida. We engineer high-performance Android and iOS applications with guaranteed 60 FPS native smoothness, offline-first architectures, bank-grade encryption, and a 100% App Store and Google Play approval guarantee.',
  },
  {
    id: 'faq-2',
    question: 'Do you offer both web and mobile app development services?',
    answer:
      'Yes, absolutely! We are a full-spectrum digital engineering agency. We frequently build unified digital ecosystems where your mobile app (iOS & Android) shares backend APIs, database models, and authentication logic with a high-performance Next.js or React web application and admin dashboard.',
  },
  {
    id: 'faq-3',
    question: 'Do you provide native iOS app development services?',
    answer:
      'Yes! Our iOS engineering specialists build native applications using Swift 6 and SwiftUI, fully harnessing Apple hardware capabilities including FaceID, Metal GPU rendering, Apple Pay, WidgetKit, Dynamic Island, and Live Activities.',
  },
  {
    id: 'faq-4',
    question: 'What makes Vastora Tech a reliable mobile app development agency?',
    answer:
      'We combine rigorous engineering standards (Clean Architecture, MVVM/MVI, zero-leak memory profiling) with transparent sprint milestones. Clients receive complete source code ownership, regular test builds via TestFlight/Firebase App Distribution, and guaranteed App Store approval support.',
  },
  {
    id: 'faq-5',
    question: 'How much does mobile app development cost in Noida?',
    answer:
      'Mobile app development costs vary based on target platforms, feature complexity, and integrations. A fast-track MVP typically starts from ₹45,000 – ₹75,000 ($1,500 – $2,800), while comprehensive custom mobile ecosystems with real-time GPS, backend dashboards, and custom APIs range upwards. We provide fixed-price sprint quotes with zero hidden charges.',
  },
  {
    id: 'faq-6',
    question: 'How long does it take to develop a mobile application?',
    answer:
      'A focused MVP or startup mobile app takes approximately 4 to 6 weeks. Feature-rich products with custom payment gateways, live geolocation tracking, or multi-role dashboards typically take 6 to 10 weeks from initial Figma wireframing to App Store release.',
  },
  {
    id: 'faq-7',
    question: 'Do you assist with publishing apps to Google Play and Apple App Store?',
    answer:
      'Yes, end-to-end publishing is fully included in our service. We set up app store developer accounts, configure privacy manifests, create App Store Optimization (ASO) screenshots, handle review questions, and guarantee smooth approvals.',
  },
  {
    id: 'faq-8',
    question: 'Can I hire dedicated mobile app developers near me in Noida / Delhi NCR?',
    answer:
      'Yes! You can hire dedicated mobile developers from Vastora Tech on flexible sprint-based or monthly retainer models. Our office is based in Noida, serving businesses across Delhi NCR, pan-India, and global clients in the US, UK, and Middle East.',
  },
];

const MobileAppDevelopment: React.FC = () => {
  // Tech stack tab state
  const [activeStackTab, setActiveStackTab] = useState<StackCategory>('all');

  // Phone previewer industry tab state
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryKey>('ecommerce');

  // Estimator state
  const [selectedPlatform, setSelectedPlatform] = useState<string>('cross');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('mvp');
  const [selectedModules, setSelectedModules] = useState<string[]>(['push', 'payment']);

  // FAQ state
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');

  // Filtered tech items
  const filteredTech =
    activeStackTab === 'all'
      ? TECH_ITEMS
      : TECH_ITEMS.filter((t) => t.category === activeStackTab);

  // Estimator calculation
  const platformData = PLATFORM_OPTIONS.find((p) => p.id === selectedPlatform) || PLATFORM_OPTIONS[0];
  const complexityData = COMPLEXITY_OPTIONS.find((c) => c.id === selectedComplexity) || COMPLEXITY_OPTIONS[0];

  const modulesWeekAddition = selectedModules.reduce((acc, modId) => {
    const found = MODULE_OPTIONS.find((m) => m.id === modId);
    return acc + (found ? found.weeks : 0);
  }, 0);

  const totalEstimatedWeeks = platformData.weeks + complexityData.weekMod + Math.ceil(modulesWeekAddition);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const currentPreview = INDUSTRY_PREVIEWS[selectedIndustry];

  return (
    <>
      <HeaderFive />
      <main className="mobile-app-redesign-wrapper">
        {/* ========================================================
            1. HERO SECTION WITH INTEGRATED BREADCRUMB PILL
            ======================================================== */}
        <section className="mobile-app-hero-section">
          <div className="container">
            <div className="mobile-app-hero-header">
              {/* Integrated Breadcrumb Pill Badge */}
              <div>
                <div className="vt-breadcrumb-pill">
                  <Link href="/" className="pill-home-link">
                    Home
                  </Link>
                  <span className="pill-dot-sep">·</span>
                  <span className="pill-current-label">Mobile App Development Services</span>
                </div>
              </div>

              {/* Eyebrow Badge */}
              <div>
                <div className="mobile-app-eyebrow-badge">
                  <span className="badge-dot"></span>
                  <span className="badge-text">TOP MOBILE APP DEVELOPMENT COMPANY IN NOIDA</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="mobile-app-main-title">
                Next-Gen Native & Cross-Platform <br />
                <span className="highlight-blue">Mobile Apps Engineered for Scale</span>
              </h1>

              {/* Subtitle */}
              <p className="mobile-app-main-subtitle">
                From fast-track startup MVPs to enterprise apps with millions of downloads. Vastora Tech delivers
                high-performance iOS and Android applications with 60 FPS buttery smoothness, offline-first reliability,
                and a 100% App Store approval guarantee.
              </p>

              {/* Trust & Speed Strip */}
              <div className="mobile-app-trust-strip">
                <span className="trust-strip-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  60 FPS Native Performance
                </span>
                <span className="trust-strip-item highlight-emerald">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  100% App Store & Play Store Approval
                </span>
                <span className="trust-strip-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                  Bank-Grade AES-256 Security
                </span>
                <span className="trust-strip-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                  Offline-First Architecture
                </span>
              </div>
            </div>

            {/* Interactive Tech Stack Matrix */}
            <div className="mobile-app-stack-card">
              <div className="stack-card-top">
                <div className="stack-title-box">
                  <div className="stack-icon-badge">⚡</div>
                  <div>
                    <h3>Engineered on Modern Mobile Frameworks</h3>
                    <p>Clean architecture, zero-bloat SDKs & sub-second render pipelines</p>
                  </div>
                </div>

                <div className="stack-tabs-nav">
                  <button
                    className={`stack-tab-btn ${activeStackTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('all')}
                  >
                    All Frameworks
                  </button>
                  <button
                    className={`stack-tab-btn ${activeStackTab === 'cross-platform' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('cross-platform')}
                  >
                    Cross-Platform
                  </button>
                  <button
                    className={`stack-tab-btn ${activeStackTab === 'native' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('native')}
                  >
                    Native iOS / Android
                  </button>
                  <button
                    className={`stack-tab-btn ${activeStackTab === 'backend-cloud' ? 'active' : ''}`}
                    onClick={() => setActiveStackTab('backend-cloud')}
                  >
                    Backend & Cloud APIs
                  </button>
                </div>
              </div>

              <div className="stack-chips-grid">
                {filteredTech.map((item, idx) => (
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
            2. THE 6 CORE MOBILE APP SERVICES (BENTO GRID)
            ======================================================== */}
        <section className="mobile-app-services-section">
          <div className="container">
            <div className="section-header-wrap">
              <span className="section-eyebrow">Comprehensive Capabilities</span>
              <h2 className="section-heading">Our 6 Core Mobile Development Services</h2>
              <p className="section-subtext">
                Every screen, tap, gesture, and background task is meticulously engineered to drive retention, user
                delight, and revenue growth.
              </p>
            </div>

            <div className="services-bento-grid">
              {SIX_SERVICES.map((srv) => (
                <div key={srv.id} className="service-bento-card">
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
                      <span>Build This App</span>
                      <span className="arrow-icon">→</span>
                    </Link>
                    <span className="service-tech-tag">{srv.techTag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. INTERACTIVE SMARTPHONE FEATURE & SIMULATION EXPLORER
            ======================================================== */}
        <section className="mobile-app-feature-previewer">
          <div className="container">
            <div className="previewer-card-container">
              <div className="previewer-header">
                <span className="previewer-eyebrow">Interactive Simulation</span>
                <h3>Explore Real-World App Architecture</h3>
                <p>Select an industry vertical below to preview how our apps behave in the hands of real users.</p>
              </div>

              <div className="previewer-layout">
                {/* Left: Industry Switcher & Highlights */}
                <div className="previewer-selector-side">
                  <div className="industry-tabs-row">
                    {(Object.keys(INDUSTRY_PREVIEWS) as IndustryKey[]).map((key) => (
                      <button
                        key={key}
                        className={`industry-tab-btn ${selectedIndustry === key ? 'active' : ''}`}
                        onClick={() => setSelectedIndustry(key)}
                      >
                        {INDUSTRY_PREVIEWS[key].badge}
                      </button>
                    ))}
                  </div>

                  <div className="previewer-details-card">
                    <h4>{currentPreview.title}</h4>
                    <p>{currentPreview.description}</p>

                    <div className="key-modules-grid">
                      {currentPreview.modules.map((mod, i) => (
                        <div key={i} className="module-item">
                          <span className="dot"></span>
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Smartphone Visual Mockup Card */}
                <div className="previewer-phone-card">
                  <div>
                    <div className="phone-top-bar">
                      <span className="brand-badge">Vastora OS • Live Demo</span>
                      <span className="fps-indicator">● 60 FPS Locked</span>
                    </div>

                    <div className="phone-sim-content">
                      <h4>{currentPreview.phoneTitle}</h4>

                      <div className="phone-stat-row">
                        <div className="phone-stat-box">
                          <div className="stat-lbl">{currentPreview.stat1Label}</div>
                          <div className="stat-num">{currentPreview.stat1Val}</div>
                        </div>
                        <div className="phone-stat-box">
                          <div className="stat-lbl">{currentPreview.stat2Label}</div>
                          <div className="stat-num">{currentPreview.stat2Val}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="phone-cta-btn">
                    <span>{currentPreview.buttonText}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. INTERACTIVE ESTIMATOR & TIMELINE CALCULATOR
            ======================================================== */}
        <section className="mobile-app-estimator-section">
          <div className="container">
            <div className="estimator-card-wrapper">
              <div className="estimator-header">
                <span className="estimator-eyebrow">Sprint Estimator</span>
                <h3>Calculate Your App Timeline & Investment</h3>
                <p>Customize your target platform and core modules for an instant engineering forecast.</p>
              </div>

              <div className="estimator-grid">
                {/* Left Controls */}
                <div className="estimator-controls">
                  {/* Platform selection */}
                  <div className="control-group">
                    <label className="control-label">Step 1: Choose Target Platforms</label>
                    <div className="pill-options-wrap">
                      {PLATFORM_OPTIONS.map((p) => (
                        <button
                          key={p.id}
                          className={`estimator-option-btn ${selectedPlatform === p.id ? 'active' : ''}`}
                          onClick={() => setSelectedPlatform(p.id)}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity */}
                  <div className="control-group">
                    <label className="control-label">Step 2: Architecture Scope</label>
                    <div className="pill-options-wrap">
                      {COMPLEXITY_OPTIONS.map((c) => (
                        <button
                          key={c.id}
                          className={`estimator-option-btn ${selectedComplexity === c.id ? 'active' : ''}`}
                          onClick={() => setSelectedComplexity(c.id)}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add-on Modules */}
                  <div className="control-group">
                    <label className="control-label">Step 3: Select Advanced Modules</label>
                    <div className="pill-options-wrap">
                      {MODULE_OPTIONS.map((m) => {
                        const isChecked = selectedModules.includes(m.id);
                        return (
                          <button
                            key={m.id}
                            className={`estimator-option-btn ${isChecked ? 'active' : ''}`}
                            onClick={() => toggleModule(m.id)}
                          >
                            {isChecked ? '✓ ' : '+ '}
                            {m.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Summary Card */}
                <div className="estimator-summary-card">
                  <span className="summary-badge">Live Engineering Forecast</span>
                  <div className="summary-title">{platformData.label}</div>

                  <div className="summary-metrics-row">
                    <div className="metric-box">
                      <div className="metric-label">Estimated Delivery</div>
                      <div className="metric-val">{totalEstimatedWeeks} Weeks</div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-label">Price Bracket</div>
                      <div className="metric-val">{platformData.price}</div>
                    </div>
                  </div>

                  <div className="summary-stack-rec">
                    <strong>Recommended Architecture:</strong> {platformData.stack} with modular REST/GraphQL backend
                    and offline SQLite sync.
                  </div>

                  <Link
                    href={`/contact?service=Mobile%20App%20Development&platform=${selectedPlatform}&weeks=${totalEstimatedWeeks}`}
                    className="estimator-cta-btn"
                  >
                    <span>Lock In Your Sprint & Get Quote</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. 6-STAGE MOBILE LIFECYCLE TIMELINE
            ======================================================== */}
        <section className="mobile-app-process-section">
          <div className="container">
            <div className="section-header-wrap">
              <span className="section-eyebrow">Engineering Methodology</span>
              <h2 className="section-heading">Our 6-Stage Mobile App Lifecycle</h2>
              <p className="section-subtext">
                From initial Figma wireframing to live App Store telemetry, our battle-tested agile sprints ensure zero
                surprises and on-time launches.
              </p>
            </div>

            <div className="process-steps-grid">
              {PROCESS_STAGES.map((stg) => (
                <div key={stg.step} className="process-step-card">
                  <div className="step-num-badge">{stg.step}</div>
                  <h3 className="step-title">{stg.title}</h3>
                  <p className="step-desc">{stg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            6. BENCHMARK COMPARISON MATRIX
            ======================================================== */}
        <section className="mobile-app-benchmark-section">
          <div className="container">
            <div className="section-header-wrap">
              <span className="section-eyebrow">Why Vastora Tech</span>
              <h2 className="section-heading">How We Compare Against The Industry</h2>
              <p className="section-subtext">
                We don’t just write code; we take complete responsibility for performance, security, and store approval.
              </p>
            </div>

            <div className="benchmark-table-card">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: '34%' }}>Feature / Delivery Standard</th>
                      <th className="highlight-col" style={{ width: '28%' }}>
                        Vastora Tech (Our Standard)
                      </th>
                      <th style={{ width: '20%' }}>Traditional Agencies</th>
                      <th style={{ width: '18%' }}>Freelance Coders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENCHMARK_ROWS.map((row, rIdx) => (
                      <tr key={rIdx}>
                        <td className="feature-name">{row.feature}</td>
                        <td className="highlight-col">✓ {row.vastora}</td>
                        <td className="legacy-col">{row.legacy}</td>
                        <td className="legacy-col">{row.freelance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. INTERACTIVE FAQ ACCORDION
            ======================================================== */}
        <section className="mobile-app-faq-section">
          <div className="container">
            <div className="faq-header-wrap">
              <span className="faq-eyebrow">Frequently Asked Questions</span>
              <h2 className="faq-title">Mobile App Development FAQs</h2>
              <p className="faq-subtitle">
                Clear answers to common questions about timelines, technology choices, app store approvals, and pricing.
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
        <section className="mobile-app-cta-section">
          <div className="container">
            <div className="mobile-app-cta-box">
              <span className="cta-eyebrow">Ready To Dominate The App Store?</span>
              <h2 className="cta-title">Turn Your Vision Into a Top-Ranked Mobile App</h2>
              <p className="cta-desc">
                Partner with Noida’s leading mobile development team. Get a transparent architecture consultation,
                sprint timeline breakdown, and milestone quote within 24 hours.
              </p>
              <div className="cta-buttons-wrap">
                <Link
                  href="/contact?service=Mobile%20App%20Development"
                  className="btn-primary-white"
                >
                  Start Your Mobile App Project →
                </Link>
                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%2C%20I%20want%20to%20discuss%20a%20Mobile%20App%20Development%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-whatsapp"
                >
                  <span>💬</span>
                  <span>Instant WhatsApp Discussion</span>
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

export default MobileAppDevelopment;