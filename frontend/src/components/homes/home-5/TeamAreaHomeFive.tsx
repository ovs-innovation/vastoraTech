"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import team_data from "@/data/team";

interface TeamAreaHomeFiveProps {
  style?: boolean;
}

const TeamAreaHomeFive: React.FC<TeamAreaHomeFiveProps> = ({ style }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="team-enhanced-section" id="team-showcase">
      <div className="team-ambient-aura"></div>

      <div className="container">
        {/* Header */}
        <div className="team-header-wrap">
          <div className="team-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">The Minds Behind Vastora</span>
          </div>
          <h2 className="team-title">
            Meet Our Team of Experts,{" "}
            <span className="gradient-highlight">Driving Digital Excellence.</span>
          </h2>
          <p className="team-desc">
            A collaborative powerhouse of full-stack engineers, cloud architects,
            and growth strategists dedicated to delivering transformative client results.
          </p>
        </div>

        {/* Carousel */}
        <div className="team-swiper-container">
          <Swiper
            modules={[Autoplay, Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={team_data.length > 4}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {team_data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="team-card-bento">
                  <div className="team-avatar-frame">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      priority={item.id === 1}
                    />
                    <span className="team-role-tag">
                      {item.id === 1 ? "Leadership" : "Expert"}
                    </span>
                  </div>

                  <h3 className="team-name">{item.name}</h3>
                  <div className="team-designation">{item.job_title}</div>

                  <div className="team-social-strip">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} LinkedIn`}
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} Twitter`}
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="mailto:vastoratech@gmail.com"
                      aria-label={`Email ${item.name}`}
                    >
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            type="button"
            className="team-nav-arrow team-arrow-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous team member"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            type="button"
            className="team-nav-arrow team-arrow-next"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next team member"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* Join CTA */}
        <div className="team-cta-row">
          <Link href="/team" className="team-join-btn">
            <span>Explore Entire Team</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamAreaHomeFive;