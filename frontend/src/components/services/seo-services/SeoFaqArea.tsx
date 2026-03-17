"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "seo-faq-1",
    question: "What are SEO services?",
    answer: "SEO services are strategies used to improve a website’s ranking on search engines like Google. These services include keyword optimization, content improvements, and technical updates."
  },
  {
    id: "seo-faq-2",
    question: "Why is SEO important for businesses?",
    answer: "SEO helps businesses appear in search results when people look for products or services online. This increases website traffic and potential customers."
  },
  {
    id: "seo-faq-3",
    question: "What is SEO in eCommerce?",
    answer: "SEO in eCommerce focuses on optimizing online stores so product pages and categories appear in search results and attract buyers."
  },
  {
    id: "seo-faq-4",
    question: "Do you provide SEO service in Noida?",
    answer: "Yes, we provide SEO service in Noida for businesses that want to improve their website rankings and reach more customers online."
  },
  {
    id: "seo-faq-5",
    question: "Can I find SEO services near me through your company?",
    answer: "Yes, we offer SEO services near me for businesses looking for reliable search engine optimization support."
  },
  {
    id: "seo-faq-6",
    question: "What does an SEO agency near me do?",
    answer: "An SEO agency near me helps businesses improve their search engine rankings through website optimization, keyword research, and content strategies."
  },
  {
    id: "seo-faq-7",
    question: "How do I choose the best SEO services in Noida?",
    answer: "To choose the best SEO services in Noida, check the agency’s experience, past results, and SEO strategy before making a decision."
  },
  {
    id: "seo-faq-8",
    question: "What do search engine optimization agencies focus on?",
    answer: "Search engine optimization agencies focus on improving website visibility, increasing organic traffic, and helping businesses rank higher in search engines."
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
