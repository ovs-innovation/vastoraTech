'use client'
import Image, { StaticImageData } from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


import shape_1 from "@/assets/img/shape/banner-plus.png";
import shape_2 from "@/assets/img/shape/banner-dots.png";
import shape_3 from "@/assets/img/shape/banner-archer.png";
import shape_4 from "@/assets/img/shape/banner-pose.png";
import shape_5 from "@/assets/img/shape/banner-tree.png";
import shape_1_2 from "@/assets/img/shape/banner-megaphone.png";

type props_type = {
    sub_title: string,
    title: JSX.Element,
    img: StaticImageData,
    style: boolean,
}
const BreadcrumbThree = ({ sub_title, title, img, style }: props_type) => {
    return (
        <> <MouseParallaxContainer>
            <section className="markiting-area markiting-wrap" style={{ background: '#E4ECF8' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="markiting-content">
                                <span style={{ color: '#2B6BB3' }}>{sub_title}</span>
                                <h4 className="markiting-title" style={{ color: 'black' }}>{title}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="tpbanner-shape  d-none d-lg-block">
                        <MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-one" >
                            <Image className="layer" data-depth="0.3" src={shape_1} alt="theme-pure" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-three">
                            <Image className="layer" data-depth="0.4" src={shape_2} alt="theme-pure" />
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-four">
                            <Image src={shape_3} alt="theme-pure" />
                        </MouseParallaxChild >
                        {/* <MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-five">
                            <Image className="layer" data-depth="0.2" src={shape_4} alt="theme-pure" />
                        </MouseParallaxChild> */}
                        <MouseParallaxChild factorX={0.07} factorY={0.07} className="tpbanner-shape-six">
                            <Image className="layer" data-depth="0.3" src={shape_5} alt="theme-pure" />
                        </MouseParallaxChild>
                    </div>
                </div>

                <MouseParallaxChild factorX={0} factorY={0.1} className="tpbanner-shape-wrappers tpbanner-shape-y scene-y">
                    <div className="tpbanner-shape  d-none d-md-block">
                        <div className="tpbanner-shape-two" >
                            <Image className="layer" data-depth="0.6" src={shape_1_2} alt="theme-pure" />
                        </div>
                    </div>
                </MouseParallaxChild>
            </section>


            {/* <!-- markiting-area-start --> */}
            <div className={`${style ? "pb-105" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="markiting-bg">
                                <Image src={img} className="img-fluid markiting-bg-img" alt="" style={{ width: '100%', height: 'auto', maxHeight: '600px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- markiting-area-end --> */}
        </MouseParallaxContainer>
        </>
    );
};

export default BreadcrumbThree;