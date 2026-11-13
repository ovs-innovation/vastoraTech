"use client";

import React, { useState } from "react";

const BlogNewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid corporate email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 750));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="organic-newsletter-section" aria-label="Subscribe to Vastora Tech Journal">
      {/* Top Organic Wave Curve */}
      <div className="newsletter-curved-crest" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="crest-svg">
          <path d="M0,0 C480,50 960,50 1440,0 L1440,60 L0,60 Z" fill="#F7F5F0" />
        </svg>
      </div>

      <div className="editorial-fluid-container">
        <div className="newsletter-organic-pod">
          <div className="newsletter-split-grid">
            {/* Left Column: Expressive Headline & Thesis */}
            <div className="newsletter-copy-side">
              <div className="newsletter-pill-eyebrow">
                <span className="eyebrow-pulse-dot" />
                <span>Weekly Architectural Journal</span>
              </div>

              <h2 className="newsletter-title">
                Stay thoughtful.
                <br />
                Stay ahead.
              </h2>

              <p className="newsletter-desc">
                Direct, unfiltered technical blueprints and eCommerce conversion psychology delivered once a week to your inbox. Zero marketing fluff.
              </p>
            </div>

            {/* Right Column: Organic Input & Button */}
            <div className="newsletter-form-side">
              {status === "success" ? (
                <div className="newsletter-organic-success">
                  <div className="success-icon-circle">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="success-title">You’re on the dispatch list.</h3>
                  <p className="success-text">
                    Welcome to the Vastora Tech inner circle. Look for our latest release in your inbox next Tuesday.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="success-reset-btn"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="newsletter-organic-form" noValidate>
                  <div className="input-organic-shell">
                    <label htmlFor="newsletter-email-input" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your corporate email address..."
                      className={`organic-email-input ${status === "error" ? "is-error" : ""}`}
                      disabled={status === "loading"}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <div className="form-error-row" role="alert">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="organic-submit-btn"
                    disabled={status === "loading"}
                  >
                    <span>{status === "loading" ? "Subscribing..." : "Join the Dispatch"}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletterSection;
