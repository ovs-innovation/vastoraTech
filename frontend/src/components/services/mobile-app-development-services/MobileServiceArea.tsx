import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import app_service_1 from "@/assets/img/services/app_service_01.png";
import app_service_2 from "@/assets/img/services/app_service_02.png";
import app_service_3 from "@/assets/img/services/app_service_03.png";
import app_service_4 from "@/assets/img/services/app_service_04.png";

// audit data type
type mobile_service_data_type = {
  id: number;
  img: StaticImageData;
  title: string;
  sm_info: JSX.Element;
}[]
// audit data 
const mobile_service_data: mobile_service_data_type = [
  {
    id: 1,
    img: app_service_1,
    title: "Mobile App Development",
    sm_info: <>Custom iOS, Android, and cross-platform apps built for fast, scalable performance.</>,
  },
  {
    id: 2,
    img: app_service_2,
    title: "Cross-platform Apps",
    sm_info: <> Build Android and iOS apps with a single codebase using React Native.
</>,
  },
  {
    id: 3,
    img: app_service_3,
    title: "Mobile Backend & APIs",
    sm_info: <>Secure backend with Firebase, cloud services, and API integrations..</>,
  },
  {
    id: 4,
    img: app_service_4,
    title: "App Maintenance",
    sm_info: <>Secure backend with Firebase, cloud services, and API integrations.</>,
  },
]

type style_type = {
  style?: any,
}

const MobileServiceArea = ({ style }: style_type) => {
  return (
    <>
      <section className={`services-area ${style ? "pb-30" : "pt-10 pb-95"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${style ? "" : "services-border-less"}`}>
                <div className="tpservices">
                  <div className="tpservices-list">
                    <ul>
                      {mobile_service_data.map((item, i) => (
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

export default MobileServiceArea;