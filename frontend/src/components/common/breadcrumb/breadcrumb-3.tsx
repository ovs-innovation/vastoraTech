'use client'
import Image, { StaticImageData } from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


type props_type = {
    sub_title: string,
    title: JSX.Element,
    description?: string | JSX.Element,
    img?: StaticImageData,
    style: boolean,
    shape_1_2: StaticImageData,
    shape_1: StaticImageData,
    shape_2: StaticImageData,
    shape_3: StaticImageData,
    shape_4?: StaticImageData,
    shape_5?: StaticImageData,
}
const BreadcrumbThree = ({ sub_title, title, description, img, style, shape_1_2,shape_1,shape_2,shape_3,shape_4,shape_5 }: props_type) => {
    return (
        <> <MouseParallaxContainer>
            <section className="markiting-area markiting-wrap" style={{ background: '#E4ECF8', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="markiting-content">
                                <span style={{ color: '#2B6BB3' }}>{sub_title}</span>
                                <h4 className="markiting-title" style={{ color: 'black' }}>{title}</h4>
                                {description && <p style={{ fontSize: '18px', color: '#555', marginTop: '15px' }}>{description}</p>}
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
                        {shape_4 ? (
                            <MouseParallaxChild factorX={0.02} factorY={0.02} className="tpbanner-shape-five">
                                {/* <Image className="layer" data-depth="0.2" src={shape_4} alt="theme-pure" /> */}
                            </MouseParallaxChild>
                        ) : null}
                        {shape_5 ? (
                            <MouseParallaxChild factorX={0.07} factorY={0.07} className="tpbanner-shape-six">
                                <Image className="layer" data-depth="0.3" src={shape_5} alt="theme-pure" />
                            </MouseParallaxChild>
                        ) : null}
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
            {img ? (
                <div className={`${style ? "pb-60" : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="markiting-bg text-center" style={{ marginTop: '40px' }}>
                                    <Image src={img} className="img-fluid markiting-bg-img" alt="" style={{ width: '85%', height: '400px', objectFit: 'cover', margin: '0 auto', borderRadius: '16px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <></>}
            {/* <!-- markiting-area-end --> */}
        </MouseParallaxContainer>
        </>
    );
};

export default BreadcrumbThree;