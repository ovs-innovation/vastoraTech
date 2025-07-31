import DigitalMarketingFeatureTwo from "@/components/services/digital-marketing-services/DigitalMarketingFeatureTwo";
import DigitalMarketingServiceArea from "@/components/services/digital-marketing-services/DigitalMarketingServiceArea";
import DigitalMarketingFeatureArea from "@/components/services/digital-marketing-services/DigitalMarketingFeatureArea";
import DigitalMarketingKeywordArea from "@/components/services/digital-marketing-services/DigitalMarketingKeywordArea";
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
import banner_service from "@/assets/img/services/web-dev-bg-img.jpg";

const DigitalMarketingServices = () => {
    return (
        <>
             <HeaderSix style={false} />
             <main>
                <BreadcrumbThree sub_title="Digital Marketing Services"  title={<>Digital Marketing Services <br /> for your business</>}
                img={banner_service} style={true} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} shape_5={shape_5} />
                 <DigitalMarketingServiceArea />
                 <QualityServicesArea />
                 <DigitalMarketingFeatureArea />
                 <DigitalMarketingFeatureTwo />
                 {/* <DigitalMarketingKeywordArea /> */}
             </main>
             <FooterFive style_audit={false} />
        </>
    );
};

export default DigitalMarketingServices; 