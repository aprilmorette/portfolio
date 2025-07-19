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
        <h2 className="text-center">Expensify</h2>
        <section id="introduction">
          <h3>Introduction</h3>
          <div>
            <h5>Project Description</h5>
            <p>
              A web-based application for tracking and analyzing user expenses.
              It implements the Google Identity Service API for authentication.
              Features include creating and deleting expenses, displaying
              graphical insights, filtering expense history, and customizing
              user settings.
            </p>
            <h5>Goals</h5>
            <ol className="list-decimal">
              <li>
                Create an intuitive, secure, and efficient platform for users to
                manage their expenses.
              </li>
              <li>
                Gain hands-on experience with the software development life
                cycle through agile development practices.
              </li>
            </ol>
          </div>
        </section>

        <details id="project-overview" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Project Overview</h3>
          </summary>
          <div>
            <h5>Context</h5>
            <p>
              This project was assigned in the Software Engineering class at
              Oklahoma State University. The professor served as our stakeholder
              and the college's student body represented our client base.
            </p>
            <h5>Problem Statement</h5>
            <p>
              Beyond academics, college students are also learning to manage
              their personal finances. Starting the budgeting process can be
              overwhelming, so there needed to be a simple way to track expenses
              and visualize spending patterns.
            </p>
            <h5>Project Scope</h5>
            <p>
              Since the project was for a semester long class, the duration of
              the project lasted three months.
            </p>
          </div>
        </details>

        <details id="design-process" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Design Process</h3>
          </summary>
          <div>
            <h5>Design Framework</h5>
            <p>
              We used the Scrum Agile methodology because of its capability to
              adapt to the constant altering of requirements at any stage of a
              project. Along with that, it conforms well to feedback and
              adjustments provided by the stakeholder. The sprint layout allowed
              the team to have flexibility in the development process while
              maintaining a steady pace.
            </p>
            <h5>Tools & Techniques</h5>
            <p>
              For project management, the team used Asana to keep track of
              important deadlines and visualize the product backlog with a
              timeline. During the planning stage, system designs such as the
              architecture and sequence diagram were outlined using Draw.io
              because of its readily available templates and ease of use. Within
              JetBrains Webstorm, the frontend is built using HTML, CSS, and
              vanilla JavaScript, supported by Chart.js for dynamic data
              visualization and Bootstrap for responsive design and interactive
              components. Styling incorporates CSS variables for theme
              customization, Flexbox for layout responsiveness, and animations
              to enhance the user interface. Features such as dark mode, dynamic
              charts, and interactive modals contribute to a user-friendly and
              visually appealing design. The backend uses Node.js as its runtime
              environment, with Express.js serving as the web framework to
              handle HTTP requests and API endpoints. User authentication is
              secured using Passport.js with Google OAuth 2.0, while
              jsonwebtoken manages token-based authentication for secure API
              interactions. Persistent data storage is handled by MySQL,
              offering enhanced performance and promise-based API capabilities.
              Middleware such as cors facilitates cross-origin requests, and
              dotenv ensures secure environment variable management.
            </p>
          </div>
        </details>

        <details id="requirements-analysis" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Requirements Analysis</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>

        <details id="system-design" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>System Design</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>

        <details id="implementation" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Implementation</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>

        <details id="testing" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Testing</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>

        <details id="maintenance" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Maintenance & Future Work</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>

        <details id="timeline" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Timeline</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>

        <details id="conclusion" className="group">
          <summary className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 transition-transform duration-300 group-open:rotate-90 stroke-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h3>Conclusion</h3>
          </summary>
          <div>
            <h5></h5>
          </div>
        </details>
      </main>
    </div>
  );
};

export default page;
