import Link from "next/link";
import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [blogCounts, setBlogCounts] = useState<{[key:string]:number}>({});

    useEffect(() => {
        async function fetchData() {
            try {
                const catUrl = process.env.NEXT_PUBLIC_API_URL
                    ? `${process.env.NEXT_PUBLIC_API_URL}/blog-categories`
                    : "http://localhost:8081/api/blog-categories";
                const blogUrl = process.env.NEXT_PUBLIC_API_URL
                    ? `${process.env.NEXT_PUBLIC_API_URL}/blogs?limit=1000`
                    : "http://localhost:8081/api/blogs?limit=1000";
                const [catRes, blogRes] = await Promise.all([fetch(catUrl), fetch(blogUrl)]);
                const catData = await catRes.json();
                const blogsData = await blogRes.json();
                const cats = catData.categories || catData.data || [];
                setCategories(cats);
                const blogs = blogsData.blogs || blogsData.data || [];
                // Count blogs per category (exact match)
                const counts: {[key:string]:number} = {};
                cats.forEach((cat:any) => {
                    counts[cat.name] = blogs.filter((b:any) => b.category === cat.name).length;
                });
                setBlogCounts(counts);
            } catch (err) {
                setCategories([]);
                setBlogCounts({});
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="sidebar__widget-content">
                <ul>
                    {categories.map((item, i) => (
                        <li key={i}>
                            <Link href={"/blog?category=" + encodeURIComponent(item.name || item.categories)}>
                                {item.name || item.categories}
                                <span>{blogCounts[item.name] ?? 0}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Categories;