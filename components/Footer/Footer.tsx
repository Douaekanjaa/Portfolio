"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border border-t-purple-950 border-x-0 w-screen  shadow text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold my-5 glowname">Douae Kanjaa</h2>
            <div className="my-4">
              <p className="">
                Built with{" "}
                <span className="font-bold text-purple-600">Next.js</span>,{" "}
                <span className="font-bold text-purple-600">Framer Motion</span>
                , and{" "}
                <span className="font-bold text-purple-600">Tailwind CSS</span>.
              </p>
            </div>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          {/* <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <ul className="flex space-x-4 justify-center md:justify-start">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div> */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://github.com/Douaekanjaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/douae-kanjaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/DouaeKanjaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
