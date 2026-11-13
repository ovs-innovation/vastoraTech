"use client";

import React from "react";
import Image from "next/image";

export interface ProjectCardData {
  id: number;
  img: any;
  mobileImg?: any;
  category: string;
  title: string;
  sm_des: string;
  link: string;
  tags: string[];
  client?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article
      className="cinematic-project-card"
      data-project-id={project.id}
      data-index={index}
      aria-label={`${project.title} - ${project.category}`}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-media-wrapper"
        aria-label={`View ${project.title}`}
      >
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 840px"
          className="card-media-img"
          priority={index < 3}
          draggable={false}
        />
      </a>
    </article>
  );
};

export default ProjectCard;
