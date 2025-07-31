import Image from "next/image";
import Link from "next/link";

import keyword_img from "@/assets/img/services/case-2.jpg";

const UxUiDesignKeywordArea = () => {
    return (
        <>
            <section className="keyword-area pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="keyword-content">
                                <div className="section-title-wrapper mb-60">
                                    <h5 className="section-subtitle mb-20">User Research</h5>
                                    <h2 className="section-title mb-25">
                                        Strategic User <br />
                                        Research & Analysis
                                    </h2>
                                    <p className="mb-35">
                                        Our UX/UI design approach starts with comprehensive user research and usability analysis 
                                        to ensure your designs meet user needs and business goals.
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
                                            <h4>User Personas</h4>
                                            <p>Create detailed user personas for targeted design solutions</p>
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
                                            <h4>Usability Testing</h4>
                                            <p>Test designs with real users to identify improvement opportunities</p>
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
                                            <h4>Competitive Analysis</h4>
                                            <p>Analyze competitor designs to identify opportunities and best practices</p>
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
                                <Image src={keyword_img} alt="UX/UI Design Research" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UxUiDesignKeywordArea; 