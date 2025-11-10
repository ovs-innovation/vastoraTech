'use client'
import Link from "next/link";
import Image, { StaticImageData } from "next/image";


import blog_thumb_1 from "@/assets/img/blog/blog-big-3.jpg";
import blog_thumb_2 from "@/assets/img/blog/blog-big-2.jpg";
import blog_slider_1 from "@/assets/img/blog/blog-big-4.jpg";
import blog_slider_2 from "@/assets/img/blog/blog-big-5.jpg";
import blog_slider_3 from "@/assets/img/blog/blog-big-6.jpg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PrevBlogIcon from "@/svg/inner-pages-icons/PrevBlogIcon";
import NextBlogIcon from "@/svg/inner-pages-icons/NextBlogIcon";
import VideoPopup from "@/components/modals/video-popup";
import BlogSidebar from "@/components/inner-pages/blog-sidebar";


// blog article data type
interface blog_article_type {
	id: number;
	cls_1?: string;
	cls_2?: string;
	img?: StaticImageData;
	time?: string;
	post_writer?: string;
	comments?: string;
	title?: JSX.Element;
	article?: JSX.Element;

	blockquote_text?: string;
	cite_text?: string;
	audio_src?: string;
	slider?: StaticImageData[]
}[]


// blog article data 
const blog_article: blog_article_type[] = [
	{
		id: 1,
		cls_1: "format-image",
		cls_2: "",
		img: blog_thumb_1,
		time: "July 21, 2023",
		post_writer: "MR Tanvir",
		comments: "02",
		title: <>Perfect From Beginning to End Faster and More Efficiently</>,
		article: <>Voluptate ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</>
	},
	{
		id: 2,
		cls_1: "format-video",
		cls_2: "tp-postbox-video p-relative",
		img: blog_thumb_2,
		time: "July 24, 2023",
		post_writer: "RJ Salman",
		comments: "05",
		title: <>Six Ways to Improve Conversions and Makes Employes Happy </>,
		article: <>Voluptate ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</>
	},
	{
		id: 3,
		cls_1: "format-quote",
		cls_2: "tp-postbox-quote",
		blockquote_text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
		cite_text: "MR Tanvir",
	},
	{
		id: 4,
		cls_1: "format-audio",
		cls_2: "tp-postbox-audio p-relative",
		audio_src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
		time: "July 14, 2023",
		post_writer: "RJ Tutul",
		comments: "07",
		title: <>Complete Link Building Guide for Beginners From the Professionals</>,
		article: <>Voluptate ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</>
	},
	{
		id: 5,
		cls_1: "format-image",
		cls_2: "tp-postbox-audio p-relative",
		slider: [
			blog_slider_1,
			blog_slider_2,
			blog_slider_3,
		],
		time: "July 18, 2023",
		post_writer: "RJ Farabi",
		comments: "07",
		title: <>Getting Ready to Chase Google Sitelinks</>,
		article: <>Voluptate ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</>
	},
]

const setting = {
	slidesPerView: 1,
	spaceBetween: 0,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: ".tp-postbox-slider-button-next",
		prevEl: ".tp-postbox-slider-button-prev",
	},
	breakpoints: {
		'1200': {
			slidesPerView: 1,
		},
		'992': {
			slidesPerView: 1,
		},
		'768': {
			slidesPerView: 1,
		},
		'576': {
			slidesPerView: 1,
		},
		'0': {
			slidesPerView: 1,
		},
	},
}

const BlogPostboxArea = () => {
	const [blogs, setBlogs] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const url = process.env.NEXT_PUBLIC_API_URL
					? `${process.env.NEXT_PUBLIC_API_URL}/blogs`
					: "http://localhost:8081/api/blogs";
				const res = await fetch(url);
				const data = await res.json();
				// Accept various backend response envelopes
				setBlogs(data.blogs || data.data || []);
			} catch (err: any) {
				setError("Could not fetch blogs");
			} finally {
				setLoading(false);
			}
		};
		fetchBlogs();
	}, []);

	if (loading) {
		return <div>Loading blogs...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<section className="tp-postbox-area pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tp-postbox-wrapper">
								{blogs.length === 0 && <p>No blogs found.</p>}
								{blogs.map((blog) => (
									<article key={blog._id || blog.id} className="tp-postbox-item mb-50 transition-3">
										{blog.image && (
											<div
												className="tp-postbox-thumb w-img"
												style={{
													width: "100%",
													aspectRatio: "16/9",
													maxHeight: "450px",
													minHeight: "180px",
													borderRadius: "10px",
													background: "#fafbfc",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													overflow: "hidden"
												}}
											>
												<img
													src={blog.image}
													alt={blog.title}
													style={{
														width: "100%",
														height: "100%",
														objectPosition: "center",
														borderRadius: "10px"
													}}
												/>
											</div>
										)}
										<div className="tp-postbox-meta">
											<span><i className="far fa-calendar-check"></i> {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""} </span>
											<span><a href="#"><i className="far fa-user"></i> {blog.author || "Unknown"}</a></span>
											{blog.category && (
												<span><a href="#"><i className="far fa-list"></i> {blog.category}</a></span>
											)}
										</div>
										<h3 className="tp-postbox-title">
											<Link href={"/blog-details/" + (blog.slug || blog._id)}>{blog.title}</Link>
										</h3>
										<div className="tp-postbox-text">
											<p>{blog.description || blog.excerpt || "No description."}</p>
										</div>
										<div className="tp-postbox-read-more">
											<Link href={"/blog-details/" + (blog.slug || blog._id)} className="tp-btn">Read More</Link>
										</div>
									</article>
								))}

								<div className="basic-pagination mt-30 mb-30">
									<nav>
										<ul>
											<li> <Link href="/blog"> <i>  <PrevBlogIcon /> </i>  </Link> </li>
											<li> <span className="current">  Next page <i> <NextBlogIcon />  </i> </span> </li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<BlogSidebar />

					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPostboxArea;