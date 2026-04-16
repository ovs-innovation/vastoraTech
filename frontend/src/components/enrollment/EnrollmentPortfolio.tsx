
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { enrollmentContent as content } from "@/data/enrollment-data";

const EnrollmentPortfolio: React.FC = () => {
  return (
    <section className="bg-light py-5 py-lg-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h2 mb-3">Our Work Portfolio</h2>
          <p className="lead text-muted">
            See how we've transformed businesses with our digital marketing expertise
          </p>
        </div>
        <div className="position-relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            loop={true}
            grabCursor={true}
            draggable={true}
            className="portfolio-swiper"
          >
            {content.portfolio.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="card border-0 shadow-lg h-100 overflow-hidden hover-shadow transition-all">
                  <div className="position-relative overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={200}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge px-3 py-2 rounded-pill fw-semibold" style={{ backgroundColor: "#296CB3" }}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold text-dark mb-3">{item.title}</h3>
                    <p className="text-muted small mb-4 lh-base">{item.sm_des}</p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="badge bg-light text-dark px-3 py-2 rounded-pill small">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm w-100 d-inline-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "#296CB3", borderColor: "#296CB3", color: "white" }}
                    >
                      <i className="bi bi-box-arrow-up-right me-2"></i>
                      Visit Website
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentPortfolio;
