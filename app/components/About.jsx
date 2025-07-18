import React from "react";
import Image from "next/image";

const About = () => {

  return (
    <section id="about" className="px-4 pt-10 pb-15 max-w-6xl mx-auto">
      <h2 className="text-center mb-5">about me</h2>

      <div className="card pop-in opacity-0 scale-0 transition-all duration-2000 flex flex-col lg:flex-row items-center justify-around p-8 gap-5">
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
            skills to design <span className="font-bold">thoughtful, user-centered web experiences.</span> I
            believe in approaching problems with <span className="font-bold">curiosity</span> and <span className="font-bold">empathy</span>, and I am
            always looking for opportunities to learn and grow. I am currently
            seeking junior developer roles, freelance projects, or entry-level
            opportunities in web development, system administration, or
            cybersecurity.
          </p>
          <div>
          <a className="link italic" aria-label="Resume">View Resume</a>
          </div>
        </div>
      </div>

      {/* skills section */}
      <div>
        <h3 className="mt-10 mb-5 text-center">skills</h3>

        <h4 className="mt-6 mb-4">development</h4>

        <div className="slide-left max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <ul id="skills" className="flex flex-wrap justify-items-center items-center gap-2 sm:gap-6 font-body">

            <li className="opacity-0 -translate-x-10 transition duration-700"><p>JavaScript</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>HTML</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>CSS</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Java</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>React</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Tailwind CSS</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>SQL</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Visual Studio</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Git</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Vercel</p></li>
          </ul>
        </div>

        <h4 className="mt-10 mb-4">design</h4>
        <div className="slide-left max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <ul id="skills" className="flex flex-wrap justify-items-center items-center gap-2 sm:gap-6 font-body">
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Figma</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Milanote</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Notion</p></li>
            <li className="opacity-0 -translate-x-10 transition duration-700"><p>Pen and Paper</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
