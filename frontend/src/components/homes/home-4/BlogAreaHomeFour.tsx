"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import blog_shape from "@/assets/img/shape/blog-4-shape-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cardStyles = {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'stretch',
    background: '#fff',
    boxShadow: '0 6px 32px #3947550d',
    borderRadius: 16,
    overflow: 'hidden',
    minHeight: 220,
    marginBottom: 32,
    position: 'relative' as const,
};
const imgStyles = {
    height: 210,
    minWidth: 170,
    width: 170,
    borderRadius: 0,
    objectFit: 'cover' as const,
    display: 'block',
};
const contentStyles = {
    flex: 1,
    padding: '28px 22px 26px 26px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    minWidth: 0,
};
const descStyles = {
    marginBottom: 18,
    color: '#5A5D79',
    fontSize: 16,
    minHeight: 28,
    lineHeight: 1.45,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '2.9em', /* 2 lines */
};

// Responsive styles via className for mobile
// ---

const BlogAreaHomeFour = () => {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hydrated, setHydrated] = useState(false); // added

    useEffect(() => {
        setHydrated(true); // mark as hydrated after mount
        const fetchBlogs = async () => {
            try {
                const url = process.env.NEXT_PUBLIC_API_URL
                    ? `${process.env.NEXT_PUBLIC_API_URL}/blogs`
                    : "http://localhost:8081/api/blogs";
                const res = await fetch(url);
                const data = await res.json();
                setBlogs(data.blogs || data.data || []);
            } catch (err: any) {
                setError("Could not fetch blogs");
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    if (!hydrated) return null; // prevent SSR/client render mismatch

    return (
        <>
            <section className="blog-area pb-50 p-relative fix">
                <div className="tpblog-4-shape wow bounceIn d-none d-lg-block" data-wow-duration=".6s" data-wow-delay=".6s">
                    <Image src={blog_shape} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 ">
                            <div className="section-wrapper mb-50">
                                <span>What's Going On</span>
                                <h5 className="section-title-4 section-title-4-2">Company blog & Insights</h5>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-all-btn text-lg-end mb-40">
                                <Link href="/blog" className="blue-btn">More Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {loading ? (
                                <Swiper slidesPerView={2} spaceBetween={30} navigation pagination={{ clickable: true }} modules={[Navigation, Pagination, Autoplay]}>
                                    {[...Array(2)].map((_, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div style={cardStyles} className="blog-card-home4">
                                                <div style={imgStyles}><Skeleton height={210} width={170} /></div>
                                                <div style={contentStyles}>
                                                    <Skeleton width={80} />
                                                    <h4><Skeleton width={140} /></h4>
                                                    <p><Skeleton count={2} width={160} /></p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : error ? (
                                <div className="text-danger">{error}</div>
                            ) : blogs.length === 0 ? (
                                <div>No blogs found.</div>
                            ) : (
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    navigation
                                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination, Autoplay]}
                                    breakpoints={{
                                        992: { slidesPerView: 2 },
                                        0: { slidesPerView: 1 }
                                    }}
                                >
                                    {blogs.slice(0, 6).map((blog, i) => (
                                        <SwiperSlide key={blog._id || i}>
                                            <div style={cardStyles} className="blog-card-home4">
                                                <div style={{...imgStyles, background: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                                                <div style={contentStyles}>
                                                    <h5 className="tpblog-4-content-sub-tilte" style={{ marginBottom: 6, color: '#A5A5A9' }}>{blog.category || 'Blog'}</h5>
                                                    <h4 className="tpblog-4-content-title" style={{ fontWeight: 700, fontSize: 22, marginBottom: 13 }}>
                                                        <Link href={"/blog-details/" + (blog.slug || blog._id)}>{blog.title}</Link>
                                                    </h4>
                                                    <p style={descStyles}>{blog.description || ''}</p>
                                                    <div className="tpblog-4-info" style={{ fontWeight: 500, color: '#454557', fontSize: 15, marginTop: 'auto' }}>
                                                        <span style={{ marginRight: 12 }}>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ''}</span>
                                                        <span><a href="#"><i>By </i>{blog.author}</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                    </div>
                </div>
                <style>{`
                @media (max-width: 991px) {
                    .blog-card-home4 { flex-direction: column !important; }
                    .blog-card-home4 > div:first-child { width: 100% !important; min-width: 0 !important; height: 200px !important; }
                    .blog-card-home4 > div:last-child { padding: 18px 14px 20px 14px !important; }
                }
                `}</style>
            </section>
        </>
    );
};

export default BlogAreaHomeFour;