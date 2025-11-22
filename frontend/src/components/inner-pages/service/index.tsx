import BreadcrumbFour from "@/components/common/breadcrumb/breadcrumb-4";
import TestimonialAreaHomeFour from "@/components/homes/home-4/TestimonialAreaHomeFour";
import ReviewAreaHomeFour from "@/components/homes/home-4/ReviewAreaHomeFour";
import ProjectFeaturHomefive from "@/components/homes/home-5/ProjectFeaturHomefive";
import FooterFive from "@/layout/footers/FooterFive";
import HeaderSix from "@/layout/headers/HeaderSix";
import KeywordCtaArea from "@/componentsservices/keyword-search/KeywordCtaArea";
import ServiceAreaHomeFour from "@/components/homes/home-4/ServicesAreaHomeFour";
import ServiceAboutArea from "./ServiceAboutArea";
import Serviceabout from "./Serviceabout";


const Service = () => {
    return (
        <>
            <HeaderSix style={true} />
            <main>
                <BreadcrumbFour />
                <ServiceAboutArea />
                <ServiceAreaHomeFour style={true} />
                {/* <Serviceabout /> */}
                <ProjectFeaturHomefive style={true} />
                {/* <TestimonialAreaHomeFour />  */}
                {/* <ReviewAreaHomeFour style={true} service_style={true} /> */}
                {/* <KeywordCtaArea /> */}
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Service