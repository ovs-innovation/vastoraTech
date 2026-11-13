'use client';

import dynamic from "next/dynamic";
import ScrollIndicator from "@/components/common/ScrollIndicator";

const FooterFive = dynamic(() => import("@/layout/footers/FooterFive"), { ssr: true });
const HeaderFive = dynamic(() => import("@/layout/headers/HeaderFive"), { ssr: true });
const ProjectAreaHomeFive = dynamic(() => import("./ProjectAreaHomeFive"), { ssr: true });
const ReviewAreaHomeFour = dynamic(() => import("../home-4/ReviewAreaHomeFour"), { ssr: true });
const BlogAreaHomeFive = dynamic(() => import("./BlogAreaHomeFive"), { ssr: true });
const SolutionsStackingAreaHomeFive = dynamic(() => import("./SolutionsStackingAreaHomeFive"), { ssr: true });
const ServicesAreaHomeFour = dynamic(() => import("../home-4/ServicesAreaHomeFour"), { ssr: true });
const AboutAreaHomeFive = dynamic(() => import("./AboutAreaHomeFive"), { ssr: true });
const ContactAreaHomeFive = dynamic(() => import("./ContactAreaHomeFive"), { ssr: true });
const CounterAreaHomeFive = dynamic(() => import("./CounterAreaHomeFive"), { ssr: true });
const FeatureAreaHomeFive = dynamic(() => import("./FeatureAreaHomeFive"), { ssr: true });
const HeroBannerHomeFive = dynamic(() => import("./HeroBannerHomeFive"), { ssr: true });
const ProjectFeaturHomefive = dynamic(() => import("./ProjectFeaturHomefive"), { ssr: true });
const TeamAreaHomeFive = dynamic(() => import("./TeamAreaHomeFive"), { ssr: true });
const TestimonialAreaHomeFive = dynamic(() => import("./TestimonialAreaHomeFive"), { ssr: true });
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
                <SolutionsStackingAreaHomeFive />
                <ToolestAeaHomeFive />
                <ProjectAreaHomeFive style={true} />
                <ProjectFeaturHomefive />
                <TeamAreaHomeFive />
                <TestimonialAreaHomeFive />
                {/* <ReviewAreaHomeFour style={true} /> */}
                <ContactAreaHomeFive />
                <BlogAreaHomeFive />
                <FaqAreaHomeFive />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default HomeFive;