'use client';

import dynamic from "next/dynamic";
import ScrollIndicator from "@/components/common/ScrollIndicator";

const FooterFive = dynamic(() => import("@/layout/footers/FooterFive"), { ssr: true });
const HeaderFive = dynamic(() => import("@/layout/headers/HeaderFive"), { ssr: true });
const ProjectAreaHomeFive = dynamic(() => import("../home-2/ProjectAreaHomeTwo"), { ssr: true });
const ReviewAreaHomeFour = dynamic(() => import("../home-4/ReviewAreaHomeFour"), { ssr: true });
const BlogAreaHomeFour = dynamic(() => import("../home-4/BlogAreaHomeFour"), { ssr: true });
const ServicesAreaHomeFour = dynamic(() => import("../home-4/ServicesAreaHomeFour"), { ssr: true });
const AboutAreaHomeFive = dynamic(() => import("./AboutAreaHomeFive"), { ssr: true });
const ContactAreaHomeFour = dynamic(() => import("../home-4/ContactAreaHomeFour"), { ssr: true });
const CounterAreaHomeFive = dynamic(() => import("./CounterAreaHomeFive"), { ssr: true });
const FeatureAreaHomeFive = dynamic(() => import("./FeatureAreaHomeFive"), { ssr: true });
const HeroBannerHomeFive = dynamic(() => import("./HeroBannerHomeFive"), { ssr: true });
const ProjectFeaturHomefive = dynamic(() => import("./ProjectFeaturHomefive"), { ssr: true });
const TeamAreaHomeFive = dynamic(() => import("./TeamAreaHomeFive"), { ssr: true });
const TestimonialAreaHomeOne = dynamic(() => import("@/components/homes/home/TestimonialAreaHomeOne"), { ssr: true });
const ToolestAeaHomeFive = dynamic(() => import("./ToolestAeaHomeFive"), { ssr: true });
const BrandAreaHomeFour = dynamic(() => import("../home-4/BrandAreaHomeFour"), { ssr: true });
const FaqAreaHomeFive = dynamic(() => import("./FaqAreaHomeFive"), { ssr: true });

const HomeFive = () => {
    return (
        <> 
            <ScrollIndicator/>
            <HeaderFive/>
            <main>
                <HeroBannerHomeFive />
                <BrandAreaHomeFour />
                {/* <FeatureAreaHomeFive /> */}
                <AboutAreaHomeFive />
                <CounterAreaHomeFive />
                <ServicesAreaHomeFour />
                <ToolestAeaHomeFive />
                <ProjectAreaHomeFive style={true} />
                <ProjectFeaturHomefive />
                <TeamAreaHomeFive />
                <TestimonialAreaHomeOne />
                {/* <ReviewAreaHomeFour style={true} /> */}
                <ContactAreaHomeFour />
                <BlogAreaHomeFour />
                <FaqAreaHomeFive />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default HomeFive;