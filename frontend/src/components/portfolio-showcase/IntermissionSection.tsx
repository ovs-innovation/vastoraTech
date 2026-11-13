"use client";

import React from "react";

interface IntermissionSectionProps {
  title?: string;
  subtitle?: string;
}

const IntermissionSection: React.FC<IntermissionSectionProps> = ({
  title = "Never one and done.",
  subtitle = "We co-create the future with our clients, measure the impact and do it again.",
}) => {
  return (
    <div className="cinematic-intermission-slide" aria-label="Philosophy">
      <div className="intermission-inner">
        <span className="intermission-kicker" aria-hidden="true">
          Our Philosophy
        </span>
        <h2 className="intermission-statement">{title}</h2>
        <p className="intermission-subtext">{subtitle}</p>
      </div>
    </div>
  );
};

export default IntermissionSection;

