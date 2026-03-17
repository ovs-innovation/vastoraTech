'use client'
import React from 'react';
import Image from 'next/image';
import about_img from "@/assets/img/services/social-media/services-social-media-bg-6.webp"; 

const SeoAbout = () => {
    return (
        <section className="seo-about-area pt-80 pb-40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                        <div className="about-content pr-20">
                            <h3 className="mb-20" style={{ fontSize: '28px', fontWeight: '700', color: '#000' }}>Grow Your Business with Expert SEO</h3>
                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
                                Whether you are a startup, local business, or e-commerce brand, our expert SEO services are designed to increase your visibility on Google and help your business grow faster. We focus on search engine rankings that drive high-quality, organic traffic right to your doorstep.
                            </p>
                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#555', textAlign: 'justify', marginTop: '15px' }}>
                                From in-depth keyword research and on-page optimization to technical SEO and link building, our comprehensive strategies ensure that your website stands out against the competition and continually attracts leads.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                        <div className="about-img mb-30 mb-lg-0">
                            <Image src={about_img} alt="SEO Services" className="img-fluid rounded-4 shadow-sm" style={{ width: '100%', height: 'auto', borderRadius: '16px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .seo-about-area {
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

export default SeoAbout;
