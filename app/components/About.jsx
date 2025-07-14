import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="px-4 pt-10 pb-15 max-w-6xl mx-auto">
      <h2 className="text-center mb-5">about me</h2>

      <div className="card flex flex-col lg:flex-row items-center justify-around p-8 gap-5">
        <Image
          src="/profile-picture.jpg"
          alt="April Duff profile picture"
          width={300}
          height={300}
          className="w-[180px] md:w-[200px] lg:w-[280px] h-auto rounded-lg shadow-sm"
        />

        <div className="flex flex-col gap-5">
          <p
            className="text-base sm:text-lg leading-relaxed sm:leading-loose max-w-xl"
            aria-label="bio"
          >
            I am a recent Computer Science graduate from Oklahoma State
            University with a passion for blending creativity and technical
            skills to design thoughtful, user-centered web experiences. I
            believe in approaching problems with curiosity and empathy, and I am
            always looking for opportunities to learn and grow. I am currently
            seeking junior developer roles, freelance projects, or entry-level
            opportunities in web development, system administration, or
            cybersecurity.
          </p>
          <div>
          <a className="internal-link italic"aria-label="Resume">View Resume</a>
          </div>
        </div>
      </div>

      {/* skills section */}
      <div>
        <h3 className="mt-10 mb-5 text-center">skills</h3>

        <h4 className="mt-6 mb-4">development</h4>

        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div id="skills" className="flex flex-wrap justify-items-center items-center gap-6 font-body">

            <div><p className="text-sm sm:text-lg">JavaScript</p></div>
            <div><p className="text-sm sm:text-lg">HTML</p></div>
            <div><p className="text-sm sm:text-lg">CSS</p></div>
            <div><p className="text-sm sm:text-lg">Java</p></div>
            <div><p className="text-sm sm:text-lg">React</p></div>
            <div><p className="text-sm sm:text-lg">Tailwind CSS</p></div>
            <div><p className="text-sm sm:text-lg">SQL</p></div>
            <div><p className="text-sm sm:text-lg">Visual Studio</p></div>
            <div><p className="text-sm sm:text-lg">Git</p></div>
            <div><p className="text-sm sm:text-lg">Vercel</p></div>
          </div>
        </div>

        <h4 className="mt-10 mb-4">design</h4>
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div id="skills" className="flex flex-wrap justify-items-center items-center gap-6 font-body">
            <div><p className="text-sm sm:text-lg">Figma</p></div>
            <div><p className="text-sm sm:text-lg">Milanote</p></div>
            <div><p className="text-sm sm:text-lg">Notion</p></div>
            <div><p className="text-sm sm:text-lg">Pen and Paper</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
