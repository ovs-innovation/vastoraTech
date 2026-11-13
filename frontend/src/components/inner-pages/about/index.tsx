"use client";

import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import AboutHero from "@/components/about/AboutHero";
import ClientMarquee from "@/components/about/ClientMarquee";
import JourneySection from "@/components/about/JourneySection";
import ProcessTimeline from "@/components/about/ProcessTimeline";
import MissionPurpose from "@/components/about/MissionPurpose";
import CompanyStats from "@/components/about/CompanyStats";
import AboutFinalCta from "@/components/about/AboutFinalCta";

const About = () => {
  return (
    <>
      <HeaderFive />
      <main className="vt-about-page-wrapper">
        {/* SECTION 1: Cinematic About Hero */}
        <AboutHero />

        {/* SECTION 2: Trusted By / Brand Showcase */}
        <ClientMarquee />

        {/* SECTION 3: Our Story / Company Journey */}
        <JourneySection />

        {/* SECTION 4: How We Work ("From Vision to Reality") */}
        <ProcessTimeline />

        {/* SECTION 5: Mission & Purpose Editorial Panels */}
        <MissionPurpose />

        {/* SECTION 6: Company Statistics / Impact */}
        <CompanyStats />

        {/* SECTION 7: Final Closing CTA */}
        <AboutFinalCta />
      </main>
      <FooterFive style={true} />
    </>
  );
};

export default About;
