"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";

export type DemoDetailsAreaProps = {
  slug: string;
  isAdmin?: boolean; // pass from parent/page if admin
};


const modalInputStyle: React.CSSProperties = {
  border: "1px solid #d7dce5",
  borderRadius: 18,
  padding: "13px 18px",
  minHeight: 54,
  background: "#f9fafb",
  fontSize: 15,
  lineHeight: 1.2,
  transition: "border 0.2s ease, box-shadow 0.2s ease",
};

const modalTextAreaStyle: React.CSSProperties = {
  ...modalInputStyle,
  minHeight: 130,
  padding: "13px 18px",
  resize: "none",
};

const modalActionButton: React.CSSProperties = {
  borderRadius: 999,
  padding: "10px 22px",
  fontWeight: 600,
  border: "none",
};

const DemoDetailsArea = ({ slug, isAdmin }: DemoDetailsAreaProps) => {
  const [demo, setDemo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showWhiteLabelModal, setShowWhiteLabelModal] = useState(false);
  const [wlSubmitting, setWlSubmitting] = useState(false);
  const [wlError, setWlError] = useState<string | null>(null);
  const [wlSuccess, setWlSuccess] = useState(false);
  const [wlForm, setWlForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });

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

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const hasQuickInfo = Boolean(demo.category || demo.status || demo.createdAt || demo.updatedAt);

  return (
    <div className="container py-5 mt-100">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12">
          <p className="text-uppercase text-muted fw-semibold mb-1 demo-letter-spacing">
            {demo.category ? `${demo.category} E-commerce Solution` : "Demo Template"}
          </p>
          <h1 className="display-6 mb-0 demo-title-bold">{demo.title}</h1>
        </div>
      </div>

      {/* Hero section */}
      <div className="row g-4 align-items-start justify-content-center">
        <div className="col-12 col-xl-8">
          <div className="demo-hero-container">
            <div className="position-relative demo-hero-image-box demo-hero-image-wrapper">
              <Image
                src={Array.isArray(demo.images) && demo.images.length > 0 ? demo.images[0] : demo.image || "/no-image.png"}
                alt={demo.title}
                title={demo.title}
                fill
                priority={true}
                sizes="(max-width: 1400px) 100vw, 900px"
                className="demo-hero-image"
              />
              {(demo.demoUrl || demo.adminDemoUrl) && (
                <div className="d-flex flex-row flex-sm-row gap-2 w-100 justify-content-center flex-wrap demo-hero-gradient">
                  {demo.demoUrl && (
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto demo-button-base demo-button-blue-hero"
                    >
                      <span className="demo-button-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 5h18M3 12h18M3 19h18" strokeLinecap="round"/><circle cx="7" cy="12" r="2.2"/></svg>
                      </span>
                      Live Preview
                    </a>
                  )}
                  {demo.adminDemoUrl && (
                    <a
                      href={demo.adminDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto demo-button-base demo-button-white"
                    >
                      <span className="demo-button-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 7h16v10H4z"/><path d="M2 17h20v2H2z"/><path d="M9 12h6" strokeLinecap="round"/></svg>
                      </span>
                      Admin Preview
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          {demo.subtitle && (
            <p
              className="mt-4 mb-3"
              style={{fontSize: "1.25rem", fontWeight: 600, color: "#0f172a", letterSpacing: "-0.01em"}}
            >
              {demo.subtitle}
            </p>
          )}

          <div className="mt-3">
            <p className="text-muted mb-4">{demo.description}</p>

            {demo.featuresOverview && typeof demo.featuresOverview === "object" && (
              <div className="mb-4 p-4 rounded-4" style={{border:"1px solid #e5e7eb", background:"#fff"}}>
                <h5 className="mb-3">Features Overview</h5>
                <ul style={{paddingLeft:0, listStyle:'none', textAlign:'left'}}>
                  {Object.entries(demo.featuresOverview).map(([key, value], i) => (
                    <li key={i} style={{ marginBottom: 8 }}><b>{key}</b>: {String(value)}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-light p-4 rounded-4">
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
        <div className="col-12 col-xl-4">
          
          <aside className="demo-sidebar-card">
            {hasQuickInfo && (
              <div className="mb-4">
                <button
              type="button"
              onClick={() => {
                setShowWhiteLabelModal(true);
                setWlError(null);
                setWlSuccess(false);
              }}
              className="w-100 mb-4 demo-button-base demo-button-dark"
            >
              Request Your E-commerce Solution
            </button>
                <h4 className="mb-3">Quick Info</h4>
                <ul className="demo-quick-info-list">
                  {demo.category && (
                    <li className="demo-spec-item-row">
                      <span className="demo-spec-label">Category</span>
                      <span>{demo.category}</span>
                    </li>
                  )}
                  {demo.status && (
                    <li className="demo-spec-item-row">
                      <span className="demo-spec-label">Status</span>
                      <span>{demo.status}</span>
                    </li>
                  )}
                  {demo.createdAt && (
                    <li className="demo-spec-item-row">
                      <span className="demo-spec-label">Created</span>
                      <span>{formatDate(demo.createdAt)}</span>
                    </li>
                  )}
                  {demo.updatedAt && (
                    <li className="demo-spec-item-row" style={{marginBottom: 0}}>
                      <span className="demo-spec-label">Last Update</span>
                      <span>{formatDate(demo.updatedAt)}</span>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {Array.isArray(demo.technologies) && demo.technologies.length > 0 && (
              <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="mb-0">Technologies</h5>
                  <span style={{fontSize: 12, color: '#64748b'}}>Toolkit</span>
                </div>
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  {demo.technologies.map((techImg: string, i: number) => (
                    <div key={i} className="d-flex align-items-center justify-content-center px-3 py-2 bg-light rounded demo-tech-badge">
                      <img
                        src={techImg}
                        alt={`Technology ${i + 1}`}
                        title={`Technology ${i + 1}`}
                        className="demo-tech-img"
                        onError={(e: any) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {demo.specifications && typeof demo.specifications === "object" && Object.keys(demo.specifications).length > 0 && (
              <div>
                <h5 className="mb-3">Specification</h5>
                <div>
                  {Object.entries(demo.specifications).map(([key, value], i) => (
                    <div key={i} className={`demo-spec-row ${i === Object.keys(demo.specifications).length - 1 ? 'demo-spec-row-last' : ''}`}>
                      <span className="demo-spec-label">{key}</span>
                      <span style={{color: '#4b5563', textAlign: 'right'}}>{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            
          </aside>
        </div>
      </div>

      {showWhiteLabelModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: "rgba(15,23,42,0.55)",
            zIndex: 1050,
            padding: "16px",
          }}
        >
          <div
            style={{
              maxWidth: 720,
              width: "100%",
              background: "#ffffff",
              borderRadius: 20,
              border: "1px solid #e2e8f0",
              boxShadow: "0 22px 60px rgba(15,23,42,0.30)",
              padding: "26px 24px 24px 24px",
              maxHeight: "94vh",
              overflowY: "auto",
              overscrollBehavior: "contain",
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <h3 style={{ fontSize: 22, marginBottom: 4 ,}}>E-commerce Solution Enquiry – {demo.title}</h3>
                <p className="mb-0" style={{ fontSize: 13, color: "#6b7280" }}>
                  Share your requirements and we’ll reach out with a tailored proposal.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowWhiteLabelModal(false)}
                style={{
                  border: "none",
                  background: "black",
                  color: "white",
                  cursor: "pointer",
                  padding:"6px 14px",
                  borderRadius: 6,
                }}
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (wlSubmitting) return;
                setWlSubmitting(true);
                setWlError(null);
                setWlSuccess(false);
                try {
                  const res = await fetch(`${API_URL}/white-label-queries`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      demoId: demo._id,
                      demoSlug: demo.slug,
                      name: wlForm.name,
                      email: wlForm.email,
                      company: wlForm.company,
                      phone: wlForm.phone,
                      budget: wlForm.budget,
                      message: wlForm.message,
                    }),
                  });
                  const data = await res.json();
                  if (!res.ok || data?.success === false) {
                    throw new Error(data?.message || "Could not submit enquiry.");
                  }
                  setWlSuccess(true);
                  setWlForm({ name: "", email: "", company: "", phone: "", budget: "", message: "" });
                } catch (err: any) {
                  setWlError(err.message || "Something went wrong.");
                } finally {
                  setWlSubmitting(false);
                }
              }}
            >
              <div className="row g-3 mt-2">
                <div className="col-12 col-md-6">
                  <label className="form-label mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    style={modalInputStyle}
                    value={wlForm.name}
                    onChange={(e) => setWlForm({ ...wlForm, name: e.target.value })}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    style={modalInputStyle}
                    value={wlForm.email}
                    onChange={(e) => setWlForm({ ...wlForm, email: e.target.value })}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label mb-1">Company / Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    style={modalInputStyle}
                    value={wlForm.company}
                    onChange={(e) => setWlForm({ ...wlForm, company: e.target.value })}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label mb-1">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    style={modalInputStyle}
                    value={wlForm.phone}
                    onChange={(e) => setWlForm({ ...wlForm, phone: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label mb-1">Project Budget (optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    style={modalInputStyle}
                    value={wlForm.budget}
                    onChange={(e) => setWlForm({ ...wlForm, budget: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label mb-1">Message / Requirements *</label>
                  <textarea
                    required
                    className="form-control"
                    rows={3}
                    style={modalTextAreaStyle}
                    value={wlForm.message}
                    onChange={(e) => setWlForm({ ...wlForm, message: e.target.value })}
                  />
                </div>
              </div>

              {wlError && (
                <p className="mt-3 mb-0" style={{ color: "#b91c1c", fontSize: 13 }}>
                  {wlError}
                </p>
              )}
              {wlSuccess && (
                <p className="mt-3 mb-0" style={{ color: "#16a34a", fontSize: 13 }}>
                  Thank you. Your e-commerce solution enquiry has been submitted.
                </p>
              )}

              <div className="d-flex justify-content-end gap-2 mt-4">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowWhiteLabelModal(false)}
                  disabled={wlSubmitting}
                  style={{
                    ...modalActionButton,
                    background: "#e2e8f0",
                    color: "#0f172a",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn text-white"
                  style={{...modalActionButton, background:"#2B6BB3"}}
                  disabled={wlSubmitting}
                >
                  {wlSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoDetailsArea;

