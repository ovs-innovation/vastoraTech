import WebFeatureTwo from "./WebFeatureTwo";
import WebServiceArea from "./WebServiceArea";
import WebFeatureArea from "./WebFeatureArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import ServiceMilestoneTimeline from "@/components/common/service-milestones";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_5 from "@/assets/img/shape/web_shape_5.png";
import shape_1_2 from "@/assets/img/shape/web_shap_1-2.png";


import banner_service from "@/assets/img/services/web-dev-bg-img.jpeg";

const WebDevelopment = () => {
    return (
        <>
             <HeaderSix style={false} />
             <main>
                <BreadcrumbThree sub_title="Web Development Services"  title={<>We Develop high<br />performance web for your business</>}
                img={banner_service} style={true} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} />
                 <WebServiceArea />
                 <QualityServicesArea />
                 <ServiceMilestoneTimeline serviceKey="web-development" />
                 <WebFeatureArea />
                 <WebFeatureTwo />
             </main>
             <FooterFive style={true} />
        </>
    );
};

export default WebDevelopment;