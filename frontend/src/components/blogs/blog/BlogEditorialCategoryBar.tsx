"use client";

import React, { useRef } from "react";

interface CategoryCount {
  name: string;
  count: number;
}

interface BlogEditorialCategoryBarProps {
  categories: CategoryCount[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalArticles: number;
}

const ORDERED_CATEGORIES = [
  "All Stories",
  "eCommerce",
  "SEO",
  "Marketing",
  "Technology",
  "Social Media",
  "Digital",
];

const BlogEditorialCategoryBar: React.FC<BlogEditorialCategoryBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalArticles,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getCountForCategory = (catName: string): number => {
    if (catName.toLowerCase() === "all stories" || catName.toLowerCase() === "all") {
      return totalArticles;
    }
    const found = categories.find(
      (c) => c.name.toLowerCase() === catName.toLowerCase()
    );
    return found ? found.count : 0;
  };

  const isCategoryActive = (catName: string): boolean => {
    if (
      (selectedCategory.toLowerCase() === "all" || selectedCategory.toLowerCase() === "all stories") &&
      (catName.toLowerCase() === "all stories" || catName.toLowerCase() === "all")
    ) {
      return true;
    }
    return selectedCategory.toLowerCase() === catName.toLowerCase();
  };

  return (
    <nav className="editorial-category-nav-bar" aria-label="Article categories and search">
      <div className="editorial-fluid-container category-nav-container">
        {/* ========================================================
            LEFT: HORIZONTAL SCROLLABLE CATEGORIES
            ======================================================== */}
        <div className="category-scroll-wrapper" ref={scrollContainerRef}>
          <div className="category-pills-track" role="tablist">
            {ORDERED_CATEGORIES.map((cat, idx) => {
              const active = isCategoryActive(cat);
              const count = getCountForCategory(cat);
              const targetVal = cat.toLowerCase() === "all stories" ? "all" : cat;

              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`editorial-cat-tab ${active ? "is-active" : ""}`}
                  onClick={() => onSelectCategory(targetVal)}
                >
                  <span className="tab-label">{cat}</span>
                  <span className="tab-count">({count})</span>
                  {active && <span className="active-sliding-line" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            RIGHT: SEARCH INPUT BOX
            ======================================================== */}
        <div className="editorial-search-module">
          <div className="search-input-wrapper">
            <span className="search-icon" aria-hidden="true">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search insights & blueprints..."
              className="editorial-search-field"
              aria-label="Search articles"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="search-clear-btn"
                aria-label="Clear search query"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogEditorialCategoryBar;

