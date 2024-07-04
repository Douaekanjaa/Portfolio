"use client";

/* import { Socials } from "../../constants/index"; */
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Socials = [

    {
      name: "LinkedIn",
      src: "/imgs/linkedin.svg",
      url: "https://www.linkedin.com/in/douae-kanjaa/"
    },
    {
      name: "Github",
      src: "/imgs/github.png",
      url: "https://github.com/Douaekanjaa"
    },
   
  ];
  const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "AboutMe",
      hash: "#aboutme",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "SkillsSection",
      hash: "#skillssection",
    },
   
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <Link href="/about-me">
          <div className="h-auto w-auto flex flex-row items-center cursor-pointer">
            <Image
              src="/imgs/NavLogo3.png"
              alt="logo"
              width={90}
              height={90}
              className="hover:animate-spin-slow"
            />
          </div>
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`absolute top-[65px] left-0 w-full md:bg-[#00131417] bg-[#33175fec] md:static md:w-auto md:flex flex-col md:flex-row items-center justify-between md:mr-20
             ${isOpen ? "block" : "hidden"} md:block `}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto md:space-x-6 text-gray-200">
            <Link href="/#about-me">
              <div className="cursor-pointer py-2 md:py-0 hover:shadow-2xl hover:text-lg hover:text-white transition-all duration-300">
                About me
              </div>
            </Link>
            <Link href="/#skills">
              <div className="cursor-pointer py-2 md:py-0 hover:shadow-2xl hover:text-lg hover:text-white transition-all duration-300">
                Skills
              </div>
            </Link>
            <Link href="/#projects">
              <div className="cursor-pointer py-2 md:py-0 hover:shadow-2xl hover:text-lg hover:text-white transition-all duration-300">
                Projects
              </div>
            </Link>
            <Link href="/#contact">
              <div className="cursor-pointer py-2 md:py-0 hover:shadow-2xl hover:text-lg hover:text-white transition-all duration-300">
                Contact
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.url} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
