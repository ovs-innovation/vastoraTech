"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "seo-faq-1",
    question: "Which is the best SEO company in Noida?",
    answer: "A good SEO company focuses on data-driven strategies, transparent reporting, and long-term growth. At Vastora Tech, we help businesses improve rankings, traffic, and conversions with proven SEO techniques."
  },
  {
    id: "seo-faq-2",
    question: "What do SEO services in Noida include?",
    answer: "SEO services include keyword research, on-page optimization, technical SEO, content optimization, and link building to improve your website’s visibility on search engines like Google Search."
  },
  {
    id: "seo-faq-3",
    question: "How long does search engine optimization take to show results?",
    answer: "SEO is a long-term process. Initial improvements can be seen within 3–6 months, depending on your competition, website condition, and strategy."
  },
  {
    id: "seo-faq-4",
    question: "Do you provide search engine optimization for websites?",
    answer: "Yes, we offer complete SEO services for websites, ensuring better rankings, increased traffic, and improved user experience."
  },
  {
    id: "seo-faq-5",
    question: " What is an off-page SEO strategy?",
    answer: "Off-page SEO focuses on building high-quality backlinks, brand mentions, and online authority to improve your website’s domain strength and rankings."
  },
  {
    id: "seo-faq-6",
    question: "Why should I hire an SEO agency in Noida?",
    answer: "A local SEO agency understands the market, competition, and audience behavior, helping you achieve better results with targeted strategies."
  },
  {
    id: "seo-faq-7",
    question: "How much do SEO services cost in Noida?",
    answer: "SEO pricing depends on your goals and competition. Basic plans may start from ₹8,000–₹20,000 per month, while advanced SEO strategies cost more."
  },
  {
    id: "seo-faq-8",
    question: "Do you provide monthly SEO reports?",
    answer: "Yes, we provide detailed monthly reports with keyword rankings, traffic insights, and performance tracking to measure progress."
  }
];

const SeoFaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("seo-faq-1");

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
              <h2 className="section-title">SEO Services FAQs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="faq-wrapper">
              <div className="accordion" id="seoFaqAccordion">
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
                      data-bs-parent="#seoFaqAccordion"
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

export default SeoFaqArea;
