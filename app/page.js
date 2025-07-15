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
  const [showContent, setshowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setshowContent(scrollPosition > heroHeight - 200);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            // fade in animation
            if (el.classList.contains("fade-in")) {
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-10");
            }

            // slide left animation
            if (el.classList.contains("slide-left")) {
              const children = el.querySelectorAll("li");
              children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 150}ms`;
                child.classList.add("opacity-100", "translate-x-0");
                child.classList.remove("opacity-0", "-translate-x-10");
              });
            }

            // zoom in animation
            if (el.classList.contains("zoom-in")) {
              el.classList.add("opacity-100", "scale-100");
              el.classList.remove("opacity-0", "scale-90");
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    document
      .querySelectorAll(".fade-in, .slide-left, .zoom-in")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <main
        className={`flex transition-all duration-1000 ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="transition-all hidden md:flex duration-700 sticky top-0 left-0 h-screen w-[16rem] z-50">
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

      <MobileMenu showContent={showContent} />
    </>
  );
}
