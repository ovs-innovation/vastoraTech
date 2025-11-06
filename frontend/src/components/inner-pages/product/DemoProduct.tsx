"use client";

import Link from "next/link";
import Image from "next/image";
import type { DemoProduct } from "@/data/demos";

type Props = {
  demo: DemoProduct;
};

const DemoProductCard = ({ demo }: Props) => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <h1>Demo Product</h1>
      <Image src={demo.image} alt={demo.title} width={900} height={600} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h3 className="h5 mb-0">{demo.title}</h3>
          {demo.category ? (
            <span className="badge bg-light text-dark border">{demo.category}</span>
          ) : null}
        </div>
        {demo.subtitle ? <div className="text-muted small mb-2">{demo.subtitle}</div> : null}
        <p className="text-muted small flex-grow-1">{demo.description}</p>
        <div className="d-flex gap-2 mt-2">
          <Link href={`/demos/${demo.slug}`} className="btn btn-primary btn-sm w-100">
            Product Page
          </Link>
          {demo.demoUrl ? (
            <a
              href={demo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm w-100"
            >
              View Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DemoProductCard;

