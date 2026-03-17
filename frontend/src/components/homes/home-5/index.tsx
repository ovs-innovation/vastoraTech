'use client';

import ScrollIndicator from "@/components/common/ScrollIndicator";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderFive from "@/layout/headers/HeaderFive"; 
import ProjectAreaHomeFive from "../home-2/ProjectAreaHomeTwo";
import ReviewAreaHomeFour from "../home-4/ReviewAreaHomeFour";
import BlogAreaHomeFour from "../home-4/BlogAreaHomeFour";
import ServicesAreaHomeFour from "../home-4/ServicesAreaHomeFour";
import AboutAreaHomeFive from "./AboutAreaHomeFive";
import ContactAreaHomeFour from "../home-4/ContactAreaHomeFour";
import CounterAreaHomeFive from "./CounterAreaHomeFive";
import FeatureAreaHomeFive from "./FeatureAreaHomeFive";
import HeroBannerHomeFive from "./HeroBannerHomeFive";
import ProjectFeaturHomefive from "./ProjectFeaturHomefive";
import TeamAreaHomeFive from "./TeamAreaHomeFive";
import TestimonialAreaHomeOne from "@/components/homes/home/TestimonialAreaHomeOne";
import ToolestAeaHomeFive from "./ToolestAeaHomeFive";
import BrandAreaHomeFour from "../home-4/BrandAreaHomeFour";
import FaqAreaHomeFive from "./FaqAreaHomeFive";

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