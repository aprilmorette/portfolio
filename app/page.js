"use client";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import MobileMenu from "./components/MobileMenu";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setShowNav(scrollPosition > heroHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero />

      <main className="flex">
        <div
          className={`transition-all hidden md:flex duration-700 sticky top-0 left-0 h-screen w-[16rem] z-50 ${
            showNav
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }`}
        >
          <SideBar />
        </div>

        {/* Site content */}
        <section id="main-content" className="w-full">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </section>
      </main>

      <MobileMenu showNav={showNav} />

    </>
  );
}
