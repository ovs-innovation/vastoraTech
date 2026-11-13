"use client";

import React, { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  contentHtml?: string;
}

const BlogArticleTableOfContents: React.FC<TableOfContentsProps> = ({ contentHtml }) => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Parse H2 elements from the DOM after rendering
    const articleBody = document.querySelector(".editorial-rendered-content");
    if (!articleBody) return;

    const h2Elements = articleBody.querySelectorAll("h2");
    const items: TocItem[] = [];

    h2Elements.forEach((h2, index) => {
      let id = h2.id;
      if (!id) {
        id = `section-${index + 1}-${h2.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || ""}`;
        h2.id = id;
      }
      items.push({
        id,
        text: h2.textContent || `Section ${index + 1}`,
      });
    });

    setHeadings(items);

    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    // Scroll spy via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    h2Elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [contentHtml]);

  if (headings.length < 2) return null;

  const scrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 110;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="editorial-toc-card" aria-label="Table of Contents">
      <div className="toc-header" onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0}>
        <div className="toc-header-left">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          <span className="toc-title">Table of Contents</span>
        </div>
        <span className={`toc-toggle-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>

      {isOpen && (
        <ol className="toc-list">
          {headings.map((item) => (
            <li
              key={item.id}
              className={`toc-item ${activeId === item.id ? "is-active" : ""}`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToHeading(item.id, e)}
                className="toc-anchor"
              >
                <span className="toc-dot" aria-hidden="true" />
                <span className="toc-text">{item.text}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default BlogArticleTableOfContents;

