"use client";

import React from "react";
import Floating3DCardsSection from "@/components/common/Floating3DCardsSection";

interface TeamAreaHomeFiveProps {
  style?: boolean;
}

const TeamAreaHomeFive: React.FC<TeamAreaHomeFiveProps> = ({ style }) => {
  return (
    <Floating3DCardsSection
      badge="The Minds Behind Vastora"
      title="Meet Our Team of Experts, Driving Digital Excellence."
      description="A collaborative powerhouse of full-stack engineers, cloud architects, and growth strategists dedicated to delivering transformative client results."
    />
  );
};

export default TeamAreaHomeFive;
