import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="px-4 pt-10 pb-15 max-w-6xl mx-auto">
      <h2 className="text-center mb-5">projects</h2>

      <div className="py-12 flex flex-col gap-8 lg:gap-12">
        {/* Card */}
        <a
          className="group flex"
          href="#"
        >
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
              src="/expensify.png"
              alt="Expensify Project Image"
            />
          </a>

          <div className="pt-4">
            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-lime-400 before:transition-transform before:origin-left before:scale-x-0 group-hover:before:scale-x-100 group-focus:before:scale-x-100">
              Expensify
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                JavaScript
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                HTML
              </span>
              <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
                CSS
              </span>
            </div>
          </div>


        {/* End Card */}
      </div>
      {/* End Card Grid */}
    </section>
  );
};

export default Projects;
