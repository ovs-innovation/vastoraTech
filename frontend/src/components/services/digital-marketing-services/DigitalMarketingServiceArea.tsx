import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import digital_marketing_1 from "@/assets/img/services/digital-marketing.png";
import digital_marketing_2 from "@/assets/img/services/email-marketing.png";
import digital_marketing_3 from "@/assets/img/services/content-marketing (1).png";
import digital_marketing_4 from "@/assets/img/services/promotion.png";
import digital_marketing_5 from "@/assets/img/services/optimization.png";
import digital_marketing_6 from "@/assets/img/services/keywords.png"; 

// digital marketing data type
type digital_marketing_service_data_type = {
    id: number;
    img: StaticImageData;
    title: string;
    sm_info: JSX.Element;
}[]

// digital marketing data 
const digital_marketing_service_data: digital_marketing_service_data_type = [
    {
        id: 1,
        img: digital_marketing_1,
        title: "Social Media Marketing",
        sm_info: <>Boost your brand presence <br /> across all platforms.</>,
    },
    {
        id: 2,
        img: digital_marketing_2,
        title: "Email Marketing",
        sm_info: <>Engage customers with <br /> targeted email campaigns.</>,
    },
    {
        id: 3,
        img: digital_marketing_3,
        title: "Content Marketing",
        sm_info: <>Create compelling content <br /> that drives engagement.</>,
    },
    {
        id: 4,
        img: digital_marketing_4,
        title: "PPC Advertising",
        sm_info: <>Drive immediate traffic <br /> with paid campaigns.</>,
    },
    {
        id: 5,
        img: digital_marketing_5,
        title: "Analytics & Reporting",
        sm_info: <>Track performance with <br /> detailed insights.</>,
    },
    {
        id: 6,
        img: digital_marketing_6,
        title: "Conversion Optimization",
        sm_info: <>Optimize for maximum <br /> conversion rates.</>,
    },
]

type style_type = {
    style?: any,
}

const DigitalMarketingServiceArea = ({style} : style_type) => {
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
                        {digital_marketing_service_data.map((item, i) => (
                          <li key={i}>
                            <div className={`tpservices-wrapper tpservices-item${item}`}>
                              <div className="tpservices-img mb-35">
                                <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tpservices-content">
                                <span>{item.title}</span>
                                <h4 className="tpservices-title">
                                  <Link href="/digital-marketing">{item.sm_info}</Link>
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

export default DigitalMarketingServiceArea; 