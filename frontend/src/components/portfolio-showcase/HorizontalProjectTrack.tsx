"use client";

import React from "react";
import ProjectCard, { ProjectCardData } from "./ProjectCard";

interface HorizontalProjectTrackProps {
  projects: ProjectCardData[];
  trackRef: React.RefObject<HTMLDivElement>;
}

const HorizontalProjectTrack: React.FC<HorizontalProjectTrackProps> = ({
  projects,
  trackRef,
}) => {
  return (
    <div className="cinematic-horizontal-track" ref={trackRef}>
      {projects.map((project, idx) => (
        <ProjectCard key={project.id} project={project} index={idx} />
      ))}

      {/* Final Spacer for elegant scroll exit */}
      <div className="cinematic-track-endcap" aria-hidden="true" />
    </div>
  );
};

export default HorizontalProjectTrack;

