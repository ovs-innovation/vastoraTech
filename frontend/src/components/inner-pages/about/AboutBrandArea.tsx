'use client'
import { useRef } from 'react';
import Image, { StaticImageData } from "next/image";
import Slider from 'react-slick';
import about_brand_img_1 from "@/assets/img/brand/brand1.png";
import about_brand_img_2 from "@/assets/img/brand/brand2.png";
import about_brand_img_3 from "@/assets/img/brand/brand3.png";
import about_brand_img_4 from "@/assets/img/brand/brand4.png";
import about_brand_img_5 from "@/assets/img/brand/brand5.png";   
import about_brand_img_6 from "@/assets/img/brand/brand6.png"; 
import about_brand_img_7 from "@/assets/img/brand/brand7.png";
import about_brand_img_8 from "@/assets/img/brand/brand8.png";
import about_brand_img_9 from "@/assets/img/brand/brand9.png";
import about_brand_img_10 from "@/assets/img/brand/brand10.png";
import about_brand_img_11 from "@/assets/img/brand/brand11.png";
import about_brand_img_12 from "@/assets/img/brand/brand12.png";
import about_brand_img_13 from "@/assets/img/brand/brand13.png";
import about_brand_img_14 from "@/assets/img/brand/brand14.png";
import about_brand_img_15 from "@/assets/img/brand/brand15.png";
import about_brand_img_16 from "@/assets/img/brand/brand16.png";
import about_brand_img_17 from "@/assets/img/brand/brand17.png";
import about_brand_img_18 from "@/assets/img/brand/brand18.png";
import about_brand_img_19 from "@/assets/img/brand/brand19.png";
import about_brand_img_20 from "@/assets/img/brand/brand20.png";
import about_brand_img_21 from "@/assets/img/brand/brand21.png";
import about_brand_img_22 from "@/assets/img/brand/brand22.png";
import about_brand_img_23 from "@/assets/img/brand/brand23.png";
import about_brand_img_24 from "@/assets/img/brand/brand24.png";
import about_brand_img_25 from "@/assets/img/brand/brand25.png";
import about_brand_img_26 from "@/assets/img/brand/brand26.png";
import about_brand_img_27 from "@/assets/img/brand/brand27.png";
import about_brand_img_28 from "@/assets/img/brand/brand28.png";
import about_brand_img_29 from "@/assets/img/brand/brand29.png";
import about_brand_img_30 from "@/assets/img/brand/brand30.png";
import about_brand_img_31 from "@/assets/img/brand/brand31.png";
import about_brand_img_32 from "@/assets/img/brand/brand32.png";
import about_brand_img_33 from "@/assets/img/brand/brand33.png";
import about_brand_img_34 from "@/assets/img/brand/brand34.png";
import ScrollDownBtn from '@/svg/about_btn/ScrollDownBtn'; 

// about brand data type
type about_brand_content_type = {
    scroll_btn: JSX.Element;
    about_brand: {
        id: number;
        img: StaticImageData;
    }[];
}
// about brand data
const about_brand_content: about_brand_content_type = {
    scroll_btn: <>Scroll down <br /> to explore more</>,
    about_brand: [
        {id: 1, img: about_brand_img_1},
        {id: 2, img: about_brand_img_2},
        {id: 3, img: about_brand_img_3},
        {id: 4, img: about_brand_img_4},
        {id: 5, img: about_brand_img_5},
        {id: 6, img: about_brand_img_6},
        {id: 7, img: about_brand_img_7},
        {id: 8, img: about_brand_img_8},
        {id: 9, img: about_brand_img_9},
        {id: 10, img: about_brand_img_10},
        {id: 11, img: about_brand_img_11},
        {id: 12, img: about_brand_img_12},
        {id: 13, img: about_brand_img_13},
        {id: 14, img: about_brand_img_14},
        {id: 15, img: about_brand_img_15},
        {id: 16, img: about_brand_img_16},
        {id: 17, img: about_brand_img_17},
        {id: 18, img: about_brand_img_18},
        {id: 19, img: about_brand_img_19},
        {id: 20, img: about_brand_img_20},
        {id: 21, img: about_brand_img_21},
        {id: 22, img: about_brand_img_22},
        {id: 23, img: about_brand_img_23},
        {id: 24, img: about_brand_img_24},
        {id: 25, img: about_brand_img_25},
        {id: 26, img: about_brand_img_26},
        {id: 27, img: about_brand_img_27},
        {id: 28, img: about_brand_img_28},
        {id: 29, img: about_brand_img_29},
        {id: 30, img: about_brand_img_30},
        {id: 31, img: about_brand_img_31},
        {id: 32, img: about_brand_img_32},
        {id: 33, img: about_brand_img_33},
        {id: 34, img: about_brand_img_34}

    ]
}
const {scroll_btn, about_brand} = about_brand_content

const setting = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
}
const AboutBrandArea = () => {
    const sliderRef = useRef(null)
    return (
        <>
            <section className="brand-area pb-120">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4">
                            <div className="brand-wrapper ">
                                <div className="brand-inner-content">
                                    <h4 className="brand-inner-title">{scroll_btn}</h4>
                                    <a href="#our-misson">
                                        <i><ScrollDownBtn /></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8">
                            <Slider {...setting} ref={sliderRef} className="brand-inner-wrapper tpbrand-inner-active">
                                {about_brand.map((item, i)  => 
                                    <div key={i} className="tpbrand-inner-item">
                                        <Image src={item.img} alt="vastora tech clients" />
                                    </div>                                
                                )}                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutBrandArea;