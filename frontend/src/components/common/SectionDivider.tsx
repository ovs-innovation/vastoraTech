import React from "react";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label, className = "" }) => {
  return (
    <div className={`modern-section-divider-shell ${className}`} aria-hidden="true">
      <div className="container">
        <div className="divider-gradient-track">
          <div className="divider-glow-beam" />
          {label ? (
            <div className="divider-label-pill">
              <span className="pill-dot" />
              <span className="pill-text">{label}</span>
            </div>
          ) : (
            <div className="divider-center-diamond">
              <span className="diamond-glow" />
              <span className="diamond-dot" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
