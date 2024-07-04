"use client";

import React from "react";
import SectionHeading from "./section-heading";
/* import { projectsData } from "@/constants/index"; */
import Project from "./Project";

export default function Projects() {
  const projectsData = [
    {
      title: "Cinema Ticket Booking Website",
      description:
        "Cine is a website where users can explore blockbuster movies, purchase tickets seamlessly, and enjoy a delightful cinematic experience.",
      tags: ["React", "Redux", "Bootstrap", "JavaScript"],
      source_code: "https://github.com/Douaekanjaa/movie-ticket-booking-app",
      imageUrl: "/cine.png",
    },
    
    {
      title: "Bricole",
      description:
        "Bricole connects users with local service providers for various tasks, using intuitive filters for easy access and seamless transactions.",
      tags: ["NodeJs", "Express", "React", "MongoDB", "TailwindCss"],
      source_code: "https://github.com/Douaekanjaa/mern",
      imageUrl: "/bricole.png",
    },
    {
      title: "Gaming Gear E-commerce Website",
      description: "A Laravel-based e-commerce platform for buying gaming gear, featuring user authentication, product management, wishlist functionality, and admin privileges.",
      tags: ["Laravel", "JavaScript", "Bootstrap"],
      source_code: "https://github.com/Douaekanjaa/gaming_gear",
      imageUrl: "/gaming_gear.png",
    },
  ] as const;
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
