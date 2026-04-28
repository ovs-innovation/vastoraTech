"use client";
import { useState } from "react";

const faq_home_5 = [
  {
    id: "faq-1",
    question: "What is the cost of ecommerce website development in India?",
    answer: "The cost depends on your requirements, features, and platform. A basic ecommerce website can start from ₹10,000, while advanced or custom-built solutions may cost ₹50,000 or more. We provide flexible pricing based on your business needs."
  },
  {
    id: "faq-2",
    question: "How long does it take to develop an ecommerce website?",
    answer: "A standard ecommerce website usually takes 2–4 weeks. Custom or feature-rich websites may take 4–8 weeks depending on complexity, integrations, and design requirements."
  },
  {
    id: "faq-3",
    question: "Which platform is best for ecommerce website development?",
    answer: "Popular platforms include Shopify, WooCommerce, and Magento. The right platform depends on your budget, scalability needs, and business goals."
  },
  {
    id: "faq-4",
    question: "Do you offer custom ecommerce website development?",
    answer: "Yes, we specialize in fully custom ecommerce solutions tailored to your business. From design to functionality, everything is built according to your specific requirements."
  },
  {
    id: "faq-5",
    question: " Will my ecommerce website be mobile-friendly and SEO optimized?",
    answer: "Yes, all our websites are fully responsive and optimized for search engines. This ensures better user experience, higher rankings, and improved visibility on Google."
  },
  {
    id: "faq-6",
    question: "Do you integrate payment gateways?",
    answer: "Yes, we integrate secure payment gateways such as Razorpay, PayU, and Stripe for smooth and secure transactions."
  },
  {
    id: "faq-7",
    question: "Can I manage my ecommerce website after development?",
    answer: "Absolutely. We provide an easy-to-use admin panel so you can manage products, orders, and customers without any technical knowledge."
  },
  {
    id: "faq-8",
    question: "Do you provide support and maintenance?",
    answer: "Yes, we offer ongoing support and maintenance to keep your website secure, updated, and running smoothly."
  },
  // {
  //   id: "faq-9",
  //   question: "Can a digital marketing agency help grow my business?",
  //   answer: "Working with a professional digital marketing agency can help your business reach more potential customers online. Through SEO, advertising, and content marketing, digital marketing services can increase website traffic, leads, and sales."
  // }
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
