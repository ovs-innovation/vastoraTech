"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "webdev-faq-1",
    question: "Which is the top web development company in Noida?",
    answer: "Vastora Tech is a trusted web development company in Noida, known for delivering high-quality, SEO-friendly, and performance-driven websites tailored to different business needs."
  },
  {
    id: "webdev-faq-2",
    question: "Do you offer business website development services?",
    answer: "Yes, we provide complete website development services, including design, development, and optimization to help you build a strong online presence."
  },
  {
    id: "webdev-faq-3",
    question: "Are you a website designing company in Noida?",
    answer: "Yes, we offer modern, user-friendly, and responsive website design services that improve user experience and engagement."
  },
  {
    id: "webdev-faq-4",
    question: "Do you provide website development for small businesses?",
    answer: "Yes, we specialize in building affordable and scalable websites for small businesses and startups, tailored to your goals and budget."
  },
  {
    id: "webdev-faq-5",
    question: "What makes you the best web design company?",
    answer: "We focus on clean design, fast performance, SEO optimization, and user experience to create websites that not only look good but also deliver results."
  },
  {
    id: "webdev-faq-6",
    question: "How much does website development cost?",
    answer: "The cost depends on your requirements, features, and design. Basic websites typically start from ₹10,000–₹30,000, while advanced or custom websites may cost more."
  },
  {
    id: "webdev-faq-7",
    question: "How long does it take to develop a website?",
    answer: "A standard business website usually takes 1–3 weeks. More complex or custom projects may take longer depending on features and requirements."
  },
  {
    id: "webdev-faq-8",
    question: "Will my website be SEO-friendly and mobile responsive?",
    answer: "Yes, all our websites are SEO-friendly, fast-loading, and fully responsive across mobile, tablet, and desktop devices."
  }
];

const WebDevFaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("webdev-faq-1");

  const handleToggle = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="faq-area pb-120 pt-100 bg-gray-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title-wrapper text-center mb-60">
              <span className="section-subtitle">FAQ</span>
              <h2 className="section-title">Website Development FAQs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="faq-wrapper">
              <div className="accordion" id="webDevFaqAccordion">
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
                      data-bs-parent="#webDevFaqAccordion"
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

export default WebDevFaqArea;
