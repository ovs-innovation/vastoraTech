"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

export type DemoDetailsAreaProps = {
  slug: string;
  isAdmin?: boolean; // pass from parent/page if admin
};

const DemoDetailsArea = ({ slug, isAdmin }: DemoDetailsAreaProps) => {
  const [demo, setDemo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/demos/slug/${slug}`)
      .then(res => res.json())
      .then(data => setDemo(data.demo || data.data || null))
      .catch(() => setError("Could not load demo details."))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!demo) return <div>No demo found.</div>;

  return (
    <>
      <div className="container py-5 mt-100">
        <div className="row g-4 align-items-center mb-4">
          {/* Main image and fields */}
          <div className="col-lg-6">
            <h1 className="h2 mb-2">{demo.title}</h1>
            {demo.subtitle ? <p className="lead text-muted">{demo.subtitle}</p> : null}
            <p className="text-muted">{demo.description}</p>
            {demo.featuresOverview && typeof demo.featuresOverview === "object" ? (
              <div className="mb-3">
                <h5>Overview</h5>
                <ul>
                  {Object.entries(demo.featuresOverview).map(([key, value], i) => (
                    <li key={i}><b>{key}:</b> {String(value)}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="d-flex gap-3 mt-4">
              {demo.demoUrl ? (
                <a
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Frontend Live Preview
                </a>
              ) : null}
              {isAdmin && demo.adminDemoUrl ? (
                <a
                  href={demo.adminDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  Admin Dashboard Preview
                </a>
              ) : null}
              <Link href="/contact" className="btn btn-success">
                Get This Website
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              {/* Gallery if multiple images */}
              {Array.isArray(demo.images) && demo.images.length > 0 ? (
                <Image
                  src={demo.images[0]}
                  alt={demo.title}
                  width={900}
                  height={600}
                  className="card-img-top"
                />
              ) : (
                <Image
                  src={demo.image || "/no-image.png"}
                  alt={demo.title}
                  width={900}
                  height={600}
                  className="card-img-top"
                />
              )}
            </div>
          </div>
        </div>
        {/* Features List section */}
        <div className="row">
          <div className="col-12">
            <div className="bg-light p-4 rounded-3">
              <h2 className="h4 mb-3">What you get</h2>
              <ul className="mb-0">
                {Array.isArray(demo.featuresList)
                  ? demo.featuresList.map((f: string, i: number) => <li key={i}>{f}</li>)
                  : demo.features && Array.isArray(demo.features)
                  ? demo.features.map((f: string, i: number) => <li key={i}>{f}</li>)
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoDetailsArea;

