import React from "react";
import Sidebar from "../components/SideBar";

const sections = [
  { id: "introduction", label: "introduction" },
  { id: "project-overview", label: "project overview" },
  { id: "design-process", label: "design process" },
  { id: "requirements-analysis", label: "requirements analysis" },
  { id: "system-design", label: "system design" },
  { id: "implementation", label: "implementation" },
  { id: "testing", label: "testing" },
  { id: "maintenance", label: "maintenance & future work" },
  { id: "timeline", label: "timeline" },
  { id: "conclusion", label: "conclusion" },
];

const page = () => {
  return (
    <div className="flex">
      {/* Sidebar for large screens */}
      <aside className="hidden md:block w-64 sticky top-0 h-screen">
        <Sidebar id="expensify-nav" sections={sections} />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 space-y-20">
        <h2>Expensify</h2>
        <section id="introduction">
          <h3>Introduction</h3>
          <p>…content…</p>
        </section>

        <section id="project-overview">
          <h3>Project Overview</h3>
          <p>…content…</p>
        </section>

        <section id="design-process">
          <h3>Design Process</h3>
          <p>…content…</p>
        </section>

        <section id="requirements-analysis">
          <h3>Requirements Analysis</h3>
          <p>…content…</p>
        </section>

        <section id="system-design">
          <h3>System Design</h3>
          <p>…content…</p>
        </section>

        <section id="implementation">
          <h3>Implementation</h3>
          <p>…content…</p>
        </section>

        <section id="testing">
          <h3>Testing</h3>
          <p>…content…</p>
        </section>

        <section id="maintenance">
          <h3>Maintenance & Future Work</h3>
          <p>…content…</p>
        </section>

        <section id="timeline">
          <h3>Timeline</h3>
          <p>…content…</p>
        </section>

        <section id="conclusion">
          <h3>Conclusion</h3>
          <p>…content…</p>
        </section>
      </main>
    </div>
  );
};

export default page;
