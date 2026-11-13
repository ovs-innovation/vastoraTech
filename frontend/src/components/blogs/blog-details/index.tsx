import React from "react";
import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import ReadingProgressBar from "./ReadingProgressBar";
import BlogArticleHero from "./BlogArticleHero";
import BlogArticleLayout from "./BlogArticleLayout";
import BlogArticleFooter from "./BlogArticleFooter";
import { EDITORIAL_ARTICLES } from "@/data/editorial-blog-data";
import Link from "next/link";

interface BlogDetailsProps {
  blog?: any;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  if (!blog) {
    return (
      <>
        <HeaderFive />
        <main className="editorial-article-page empty-state">
          <div className="container py-5 text-center my-5">
            <span className="editorial-category-badge mb-3">404 // NOT FOUND</span>
            <h1 className="h2 mb-3">Publication Not Found</h1>
            <p className="text-muted mb-4">
              The article you are searching for may have been updated, relocated, or removed.
            </p>
            <Link href="/blog" className="btn btn-primary px-4 py-2">
              Back to Blog & Insights
            </Link>
          </div>
        </main>
        <FooterFive style={true} />
      </>
    );
  }

  // 1. Compute current article index in editorial database
  const currentIndex = EDITORIAL_ARTICLES.findIndex(
    (a) => a.slug === blog.slug || a.id === blog._id || a.title === blog.title
  );

  // 2. Adjacent Previous & Next Articles
  const prevArticle = currentIndex > 0 ? EDITORIAL_ARTICLES[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < EDITORIAL_ARTICLES.length - 1
      ? EDITORIAL_ARTICLES[currentIndex + 1]
      : null;

  // 3. Curated Related Articles (same category first, fallback to others)
  const relatedArticles = EDITORIAL_ARTICLES.filter(
    (a) =>
      a.slug !== blog.slug &&
      a.id !== blog._id &&
      (a.category === blog.category || !blog.category)
  ).slice(0, 3);

  // If fewer than 3, fill with other editorial articles
  if (relatedArticles.length < 3) {
    const additional = EDITORIAL_ARTICLES.filter(
      (a) =>
        a.slug !== blog.slug &&
        a.id !== blog._id &&
        !relatedArticles.some((r) => r.slug === a.slug)
    ).slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...additional);
  }

  // 4. Curated Recent Articles for Sidebar (excluding current)
  const recentArticles = EDITORIAL_ARTICLES.filter(
    (a) => a.slug !== blog.slug && a.id !== blog._id
  ).slice(0, 4);

  return (
    <>
      <ReadingProgressBar />
      <HeaderFive />
      <main className="editorial-article-page" role="main">
        {/* Editorial Article Hero Header */}
        <BlogArticleHero article={blog} />

        {/* 2-Column Reading Experience (Main Article + Sticky Sidebar) */}
        <BlogArticleLayout
          article={blog}
          recentArticles={recentArticles}
        />

        {/* Article Footer: Prev/Next, Related Stories, Project CTA */}
        <BlogArticleFooter
          currentArticle={blog}
          prevArticle={prevArticle}
          nextArticle={nextArticle}
          relatedArticles={relatedArticles}
        />
      </main>
      <FooterFive style={true} />
    </>
  );
};

export default BlogDetails;
