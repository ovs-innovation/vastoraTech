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
import WebDevFaqArea from "./WebDevFaqArea";


import banner_service from "@/assets/img/services/web-dev-bg-img.jpeg";
import HeaderFive from "@/layout/headers/HeaderFive";

const WebDevelopment = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <BreadcrumbThree sub_title="Web Development Services" title={<>Website Development Services to Grow Your Business Online</>}
                    img={banner_service} style={true} shape_1_2={shape_1_2}
                    shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} />
                <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mt-10 mb-6">
                    Top Web Development Agencies & Developers</h1>
                <h4 className="text-xl md:text-2xl font-semibold text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                    Find the best web development agencies and skilled developers near you for building modern, scalable websites.
                </h4>
                <WebServiceArea />

                <QualityServicesArea />

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title-4-area text-center mb-60">
                            <h2 className="section-title-4" style={{ fontSize: '36px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>
                                Our Web Development Process
                            </h2>
                            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                                A simple and efficient process we follow to deliver high-quality web design and web development services for your business.
                            </p>
                        </div>
                    </div>
                </div>

                <ServiceMilestoneTimeline serviceKey="web-development" />
                <WebFeatureArea />
                <WebFeatureTwo />
            </main>
            <WebDevFaqArea />
            <FooterFive style={true} />
        </>
    );
};

export default WebDevelopment;