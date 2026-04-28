"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "mobile-faq-1",
    question: "Which is the best mobile app development company in Noida?",
    answer: "Vastora Tech is a reliable mobile app development company in Noida, known for building scalable, user-friendly, and high-performance applications tailored to business needs."
  },
  {
    id: "mobile-faq-2",
    question: "Do you offer web and app development services?",
    answer: "Yes, we are a full-service development agency offering both web and mobile app solutions to help businesses build a strong digital presence."
  },
  {
    id: "mobile-faq-3",
    question: "Do you provide iOS app development services?",
    answer: "Yes, we develop secure and high-performance apps for iPhone and iPad, ensuring a smooth user experience across devices."
  },
  {
    id: "mobile-faq-4",
    question: "What makes you a reliable app development agency?",
    answer: "We focus on user experience, modern technologies, and customized solutions to deliver apps that are both functional and scalable."
  },
  {
    id: "mobile-faq-5",
    question: "Do you have experience with different industries?",
    answer: "Yes, we have experience building apps for industries like ecommerce, healthcare, education, and startups."
  },
  {
    id: "mobile-faq-6",
    question: "What are web app development services?",
    answer: "Web app development involves creating interactive, browser-based applications that work like mobile apps without requiring installation."
  },
  {
    id: "mobile-faq-7",
    question: "CHow much does mobile app development cost in Noida?",
    answer: "The cost depends on features, platform, and complexity. Basic apps may start from ₹50,000, while advanced or custom apps may cost significantly more."
  },
  {
    id: "mobile-faq-8",
    question: "How long does it take to develop a mobile app?",
    answer: "A standard mobile app typically takes 4–8 weeks. More complex applications may take 8–12 weeks depending on features and integrations."
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
