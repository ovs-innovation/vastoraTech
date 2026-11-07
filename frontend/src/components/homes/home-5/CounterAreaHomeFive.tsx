"use client";

import React from "react";
import { Clock, Award, Sparkles, Users } from "lucide-react";
import CountTwo from "@/components/common/CountTwo";

const impactStats = [
  {
    id: 1,
    icon: <Clock size={24} strokeWidth={2.2} />,
    cls: "",
    countNumber: 10,
    label: "Years of Experience",
    microBadge: "Industry Leadership",
  },
  {
    id: 2,
    icon: <Award size={24} strokeWidth={2.2} />,
    cls: "pod-cyan",
    iconCls: "icon-cyan",
    countNumber: 2000,
    label: "Successful Projects",
    microBadge: "High-Scale Stores",
  },
  {
    id: 3,
    icon: <Sparkles size={24} strokeWidth={2.2} />,
    cls: "pod-emerald",
    iconCls: "icon-emerald",
    countNumber: 1900,
    label: "Happy Customers",
    microBadge: "98.6% Retention Rate",
  },
  {
    id: 4,
    icon: <Users size={24} strokeWidth={2.2} />,
    cls: "pod-indigo",
    iconCls: "icon-indigo",
    countNumber: 50,
    label: "Team Members",
    microBadge: "In-House Specialists",
  },
];

const CounterAreaHomeFive = () => {
  return (
    <section className="counter-area-enhanced">
      <div className="container">
        <div className="impact-stats-grid">
          {impactStats.map((item) => (
            <div key={item.id} className={`impact-stat-pod ${item.cls}`}>
              <div className={`stat-icon-wrapper ${item.iconCls || ""}`}>
                {item.icon}
              </div>
              <div className="stat-content">
                <div className="stat-number-row">
                  <span className="stat-value">
                    <CountTwo number={item.countNumber} />
                  </span>
                </div>
                <div className="stat-label">{item.label}</div>
                <div className="stat-micro-badge">{item.microBadge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterAreaHomeFive;