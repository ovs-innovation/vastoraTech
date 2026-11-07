'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface BlogItem {
  _id?: string;
  id?: string;
  title: string;
  slug?: string;
  category?: string;
  description?: string;
  content?: string;
  image?: string;
  author?: string;
  createdAt?: string;
  publishedAt?: string;
  views?: number;
  readTime?: number;
  tags?: string[];
  featured?: boolean;
}

// Curated reliable cover images from local public folder
const FALLBACK_COVERS = {
  ecommerce: [
    '/assets/img/banner/hero_product_fashion.jpg',
    '/assets/img/blog/blog-big-2.jpg',
    '/assets/img/banner/dashbord-bg.jpg',
    '/assets/img/blog/blog-big-5.jpg',
    '/assets/img/blog/blog-grid-3.jpg',
    '/assets/img/blog/blog-grid-4.jpg',
  ],
  seo: [
    '/assets/img/banner/dashbord-bg-2.jpg',
    '/assets/img/blog/blog-grid-1.jpg',
    '/assets/img/blog/blog-grid-6.jpg',
    '/assets/img/blog/blog-big-4.jpg',
  ],
  tech: [
    '/assets/img/blog/blog-big-1.jpg',
    '/assets/img/blog/blog-big-6.jpg',
    '/assets/img/blog/blog-grid-2.jpg',
    '/assets/img/blog/blog-grid-5.jpg',
  ],
  default: [
    '/assets/img/blog/blog-big-3.jpg',
    '/assets/img/banner/hero_showcase_product.jpg',
    '/assets/img/blog/blog-grid-7.jpg',
    '/assets/img/blog/blog-grid-8.jpg',
  ]
};

const getCategoryCover = (category: string = '', index: number = 0): string => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('seo') || cat.includes('market')) {
    return FALLBACK_COVERS.seo[index % FALLBACK_COVERS.seo.length];
  }
  if (cat.includes('tech') || cat.includes('web') || cat.includes('develop') || cat.includes('app')) {
    return FALLBACK_COVERS.tech[index % FALLBACK_COVERS.tech.length];
  }
  if (cat.includes('ecom') || cat.includes('sale') || cat.includes('store')) {
    return FALLBACK_COVERS.ecommerce[index % FALLBACK_COVERS.ecommerce.length];
  }
  return FALLBACK_COVERS.default[index % FALLBACK_COVERS.default.length];
};

const getCategoryClass = (category: string = '') => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('ecom')) return 'cat-ecommerce';
  if (cat.includes('seo')) return 'cat-seo';
  if (cat.includes('tech') || cat.includes('web')) return 'cat-tech';
  if (cat.includes('sale')) return 'cat-sales';
  if (cat.includes('market')) return 'cat-marketing';
  return 'cat-default';
};

const getReadingTime = (blog: BlogItem): string => {
  if (blog.readTime && blog.readTime > 0) return `${blog.readTime} min read`;
  const rawText = `${blog.title || ''} ${blog.description || ''} ${blog.content || ''}`;
  const words = rawText.replace(/<[^>]*>/g, '').trim().split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(words / 190));
  return `${minutes} min read`;
};

const formatDate = (dateString?: string): string => {
  if (!dateString) return 'Recent';
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
};

// Safe Image component with bulletproof onError fallback
const BlogThumbnail = ({
  src,
  alt,
  fallback,
  className = '',
}: {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
}) => {
  // Cloudinary account dhqcwkpzp returns 401 unauthorized in production
  const initialValid = src && src.trim() !== '' && !src.includes('dhqcwkpzp');
  const [imgUrl, setImgUrl] = useState<string>(initialValid ? (src as string) : fallback);

  useEffect(() => {
    const valid = src && src.trim() !== '' && !src.includes('dhqcwkpzp');
    setImgUrl(valid ? (src as string) : fallback);
  }, [src, fallback]);

  return (
    <img
      src={imgUrl}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imgUrl !== fallback) {
          setImgUrl(fallback);
        }
      }}
    />
  );
};

const BlogPostboxArea = () => {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get('category') || 'all';

  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<Array<{ name: string; count: number }>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  // Sync category param from URL if changed
  useEffect(() => {
    if (initialCategoryParam) {
      setSelectedCategory(initialCategoryParam);
    }
  }, [initialCategoryParam]);

  // Fetch blogs & categories
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const blogUrl = process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/blogs?limit=100`
          : 'http://localhost:8081/api/blogs?limit=100';

        const catUrl = process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/blog-categories`
          : 'http://localhost:8081/api/blog-categories';

        const [blogRes, catRes] = await Promise.allSettled([
          fetch(blogUrl),
          fetch(catUrl)
        ]);

        let loadedBlogs: BlogItem[] = [];
        if (blogRes.status === 'fulfilled' && blogRes.value.ok) {
          const blogData = await blogRes.value.json();
          loadedBlogs = blogData.blogs || blogData.data || [];
        }

        // Build category list with live counts
        const catCounts: { [key: string]: number } = {};
        loadedBlogs.forEach((b) => {
          if (b.category) {
            const normalized = b.category.trim();
            catCounts[normalized] = (catCounts[normalized] || 0) + 1;
          }
        });

        const catList: Array<{ name: string; count: number }> = [];

        if (catRes.status === 'fulfilled' && catRes.value.ok) {
          const catData = await catRes.value.json();
          const apiCats = catData.categories || catData.data || [];
          apiCats.forEach((c: any) => {
            const name = c.name || c.categories || '';
            if (name) {
              catList.push({
                name,
                count: catCounts[name] || 0,
              });
            }
          });
        }

        // Include any categories present in blogs but missing from category endpoint
        Object.keys(catCounts).forEach((catName) => {
          if (!catList.some((c) => c.name.toLowerCase() === catName.toLowerCase())) {
            catList.push({ name: catName, count: catCounts[catName] });
          }
        });

        if (isMounted) {
          setBlogs(loadedBlogs);
          setCategories(catList);
        }
      } catch (err) {
        console.error('Error fetching blog data:', err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter blogs by Category & Search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      // Category match
      if (selectedCategory && selectedCategory.toLowerCase() !== 'all') {
        if (!blog.category || blog.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }
      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (blog.title || '').toLowerCase().includes(q);
        const inDesc = (blog.description || '').toLowerCase().includes(q);
        const inCat = (blog.category || '').toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inCat) {
          return false;
        }
      }
      return true;
    });
  }, [blogs, selectedCategory, searchQuery]);

  // Reset pagination when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Featured spotlight post:
  // When on page 1 and no search query, highlight the first matching blog as Spotlight
  const hasSpotlight = currentPage === 1 && !searchQuery.trim() && filteredBlogs.length > 0;
  const spotlightBlog = hasSpotlight ? filteredBlogs[0] : null;
  const regularBlogs = hasSpotlight ? filteredBlogs.slice(1) : filteredBlogs;

  // Pagination calculations (6 articles per page in the grid)
  const postsPerPage = 6;
  const totalRegularPosts = regularBlogs.length;
  const totalPages = Math.ceil(totalRegularPosts / postsPerPage) || 1;
  const paginatedBlogs = regularBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Recent posts for sidebar (latest 3 published)
  const recentPosts = useMemo(() => {
    return blogs.slice(0, 3);
  }, [blogs]);

  // Trending tags for sidebar
  const trendingTags = useMemo(() => {
    return [
      'eCommerce',
      'Online Sales',
      'Web Development',
      'SEO Strategies',
      'Mobile UX',
      'Small Business',
      'Growth Tactics',
      'Shopify',
    ];
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="blog-redesign-wrapper">
      <div className="container">
        {/* ========================================================
            HERO / HEADER SECTION
            ======================================================== */}
        <header className="blog-hero-header">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="blog-breadcrumb">
            <Link href="/">Home</Link>
            <span className="bc-sep">/</span>
            <span className="bc-current">Blog & Insights</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="blog-eyebrow-badge">
            <span className="badge-dot" />
            <span className="badge-text">Vastora Tech Knowledge Hub</span>
          </div>

          {/* Main Title */}
          <h1 className="blog-main-title">
            Insights, Tech &{' '}
            <span className="gradient-highlight">Growth Strategies</span>
          </h1>

          {/* Subtitle */}
          <p className="blog-main-subtitle">
            Actionable guides, modern eCommerce blueprints, and digital engineering tactics crafted by Vastora Tech’s senior architects to help your business scale.
          </p>

          {/* Trust Strip */}
          <div className="blog-trust-strip">
            <div className="trust-strip-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified Industry Best Practices</span>
            </div>
            <div className="trust-strip-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>eCommerce & Web Solutions</span>
            </div>
            <div className="trust-strip-item">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Weekly Updated Analysis</span>
            </div>
          </div>
        </header>

        {/* ========================================================
            INTERACTIVE CATEGORY FILTER PILLS BAR
            ======================================================== */}
        <div className="blog-categories-pill-bar">
          <button
            type="button"
            className={`category-pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <span>All Articles</span>
            <span className="pill-count">{blogs.length}</span>
          </button>

          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              className={`category-pill-btn ${
                selectedCategory.toLowerCase() === cat.name.toLowerCase() ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              <span>{cat.name}</span>
              <span className="pill-count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* ========================================================
            MAIN LAYOUT: ARTICLES (8 COLS) + MODERN SIDEBAR (4 COLS)
            ======================================================== */}
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            {/* Loading Skeleton */}
            {loading && (
              <div className="row blog-posts-grid-row">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="col-md-6 col-12 blog-post-card-col">
                    <div className="blog-post-card" style={{ opacity: 0.65 }}>
                      <div
                        style={{
                          height: 205,
                          background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
                        }}
                      />
                      <div className="post-card-body">
                        <div style={{ height: 16, width: 120, background: '#e2e8f0', borderRadius: 4, marginBottom: 12 }} />
                        <div style={{ height: 24, width: '90%', background: '#cbd5e1', borderRadius: 6, marginBottom: 10 }} />
                        <div style={{ height: 48, width: '100%', background: '#f1f5f9', borderRadius: 4 }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredBlogs.length === 0 && (
              <div className="blog-empty-state">
                <div className="empty-icon-box">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="empty-title">No Articles Found</h3>
                <p className="empty-desc">
                  We couldn’t find any articles matching “{searchQuery || selectedCategory}”. Try adjusting your search keyword or view all topics.
                </p>
                <button
                  type="button"
                  className="empty-reset-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* ========================================================
                FEATURED SPOTLIGHT ARTICLE (Page 1 Top Story)
                ======================================================== */}
            {!loading && spotlightBlog && (
              <article className="blog-featured-card">
                <div className="featured-thumb-box">
                  <Link href={`/blog-details/${spotlightBlog.slug || spotlightBlog._id || ''}`}>
                    <BlogThumbnail
                      src={spotlightBlog.image}
                      fallback={getCategoryCover(spotlightBlog.category, 0)}
                      alt={spotlightBlog.title}
                    />
                  </Link>
                  <div className="featured-spotlight-badge">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Featured Story</span>
                  </div>
                  <div className="featured-reading-time">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{getReadingTime(spotlightBlog)}</span>
                  </div>
                </div>

                <div className="featured-content-box">
                  <div className="featured-meta-row">
                    {spotlightBlog.category && (
                      <span className="featured-cat-tag">
                        {spotlightBlog.category}
                      </span>
                    )}
                    <span className="meta-item">
                      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(spotlightBlog.createdAt || spotlightBlog.publishedAt)}
                    </span>
                    <span className="meta-item">
                      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {spotlightBlog.author || 'Vastora Tech'}
                    </span>
                  </div>

                  <h2 className="featured-title">
                    <Link href={`/blog-details/${spotlightBlog.slug || spotlightBlog._id || ''}`}>
                      {spotlightBlog.title}
                    </Link>
                  </h2>

                  <p className="featured-desc">
                    {spotlightBlog.description ||
                      'Discover strategies, architectural patterns, and actionable insights to optimize your web systems and accelerate business revenue.'}
                  </p>

                  <div className="featured-footer-row">
                    <Link
                      href={`/blog-details/${spotlightBlog.slug || spotlightBlog._id || ''}`}
                      className="featured-cta-btn"
                    >
                      <span>Read Complete Guide</span>
                      <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <span className="featured-brand-stamp">
                      ⚡ Vastora Tech Blueprint
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* ========================================================
                ARTICLES GRID (2 COLUMNS PER ROW)
                ======================================================== */}
            {!loading && paginatedBlogs.length > 0 && (
              <div className="row blog-posts-grid-row">
                {paginatedBlogs.map((blog, idx) => {
                  const coverFallback = getCategoryCover(blog.category, idx + 1);
                  const catClass = getCategoryClass(blog.category);
                  const readTime = getReadingTime(blog);

                  return (
                    <div key={blog._id || blog.id || idx} className="col-md-6 col-12 blog-post-card-col">
                      <article className="blog-post-card">
                        <div className="post-thumb-wrapper">
                          <Link href={`/blog-details/${blog.slug || blog._id || ''}`}>
                            <BlogThumbnail
                              src={blog.image}
                              fallback={coverFallback}
                              alt={blog.title}
                            />
                          </Link>

                          {blog.category && (
                            <span className={`post-cat-badge ${catClass}`}>
                              {blog.category}
                            </span>
                          )}

                          <span className="post-reading-pill">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {readTime}
                          </span>
                        </div>

                        <div className="post-card-body">
                          <div className="post-meta-row">
                            <span className="meta-item">
                              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(blog.createdAt || blog.publishedAt)}
                            </span>
                            <span className="meta-item">
                              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              {blog.author || 'Vastora Tech'}
                            </span>
                          </div>

                          <h3 className="post-card-title">
                            <Link href={`/blog-details/${blog.slug || blog._id || ''}`}>
                              {blog.title}
                            </Link>
                          </h3>

                          <p className="post-card-desc">
                            {blog.description || 'In-depth guide and best practices for scaling digital growth and optimizing online performance.'}
                          </p>

                          <div className="post-card-footer">
                            <Link
                              href={`/blog-details/${blog.slug || blog._id || ''}`}
                              className="post-read-more-link"
                            >
                              <span>Read Article</span>
                              <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                            <span className="post-topic-indicator">
                              {blog.category || 'Tech'}
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ========================================================
                PAGINATION
                ======================================================== */}
            {!loading && totalPages > 1 && (
              <nav aria-label="Blog pages" className="blog-pagination-nav">
                <button
                  type="button"
                  className="page-nav-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pNum = i + 1;
                  return (
                    <button
                      key={pNum}
                      type="button"
                      className={`page-nav-btn ${currentPage === pNum ? 'active' : ''}`}
                      onClick={() => handlePageChange(pNum)}
                    >
                      {pNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  className="page-nav-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            )}
          </div>

          {/* ========================================================
              MODERN REDESIGNED SIDEBAR (4 COLS)
              ======================================================== */}
          <div className="col-xl-4 col-lg-4">
            <aside className="modern-sidebar-wrapper">
              {/* Search Widget */}
              <div className="sidebar-card-widget">
                <h4 className="widget-header-title">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Articles
                </h4>
                <div className="sidebar-search-box">
                  <span className="sidebar-search-icon">
                    <svg fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="sidebar-search-input"
                    placeholder="Search by topic, keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="sidebar-clear-btn"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Recent Articles Widget */}
              <div className="sidebar-card-widget">
                <h4 className="widget-header-title">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Latest Insights
                </h4>
                <div className="recent-posts-list">
                  {recentPosts.map((post, idx) => {
                    const fallbackImg = getCategoryCover(post.category, idx + 2);
                    return (
                      <Link
                        key={post._id || post.id || idx}
                        href={`/blog-details/${post.slug || post._id || ''}`}
                        className="recent-post-row"
                      >
                        <div className="recent-thumb">
                          <BlogThumbnail
                            src={post.image}
                            fallback={fallbackImg}
                            alt={post.title}
                          />
                        </div>
                        <div className="recent-info">
                          <h5 className="recent-title">{post.title}</h5>
                          <span className="recent-date">
                            <svg fill="none" stroke="currentColor" strokeWidth={2} width={12} height={12} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(post.createdAt || post.publishedAt)}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Category Breakdown Widget */}
              <div className="sidebar-card-widget">
                <h4 className="widget-header-title">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  Topics & Categories
                </h4>
                <div className="categories-menu-list">
                  <div
                    className={`category-menu-item ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span className="cat-name">All Publications</span>
                    <span className="cat-count-badge">{blogs.length}</span>
                  </div>

                  {categories.map((cat, idx) => (
                    <div
                      key={idx}
                      className={`category-menu-item ${
                        selectedCategory.toLowerCase() === cat.name.toLowerCase() ? 'active' : ''
                      }`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      <span className="cat-name">{cat.name}</span>
                      <span className="cat-count-badge">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Topics / Tags */}
              <div className="sidebar-card-widget">
                <h4 className="widget-header-title">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Trending Tags
                </h4>
                <div className="popular-tags-cloud">
                  {trendingTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="tag-cloud-chip"
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lead Consultation Banner */}
              <div className="sidebar-consultation-banner">
                <span className="consultation-badge">Vastora Tech Enterprise</span>
                <h4 className="consultation-title">Need a Custom eCommerce or Web Solution?</h4>
                <p className="consultation-desc">
                  Accelerate your digital roadmap with our certified senior architects. Let’s evaluate your website performance and boost conversions.
                </p>
                <Link href="/contact" className="consultation-cta-btn">
                  <span>Schedule Strategy Call</span>
                  <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Newsletter Digest Widget */}
              <div className="sidebar-card-widget">
                <h4 className="widget-header-title">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Weekly Growth Digest
                </h4>
                <div className="sidebar-newsletter-form">
                  <p className="newsletter-desc">
                    Get weekly eCommerce tactics, SEO case studies, and engineering strategies straight to your inbox.
                  </p>
                  {newsletterSubscribed ? (
                    <div style={{ color: '#10b981', fontWeight: 600, fontSize: 13, padding: '10px 0' }}>
                      ✓ Thank you! You’re subscribed to Vastora Tech Insights.
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="newsletter-input-wrap">
                      <input
                        type="email"
                        placeholder="Enter your work email..."
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        required
                      />
                      <button type="submit">Subscribe Free</button>
                    </form>
                  )}
                </div>
              </div>

              {/* Social Channels Widget */}
              <div className="sidebar-card-widget">
                <h4 className="widget-header-title">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Connect With Us
                </h4>
                <div className="sidebar-social-row">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-social-link"
                    title="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-social-link"
                    title="Twitter"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-social-link"
                    title="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-social-link"
                    title="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="sidebar-social-link"
                    title="YouTube"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostboxArea;