"use client";
import { useState } from "react";
import faq_data_one from "@/data/faq-data";

interface FaqAreaHomeTwoProps {
  style?: boolean;
}

const FaqAreaHomeTwo = ({ style }: FaqAreaHomeTwoProps) => {
  const [activeIndex, setActiveIndex] = useState<string | null>("Three");

  const handleToggle = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <>
      <section className={`faq-area ${style ? "pb-120" : "pt-120 pb-120"}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="faq-wrapper">
                <div className="accordion" id="accordionExample">
                  {faq_data_one.map((item, i) => (
                    <div key={i} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${activeIndex === item.id ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => handleToggle(item.id || "")}
                          aria-expanded={activeIndex === item.id}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.ques}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${activeIndex === item.id ? "show" : ""}`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {item.ans}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAreaHomeTwo;

