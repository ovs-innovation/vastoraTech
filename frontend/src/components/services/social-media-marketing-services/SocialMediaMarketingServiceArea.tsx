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
      sm_info: <>Manage and optimize your brand presence across platforms like Instagram, Facebook, LinkedIn, and Twitter with our expert social media management services..</>,
    },
    {
        id: 2,
        img: social_media_2,
        title: "Content Creation",
      sm_info: <>Our creative team develops engaging visuals, reels, and posts that help brands grow with effective social media marketing strategies..</>,
    },
    {
        id: 3,
        img: social_media_3,
        title: "Community Building",
      sm_info: <>We help brands build a loyal audience through consistent engagement, comments management, and strategic interaction with followers.</>,
    },
    {
        id: 4,
        img: social_media_4,
        title: "Paid Social Media Advertising",
      sm_info: <>Our targeted campaigns help businesses reach the right audience and generate leads through professional social marketing agency strategies.</>,
    },
    {
        id: 5,
        img: social_media_5,
        title: "Analytics & Performance Tracking",
      sm_info: <>We track performance, engagement, and campaign success to improve results with data-driven social media marketing services..</>,
    },
    {
        id: 6,
        img: social_media_6,
        title: "Influencer Marketing",
      sm_info: <>Collaborate with relevant influencers to boost brand visibility and grow faster with strategies from the best social media marketing agency..</>,
    },
]

type style_type = {
    style?: any,
}

const SocialMediaMarketingServiceArea = ({style} : style_type) => {
    return (
      <>
        <section className={`services-area ${style ? "pb-110" : "pt-60 pb-60"}`}>
          <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title-4-area text-center mb-60">
                        <h2 className="section-title-4" style={{ fontSize: '36px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>Our Social Media Marketing Services</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                            At Vastora Tech, we provide complete social media marketing services to help businesses build a strong online presence, engage audiences, and generate leads through strategic campaigns.
                        </p>
                    </div>
                </div>
            </div>
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
                                <h4 className="tpservices-title">
                                  <Link href="/social-media-marketing-services">{item.title}</Link>
                                </h4>
                                <span style={{ color: '#555', fontSize: '14px', fontWeight: 'normal', lineHeight: '1.5', display: 'block', marginTop: '10px' }}>
                                    {item.sm_info}
                                </span>
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