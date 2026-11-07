import React, { Suspense } from "react";
import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import BlogPostboxArea from "./BlogPostboxArea";

const Blog = () => {
    return (
        <>
            <HeaderFive />
            <main>
                <Suspense fallback={<div className="container py-5 text-center">Loading Vastora Tech Insights...</div>}>
                    <BlogPostboxArea />
                </Suspense>
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default Blog;