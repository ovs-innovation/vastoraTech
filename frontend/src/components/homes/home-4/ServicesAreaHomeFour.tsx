import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import SmollRound from "@/svg/smoll_round";
import MarketingIcon from "@/svg/marketing_icon";
import RightArrowThree from "@/svg/right_arrow_3";
import SEOAnalyticsIcon from "@/svg/SEO_analytics_icon";
import SocialMarketingIcon from "@/svg/social_marketing_icon";
import UiUxDesignIcon from "@/svg/ui_ux_design";
import AndroideIcon from "@/svg/androide_icon";
import WebIcon from "@/svg/web_icon";

import header_rocket from "@/assets/img/shape/header-rocket.png";
import service_shape_1 from "@/assets/img/shape/choose-4-shape-1.png";
import service_shape_2 from "@/assets/img/shape/choose-4-shape-2.png";
import service_shape_3 from "@/assets/img/shape/choose-4-shape-3.png";
import service_shape_4 from "@/assets/img/shape/choose-4-shape-4.png";
import service_shape_5 from "@/assets/img/shape/video-blue.png";

interface service_content_type {
    sub_title: string;
    sub_title_2: string;
    title: string;
    service_data: {
        id: number;
        shape: StaticImageData;
        icon: JSX.Element;
        title: string;
        sm_des: string;
        link: string;
    }[];
    sm_info: JSX.Element;
}

const service_content: service_content_type = {
    sub_title: 'Why services Us',
    sub_title_2: "",
    title: "Our Services",
    service_data: [
        {
            id: 1, 
            shape: service_shape_3,
            icon: <WebIcon />,
            title: "Web Development",
            sm_des: "We provide professional web design and development services to build fast, responsive, and secure websites. As a trusted website development company in India, we help businesses create powerful online platforms.",
            link: "/services/web-development-services",
        },
        {
            id: 2, 
            shape: service_shape_4,
            icon: <AndroideIcon />,
            title: "Mobile App Development",
            sm_des: "Professional mobile app development services for Android and iOS. We build secure, scalable, and user-friendly apps tailored to your business goals.",
            link: "/services/mobile-app-development-services",
        },
        {
            id: 3, 
            shape: service_shape_5,
            icon: <WebIcon />,
            title: "E-commerce Solutions",
            sm_des: "We deliver complete eCommerce website development solutions with custom design, payment integration, and admin dashboards to help businesses sell online easily.",
            link: "/product/e-commerce-solutions",
        },
        // {
        //     id: 4, 
        //     shape: service_shape_2,
        //     icon: <UiUxDesignIcon />,
        //     title: "UI/UX Design",
        //     sm_des: "We create and manage social media campaigns to increase brand awareness and engagement.",
        //     link: "/service/ui-ux-design",
        // },
        // {
        //     id: 5, 
        //     shape: service_shape_1,
        //     icon: <MarketingIcon />,
        //     title: "Digital Marketing",
        //     sm_des: "We develop digital strategies, products and services appreciated by clients.",
        //     link: "/service/digital-marketing",
        // },
        {
            id: 6, 
            shape: service_shape_2,
            icon: <SEOAnalyticsIcon />,
            title: "SEO Services",
            sm_des: "As a reliable provider of SEO service in Noida, we optimize your website to improve search engine rankings, increase traffic, and generate quality leads.",
            link: "/services/seo-services",
        },
        {
            id: 7, 
            shape: service_shape_3,
            icon: <SocialMarketingIcon />,
            title: "Social Marketing",
            sm_des: "Our team works as a professional social marketing agency, creating social media campaigns that increase brand awareness, engagement, and online visibility.",
            link: "/services/social-media-marketing-services",
        }
    ],
    sm_info: <><h3>You can also find our <Link href="/service"> Services <i className="d-none d-md-block"> <SmollRound /> </i> </Link> to contact for the consulting.</h3></>,
}
const {sub_title, sub_title_2, title, service_data, sm_info}  = service_content


const ServicesAreaHomeFour = ({style}: any) => {
    return (
        <>
           <section className="services-area pb-120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12"> 
                        <div className={`${style ? "optimize-subtitle mb-50" : "section-wrapper mb-60"} text-center`}>
                            <span>{style ? sub_title_2 : sub_title }</span>
                            <h2 className={`section-title-4 ${style ? "fs-54" : ""}`}>{ style ? "" : title}</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="services-item-4 text-center mb-55">
                                    <div className="services-icon-4 mb-30">
                                        <Image src={item.shape} alt={item.title} title={item.title} />
                                        <i> {item.icon} </i>
                                    </div>
                                    <div className="services-content-4">
                                        <h5 className="title mb-20">{item.title}</h5>
                                        <p>{item.sm_des}</p> 
                                        <div className={`${style ? "services-inner-btn" : "services-btn-4"} p-relative`}>
                                            <Link href={item.link}>
                                                <span>Read More</span>
                                                <i> <RightArrowThree />  </i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                        )} 
                    </div>
                    {style ? "" : 
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="services-bottom text-center">
                                    <div className="servics-details-4 d-flex align-items-center justify-content-center">
                                        <Image src={header_rocket} alt="Rocket Icon" title="Rocket Icon" />
                                        <p>{sm_info}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section> 
        </>
    );
};

export default ServicesAreaHomeFour;