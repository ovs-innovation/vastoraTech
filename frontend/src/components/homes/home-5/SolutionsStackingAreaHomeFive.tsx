"use client";

import React from "react";
import Link from "next/link";
import solutionsCardsData, { SolutionCardItem } from "@/data/solutions-cards-data";

interface SolutionsStackingAreaHomeFiveProps {
  badge?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  description?: string;
}

const SolutionsStackingAreaHomeFive: React.FC<SolutionsStackingAreaHomeFiveProps> = ({
  badge = "END-TO-END CAPABILITIES",
  headingPrefix = "High-Impact Services, ",
  headingHighlight = "Engineered for Scale.",
  description = "From enterprise eCommerce architectures to modern full-stack web platforms and growth marketing, we build digital solutions that dominate markets and accelerate business revenue.",
}) => {

  return (
    <section
      className="solutions-stacking-section"
      id="solutions-showcase"
      aria-label="Capabilities and Services"
    >
      <div className="container">
        {/* Section Header: Left-Aligned Agency Style with Previous Text */}
        <div className="solutions-header-wrap">
          {badge && (
            <div className="solutions-header-badge">
              <span className="badge-dot" aria-hidden="true" />
              <span className="badge-text">{badge}</span>
            </div>
          )}

          <h2 className="solutions-header-heading">
            {headingPrefix}
            <span className="gradient-highlight">{headingHighlight}</span>
          </h2>

          {description && (
            <p className="solutions-header-desc">{description}</p>
          )}
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="solutions-cards-stack-container">
          {solutionsCardsData.map((card: SolutionCardItem, index: number) => {
            // Progressive top offset so previous card edges remain visible like layered sheets
            const stickyTopOffset = 100 + index * 26; // 100px, 126px, 152px, 178px, 204px, 230px
            const zIndexVal = index + 1;

            return (
              <div
                key={card.id}
                className="solution-card-sticky-wrapper"
                style={{
                  top: `${stickyTopOffset}px`,
                  zIndex: zIndexVal,
                }}
              >
                <article
                  className="solution-card-body"
                  aria-label={`${card.number} ${card.heading}`}
                >
                  {/* Card Top Row: Pink Number & Previous Category Pill */}
                  <div className="solution-card-top-row">
                    <span className="solution-card-number">{card.number}</span>
                    {card.category && (
                      <span className="solution-card-category">
                        {card.category}
                      </span>
                    )}
                  </div>

                  {/* Card Center: Previous Heading & Description */}
                  <div className="solution-card-content">
                    <h3 className="solution-card-title">{card.heading}</h3>
                    <p className="solution-card-description">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Row: Previous Chips/Tags & Explore Link */}
                  <div className="solution-card-bottom-row">
                    {card.tags && card.tags.length > 0 && (
                      <div className="solution-card-tags" aria-label="Capabilities">
                        {card.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="solution-card-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {card.link && (
                      <Link
                        href={card.link}
                        className="solution-card-link-btn"
                        aria-label={`Explore ${card.heading}`}
                      >
                        <span>Explore Solution</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="link-arrow"
                          aria-hidden="true"
                        >
                          <path
                            d="M7 17L17 7M17 7H9M17 7V15"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsStackingAreaHomeFive;
