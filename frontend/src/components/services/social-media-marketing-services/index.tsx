import SocialMediaMarketingFeatureTwo from "@/components/services/social-media-marketing-services/SocialMediaMarketingFeatureTwo";
import SocialMediaMarketingServiceArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingServiceArea";
import SocialMediaMarketingFeatureArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingFeatureArea";
import SocialMediaMarketingKeywordArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "@/components/services/digital-marketing-services/QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import ServiceMilestoneTimeline from "@/components/common/service-milestones";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
 
import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";

// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-5.webp";
import HeaderFive from "@/layout/headers/HeaderFive";

const SocialMediaMarketingServices = () => {
    return (
        <>
             <HeaderFive />
             <main>
                <BreadcrumbThree sub_title="Social Media Marketing Services"  title={<>Build Your Brand, Engage Your Audience, and Drive Real Results</>}
                img={banner_service} style={true} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} />
                 <SocialMediaMarketingServiceArea />
                 <QualityServicesArea />
                 <ServiceMilestoneTimeline serviceKey="social-media-marketing" />
                 <SocialMediaMarketingFeatureArea />
                 <SocialMediaMarketingFeatureTwo />
                 {/* <SocialMediaMarketingKeywordArea /> */}
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default SocialMediaMarketingServices; 