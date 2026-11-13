"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Filter, ShoppingBag } from "lucide-react";
import EcommerceInfoArea from "./EcommerceInfoArea";
import ecommerceNoidaImg from "@/assets/img/services/ecommerce-noida.png";
import DemosHorizontalShowcase, { DemoItem } from "./DemosHorizontalShowcase";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

const DEFAULT_DEMOS: DemoItem[] = [
  {
    slug: "fashion-that-speaks",
    title: "Fashion That Speaks",
    subtitle: "Where Trend Meets Comfort",
    description:
      "A perfect blend of creativity, luxury, and comfort crafted to match your lifestyle and make every outfit memorable.",
    category: "Fashion",
    image: "/assets/img/portfolio/project-portfolio-1.png",
    demoUrl: "https://tossmart.com/",
  },
  {
    slug: "glow-and-beauty-essentials",
    title: "Glow & Beauty Essentials",
    subtitle: "Enhance Your Natural Radiance",
    description:
      "Discover premium beauty products designed to nourish your skin, elevate your glow, and bring out your inner confidence.",
    category: "Beauty",
    image: "/assets/img/portfolio/project-portfolio-2.png",
    demoUrl: "https://candyflossbeautypalace.com/",
  },
  {
    slug: "jewellery-ecommerce-solution",
    title: "Jewellery E-commerce Solution",
    subtitle: "Brilliance Engineered: High-Performance",
    description:
      "E-Jewellery is a complete, full-stack digital solution crafted specifically for the high-value jewellery industry.",
    category: "Jewellery",
    image: "/assets/img/portfolio/project-portfolio-3.png",
    demoUrl: "https://thelearnskills.com/",
  },
  {
    slug: "electromart-electronics",
    title: "ElectroMart (One-Stop Electronics Destination)",
    subtitle: "Smart Gadgets, Better Living",
    description:
      "Explore the latest mobiles, laptops, gadgets, and tech accessories with unmatched performance and best-in-class pricing.",
    category: "Electronic",
    image: "/assets/img/portfolio/project-portfolio-4.png",
    demoUrl: "https://hotelsweetdreams.ovsinnovation.com/",
  },
  {
    slug: "health-and-herbs",
    title: "Health & Herbs – Natural Wellness Products",
    subtitle: "Pure Health, Natural Life",
    description:
      "Health & Herbs offers a premium range of natural remedies, organic supplements, and holistic wellness solutions.",
    category: "Health & Herbs",
    image: "/assets/img/portfolio/project-portfolio-10.png",
    demoUrl: "https://healthnherbs.in/",
  },
  {
    slug: "fashion-apparel-ecommerce",
    title: "Fashion and Apparel E-Commerce",
    subtitle: "Elevate Your Wardrobe with Trend-Driven Style",
    description:
      "Discover a curated collection of contemporary fashion engineered for conversion, seamless checkout, and brand impact.",
    category: "Fashion",
    image: "/assets/img/portfolio/project-portfolio-5.png",
    demoUrl: "https://prosperrainfra.com/",
  },
];

const DemosListingArea: React.FC = () => {
  const router = useRouter();
  const [demos, setDemos] = useState<DemoItem[]>(DEFAULT_DEMOS);
  const [loading, setLoading] = useState(false);
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
        if (Array.isArray(items) && items.length > 0) {
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
        } else {
          setDemos(DEFAULT_DEMOS);
          const unique = Array.from(
            new Set(
              DEFAULT_DEMOS
                .map((d: any) => d?.category)
                .filter((c: any) => typeof c === "string" && c.trim().length > 0)
            )
          ) as string[];
          setCategories(unique.sort((a, b) => a.localeCompare(b)));
        }
      })
      .catch(() => {
        setError("Could not fetch demo projects");
        setDemos(DEFAULT_DEMOS);
        const unique = Array.from(
          new Set(
            DEFAULT_DEMOS
              .map((d: any) => d?.category)
              .filter((c: any) => typeof c === "string" && c.trim().length > 0)
          )
        ) as string[];
        setCategories(unique.sort((a, b) => a.localeCompare(b)));
      })
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

  const activeDemos = demos.length > 0 ? demos : DEFAULT_DEMOS;

  const displayDemos = activeDemos.filter((demo) => {
    const matchesSearch = !search
      ? true
      : demo.title?.toLowerCase().includes(search.toLowerCase()) ||
        demo.description?.toLowerCase().includes(search.toLowerCase()) ||
        demo.category?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category
      ? true
      : demo.category?.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

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
        </div>
      </section>

      {/* 2. Cinematic Horizontal Scrolling Portfolio Showcase */}
      <DemosHorizontalShowcase demos={displayDemos} loading={loading && demos.length === 0} />

      {/* 3. Noida Agency Story & Architecture Section */}
      <section className="vt-ecom-story-section">
        <div className="container">
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
