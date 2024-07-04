"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex py-14 flex-row items-center justify-start md:justify-center px-5 md:px-20 mt-40 w-screen z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-start m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 font-bold text-white max-w-[600px] w-auto h-auto text-6xl "
        >
          <span className="text-lg md:text-6xl">
            Hello, I am
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 gradient-text">
              {" "}
              Douae Kanjaa{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg text-xs text-gray-400 my-3 md:my-5 max-w-[600px] "
        >
          Full Stack Developer passionate about clean, efficient code and
          turning ideas into reality. Let&apos;s build something amazing
          together.
        </motion.p>

        <div className="flex items-center h-full w-full justify-center md:justify-start">
          <motion.a
            variants={slideInFromLeft(1)}
            className="md:py-3 md:px-7 py-2 px-6 text-xs md:text-base  me-3 text-center text-white cursor-pointer max-w-[200px]  transition-all duration-300"
            href="#"
          >
            <span className="hover:underline text-xs md:text-base ">
              {" "}
              Learn More!{" "}
            </span>
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            className="button-primary md:py-3 md:px-7 py-2 px-8 flex items-center justify-center text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:bg-purple-700 transition-all duration-300 mt-4 md:mt-0 md:ml-4"
            href="/cv.pdf"
            download
          >
            <span className="text-xs md:text-sm">Download CV</span>
            <div className="BtnCv">
              <svg
                className="svgIcon h-3 md:h-3"
                viewBox="0 0 384 512"
                height="0.7em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
              <span className="tooltip">Download</span>
            </div>
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/*  <Image
          src="/imgs/douae1.png"
          alt="work icons"
          height={650}
          width={650}
          className="hover:scale-105 md:flex hidden transition-transform duration-500"
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
