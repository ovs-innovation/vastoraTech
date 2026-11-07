"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import portfolio_data_2 from "@/data/portfolio-data-2";

const categories = [
  "All",
  "E-commerce",
  "Real Estate",
  "Engineering",
  "Travel",
  "Hotel Booking",
  "Health",
];

interface ProjectAreaHomeFiveProps {
  style?: boolean;
}

const ProjectAreaHomeFive: React.FC<ProjectAreaHomeFiveProps> = ({ style }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return portfolio_data_2;
    }
    return portfolio_data_2.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <section className="handpicked-projects-section" id="portfolio-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header-row">
          <div className="projects-header-left">
            <div className="projects-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Selected Client Portfolio</span>
            </div>
            <h2 className="projects-title">
              Our Handpicked Projects,{" "}
              <span className="gradient-highlight">Built for Industry Impact.</span>
            </h2>
            <p className="projects-desc">
              We are committed to quality, reliability, and customer satisfaction in
              every digital product, website, and enterprise platform we engineer.
            </p>
          </div>

          <div className="projects-header-right">
            <Link href="/portfolio" className="view-all-projects-btn">
              <span>View all Projects</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>

            <div className="swiper-nav-buttons">
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous project"
              >
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next project"
              >
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiper Carousel */}
        <div className="projects-swiper-container">
          <Swiper
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={filteredProjects.length > 3}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {filteredProjects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="project-card-wrapper">
                  {/* Thumbnail Frame */}
                  <div className="project-thumbnail-box">
                    <Image
                      src={item.img}
                      alt={item.title}
                      placeholder="blur"
                    />
                    <span className="project-category-badge">{item.category}</span>
                    <span className="project-live-indicator">
                      <span className="live-pulse"></span>
                      Live
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="project-card-body">
                    <div className="project-card-header">
                      <h3 className="project-card-title">
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                        aria-label={`Open ${item.title}`}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </Link>
                    </div>

                    <p className="project-card-desc">{item.sm_des}</p>

                    <div className="project-card-footer">
                      <div className="project-tags-list">
                        {item.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="project-tag-item">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-view-link"
                      >
                        Visit Site <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
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

export default ProjectAreaHomeFive;
