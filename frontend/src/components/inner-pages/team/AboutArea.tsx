"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import team_data from "@/data/team";

const AboutArea: React.FC = () => {
  return (
    <section className="team-area pt-70 pb-40">
      <div className="container">
        {/* Section Header */}
        <div className="vt-team-section-header text-center mb-60">
          <div className="vt-team-sub-badge">
            <span className="dot" />
            <span>EXPERT ROSTER</span>
          </div>
          <h2 className="vt-team-section-title">
            Meet Our Core Team
          </h2>
        </div>

        {/* Previous Card Style (Balanced 3-column grid) */}
        <div className="row gx-9 justify-content-center">
          {team_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className={`team-5-item ${item.cls} text-center mb-60`}>
                <div className="team-5-thumb mb-25">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    priority={item.id <= 3}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />

                  {/* LinkedIn Icon Only (Facebook & Twitter removed) */}
                  {item.linkedin_id && (
                    <div className="team-5-social">
                      <a
                        href={item.linkedin_id}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.name} on LinkedIn`}
                      >
                        <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="team-5-content">
                  <h4 className="team-5-title">
                    <Link href={`/team-details/${item.id}`}>{item.name}</Link>
                  </h4>
                  <p>{item.job_title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
