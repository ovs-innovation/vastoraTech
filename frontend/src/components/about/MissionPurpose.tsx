"use client";

import React, { useRef, useState } from "react";
import { Compass, Target, Sparkles } from "lucide-react";

const MissionPurpose: React.FC = () => {
  const missionCardRef = useRef<HTMLDivElement>(null);
  const purposeCardRef = useRef<HTMLDivElement>(null);

  const [missionCoords, setMissionCoords] = useState({ x: 50, y: 50 });
  const [purposeCoords, setPurposeCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>,
    setCoords: (coords: { x: number; y: number }) => void
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <section className="vt-mission-purpose-section" id="our-mission-purpose">
      <div className="container">
        <div className="vt-mission-grid">
          {/* Panel 1: Our Mission (Luminous Light Tech Card) */}
          <div
            ref={missionCardRef}
            className="vt-mission-card card-mission-variant"
            onMouseMove={(e) => handleMouseMove(e, missionCardRef, setMissionCoords)}
            style={{
              ["--mouse-x" as any]: `${missionCoords.x}%`,
              ["--mouse-y" as any]: `${missionCoords.y}%`,
            }}
          >
            {/* Interactive Spotlight Overlay */}
            <div className="card-spotlight" />

            {/* Faint Abstract Quote / Compass Mark */}
            <div className="card-geom-mark" aria-hidden="true">
              “
            </div>

            <div>
              <div className="card-header-row">
                <span className="card-tag">North Star</span>
                <Compass size={22} className="text-primary" />
              </div>
              <h3 className="card-title">Our mission</h3>
              <p className="card-text">
                To empower businesses with smart, scalable eCommerce solutions that drive faster growth and better customer experiences.
              </p>
            </div>

            <div className="card-accent-bar" />
          </div>

          {/* Panel 2: Our Purpose (Deep Navy High-Performance Card) */}
          <div
            ref={purposeCardRef}
            className="vt-mission-card card-purpose-variant"
            onMouseMove={(e) => handleMouseMove(e, purposeCardRef, setPurposeCoords)}
            style={{
              ["--mouse-x" as any]: `${purposeCoords.x}%`,
              ["--mouse-y" as any]: `${purposeCoords.y}%`,
            }}
          >
            {/* Interactive Spotlight Overlay */}
            <div className="card-spotlight" />

            {/* Faint Abstract Target / Compass Mark */}
            <div className="card-geom-mark" aria-hidden="true">
              ✦
            </div>

            <div>
              <div className="card-header-row">
                <span className="card-tag">Core Drive</span>
                <Target size={22} style={{ color: "#38BDF8" }} />
              </div>
              <h3 className="card-title">Our purpose</h3>
              <p className="card-text">
                To be a trusted eCommerce partner helping brands of all sizes launch, scale, and succeed with innovative, technology-driven solutions.
              </p>
            </div>

            <div className="card-accent-bar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPurpose;
