import React from "react";
import Image from "next/image";
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
            <h5>Functional Requirements</h5>
            <ul className="list-disc">
              <li>The system shall allow users to add and delete expenses.</li>
              <li>
                The system shall provide filtering capabilities for expense
                history by category, date, and timeframe.
              </li>
              <li>
                The system shall enable data visualization using charts (e.g.,
                pie charts for category-wise distribution and line charts for
                expense trends over time).
              </li>
              <li>
                The system shall authenticate users securely with login and
                registration features.
              </li>
              <li>
                The system shall allow exporting expense data for offline
                analysis.
              </li>
            </ul>
            <h5>Non-Functional Requirements</h5>
            <ul className="list-disc">
              <li>
                The system shall ensure high performance with fast page loading
                times (less than 2 seconds).
              </li>
              <li>
                The system shall ensure 99.9% system uptime and reliability.
              </li>
              <li>
                The system shall build a modular architecture for easy
                maintainability and scalability.
              </li>
            </ul>

            <h5>Potential Stakeholders</h5>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Stakeholder</th>
                  <th>Role</th>
                  <th>Needs</th>
                  <th>Expectations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>End Users (Individual Users)</td>
                  <td>Primary users of the app.</td>
                  <td>
                    <ul className="list-disc">
                      <li>Simple, user-friendly interface.</li>
                      <li>
                        Ability to track expenses, categorize them, and view
                        reports.
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Regular updates and bud fixes.</li>
                      <li>Data accuracy and reliability.</li>
                      <li>Security of personal data.</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>End Users (Small Businesses)</td>
                  <td>Uses the app for expense and budget management.</td>
                  <td>
                    <ul className="list-disc">
                      <li>
                        Customization for business needs (e.g., export features,
                        multiple accounts).
                      </li>
                      <li>Expense analysis.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Support for tax calculations, accounting features.
                      </li>
                      <li>Reliable performance and data handling.</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Development Team</td>
                  <td>Designs, builds, and maintains the app.</td>
                  <td>
                    <ul className="list-disc">
                      <li>Clear requirements and feedback.</li>
                      <li>
                        Adequate resources to develop features and fix bugs.
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Collaboration with stakeholders.</li>
                      <li>Clear timelines and goals.</li>
                      <li>Proper testing infrastructure.</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Product Owner/Business Stakeholders</td>
                  <td>Manages the product vision and priorities.</td>
                  <td>
                    <ul className="list-disc">
                      <li>Features that meet market demands.</li>
                      <li>Cost-effective development.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Deliver a working product that meets user needs.</li>
                      <li>Regular progress updates.</li>
                      <li>High product quality.</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Investors</td>
                  <td>Fund the development and growth of the app.</td>
                  <td>
                    <ul className="list-disc">
                      <li>Profitability or high user adoption.</li>
                      <li>Sustainable business model.</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Regular financial reports and projections. </li>
                      <li>Return on investment.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>

            <h5>Use Cases</h5>
            <p className="underline">Sign Up and Add/Delete Expense</p>
            <p>
              The user begins by signing up for Expensify using their Google
              account and logging into the application. To add an expense to
              their history, the user specifies the category, amount, and date
              in the designated fields. If any of these fields are left blank,
              the system notifies the user to complete all required inputs. Once
              all fields are filled and the user clicks the "Add" button, the
              expense is stored in the database. The system immediately updates
              the user interface to display the newly added expense at the top
              of the expense history, along with an updated total amount for all
              logged expenses. The user then deletes the newly created expense
              by clicking the "Delete" button next to the corresponding log
              entry.
            </p>
            <p className="underline">
              Login and Apply Filters to Existing Expense History
            </p>
            <p>
              After logging into Expensify with their Google account, the user
              is presented with their full expense history. To narrow down the
              displayed records, the user clicks the "Filter" button, which
              opens a dialog box offering three filter options: category,
              specific date, and timeframe. The user selects the categories
              "Education" and "Rent" and chooses the timeframe "Last 7 Days." By
              clicking "Apply Filters," the system updates the view to show all
              expenses that fall under either education or rent logged in the
              past week. To return to the complete expense history, the user
              clicks the "Filter" button again and selects "Reset Filters,"
              restoring the unfiltered view of all logged expenses.
            </p>
            <p className="underline">
              Login, Generate Graphical Insight and Sign Out
            </p>
            <p>
              When the user logs into Expensify, the system displays their
              expense history associated with their Google account. To analyze
              their spending, the user clicks the "Monthly Expenditure by
              Category" option. The system prompts the user to select a specific
              month. Upon selecting "March," a bar chart is generated, visually
              representing all expenses logged during the month, categorized on
              the x-axis and with the y-axis indicating the corresponding
              amounts. Once the user is finished reviewing the data, they click
              the "Sign Out" button. The system logs the user out and redirects
              them to the homepage, ensuring their session is securely ended.
            </p>
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
          <div className="flex">
            <div>
              <h5>Architecture</h5>
              <Image
                src="/architecture-diagram.png"
                alt="Architecture Diagram"
                width={300}
                height={300}
                className="w-[180px] md:w-[200px] lg:w-[300px] h-auto shadow-sm"
              />
            </div>
            <div>
              <h5>Component Diagram</h5>
              <Image
                src="/component-diagram.png"
                alt="Component Diagram"
                width={300}
                height={300}
                className="w-[180px] md:w-[200px] lg:w-[300px] h-auto shadow-sm"
              />
            </div>
            <div>
              <h5>Activity Diagram</h5>
              <Image
                src="/activity-diagram.png"
                alt="Activity Diagram"
                width={300}
                height={300}
                className="w-[180px] md:w-[200px] lg:w-[300px] h-auto shadow-sm"
              />
            </div>
            <div>
              <h5>Graphical User Interface</h5>
              <Image
                src="/gui.png"
                alt="Graphical User Interface"
                width={300}
                height={300}
                className="w-[180px] md:w-[200px] lg:w-[300px] h-auto shadow-sm"
              />
            </div>
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

            <h5>Code Structure</h5>
            <p>
              The code for Expensify is organized into several distinct modules,
              each with a specific responsibility. This modular architecture
              ensures a clear separation between the frontend, backend, and
              database layers, making the application easy to develop, test, and
              maintain.
            </p>

            <h5>Challenges</h5>
            <ol className="list-decimal">
              <li>
                Implementing Google OAuth for user authentication was complex
                due to the need to securely handle tokens. Additionally,
                ensuring that the token was consistently passed to every API
                endpoint that modified data added further complexity.
                <p>Solution:</p>
                <ul className="list-disc">
                  <li>
                    Used Passport.js to simplify the OAuth flow and manage token
                    generation securely.
                  </li>
                  <li>
                    Implemented a middleware to automatically attach and
                    validate tokens for all relevant API calls, reducing the
                    risk of missing tokens in requests.
                  </li>
                  <li>
                    Adopted JWT (JSON Web Tokens) for session management,
                    ensuring secure token exchange between the client and
                    server.
                  </li>
                </ul>
              </li>
              <li>
                The login page needed to be styled consistently with the
                pre-designed expenses page while avoiding conflicts in CSS, such
                as overlapping styles or unexpected behavior caused by shared
                class names.<p>Solution:</p>
                <ul className="list-disc">
                  <li>
                    Used a CSS modular approach, encapsulating styles specific
                    to the login page by prefixing classes with a unique
                    identifier (e.g., .login-page).
                  </li>
                  <li>
                    Refactored the CSS for the expenses page to ensure reusable,
                    component-based styling, reducing the likelihood of
                    conflicts.
                  </li>
                  <li>
                    Conducted thorough testing across multiple screen sizes and
                    browsers to identify and resolve visual inconsistencies.
                  </li>
                </ul>
              </li>
              <li>
                Ensuring that charts were well-aligned and displayed correct
                data dynamically was difficult. Initial attempts led to issues
                such as charts overlapping other UI elements or failing to
                refresh when new data was added.
                <p>Solution:</p>
                <ul className="list-disc">
                  <li>
                    Leveraged Chart.js for rendering charts due to its
                    flexibility and ease of use.
                  </li>
                  <li>
                    Implemented responsive layouts using Flexbox and CSS Grid,
                    ensuring charts remained aligned across various devices.
                  </li>
                  <li>
                    Added logic to refresh chart data dynamically whenever the
                    user added, edited, or deleted an expense. This was achieved
                    by triggering an event listener tied to the chart’s redraw
                    functionality.
                  </li>
                </ul>
              </li>
            </ol>
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
            <h5>Future Enhancements</h5>
            <ul className="list-disc">
              <li>
                Expanded Authentication: Support login and authentication with
                additional accounts, such as Apple ID or social media platforms,
                beyond just Google accounts.
              </li>
              <li>
                Profile Customization: Introduce options for profile
                customization to enhance personalization and user engagement.
              </li>
              <li>
                Custom Categories: Enable users to create custom expense
                categories tailored to their individual needs.
              </li>
              <li>
                Expense Editing: Allow users to edit existing expenses for
                better accuracy and control over their financial history.
              </li>
              <li>
                Sorting Options: Allow users to sort expense history
                chronologically or alphabetically for improved organization.
              </li>
              <li>
                Precise Filtering: Add more timeframe options for filtering
                expenses, providing greater flexibility in analyzing expense
                history.
              </li>
            </ul>

            <h5>Known Issues and Maintenance Plan</h5>
            <p>
              Input Validation: Expense amount field allows any characters to be
              submitted.
            </p>
            <ul className="list-disc">
              <li>
                Maintenance: Limit input to only numbers and a single decimal if
                needed.
              </li>
            </ul>
            <p>
              Graphical Insights: If a graph is visible, it will not
              automatically refresh when an expense is added or deleted. The
              button to toggle the graph must be clicked twice (hide/appear) to
              correctly reflect the expense history changes.
            </p>
            <ul className="list-disc">
              <li>
                Maintenance: Update graphs when either the Add or Delete button
                has been triggered.
              </li>
            </ul>
            <p>
              Total Amount: Total expense amount remains the same regardless of
              filtering.
            </p>
            <ul className="list-disc">
              <li>
                Maintenance: Update total amount when filters are applied or
                reset.
              </li>
            </ul>
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
            <ol className="relative border-l-2 border-accent">
              <li className="mb-10 ms-4">
                <div className="absolute size-3 bg-accent rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-primary">
                  February 2022
                </time>
                <h5>
                  Sprint 1: Finalize Design and Implement Core Features
                </h5>
                <ul className="list-disc">
                  <li>Objectives
                    <ul className="list-disc">
                      <li>Complete the overall system design and architecture.</li>
                      <li>Implement core features: user account creation and basic expense tracking (add, modify, delete expenses).</li>
                      <li>Ensure basic unit testing for the foundational functionality.</li>
                    </ul>
                  </li>
                  <li>Deliverables
                    <ul className="list-disc">
                      <li>Fully functional user account creation and expense tracking modules.</li>
                      <li>Initial unit tests for these core features.</li>
                    </ul>
                  </li>
                  <li>Summary
                    <ul className="list-disc">
                      <li>Sprint 1 laid the foundation for the application by establishing its architecture and implementing essential expense management features. Initial testing validated the core functionalities, ensuring a strong base for future enhancements.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              
            </ol>
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
            <p>
              The Expensify project successfully achieved its primary goal of
              creating an intuitive, secure, and efficient platform for users to
              manage their expenses. The application provides essential
              functionalities, including expense tracking, filtering, and
              graphical insights, while maintaining a user-friendly interface
              and robust performance.
            </p>
            <h5>Overall Success</h5>
            <ul className="list-disc">
              <li>
                Core Objectives Met: All functional and non-functional
                requirements, such as user authentication, data visualization,
                and responsiveness, were implemented and thoroughly tested.
              </li>
              <li>
                User-Friendly Design: The application's intuitive interface
                ensures seamless navigation and usability, minimizing the need
                for additional user training or guides.
              </li>
              <li>
                Technical Robustness: The project employed secure
                authentication, modular code architecture, and efficient
                database design, resulting in a scalable and maintainable
                system.
              </li>
            </ul>
            <h5>Key Lessons Learned</h5>
            <ul className="list-disc">
              <li>
                Effective Collaboration: Breaking the project into sprints and
                aligning deliverables with timelines ensured efficient teamwork
                and timely completion of tasks.
              </li>
              <li>
                Importance of Modularity: Designing modular code simplified
                debugging, testing, and the integration of new features.
              </li>
              <li>
                Dynamic Problem-Solving: Addressing challenges, such as
                integrating Google OAuth and aligning chart rendering with
                real-time data, underscored the importance of adaptive solutions
                and iterative improvements.
              </li>
              <li>
                User-Centric Development: Continuous feedback and iterative
                testing played a pivotal role in refining the application’s
                interface and functionality to meet user needs effectively.
              </li>
            </ul>
            <h5>Meeting Initial Objectives</h5>
            <ul className="list-disc">
              <li>
                Expense Management: The system allows users to add, edit,
                delete, and view expenses effortlessly.
              </li>
              <li>
                Data Visualization: The inclusion of bar, pie, and line charts
                offers users meaningful insights into their spending patterns.
              </li>
              <li>
                Security: Google OAuth and robust token handling mechanisms
                ensure user data is securely managed.
              </li>
              <li>
                Performance: The application demonstrates high reliability and
                efficiency, with fast load times and responsive operations.
              </li>
            </ul>
            <h5>Final Remarks</h5>
            <p>
              The Expensify project not only fulfills its initial objectives but
              also lays a solid foundation for future enhancements, such as
              custom categories, advanced filters, and expanded authentication
              options. The project exemplifies a successful application of agile
              development principles and highlights the value of user-centric
              design in delivering a high-quality product.
            </p>
          </div>
        </details>
      </main>
    </div>
  );
};

export default page;
