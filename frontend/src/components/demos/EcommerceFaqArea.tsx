"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "eco-faq-1",
    question: "What are eCommerce website development services?",
    answer: "eCommerce website development services involve building online stores where businesses can sell products or services through a website."
  },
  {
    id: "eco-faq-2",
    question: "Why should I hire an eCommerce website developer?",
    answer: "An ecommerce website developer helps create a professional online store with secure payments, product management, and smooth navigation."
  },
  {
    id: "eco-faq-3",
    question: "What does an eCommerce website development agency do?",
    answer: "An ecommerce website development agency designs, develops, and manages online stores for businesses."
  },
  {
    id: "eco-faq-4",
    question: "Is eCommerce web development in India reliable?",
    answer: "Yes, ecommerce web development India services are widely used by businesses because of strong technical expertise and cost-effective solutions."
  },
  {
    id: "eco-faq-5",
    question: "Do you provide custom eCommerce website development services?",
    answer: "Yes, we provide custom ecommerce website development services based on your business needs and goals."
  },
  {
    id: "eco-faq-6",
    question: "What platforms are used for eCommerce website development?",
    answer: "Popular platforms include Shopify, WooCommerce, Magento, and custom-built solutions."
  },
  {
    id: "eco-faq-7",
    question: "Do you build mobile apps for eCommerce businesses?",
    answer: "Yes, as an ecommerce app development company we create mobile shopping apps for businesses."
  },
  {
    id: "eco-faq-8",
    question: "How long does it take to develop an eCommerce website?",
    answer: "The development time depends on the features and design requirements, but most projects take a few weeks to complete."
  }
];

const EcommerceFaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("eco-faq-1");

  const handleToggle = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="faq-area pb-120 pt-50  bg-gray-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title-wrapper text-center mb-60">
              <span className="section-subtitle">FAQ</span>
              <h2 className="section-title">E-Commerce Development FAQs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="faq-wrapper">
              <div className="accordion" id="ecommerceFaqAccordion">
                {faq_data.map((item, i) => (
                  <div key={i} className="accordion-item mb-25" style={{ 
                    border: 'none', 
                    borderRadius: '12px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease'
                  }}>
                    <h2 className="accordion-header" id={`heading-${item.id}`}>
                      <button
                        className={`accordion-button ${activeIndex === item.id ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => handleToggle(item.id)}
                        aria-expanded={activeIndex === item.id}
                        aria-controls={`collapse-${item.id}`}
                        style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          padding: '24px 30px',
                          backgroundColor: activeIndex === item.id ? '#F8FAFC' : '#fff',
                          color: activeIndex === item.id ? '#2B6BB3' : '#111',
                          border: 'none',
                          boxShadow: 'none'
                        }}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${item.id}`}
                      className={`accordion-collapse collapse ${activeIndex === item.id ? "show" : ""}`}
                      aria-labelledby={`heading-${item.id}`}
                      data-bs-parent="#ecommerceFaqAccordion"
                    >
                      <div className="accordion-body" style={{
                        padding: '0 30px 24px',
                        fontSize: '16px',
                        lineHeight: '1.7',
                        color: '#64748B',
                        backgroundColor: '#F8FAFC'
                      }}>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .accordion-button::after {
          background-size: 1rem;
          transition: transform 0.3s ease;
        }
        .accordion-button:not(.collapsed)::after {
          transform: rotate(-180deg);
          filter: sepia(100%) hue-rotate(190deg) saturate(300%) brightness(0.8);
        }
        .bg-gray-light {
          background-color: #fafafe;
        }
        .section-subtitle {
          color: #2B6BB3;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 10px;
        }
        .section-title {
          font-size: 36px;
          font-weight: 800;
          color: #111;
        }
      `}</style>
    </section>
  );
};

export default EcommerceFaqArea;
