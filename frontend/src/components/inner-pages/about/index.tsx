import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import AboutCursorLens from "@/components/about/AboutCursorLens";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import ClientMarquee from "@/components/about/ClientMarquee";
import ProcessTimeline from "@/components/about/ProcessTimeline";
import JourneySection from "@/components/about/JourneySection";
import MissionPurpose from "@/components/about/MissionPurpose";
import CompanyStats from "@/components/about/CompanyStats";
import TeamAreaHomeFive from "@/components/homes/home-5/TeamAreaHomeFive";

const About = () => {
  return (
    <>
      <AboutCursorLens />
      <HeaderFive />
      <main className="vt-about-page-wrapper">
        {/* 1. About Hero Section */}
        <AboutHero />

        {/* 2. Who We Are Storytelling Section */}
        <WhoWeAre />

        {/* 3. Client / Brand Logos Infinite Marquee */}
        <ClientMarquee />

        {/* 4. How We Do It / Helping Others Succeed (Interactive Process Timeline) */}
        <ProcessTimeline />

        {/* 5. Our Journey Storytelling Section */}
        <JourneySection />

        {/* 6. Mission & Purpose Bento Panels */}
        <MissionPurpose />

        {/* 7. Company Impact Numbers / Stats */}
        <CompanyStats />

        {/* 8. Team Showcase */}
        <TeamAreaHomeFive style={true} />
      </main>
      <FooterFive style={true} />
    </>
  );
};

export default About;