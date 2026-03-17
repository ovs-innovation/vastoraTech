import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import web_service_1 from "@/assets/img/services/e-commerce-icon.png";
import web_service_2 from "@/assets/img/services/cms-development-icon.png";
import web_service_3 from "@/assets/img/services/wordpress-development-icon.png";
import web_service_4 from "@/assets/img/services/constom-web-development-icon.png";
import web_service_5 from "@/assets/img/services/api-integration-service-icon.png";
import web_service_6 from "@/assets/img/services/web-maintenance-icon.png";
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
    title: "E-Commerce Development",
    sm_info: <> Custom WooCommerce and Shopify stores for smooth online selling.</>,
  },
  {
    id: 2,
    img: web_service_2,
    title: "CMS/ERP website",
    sm_info: <> CMS, CRM dashboards, booking systems, and SaaS platforms for business management.
      .</>,
  },
  // {
  //     id: 3,
  //     img: web_service_3,
  //     title: "WordPress website",
  //     sm_info: <>Custom WordPress website <br /> development.</>,
  // },
  {
    id: 4,
    img: web_service_4,
    title: "Custom Website Development",
    sm_info: <> Business websites, portfolios, blogs, and custom platforms built for your brand..</>,
  },
  {
    id: 5,
    img: web_service_5,
    title: "API Integration",
    sm_info: <> Secure integration for payment gateways and third-party services.
    </>,
  },
  {
    id: 6,
    img: web_service_6,
    title: "Website Maintenance",
    sm_info: <>Ongoing support, updates,<br /> bug fixes.</>,
  },
]

type style_type = {
  style?: any,
}

const AuditServiceArea = ({ style }: style_type) => {
  return (
    <>
      <section className={`services-area ${style ? "pb-50" : "pt-30 pb-95"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${style ? "" : "services-border-less"}`}>
                <div className="tpservices">
                  <div className="tpservices-list">
                    <ul>
                      {web_service_data.map((item, i) => (
                        <li key={i}>
                          <div className={`tpservices-wrapper tpservices-item${1}`}>
                            <div className="tpservices-img mb-35">
                              <Image src={item.img} alt="theme-pure" />
                            </div>
                            <div className="tpservices-content">
                              <h4 className="tpservices-title">{item.title}</h4>
                              <p>{item.sm_info}</p>
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