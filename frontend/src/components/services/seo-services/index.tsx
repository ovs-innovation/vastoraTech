import AuditFeatureTwo from "./SeoFeatureTwo";
import AuditServiceArea from "./AuditServiceArea";
import AuditFeatureArea from "./SeoFeatureArea";
import AuditKeywordArea from "./SeoKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_5 from "@/assets/img/shape/banner-tree.png";
import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";

// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-5.jpg";
const SeoAudit = () => {
    return (
        <>
             <HeaderSix style={false} />
             <main>
                <BreadcrumbThree sub_title="SEO Services"  title={<>SEO Services <br /> for your business</>}
                img={banner_service} style={true} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} shape_5={shape_5} />
                 <AuditServiceArea />
                 <QualityServicesArea />
                 <AuditFeatureArea />
                 <AuditFeatureTwo />
                 {/* <AuditKeywordArea /> */}
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default SeoAudit;