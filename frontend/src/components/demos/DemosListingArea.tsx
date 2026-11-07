"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Filter, ExternalLink, Info, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";
import EcommerceInfoArea from "./EcommerceInfoArea";
import ecommerceNoidaImg from "@/assets/img/services/ecommerce-noida.png";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

const DemosListingArea: React.FC = () => {
  const router = useRouter();
  const [demos, setDemos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const fetchDemos = (opts?: { search?: string; category?: string }) => {
    const params = new URLSearchParams();
    if (opts?.search) params.append("title", opts.search);
    if (opts?.category) params.append("category", opts.category);
    const url = params.toString()
      ? `${API_URL}/demos?${params.toString()}`
      : `${API_URL}/demos`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const items = data.demos || data.data || [];
        setDemos(items);
        if (!opts?.category && !opts?.search) {
          const unique = Array.from(
            new Set(
              items
                .map((d: any) => d?.category)
                .filter((c: any) => typeof c === "string" && c.trim().length > 0)
            )
          ) as string[];
          setCategories(unique.sort((a, b) => a.localeCompare(b)));
        }
      })
      .catch(() => setError("Could not fetch demo projects"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDemos({ search, category });
  };

  const handleCategorySelect = (selectedCat: string) => {
    setCategory(selectedCat);
    fetchDemos({ search, category: selectedCat });
  };

  return (
    <>
      {/* 1. Hero & Explorer Section */}
      <section className="vt-ecom-hero-section" aria-label="E-commerce Solutions Hero">
        <div className="vt-ecom-mesh-glow" aria-hidden="true" />
        <div className="vt-hero-grid-bg" aria-hidden="true" />

        <div className="container">
          <div className="vt-ecom-header-content">
            <div className="vt-section-badge">
              <span className="vt-badge-dot" />
              <span>Enterprise E-Commerce Ecosystem</span>
            </div>

            <h1 className="vt-ecom-main-title">
              Best Ecommerce Website Development <span className="highlight-blue">Company in Noida</span>
            </h1>

            <p className="vt-ecom-sub-desc">
              Discover pre-built eCommerce website solutions for fashion, beauty, jewellery & more. Start selling online with our ready-to-use designs.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <form onSubmit={handleSubmit} className="vt-filter-bar-card">
                <div className="row g-3 align-items-center">
                  <div className="col-12 col-md-5">
                    <div className="search-input-group">
                      <Search size={18} className="search-icon" />
                      <input
                        type="search"
                        className="vt-search-input"
                        placeholder="Search by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-7 col-md-4">
                    <select
                      className="vt-category-select"
                      value={category}
                      onChange={(e) => handleCategorySelect(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-5 col-md-3">
                    <button type="submit" className="vt-filter-btn">
                      <Filter size={16} />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Quick Category Chips */}
              <div className="vt-category-chips-row">
                <button
                  type="button"
                  className={`chip-btn ${category === "" ? "is-active" : ""}`}
                  onClick={() => handleCategorySelect("")}
                >
                  All Categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`chip-btn ${category === c ? "is-active" : ""}`}
                    onClick={() => handleCategorySelect(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Demos Showcase Grid */}
          <div className="vt-demos-grid-wrap">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading high-performance eCommerce demos...</p>
              </div>
            ) : error ? (
              <div className="alert alert-warning text-center" role="alert">
                {error}
              </div>
            ) : demos.length === 0 ? (
              <div className="text-center py-5 bg-light rounded-4">
                <ShoppingBag size={40} className="text-muted mb-2" />
                <h4 className="text-dark">No eCommerce demos found</h4>
                <p className="text-muted">Try adjusting your search criteria or category filter.</p>
              </div>
            ) : (
              <div className="row g-4">
                {demos.map((demo: any) => {
                  const imageSrc = demo.images?.[0] || demo.image;
                  const isImageFailed = !imageSrc || imageErrors[demo.slug];

                  return (
                    <div className="col-md-6 col-lg-4" key={demo.slug}>
                      <div
                        className="vt-demo-card"
                        role="button"
                        tabIndex={0}
                        onClick={() => router.push(`/product/e-commerce-solutions/${demo.slug}`)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            router.push(`/product/e-commerce-solutions/${demo.slug}`);
                          }
                        }}
                      >
                        {/* Thumbnail Wrap */}
                        <div className="card-img-container">
                          {isImageFailed ? (
                            <div className="demo-img-fallback">
                              <div className="fallback-icon">
                                <ShoppingBag size={24} />
                              </div>
                              <h4 className="fallback-title">{demo.title}</h4>
                            </div>
                          ) : (
                            <Image
                              src={imageSrc}
                              alt={demo.title}
                              title={demo.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="demo-main-img"
                              onError={() =>
                                setImageErrors((prev) => ({ ...prev, [demo.slug]: true }))
                              }
                            />
                          )}

                          {demo.category && (
                            <span className="demo-category-badge">{demo.category}</span>
                          )}
                        </div>

                        {/* Card Body */}
                        <div className="card-body-content">
                          <h3 className="demo-card-title">{demo.title}</h3>

                          {demo.subtitle && (
                            <div className="demo-card-subtitle">{demo.subtitle}</div>
                          )}

                          <p className="demo-card-desc">{demo.description}</p>

                          {/* Action Buttons */}
                          <div className="demo-actions-row">
                            <Link
                              href={`/product/e-commerce-solutions/${demo.slug}`}
                              className="btn-know-more"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Info size={15} />
                              <span>Know More</span>
                            </Link>

                            {demo.demoUrl && (
                              <a
                                href={demo.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-live-preview"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>Live Preview</span>
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* 2. Noida Agency Story & Architecture Section */}
          <div className="vt-noida-agency-section">
            <div className="agency-story-card">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                  <div className="pe-lg-4">
                    <div className="vt-section-badge mb-3">
                      <span className="vt-badge-dot" />
                      <span>Regional Leadership</span>
                    </div>

                    <h2 className="agency-title">
                      Ecommerce Website Development Services in Noida, India
                    </h2>

                    <p className="agency-p">
                      We are a leading ecommerce website development agency in India offering scalable, secure, and high-converting ecommerce solutions. Our expert ecommerce website developers build custom websites and apps tailored to your business needs.
                    </p>

                    <p className="agency-p">
                      Looking for a reliable ecommerce web development company in Noida? We provide end-to-end ecommerce website development services, including design, development, and ecommerce app solutions to help you grow your online business.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 order-1 order-lg-2 mb-4 mb-lg-0">
                  <div className="agency-photo-frame">
                    <Image
                      src={ecommerceNoidaImg}
                      alt="Ecommerce website development in Noida"
                      priority={false}
                    />
                    <div className="agency-floating-stat">
                      <span className="stat-dot" />
                      <span>Enterprise Ready · 99.9% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Info & Services Area */}
          <EcommerceInfoArea />
        </div>
      </section>
    </>
  );
};

export default DemosListingArea;
