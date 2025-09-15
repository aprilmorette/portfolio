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
              el.classList.remove("opacity-0", "translate-y-15");
            }

            // slide left animation
            if (el.classList.contains("slide-left")) {
              const children = el.querySelectorAll("li");
              children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 100}ms`;
                child.classList.add("opacity-100", "translate-x-0");
                child.classList.remove("opacity-0", "-translate-x-10");
              });
            }

            // pop in animation
            if (el.classList.contains("pop-in")) {
              el.classList.add("opacity-100", "scale-100");
              el.classList.remove("opacity-0", "scale-30");
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    document
      .querySelectorAll(".fade-in, .slide-left, .pop-in")
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <section
        id="main-content"
        className={`flex flex-col transition-all duration-1000 ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <div className="transition-all hidden lg:flex duration-700 sticky top-0 left-0 h-screen z-50">
          <SideBar
            id="home-nav"
            sections={[
              {
                id: "about",
                label: "about me",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ),
              },
              {
                id: "experience",
                label: "experience",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                ),
              },
              {
                id: "projects",
                label: "projects",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                    />
                  </svg>
                ),
              },
              {
                id: "contact",
                label: "contact",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                ),
              },
            ]}
          />
        </div>

        <MobileMenu
          id="home-mobile-menu"
          sections={[
            { id: "about", label: "about me" },
            { id: "experience", label: "experience" },
            { id: "projects", label: "projects" },
            { id: "contact", label: "contact" },
          ]}
          showContent={showContent}
        />

        {/* site content */}
        <main className="w-full">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </section>
    </>
  );
}
