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

// Platform Ecosystem Categories
type PlatformCategory = 'all' | 'organic' | 'paid' | 'creator';

interface PlatformItem {
  name: string;
  category: 'organic' | 'paid' | 'creator';
  role: string;
  iconSymbol: string;
}

const PLATFORM_ITEMS: PlatformItem[] = [
  { name: 'Instagram & Threads', category: 'organic', role: 'Reels, Carousels & Broadcasts', iconSymbol: '📸' },
  { name: 'LinkedIn B2B', category: 'organic', role: 'Founder Branding & Inbound Leads', iconSymbol: '💼' },
  { name: 'Meta Ads Manager', category: 'paid', role: 'Full-Funnel ROAS Scaling & CAPI', iconSymbol: '🎯' },
  { name: 'YouTube & Shorts', category: 'organic', role: 'Long-Form Authority & Shorts Virality', iconSymbol: '▶️' },
  { name: 'X / Twitter', category: 'organic', role: 'Viral Newsjacking & Tech Threads', iconSymbol: '𝕏' },
  { name: 'Influencer PR & Collabs', category: 'creator', role: 'Vetted Micro & Macro Creator Roster', iconSymbol: '⭐' },
  { name: 'TikTok & Global Reels', category: 'organic', role: 'High-Retention Algorithmic Hooks', iconSymbol: '🎵' },
  { name: 'LinkedIn Paid Ads', category: 'paid', role: 'Account-Based B2B Lead Gen & InMail', iconSymbol: '🚀' },
  { name: 'Short-Form Video Studio', category: 'creator', role: '4K Shooting, Scripting & Kinetic Edits', iconSymbol: '🎬' },
  { name: 'Triple Whale & Attribution', category: 'paid', role: 'First-Party Server-Side Ad Tracking', iconSymbol: '📊' },
  { name: 'Pinterest Visual Shopping', category: 'organic', role: 'D2C Product Discovery & Rich Pins', iconSymbol: '📌' },
  { name: '24/7 Community AI & DMs', category: 'creator', role: 'Sub-5 Min Lead Capture & Comment Moderation', iconSymbol: '💬' },
];

// The 6 Core Social Media Marketing Services
const SIX_SERVICES = [
  {
    id: 1,
    title: 'Viral Short-Form Reels & Video Production',
    channelTag: 'Instagram Reels & Shorts',
    desc: 'Scroll-stopping video content engineered for algorithmic retention. We handle trend research, storytelling scripts, 4K filming direction, dynamic kinetic subtitles, and audio sound-jacking.',
    features: [
      '3-Second psychological hook optimization',
      'High-velocity 4K video editing with motion graphics',
      'Trending audio & soundscape curation',
      'Multi-platform reformatting (Reels, Shorts, TikTok)',
    ],
    iconSymbol: '🎬',
  },
  {
    id: 2,
    title: 'High-ROAS Paid Social Advertising',
    channelTag: 'Meta & LinkedIn PPC',
    desc: 'Transform ad spend into scalable revenue. We construct precision conversion funnels with custom lookalike audiences, creative fatigue rotation, Meta CAPI tracking, and relentless ROAS optimization.',
    features: [
      'Targeted B2B & D2C buyer persona segmentation',
      'A/B testing across hooks, copy & video creative',
      'Server-side Conversion API (CAPI) & Pixel setup',
      'Full-funnel retargeting & cart recovery ads',
    ],
    iconSymbol: '🎯',
  },
  {
    id: 3,
    title: 'Brand Aesthetic & Visual Storytelling',
    channelTag: 'Feed Design & Carousels',
    desc: 'Establish unmistakable industry authority. We build cohesive visual brand identities, bespoke 2D/3D swipe-through carousels, typographic guidelines, and compelling brand narratives.',
    features: [
      'Custom grid layout & editorial moodboards',
      'High-save educational swipeable carousels',
      'Interactive Instagram Story templates & stickers',
      'Consistent brand colors, typography & tone of voice',
    ],
    iconSymbol: '🎨',
  },
  {
    id: 4,
    title: 'B2B Thought Leadership & Founder Branding',
    channelTag: 'LinkedIn Personal Branding',
    desc: 'Position your executives as respected industry voices. We craft high-impact LinkedIn content, thought pieces, industry breakdowns, and organic pipelines that attract high-ticket B2B clients.',
    features: [
      'Executive ghostwriting & personal brand positioning',
      'Engaging breakdown threads & contrarian insights',
      'Strategic networking & B2B inbound funnel setup',
      'Company page growth & employer branding',
    ],
    iconSymbol: '💼',
  },
  {
    id: 5,
    title: 'Influencer Marketing & Creator Alliances',
    channelTag: 'Creator Partnerships',
    desc: 'Leverage trusted creator voices to amplify your reach. We manage influencer identification, contract agreements, barter and paid gifting campaigns, and trackable affiliate voucher links.',
    features: [
      'Data-vetted creators with real engagement (Zero bots)',
      'Creative briefing & compliance quality control',
      'Paid whitelisting & creator ad amplification',
      'Trackable coupon links with measurable ROI reports',
    ],
    iconSymbol: '⭐',
  },
  {
    id: 6,
    title: '24/7 Community Growth & Social Listening',
    channelTag: 'Active Engagement',
    desc: 'Turn passive lurkers into loyal brand advocates. We conduct active community management, rapid DM response workflows, brand sentiment monitoring, and trending conversation newsjacking.',
    features: [
      'Sub-15 minute response SLA on comments and DMs',
      'Proactive engagement with industry leaders & followers',
      'Brand reputation monitoring & sentiment analysis',
      'Automated DM conversation funnels & lead captures',
    ],
    iconSymbol: '💬',
  },
];

// Interactive Campaign Simulator Goals
type CampaignGoalKey = 'd2c' | 'b2b' | 'viral' | 'local';

interface CampaignGoalData {
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  mockupTitle: string;
  stat1Label: string;
  stat1Val: string;
  stat2Label: string;
  stat2Val: string;
  buttonText: string;
}

const CAMPAIGN_GOALS: Record<CampaignGoalKey, CampaignGoalData> = {
  d2c: {
    title: 'D2C & E-Commerce Revenue Scaling',
    badge: 'E-Commerce / D2C',
    description: 'Engineered for online brands looking to scale store sales, maximize Average Order Value (AOV), and achieve a predictable 4x+ Return on Ad Spend (ROAS).',
    deliverables: [
      'Meta Dynamic Catalog Ads & Retargeting',
      'High-Conversion UGC Product Reels',
      'Abandoned Cart Social DM Workflows',
      'Shopify / WooCommerce Direct Tagging',
    ],
    mockupTitle: 'E-Commerce Flash Funnel',
    stat1Label: 'Average ROAS',
    stat1Val: '4.9x Verified',
    stat2Label: 'Monthly Purchases',
    stat2Val: '2,840+ Orders',
    buttonText: 'Scale Your D2C Revenue →',
  },
  b2b: {
    title: 'B2B High-Ticket Inbound Client Engine',
    badge: 'B2B / SaaS / Agency',
    description: 'Transform LinkedIn and Meta into a reliable source of qualified enterprise sales leads, executive meetings, and founder authority.',
    deliverables: [
      'Founder Authority Ghostwritten Posts',
      'LinkedIn Lead Gen Form Ad Campaigns',
      'Industry Whitepaper & Carousel Funnels',
      'Direct Decision-Maker Inbound DMs',
    ],
    mockupTitle: 'B2B Enterprise Lead Flow',
    stat1Label: 'Cost Per Lead (CPL)',
    stat1Val: '42% Lower',
    stat2Label: 'Qualified Meetings',
    stat2Val: '35+ Monthly',
    buttonText: 'Book B2B Strategy Session →',
  },
  viral: {
    title: 'Viral Explosive Organic Reach & Followers',
    badge: 'Creator / Lifestyle / Media',
    description: 'Designed for brands seeking mass cultural presence, millions of non-paid reel views, and rapid follower accumulation across Instagram, YouTube, and X.',
    deliverables: [
      'Daily Short-Form Reels with Trending Audio',
      'Memetic Visuals & Culture Newsjacking',
      'Collaborative Reels with Niche Creators',
      'Interactive Broadcast Channel Community',
    ],
    mockupTitle: 'Algorithmic Virality Engine',
    stat1Label: 'Organic Reel Views',
    stat1Val: '3.4M+ Monthly',
    stat2Label: 'Follower Velocity',
    stat2Val: '+18.5k / mo',
    buttonText: 'Ignite Organic Virality →',
  },
  local: {
    title: 'Local Store Footfall & Walk-In Traffic',
    badge: 'Retail / Clinic / Hospitality',
    description: 'Hyper-localized social campaigns targeting high-intent customers within a 5–15 km radius of your physical stores, clinics, or dining outlets.',
    deliverables: [
      'Geo-Fenced Instagram & Meta Ad Radius',
      'Local Influencer Tasting & Visits',
      'Google Maps & Social Location Tagging',
      'Direct WhatsApp Booking Campaigns',
    ],
    mockupTitle: 'Hyperlocal Walk-In Campaign',
    stat1Label: 'Store Footfall Lift',
    stat1Val: '+64% In-Store',
    stat2Label: 'WhatsApp Inquiries',
    stat2Val: '450+ Monthly',
    buttonText: 'Drive Local Store Customers →',
  },
};

// Estimator Configurations
const STAGE_OPTIONS = [
  { id: 'startup', label: 'Startup / Local Brand', basePrice: '₹25,000 – ₹45,000 ($900 – $1,600)/mo', reach: '50K – 150K', strategy: 'Founder Voice + Fast-Track Reels' },
  { id: 'growth', label: 'Fast-Growing D2C Brand', basePrice: '₹45,000 – ₹85,000 ($1,600 – $3,000)/mo', reach: '250K – 750K', strategy: 'Paid Social Funnels + High-Frequency UGC' },
  { id: 'enterprise', label: 'Established Enterprise Brand', basePrice: '₹85,000 – ₹1,60,000 ($3,000 – $5,800)/mo', reach: '1M – 3M+', strategy: 'Omnichannel 360° Dominance + Influencer PR' },
];

const FREQUENCY_OPTIONS = [
  { id: 'essential', label: '12 Posts + 6 Reels / month (Essential)' },
  { id: 'accelerated', label: '20 Posts + 12 Reels / month (Accelerated Growth)' },
  { id: 'hyper', label: 'Daily Content + Meta Ads Scaling (Hyper-Growth)' },
];

const CHANNEL_OPTIONS = [
  { id: 'ig', label: 'Instagram & Reels' },
  { id: 'li', label: 'LinkedIn B2B' },
  { id: 'meta', label: 'Meta Paid Ads (FB/IG)' },
  { id: 'yt', label: 'YouTube Shorts' },
  { id: 'x', label: 'X (Twitter)' },
];

// 6-Stage Process Lifecycle
const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Competitor Audit & Audience Mapping',
    desc: 'We reverse-engineer your competitors’ top-performing posts, uncover demographic content gaps, and map out your ideal customer persona (ICP) psychology.',
  },
  {
    step: '02',
    title: 'Brand Tone, Moodboard & Editorial Calendar',
    desc: 'Establishing distinctive visual aesthetics, typography, color harmony, and a structured 30-day content calendar complete with clear content pillars.',
  },
  {
    step: '03',
    title: 'Studio Production & High-End Reel Editing',
    desc: 'Our creative team writes thumb-stopping hooks, directs 4K shoots, crafts kinetic subtitles, and synchronizes trending soundscapes optimized for viral loops.',
  },
  {
    step: '04',
    title: 'Algorithmic Multi-Platform Scheduling',
    desc: 'Publishing at peak audience engagement windows with keyword-rich captions, targeted hashtags, and strategic collaborative co-author tags.',
  },
  {
    step: '05',
    title: 'Paid Amplification & Conversion Funnels',
    desc: 'Putting targeted ad dollars behind your best organic winners to scale conversions, generate qualified leads, and maximize ROAS with minimum CPA.',
  },
  {
    step: '06',
    title: 'Bi-Weekly Telemetry & Continuous Scaling',
    desc: 'Deep-dive analytical reporting on reach, saves, shares, and conversion revenue, feeding insights into the next sprint for compounding brand growth.',
  },
];

// Head-to-Head Benchmark Rows
const BENCHMARK_ROWS = [
  {
    feature: 'Content Strategy & Hook Engineering',
    vastora: '3-Second psychological hook testing on every post',
    generic: 'Generic quotes & stock-photo posting',
    inhouse: 'Random posting without viral frameworks',
  },
  {
    feature: 'Short-Form Reel & Video Editing',
    vastora: '4K Production with kinetic motion graphics & audio sync',
    generic: 'Basic slideshow templates with template music',
    inhouse: 'Limited in-house editing capabilities',
  },
  {
    feature: 'Paid Ad ROAS Optimization',
    vastora: 'Full-funnel Meta CAPI tracking & 4.5x+ target ROAS',
    generic: 'Basic "Boost Post" button clicks without funnels',
    inhouse: 'Wasted ad budget on unqualified traffic',
  },
  {
    feature: 'Founder & Executive Personal Branding',
    vastora: 'Dedicated B2B ghostwriting & thought leadership',
    generic: 'Infrequent company news announcements',
    inhouse: 'Executives lack time to write consistent posts',
  },
  {
    feature: 'Vetted Creator & Influencer Roster',
    vastora: 'Pre-screened creators with authentic engagement',
    generic: 'Random cold DMs to low-quality accounts',
    inhouse: 'Expensive agency commissions & legal delays',
  },
  {
    feature: 'Transparent Reporting & Revenue Attribution',
    vastora: 'Live real-time dashboards & bi-weekly strategy calls',
    generic: 'Vague PDF vanity metrics at the end of the month',
    inhouse: 'Subjective feedback without clear attribution',
  },
];

// FAQ Items
const FAQ_ITEMS = [
  {
    id: 'smm-faq-1',
    question: 'What are social media marketing services in Noida?',
    answer:
      'Social media marketing services in Noida from Vastora Tech encompass full-stack brand acceleration: custom visual design, 4K viral short-form Reels and video production, data-driven paid advertising on Meta and LinkedIn, influencer collaborations, B2B thought leadership, and 24/7 community engagement.',
  },
  {
    id: 'smm-faq-2',
    question: 'How do I choose the best social media marketing agency in Noida?',
    answer:
      'Look for an agency that prioritizes business revenue and qualified leads over empty vanity metrics (like follower counts). Vastora Tech delivers transparent real-time reporting, proven high ROAS on paid social campaigns, and custom content created specifically for your brand rather than recycled templates.',
  },
  {
    id: 'smm-faq-3',
    question: 'Is social media marketing useful for small businesses & startups?',
    answer:
      'Absolutely! Social media is the most cost-effective channel for emerging brands to establish immediate credibility, generate targeted inquiries, and compete with legacy brands. Our fast-track packages are built specifically to deliver rapid ROI for growing startups in Noida and Delhi NCR.',
  },
  {
    id: 'smm-faq-4',
    question: 'What platforms should my business focus on?',
    answer:
      'Platform selection depends on your audience demographics. B2B, SaaS, and professional services achieve highest conversion on LinkedIn and Meta retargeting. D2C, lifestyle, food, fashion, and retail thrive on Instagram Reels, YouTube Shorts, and Meta conversion ads. We create a customized cross-channel roadmap during our initial discovery call.',
  },
  {
    id: 'smm-faq-5',
    question: 'How long does it take to see tangible results from social media marketing?',
    answer:
      'Paid ad funnels (Meta & LinkedIn) begin generating qualified leads and sales within the first 7 to 14 days of launch. For organic brand presence and viral reel reach, measurable engagement surges typically occur within 3 to 6 weeks as the algorithm identifies your core audience.',
  },
  {
    id: 'smm-faq-6',
    question: 'Do you create the video reels and graphics, or do we provide them?',
    answer:
      'We handle complete end-to-end production! Our in-house creative team writes scripts, directs shoots, creates custom graphic carousels, and executes professional 4K kinetic video editing. If you already have raw footage or products, we transform them into high-converting polished assets.',
  },
  {
    id: 'smm-faq-7',
    question: 'What is the difference between organic social media and paid social ads?',
    answer:
      'Organic social media builds brand authority, community trust, and long-term algorithmic loyalty without ad spend. Paid social ads use hyper-targeted budget to place your offer directly in front of purchase-ready buyers, delivering instant leads and measurable ROAS. The most successful brands leverage both simultaneously.',
  },
  {
    id: 'smm-faq-8',
    question: 'Can I hire dedicated social media managers near me in Noida / Delhi NCR?',
    answer:
      'Yes! Vastora Tech is headquartered in Noida, offering local businesses face-to-face creative strategy workshops, on-site video shoots, and dedicated account managers, while also servicing global brands across the US, UK, and Middle East.',
  },
];

const SocialMediaMarketingServices: React.FC = () => {
  const [activePlatformTab, setActivePlatformTab] = useState<PlatformCategory>('all');
  const [activeFaq, setActiveFaq] = useState<string | null>('smm-faq-1');

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

  const filteredPlatforms =
    activePlatformTab === 'all'
      ? PLATFORM_ITEMS
      : PLATFORM_ITEMS.filter((p) => p.category === activePlatformTab);

  return (
    <>
      <HeaderFive />
      <main className="social-media-redesign-wrapper">
        {/* ========================================================
            1. HERO SECTION WITH INTEGRATED BREADCRUMB PILL
            ======================================================== */}
        <section className="social-media-hero-section">
          <div className="container">
            <div className="smm-hero-header">
              {/* Integrated Breadcrumb Pill Badge */}
              <div>
                <div className="vt-breadcrumb-pill">
                  <Link href="/" className="pill-home-link">
                    Home
                  </Link>
                  <span className="pill-dot-sep">·</span>
                  <span className="pill-current-label">Social Media Marketing Services</span>
                </div>
              </div>

              {/* Eyebrow Badge */}
              <div>
                <div className="smm-eyebrow-badge">
                  <span className="badge-dot"></span>
                  <span className="badge-text">#1 SMM & PERFORMANCE GROWTH AGENCY IN NOIDA</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="smm-main-title">
                Transform Your Brand Presence Into a <br />
                <span className="highlight-gradient">Viral, High-Converting Growth Engine</span>
              </h1>

              {/* Subtitle */}
              <p className="smm-main-subtitle">
                We engineer high-impact social media strategies across Instagram, LinkedIn, Meta, YouTube, and X. From
                scroll-stopping 4K reels and aesthetic brand design to hyper-targeted paid ad funnels and vetted creator
                collaborations.
              </p>

              {/* Trust / Metric Strip */}
              <div className="smm-trust-strip">
                <span className="trust-strip-item highlight-rose">
                  <span className="icon-symbol">📈</span>
                  4.8x Average Paid ROAS
                </span>
                <span className="trust-strip-item highlight-purple">
                  <span className="icon-symbol">🚀</span>
                  15M+ Organic Reel Views Generated
                </span>
                <span className="trust-strip-item highlight-emerald">
                  <span className="icon-symbol">🎯</span>
                  Conversion-Focused Funnels
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">🎬</span>
                  Daily Creator-Led Production
                </span>
                <span className="trust-strip-item">
                  <span className="icon-symbol">💎</span>
                  100% Brand Voice Consistency
                </span>
              </div>
            </div>

            {/* Interactive Platform Ecosystem Card */}
            <div className="smm-platform-ecosystem-card">
              <div className="ecosystem-card-top">
                <div className="ecosystem-title-box">
                  <div className="ecosystem-icon-badge">✨</div>
                  <div>
                    <h3>Omnichannel Platform Growth Matrix</h3>
                    <p>Engineered for high-retention algorithms, real conversions & viral compounding</p>
                  </div>
                </div>

                <div className="platform-tabs-nav">
                  <button
                    className={`platform-tab-btn ${activePlatformTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActivePlatformTab('all')}
                  >
                    All Channels
                  </button>
                  <button
                    className={`platform-tab-btn ${activePlatformTab === 'organic' ? 'active' : ''}`}
                    onClick={() => setActivePlatformTab('organic')}
                  >
                    Organic & Reels
                  </button>
                  <button
                    className={`platform-tab-btn ${activePlatformTab === 'paid' ? 'active' : ''}`}
                    onClick={() => setActivePlatformTab('paid')}
                  >
                    Paid Ads & CAPI
                  </button>
                  <button
                    className={`platform-tab-btn ${activePlatformTab === 'creator' ? 'active' : ''}`}
                    onClick={() => setActivePlatformTab('creator')}
                  >
                    Creators & Studio
                  </button>
                </div>
              </div>

              <div className="platform-chips-grid">
                {filteredPlatforms.map((item, idx) => (
                  <div key={idx} className="platform-chip-item">
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
            2. THE 6 CORE SOCIAL MEDIA SERVICES (BENTO GRID)
            ======================================================== */}
        <section className="smm-services-section" ref={servicesSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={servicesHeaderRef}>
              <span className="section-eyebrow">Comprehensive Capabilities</span>
              <h2 className="section-heading">Our 6 Core Social Media Services</h2>
              <p className="section-subtext">
                From organic viral video formats to algorithm-dominating paid ad engines, we build engaged digital communities
                that convert into high-LTV customers.
              </p>
            </div>

            <div className="smm-bento-grid" ref={bentoGridRef}>
              {SIX_SERVICES.map((srv, idx) => {
                const isLeft = idx % 3 === 0;
                const isCenter = idx % 3 === 1;
                const isRight = idx % 3 === 2;
                return (
                  <div
                    key={srv.id}
                    className={`smm-bento-card card-idx-${idx + 1} ${
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
            3. 6-STAGE SOCIAL MEDIA BLUEPRINT
            ======================================================== */}
<section className="smm-process-section" ref={processSectionRef}>
          <div className="container">
            <div className="section-header-wrap" ref={processHeaderRef}>
              <span className="section-eyebrow">Growth Methodology</span>
              <h2 className="section-heading">Our 6-Stage Social Media Blueprint</h2>
              <p className="section-subtext">
                A data-backed organic and paid framework engineered to compound community growth, engagement, and revenue.
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
        <section className="smm-faq-section">
          <div className="container">
            <div className="faq-header-wrap">
              <span className="faq-eyebrow">Frequently Asked Questions</span>
              <h2 className="faq-title">Social Media Marketing FAQs</h2>
              <p className="faq-subtitle">
                Clear answers to common questions regarding content production, platform selection, paid ads, and ROI.
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
        <section className="smm-cta-section">
          <div className="container">
            <div className="smm-cta-box">
              <span className="cta-eyebrow">Stop Posting In The Dark</span>
              <h2 className="cta-title">Turn Social Media Feeds Into Predictable Revenue</h2>
              <p className="cta-desc">
                Partner with Noida’s premier social media growth team. Get a comprehensive creative audit, customized
                growth blueprint, and transparent pricing roadmap today.
              </p>
              <div className="cta-buttons-wrap">
                <Link
                  href="/contact?service=Social%20Media%20Marketing"
                  className="btn-primary-white"
                >
                  Start Your SMM Campaign →
                </Link>
                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%2C%20I%20want%20to%20discuss%20a%20Social%20Media%20Marketing%20campaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-whatsapp"
                >
                  <span>💬</span>
                  <span>Instant WhatsApp Strategy Call</span>
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

export default SocialMediaMarketingServices;