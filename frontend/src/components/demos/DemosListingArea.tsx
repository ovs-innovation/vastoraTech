"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EcommerceInfoArea from "./EcommerceInfoArea";
import ecommerceNoidaImg from "@/assets/img/services/ecommerce-noida.png";

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
        

        <div className="text-center mb-40 mt-10">
          <h2 className="h1 mb-2 mt-10" style={{ fontWeight: 700 }}>E-commerce Website Demo Templates for Every Business</h2>
          <p className="text-muted">
           Discover pre-built eCommerce website solutions for fashion, beauty, jewellery & more. Start selling online with our ready-to-use designs.
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
            <button type="submit" className="demo-button-blue">
              Filter
            </button>
          </div>
        </form>
        <div className="row g-4">
          {demos.map((demo: any) => (
            <div className="col-md-6 col-lg-4" key={demo.slug}>
              <div
                className="card h-100 border-0 shadow-sm demo-card"
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
                <div className="demo-img-wrap">
                  <Image
                    src={demo.images?.[0] || demo.image || "/no-image.png"}
                    alt={demo.title}
                    title={demo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="demo-hero-image"
                    priority={false}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="h5 mb-0 demo-title-clamp">{demo.title}</h3>
                    {demo.category ? (
                      <span className="badge bg-light text-dark border">{demo.category}</span>
                    ) : null}
                  </div>
                  {demo.subtitle ? (
                    <div className="text-muted small mb-2 demo-title-clamp">{demo.subtitle}</div>
                  ) : null}
                  <p className="text-muted small flex-grow-1 mb-2 demo-desc-clamp">
                    {demo.description}
                  </p>
                  <div className="d-flex gap-2 mt-2">
                    <Link
                      href={`/product/e-commerce-solutions/${demo.slug}`}
                      className="text-decoration-none demo-button-blue"
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
                        className="text-decoration-none demo-button-blue"
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
        <div className="text-center mb-60 mt-20">
          <h2 className="h2 mb-2">Ecommerce Website Development Services in Noida, India</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
           We are a leading ecommerce website development agency in India offering scalable, secure, and high-converting ecommerce solutions. Our expert ecommerce website developers build custom websites and apps tailored to your business needs.
          </p>
        </div>

        <section className="ecommerce-about-area pb-40">
          <div className="container p-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                <div className="about-content pe-lg-4">
                  {/* <h5 className="mb-20" style={{ fontSize: "28px", fontWeight: 700, color: "#000" }}>
                    Reliable eCommerce Web Development Company in Noida
                  </h5> */}
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#555", textAlign: "justify" }}>
                    Looking for a reliable ecommerce web development company in Noida? We provide end-to-end ecommerce website
                    development services, including design, development, and ecommerce app solutions to help you grow your online
                    business.
                  </p>
                  {/* <div className="mt-25">
                    <Link href="/contact" className="demo-button-blue" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      Get a Free Consultation
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                <div className="about-img mb-30 mb-lg-0">
                  <Image
                    src={ecommerceNoidaImg}
                    alt="Ecommerce website development in Noida"
                    className="img-fluid rounded-4 shadow-sm"
                    style={{ width: "100%", height: "300px", borderRadius: "16px" }}
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <EcommerceInfoArea />
      </div>
    </>
  );
};

export default DemosListingArea;

