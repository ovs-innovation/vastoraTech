'use client'
import SocialMediaMarketingFeatureTwo from "@/components/services/social-media-marketing-services/SocialMediaMarketingFeatureTwo";
import SocialMediaMarketingServiceArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingServiceArea";
import SocialMediaMarketingFeatureArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingFeatureArea";
import SocialMediaMarketingKeywordArea from "@/components/services/social-media-marketing-services/SocialMediaMarketingKeywordArea";
import HeaderSix from "@/layout/headers/HeaderSix";
import QualityServicesArea from "@/components/services/digital-marketing-services/QualityServicesArea";
import FooterFive from "@/layout/footers/FooterFive";
import BreadcrumbThree from "@/components/common/breadcrumb/breadcrumb-3";
import ServiceMilestoneTimeline from "@/components/common/service-milestones";

import SocialMediaMarketingAbout from "@/components/services/social-media-marketing-services/SocialMediaMarketingAbout";

import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";

import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";

// image import 
import banner_service from "@/assets/img/services/social-media/services-social-media-bg-5.webp";
import HeaderFive from "@/layout/headers/HeaderFive";

import SocialMediaFaqArea from "@/components/services/social-media-marketing-services/SocialMediaFaqArea";

const SocialMediaMarketingServices = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <BreadcrumbThree 
                    sub_title="Social Media Marketing Services" 
                    title={<>Best Social Media Marketing Services in Noida for Business Growth</>}
                    description="We help brands build a strong online presence with result-driven strategies. Our focus is on increasing visibility, engagement, and leads through consistent and targeted social media efforts."
                   // img={banner_service} 
                    style={false} 
                    shape_1_2={shape_1_2}
                    shape_1={shape_1} 
                    shape_2={shape_2} 
                    shape_3={shape_3} 
                    shape_4={shape_4} 
                />
                <SocialMediaMarketingAbout />
                <SocialMediaMarketingServiceArea />
                <QualityServicesArea />
                <ServiceMilestoneTimeline serviceKey="social-media-marketing" />
                <SocialMediaMarketingFeatureArea />
                <SocialMediaMarketingFeatureTwo />
                {/* <SocialMediaMarketingKeywordArea /> */}
                <SocialMediaFaqArea />
            </main>
            <FooterFive style_audit={true} />
        </>
    );
};

export default SocialMediaMarketingServices; 