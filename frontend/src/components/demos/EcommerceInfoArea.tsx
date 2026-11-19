"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  CreditCard,
  Smartphone,
  ShoppingBag,
  ShieldCheck,
  Zap,
  Package,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Layers,
  TrendingUp,
  Search,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Custom E-Commerce Website Development",
    desc: "Our ecommerce website development services include building fully customized online stores tailored to your brand and business requirements.",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Payment Gateway Integration",
    desc: "Our developers integrate secure payment gateways to ensure smooth and safe transactions for your customers.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile-Friendly E-Commerce Websites",
    desc: "We create responsive online stores optimized for mobile devices to improve user experience and increase conversions.",
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "E-Commerce App Development",
    desc: "As a trusted ecommerce app development company, we build mobile applications that allow businesses to reach customers and manage their online store from anywhere.",
  },
];

const features = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure Payment Integration",
    desc: "We integrate secure payment gateways to ensure safe transactions for customers.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile-Friendly Design",
    desc: "Our eCommerce websites are fully responsive and optimized for all devices including smartphones and tablets.",
  },
  {
    icon: <Zap size={22} />,
    title: "Fast Loading Speed",
    desc: "Speed-optimized websites that improve user experience and help reduce bounce rate.",
  },
  {
    icon: <Package size={22} />,
    title: "Easy Product Management",
    desc: "Manage products, categories, inventory, and orders easily from a powerful admin dashboard.",
  },
  {
    icon: <LineChart size={22} />,
    title: "SEO-Friendly Store Structure",
    desc: "We develop search engine optimized eCommerce websites that help businesses rank higher on Google.",
  },
];

const whyChooseCards = [
  {
    icon: <Users size={22} />,
    title: "Experienced E-Commerce Developers",
    desc: "Specialized senior engineers with deep experience in custom storefronts, Shopify Plus, headless stacks, and conversion optimization.",
    tag: "Senior Engineering",
    number: "01",
  },
  {
    icon: <Layers size={22} />,
    title: "Complete End-to-End Development",
    desc: "From initial UX architecture and product catalog structure to custom checkout flows, inventory sync, and CRM integrations.",
    tag: "Turnkey Delivery",
    number: "02",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Scalable Solutions for Growing Brands",
    desc: "Cloud-native architectures engineered to handle massive product volumes, high concurrency, and sudden flash sale surges.",
    tag: "Enterprise Scale",
    number: "03",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Secure Payment & Checkout Systems",
    desc: "Bank-grade, PCI-DSS compliant checkout integrations with Stripe, Razorpay, PayPal, and frictionless 1-click mobile checkouts.",
    tag: "Bank-Grade Security",
    number: "04",
  },
  {
    icon: <Search size={22} />,
    title: "SEO-Friendly & Speed-Optimized",
    desc: "Engineered for sub-second page loads, top Core Web Vitals, and rich structured schema to dominate organic search rankings.",
    tag: "Google Rank Ready",
    number: "05",
  },
  {
    icon: <Headphones size={22} />,
    title: "Dedicated Post-Launch Support",
    desc: "Continuous uptime monitoring, proactive security updates, performance maintenance, and priority SLAs to ensure smooth store operations.",
    tag: "24/7 SLA Support",
    number: "06",
  },
];

const EcommerceInfoArea: React.FC = () => {
  return (
    <div className="ecommerce-info-wrapper">
      {/* 1. Our E-Commerce Development Services */}
      <section className="vt-ecom-services-section" aria-label="Our Services">
        <div className="services-section-header">
          <div className="vt-section-badge mb-3">
            <span className="vt-badge-dot" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="vt-section-title">
            Our E-Commerce Development Services
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {services.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="service-bento-card">
                <div className="service-icon-box">{item.icon}</div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Features of a Successful E-Commerce Website */}
      <section className="vt-ecom-features-section" aria-label="Essential Features">
        <div className="features-section-header">
          <div className="vt-section-badge mb-3">
            <span className="vt-badge-dot" />
            <span>High-Converting Architecture</span>
          </div>
          <h2 className="vt-section-title">
            Features of a Successful E-Commerce Website
          </h2>
          <p className="text-muted">
            A successful online store needs the right features to deliver a smooth shopping experience and increase sales.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="feature-clean-card">
                <div className="feature-icon-circle">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Our Agency */}
      <section className="vt-why-choose-section" aria-label="Why Choose Us">
        <div className="why-choose-panel">
          <div className="why-header-wrap">
            <div className="vt-section-badge mb-3">
              <span className="vt-badge-dot" />
              <span>THE VASTORA ADVANTAGE</span>
            </div>
            <h2 className="why-title">
              Why Choose Our <span className="why-title-accent">E-Commerce Development</span> Agency
            </h2>
            <p className="why-subtitle">
              We engineer conversion-obsessed, high-speed online storefronts designed to scale your operations, protect transactions, and maximize customer lifetime value.
            </p>
          </div>

          <div className="why-cards-grid">
            {whyChooseCards.map((card, idx) => (
              <div key={idx} className="why-benefit-card">
                <div className="why-card-glow" aria-hidden="true" />
                <div className="why-card-top">
                  <div className="why-icon-pod">
                    {card.icon}
                  </div>
                  <div className="why-number-pill">
                    <span>{card.number}</span>
                  </div>
                </div>

                <div className="why-card-body">
                  <div className="why-tag-line">
                    <span className="why-tag-pill">
                      <CheckCircle2 size={12} className="tag-check-icon" />
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="why-card-title">{card.title}</h3>
                  <p className="why-card-desc">{card.desc}</p>
                </div>

                <div className="why-card-footer">
                  <span className="why-footer-indicator" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust & Reliability Metrics Strip */}
          <div className="why-trust-bar">
            <div className="why-trust-item">
              <span className="trust-dot" />
              <span className="trust-text"><strong>99.9%</strong> Uptime SLA</span>
            </div>
            <div className="why-trust-sep" />
            <div className="why-trust-item">
              <span className="trust-dot" />
              <span className="trust-text"><strong>Sub-Second</strong> Load Speeds</span>
            </div>
            <div className="why-trust-sep" />
            <div className="why-trust-item">
              <span className="trust-dot" />
              <span className="trust-text"><strong>PCI-DSS</strong> Bank-Grade Security</span>
            </div>
            <div className="why-trust-sep" />
            <div className="why-trust-item">
              <span className="trust-dot" />
              <span className="trust-text"><strong>100%</strong> Mobile-First UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Start Your E-Commerce Business Today CTA */}
      <section className="vt-ecom-cta-section" aria-label="Call to Action">
        <div className="cta-radiant-card">
          <div className="cta-ambient-glow" aria-hidden="true" />
          <h2 className="cta-title">
            Start Your E-Commerce Business Today
          </h2>
          <p className="cta-desc">
            Looking for a reliable ecommerce website development agency or ecommerce web development company in India? Our expert team is ready to help you build a high-performance online store that increases sales and improves customer experience.
          </p>
          <Link href="/contact" className="cta-action-btn">
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcommerceInfoArea;
