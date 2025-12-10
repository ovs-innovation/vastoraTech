"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Dynamic fetch instead of static dummy data
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

const DemosListingArea = () => {
  const router = useRouter();
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const imgWrapStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: 220,
    overflow: "hidden",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "#f6f6f6",
  };

  const titleClampStyle: React.CSSProperties = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100%",
  };

  const descClampStyle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as any,
    overflow: "hidden",
    textOverflow: "ellipsis",
    minHeight: "2.9em",
  };

  const buttonBlue: React.CSSProperties = {
    background: "#2B6BB3",
    color: "#fff",
    borderRadius: 4,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontFamily: "var(--tp-ff-jakarta)",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 1,
    padding: "12px 20px",
    border: "none",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(43, 107, 179, 0.2)",
  };

  const iconProps = {
    width: 16,
    height: 16,
    stroke: "currentColor",
    strokeWidth: 2,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const InfoIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );

  const ExternalIcon = () => (
    <svg {...iconProps} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v7H3V3h7" />
    </svg>
  );

  const fetchDemos = (opts?: { search?: string; category?: string }) => {
    const params = new URLSearchParams();
    if (opts?.search) params.append("title", opts.search);
    if (opts?.category) params.append("category", opts.category);
    const url = params.toString()
      ? `${API_URL}/demos?${params.toString()}`
      : `${API_URL}/demos`;
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const items = data.demos || data.data || [];
        setDemos(items);
        // build category list from latest dataset if not filtered
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="container py-5 mt-100">
        <div className="text-center mb-4">
          <h1 className="h2 mb-2">Ready Website Demos</h1>
          <p className="text-muted">
            Explore our pre-built, high-converting website demos. Click any card to view details.
          </p>
        </div>
        

        <form onSubmit={handleSubmit} className="row g-2 align-items-center mb-3">
          <div className="col-12 col-md-6">
            <input
              type="search"
              className="form-control"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-8 col-md-4">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4 col-md-2 d-grid">
            <button type="submit" style={buttonBlue}>
              Filter
            </button>
          </div>
        </form>
        <div className="row g-4">
          {demos.map((demo: any) => (
            <div className="col-md-6 col-lg-4" key={demo.slug}>
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: 8, cursor: "pointer" }}
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
                <div style={imgWrapStyle}>
                  <Image
                    src={demo.images?.[0] || demo.image || "/no-image.png"}
                    alt={demo.title}
                    title={demo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "fill" as const }}
                    priority={false}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="h5 mb-0" style={titleClampStyle}>{demo.title}</h3>
                    {demo.category ? (
                      <span className="badge bg-light text-dark border">{demo.category}</span>
                    ) : null}
                  </div>
                  {demo.subtitle ? (
                    <div className="text-muted small mb-2" style={titleClampStyle}>{demo.subtitle}</div>
                  ) : null}
                  <p className="text-muted small flex-grow-1 mb-2" style={descClampStyle}>
                    {demo.description}
                  </p>
                  <div className="d-flex gap-2 mt-2">
                    <Link
                      href={`/product/e-commerce-solutions/${demo.slug}`}
                      style={buttonBlue}
                      className="text-decoration-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <InfoIcon />
                      Know More
                    </Link>
                    {demo.demoUrl ? (
                      <a
                        href={demo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={buttonBlue}
                        className="text-decoration-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalIcon />
                        Live Preview
                      </a>
                    ) : null}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DemosListingArea;

