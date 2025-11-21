"use client"
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import QuteIcon from "@/svg/qute_icon";
import PrevArrow from "@/svg/prev-arrow";
import NextArrow from "@/svg/next_arrow";
import testimonial_data from "@/data/tptestimonial-data";

// slider setting 
const testimonialSliderSettings: Settings = {
  fade: false,
  autoplay: true,
  centerMode: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

type testimonial_content_type = {
	title: string;
	sm_info: string;
}
const testimonial_content: testimonial_content_type = {
	title: "Client love us & we love them",
	sm_info: "Trusted by over 1,900 clients worldwide",
}
const { title, sm_info } = testimonial_content

const TestimonialAreaHomeOne = () => {
	const sliderRef = useRef<Slider | null>(null);
	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};
	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	return (
		<>
			<section className="textimonial-area pb-120 fix">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="tpsection__content text-center mb-60">
								{/* <div className="tptestimonial-avatar-bg mb-15">
									<Image src={avatart_img} alt="theme-pure" />
								</div> */}
								<h2 className="tpsection__title">{title}</h2>
								<p>{sm_info}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="testimonial-deck">
						<Slider {...testimonialSliderSettings} ref={sliderRef} className="testimonial-deck__slider">
							{testimonial_data.map((item, i) =>
								<article key={item.id ?? i} className="testimonial-card">
									<div className="testimonial-card__quote">
										<QuteIcon />
									</div>
									{/* <div className="testimonial-card__avatar">
										<Image src={item.img} alt={item.avatar_name} />
									</div> */}
									<p className="testimonial-card__text">{item.info}</p>
									<div className="testimonial-card__meta">
										<h5>{item.avatar_name}</h5>
										<span>{item.job_title}</span>
									</div>
								</article>
							)}
						</Slider>
						<div className="testimonial-nav">
							<button type="button" className="testimonial-nav__btn" onClick={handlePrev} aria-label="Previous testimonial">
								<PrevArrow />
							</button>
							<button type="button" className="testimonial-nav__btn" onClick={handleNext} aria-label="Next testimonial">
								<NextArrow />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default TestimonialAreaHomeOne