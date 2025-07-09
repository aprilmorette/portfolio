import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen w-full bg-background text-foreground flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl md:text-6xl font-body text-primary mb-4 text-center">
        Hi, I'm April
      </h1>
      <p className="text-xl md:text-2xl font-heading text-accent text-center">
        Web Development & UX Design Enthusiast
      </p>
      <a
        href="#main-content"
        className="absolute bottom-6 animate-bounce text-primary"
      >
        <svg
          className="w-6 h-6"
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
