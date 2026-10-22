import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import CpProfiles from "@/components/sections/CpProfiles";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Achievements />
      <About />
      <Skills />
      <CpProfiles />
      <Contact />
    </>
  );
}
