"use client"
import Image from "next/image";
import { useState } from 'react';
import VideoPopup from "@/componentsmodals/video-popup";
import about_bg_img from "@/assets/img/bg/about-5-bg-21.jpg";

import video_shape_1 from "@/assets/img/shape/video-blue.png";
import video_shape_2 from "@/assets/img/shape/video-white.png";

import about_shape_1 from "@/assets/img/shape/about-5-shape-1.svg";
import about_shape_2 from "@/assets/img/shape/about-5-shape-2.svg";

const about_content = {
	sub_title: "About Us",
	title: "Building eCommerce Success, Together",
	sm_des: "At Vastora Tech, we empower businesses to launch, scale, and grow their online stores with smart, high-performance eCommerce website development and professional web design and development solutions..",
	about_data: [
		{
			id: 1,
			cls: "about-5-item",
			img: about_shape_1,
			info: <>To empower businesses with smart, scalable eCommerce solutions that drive faster growth and better customer experiences.

			</>,
		},
		{
			id: 2,
			cls: "about-5-item about-5-item-2",
			img: about_shape_2,
			info: <>To be a trusted eCommerce partner helping brands of all sizes launch, scale, and succeed with innovative, technology-driven solutions.</>,
		},
	]

}
const { sub_title, title, sm_des, about_data } = about_content

const AboutAreaHomeFive = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<>
			<section className="about-area mt-100 pb-60">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="about-5">
								<div className="section-wrapper mb-70">
									<span className="sub-title">{sub_title}</span>
									<h2 className="title">{title}</h2>
									<p>{sm_des}</p>
								</div>
								<div className="about-5-content">
									<div className="row">
										{about_data.map((item, i) =>
											<div key={i} className="col-lg-6 col-md-6">
												<div className={item.cls}>
													<div className="about-5-item-title mb-20">
														<span>
															<Image src={item.img} alt="About Section Icon" title="About Section Icon" />
														</span>
													</div>
													<div className="about-5-item-text">
														<p>{item.info}</p>
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="about-5-thumb p-relative">
								<Image className="tpchoose-border-anim" src={about_bg_img} alt="About Vastora Tech" title="About Vastora Tech" />
								{/* <a
									onClick={() => setIsVideoOpen(true)}
									style={{ cursor: "pointer" }}
									className="popup-video">
									<div className="about-5-shape">
										<div className="about-5-shape-one">
											<Image src={video_shape_1} alt="Video Play Button" title="Video Play Button" />
										</div>
										<div className="about-5-shape-two">
											<Image src={video_shape_2} alt="Video Play Button Background" title="Video Play Button Background" />
										</div>
										<div className="about-5-video-icon">
											<i className="fa-solid fa-play"></i>
										</div>
									</div>
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* video modal start */}
			<VideoPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
				videoId={"TYYf8zYjP5k"}
			/>
			{/* video modal end */}
		</>
	);
};

export default AboutAreaHomeFive;