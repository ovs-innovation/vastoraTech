import UxUiDesignFeatureTwo from "@/components/services/ux-ui-design-services/UxUiDesignFeatureTwo";
import UxUiDesignServiceArea from "@/components/services/ux-ui-design-services/UxUiDesignServiceArea";
import UxUiDesignFeatureArea from "@/components/services/ux-ui-design-services/UxUiDesignFeatureArea";
import UxUiDesignKeywordArea from "@/components/services/ux-ui-design-services/UxUiDesignKeywordArea";
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
import banner_service from "@/assets/img/services/analysis/services-analysis-bg-1.png";

const UxUiDesignServices = () => {
    return (
        <>
             <HeaderSix style={false} />
             <main>
                <BreadcrumbThree sub_title="UX/UI Design Services"  title={<>UX/UI Design Services <br /> for your business</>}
                img={banner_service} style={true} shape_1_2={shape_1_2}
                shape_1={shape_1} shape_2={shape_2} shape_3={shape_3} shape_4={shape_4} shape_5={shape_5} />
                 <UxUiDesignServiceArea />
                 <QualityServicesArea />
                 <UxUiDesignFeatureArea />
                 <UxUiDesignFeatureTwo />
                 {/* <UxUiDesignKeywordArea /> */}
             </main>
             <FooterFive style_audit={true} />
        </>
    );
};

export default UxUiDesignServices; 