"use client";

import React from "react";
import ContactFormHomeFour from "@/components/forms/ContactFormHomeFour";

const ContactAreaHomeFive: React.FC = () => {
  return (
    <section className="contact-enhanced-section" id="contact-hub">
      <div className="container">
        <div className="contact-layout-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <div className="contact-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Get in Touch</span>
            </div>

            <h2 className="contact-heading">
              Work Together,{" "}
              <span className="gradient-highlight">Scale Your Business.</span>
            </h2>

            <p className="contact-sub-desc">
              Tell us your requirements and our team will engineer a tailored
              solution across high-speed eCommerce development, custom web
              architecture, and ROI-driven marketing.
            </p>

            <div className="contact-channels-list">
              <a href="tel:+918595658592" className="channel-card">
                <div className="channel-icon-pod">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div className="channel-info-text">
                  <div className="channel-label">Direct Consultation Line</div>
                  <div className="channel-value">+91 8595658592</div>
                </div>
              </a>

              <a href="mailto:vastoratech@gmail.com" className="channel-card">
                <div className="channel-icon-pod">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div className="channel-info-text">
                  <div className="channel-label">Email Our Engineering Team</div>
                  <div className="channel-value">vastoratech@gmail.com</div>
                </div>
              </a>

              <div className="channel-card">
                <div className="channel-icon-pod">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="channel-info-text">
                  <div className="channel-label">Guaranteed Response Time</div>
                  <div className="channel-value">Within 2 Hours (Mon – Sat)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Glass Contact Form */}
          <div className="contact-form-card">
            <ContactFormHomeFour />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAreaHomeFive;
