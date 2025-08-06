import MobileFeatureTwo from "./MobileFeatureTwo";
import MobileServiceArea from "./MobileServiceArea";
import MobileFeatureArea from "./MobileFeatureArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_5 from "@/assets/img/shape/ios_shape.png";
import shape_1_2 from "@/assets/img/shape/androide_shape.png";


import banner_service from "@/assets/img/services/app-dev-banner-bg.webp";
const MobileAppDevelopment = () => {
    return (
        <>
            <HeaderSix style={false} />
            <main>
                <BreadcrumbThree sub_title="Mobile App Development Services" title={<>We Craft Mobile Apps That Users Love — And Businesses Rely On</>}
                    img={banner_service} style={true} shape_1_2={shape_1_2}
                    shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} shape_5={shape_5} />
                <MobileServiceArea />
                <QualityServicesArea />
                <MobileFeatureArea />
                <MobileFeatureTwo />
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default MobileAppDevelopment;