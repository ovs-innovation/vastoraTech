import Link from "next/link";
 import Image, { StaticImageData } from "next/image";

import audit_service_1 from "@/assets/img/services/websiteAudit.png";
import audit_service_2 from "@/assets/img/services/optimization.png";
import audit_service_3 from "@/assets/img/services/internet.png";
import audit_service_4 from "@/assets/img/services/offPageSeo.png";
import audit_service_5 from "@/assets/img/services/content-marketing (1).png";
import audit_service_6 from "@/assets/img/services/keywords.png"; 
// audit data type
type audit_service_data_type = {
    id: number;
    img: StaticImageData;
    title: string;
    sm_info: JSX.Element;
    sm_info2: JSX.Element;
}[]
// audit data 
const audit_service_data: audit_service_data_type = [
    {
        id: 1,
        img: audit_service_1,
        title: "Website Audit",
        sm_info: <>Complete SEO Audit</>,
        sm_info2: <>We perform a complete website audit to identify technical errors, SEO issues, and improvement opportunities that may be affecting your search engine ranking</>,
    
    },
    {
        id: 2,
        img: audit_service_2,
        title: "SEO Optimization",
        sm_info: <>Technical SEO Optimization.</>,
        sm_info2: <>Our experts improve your website’s technical structure to boost visibility and performance on search engines. This includes fixing crawl errors, improving speed, and optimizing site architecture</>
    },
    {
        id: 3,
        img: audit_service_3,
        title: "On Page SEO",
        sm_info: <>On Page SEO Services.</>,
        sm_info2: <>We optimize your website pages with proper keywords, meta tags, headings, and internal linking to help search engines understand your content and improve rankings</>
    },
    {
        id: 4,
        img: audit_service_4,
        title: "Off Page SEO",
        sm_info: <>Off Page SEO & Link Building.</>,
        sm_info2: <>Our off-page SEO strategies focus on building high-quality backlinks, improving domain authority, and increasing your website’s credibility across search engines</>
    },
    {
        id: 5,
        img: audit_service_5,
        title: "Content Marketing",
        sm_info: <>SEO Content Marketing.</>,
        sm_info2: <>We create optimized content that attracts visitors, improves engagement, and helps your website rank higher on Google through strategic keyword placement.</>
    },
    {
        id: 6,
        img: audit_service_6,
        title: "Keyword Research",
        sm_info: <>Advanced Keyword Research.</>,
        sm_info2: <>Our team identifies high-potential keywords such as SEO services near me, SEO agency near me, and SEO services in Noida to ensure your website reaches the right audience</>
    },
]

type  style_type = {
    style?: any,
}

const AuditServiceArea = ({style} : style_type) => {
    return (
      <>
        <section className={`services-area ${style ? "pb-110" : "pt-60 pb-60"}`}>
          <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section-title-4-area text-center mb-60">
                        <h2 className="section-title-4" style={{ fontSize: '36px', fontWeight: '700', color: '#000', marginBottom: '20px' }}>Our Professional SEO Services</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                            At Vastora Tech, we provide result-driven SEO services that help businesses improve their Google rankings, increase website traffic, and generate quality leads. As a growing SEO agency in Noida, we focus on strategies that deliver long-term results for startups, businesses, and e-commerce brands
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
                        {audit_service_data.map((item, i) => (
                          <li key={i}>
                            <div className={`tpservices-wrapper tpservices-item${item}`}>
                              <div className="tpservices-img mb-35">
                                <Image src={item.img} alt={item.title} title={item.title} />
                              </div>
                              <span style={{ color: '#555', fontSize: '20px', fontWeight: 'normal', lineHeight: '1.5', display: 'block', marginTop: '10px', marginBottom: '10px' }}>
                                  {item.title}
                                </span>
                              <div className="tpservices-content">
                                <h4 className="tpservices-title" style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                                  <Link href="/seo-audit">{item.sm_info}</Link>
                                </h4>
                                <span style={{ color: '#555', fontSize: '14px', fontWeight: 'normal', lineHeight: '1.5', display: 'block', marginTop: '10px' }}>
                                  {item.sm_info2}
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

export default AuditServiceArea;