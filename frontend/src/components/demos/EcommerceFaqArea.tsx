"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "eco-faq-1",
    question: "Which is the best ecommerce website development company in Noida?",
    answer: "A reliable ecommerce development company should offer scalable solutions, secure integrations, and user-friendly design. At Vastora Tech, we build high-performance ecommerce websites tailored to your business goals."
  },
  {
    id: "eco-faq-2",
    question: "Do you provide ecommerce website design services?",
    answer: "Yes, we offer professional ecommerce website design focused on user experience, mobile responsiveness, and conversion optimization."
  },
  {
    id: "eco-faq-3",
    question: "Do you develop ecommerce mobile apps?",
    answer: "Yes, we build feature-rich ecommerce apps for Android and iOS to help you expand your online business."
  },
  {
    id: "eco-faq-4",
    question: "What is included in ecommerce development services?",
    answer: "Our services include website design, product setup, payment gateway integration, security implementation, and performance optimization."
  },
  {
    id: "eco-faq-5",
    question: "How much does ecommerce website development cost in Noida?",
    answer: "The cost depends on features, design, and platform. Basic ecommerce websites typically start from ₹20,000–₹50,000, while advanced or custom solutions cost more."
  },
  {
    id: "eco-faq-6",
    question: "How long does it take to develop an ecommerce website?",
    answer: "A standard ecommerce website usually takes 3–5 weeks. More complex or custom platforms may take longer based on features and integrations."
  },
  {
    id: "eco-faq-7",
    question: "Will my ecommerce website be SEO-friendly and mobile responsive?",
    answer: "Yes, all our ecommerce websites are SEO-friendly, fast-loading, and fully responsive across mobile, tablet, and desktop devices."
  },
  {
    id: "eco-faq-8",
    question: "Do you provide support after website development?",
    answer: "Yes, we offer ongoing support and maintenance to ensure your ecommerce website runs smoothly and stays updated."
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
