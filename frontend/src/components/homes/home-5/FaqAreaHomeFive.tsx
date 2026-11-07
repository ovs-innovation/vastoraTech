"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faq_home_5: FaqItem[] = [
  {
    id: "faq-1",
    num: "01",
    question: "What is the cost of ecommerce website development in India?",
    answer:
      "The cost depends on your requirements, features, and platform. A basic ecommerce website can start from ₹10,000, while advanced or custom-built enterprise solutions may cost ₹50,000 or more. We provide transparent, milestone-based pricing tailored to your business goals.",
  },
  {
    id: "faq-2",
    num: "02",
    question: "How long does it take to develop an ecommerce website?",
    answer:
      "A standard modern ecommerce website usually takes 2–4 weeks. Custom headless storefronts or feature-rich portals may take 4–8 weeks depending on integrations, product catalog size, and bespoke design requirements.",
  },
  {
    id: "faq-3",
    num: "03",
    question: "Which platform is best for ecommerce website development?",
    answer:
      "Popular platforms include Next.js / React (for custom headless performance), Shopify (for rapid DTC scaling), WooCommerce, and Magento. We evaluate your catalog size, volume expectations, and operational workflow to recommend the perfect tech stack.",
  },
  {
    id: "faq-4",
    num: "04",
    question: "Do you offer custom ecommerce website development?",
    answer:
      "Yes, we specialize in fully custom ecommerce engineering tailored to your unique brand identity. From bespoke UX checkout flows to multi-warehouse inventory logic, everything is built to your specifications.",
  },
  {
    id: "faq-5",
    num: "05",
    question: "Will my ecommerce website be mobile-friendly and SEO optimized?",
    answer:
      "Yes, 100%. All our storefronts are engineered with mobile-first responsive architecture and technical SEO best practices (schema markup, Core Web Vitals optimization, and sub-second page loads) to ensure top rankings on Google.",
  },
  {
    id: "faq-6",
    num: "06",
    question: "Do you integrate payment gateways?",
    answer:
      "Yes, we provide turnkey integrations with Razorpay, Stripe, PayU, PhonePe, and Cashfree, supporting instant UPI, credit/debit cards, net banking, and international multi-currency transactions.",
  },
  {
    id: "faq-7",
    num: "07",
    question: "Can I manage my ecommerce website after development?",
    answer:
      "Absolutely. We provide an intuitive, client-branded admin dashboard where you can easily manage products, inventory, discount coupons, customer accounts, and sales analytics with zero technical knowledge required.",
  },
  {
    id: "faq-8",
    num: "08",
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer dedicated post-launch support, security patching, cloud server monitoring, and feature updates to ensure your storefront runs reliably 24/7 with 99.9% uptime.",
  },
];

const FaqAreaHomeFive: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="faq-enhanced-section" id="faq-section">
      <div className="container">
        {/* Header */}
        <div className="faq-header-wrap">
          <div className="faq-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Frequently Asked Questions</span>
          </div>
          <h2 className="faq-title">
            Frequently Asked Questions,{" "}
            <span className="gradient-highlight">Clear Answers for Smart Decisions.</span>
          </h2>
          <p className="faq-desc">
            Got questions about our tech stack, e-commerce milestones, pricing,
            or post-launch maintenance? We have you covered.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-container">
          {faq_home_5.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item-card ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-number">{item.num}</span>
                  <span className="faq-q-title">{item.question}</span>
                  <span className="faq-icon-rotator">
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help */}
        <div className="faq-bottom-help-bar">
          Still have questions?{" "}
          <Link href="/contact">
            Chat with our engineering advisors directly &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaHomeFive;
