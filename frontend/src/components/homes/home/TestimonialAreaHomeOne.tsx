"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import testimonial_data from "@/data/tptestimonial-data";
import testi from "@/assets/img/logo/testi.png"

// Fresh slider settings
const sliderSettings: Settings = {
  fade: false,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 1000,
  cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        speed: 800,
      },
    },
  ],
};

type testimonial_content_type = {
  title: string;
  sm_info: string;
}

const testimonial_content: testimonial_content_type = {
  title: "Client love us & we love them",
  sm_info: "Trusted by over 1,900 clients worldwide",
}

const { title, sm_info } = testimonial_content

const TestimonialAreaHomeOne = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <section className="textimonial-area pb-120 fix" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpsection__content text-center mb-60">
                <h2 className="tpsection__title">{title}</h2>
                <p>{sm_info}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
            {/* Main Testimonial Card */}
            <div className="fresh-testimonial-card" style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#ffffff",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {/* Background Image Layer */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                opacity: 0.15
              }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image
                    src={testi}
                    alt="testimonial background"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </div>
              </div>

              {/* Content Layer */}
              <div className="fresh-testimonial-content">
                <Slider
                  {...sliderSettings}
                  ref={sliderRef}
                  beforeChange={(current, next) => setCurrentSlide(next)}
                  className="fresh-testimonial-slider"
                >
                  {testimonial_data.map((item, index) => (
                    <div key={item.id ?? index} className="testimonial-slide-content">
                      {/* Quote Icon */}
                      <div style={{
                        fontSize: "60px",
                        color: "#1a3a5c",
                        opacity: 0.1,
                        marginBottom: "20px",
                        lineHeight: "1"
                      }}>
                        "
                      </div>

                      {/* Stars */}
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5px",
                        marginBottom: "30px"
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            style={{
                              color: "#ffb347",
                              fontSize: "20px",
                              animation: `starPop 0.5s ease-out ${i * 0.1}s both`
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p style={{
                        fontSize: "20px",
                        lineHeight: "1.8",
                        color: "#333",
                        marginBottom: "40px",
                        fontStyle: "italic",
                        fontWeight: "400",
                        maxWidth: "800px",
                        margin: "0 auto 40px",
                        padding: "0 20px"
                      }}>
                        {item.info}
                      </p>

                      {/* Author Info */}
                      <div>
                        <h4 style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#1a3a5c",
                          marginBottom: "8px"
                        }}>
                          {item.avatar_name}
                        </h4>
                        <p style={{
                          fontSize: "14px",
                          color: "#666",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          fontWeight: "500"
                        }}>
                          {item.job_title}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Navigation Controls */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              marginTop: "40px",
              position: "relative",
              zIndex: 2
            }}>
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "2px solid #1a3a5c",
                  background: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1a3a5c";
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(26, 58, 92, 0.3)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.color = "#1a3a5c";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Slide Indicator */}
              <div style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                padding: "8px 20px",
                background: "rgba(26, 58, 92, 0.05)",
                borderRadius: "25px"
              }}>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#1a3a5c", minWidth: "20px" }}>
                  {currentSlide + 1}
                </span>
                <span style={{ color: "#999", fontSize: "14px" }}>/</span>
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#666", minWidth: "20px" }}>
                  {testimonial_data.length}
                </span>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "2px solid #1a3a5c",
                  background: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1a3a5c";
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(26, 58, 92, 0.3)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.color = "#1a3a5c";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Fresh Animated Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes starPop {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.3);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fresh-testimonial-slider {
            width: 100%;
          }

          .fresh-testimonial-content {
            position: relative;
            z-index: 2;
            width: 100%;
            padding: 60px 40px;
            text-align: center;
          }

          .fresh-testimonial-slider .slick-list {
            overflow: visible;
          }

          .fresh-testimonial-slider .slick-slide {
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
          }

          .fresh-testimonial-slider .slick-slide.slick-active {
            opacity: 1;
            animation: slideIn 0.8s ease-out;
          }

          .testimonial-slide-content {
            padding: 20px;
            animation: slideIn 0.8s ease-out;
          }

          .fresh-testimonial-slider .slick-dots {
            bottom: -50px;
            display: flex !important;
            justify-content: center;
            gap: 10px;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .fresh-testimonial-slider .slick-dots li {
            width: 12px;
            height: 12px;
            margin: 0;
          }

          .fresh-testimonial-slider .slick-dots li button {
            width: 12px;
            height: 12px;
            padding: 0;
            border-radius: 50%;
            border: 2px solid #1a3a5c;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
          }

          .fresh-testimonial-slider .slick-dots li button:before {
            display: none;
          }

          .fresh-testimonial-slider .slick-dots li.slick-active button {
            background: #1a3a5c;
            transform: scale(1.2);
          }

          .fresh-testimonial-slider .slick-dots li button:hover {
            background: #1a3a5c;
            opacity: 0.7;
            transform: scale(1.1);
          }

          .fresh-testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .fresh-testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 768px) {
            .fresh-testimonial-card {
              min-height: 400px;
            }
            
            .fresh-testimonial-content {
              padding: 20px 10px;
            }

            .testimonial-slide-content p {
              font-size: 18px !important;
            }
          }
        `}} />
      </section>
    </>
  )
}

export default TestimonialAreaHomeOne
