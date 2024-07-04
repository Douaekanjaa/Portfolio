
import React from "react";
import Image from "next/image";
/* import { Socials } from "@/constants/index"; */

const AboutMe = () => {
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
  return (
    <section id="about-me" className="py-10 text-white">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-md mb-4">
              Hi, I'm Douae Kanjaa, a passionate full-stack web developer with a
              strong interest in creating engaging and user-friendly web
              applications. I thrive on solving complex problems and crafting
              seamless digital experiences. Currently, I'm eager to embark on
              new opportunities in web development.
            </p>

            <p className="text-md mb-4">
              <span className="">
                {" "}
                Reach out at{" "}
                <a
                  href="mailto:kanjaadouae1@gmail.com"
                  className="text-purple-300 shadow-2xl hover:underline"
                >
                  kanjaadouae1@gmail.com
                </a>
                .{" "}
              </span>
            </p>
            <div className="flex flex-col gap-4 justify-center md:justify-start">
              {Socials.map((social) => (
                <div key={social.name} className="flex items-center gap-2">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-medium text-purple-400  hover:underline">
                      {social.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="rounded-full overflow-hidden h-52 w-52 md:h-60 md:w-60 mx-auto">
              <Image
                src="/imgs/douae1.png"
                alt="Profile Picture"
                width={300}
                height={300}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
