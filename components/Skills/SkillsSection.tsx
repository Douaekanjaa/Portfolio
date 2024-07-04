"use client";

import React from "react";
import Image from "next/image";
/* import { skillsData } from "@/constants/index"; */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };
  const skillsData = {
    frontend: [
      { name: "HTML", image: "/imgs/html.png" },
      { name: "CSS", image: "/imgs/css.png" },
      { name: "Tailwind CSS", image: "/imgs/tailwind.png" },
      { name: "Bootstrap", image: "/imgs/bootstrap.svg" },
      { name: "JavaScript", image: "/imgs/js.png" },
      { name: "React", image: "/imgs/react.png" },
      { name: "Redux", image: "/imgs/redux.png" },
      { name: "TypeScript", image: "/imgs/ts.png" },
      { name: "NextJS", image: "/imgs/next.png" },
   
    ],
    backend: [
      { name: "PHP", image: "/imgs/php.svg" },
      { name: "Laravel", image: "/imgs/laravel.svg" },
      { name: "Node.js", image: "/imgs/node-js.png" },
      { name: "Express", image: "/imgs/express.png" },
      { name: "Python", image: "/imgs/python.svg" },
    ],
    database: [
      { name: "MongoDB", image: "/imgs/mongodb.svg" },
      { name: "MySQL", image: "/imgs/mysql2.svg" },
    ],
    others: [
      { name: "Git", image: "/imgs/git.svg" },
      { name: "GitHub", image: "/imgs/github.png" },
      { name: "Postman", image: "/imgs/postman.svg" },
      { name: "Docker", image: "/imgs/docker.svg" },
      { name: "Figma", image: "/imgs/figma.svg" },
     
    ],
  };
  return (
    <div className="skills-section py-10" ref={ref}>
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 justify-center px-10  md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {Object.keys(skillsData).map((category) => (
            <motion.div
              key={category}
              className="p-4 px-5 md:px-16 justify-center md:shadow-sm shadow-none md:shadow-purple-900"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl   flex justify-center font-semibold text-center text-white mb-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.h3>
              <div className="grid grid-cols-3  justify-center py-10 gap-4">
                {skillsData[category].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="my-3 overflow-hidden"
                    variants={skillVariants}
                    whileHover="hover"
                   
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className=""
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
