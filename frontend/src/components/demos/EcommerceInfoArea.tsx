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

const whyChoosePoints = [
  "Experienced ecommerce website developers",
  "Complete ecommerce website development",
  "Scalable solutions for growing businesses",
  "Secure payment and checkout systems",
  "SEO-friendly eCommerce store development",
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
          <h2 className="why-title">
            Why Choose Our E-Commerce Development Agency
          </h2>

          <div className="why-checklist-grid">
            {whyChoosePoints.map((point, idx) => (
              <div key={idx} className="why-check-item">
                <div className="check-icon-badge">
                  <CheckCircle2 size={16} />
                </div>
                <span className="check-text">{point}</span>
              </div>
            ))}
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
