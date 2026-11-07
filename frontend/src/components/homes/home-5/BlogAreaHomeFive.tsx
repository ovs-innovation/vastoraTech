"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import fallback_blog_1 from "@/assets/img/blog/blog-grid-1.jpg";
import fallback_blog_2 from "@/assets/img/blog/blog-grid-2.jpg";
import fallback_blog_3 from "@/assets/img/blog/blog-grid-3.jpg";

const fallbackImages = [fallback_blog_1, fallback_blog_2, fallback_blog_3];

const defaultBlogs = [
  {
    _id: "default-1",
    title: "Why Mobile Optimization Is Essential for Ecommerce Success in 2026",
    description:
      "Mobile devices have become the primary way people shop online. Learn how headless speed and responsive UI drive double-digit conversion gains.",
    category: "E-Commerce",
    author: "Vastoratech",
    createdAt: "2026-06-13",
    slug: "mobile-optimization-ecommerce",
  },
  {
    _id: "default-2",
    title: "Why Choosing an Ecommerce Website Development Company in India Is a Smart Decision",
    description:
      "Global brands are leveraging Indian technology partners for cost efficiency, engineering excellence, and fast delivery timelines.",
    category: "Strategy",
    author: "Vastoratech",
    createdAt: "2026-06-11",
    slug: "choosing-ecommerce-company-india",
  },
  {
    _id: "default-3",
    title: "How to Build a High-Converting Multi-Vendor Marketplace Architecture",
    description:
      "From merchant onboarding to split payouts and automated tax handling, master the engineering fundamentals of multi-vendor scale.",
    category: "Architecture",
    author: "Vastoratech",
    createdAt: "2026-06-08",
    slug: "multi-vendor-marketplace-architecture",
  },
];

const BlogAreaHomeFive: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>(defaultBlogs);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const fetchBlogs = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/blogs`
          : "http://localhost:8081/api/blogs";
        const res = await fetch(url);
        const data = await res.json();
        const fetched = data.blogs || data.data || [];
        if (fetched.length > 0) {
          setBlogs(fetched);
        }
      } catch (err) {
        // keep default fallback blogs
      }
    };
    fetchBlogs();
  }, []);

  if (!hydrated) return null;

  return (
    <section className="blog-enhanced-section" id="blog-insights">
      <div className="container">
        {/* Header */}
        <div className="blog-header-row">
          <div className="blog-header-left">
            <div className="blog-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Industry Knowledge & Insights</span>
            </div>
            <h2 className="blog-title">
              Company Blog & Insights,{" "}
              <span className="gradient-highlight">Stay Ahead of the Curve.</span>
            </h2>
            <p className="blog-desc">
              Explore our latest engineering playbooks, e-commerce conversion strategies,
              and full-funnel growth analysis written by our in-house experts.
            </p>
          </div>

          <Link href="/blog" className="blog-all-btn">
            <span>Explore All Articles</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        {/* Carousel */}
        <div className="blog-cards-grid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {blogs.slice(0, 6).map((blog, idx) => {
              const fallback = fallbackImages[idx % fallbackImages.length];
              const blogLink = `/blog-details/${blog.slug || blog._id}`;
              const hasCloudinary =
                blog.image &&
                typeof blog.image === "string" &&
                blog.image.startsWith("http");

              return (
                <SwiperSlide key={blog._id || idx}>
                  <div className="blog-card-bento">
                    <div className="blog-img-thumb">
                      {hasCloudinary ? (
                        <Image
                          src={
                            blog.image.includes("cloudinary.com")
                              ? blog.image.replace(
                                  "/upload/",
                                  "/upload/q_auto,f_auto,w_500/"
                                )
                              : blog.image
                          }
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <Image
                          src={fallback}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 380px"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                      <span className="blog-cat-pill">
                        {blog.category || "E-Commerce"}
                      </span>
                    </div>

                    <div className="blog-card-body">
                      <h3 className="blog-card-title">
                        <Link href={blogLink}>{blog.title}</Link>
                      </h3>

                      <p className="blog-card-summary">
                        {blog.description ||
                          "Discover actionable strategies to scale your digital presence with modern web technologies."}
                      </p>

                      <div className="blog-card-meta">
                        <span className="meta-author">
                          By {blog.author || "Vastoratech"}
                        </span>
                        <span>
                          {blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Recent"}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaHomeFive;
