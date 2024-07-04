"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../../constants/index";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col  items-center justify-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
