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
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


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
		// Show 3 skeleton blog cards (image + text lines)
		return (
			<section className="tp-postbox-area pt-120 pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tp-postbox-wrapper">
								{Array.from({ length: 3 }).map((_, i) => (
									<article key={i} className="tp-postbox-item mb-50 transition-3">
										<div
											className="tp-postbox-thumb w-img"
											style={{
												width: "100%",
												aspectRatio: "16/9",
												maxHeight: "450px",
												minHeight: "180px",
												borderRadius: "10px",
												background: "#fafbfc",
												overflow: "hidden"
											}}
										>
											<Skeleton width="100%" height="100%" style={{ borderRadius: "10px" }} />
										</div>
										<div className="tp-postbox-meta" style={{ marginTop: 12 }}>
											<Skeleton width={120} height={16} />
										</div>
										<h3 className="tp-postbox-title" style={{ margin: "14px 0" }}>
											<Skeleton width="70%" height={26} />
										</h3>
										<div className="tp-postbox-text">
											<Skeleton count={2} width="100%" height={16} />
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
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