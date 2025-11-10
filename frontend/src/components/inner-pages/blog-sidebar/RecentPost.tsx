
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const fallbackImg = "/default-thumb.jpg"; // Make sure this exists in your public folder or choose another fallback

const RecentPost = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchRecentBlogs() {
            try {
                const url = process.env.NEXT_PUBLIC_API_URL
                    ? `${process.env.NEXT_PUBLIC_API_URL}/blogs?limit=3`
                    : "http://localhost:8081/api/blogs?limit=3";
                const res = await fetch(url);
                const data = await res.json();
                const blogs = data.blogs || data.data || [];
                setPosts(blogs.slice(0,3)); // fallback to first 3 if no real pagination
            } catch (err) {
                setPosts([]);
            }
        }
        fetchRecentBlogs();
    }, []);

    if (posts.length === 0) {
        return <>No recent posts.</>;
    }

    return (
        <>
            {posts.map((item, i) =>
                <div key={i} className="rc__post mb-10 d-flex align-items-center">
                    <div className="rc__post-thumb mr-20">
                        <Link href={"/blog-details/" + (item.slug || item._id)}>
                            <Image src={item.image || fallbackImg} alt={item.title} width={72} height={72} style={{ borderRadius:8, objectFit:'cover' }} />
                        </Link>
                    </div>
                    <div className="rc__post-content">
                        <h3 className="rc__post-title" style={{ fontSize: 15 }}>
                            <Link href={"/blog-details/" + (item.slug || item._id)}>{item.title}</Link>
                        </h3>
                        <div className="rc__meta">
                            <span>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecentPost;