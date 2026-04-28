'use client'
import React from 'react';
import Image from 'next/image';
import about_img from "@/assets/img/services/social-media/social-media-about.png"; 

const SocialMediaMarketingAbout = () => {
    return (
        <section className="social-media-about-area pt-80 pb-40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                        <div className="about-content pr-20">
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
                               At Vastora Tech, we offer leading social media marketing services in Noida, helping businesses build a strong and result-driven digital presence. Our team combines creative content, data-driven strategies, and targeted advertising to increase brand visibility, engagement, and leads.                            </p>
                            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#555', textAlign: 'justify', marginTop: '15px' }}>
                               We provide professional social media marketing services tailored to your business goals. From strategy to execution, our approach focuses on delivering consistent growth and measurable results.                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                        <div className="about-img">
                            <Image src={about_img} alt="Social Media Marketing Noida" className="img-fluid rounded-4 shadow-sm" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .social-media-about-area {
                    background: #fff;
                }
                .pr-20 {
                    padding-right: 20px;
                }
                @media (max-width: 991px) {
                    .pr-20 {
                        padding-right: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default SocialMediaMarketingAbout;
