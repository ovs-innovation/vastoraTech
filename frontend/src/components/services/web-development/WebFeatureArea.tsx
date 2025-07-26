import Link from "next/link";
import Image from "next/image";
import RightArrowAdit from "@/svg/arrow_btn/RightArrowAdit";

import audit_shpae_1 from "@/assets/img/feature/inner/feature-inner-thumb-2.png";
import audit_shpae_2 from "@/assets/img/feature/inner/feature-inner-shape-1.png";

// data type
type web_content_type = {
    title: JSX.Element,
    sm_info: JSX.Element,
}
const web_content: web_content_type = {
    title: <>High-Performance Websites<br /> Built to Grow Your Business</>,
    sm_info: <>From landing pages to full-scale web apps — we craft fast, responsive, and modern websites that deliver real results.</>,
}
const {title, sm_info}  = web_content
 
const WebFeatureArea = () => {
    return (
        <>
            <section className="feature-area pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="feature-inner-wrapper mb-50">
                                <h4 className="feature-inner-title-2">{title}</h4>
                                <p>{sm_info}</p>
                                <div className="feature-inner-btn">
                                    <Link href="/contact">Try it now <span> <RightArrowAdit /> </span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-inner-thumb-wrap p-relative mb-50">
                                <Image src={audit_shpae_1} alt="theme-pure" />
                                <div className="feature-inner-wrap-shape">
                                    <div className="feature-inner-wrap-shape-1">
                                        <Image src={audit_shpae_2} alt="theme-pure" />
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

export default WebFeatureArea;