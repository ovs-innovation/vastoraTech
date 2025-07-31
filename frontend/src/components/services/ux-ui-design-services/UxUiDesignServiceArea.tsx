import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import ux_ui_1 from "@/assets/img/services/analysis/analysis-chart.png";
import ux_ui_2 from "@/assets/img/services/analysis/services-analysis-shape-1.png";
import ux_ui_3 from "@/assets/img/services/analysis/services-analysis-shape-2.png";
import ux_ui_4 from "@/assets/img/services/analysis/services-analysis-shape-3.png";
import ux_ui_5 from "@/assets/img/services/optimization.png";
import ux_ui_6 from "@/assets/img/services/keywords.png"; 

// UX/UI design data type
type ux_ui_service_data_type = {
    id: number;
    img: StaticImageData;
    title: string;
    sm_info: JSX.Element;
}[]

// UX/UI design data 
const ux_ui_service_data: ux_ui_service_data_type = [
    {
        id: 1,
        img: ux_ui_1,
        title: "User Research",
        sm_info: <>Understand your users <br /> through comprehensive research.</>,
    },
    {
        id: 2,
        img: ux_ui_2,
        title: "Wireframing",
        sm_info: <>Create detailed wireframes <br /> for optimal user flow.</>,
    },
    {
        id: 3,
        img: ux_ui_3,
        title: "Prototyping",
        sm_info: <>Build interactive prototypes <br /> to test user experience.</>,
    },
    {
        id: 4,
        img: ux_ui_4,
        title: "UI Design",
        sm_info: <>Design beautiful interfaces <br /> that users love.</>,
    },
    {
        id: 5,
        img: ux_ui_5,
        title: "Usability Testing",
        sm_info: <>Test and optimize <br /> user experience.</>,
    },
    {
        id: 6,
        img: ux_ui_6,
        title: "Design Systems",
        sm_info: <>Create scalable design <br /> systems for consistency.</>,
    },
]

type style_type = {
    style?: any,
}

const UxUiDesignServiceArea = ({style} : style_type) => {
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
                        {ux_ui_service_data.map((item, i) => (
                          <li key={i}>
                            <div className={`tpservices-wrapper tpservices-item${item}`}>
                              <div className="tpservices-img mb-35">
                                <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tpservices-content">
                                <span>{item.title}</span>
                                <h4 className="tpservices-title">
                                  <Link href="/ux-ui-design">{item.sm_info}</Link>
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

export default UxUiDesignServiceArea; 