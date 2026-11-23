import React from "react";
import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import TeamHero from "./TeamHero";
import AboutArea from "./AboutArea";
import TeamCulture from "./TeamCulture";
import TeamCta from "./TeamCta";

const Team = () => {
  return (
    <>
      <HeaderFive />
      <main className="team-page-wrapper">
        {/* Modern Hero with breadcrumb & stats */}
        <TeamHero />

        {/* 6-member Team Grid with previous card style & LinkedIn only */}
        <AboutArea />

        {/* Engineering Philosophy & Culture */}
        <TeamCulture />

        {/* High-conversion CTA banner */}
        <TeamCta />
      </main>
      <FooterFive style={true} />
    </>
  );
};

export default Team;