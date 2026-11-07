"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { Award, Briefcase, Users, HeartHandshake } from "lucide-react";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  label: React.ReactNode;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: (
      <>
        Years <br /> Of Experience
      </>
    ),
    icon: <Award size={32} />,
  },
  {
    id: 2,
    value: 2000,
    suffix: "+",
    label: (
      <>
        Successful Projects <br /> Delivered
      </>
    ),
    icon: <Briefcase size={32} />,
  },
  {
    id: 3,
    value: 1900,
    suffix: "+",
    label: (
      <>
        Happy <br /> Clients
      </>
    ),
    icon: <HeartHandshake size={32} />,
  },
  {
    id: 4,
    value: 50,
    suffix: "+",
    label: (
      <>
        Team <br /> Members
      </>
    ),
    icon: <Users size={32} />,
  },
];

const CompanyStats: React.FC = () => {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  return (
    <section className="vt-stats-section" id="company-impact-numbers">
      {/* Background Cyber Grid & Ambient Radiant Light */}
      <div className="vt-stats-grid-bg" aria-hidden="true" />
      <div className="vt-stats-glow" aria-hidden="true" />

      <div className="container vt-stats-container">
        <InView
          as="div"
          threshold={0.2}
          triggerOnce
          onChange={(inView) => {
            if (inView) setHasStarted(true);
          }}
          className="vt-stats-row"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="vt-stat-cell">
              <div className="stat-number-wrap">
                {hasStarted ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  <span>0</span>
                )}
                <span className="stat-plus">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </InView>
      </div>
    </section>
  );
};

export default CompanyStats;
