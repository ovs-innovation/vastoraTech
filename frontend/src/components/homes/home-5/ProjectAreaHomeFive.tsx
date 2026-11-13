"use client";

import React from "react";
import PortfolioSection from "@/components/portfolio-showcase/PortfolioSection";

interface ProjectAreaHomeFiveProps {
  style?: boolean;
}

const ProjectAreaHomeFive: React.FC<ProjectAreaHomeFiveProps> = ({ style }) => {
  return (
    <PortfolioSection
      heading="Our work."
      kicker="FEATURED CASE STUDIES"
    />
  );
};

export default ProjectAreaHomeFive;
