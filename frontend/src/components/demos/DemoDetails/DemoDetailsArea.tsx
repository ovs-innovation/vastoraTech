"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

export type DemoDetailsAreaProps = {
  slug: string;
  isAdmin?: boolean; // pass from parent/page if admin
};

const imgBox: React.CSSProperties = {
  width: "100%",
  maxWidth: 950,
  minHeight: 320,
  aspectRatio: "2.2/1",
  background: "#f8f9fa",
  position: "relative",
  overflow: "hidden",
  borderRadius: 18,
  boxShadow: "0 4px 16px rgba(0,30,84,0.09)",
  margin: '0 auto 36px auto',
  display: 'block',
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
    <div className="container py-5 mt-100">
      {/* BIG image at the very top always, centered */}
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10 mx-auto">
          <div style={imgBox} className="shadow-sm mx-auto">
            <Image
              src={Array.isArray(demo.images) && demo.images.length > 0 ? demo.images[0] : demo.image || "/no-image.png"}
              alt={demo.title}
              fill
              priority={true}
              sizes="(max-width: 1200px) 100vw, 950px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* Details below image */}
      <div className="row align-items-center g-5 mb-4 justify-content-center">
        <div className="col-12 col-lg-10">
          <h1 className="h2 mb-2 text-center">{demo.title}</h1>
          {demo.subtitle ? <p className="lead text-muted text-center">{demo.subtitle}</p> : null}
          <p className="text-muted mb-4 text-center">{demo.description}</p>
          {demo.featuresOverview && typeof demo.featuresOverview === "object" && (
            <div className="mb-3">
              <h5>Overview</h5>
              <ul style={{paddingLeft:0, listStyle:'none', textAlign:'left'}}>
                {Object.entries(demo.featuresOverview).map(([key, value], i) => (
                  <li key={i} style={{ marginBottom: 2 }}><b>{key}</b>: {String(value)}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Technologies Section */}
          {demo.technologies && Array.isArray(demo.technologies) && demo.technologies.length > 0 && (
            <div className="mb-4">
              <h5 className="mb-3">Technologies Used</h5>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                {demo.technologies.map((techImg: string, i: number) => (
                  <div key={i} className="d-flex align-items-center justify-content-center px-3 py-2 bg-light rounded" style={{border: '1px solid #e9ecef', minWidth: 80, minHeight: 80}}>
                    <img
                      src={techImg}
                      alt={`Technology ${i + 1}`}
                      style={{width: 'auto', height: 50, maxWidth: 80, objectFit: 'contain'}}
                      onError={(e: any) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Section */}
          {demo.specifications && typeof demo.specifications === "object" && Object.keys(demo.specifications).length > 0 && (
            <div className="mb-4">
              <h5 className="mb-3">Specifications</h5>
              <div className="bg-white border rounded p-4" style={{maxWidth: '100%'}}>
                <div className="row g-3">
                  {Object.entries(demo.specifications).map(([key, value], i) => (
                    <div key={i} className="col-12 col-md-6">
                      <div className="d-flex">
                        <div style={{fontWeight: 600, color: '#000', minWidth: '40%', marginRight: '12px'}}>
                          {key}:
                        </div>
                        <div style={{color: '#6c757d', flex: 1}}>
                          {String(value).includes(',') || String(value).includes('http') ? (
                            <span style={{color: '#2B6BB3'}}>{String(value)}</span>
                          ) : (
                            <span>{String(value)}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="d-flex flex-column flex-md-row gap-3 my-4 justify-content-center">
            {demo.demoUrl && (
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{background: '#2B6BB3', color: '#fff', borderRadius: 4, fontFamily: 'var(--tp-ff-jakarta)', fontWeight: 600, fontSize: 16, padding: '14px 23.5px', textAlign: 'center', minWidth: 160, textDecoration: 'none', display: 'inline-block'}}>
                Live Preview
              </a>
            )}
            {demo.adminDemoUrl && (
              <a
                href={demo.adminDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{background: '#2B6BB3', color: '#fff', border: '1px solid #2B6BB3', borderRadius: 4, fontFamily: 'var(--tp-ff-jakarta)', fontWeight: 600, fontSize: 16, padding: '14px 23.5px', textAlign: 'center', minWidth: 160, textDecoration: 'none', display: 'inline-block'}}
                title="Open admin dashboard demo (may require credentials)">
                Admin Dashboard Live Preview
              </a>
            )}
            <Link href="/contact" style={{background: '#28a745', color: '#fff', borderRadius: 4, fontFamily: 'var(--tp-ff-jakarta)', fontWeight: 600, fontSize: 16, padding: '14px 23.5px', textAlign: 'center', minWidth: 160, textDecoration: 'none', display: 'inline-block'}}>
              Get This Website
            </Link>
          </div>
        </div>
      </div>
      {/* Features List section below */}
      <div className="row">
        <div className="col-12 col-xl-10 mx-auto">
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
  );
};

export default DemoDetailsArea;

