"use client";
import Image from "next/image";
import Slider from "react-slick";
import Wavify from "react-wavify";
import type { CustomArrowProps } from "react-slick";
// brands images
import brand_log_1 from "@/assets/img/brand/brand1.png";
import brand_log_2 from "@/assets/img/brand/brand2.png";
import brand_log_3 from "@/assets/img/brand/brand3.png";
import brand_log_4 from "@/assets/img/brand/brand4.png";
import brand_log_5 from "@/assets/img/brand/brand5.png";
import brand_log_6 from "@/assets/img/brand/brand6.png";
import brand_log_7 from "@/assets/img/brand/brand7.png";
import brand_log_8 from "@/assets/img/brand/brand8.png";
import brand_log_9 from "@/assets/img/brand/brand9.png";
import brand_log_10 from "@/assets/img/brand/brand10.png";
import brand_log_11 from "@/assets/img/brand/brand11.png";
import brand_log_12 from "@/assets/img/brand/brand12.png";
import brand_log_13 from "@/assets/img/brand/brand13.png";
import brand_log_14 from "@/assets/img/brand/brand14.png";
import brand_log_15 from "@/assets/img/brand/brand15.png";
import brand_log_16 from "@/assets/img/brand/brand16.png";
import brand_log_17 from "@/assets/img/brand/brand17.png";
import brand_log_18 from "@/assets/img/brand/brand18.png";
import brand_log_19 from "@/assets/img/brand/brand19.png";
import brand_log_20 from "@/assets/img/brand/brand20.png";
import brand_log_21 from "@/assets/img/brand/brand21.png";
import brand_log_22 from "@/assets/img/brand/brand22.png";
import brand_log_23 from "@/assets/img/brand/brand23.png";
import brand_log_24 from "@/assets/img/brand/brand24.png";
import brand_log_25 from "@/assets/img/brand/brand25.png";
import brand_log_26 from "@/assets/img/brand/brand26.png";
import brand_log_27 from "@/assets/img/brand/brand27.png";
import brand_log_28 from "@/assets/img/brand/brand28.png";
import brand_log_29 from "@/assets/img/brand/brand29.png";
import brand_log_30 from "@/assets/img/brand/brand30.png";
import brand_log_31 from "@/assets/img/brand/brand31.png";
import brand_log_32 from "@/assets/img/brand/brand32.png";
import brand_log_33 from "@/assets/img/brand/brand33.png";
import brand_log_34 from "@/assets/img/brand/brand34.png";

const brands_images = [
  brand_log_1,
  brand_log_2,
  brand_log_3,
  brand_log_4,
  brand_log_5,
  brand_log_6,
  brand_log_7,
  brand_log_8,
  brand_log_9,
  brand_log_10,
  brand_log_11,
  brand_log_12,
  brand_log_13,
  brand_log_14,
  brand_log_15,
  brand_log_16,
  brand_log_17,
  brand_log_18,
  brand_log_19,
  brand_log_20,
  brand_log_21,
  brand_log_22,
  brand_log_23,
  brand_log_24,
  brand_log_25,
  brand_log_26,
  brand_log_27,
  brand_log_28,
  brand_log_29,
  brand_log_30,
  brand_log_31,
  brand_log_32,
  brand_log_33,
  brand_log_34,
];

// const NextArrow = (props: CustomArrowProps) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         top: "40%",
//         right: 0,
//         transform: "translateY(-50%)",
//         zIndex: 2,
//         background: "#fff",
//         borderRadius: "50%",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         width: "40px",
//         height: "40px",
//         cursor: "pointer",
//       }}
//       onClick={onClick}
//     >
//       <span style={{ fontSize: "24px", color: "#888" }}>{">"}</span>
//     </div>
//   );
// };

// const PrevArrow = (props: CustomArrowProps) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         top: "40%",
//         left: 0,
//         transform: "translateY(-50%)",
//         zIndex: 2,
//         background: "#fff",
//         borderRadius: "50%",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         width: "40px",
//         height: "40px",
//         cursor: "pointer",
//       }}
//       onClick={onClick}
//     >
//       <span style={{ fontSize: "24px", color: "#888" }}>{"<"}</span>
//     </div>
//   );
// };

const setting = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  // nextArrow: <NextArrow />,
  // prevArrow: <PrevArrow />,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BrandAreaHomeFour = () => {
  return (
    <>
      <section className="brand-area brand-bg-3 mb-120 p-relative">
        <div className="brand-bg-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="brand-wrapper text-center">
                  <h5 className="title">Our Clients :</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div style={{ position: "relative" }}>
                  <Slider
                    {...setting}
                    className="tpbrand tpbrand-active-4 mb-170"
                  >
                    {brands_images.map((item, i) => (
                      <div key={i} className="tpbrand-item-4 mb-35">
                        <Image
                          src={item}
                          alt="vastora tech clients"
                          className="w-50 h-50 "
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- wave-animation --> */}
        <div className="wave-bg">
          <Wavify
            fill="rgba(255, 255, 255, 1)"
            paused={false}
            className="wave wave-1"
            options={{
              height: 150,
              amplitude: 70,
              speed: 0.21,
            }}
          />
          <Wavify
            fill="#F7EFFD"
            paused={false}
            className="wave"
            options={{
              height: 150,
              amplitude: 45,
              speed: 0.24,
            }}
          />
        </div>
        {/* <!-- wave-animation-end --> */}
      </section>
    </>
  );
};

export default BrandAreaHomeFour;
