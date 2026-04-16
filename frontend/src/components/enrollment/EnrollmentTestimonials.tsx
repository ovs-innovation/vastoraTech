
import React from 'react';
import { enrollmentContent as content } from "@/data/enrollment-data";

const EnrollmentTestimonials: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-bottom py-5 py-lg-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <div className="position-relative d-inline-block">
            <h2 className="h1 fw-bold mb-3 position-relative">
              What Our Clients Say
              <div className="position-absolute bottom-0 start-50 translate-middle-x w-25 h-1 rounded-pill" style={{ backgroundColor: "#296CB3" }}></div>
            </h2>
          </div>
          <p className="lead text-muted fs-5">
            Real feedback from businesses we've helped grow online
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
            <div className="d-flex align-items-center">
              <i className="bi bi-star-fill text-warning fs-5 me-1"></i>
              <span className="fw-semibold text-dark">4.9</span>
            </div>
            <span className="text-muted">•</span>
            <span className="text-muted">500+ Happy Clients</span>
            <span className="text-muted">•</span>
            <span className="text-muted">8+ Years Experience</span>
          </div>
        </div>

        <div className="row g-4">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="card h-100 border-0 shadow-lg hover-shadow transition-all position-relative overflow-hidden testimonial-card"
                style={{
                  borderRadius: "20px",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transform: "translateY(0)",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 m-4 opacity-20 quote-icon"
                  style={{ zIndex: 0 }}
                >
                  <i className="bi bi-quote" style={{ fontSize: "3rem", color: "#296CB3" }}></i>
                </div>

                <div className="card-body p-4 p-lg-5 position-relative" style={{ zIndex: 1 }}>
                  <div className="d-flex justify-content-center mb-4 rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning fs-5 me-1" style={{ filter: "drop-shadow(0 2px 4px rgba(255, 193, 7, 0.3))" }}></i>
                    ))}
                  </div>

                  <div className="text-center mb-4">
                    <p className="text-dark fst-italic fs-6 lh-base mb-0 position-relative" style={{ fontFamily: "Georgia, serif", lineHeight: "1.8" }}>
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <div
                        className="bg-gradient-to-br rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-4 me-3 shadow-lg position-relative client-avatar"
                        style={{
                          width: "70px",
                          height: "70px",
                          background: "linear-gradient(135deg, #296CB3 0%, #4a7cbd 100%)",
                          border: "4px solid white",
                        }}
                      >
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="text-start">
                        <h5 className="mb-1 fw-bold text-dark">{testimonial.name}</h5>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-2" style={{ color: "#296CB3" }}></i>
                          <span className="text-muted fw-medium">{testimonial.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-inline-flex align-items-center bg-success bg-opacity-10 text-success px-3 py-1 rounded-pill small fw-semibold verification-badge">
                      <i className="bi bi-patch-check-fill me-2"></i>
                      Verified Client
                    </div>
                  </div>
                </div>
                <div className="position-absolute bottom-0 start-0 w-100 h-3" style={{ background: "linear-gradient(90deg, #296CB3, #4a7cbd)", height: "4px" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentTestimonials;
