
import Hero from "../components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import SkillsSection from "@/components/Skills/SkillsSection";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-screen">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />

        <SkillsSection />
        <Projects />
        <Contact />
       
      </div>
    </main>
  );
}