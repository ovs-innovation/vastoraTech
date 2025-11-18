"use client";
import { useRef, useEffect, useState } from "react"; 

import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import PrevArrowHomeFour from "@/svg/arrow_btn/PrevArrowHomeFour";
import NextArrowHomeFour from "@/svg/arrow_btn/NextArrowHomeFour";

import quation from "@/assets/img/shape/quation-4.png";
import tes_shape_1 from "@/assets/img/shape/testimonial-4-shape-1.png";
import theme_forest_img from "@/assets/img/shape/testimonial-4-shape-2.png";
// testimonial images
import test_img_1 from "@/assets/img/team/testimonial-4-shape-1.png";
import test_img_2 from "@/assets/img/team/testimonial-4-shape-2.png";
import test_img_3 from "@/assets/img/team/testimonial-4-shape-3.png";
import test_img_4 from "@/assets/img/team/testimonial-4-shape-4.png";
import test_img_5 from "@/assets/img/team/testimonial-4-shape-5.png";
 

// REMOVE test_shape_data definition and usage

// testimonial content type
interface testimonial_content_type {
  sub_title: string;
  title: string;
  testimonial_data: {
    id: number;
    author: string;
    job_title: string;
    sm_des: JSX.Element;
    shape?: StaticImageData; // Added shape property
  }[];
}             
// testimonial content
const testimonial_content: testimonial_content_type = {
  sub_title: "Testimonials",
  title: "What Clients Say",
  testimonial_data: [
    {
      id: 1,
      author: "Nathalie Grossman",
      job_title: "CEO of Advisor Fuel",
      
      sm_des: (
        <>
          As a strategy consultancy, {"we’re"} constantly multiple projects
          which meant we had little resources left our online marketing. we were
          also reluctant to partner with marketing agencies as most package.!
        </>
      ),
      shape: test_img_1,
    },
    {
      id: 2,
      author: "Jami Rayhan",
      job_title: "CEO of Advisor Fuel",
      sm_des: (
        <>
          As a strategy consultancy, {"we’re"} constantly multiple projects
          which meant we had little resources left our online marketing. we were
          also reluctant to partner with marketing agencies as most package.!
        </>
      ),
      shape: test_img_2,
    },
    {
      id: 3,
      author: "Grossman Nathalie",
      job_title: "CEO of Advisor Fuel",
      sm_des: (
        <>
          As a strategy consultancy, {"we’re"} constantly multiple projects
          which meant we had little resources left our online marketing. we were
          also reluctant to partner with marketing agencies as most package.!
        </>
      ),
      shape: test_img_3,
    },
    {
      id: 4,
      author: "Habib Mahdi",
      job_title: "CEO of Advisor Fuel",
      sm_des: (
        <>
          As a strategy consultancy, {"we’re"} constantly multiple projects
          which meant we had little resources left our online marketing. we were
          also reluctant to partner with marketing agencies as most package.!
        </>
      ),
      shape: test_img_4,
    },
    {
      id: 5,
      author: "Habib Mahdi",
      job_title: "CEO of Advisor Fuel",
      sm_des: (
        <>
          As a strategy consultancy, {"we’re"} constantly multiple projects 
          which meant we had little resources left our online marketing. we were
          also reluctant to partner with marketing agencies as most package.!
        </>
      ),
      shape: test_img_5,
    },
    
    
  ],
};
const { sub_title, title, testimonial_data } = testimonial_content;

const TestimonialAreaHomeFour = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // Add rotation state for the ring
  const [rotation, setRotation] = useState(0);

  // Animate the rotation using requestAnimationFrame
  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const duration = 10000; // 10s for full rotation
    function animate(now: number) {
      const elapsed = (now - last) % duration;
      const angle = (elapsed / duration) * 360;
      setRotation(angle);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

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

  // Helper to get circular index
  const getCircularIndex = (index: number, len: number) => {
    return ((index % len) + len) % len;
  };

  // Dynamic circle positions (center + ring)
  function getDynamicCirclePositions(count: number) {
    const positions = [];
    // Center position for the active shape
    positions.push({
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(1.5)',
      zIndex: 3,
    });
    if (count === 1) return positions;
    const radius = 38; // percent, adjust for spacing
    for (let i = 1; i < count; i++) {
      const angle = ((2 * Math.PI) / (count - 1)) * (i - 1) - Math.PI / 2;
      const left = 50 + radius * Math.cos(angle);
      const top = 50 + radius * Math.sin(angle);
      positions.push({
        left: `${left}%`,
        top: `${top}%`,
        transform: 'translate(-50%, -50%) scale(1)',
        zIndex: 2,
      });
    }
    return positions;
  }

  // Slider settings with autoplay and afterChange
  const setting = {
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false,
    afterChange: (next: number) => setActiveIndex(next),
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 1 } },
      { breakpoint: 1400, settings: { slidesToShow: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <section className="testimonial-area pb-60 scene fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-4-thumb p-relative pb-60" style={{ minHeight: 400, position: 'relative' }}>
                <div className="testimonial-4-main-thumb p-relative">
                  <Image src={tes_shape_1} alt="theme-pure" />
                  <div className="testimonial-4-main-anim">
                    <div className="tp-tooltip-circle">
                      <div className="tp-tooltip-effect-1"></div>
                      <div className="tp-tooltip-effect-2"></div>
                      <div className="tp-tooltip-effect-3"></div>
                    </div>
                  </div>
                </div>
                {/* Circular shape arrangement */}
                <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
                  {(() => {
                    const count = testimonial_data.length;
                    const circlePositions = getDynamicCirclePositions(count);
                    const centerShape = (
                      <div
                        key={"center"}
                        style={{
                          position: 'absolute',
                          ...circlePositions[0],
                          transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                          borderRadius: '50%',
                          boxShadow: '0 0 0 8px #fff, 0 0 32px 0 #f7c87355',
                          overflow: 'hidden',
                          width: 110,
                          height: 110,
                          background: '#fff',
                          zIndex: circlePositions[0].zIndex,
                        }}
                      >
                        <Image
                          src={testimonial_data[activeIndex].shape || test_img_1}
                          alt={typeof testimonial_data[activeIndex].author === 'string' ? testimonial_data[activeIndex].author : 'testimonial'}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                      </div>
                    );
                    // Ring shapes (animated)
                    const ringShapes = [];
                    for (let i = 1; i < count; i++) {
                      const dataIdx = getCircularIndex(activeIndex + i, count);
                      // Calculate the static angle for this shape
                      const staticAngle = ((2 * Math.PI) / (count - 1)) * (i - 1) * (180 / Math.PI); // degrees
                      // Counter-rotate by the current rotation + static angle
                      ringShapes.push(
                        <div
                          key={"ring-" + i}
                          style={{
                            position: 'absolute',
                            ...circlePositions[i],
                            transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 4px #fff',
                            overflow: 'hidden',
                            width: 70,
                            height: 70,
                            background: '#f7f7f7',
                            zIndex: circlePositions[i].zIndex,
                          }}
                        >
                          <Image
                            src={testimonial_data[dataIdx].shape || test_img_1}
                            alt={typeof testimonial_data[dataIdx].author === 'string' ? testimonial_data[dataIdx].author : 'testimonial'}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '50%',
                              transform: `rotate(${-rotation}deg)`
                            }}
                          />
                        </div>
                      );
                    }
                    // Wrap ring shapes in a rotating container
                    return [
                      centerShape,
                      <div
                        key="ring-rotator"
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          width: '100%',
                          height: '100%',
                          pointerEvents: 'none',
                          transform: `rotate(${rotation}deg)`,
                          zIndex: 1,
                        }}
                      >
                        {ringShapes}
                      </div>,
                    ];
                  })()}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-testimonial-4 pb-60">
                <div className="testimonial-4-wrap mb-40 pl-70">
                  <div className="section-wrapper mb-50">
                    <span>{sub_title}</span>
                    <h5 className="section-title-4 section-title-4-2">
                      {title}
                    </h5>
                  </div>
                  <Slider
                    {...setting}
                    ref={sliderRef}
                    className="testimonial-4-wrapper tptestimonial-4-active"
                  >
                    {testimonial_data.map((test_item, index) => (
                      <div key={index} className="tptestimonial-4-item">
                        <div className="tptestimonial-4-rating d-flex align-items-center mb-25">
                          <div className="tptestimonial-4-rating-img mr-30">
                            <Image src={theme_forest_img} alt="theme-pure" />
                          </div>
                          <div className="review-star">
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                            <i className="fa-sharp fa-solid fa-star-sharp"></i>{" "}
                          </div>
                        </div>
                        <div className="tptestimonial-4-content d-flex">
                          {/* Shape image for this testimonial, if present */}
                          {test_item.shape && (
                            <div className="tptestimonial-4-shape-img mr-20" style={{width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: '#fff', boxShadow: '0 0 0 2px #eee'}}>
                              <Image src={test_item.shape} alt={test_item.author} width={40} height={40} style={{objectFit: 'cover', borderRadius: '50%'}} />
                            </div>
                          )}
                          <div className="tptestimonial-4-icon mr-20">
                            <Image src={quation} alt="theme-pure" />
                          </div>
                          <div className="tptestimonial-4-text">
                            <p>{test_item.sm_des}</p>
                            <div className="tptestimonial-4-author">
                              <h4 className="title">{test_item.author}</h4>
                              <span>{test_item.job_title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider> 
                </div>
                <div className="testimonial-arrow-4 pl-110">
                  <div className="tptestimonal-4-nav p-relative">
                    <button className="prv-testi-case" onClick={handlePrev}>
                      <span>
                        <PrevArrowHomeFour />
                      </span>
                    </button>
                    <button className="next-testi-case" onClick={handleNext}>
                      <span>
                        <NextArrowHomeFour />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeFour;
