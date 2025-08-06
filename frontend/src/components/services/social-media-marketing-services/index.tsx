import SocialMediaMarketingFeatureTwo from "@/components/services/social-media-marketing-services/SocialMediaMarketingFeatureTwo";
import SocialMediaMarketingServiceArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingServiceArea";
import SocialMediaMarketingFeatureArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingFeatureArea";
import SocialMediaMarketingKeywordArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "@/components/services/digital-marketing-services/QualityServicesArea";
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

const SocialMediaMarketingServices = () => {
    return (
        <>
             <HeaderSix style={false} />
             <main>
                <BreadcrumbThree sub_title="Social Media Marketing Services"  title={<>Social Media Marketing Services <br /> for your business</>}
                img={banner_service} style={true} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} shape_5={shape_5} />
                 <SocialMediaMarketingServiceArea />
                 <QualityServicesArea />
                 <SocialMediaMarketingFeatureArea />
                 <SocialMediaMarketingFeatureTwo />
                 {/* <SocialMediaMarketingKeywordArea /> */}
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default SocialMediaMarketingServices; 