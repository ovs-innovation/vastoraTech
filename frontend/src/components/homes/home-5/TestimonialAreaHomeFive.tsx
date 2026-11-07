"use client";

import React, { useState } from "react";
import testimonial_data from "@/data/tptestimonial-data";

interface TestimonialAreaHomeFiveProps {
  style?: boolean;
}

const TestimonialAreaHomeFive: React.FC<TestimonialAreaHomeFiveProps> = ({ style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = testimonial_data[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonial_data.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonial_data.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="testimonials-enhanced-section" id="client-testimonials">
      <div className="container">
        {/* Header */}
        <div className="testi-header-wrap">
          <div className="testi-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Client Success Stories</span>
          </div>
          <h2 className="testi-title">
            Clients Love Us,{" "}
            <span className="gradient-highlight">& We Love Empowering Them.</span>
          </h2>
          <p className="testi-desc">
            Trusted by over 1,900 companies worldwide to build high-converting
            e-commerce storefronts and dependable enterprise web systems.
          </p>
        </div>

        {/* Master Testimonial Card */}
        <div className="testi-stage-container">
          <div className="testi-master-card">
            <div className="testi-quote-mark">
              <i className="fa-solid fa-quote-left"></i>
            </div>

            <div className="testi-stars-row">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>

            <p className="testi-quote-text">"{currentItem.info}"</p>

            <div className="testi-author-block">
              <div className="author-name">{currentItem.avatar_name}</div>
              <div className="author-role">{currentItem.job_title}</div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="testi-controls-bar">
            <button
              type="button"
              className="testi-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>

            <div className="testi-counter-pill">
              0{currentIndex + 1} / 0{testimonial_data.length}
            </div>

            <button
              type="button"
              className="testi-arrow-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaHomeFive;