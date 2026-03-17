import React from 'react';
import Link from 'next/link';

const EcommerceInfoArea = () => {
    return (
        <div className="ecommerce-info-wrapper pb-100">
            <div className="container">
                {/* 1. Our E-Commerce Development Services */}
                <div className="section-title-wrap mb-60">
                    <h2 className="tp-section-title text-center mb-40">Our E-Commerce Development Services</h2>
                    <div className="row g-4 justify-content-center">
                        {[
                            {
                                title: "Custom E-Commerce Website Development",
                                desc: "Our ecommerce website development services include building fully customized online stores tailored to your brand and business requirements."
                            },
                            {
                                title: "Shopify & WooCommerce Development",
                                desc: "We develop scalable eCommerce websites using platforms like Shopify and WooCommerce to make product management and sales easier."
                            },
                            {
                                title: "Payment Gateway Integration",
                                desc: "Our developers integrate secure payment gateways to ensure smooth and safe transactions for your customers."
                            },
                            {
                                title: "Mobile-Friendly E-Commerce Websites",
                                desc: "We create responsive online stores optimized for mobile devices to improve user experience and increase conversions."
                            },
                            {
                                title: "E-Commerce App Development",
                                desc: "As a trusted ecommerce app development company, we build mobile applications that allow businesses to reach customers and manage their online store from anywhere."
                            }
                        ].map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm p-4 text-center">
                                    <h4 className="h5 mb-3 font-bold">{service.title}</h4>
                                    <p className="text-muted small">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Why Choose Our E-Commerce Development Agency */}
                <div className="why-choose-ecommerce mb-80 bg-light p-5 rounded-4">
                    <h3 className="h4 mb-4 text-center font-bold">Why Choose Our E-Commerce Development Agency</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <ul className="list-unstyled row g-3">
                                {[
                                    "Experienced ecommerce website developers",
                                    "Complete ecommerce website development services",
                                    "Scalable solutions for growing businesses",
                                    "Secure payment and checkout systems",
                                    "SEO-friendly eCommerce store development"
                                ].map((item, index) => (
                                    <div key={index} className="col-md-6 d-flex align-items-center mb-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2B6BB3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="me-2 flex-shrink-0">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="small">{item}</span>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. Our E-Commerce Development Process */}
                <div className="process-ecommerce mb-80">
                    <h3 className="h4 mb-5 text-center font-bold">Our E-Commerce Development Process</h3>
                    <div className="row g-4 text-center">
                        {[
                            { title: "Planning", desc: "Business requirements and store planning" },
                            { title: "Design", desc: "UI/UX design and theme selection" },
                            { title: "Development", desc: "Development and feature integration" },
                            { title: "Configuration", desc: "Payment and shipping configuration" },
                            { title: "Testing", desc: "Testing and quality assurance" },
                            { title: "Launch", desc: "Website launch and ongoing support" }
                        ].map((step, index) => (
                            <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                                <div className="step-item">
                                    <div className="step-number h5 text-primary mb-2">0{index + 1}</div>
                                    <h5 className="h6 font-bold mb-1">{step.title}</h5>
                                    <p className="small text-muted mb-0 lh-base" style={{ fontSize: '12px' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Features of a Successful E-Commerce Website */}
                <div className="features-ecommerce mb-80">
                    <h3 className="h4 text-center font-bold mb-2">Features of a Successful E-Commerce Website</h3>
                    <p className="text-center text-muted mb-5">A successful online store needs the right features to deliver a smooth shopping experience and increase sales.</p>
                    <div className="row g-4">
                        {[
                            {
                                title: "Secure Payment Integration",
                                desc: "We integrate secure payment gateways to ensure safe transactions for customers."
                            },
                            {
                                title: "Mobile-Friendly Design",
                                desc: "Our eCommerce websites are fully responsive and optimized for all devices including smartphones and tablets."
                            },
                            {
                                title: "Fast Loading Speed",
                                desc: "Speed-optimized websites that improve user experience and help reduce bounce rate."
                            },
                            {
                                title: "Easy Product Management",
                                desc: "Manage products, categories, inventory, and orders easily from a powerful admin dashboard."
                            },
                            {
                                title: "SEO-Friendly Store Structure",
                                desc: "We develop search engine optimized eCommerce websites that help businesses rank higher on Google."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="col-md-4">
                                <div className="feature-card h-100 p-4 border rounded-3 hover-shadow transition">
                                    <h5 className="h6 font-bold mb-3">{feature.title}</h5>
                                    <p className="text-muted small mb-0">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Start Your Project Today */}
                <div className="cta-ecommerce text-center bg-primary text-white p-5 rounded-4 shadow-lg">
                    <h3 className="h4 font-bold mb-3">Start Your E-Commerce Business Today</h3>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <p className="mb-4 text-light pb-2">
                                Looking for a reliable ecommerce website development agency or ecommerce web development company in India?
                                Our expert team is ready to help you build a high-performance online store that increases sales and improves customer experience.
                            </p>
                            <Link href="/contact" className="btn btn-light btn-lg px-5 font-bold">
                                Start Your Project →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .font-bold { font-weight: 700; }
                .hover-shadow:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
                .transition { transition: all 0.3s ease; }
            `}</style>
        </div>
    );
};

export default EcommerceInfoArea;
