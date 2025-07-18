import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="px-4 pt-10 pb-15 max-w-6xl mx-auto">
      <h2 className="text-center mb-10">projects</h2>

      {/* expensify project */}
      <div className="fade-in opacity-0 translate-y-15 transform-all duration-1000 pb-12 flex gap-4 lg:gap-6">
        <div className="basis-1/3 flex flex-col justify-end mb-2">
          <div className="text-right">
            <h3>Expensify</h3>
            <div className="mt-3 mb-3 flex flex-wrap gap-2 justify-end">
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                JavaScript
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                HTML
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                CSS
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                Asana
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                Webstorm
              </span>
            </div>
            <Link href="/Expensify" className="link italic inline-flex items-center font-bold">View Case Study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>

        <a className="basis-2/3" href="#">
          <img
            className="card"
            src="/expensify.png"
            alt="Expensify Project Image"
          />
        </a>
      </div>

      {/* portfolio project */}
      <div className="fade-in opacity-0 translate-y-15 transform-all duration-1000 py-12 flex gap-4 lg:gap-6">
        <a className="basis-2/3" href="#">
          <img
            className="card"
            src="/portfolio-hero.png"
            alt="Portoflio Project Image"
          />
        </a>
        <div className="basis-1/3 flex flex-col justify-end mb-2">
          <div>
            <h3>Personal Portfolio</h3>
            <div className="mt-3 mb-3 flex flex-wrap gap-2">
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                JavaScript
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                HTML
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                TailwindCSS
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                React
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                Next.js
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                Figma
              </span>
              <span className="card py-1.5 px-3 text-xs sm:text-sm rounded-xl">
                Notion
              </span>
            </div>
            <Link href="/Portfolio" className="link italic inline-flex items-center font-bold">View Case Study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
