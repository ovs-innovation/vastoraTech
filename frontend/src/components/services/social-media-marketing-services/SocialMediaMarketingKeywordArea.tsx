import Image from "next/image";
import Link from "next/link";

import keyword_img from "@/assets/img/services/case-2.jpg";

const SocialMediaMarketingKeywordArea = () => {
    return (
        <>
            <section className="keyword-area pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="keyword-content">
                                <div className="section-title-wrapper mb-60">
                                    <h5 className="section-subtitle mb-20">Audience Research</h5>
                                    <h2 className="section-title mb-25">
                                        Strategic Audience <br />
                                        Targeting & Analysis
                                    </h2>
                                    <p className="mb-35">
                                        Our social media marketing approach starts with comprehensive audience research and platform analysis 
                                        to ensure your campaigns reach the right people at the right time.
                                    </p>
                                </div>
                                <div className="keyword-features">
                                    <div className="keyword-feature-item">
                                        <div className="feature-icon">
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.3333 4L6 11.3333L2.66667 8"
                                                        stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                        </div>
                                        <div className="feature-content">
                                            <h4>Platform Analysis</h4>
                                            <p>Identify and target specific platforms for maximum campaign effectiveness</p>
                                        </div>
                                    </div>
                                    <div className="keyword-feature-item">
                                        <div className="feature-icon">
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.3333 4L6 11.3333L2.66667 8"
                                                        stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                        </div>
                                        <div className="feature-content">
                                            <h4>Behavioral Analysis</h4>
                                            <p>Track user behavior patterns to optimize campaign targeting and messaging</p>
                                        </div>
                                    </div>
                                    <div className="keyword-feature-item">
                                        <div className="feature-icon">
                                            <i>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.3333 4L6 11.3333L2.66667 8"
                                                        stroke="currentColor" strokeWidth="1.5"
                                                        strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                        </div>
                                        <div className="feature-content">
                                            <h4>Competitive Research</h4>
                                            <p>Analyze competitor strategies to identify opportunities and market gaps</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="keyword-btn">
                                    <Link href="/contact" className="tp-btn">
                                        Start Your Research
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="keyword-img">
                                <Image src={keyword_img} alt="Social Media Marketing Research" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SocialMediaMarketingKeywordArea; 