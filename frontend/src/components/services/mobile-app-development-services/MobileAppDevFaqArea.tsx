"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "mobile-faq-1",
    question: "What does a mobile app development company do?",
    answer: "A mobile app development company designs and builds mobile applications for businesses and startups."
  },
  {
    id: "mobile-faq-2",
    question: "What services are included in mobile app development services?",
    answer: "Mobile app development services include app design, development, testing, and launch."
  },
  {
    id: "mobile-faq-3",
    question: "Do you offer mobile app development company in Noida services?",
    answer: "Yes, we work as a mobile app development company in Noida and build apps for businesses across different industries."
  },
  {
    id: "mobile-faq-4",
    question: "What is a web app development service?",
    answer: "A web app development service focuses on building web-based applications that work through a browser."
  },
  {
    id: "mobile-faq-5",
    question: "How do I choose the best app development agency?",
    answer: "Look for experience, a strong portfolio, and developers who understand your business goals."
  },
  {
    id: "mobile-faq-6",
    question: "Do you work as a website app development agency?",
    answer: "Yes, our team works as a website app development agency creating both websites and mobile applications."
  },
  {
    id: "mobile-faq-7",
    question: "Can I hire mobile app developers near me?",
    answer: "Yes, businesses looking for mobile app developers near me can work with our experienced development team."
  },
  {
    id: "mobile-faq-8",
    question: "What is mobile commerce app development?",
    answer: "Mobile commerce app development focuses on creating mobile apps for online shopping and digital payments."
  }
];

const MobileAppDevFaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("mobile-faq-1");

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
              <h2 className="section-title">Mobile App Development FAQs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="faq-wrapper">
              <div className="accordion" id="mobileFaqAccordion">
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
                      data-bs-parent="#mobileFaqAccordion"
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

export default MobileAppDevFaqArea;
