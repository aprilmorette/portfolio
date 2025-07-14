import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl md:text-6xl mb-4 text-center font-heading">
        Hi, I'm April
      </h1>
      <h1 className="text-xl md:text-2xl text-center">
        Web Development & UX Design Enthusiast
      </h1>
      <a
        href="#main-content"
        className="absolute bottom-6 animate-bounce text-foreground"
      >
        <svg
          className="size-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
