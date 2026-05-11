"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "smm-faq-1",
    question: "What are social media marketing services in Noida?",
    answer: "Social media marketing services in Noida include content creation, account management, paid advertising, and audience targeting to help businesses grow on platforms like Instagram, Facebook, and LinkedIn."
  },
  {
    id: "smm-faq-2",
    question: "How do I choose the best social media marketing agency?",
    answer: "Choose an agency that offers clear strategies, proven results, transparent reporting, and customized campaigns aligned with your business goals."
  },
  {
    id: "smm-faq-3",
    question: "Is social media marketing useful for small businesses?",
    answer: "Yes, social media marketing is highly effective for small businesses. It helps increase brand awareness, generate leads, and connect directly with your target audience at a lower cost."
  },
  {
    id: "smm-faq-4",
    question: "What is social media in marketing?",
    answer: "Social media marketing is the process of promoting products, services, or brands through platforms like Facebook, Instagram, LinkedIn, and X to increase brand awareness, engage customers, and drive sales. "
  },
  {
    id: "smm-faq-5",
    question: "What is included in social media marketing services?",
    answer: "Services typically include content planning, post design, caption writing, ad campaign management, audience targeting, and performance tracking."
  },
  {
    id: "smm-faq-6",
    question: "Do you provide social media marketing services in Noida for all industries?",
    answer: "Yes, our services are suitable for startups, small businesses, and established brands across various industries."
  },
  {
    id: "smm-faq-7",
    question: "What makes a good social media agency in Noida?",
    answer: "A good agency focuses on strategy, creativity, consistency, and data-driven results rather than just posting content."
  },
  {
    id: "smm-faq-8",
    question: "How long does it take to see results from social media marketing?",
    answer: "Initial engagement can be seen within a few weeks, but consistent growth and lead generation usually take 2–3 months with the right strategy."
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
