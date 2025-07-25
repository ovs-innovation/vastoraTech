import WebFeatureTwo from "./WebFeatureTwo";
import WebServiceArea from "./WebServiceArea";
import WebFeatureArea from "./WebFeatureArea";
// import AuditKeywordArea from "./AuditKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "./QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";

// image import 
import banner_service from "@/assets/img/services/web-dev-bg-img.jpg";
const WebDevelopment = () => {
    return (
        <>
             <HeaderSix style={true} />
             <main>
                <BreadcrumbThree sub_title="Web Development Services"  title={<>We Develop high<br />performance web for your business</>}
                img={banner_service} style={true} />
                 <WebServiceArea />
                 <QualityServicesArea />
                 <WebFeatureArea />
                 <WebFeatureTwo />
                 {/* <AuditKeywordArea /> */}
             </main>
             <FooterFive style={true} />
        </>
    );
};

export default WebDevelopment;