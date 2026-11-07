"use client";
import Link from "next/link";
import Slider from "react-slick";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import HeroLangIcon from "@/svg/home-5-icons/HeroLangIcon";
import LeftBG from "@/assets/img/shape/banner-5-shape-1.png";
import ArrowPlane from "@/assets/img/shape/banner-5-shape-10.png";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; // Only if needed

import banner_img1 from "@/assets/img/banner/banner_mobile.png";
import banner_img2 from "@/assets/img/banner/banner_home.png";

import banner_shape_1 from "@/assets/img/shape/banner-5-shape-7.png";
import banner_shape_2 from "@/assets/img/shape/banner-5-shape-2.png";
import banner_shape_3 from "@/assets/img/shape/banner-5-shape-3.png";
import banner_shape_4 from "@/assets/img/shape/banner-5-shape-4.png";
import banner_shape_5 from "@/assets/img/shape/banner-5-shape-5.png";
import banner_shape_6 from "@/assets/img/shape/banner-5-shape-6.png";
// import banner_shape_7 from "@/assets/img/shape/banner-5-shape-8.png";
import banner_shape_8 from "@/assets/img/shape/banner-5-shape-9.png";

import brand_img_1 from "@/assets/img/brand/brand-5-1.png";
import brand_img_2 from "@/assets/img/brand/brand-5-2.png";
import brand_img_3 from "@/assets/img/brand/brand-5-3.png";
import brand_img_4 from "@/assets/img/brand/brand-5-4.png";
import brand_img_5 from "@/assets/img/brand/brand-5-5.png";
import brand_img_6 from "@/assets/img/brand/brand-5-6.png";

interface banner_shapes_type {
  id: number;
  img: StaticImageData;
  cls: string;
}
const banner_shapes: banner_shapes_type[] = [
  { id: 1, img: banner_shape_1, cls: "one d-none d-lg-block" },
  { id: 2, img: banner_shape_2, cls: "two" },
  { id: 3, img: banner_shape_3, cls: "three" },
  { id: 4, img: banner_shape_4, cls: "four" },
  { id: 5, img: banner_shape_5, cls: "five" },
  { id: 6, img: banner_shape_6, cls: "six" },
  // { id: 7, img: banner_shape_7, cls: "seven" },
  { id: 8, img: banner_shape_8, cls: "eight" },
];

type brands_type = StaticImageData[];
const brands: brands_type = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
];

const setting = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
import HeroVisualEcosystem from "./HeroVisualEcosystem";
import InteractiveHeroHeading from "./InteractiveHeroHeading";
import HeroFallingStars from "./HeroFallingStars";
import { ShieldCheck, Zap, Headphones, Star } from "lucide-react";
import avatar1 from "@/assets/img/team/team1.jpeg";
import avatar2 from "@/assets/img/team/team2.jpeg";
import avatar3 from "@/assets/img/team/team-5.jpeg";
import avatar4 from "@/assets/img/team/team-6.jpg";

type hero_content_type = {
  sm_info: JSX.Element;
  brand_title: string;
};
const hero_content_home_5: hero_content_type = {
  sm_info: (
    <>
      Get your{" "}
      <span className="para-interactive-word">custom e-commerce website</span> with a{" "}
      <span className="para-interactive-word">smart admin panel &amp; dashboard</span> from the{" "}
      <span className="para-interactive-word">best ecommerce website development company in India</span>. Build a{" "}
      <span className="para-interactive-word">secure and scalable platform</span> to grow your online business and improve customer experience.
    </>
  ),
  brand_title: "Trusted by the big ones, loved by everyone",
};
const { sm_info } = hero_content_home_5;

const HeroBannerHomeFive = () => {
  return (
    <>
      <MouseParallaxContainer>
        <section className="banner-area banner-brand fix">
          {/* Subtle Falling / Shooting Stars Animation */}
          <HeroFallingStars />

          <div className="banner-5 p-relative">
            <div className="banner-5-content-shape">
              <div className="banner-5-content-shape-one">
                <MouseParallaxChild factorX={0.02} factorY={0.02}>
                  <Image src={ArrowPlane} alt="Vastora Tech banner shape" priority />
                </MouseParallaxChild>
              </div>

              <div className="banner-5-content-shape-two">
                <i>
                  <MouseParallaxChild factorX={0.02} factorY={0.02}>
                    <HeroLangIcon />
                  </MouseParallaxChild>
                </i>
              </div>
            </div>
            <div className="container custom-container">
              <div className="banner-5-shape">
                <div className="banner-5-shape-one">
                  <Image src={LeftBG} alt="Vastora Tech background shape" priority />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 order-1 order-lg-1">
                  <div className="banner-5-content p-relative">
                    {/* Top Pill Badge */}
                    <div className="hero-top-badge">
                      <span className="badge-dot" />
                      <span className="badge-text">E-COMMERCE EXPERTS</span>
                    </div>

                    {/* Hero Heading with Typewriter and Brush Stroke + Integrated Story Description */}
                    <InteractiveHeroHeading smInfo={sm_info} />


                    {/* CTA Button + 3 Feature Badges */}
                    <div className="hero-cta-features-wrap">
                      <div className="banner-5-btn">
                        <Link
                          className="enhanced-hero-cta-btn light-blue-btn"
                          href="/product/e-commerce-solutions"
                          aria-label="Get Started with Vastora Tech E-commerce Solutions"
                        >
                          <span className="btn-label-text">Get Started</span>
                          <span className="btn-divider" aria-hidden="true" />
                          <span className="btn-icon-box" aria-hidden="true">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </span>
                        </Link>
                      </div>

                      <div className="hero-cta-divider" aria-hidden="true" />

                      <div className="hero-value-badges">
                        <div className="value-badge-item">
                          <ShieldCheck size={18} className="badge-ico" />
                          <span className="badge-title">Secure &amp; Scalable</span>
                        </div>
                        <div className="value-badge-item">
                          <Zap size={18} className="badge-ico" />
                          <span className="badge-title">Fast Delivery</span>
                        </div>
                        <div className="value-badge-item">
                          <Headphones size={18} className="badge-ico" />
                          <span className="badge-title">Ongoing Support</span>
                        </div>
                      </div>
                    </div>

                    {/* Social Proof & Rating Bar */}
                    <div className="hero-social-proof-strip">
                      <div className="proof-avatars-group">
                        <Image src={avatar1} alt="Client" width={34} height={34} className="avatar-img" />
                        <Image src={avatar2} alt="Client" width={34} height={34} className="avatar-img" />
                        <Image src={avatar3} alt="Client" width={34} height={34} className="avatar-img" />
                        <Image src={avatar4} alt="Client" width={34} height={34} className="avatar-img" />
                        <span className="avatar-count-pill">500+</span>
                      </div>
                      <div className="proof-text-wrap">
                        <span className="proof-heading">Trusted by 500+ businesses</span>
                        <div className="proof-rating-stars">
                          <div className="stars-icons">
                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                            <Star size={13} fill="#f59e0b" color="#f59e0b" />
                          </div>
                          <span className="rating-score">4.9</span>
                          <span className="reviews-label">(1.8k reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-2 order-lg-2">
                  <HeroVisualEcosystem />
                </div>
              </div>
            </div>
          </div>
        </section>
      </MouseParallaxContainer>
    </>
  );
};

export default HeroBannerHomeFive;


