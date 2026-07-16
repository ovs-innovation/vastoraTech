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
type hero_content_type = {
  title: JSX.Element;
  sm_info: JSX.Element;
  brand_title: string;
};
const hero_content_home_5: hero_content_type = {
  title: (
    <>
      Launch Your Ecommerce Store in Just 5 Days{" "}
      <span className="cd-words-wrapper">
        <TypeAnimation
          sequence={["simple", 1000, "flexible", 1000, "optimized", 1000]}
          speed={5}
          style={{ display: "inline-block", color: "#2B6BB3" }}
          repeat={Infinity}
        />
      </span>
      .
    </>
  ),
  sm_info: (
    <>
   Get your custom e-commerce website with a smart admin panel and dashboard from the best ecommerce website development company india. Build a secure and scalable ecommerce platform in India designed to grow your online business and improve customer experience.   

    </>
  ),
  brand_title: "Trusted by the big ones, loved by everyone",
};
const { title, sm_info, brand_title } = hero_content_home_5;

const HeroBannerHomeFive = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [banner_img1, banner_img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    <MouseParallaxContainer>
      <section className="banner-area banner-brand fix">
        <div className="banner-5 p-relative">
          <div className="banner-5-content-shape">
            <div className="banner-5-content-shape-one">
              <MouseParallaxChild factorX={0.02} factorY={0.02} >
                <Image src={ArrowPlane} alt="Vastora Tech banner shape" priority />
              </MouseParallaxChild>
            </div>
            
            <div className="banner-5-content-shape-two">
              <i>
                <MouseParallaxChild factorX={0.02} factorY={0.02} >
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
            <div className="row">
              <div className="col-xl-7 col-lg-6 order-2 order-lg-1">
                <div className="banner-5-content p-relative pt-80">
                  <h1 className="banner-5-title">{title}</h1>
                  <p>{sm_info}</p>
                  <div className="banner-5-btn d-flex gap-3">
                    <Link
                      className="light-blue-btn"
                      href="/product/e-commerce-solutions"
                    >
                      Get Started
                    </Link>
                 
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                <div className="banner-5-thumb p-relative">
                  {currentSlide === 0 && (
                    <Image
                      src={banner_img1}
                      alt="Vastora Tech E-commerce Solution"
                      height={700}
                      width={700}
                      style={{ display: "block", margin: "0 auto" }}
                      priority
                    />
                  )}
                  {currentSlide === 1 && (
                    <Image
                      src={banner_img2}
                      alt="Vastora Tech Digital Store"
                      height={700}
                      width={700}
                      style={{ display: "block", margin: "0 auto" }}
                      priority
                    />
                  )}
                  <div className="banner-5-thumb-shape d-none d-md-block">
                    {banner_shapes.map((item, i) => (
                      <div
                        key={i}
                        className={`banner-5-thumb-shape-${item.cls}`}
                      >
                        <MouseParallaxChild factorX={0.02} factorY={0.02} >
                          <Image src={item.img} alt="Banner Decorative Shape" title="Banner Decorative Shape" />
                        </MouseParallaxChild>
                      </div>
                    ))}
                  </div>
                </div>
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
