import AuditFeatureTwo from "./SeoFeatureTwo";
import AuditServiceArea from "./AuditServiceArea";
import SeoAbout from "./SeoAbout";
import AuditFeatureArea from "./SeoFeatureArea";
import AuditKeywordArea from "./SeoKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import ServiceMilestoneTimeline from "@/components/common/service-milestones";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
 
import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";

// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-6.webp";
import HeaderFive from "@/layout/headers/HeaderFive";
import SeoFaqArea from "./SeoFaqArea";

const SeoAudit = () => {
    return (
        <>
             <HeaderFive />
             <main>
                <BreadcrumbThree sub_title="SEO Services" title={<>Best SEO Services in Noida to Grow Your Business Online</>} description="Vastora Tech is a trusted SEO agency in Noida helping businesses improve search rankings, drive organic traffic, and generate real leads through result-driven search engine optimization services"
                 style={false} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4}   />
                 <SeoAbout />
                 <AuditServiceArea />
                 <QualityServicesArea />
                <ServiceMilestoneTimeline serviceKey="seo-optimization" />
                 <AuditFeatureArea />
                 <AuditFeatureTwo />
                 {/* <AuditKeywordArea /> */}
                 <SeoFaqArea />
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default SeoAudit;