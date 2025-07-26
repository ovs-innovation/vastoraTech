import Link from "next/link";
 import Image, { StaticImageData } from "next/image";

import web_service_1 from "@/assets/img/services/e-commerce-icon.png";
import audit_service_2 from "@/assets/img/services/cms-development-icon.png";
import audit_service_3 from "@/assets/img/services/wordpress-development-icon.png";
import audit_service_4 from "@/assets/img/services/constom-web-development-icon.png";
import audit_service_5 from "@/assets/img/services/api-integration-service-icon.png";
import audit_service_6 from "@/assets/img/services/web-maintenance-icon.png"; 
// audit data type
type web_service_data_type = {
    id: number;
    img: StaticImageData;
    title: string;
    sm_info: JSX.Element;
}[]
// audit data 
const web_service_data: web_service_data_type = [
    {
        id: 1,
        img: web_service_1,
        title: "E-commerce Development",
        sm_info: <>Customized e-commerce,<br />WooCommerce, Shopify, etc.</>,
    },
    {
        id: 2,
        img: audit_service_2,
        title: "CMS/ERP website",
        sm_info: <>CRM, dashboards, booking  <br />  systems, SaaS platforms.</>,
    },
    {
        id: 3,
        img: audit_service_3,
        title: "WordPress website",
        sm_info: <>Custom WordPress website <br /> development.</>,
    },
    {
        id: 4,
        img: audit_service_4,
        title: "Custom Website Development",
        sm_info: <>Business websites, portfolios,<br /> blogs, etc.</>,
    },
    {
        id: 5,
        img: audit_service_5,
        title: "API Integration",
        sm_info: <>Payment gateways, <br />third-party tools integration.</>,
    },
    {
        id: 6,
        img: audit_service_6,
        title: "Website Maintenance",
        sm_info: <>Ongoing support, updates,<br /> bug fixes.</>,
    },
]

type  style_type = {
    style?: any,
}

const AuditServiceArea = ({style} : style_type) => {
    return (
      <>
        <section className={`services-area ${style ? "pb-110" : "pt-120 pb-95"}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style ? "" : "services-border-less"}`}>
                  <div className="tpservices">
                    <div className="tpservices-list">
                      <ul>
                        {web_service_data.map((item, i) => (
                          <li key={i}>
                            <div className={`tpservices-wrapper tpservices-item${item.id}`}>
                              <div className="tpservices-img mb-35">
                                <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tpservices-content">
                                <span>{item.title}</span>
                                <h4 className="tpservices-title">
                                  <Link href="/seo-audit">{item.sm_info}</Link>
                                </h4>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default AuditServiceArea;