"use client";
 
import Link from "next/link";
import Image  from "next/image"; 
import { TeamSocialLinks } from "@/components/common/social-links";
import team_data from "@/data/team";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// team data type
interface team_content_type {
    title: JSX.Element;
    sm_info: string;  
}
// team content 
 const team_content: team_content_type = {
    title: <>Meet our team <br />of expert</>,
    sm_info: "We're a 100% remote team spread all across the world!", 
 }
 const {title, sm_info, }  = team_content

const TeamAreaHomeFive = ({style} : any) => {
    return (
        <>
            <section className={`team-area ${style ? "pb-50" : "pt-105 pb-140"}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={`section-3 text-center ${style ? "mb-35" : "mb-65"}`}>
                                <div className="section-3-title mb-15">{title}</div>
                                <p>{sm_info}</p>
                            </div>
                            {style && 
                                <div className="team-inner-all  text-center mb-70">
                                    <Link href="/team" className="tp-btn">Join Our Team</Link>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row pb-30">
                        <div className="col-12" style={{ position: "relative" }}>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
                                loop={true}
                                modules={[Autoplay, Navigation]}
                                autoplay={{ delay: 3000 }}
                                navigation={{
                                    nextEl: ".team-swiper-button-next",
                                    prevEl: ".team-swiper-button-prev",
                                }}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 4,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                                className="team-slider-active"
                            >
                                {team_data.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className={`team-5-item ${item.cls} text-center mb-40`}>
                                            <div className="team-5-thumb mb-25">
                                                <Image src={item.avatar} alt={item.name} title={item.name} />
                                                <div className="team-5-social">
                                                    <span className="icon"></span>
                                                    <TeamSocialLinks />
                                                </div>
                                            </div>
                                            <div className="team-5-content">
                                                <h4 className="team-5-title"> {item.name}</h4>
                                                <p>{item.job_title}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* Navigation Arrows */}
                            <button className="team-swiper-button-prev" aria-label="Previous slide">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="team-swiper-button-next" aria-label="Next slide">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {!style && 
                        <div className="row">
                            <div className="col-12">
                                <div className="team-5-all text-center">
                                    <Link href="/team" className="light-blue-btn">Join Our Team</Link>
                                </div>
                            </div>
                        </div>                   
                    }
                </div>
            </section>
            <style dangerouslySetInnerHTML={{__html: `
                .team-swiper-button-prev,
                .team-swiper-button-next {
                    position: absolute;
                    bottom: 10%;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 2px solid #1a3a5c;
                    color: #1a3a5c;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
                .team-swiper-button-prev {
                    left: -25px;
                }
                .team-swiper-button-next {
                    right: -25px;
                }
                .team-swiper-button-prev:hover,
                .team-swiper-button-next:hover {
                    background: #1a3a5c;
                    color: #ffffff;
                    
                    box-shadow: 0 6px 20px rgba(26, 58, 92, 0.3);
                }
                
                .team-swiper-button-prev.swiper-button-disabled,
                .team-swiper-button-next.swiper-button-disabled {
                    opacity: 0.35;
                    cursor: auto;
                    pointer-events: none;
                }
                @media (max-width: 1200px) {
                    .team-swiper-button-prev {
                        left: -15px;
                    }
                    .team-swiper-button-next {
                        right: -15px;
                    }
                }
                @media (max-width: 768px) {
                    .team-swiper-button-prev,
                    .team-swiper-button-next {
                        width: 40px;
                        height: 40px;
                    }
                    .team-swiper-button-prev {
                        left: -10px;
                    }
                    .team-swiper-button-next {
                        right: -10px;
                    }
                }
            `}} />
        </>
    );
};

export default TeamAreaHomeFive;