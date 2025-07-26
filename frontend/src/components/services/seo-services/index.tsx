import AuditFeatureTwo from "./SeoFeatureTwo";
import AuditServiceArea from "./AuditServiceArea";
import AuditFeatureArea from "./SeoFeatureArea";
import AuditKeywordArea from "./SeoKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";

// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-5.jpg";
const SeoAudit = () => {
    return (
        <>
             <HeaderSix style={true} />
             <main>
                <BreadcrumbThree sub_title="SEO Services"  title={<>SEO Services <br /> for your business</>}
                img={banner_service} style={true} />
                 <AuditServiceArea />
                 <QualityServicesArea />
                 <AuditFeatureArea />
                 <AuditFeatureTwo />
                 <AuditKeywordArea />
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default SeoAudit;