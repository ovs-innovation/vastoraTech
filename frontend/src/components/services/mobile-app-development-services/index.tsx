import MobileFeatureTwo from "./MobileFeatureTwo";
import MobileServiceArea from "./MobileServiceArea";
import MobileFeatureArea from "./MobileFeatureArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import ServiceMilestoneTimeline from "@/components/common/service-milestones";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_1_2 from "@/assets/img/shape/androide_shape.png";


import banner_service from "@/assets/img/services/app-dev-banner-bg.png";
import HeaderFive from "@/layout/headers/HeaderFive";
import MobileAppDevFaqArea from "./MobileAppDevFaqArea";

const MobileAppDevelopment = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <BreadcrumbThree sub_title="Mobile App Development Services" title={<> Top Mobile App Development Company in Noida</>}
                description="Vastora Tech is a trusted mobile app development company in Noida, delivering high-performance Android and iOS applications. We provide affordable and scalable solutions tailored for startups and small businesses."
                    img={banner_service} style={true} shape_1_2={shape_1_2}
                    shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} />
                <MobileServiceArea />
                <QualityServicesArea />
                <ServiceMilestoneTimeline serviceKey="mobile-app-development" />
                <MobileFeatureArea />
                <MobileFeatureTwo />
                <MobileAppDevFaqArea />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default MobileAppDevelopment;