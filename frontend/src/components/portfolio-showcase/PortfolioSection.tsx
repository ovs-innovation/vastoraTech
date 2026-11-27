"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portfolio_data_2 from "@/data/portfolio-data-2";
import HorizontalProjectTrack from "./HorizontalProjectTrack";
import { ProjectCardData } from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const resolveApiUrl = () => {
  if (
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
  ) {
    return "http://localhost:8081/api";
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081/api";
};

interface PortfolioSectionProps {
  heading?: string;
  kicker?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  heading = "Our work.",
  kicker = "FEATURED CASE STUDIES",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectCardData[]>(portfolio_data_2);

  // Fetch dynamic works from admin API
  useEffect(() => {
    let isMounted = true;
    const apiUrl = resolveApiUrl();

    fetch(`${apiUrl}/works?status=show`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted && data?.works && data.works.length > 0) {
          const mapped: ProjectCardData[] = data.works.map((w: any, idx: number) => {
            const fallbackDefault = portfolio_data_2[idx % portfolio_data_2.length];
            return {
              id: w._id || w.id || idx + 1,
              img: w.image || fallbackDefault?.img,
              mobileImg: w.mobileImage || fallbackDefault?.mobileImg,
              category: w.category || "E-commerce",
              title: w.title || "Project",
              sm_des: w.description || "",
              link: w.link || "#",
              tags: Array.isArray(w.tags) ? w.tags : [],
              client: w.client || "",
            };
          });
          setProjects(mapped);
        }
      })
      .catch((err) => {
        console.warn("Portfolio API unavailable, using fallback:", err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // GSAP animation setup
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768 && containerRef.current && trackRef.current) {
        const track = trackRef.current;
        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            },
          },
        });
      }
    }, containerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", checkMobile);
      ctx.revert();
    };
  }, [isMobile, projects]);

  const totalCount = projects.length;
  const currentCount = Math.min(
    totalCount,
    Math.max(1, Math.ceil(scrollProgress * totalCount))
  );

  return (
    <section
      className={`cinematic-portfolio-section ${isMobile ? "is-mobile-touch" : "is-desktop-pinned"}`}
      ref={containerRef}
      id="cinematic-portfolio"
      style={{ backgroundColor: "#296cb3" }}
      aria-label="Our Work Portfolio Showcase"
    >
      {/* Top Header Floating Overlay (stays pinned with section) */}
      <div className="cinematic-header-bar">
        <div className="header-meta">
          <span className="header-kicker">{kicker}</span>
          <h2 className="header-main-title">{heading}</h2>
        </div>

        {/* Minimalist Progress Meter */}
        <div className="header-progress-wrap" aria-hidden="true">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="progress-counter">
            {String(currentCount).padStart(2, "0")} / {String(totalCount).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Horizontal Scrolling Track Viewport */}
      <div className="cinematic-viewport-wrapper">
        <HorizontalProjectTrack
          projects={projects}
          trackRef={trackRef}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
