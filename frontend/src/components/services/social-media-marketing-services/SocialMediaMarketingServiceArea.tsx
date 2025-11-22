import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// import social_media_1 from "@/assets/img/services/social-media/services-inner-thumb-1.png";
// import social_media_2 from "@/assets/img/services/social-media/services-inner-thumb-2.png";
// import social_media_3 from "@/assets/img/services/social-media/services-inner-thumb-3.png";
// import social_media_4 from "@/assets/img/services/promotion.png";
// import social_media_5 from "@/assets/img/services/optimization.png";
// import social_media_6 from "@/assets/img/services/keywords.png"; 
import social_media_1 from "@/assets/img/services/websiteAudit.png";
import social_media_2 from "@/assets/img/services/optimization.png";
import social_media_3 from "@/assets/img/services/internet.png";
import social_media_4 from "@/assets/img/services/offPageSeo.png";
import social_media_5 from "@/assets/img/services/content-marketing (1).png";
import social_media_6 from "@/assets/img/services/keywords.png"; 

// social media marketing data type
type social_media_service_data_type = {
    id: number;
    img: StaticImageData;
    title: string;
    sm_info: JSX.Element;
}[]

// social media marketing data 
const social_media_service_data: social_media_service_data_type = [
    {
        id: 1,
        img: social_media_1,
        title: "Platform Management",
      sm_info: <>Keep your brand active everywhere.</>,
    },
    {
        id: 2,
        img: social_media_2,
        title: "Content Creation",
      sm_info: <>Create content that stands out.</>,
    },
    {
        id: 3,
        img: social_media_3,
        title: "Community Building",
      sm_info: <>Build a loyal and engaged audience.</>,
    },
    {
        id: 4,
        img: social_media_4,
        title: "Paid Advertising",
      sm_info: <>Reach more customers with smart ads.</>,
    },
    {
        id: 5,
        img: social_media_5,
        title: "Analytics & Insights",
      sm_info: <>Measure performance. Improve results.</>,
    },
    {
        id: 6,
        img: social_media_6,
        title: "Influencer Marketing",
      sm_info: <>Grow faster with influencer partnerships.</>,
    },
]

type style_type = {
    style?: any,
}

const SocialMediaMarketingServiceArea = ({style} : style_type) => {
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
                        {social_media_service_data.map((item, i) => (
                          <li key={i}>
                            <div className={`tpservices-wrapper tpservices-item${item}`}>
                              <div className="tpservices-img mb-35">
                                <Image src={item.img} alt="theme-pure" />
                              </div>
                              <div className="tpservices-content">
                                <span>{item.title}</span>
                                <h4 className="tpservices-title">
                                  <Link href="/social-media-marketing">{item.sm_info}</Link>
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

export default SocialMediaMarketingServiceArea; 