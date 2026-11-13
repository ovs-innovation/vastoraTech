"use client";

import React, { useState, useEffect } from "react";

interface EditorialImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIndex?: number;
  category?: string;
  loading?: "lazy" | "eager";
}

// 21 verified local high-resolution cover assets in public/assets/img/blog/
const CURATED_LOCAL_COVERS = [
  "/assets/img/blog/blog-big-6.jpg",  // 0: Pink/purple cubes (Section 01 Featured Card)
  "/assets/img/blog/blog-grid-1.jpg", // 1: Pink curved bowl (Section 01 Supporting Card 1)
  "/assets/img/blog/blog-grid-2.jpg", // 2: Blue infinity artwork (Section 01 Supporting Card 2)
  "/assets/img/blog/blog-grid-3.jpg", // 3: Blue SEO artwork (Section 01 Curator's Pick)
  "/assets/img/blog/blog-big-1.jpg",
  "/assets/img/blog/blog-big-3.jpg",
  "/assets/img/blog/blog-big-4.jpg",
  "/assets/img/blog/blog-big-5.jpg",
  "/assets/img/blog/blog-grid-4.jpg",
  "/assets/img/blog/blog-grid-5.jpg",
  "/assets/img/blog/blog-grid-6.jpg",
  "/assets/img/blog/blog-grid-7.jpg",
  "/assets/img/blog/blog-grid-8.jpg",
  "/assets/img/blog/blog-list-1.jpg",
  "/assets/img/blog/blog-list-2.jpg",
  "/assets/img/blog/blog-list-3.jpg",
  "/assets/img/blog/blog-masonry-1.jpg",
  "/assets/img/blog/blog-masonry-2.jpg",
  "/assets/img/blog/blog-masonry-3.jpg",
  "/assets/img/blog/blog-details-banner-1.jpg",
];

export const getDeterministicFallback = (index: number = 0, category: string = ""): string => {
  if (typeof index === "number" && index >= 0) {
    return CURATED_LOCAL_COVERS[index % CURATED_LOCAL_COVERS.length];
  }
  const cat = (category || "").toLowerCase();
  if (cat.includes("ecom") || cat.includes("shop")) {
    return CURATED_LOCAL_COVERS[0];
  }
  if (cat.includes("tech") || cat.includes("web") || cat.includes("code")) {
    return CURATED_LOCAL_COVERS[1];
  }
  if (cat.includes("seo") || cat.includes("search")) {
    return CURATED_LOCAL_COVERS[3];
  }
  if (cat.includes("market") || cat.includes("growth")) {
    return CURATED_LOCAL_COVERS[2];
  }
  if (cat.includes("digital") || cat.includes("design")) {
    return CURATED_LOCAL_COVERS[4];
  }
  if (cat.includes("social")) {
    return CURATED_LOCAL_COVERS[5];
  }
  return CURATED_LOCAL_COVERS[Math.abs(index) % CURATED_LOCAL_COVERS.length];
};

const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = "",
  fallbackIndex = 0,
  category = "",
  loading = "lazy",
}) => {
  const defaultFallback = getDeterministicFallback(fallbackIndex, category);

  // Safely clean up src: detect broken remote host or 401 cloudinary URLs
  const cleanSrc = (rawSrc?: string): string => {
    if (!rawSrc || typeof rawSrc !== "string") return defaultFallback;
    const trimmed = rawSrc.trim();
    if (trimmed.length === 0) return defaultFallback;
    if (trimmed.includes("dhqcwkpzp")) return defaultFallback; // Broken Cloudinary account
    if (trimmed.startsWith("http://localhost:8081")) {
      // Local backend upload that is likely offline
      return defaultFallback;
    }
    return trimmed;
  };

  const [currentSrc, setCurrentSrc] = useState<string>(() => cleanSrc(src));
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const valid = cleanSrc(src);
    setCurrentSrc(valid);
    setHasError(false);
    setIsLoaded(false);
  }, [src, defaultFallback]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(defaultFallback);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`editorial-img-container ${isLoaded ? "is-loaded" : "is-loading"}`}>
      <img
        src={currentSrc}
        alt={alt || "Vastora Tech Editorial Story"}
        className={`editorial-core-img ${className}`}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
      />
      {!isLoaded && <div className="editorial-img-shimmer" aria-hidden="true" />}
    </div>
  );
};

export default EditorialImage;
