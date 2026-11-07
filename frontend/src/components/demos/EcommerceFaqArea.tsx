"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faq_data = [
  {
    id: "eco-faq-1",
    question: "Which is the best ecommerce website development company in Noida?",
    answer:
      "A reliable ecommerce development company should offer scalable solutions, secure integrations, and user-friendly design. At Vastora Tech, we build high-performance ecommerce websites tailored to your business goals.",
  },
  {
    id: "eco-faq-2",
    question: "Do you provide ecommerce website design services?",
    answer:
      "Yes, we offer professional ecommerce website design focused on user experience, mobile responsiveness, and conversion optimization.",
  },
  {
    id: "eco-faq-3",
    question: "Do you develop ecommerce mobile apps?",
    answer:
      "Yes, we build feature-rich ecommerce apps for Android and iOS to help you expand your online business.",
  },
  {
    id: "eco-faq-4",
    question: "What is included in ecommerce development services?",
    answer:
      "Our services include website design, product setup, payment gateway integration, security implementation, and performance optimization.",
  },
  {
    id: "eco-faq-5",
    question: "How much does ecommerce website development cost in Noida?",
    answer:
      "The cost depends on features, design, and platform. Basic ecommerce websites typically start from ₹20,000–₹50,000, while advanced or custom solutions cost more.",
  },
  {
    id: "eco-faq-6",
    question: "How long does it take to develop an ecommerce website?",
    answer:
      "A standard ecommerce website usually takes 3–5 weeks. More complex or custom platforms may take longer based on features and integrations.",
  },
  {
    id: "eco-faq-7",
    question: "Will my ecommerce website be SEO-friendly and mobile responsive?",
    answer:
      "Yes, all our ecommerce websites are SEO-friendly, fast-loading, and fully responsive across mobile, tablet, and desktop devices.",
  },
  {
    id: "eco-faq-8",
    question: "Do you provide support after website development?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your ecommerce website runs smoothly and stays updated.",
  },
];

const EcommerceFaqArea: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>("eco-faq-1");

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="vt-ecom-faq-section" id="ecommerce-faq" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="vt-section-badge mb-3">
            <span className="vt-badge-dot" />
            <span>FAQ</span>
          </div>
          <h2 className="vt-section-title">
            E-Commerce Development FAQs
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list-wrap">
          {faq_data.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item-card ${isOpen ? "is-active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p className="mb-0">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFaqArea;
