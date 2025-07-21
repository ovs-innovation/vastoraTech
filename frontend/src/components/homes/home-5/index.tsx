import ScrollIndicator from "@/components/common/ScrollIndicator";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderFive from "@/layout/headers/HeaderFive"; 
import ProjectAreaHomeTwo from "../home-2/ProjectAreaHomeTwo";
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
import TestimonialAreaHomeFour from "../home-4/TestimonialAreaHomeFour";
import ToolestAeaHomeFive from "./ToolestAeaHomeFive";
import BrandAreaHomeFour from "../home-4/BrandAreaHomeFour";





const HomeFive = () => {
    return (
        <> 
            <ScrollIndicator/>
            <HeaderFive/>
            <main>
                <HeroBannerHomeFive />
                <FeatureAreaHomeFive />
                <AboutAreaHomeFive />
                <CounterAreaHomeFive />
                <ServicesAreaHomeFour />
                <ToolestAeaHomeFive />
                <ProjectAreaHomeTwo style={true} />
                <ProjectFeaturHomefive />
                <TeamAreaHomeFive />
                <TestimonialAreaHomeFour />
                <BrandAreaHomeFour />
                <ReviewAreaHomeFour style={true} />
                <ContactAreaHomeFour />
                <BlogAreaHomeFour />
            </main>
            <FooterFive />
        </>
    );
};

export default HomeFive;