"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDemoBySlug } from "@/data/demos";
import Wrapper from '@/layout/Wrapper';
import HeaderSix from '@/layout/headers/HeaderSix';
import FooterFive from '@/layout/footers/FooterFive';

type PageProps = {
  params: { slug: string };
};

export default function DemoProductPage({ params }: PageProps) {
  const demo = getDemoBySlug(params.slug);
  if (!demo) return notFound();

  return (
    <Wrapper>
      <HeaderSix />
      <main>
        <div className="container py-5 mt-100">
          <div className="row g-4 align-items-center mb-4">
            <div className="col-lg-6">
              <h1 className="h2 mb-2">{demo.title}</h1>
              {demo.subtitle ? <p className="lead text-muted">{demo.subtitle}</p> : null}
              <p className="text-muted">{demo.description}</p>
              <div className="d-flex flex-wrap gap-2 my-3">
                {demo.features.map((f, idx) => (
                  <span key={idx} className="badge bg-light text-dark border">
                    {f}
                  </span>
                ))}
              </div>
              <div className="d-flex gap-3 mt-4">
                {demo.demoUrl ? (
                  <a
                    href={demo.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Demo
                  </a>
                ) : null}
                <Link href="/contact" className="btn btn-success">
                  Get This Website
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  width={900}
                  height={600}
                  className="card-img-top"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 rounded-3">
                <h2 className="h4 mb-3">What you get</h2>
                <ul className="mb-0">
                  {demo.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </main>
      <FooterFive style={true} />
    </Wrapper>
  );
}

