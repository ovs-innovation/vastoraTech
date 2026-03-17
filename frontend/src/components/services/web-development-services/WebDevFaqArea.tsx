"use client";
import { useState } from "react";

const faq_data = [
  {
    id: "webdev-faq-1",
    question: "What services does a website development company provide?",
    answer: "A website development company provides website development services such as building business websites, creating responsive designs, developing custom features, and maintaining websites to ensure they perform well."
  },
  {
    id: "webdev-faq-2",
    question: "What is the difference between web design and web development?",
    answer: "Web design focuses on the visual layout and user experience of a website, while web development involves building the technical structure and functionality. Together, web design and web development services create a complete website solution."
  },
  {
    id: "webdev-faq-3",
    question: "How do I choose the best website development company?",
    answer: "When choosing the best website development company in Noida or any other location, look for experience, portfolio quality, client reviews, and the ability to deliver custom solutions that match your business goals."
  },
  {
    id: "webdev-faq-4",
    question: "Do you offer website development company near me services?",
    answer: "Yes, our team works with businesses looking for a website development company near me. We provide professional development services and support for companies that want reliable website solutions."
  },
  {
    id: "webdev-faq-5",
    question: "What does a web development agency do?",
    answer: "A web development agency helps businesses create, design, and manage websites. This includes planning the website structure, developing features, optimizing performance, and ensuring the website works smoothly."
  },
  {
    id: "webdev-faq-6",
    question: "Why are professional web developers important for a business website?",
    answer: "Professional web developers ensure your website is secure, fast, and optimized for users. Working with experienced developers helps businesses create websites that perform well and provide a better experience for visitors."
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
