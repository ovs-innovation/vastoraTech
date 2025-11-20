"use client";
import Image from "next/image";
import Slider from "react-slick";
import Wavify from "react-wavify";
import type { CustomArrowProps, Settings } from "react-slick";
// brands images
import brand_log_1 from "@/assets/img/brand/brand1.png";
import brand_log_2 from "@/assets/img/brand/brand2.png";
import brand_log_3 from "@/assets/img/brand/brand3.png";
import brand_log_4 from "@/assets/img/brand/brand4.png";
import brand_log_5 from "@/assets/img/brand/brand5.png";
import brand_log_6 from "@/assets/img/brand/brand6.png";
import brand_log_7 from "@/assets/img/brand/brand7.png";
import brand_log_8 from "@/assets/img/brand/brand8.png";
import brand_log_9 from "@/assets/img/brand/brand9.png";
import brand_log_10 from "@/assets/img/brand/brand10.png";
import brand_log_11 from "@/assets/img/brand/brand11.png";
import brand_log_12 from "@/assets/img/brand/brand12.png";
import brand_log_13 from "@/assets/img/brand/brand13.png";
import brand_log_14 from "@/assets/img/brand/brand14.png";
import brand_log_15 from "@/assets/img/brand/brand15.png";
import brand_log_16 from "@/assets/img/brand/brand16.png";
import brand_log_17 from "@/assets/img/brand/brand17.png";
import brand_log_18 from "@/assets/img/brand/brand18.png";
import brand_log_19 from "@/assets/img/brand/brand19.png";
import brand_log_20 from "@/assets/img/brand/brand20.png";
import brand_log_21 from "@/assets/img/brand/brand21.png";
import brand_log_22 from "@/assets/img/brand/brand22.png";
import brand_log_23 from "@/assets/img/brand/brand23.png";
import brand_log_24 from "@/assets/img/brand/brand24.png";
import brand_log_25 from "@/assets/img/brand/brand25.png";
import brand_log_26 from "@/assets/img/brand/brand26.png";
import brand_log_27 from "@/assets/img/brand/brand27.png";
import brand_log_28 from "@/assets/img/brand/brand28.png";
import brand_log_29 from "@/assets/img/brand/brand29.png";
import brand_log_30 from "@/assets/img/brand/brand30.png";
import brand_log_31 from "@/assets/img/brand/brand31.png";
import brand_log_32 from "@/assets/img/brand/brand32.png";
import brand_log_33 from "@/assets/img/brand/brand33.png";
import brand_log_34 from "@/assets/img/brand/brand34.png";

const brands_images = [
  brand_log_1,
  brand_log_2,
  brand_log_3,
  brand_log_4,
  brand_log_5,
  brand_log_6,
  brand_log_7,
  brand_log_8,
  brand_log_9,
  brand_log_10,
  brand_log_11,
  brand_log_12,
  brand_log_13,
  brand_log_14,
  brand_log_15,
  brand_log_16,
  brand_log_17,
  brand_log_18,
  brand_log_19,
  brand_log_20,
  brand_log_21,
  brand_log_22,
  brand_log_23,
  brand_log_24,
  brand_log_25,
  brand_log_26,
  brand_log_27,
  brand_log_28,
  brand_log_29,
  brand_log_30,
  brand_log_31,
  brand_log_32,
  brand_log_33,
  brand_log_34,
];

type ArrowDirection = "next" | "prev";

const ArrowButton = ({ direction, onClick }: CustomArrowProps & { direction: ArrowDirection }) => (
  <button
    type="button"
    aria-label={direction === "next" ? "Next brand" : "Previous brand"}
    className={`brand-attractor__arrow brand-attractor__arrow--${direction}`}
    onClick={onClick}
  >
    <span />
  </button>
);

const labelPool = ["FinTech", "Commerce", "Climate", "Product Studio", "AI Labs", "Marketplace"];
const badgePool = ["Series B", "Enterprise", "Scale Up", "Bootstrapped", "Public", "Start-up"];
const regionPool = ["San Francisco", "Singapore", "Berlin", "Toronto", "Sydney", "Dubai"];

const heroSliderSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 750,
  autoplay: true,
  autoplaySpeed: 3200,
  cssEase: "ease-out",
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerMode: true,
  centerPadding: "60px",
  nextArrow: <ArrowButton direction="next" />,
  prevArrow: <ArrowButton direction="prev" />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        centerPadding: "32px",
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

const tickerSliderSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 4500,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 6,
  centerMode:true,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const statsHighlights = [
  { value: "180+", label: "Launch partners" },
  { value: "42", label: "Countries activated" },
  { value: "82%", label: "Faster release cycles" },
  { value: "24/7", label: "Follow-the-sun coverage" },
];

const BrandAreaHomeFour = () => {
  const heroBrands = brands_images.slice(0, 12);
  const marqueeBrands = brands_images.slice(12).concat(brands_images.slice(0, 6));
  const actionTags = ["Enterprise Delivery", "Design Systems", "CX Automation"];

  return (
    <section className="client-showcase mb-120">
      <div className="client-showcase__glow client-showcase__glow--left" />
      <div className="client-showcase__glow client-showcase__glow--right" />
      <div className="container">
        <div className="client-showcase__inner">
          <div className="brand-wrapper text-center">
            
            <h2 className="title">Where ambitious teams keep shipping bold customer moments.</h2>
            <p className="subtitle">
              From seed-stage darlings to global enterprise squads, Vastora Tech fuels launches across
              every timezone and industry.
            </p>
            <div className="brand-wrapper__tags">
              {actionTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

           

          <div className="client-slider-shell">
           
            <Slider {...heroSliderSettings} className="client-slider">
              {heroBrands.map((logo, index) => {
                const label = labelPool[index % labelPool.length];
                const badge = badgePool[index % badgePool.length];
                const region = regionPool[index % regionPool.length];

                return (
                  <div key={`hero-brand-${index}`} className="brand-spotlight">
                    
                    <div className="brand-spotlight__logo">
                      <Image src={logo} alt={`Vastora client ${index + 1}`} className="client-logo" />
                    </div>
                    
                  </div>
                );
              })}
            </Slider>
          </div>
 
        </div>
      </div>
 
    </section>
  );
};

export default BrandAreaHomeFour;
