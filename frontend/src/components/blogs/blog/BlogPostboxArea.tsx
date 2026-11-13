"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { EDITORIAL_ARTICLES, EditorialArticle } from "@/data/editorial-blog-data";
import BlogEditorialHero from "./BlogEditorialHero";
import BlogEditorialCategoryBar from "./BlogEditorialCategoryBar";
import BlogPinnedMultiCard from "./BlogPinnedMultiCard";
import BlogStackedPanels from "./BlogStackedPanels";
import BlogFloatingCollage from "./BlogFloatingCollage";
import BlogHorizontalGallery from "./BlogHorizontalGallery";
import BlogBrandStatement from "./BlogBrandStatement";
import BlogEditorialGrid from "./BlogEditorialGrid";
import BlogNewsletterSection from "./BlogNewsletterSection";

const POSTS_PER_PAGE = 6;

const BlogPostboxArea: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get("category") || "all";

  const [articles, setArticles] = useState<EditorialArticle[]>(EDITORIAL_ARTICLES);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryParam);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const contentAnchorRef = useRef<HTMLDivElement>(null);

  // Sync category param from URL
  useEffect(() => {
    if (initialCategoryParam) {
      setSelectedCategory(initialCategoryParam);
    }
  }, [initialCategoryParam]);

  // Attempt to fetch live articles from backend API if available
  useEffect(() => {
    let isMounted = true;

    const fetchLiveArticles = async () => {
      try {
        const blogUrl = process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/blogs?limit=100`
          : "http://localhost:8081/api/blogs?limit=100";

        const res = await fetch(blogUrl);
        if (res.ok) {
          const data = await res.json();
          const remoteBlogs = data.blogs || data.data || [];

          if (Array.isArray(remoteBlogs) && remoteBlogs.length > 0 && isMounted) {
            const mapped: EditorialArticle[] = remoteBlogs.map((b: any, idx: number) => {
              const rawImg = b.image || b.featuredImage || "";
              const safeImg = (typeof rawImg === "string" && rawImg.trim().length > 0 && !rawImg.includes("dhqcwkpzp") && !rawImg.includes("localhost:8081"))
                ? rawImg
                : EDITORIAL_ARTICLES[idx % EDITORIAL_ARTICLES.length].image;

              return {
                id: b._id || b.id || `api-${idx}`,
                slug: b.slug || b._id || `post-${idx}`,
                title: b.title || "Untitled Insight",
                category: b.category || "Technology",
                description: b.description || b.content?.slice(0, 160) || "Explore technical insight and architecture analysis from Vastora Tech.",
                image: safeImg,
                author: b.author || "Vastora Tech Guild",
                authorRole: "Technical Contributor",
                publishedAt: b.publishedAt || b.createdAt ? new Date(b.publishedAt || b.createdAt).toISOString().split("T")[0] : "2026-03-01",
                readTime: b.readTime || 5,
                editorialNumber: idx < 9 ? `0${idx + 1}` : `${idx + 1}`,
                tags: Array.isArray(b.tags) ? b.tags : ["Engineering", "Growth"],
                featured: b.featured || idx === 0,
              };
            });

            // Merge with curated articles
            const combined = [...mapped];
            EDITORIAL_ARTICLES.forEach((local) => {
              if (!combined.some((c) => c.slug === local.slug)) {
                combined.push(local);
              }
            });

            setArticles(combined);
          }
        }
      } catch {
        // Keeps local EDITORIAL_ARTICLES on offline / unreachable backend
      }
    };

    fetchLiveArticles();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      if (selectedCategory && selectedCategory.toLowerCase() !== "all" && selectedCategory.toLowerCase() !== "all stories") {
        if (item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inDesc = item.description.toLowerCase().includes(q);
        const inCat = item.category.toLowerCase().includes(q);
        const inTag = item.tags.some((t) => t.toLowerCase().includes(q));

        if (!inTitle && !inDesc && !inCat && !inTag) {
          return false;
        }
      }

      return true;
    });
  }, [articles, selectedCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Pagination calculation for the archive grid
  const totalArticlesCount = filteredArticles.length;
  const totalPages = Math.ceil(totalArticlesCount / POSTS_PER_PAGE) || 1;
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return Object.keys(counts).map((name) => ({
      name,
      count: counts[name],
    }));
  }, [articles]);

  const scrollToContent = () => {
    if (contentAnchorRef.current) {
      contentAnchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    scrollToContent();
  };

  return (
    <div className="vastora-grand-editorial-wrapper" role="region" aria-label="Bidirectional Editorial Experience">
      {/* 1. CINEMATIC HERO */}
      <BlogEditorialHero onScrollToContent={scrollToContent} />

      <div ref={contentAnchorRef} className="editorial-anchor-tag" />

      {/* 2. CATEGORY BAR & SEARCH (92% Fluid Width) */}
      <BlogEditorialCategoryBar
        categories={categoryCounts}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
        totalArticles={articles.length}
      />

      {/* 3. PINNED MULTI-CARD EXPERIENCE (Bidirectional Scrubbed Timeline) */}
      <BlogPinnedMultiCard articles={filteredArticles} />

      {/* 4. STACKED CARD STORYTELLING (4 Layered Overlapping Panels) */}
      <BlogStackedPanels articles={filteredArticles} />

      {/* 5. FLOATING COLLAGE & ROTATIONAL DRIFT (Bidirectional Scrub) */}
      <BlogFloatingCollage articles={filteredArticles} />

      {/* 6. PINNED HORIZONTAL SCROLLING GALLERY (Right-to-Left Scrub) */}
      <BlogHorizontalGallery articles={filteredArticles} />

      {/* 7. LARGE TYPOGRAPHY & CHAPTERS 01-04 (Background Color Transition) */}
      <BlogBrandStatement />

      {/* 8. PAGINATED EDITORIAL ARCHIVE GRID */}
      <BlogEditorialGrid
        articles={paginatedArticles}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* 9. FULL-WIDTH NEWSLETTER */}
      <BlogNewsletterSection />
    </div>
  );
};

export default BlogPostboxArea;
