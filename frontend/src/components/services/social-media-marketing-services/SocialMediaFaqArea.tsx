"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "smm-faq-1",
    question: "What does a social media marketing agency do?",
    answer: "A social media marketing agency helps businesses promote their brand on platforms like Facebook, Instagram, and LinkedIn through content, ads, and account management."
  },
  {
    id: "smm-faq-2",
    question: "Why is social media important in marketing?",
    answer: "Social media in marketing helps businesses reach their audience, build brand awareness, and connect with potential customers online."
  },
  {
    id: "smm-faq-3",
    question: "What services do social media management agencies provide?",
    answer: "Social media management agencies provide content creation, post scheduling, account management, and social media advertising."
  },
  {
    id: "smm-faq-4",
    question: "How do I choose the best social media agency?",
    answer: "To choose the best social media agency, check their experience, past work, and ability to create effective social media strategies."
  },
  {
    id: "smm-faq-5",
    question: "Do you work as an SMM company in Noida?",
    answer: "Yes, we provide professional social media marketing services as an SMM company in Noida for businesses looking to grow online."
  },
  {
    id: "smm-faq-6",
    question: "Do you provide services for businesses searching for an SMM company near me?",
    answer: "Yes, we help businesses looking for an SMM company near me with complete social media marketing and management services."
  },
  {
    id: "smm-faq-7",
    question: "What platforms do social marketing agencies manage?",
    answer: "A social marketing agency usually manages platforms like Facebook, Instagram, LinkedIn, and Twitter."
  },
  {
    id: "smm-faq-8",
    question: "How can the best social media marketing agency help my business?",
    answer: "The best social media marketing agency helps increase brand visibility, engagement, and customer reach through strategic campaigns."
  }
];

const SocialMediaFaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("smm-faq-1");

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
              <h2 className="section-title">Social Media Marketing FAQs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="faq-wrapper">
              <div className="accordion" id="smmFaqAccordion">
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
                      data-bs-parent="#smmFaqAccordion"
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

export default SocialMediaFaqArea;
