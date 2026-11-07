'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
  'Mobile App Development',
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
    a: 'We review all project inquiries within 2 hours during business hours. For detailed requirements, we typically deliver a complete architecture roadmap, scope breakdown, and milestone estimate within 24 to 48 hours.',
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

const ContactArea = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setServerError('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    setSubmitting(true);
    setServerMessage(null);
    setServerError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/contact-submissions`
        : 'http://localhost:8081/api/contact-submissions';

      // Compose rich message containing selected service, budget, and phone
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

      const resData = await response.json();
      if (!response.ok || resData.success === false) {
        throw new Error(resData.message || 'Unable to submit your inquiry right now.');
      }

      setServerMessage(
        'Thank you! Your project inquiry has been received. Our team will analyze your requirements and reach out within 2 hours.'
      );

      // Reset form
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
    <section className="contact-redesign-wrapper">
      <div className="container">
        {/* ========================================================
            HERO / HEADER SECTION
            ======================================================== */}
        <header className="contact-hero-header">
          {/* Breadcrumb Navigation */}
          <div className="contact-breadcrumb-wrap">
            <nav aria-label="Breadcrumb" className="contact-breadcrumb">
              <Link href="/">Home</Link>
              <span className="bc-sep">/</span>
              <span className="bc-current">Contact & Consultation</span>
            </nav>
          </div>

          {/* Eyebrow Status Badge */}
          <div className="contact-eyebrow-badge">
            <span className="badge-dot" />
            <span className="badge-text">Accepting New Projects • 2-Hour Response Time</span>
          </div>

          {/* Main Title */}
          <h1 className="contact-main-title">
            Let’s Build Something{' '}
            <span className="gradient-highlight">Extraordinary Together</span>
          </h1>

          {/* Subtitle */}
          <p className="contact-main-subtitle">
            Have a project in mind for a high-converting eCommerce store, custom web platform, or digital growth marketing? Talk directly with our engineering architects for a free technical consultation & estimate.
          </p>

          {/* Trust Badges */}
          <div className="contact-trust-strip">
            <div className="trust-strip-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>2-Hour Rapid Response</span>
            </div>
            <div className="trust-strip-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
              </svg>
              <span>100% NDA Protected</span>
            </div>
            <div className="trust-strip-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>Free Architecture Consultation</span>
            </div>
          </div>
        </header>

        {/* ========================================================
            QUICK CONTACT CHANNELS (4 INTERACTIVE CARDS)
            ======================================================== */}
        <div className="contact-channels-grid">
          {/* Email */}
          <a href="mailto:vastoratech@gmail.com" className="channel-card">
            <div>
              <div className="channel-top-row">
                <div className="channel-icon-box">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="channel-badge active-badge">Quick Reply</span>
              </div>
              <div className="channel-info">
                <h4 className="channel-title">Direct Email</h4>
                <p className="channel-value">vastoratech@gmail.com</p>
                <span className="channel-subtext">Send us RFPs & specifications</span>
              </div>
            </div>
            <div className="channel-bottom-cta">
              <span>Send Email</span>
              <span className="channel-cta-arrow">→</span>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+918595658592" className="channel-card">
            <div>
              <div className="channel-top-row">
                <div className="channel-icon-box">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="channel-badge">Voice Call</span>
              </div>
              <div className="channel-info">
                <h4 className="channel-title">Phone Number</h4>
                <p className="channel-value">+91 85956 58592</p>
                <span className="channel-subtext">Mon – Sat, 10:00 AM – 6:30 PM IST</span>
              </div>
            </div>
            <div className="channel-bottom-cta">
              <span>Call Us Now</span>
              <span className="channel-cta-arrow">→</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech%20team,%20I%20would%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div>
              <div className="channel-top-row">
                <div className="channel-icon-box whatsapp-icon">
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: 24 }} />
                </div>
                <span className="channel-badge active-badge">Instant Chat</span>
              </div>
              <div className="channel-info">
                <h4 className="channel-title">WhatsApp Chat</h4>
                <p className="channel-value">+91 85956 58592</p>
                <span className="channel-subtext">Connect with engineering team</span>
              </div>
            </div>
            <div className="channel-bottom-cta">
              <span>Start WhatsApp Chat</span>
              <span className="channel-cta-arrow">→</span>
            </div>
          </a>

          {/* Office HQ */}
          <a
            href="https://maps.app.goo.gl/WmdQFpw8LhnPeirb6"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div>
              <div className="channel-top-row">
                <div className="channel-icon-box">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="channel-badge">Noida Center</span>
              </div>
              <div className="channel-info">
                <h4 className="channel-title">Office Location</h4>
                <p className="channel-value">Sector 51, Noida</p>
                <span className="channel-subtext">JS Arcade, Hoshiyarpur, UP 201301</span>
              </div>
            </div>
            <div className="channel-bottom-cta">
              <span>View On Maps</span>
              <span className="channel-cta-arrow">→</span>
            </div>
          </a>
        </div>

        {/* ========================================================
            MAIN SECTION: LEFT INFO + RIGHT CONSULTATION FORM
            ======================================================== */}
        <div className="contact-main-grid">
          {/* Left Side: Why Choose Vastora Tech + Enterprise Banner */}
          <div className="contact-info-panel">
            <div className="info-intro-card">
              <span className="intro-tag">Partner With Vastora Tech</span>
              <h2 className="intro-heading">Engineering Digital Growth With Precision & Speed</h2>
              <p className="intro-desc">
                We combine modern web frameworks, battle-tested eCommerce architectures, and data-driven marketing to turn digital ideas into high-revenue engines.
              </p>

              <ul className="intro-checklist">
                <li>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>End-to-end full stack development (Next.js, Node.js, Cloud APIs)</span>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated project manager & transparent weekly sprint demos</span>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Transparent milestone-based pricing with zero vendor lock-in</span>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Comprehensive post-launch warranty, security audits & support</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Consultation Box */}
            <div className="enterprise-consultation-banner">
              <span className="enterprise-badge">⚡ Priority Channel</span>
              <h3 className="enterprise-title">Need an urgent enterprise audit or custom quote?</h3>
              <p className="enterprise-desc">
                Skip the wait and connect directly on WhatsApp with our lead technical consultant for immediate scoping and advisory.
              </p>
              <a
                href="https://wa.me/918595658592?text=Hi%20Vastora%20Tech,%20I%20need%20priority%20consultation%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="enterprise-direct-btn"
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: 18 }} />
                <span>Chat On WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Project Consultation Form */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <h2 className="form-card-title">Start Your Project Discussion</h2>
              <p className="form-card-subtitle">
                Fill in the details below to receive a custom architecture roadmap, milestone scope, and transparent quote.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Service Pills Selector */}
              <div className="service-selector-group">
                <label className="selector-label">What service are you interested in?</label>
                <div className="service-pills-wrap">
                  {SERVICES_LIST.map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      className={`service-pill-btn ${formData.service === svc ? 'active' : ''}`}
                      onClick={() => handleServiceSelect(svc)}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="form-grid-row">
                <div className="form-field-wrap">
                  <label htmlFor="fullName">
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="email">
                    Work Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div className="input-with-icon">
                    <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
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
              </div>

              {/* Phone & Budget Fields */}
              <div className="form-grid-row">
                <div className="form-field-wrap">
                  <label htmlFor="phone">Phone / WhatsApp Number</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-field-wrap">
                  <label htmlFor="budget">Estimated Budget Range</label>
                  <div className="input-with-icon">
                    <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="form-field-wrap">
                <label htmlFor="subject">Subject / Project Title</label>
                <div className="input-with-icon">
                  <svg className="input-icon" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Redesigning our D2C eCommerce store & adding custom features"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-field-wrap">
                <label htmlFor="message">
                  Project Details & Goals <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, target audience, required features, timeline, or links to references..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="terms-check-wrap">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={(e) => setFormData((prev) => ({ ...prev, agreed: e.target.checked }))}
                  required
                />
                <label htmlFor="agreed">
                  I agree to the <Link href="/terms-and-conditions">Terms & Conditions</Link> and consent to Vastora Tech contacting me regarding this project.
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="form-submit-btn" disabled={submitting}>
                {submitting ? (
                  <>
                    <svg className="animate-spin" fill="none" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Sending Project Inquiry...</span>
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

              {/* Success Notification */}
              {serverMessage && (
                <div className="form-success-banner">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Inquiry Received!</strong> {serverMessage}
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {serverError && (
                <div className="form-error-banner">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Submission Alert:</strong> {serverError}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ========================================================
            HEADQUARTERS & INTERACTIVE MAP SECTION
            ======================================================== */}
        <section className="contact-hq-section">
          <div className="hq-card-container">
            {/* Left Column: Office Details */}
            <div className="hq-details-col">
              <div>
                <span className="hq-eyebrow">Development Center & HQ</span>
                <h3 className="hq-main-title">Visit Our Office in Noida, India</h3>

                {/* Address Box */}
                <div className="hq-address-box">
                  <div className="hq-pin-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="hq-address-content">
                    <h5>Noida Sector-51 Office</h5>
                    <p>
                      2nd Floor, JS Arcade, 203, Above PNB Bank, Hoshiyarpur, Sector 51, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="hq-hours-box">
                  <div className="hour-row">
                    <span className="day-label">Monday – Friday:</span>
                    <span className="time-val">10:00 AM – 6:30 PM IST</span>
                  </div>
                  <div className="hour-row">
                    <span className="day-label">Saturday:</span>
                    <span className="time-val">10:00 AM – 6:30 PM IST</span>
                  </div>
                  <div className="hour-row">
                    <span className="day-label">Sunday:</span>
                    <span className="time-val" style={{ color: '#0062f5' }}>Emergency Support Active</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="hq-action-btns">
                  <a
                    href="https://maps.app.goo.gl/WmdQFpw8LhnPeirb6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hq-map-btn"
                  >
                    <span>Open in Google Maps</span>
                    <svg fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button type="button" className="hq-copy-btn" onClick={handleCopyAddress}>
                    <span>{copiedAddress ? '✓ Address Copied!' : 'Copy Full Address'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="hq-social-strip">
                <span className="social-title">Connect:</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hq-social-icon"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hq-social-icon"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hq-social-icon"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hq-social-icon"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hq-social-icon"
                  title="YouTube"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="hq-map-col">
              <iframe
                src={GOOGLE_MAP_EMBED_URL}
                title="Vastora Tech Noida Office Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ========================================================
            FAQ ACCORDION SECTION
            ======================================================== */}
        <section className="contact-faq-section">
          <div className="faq-header">
            <span className="faq-eyebrow">Got Questions?</span>
            <h3 className="faq-title">Frequently Asked Questions</h3>
          </div>

          <div className="faq-accordion-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  >
                    <span>{item.q}</span>
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
                      <p style={{ margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactArea;