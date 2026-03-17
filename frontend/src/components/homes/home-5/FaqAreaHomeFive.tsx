"use client";
import { useState } from "react";

const faq_home_5 = [
  {
    id: "faq-1",
    question: "What does a web development company do?",
    answer: "A web development company helps businesses create and manage their online presence. This includes website design and development, building responsive websites, improving performance, and making sure the website works smoothly on all devices."
  },
  {
    id: "faq-2",
    question: "Do you offer website design and development services?",
    answer: "Yes, we provide complete website design and development solutions for businesses. Our team focuses on creating modern, user-friendly websites that look professional and perform well on both desktop and mobile devices."
  },
  {
    id: "faq-3",
    question: "Do you provide eCommerce website development?",
    answer: "Yes, we specialize in eCommerce website development for businesses that want to sell products or services online. Our team builds secure and scalable online stores with easy product management, payment gateway integration, and a smooth shopping experience."
  },
  {
    id: "faq-4",
    question: "Are you a website development company in India?",
    answer: "Yes, we work as a website development company in India and provide professional web design and development services to businesses looking for reliable and scalable website solutions."
  },
  {
    id: "faq-5",
    question: "What digital marketing services do you offer?",
    answer: "Our digital marketing services help businesses increase their online visibility and attract more customers. We provide services such as search engine optimization, content marketing, social media marketing, and performance marketing strategies."
  },
  {
    id: "faq-6",
    question: "Do you provide SEO services for websites?",
    answer: "Yes, we are an experienced SEO services company that helps businesses improve their rankings on search engines. Our SEO strategies focus on increasing organic traffic and improving website visibility."
  },
  {
    id: "faq-7",
    question: "Are you a digital marketing agency in Noida?",
    answer: "Yes, we operate as a digital marketing agency in Noida and help businesses grow through effective digital marketing strategies, including SEO, social media marketing, and online advertising."
  },
  {
    id: "faq-8",
    question: "Do you provide digital marketing services near me?",
    answer: "Yes, our team provides digital marketing services near me for businesses looking to improve their online presence. We work with companies from different industries to help them reach their target audience and grow their business."
  },
  {
    id: "faq-9",
    question: "Can a digital marketing agency help grow my business?",
    answer: "Working with a professional digital marketing agency can help your business reach more potential customers online. Through SEO, advertising, and content marketing, digital marketing services can increase website traffic, leads, and sales."
  }
];

const FaqAreaHomeFive = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>("faq-1");

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
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="faq-wrapper">
              <div className="accordion" id="faqHomeFiveAccordion">
                {faq_home_5.map((item, i) => (
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
                      data-bs-parent="#faqHomeFiveAccordion"
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

export default FaqAreaHomeFive;
