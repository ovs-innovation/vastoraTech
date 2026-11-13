'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  budget: string;
  message: string;
  agreed: boolean;
}

const SERVICES_LIST = [
  'eCommerce Solutions',
  'Web Development',
  'Mobile App',
  'SEO & Growth Marketing',
  'UI/UX Design',
  'Custom Software',
];

const BUDGET_OPTIONS = [
  'Flexible / To be discussed',
  '< $1,000 (Starter)',
  '$1,000 – $5,000 (Growth)',
  '$5,000 – $15,000 (Scale)',
  '$15,000+ (Enterprise)',
];

const FAQ_ITEMS = [
  {
    q: 'How fast will I receive a proposal or response?',
    a: 'We review all project inquiries within 2 hours during business hours and share a tailored proposal with scope, timeline and next steps. For complex enterprise architectures, we typically deliver a complete specification breakdown within 24 to 48 hours.',
  },
  {
    q: 'Do you sign a Non-Disclosure Agreement (NDA)?',
    a: 'Yes, 100%. We respect your intellectual property and proprietary ideas. We are always ready to execute a bilateral NDA before reviewing detailed project specifications.',
  },
  {
    q: 'Do you work with startups, growing brands, or enterprises?',
    a: 'We work with clients of all stages—from ambitious entrepreneurs building scalable MVPs to established brands migrating or upgrading high-traffic eCommerce platforms and custom web portals.',
  },
  {
    q: 'How are project payments and milestones structured?',
    a: 'We work with clear, milestone-driven pricing with defined deliverables. You review each completed sprint before releasing subsequent payments, giving you complete peace of mind and control.',
  },
  {
    q: 'What ongoing support do you provide after launch?',
    a: 'Every project comes with post-launch warranty support, performance optimization, and security monitoring. We also offer dedicated ongoing SLA support and maintenance packages.',
  },
];

const GOOGLE_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28029.235959811875!2d77.36680300000003!3d28.580136000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x81c7d17f374edabb%3A0xed66ff7a40389b8a!2sOVS%20Innovation!5e0!3m2!1sen!2sus!4v1753181193525!5m2!1sen!2sus';

const ContactArea: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroStageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    service: 'eCommerce Solutions',
    budget: 'Flexible / To be discussed',
    message: '',
    agreed: true,
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // ── High-Performance 60fps Mouse Parallax Tilt (0 React re-renders) ──
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroStageRef.current || !heroSectionRef.current) return;
    const rect = heroSectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // -4deg to +4deg restrained tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    heroStageRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleHeroMouseLeave = () => {
    if (!heroStageRef.current) return;
    heroStageRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  // ── Cinematic Scroll Storytelling Orchestration with Guaranteed Visibility ──
  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. SECTION 01: HERO STORY (Restrained, elegant entrance)
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTl
        .fromTo(
          '.hero-anim-breadcrumb',
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.55, clearProps: 'all' }
        )
        // Headline fades in with gentle upward movement
        .fromTo(
          '.hero-anim-headline',
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', clearProps: 'all' },
          '-=0.3'
        )
        // Description follows with slight delay
        .fromTo(
          '.hero-anim-subtext',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all' },
          '-=0.45'
        )
        // CTA buttons fade and slide into position
        .fromTo(
          '.hero-anim-cta-btn',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'all',
          },
          '-=0.4'
        )
        // 3D Glass Illustration gently scales into view
        .fromTo(
          heroStageRef.current,
          { opacity: 0, scale: 0.94, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'power2.out', clearProps: 'opacity,transform' },
          '-=0.55'
        )
        // Trust indicators reveal with subtle stagger
        .fromTo(
          '.hero-anim-trust-item',
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: 'power3.out',
            clearProps: 'all',
          },
          '-=0.5'
        );

      // Hero Illustration Parallax: moves slightly slower than content during scroll
      gsap.to(heroStageRef.current, {
        scrollTrigger: {
          trigger: '.contact-hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: -45,
        ease: 'none',
      });

      // 2. SECTION 02: DIRECT CHANNELS REVEAL (Sequential Card Entrances)
      ScrollTrigger.create({
        trigger: '.contact-channels-deck',
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            '.deck-header-row',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            '.channel-card-story',
            { opacity: 0, y: 35, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: 'power3.out',
              clearProps: 'all',
            }
          );
        },
      });

      // 3. SECTION 03: PROJECT DISCUSSION PROGRESSION
      ScrollTrigger.create({
        trigger: '#project-inquiry-form',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          // Left Panel entrance
          gsap.fromTo(
            '.enquiry-info-panel',
            { opacity: 0, x: -35 },
            { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all' }
          );
          // Checklist stagger
          gsap.fromTo(
            '.check-row',
            { opacity: 0, x: -16 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.09,
              delay: 0.2,
              ease: 'power2.out',
              clearProps: 'all',
            }
          );
          // Stats counter pill
          gsap.fromTo(
            '.info-stat-card',
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.6, delay: 0.35, ease: 'power2.out', clearProps: 'all' }
          );
          // WhatsApp priority callout
          gsap.fromTo(
            '.info-priority-whatsapp',
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.45, ease: 'power2.out', clearProps: 'all' }
          );
          // Right Form panel entrance
          gsap.fromTo(
            '.enquiry-form-panel',
            { opacity: 0, x: 35 },
            { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out', clearProps: 'all' }
          );
        },
      });

      // 4. SECTION 04: OFFICE AND LOCATION STORY
      ScrollTrigger.create({
        trigger: '.contact-office-section',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            '.office-header-group',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            '.office-details-col',
            { opacity: 0, x: -25 },
            { opacity: 1, x: 0, duration: 0.8, delay: 0.1, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            '.office-map-col',
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 0.85, delay: 0.2, ease: 'power3.out', clearProps: 'all' }
          );
        },
      });

      // 5. SECTION 05: FAQ ACCORDION REVEAL (Guaranteed Question Visibility)
      ScrollTrigger.create({
        trigger: '.contact-faq-section',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            '.faq-heading-group',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            '.faq-story-item',
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power3.out',
              clearProps: 'all',
            }
          );
        },
      });

      // 6. SECTION 06: CINEMATIC CLOSING CTA
      ScrollTrigger.create({
        trigger: '.contact-closing-cta-section',
        start: 'top 86%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            '.closing-cta-banner',
            { opacity: 0, y: 35, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            '.cta-actions-column',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, delay: 0.25, ease: 'power2.out', clearProps: 'all' }
          );
        },
      });

      // Refresh ScrollTrigger after initial DOM calculations
      ScrollTrigger.refresh();
    }, containerRef);

    // Visibility Safety Timer: Guarantees no element is ever stuck in opacity: 0
    const safetyTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      // Ensure all story elements are guaranteed visible if any trigger failed
      const storyElements = document.querySelectorAll(
        '.hero-anim-headline, .hero-anim-subtext, .hero-glass-stage, .hero-anim-trust-item, .channel-card-story, .enquiry-info-panel, .enquiry-form-panel, .faq-story-item, .closing-cta-banner'
      );
      storyElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.style.opacity === '0') {
          htmlEl.style.opacity = '1';
          htmlEl.style.transform = 'none';
        }
      });
    }, 750);

    return () => {
      clearTimeout(safetyTimer);
      ctx.revert();
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (svc: string) => {
    setFormData((prev) => ({ ...prev, service: svc }));
  };

  const handleCopyAddress = () => {
    const fullAddress =
      '2nd Floor, JS Arcade, 203, Above PNB Bank, Hoshiyarpur, Sector 51, Noida, Uttar Pradesh 201301, India';
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('project-inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setServerError('Please fill out all required fields (Name, Email, and Project Details).');
      return;
    }

    if (!formData.agreed) {
      setServerError('Please accept the Terms & Conditions to proceed.');
      return;
    }

    setSubmitting(true);
    setServerMessage(null);
    setServerError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/contact-submissions`
        : 'http://localhost:8081/api/contact-submissions';

      const combinedMessage = `[Interested Service: ${formData.service}] [Budget Estimate: ${formData.budget}] [Phone/WhatsApp: ${
        formData.phone.trim() || 'Not provided'
      }]\n\n${formData.message.trim()}`;

      const payload = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || `Inquiry for ${formData.service}`,
        message: combinedMessage,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const resData = await response.json().catch(() => ({}));
      if (!response.ok || resData.success === false) {
        throw new Error(resData.message || 'Unable to submit your inquiry right now.');
      }

      setServerMessage(
        'Thank you! Your project inquiry has been received. Our engineering team will review your requirements and reach out within 2 hours.'
      );

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        service: 'eCommerce Solutions',
        budget: 'Flexible / To be discussed',
        message: '',
        agreed: true,
      });
    } catch (err: any) {
      setServerError(
        err.message || 'Failed to submit form. You can also contact us directly via WhatsApp or phone.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="contact-premium-page">
      {/* ── Visual Background Architecture System (Subtle gradient meshes & glowing orbs) ── */}
      <div className="contact-mesh-background" aria-hidden="true">
        <div className="mesh-gradient-base" />
        <div className="mesh-glow-orb mesh-glow-orb--top-right" />
        <div className="mesh-glow-orb mesh-glow-orb--mid-left" />
        <div className="mesh-glow-orb mesh-glow-orb--bottom-center" />
      </div>

      <div className="container contact-container">

        {/* ========================================================
            SECTION 01: HERO STORY (3D Glassmorphism & Restrained Motion)
            ======================================================== */}
        <section
          ref={heroSectionRef}
          className="contact-hero-section"
          aria-label="Contact & Consultation Hero"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          {/* Ambient Flowing Silk Wave (Matching Reference) */}
          <div className="hero-ambient-wave" aria-hidden="true" />

          <div className="hero-split-grid">

            {/* Left Content Column */}
            <div className="hero-content-col">
              {/* Top Meta: Breadcrumb & Live Project Status (Matching Reference) */}
              <div className="hero-top-meta hero-anim-breadcrumb">
                <nav aria-label="Breadcrumb" className="contact-breadcrumb">
                  <Link href="/">Home</Link>
                  <span className="bc-sep">/</span>
                  <span className="bc-current">Contact &amp; Consultation</span>
                </nav>
                <div className="hero-status-pill">
                  <span className="status-dot" />
                  <span>ACCEPTING NEW PROJECTS</span>
                </div>
              </div>

              {/* Main Headline — Bold, Sophisticated Typography with Balanced Line Breaks */}
              <h1 className="hero-main-headline hero-anim-headline" aria-label="Let's build what's next.">
                <span className="hero-headline-line">Let&apos;s build</span>{' '}
                <span className="hero-headline-line">
                  <span className="headline-highlight">what&apos;s next.</span>
                </span>
              </h1>

              {/* Supporting Subtext */}
              <p className="hero-subtext hero-anim-subtext">
                Have an ambitious project in mind for a high-converting eCommerce store, custom web platform, or digital growth architecture? Talk to our senior engineering leads for an in-depth consultation.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="btn-primary-discuss hero-anim-cta-btn"
                  onClick={scrollToForm}
                  aria-label="Start a Project Discussion"
                >
                  <span className="btn-shine" />
                  <span>Start a Project Discussion</span>
                  <svg className="cta-arrow" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <a
                  href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%20team,%20I%20would%20like%20to%20discuss%20a%20priority%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-book hero-anim-cta-btn"
                  aria-label="Chat on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp whatsapp-icon" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column — 3D Architectural Glass Artwork */}
            <div className="hero-graphic-col" aria-label="3D Architectural Glass Illustration">
              <div
                ref={heroStageRef}
                className="hero-glass-stage"
              >
                {/* Soft Organic Ambient Atmosphere Aura */}
                <div className="glass-ambient-aura" aria-hidden="true" />
                <div className="glass-ambient-beam" aria-hidden="true" />

                {/* Floating 3D Glass Artwork */}
                <div className="glass-artwork-wrapper">
                  <img
                    src="/assets/img/contact/contact-hero-3d-glass.png"
                    alt="Vastora Tech 3D Architectural Glass Structure"
                    className="glass-artwork-img"
                    width={620}
                    height={460}
                    loading="eager"
                  />
                  {/* Subtle Specular Sheen */}
                  <div className="glass-specular-sheen" aria-hidden="true" />
                </div>

                {/* Soft Diffused Ambient Shadow Beneath Floating Glass */}
                <div className="glass-ambient-shadow" aria-hidden="true" />
              </div>
            </div>

          </div>

          {/* Full-Width Trust Indicators Strip (Directly matching Screenshot 2) */}
          <div className="hero-trust-strip">
            <div className="trust-item hero-anim-trust-item">
              <div className="trust-icon-badge" aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="trust-text">
                <span className="trust-label">&lt; 2-Hour Rapid Response</span>
                <span className="trust-sub">Direct Technical SLA</span>
              </div>
            </div>

            <div className="trust-divider" aria-hidden="true" />

            <div className="trust-item hero-anim-trust-item">
              <div className="trust-icon-badge" aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="trust-text">
                <span className="trust-label">100% Confidential (NDA)</span>
                <span className="trust-sub">Bilateral NDA First</span>
              </div>
            </div>

            <div className="trust-divider" aria-hidden="true" />

            <div className="trust-item hero-anim-trust-item">
              <div className="trust-icon-badge" aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="trust-text">
                <span className="trust-label">Architecture Consultation</span>
                <span className="trust-sub">Senior Tech Lead</span>
              </div>
            </div>

            <div className="trust-divider" aria-hidden="true" />

            <div className="trust-item hero-anim-trust-item">
              <div className="trust-icon-badge" aria-hidden="true">
                <svg fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="trust-text">
                <span className="trust-label">End-to-End Delivery</span>
                <span className="trust-sub">From MVP to Scale</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 02: DIRECT CHANNELS REVEAL (Restored & Guaranteed Visible)
            ======================================================== */}
        <section className="contact-channels-deck" aria-label="Direct Contact Channels">
          <div className="deck-ambient-highlight" aria-hidden="true" />
          <div className="deck-header-row">
            <div>
              <span className="deck-eyebrow">Direct Engineering Channels</span>
              <h2 className="deck-heading">Reach Out Directly to Our Team</h2>
            </div>
            <span className="deck-hint">Immediate consultation or submit a tailored scope below</span>
          </div>

          <div className="channels-grid">
            {/* Card 1: Direct Email */}
            <a href="mailto:vastoratech@gmail.com" className="channel-card channel-card--email channel-card-story">
              <div className="card-top-accent" aria-hidden="true" />
              <div className="card-header-flex">
                <div className="channel-icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="channel-badge">RFC / Specs</span>
              </div>
              <div className="channel-body">
                <h3 className="channel-title">Email Us</h3>
                <p className="channel-value">vastoratech@gmail.com</p>
                <span className="channel-desc">Send us RFPs &amp; detailed requirements</span>
              </div>
              <div className="channel-action">
                <span>Send an Email</span>
                <span className="action-arrow">→</span>
              </div>
            </a>

            {/* Card 2: Direct Phone */}
            <a href="tel:+918595658592" className="channel-card channel-card--phone channel-card-story">
              <div className="card-top-accent" aria-hidden="true" />
              <div className="card-header-flex">
                <div className="channel-icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="channel-badge">Live Desk</span>
              </div>
              <div className="channel-body">
                <h3 className="channel-title">Call Us</h3>
                <p className="channel-value">+91 85956 58592</p>
                <span className="channel-desc">Mon – Sat, 10:00 AM – 6:30 PM IST</span>
              </div>
              <div className="channel-action">
                <span>Call Directly</span>
                <span className="action-arrow">→</span>
              </div>
            </a>

            {/* Card 3: WhatsApp Direct */}
            <a
              href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%20team,%20I%20would%20like%20to%20discuss%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card channel-card--whatsapp channel-card-story"
            >
              <div className="card-top-accent" aria-hidden="true" />
              <div className="card-header-flex">
                <div className="channel-icon-wrap">
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: 22 }} />
                </div>
                <span className="channel-badge channel-badge--live">
                  <span className="badge-pulse-dot" /> Online
                </span>
              </div>
              <div className="channel-body">
                <h3 className="channel-title">WhatsApp</h3>
                <p className="channel-value">+91 85956 58592</p>
                <span className="channel-desc">Fast responses &amp; direct team chat</span>
              </div>
              <div className="channel-action">
                <span>Chat on WhatsApp</span>
                <span className="action-arrow">→</span>
              </div>
            </a>

            {/* Card 4: Noida Headquarters */}
            <a
              href="https://maps.app.goo.gl/WmdQFpw8LhnPeirb6"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card channel-card--location channel-card-story"
            >
              <div className="card-top-accent" aria-hidden="true" />
              <div className="card-header-flex">
                <div className="channel-icon-wrap">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="channel-badge">Head Office</span>
              </div>
              <div className="channel-body">
                <h3 className="channel-title">Noida Office</h3>
                <p className="channel-value">Sector 51, Noida</p>
                <span className="channel-desc">Uttar Pradesh 201301, India</span>
              </div>
              <div className="channel-action">
                <span>View on Map</span>
                <span className="action-arrow">→</span>
              </div>
            </a>
          </div>
        </section>

        {/* ========================================================
            SECTION 03: PROJECT DISCUSSION PROGRESSION
            ======================================================== */}
        <section id="project-inquiry-form" className="contact-enquiry-section" aria-label="Project Consultation Form">
          <div className="enquiry-split-grid">

            {/* Left Column: Visual Information & Engineering Blueprint Panel */}
            <div className="enquiry-info-panel">
              <div className="info-blueprint-bg" aria-hidden="true" />

              <div className="info-inner-content">
                <div className="info-badge">Partner With Vastora Tech</div>
                <h2 className="info-headline">Engineering Digital<br />Growth with Precision</h2>
                <p className="info-paragraph">
                  We combine modern web frameworks, scalable architectures, and data-driven strategy to turn your ideas into high-performing, revenue-generating digital products.
                </p>

                {/* Engineering Value Proposition Checklist */}
                <div className="info-checklist">
                  <div className="check-row">
                    <div className="check-icon">✓</div>
                    <span>End-to-end full-lifecycle product development</span>
                  </div>
                  <div className="check-row">
                    <div className="check-icon">✓</div>
                    <span>Transparent sprint-based milestone delivery</span>
                  </div>
                  <div className="check-row">
                    <div className="check-icon">✓</div>
                    <span>Built natively for high concurrency and speed</span>
                  </div>
                </div>

                {/* Key Capability Metric Cards */}
                <div className="info-stat-card">
                  <div className="stat-grid">
                    <div className="stat-cell">
                      <span className="stat-digit">50<span className="stat-plus">+</span></span>
                      <span className="stat-desc">Projects Delivered</span>
                    </div>
                    <div className="stat-divider-line" />
                    <div className="stat-cell">
                      <span className="stat-digit">&lt; 2h</span>
                      <span className="stat-desc">Proposal Window</span>
                    </div>
                    <div className="stat-divider-line" />
                    <div className="stat-cell">
                      <span className="stat-digit">100<span className="stat-plus">%</span></span>
                      <span className="stat-desc">NDA Protected</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Priority Callout Component */}
                <div className="info-priority-whatsapp">
                  <div className="wa-icon-glow">
                    <i className="fa-brands fa-whatsapp" />
                  </div>
                  <div className="wa-text-group">
                    <span className="wa-eyebrow">⚡ Instant Technical Channel</span>
                    <p className="wa-text">Need an immediate answer? Chat directly with our engineering lead.</p>
                  </div>
                  <a
                    href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%20team,%20I%20would%20like%20to%20discuss%20a%20priority%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-action-btn"
                  >
                    Chat Now →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Project Enquiry Form */}
            <div className="enquiry-form-panel">
              <div className="form-heading-block">
                <h3 className="form-headline">Start Your Project Discussion</h3>
                <p className="form-subheading">
                  Tell us about your objectives. We will review your scope and return a clear architectural breakdown within 2 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="project-inquiry-form">
                {/* Service Selection Pills */}
                <div className="form-group-services">
                  <label className="group-label">What service are you interested in?</label>
                  <div className="service-pills-wrap">
                    {SERVICES_LIST.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        className={`service-pill-btn ${formData.service === svc ? 'is-selected' : ''}`}
                        onClick={() => handleServiceSelect(svc)}
                      >
                        {formData.service === svc && <span className="pill-active-dot" />}
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Full Name & Work Email */}
                <div className="form-fields-row">
                  <div className="input-field-group">
                    <label htmlFor="fullName">Full Name <span className="req-star">*</span></label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="email">Work Email <span className="req-star">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Phone & Budget Range */}
                <div className="form-fields-row">
                  <div className="input-field-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="budget">Estimated Budget</label>
                    <div className="select-wrap">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                      <span className="select-arrow-icon">▼</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="input-field-group">
                  <label htmlFor="message">Project Scope &amp; Goals <span className="req-star">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, target launch timeline, required integrations, or special architecture considerations..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Terms Consent */}
                <div className="form-terms-row">
                  <input
                    type="checkbox"
                    id="consent-agreed"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={(e) => setFormData((prev) => ({ ...prev, agreed: e.target.checked }))}
                    required
                  />
                  <label htmlFor="consent-agreed">
                    I agree to the <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> and authorize Vastora Tech to contact me regarding this inquiry.
                  </label>
                </div>

                {/* Submit CTA Button */}
                <button type="submit" className="form-submit-button" disabled={submitting}>
                  <span className="submit-shine" />
                  {submitting ? (
                    <>
                      <svg className="spinner-rotate" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                        <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status Notifications */}
                {serverMessage && (
                  <div className="form-alert-box alert-success" role="alert">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div><strong>Inquiry Received!</strong> {serverMessage}</div>
                  </div>
                )}

                {serverError && (
                  <div className="form-alert-box alert-error" role="alert">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div><strong>Notice:</strong> {serverError}</div>
                  </div>
                )}
              </form>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 04: OFFICE AND LOCATION STORY
            ======================================================== */}
        <section className="contact-office-section" aria-label="Office Location and Map">
          <div className="office-header-group">
            <span className="office-eyebrow">Our Global Presence &amp; Headquarters</span>
            <h2 className="office-title">Visit Our Office in Noida, India</h2>
          </div>

          <div className="office-split-card">
            {/* Left Side: Office Information & Operating Hours */}
            <div className="office-details-col">
              <div className="office-header-item">
                <div className="office-pin-badge">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="office-building-name">Noida Sector-51 Headquarters</h4>
                  <p className="office-full-address">
                    2nd Floor, JS Arcade, 203, Above PNB Bank,<br />
                    Hoshiyarpur, Sector 51, Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="office-schedule-card">
                <div className="schedule-row">
                  <span className="sched-day">Mon – Fri:</span>
                  <span className="sched-time">10:00 AM – 6:30 PM IST</span>
                </div>
                <div className="schedule-row">
                  <span className="sched-day">Saturday:</span>
                  <span className="sched-time">10:00 AM – 6:30 PM IST</span>
                </div>
                <div className="schedule-row">
                  <span className="sched-day">Sunday:</span>
                  <span className="sched-time emergency-tag">Emergency On-Call Support</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="office-btn-row">
                <a
                  href="https://maps.app.goo.gl/WmdQFpw8LhnPeirb6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-action-btn office-action-btn--primary"
                >
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ width: 15, height: 15 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Open in Google Maps</span>
                </a>

                <button type="button" className="office-action-btn office-action-btn--ghost" onClick={handleCopyAddress}>
                  <span>{copiedAddress ? '✓ Address Copied!' : 'Copy Full Address'}</span>
                </button>
              </div>

              {/* Social Connect Links */}
              <div className="office-social-strip">
                <span className="social-label">Follow Us:</span>
                <div className="social-pills">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter" aria-label="Twitter">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram" aria-label="Instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Map Container with Floating Location Beacon */}
            <div className="office-map-col">
              <div className="map-view-frame">
                <iframe
                  src={GOOGLE_MAP_EMBED_URL}
                  title="Vastora Tech Noida Headquarters Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-beacon-pill">
                  <span className="beacon-emerald-dot" />
                  <span>Vastora Tech · Sector 51, Noida</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 05: FAQ STORY (Restored and Guaranteed Visible)
            ======================================================== */}
        <section className="contact-faq-section" aria-label="Frequently Asked Questions">
          <div className="faq-heading-group">
            <span className="faq-eyebrow">Got Questions?</span>
            <h3 className="faq-main-title">Frequently Asked Questions</h3>
          </div>

          <div className="faq-accordion-wrap">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              const formattedNumber = String(idx + 1).padStart(2, '0');
              return (
                <div key={idx} className={`faq-accordion-item faq-story-item ${isOpen ? 'is-active' : ''}`}>
                  <span className="faq-watermark-number" aria-hidden="true">{formattedNumber}</span>

                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.q}</span>
                    <div className="faq-icon-bubble">
                      <svg
                        className="faq-chevron-icon"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-dropdown">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            SECTION 06: CINEMATIC CLOSING CTA STORY
            ======================================================== */}
        <section className="contact-closing-cta-section" aria-label="Closing Consultation Call to Action">
          <div className="closing-cta-banner">
            {/* Atmospheric Background Layers */}
            <div className="cta-ambient-glow cta-ambient-glow--1" aria-hidden="true" />
            <div className="cta-ambient-glow cta-ambient-glow--2" aria-hidden="true" />
            <div className="cta-watermark-arrow" aria-hidden="true">→</div>

            {/* Left/Main Headline Block */}
            <div className="cta-content-column">
              <div className="cta-sla-pill">
                <span className="sla-dot" />
                <span>⚡ 2-Hour Response Window · Direct Senior Engineer Consultation</span>
              </div>

              <h2 className="cta-headline">
                Ready to turn your vision into a scalable, high-performance digital product?
              </h2>

              <p className="cta-subheading">
                From initial technical architecture and UI/UX design to custom development and ongoing growth, our engineering leads are ready to accelerate your roadmap.
              </p>
            </div>

            {/* Right Action Button Column */}
            <div className="cta-actions-column">
              <button
                type="button"
                className="btn-cta-primary"
                onClick={scrollToForm}
                aria-label="Start a Project Discussion"
              >
                <span className="btn-shine" />
                <span>Start a Project Discussion</span>
                <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%20team,%20I%20would%20like%20to%20discuss%20a%20priority%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactArea;
