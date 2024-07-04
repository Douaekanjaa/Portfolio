import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col h-[50] mt-16  w-full"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute   h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/videos/heroback1.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
