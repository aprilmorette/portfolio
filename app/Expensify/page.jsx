"use client";
import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import MobileMenu from "../components/MobileMenu";

const sections = [
  { id: "overview", label: "overview" },
  { id: "design-process", label: "design process" },
  { id: "requirements", label: "requirements" },
  { id: "system-design", label: "system design" },
  { id: "implementation", label: "implementation" },
  { id: "testing", label: "testing" },
  { id: "future-work", label: "future work" },
  { id: "conclusion", label: "conclusion" },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("individual-users");

  return (
    <div id="project">
      {/* landing section */}
      <div className="w-full flex flex-col justify-center items-center relative overflow-hidden px-6 py-6 gap-4">
        <h2 className="text-center">Expensify</h2>
        <video
          className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg shadow-sm m-8"
          controls
        ></video>
      </div>

      <div className="flex">
        {/* sidebar for large screens */}
        <aside className="hidden lg:flex sticky top-0 h-screen w-14rem">
          <Sidebar id="expensify-nav" sections={sections} />
        </aside>
        {/* mobile menu for smaller screens */}
        <MobileMenu
          id="expensify-mobile-menu"
          showContent="true"
          sections={sections}
        />

        {/* main content */}
        <div className="flex flex-1 justify-center">
          <main className="max-w-6xl w-full px-5 self-center">
            <section id="overview">
              <h3 className="py-10">Overview</h3>

              <div className="flex flex-col gap-8 items-center">
                <hgroup>
                  <h5>Description</h5>
                  <p>
                    A web‑based application for tracking and analyzing expenses
                    with Google Identity Service API for secure authentication.
                    Core features include creating and deleting expenses,
                    displaying graphical insights, filtering expense history,
                    and customizing user settings.
                  </p>
                </hgroup>
                <hgroup>
                  <h5>Context</h5>
                  <p>
                    Developed as part of a Software Engineering class at
                    Oklahoma State University. The professor acted as the
                    stakeholder, and the student body represented the client
                    base.
                  </p>
                </hgroup>
              </div>
              <hr></hr>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                  <h5 className="my-1 md:my-2">Problem</h5>
                  <p>
                    Students need a simple way to track expenses and visualize
                    spending patterns in order to practice financial literacy.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <h5 className="my-1 md:my-2">Goal</h5>
                  <p>
                    Create an intuitive, secure, and efficient platform to help
                    users manage expenses while gaining hands‑on experience with
                    the software development life cycle through agile practices.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 stroke-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <h5 className="my-1 md:my-2">Scope</h5>
                  <p>3-month semester long project</p>
                </div>
              </div>
              <hr></hr>
            </section>

            <section id="design-process" className="py-2">
              <h3>Design Process</h3>
              <div className="space-y-8 mt-6">
                <figure>
                  <img
                    src="/scrum.png"
                    alt="Scrum Process Flow Diagram"
                    width={1650}
                    height={311}
                    className="w-full max-w-4xl mx-auto"
                  />
                  <figcaption className="text-center italic">
                    Design Framework: Scrum Agile Methodology
                  </figcaption>
                </figure>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* project management */}
                  <div className="card p-5">
                    <h5 className="text-lg font-medium mb-2">
                      Project Management
                    </h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Asana for backlog and timeline tracking</li>
                    </ul>
                  </div>

                  {/* design Tools */}
                  <div className="card p-5">
                    <h5 className="text-lg font-medium mb-2">Design Tools</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Draw.io for architecture and sequence diagrams</li>
                    </ul>
                  </div>

                  {/* frontend */}
                  <div className="card p-5">
                    <h5 className="text-lg font-medium mb-2">Frontend</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>HTML, CSS, and vanilla JS in WebStorm</li>
                      <li>Chart.js for interactive data visualizations</li>
                      <li>Bootstrap for layout and UI components</li>
                      <li>CSS Variables, Flexbox, and animations</li>
                      <li>Dark mode and responsive design</li>
                    </ul>
                  </div>

                  {/* backend */}
                  <div className="card p-5">
                    <h5 className="text-lg font-medium mb-2">Backend</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Node.js with Express.js</li>
                      <li>Passport.js with Google OAuth 2.0</li>
                      <li>jsonwebtoken for secure APIs</li>
                      <li>MySQL for persistent data</li>
                      <li>cors and dotenv for middleware/security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <hr></hr>

            <section id="requirements" className="py-2">
              <h3>Requirements</h3>
              {/* requirements section */}
              <div className="flex flex-wrap md:flex-nowrap gap-5 my-10">
                <div className="card p-4 md:basis-3/5">
                  <h5>Functional Requirements</h5>
                  <div className="mt-4 mx-4">
                    <p>The system shall...</p>
                    <ul className="list-disc mx-5">
                      <li>allow users to add and delete expenses.</li>
                      <li>
                        provide filtering capabilities for expense history by
                        category, date, and timeframe.
                      </li>
                      <li>
                        enable data visualization using charts (e.g., pie charts
                        for category-wise distribution and line charts for
                        expense trends over time).
                      </li>
                      <li>
                        authenticate users securely with login and registration
                        features.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card p-4 md:basis-2/5">
                  <h5>Non-Functional Requirements</h5>
                  <div className="mt-4 mx-4">
                    <p>The system shall...</p>
                    <ul className="list-disc mx-5">
                      <li>
                        ensure high performance with fast page loading times
                        (less than 2 seconds).
                      </li>
                      <li>ensure 99.9% system uptime and reliability.</li>
                      <li>
                        have a modular architecture for easy maintainability and
                        scalability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* stakeholder analysis section */}
              <div className="my-10">
                <div className="card w-full">
                  <h5 className="px-4 pt-4">Stakeholder Analysis</h5>
                  {/* stakeholder tabs */}
                  <ul className="flex flex-wrap text-center border-b border-accent mt-4">
                    <li className="me-1">
                      <button
                        onClick={() => setActiveTab("individual-users")}
                        className={`inline-block p-2 md:p-4 cursor-pointer transition rounded-t-lg ${
                          activeTab === "individual-users"
                            ? "text-background bg-primary"
                            : "hover:text-background hover:bg-primary"
                        }`}
                      >
                        Individual Users
                      </button>
                    </li>
                    <li className="me-1">
                      <button
                        onClick={() => setActiveTab("small-businesses")}
                        className={`inline-block p-2 md:p-4 cursor-pointer transition rounded-t-lg ${
                          activeTab === "small-businesses"
                            ? "text-background bg-primary"
                            : "hover:text-background hover:bg-primary"
                        }`}
                      >
                        Small Businesses
                      </button>
                    </li>
                    <li className="me-1">
                      <button
                        onClick={() => setActiveTab("development-team")}
                        className={`inline-block p-2 md:p-4 cursor-pointer transition rounded-t-lg ${
                          activeTab === "development-team"
                            ? "text-background bg-primary"
                            : "hover:text-background hover:bg-primary"
                        }`}
                      >
                        Development Team
                      </button>
                    </li>
                    <li className="me-1">
                      <button
                        onClick={() => setActiveTab("product-owner")}
                        className={`inline-block p-2 md:p-4 cursor-pointer transition rounded-t-lg ${
                          activeTab === "product-owner"
                            ? "text-background bg-primary"
                            : "hover:text-background hover:bg-primary"
                        }`}
                      >
                        Product Owner
                      </button>
                    </li>
                    <li className="me-1">
                      <button
                        onClick={() => setActiveTab("investors")}
                        className={`inline-block p-2 md:p-4 cursor-pointer transition rounded-t-lg ${
                          activeTab === "investors"
                            ? "text-background bg-primary"
                            : "hover:text-background hover:bg-primary"
                        }`}
                      >
                        Investors
                      </button>
                    </li>
                  </ul>

                  {/* stakeholder content */}
                  <div className="p-4">
                    {activeTab === "individual-users" && (
                      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                        <div className="md:basis-1/3">
                          <p className="font-semibold">ROLE</p>
                          <p>Primary end users</p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">NEEDS</p>
                          <p>
                            Simple, user-friendly interface. Ability to track
                            expenses, categorize them, and view reports.
                          </p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">EXPECTATIONS</p>
                          <p>
                            Regular updates and bug fixes. Data accuracy and
                            reliability. Security of personal data.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "small-businesses" && (
                      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                        <div className="md:basis-1/3">
                          <p className="font-semibold">ROLE</p>
                          <p>Uses the app for expense and budget management.</p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">NEEDS</p>
                          <p>
                            Customization for business needs (e.g., export
                            features, multiple accounts). Expense analysis.
                          </p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">EXPECTATIONS</p>
                          <p>
                            Support for tax calculations, accounting features.
                            Reliable performance and data handling.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "development-team" && (
                      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                        <div className="md:basis-1/3">
                          <p className="font-semibold">ROLE</p>
                          <p>Designs, builds, and maintains the app.</p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">NEEDS</p>
                          <p>
                            Clear requirements and feedback. Adequate resources
                            to develop features and fix bugs.
                          </p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">EXPECTATIONS</p>
                          <p>
                            Collaboration with stakeholders. Clear timelines and
                            goals. Proper testing infrastructure.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "product-owner" && (
                      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                        <div className="md:basis-1/3">
                          <p className="font-semibold">ROLE</p>
                          <p>Manages the product vision and priorities.</p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">NEEDS</p>
                          <p>
                            Features that meet market demands. Cost-effective
                            development.
                          </p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">EXPECTATIONS</p>
                          <p>
                            Deliver a working product that meets user needs.
                            Regular progress updates. High product quality.
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "investors" && (
                      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                        <div className="md:basis-1/3">
                          <p className="font-semibold">ROLE</p>
                          <p>Fund the development and growth of the app.</p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">NEEDS</p>
                          <p>
                            Profitability or high user adoption. Sustainable
                            business model.
                          </p>
                        </div>
                        <div className="md:basis-1/3">
                          <p className="font-semibold">EXPECTATIONS</p>
                          <p>
                            Regular financial reports and projections. Return on
                            investment.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* use cases section */}
              <div className="my-10 card p-4">
                <h5>Use Cases</h5>
                <div className="m-4">
                  <p className="underline">Sign Up and Add/Delete Expense</p>
                  <p>
                    The user begins by signing up for Expensify using their
                    Google account and logging into the application. To add an
                    expense to their history, the user specifies the category,
                    amount, and date in the designated fields. If any of these
                    fields are left blank, the system notifies the user to
                    complete all required inputs. Once all fields are filled and
                    the user clicks the "Add" button, the expense is stored in
                    the database. The system immediately updates the user
                    interface to display the newly added expense at the top of
                    the expense history, along with an updated total amount for
                    all logged expenses. The user then deletes the newly created
                    expense by clicking the "Delete" button next to the
                    corresponding log entry.
                  </p>
                </div>

                <div className="m-4">
                  <p className="underline">
                    Login and Apply Filters to Existing Expense History
                  </p>
                  <p>
                    After logging into Expensify with their Google account, the
                    user is presented with their full expense history. To narrow
                    down the displayed records, the user clicks the "Filter"
                    button, which opens a dialog box offering three filter
                    options: category, specific date, and timeframe. The user
                    selects the categories "Education" and "Rent" and chooses
                    the timeframe "Last 7 Days." By clicking "Apply Filters,"
                    the system updates the view to show all expenses that fall
                    under either education or rent logged in the past week. To
                    return to the complete expense history, the user clicks the
                    "Filter" button again and selects "Reset Filters," restoring
                    the unfiltered view of all logged expenses.
                  </p>
                </div>

                <div className="m-4">
                  <p className="underline">
                    Login, Generate Graphical Insight and Sign Out
                  </p>
                  <p>
                    When the user logs into Expensify, the system displays their
                    expense history associated with their Google account. To
                    analyze their spending, the user clicks the "Monthly
                    Expenditure by Category" option. The system prompts the user
                    to select a specific month. Upon selecting "March," a bar
                    chart is generated, visually representing all expenses
                    logged during the month, categorized on the x-axis and with
                    the y-axis indicating the corresponding amounts. Once the
                    user is finished reviewing the data, they click the "Sign
                    Out" button. The system logs the user out and redirects them
                    to the homepage, ensuring their session is securely ended.
                  </p>
                </div>
              </div>
            </section>
            <hr></hr>

            <section id="system-design" className="py-2">
              <h3>System Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div>
                  <h5>Architecture</h5>
                  <img
                    src="/architecture-diagram.png"
                    alt="Architecture Diagram"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
                <div>
                  <h5>Component Diagram</h5>
                  <img
                    src="/component-diagram.png"
                    alt="Component Diagram"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
                <div>
                  <h5>Activity Diagram</h5>
                  <img
                    src="/activity-diagram.png"
                    alt="Activity Diagram"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
                <div>
                  <h5>Graphical User Interface</h5>
                  <img
                    src="/gui.png"
                    alt="Graphical User Interface"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
                <div>
                  <h5>Class Diagram</h5>
                  <img
                    src="/class-diagram.png"
                    alt="Class Diagram"
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </div>
              </div>
            </section>
            <hr></hr>

            <section id="implementation" className="py-2">
              <h3>Implementation</h3>
              <div className="my-10">
                <h5>Code Structure</h5>
                <p>
                  The code for Expensify is organized into several distinct
                  modules, each with a specific responsibility. This modular
                  architecture ensures a clear separation between the frontend,
                  backend, and database layers, making the application easy to
                  develop, test, and maintain.
                </p>

                <h5>Challenges</h5>
                <ol className="list-decimal pl-5">
                  <li>
                    Implementing Google OAuth for user authentication was
                    complex due to the need to securely handle tokens.
                    Additionally, ensuring that the token was consistently
                    passed to every API endpoint that modified data added
                    further complexity.
                    <p>Solution:</p>
                    <ul className="list-[circle] pl-5">
                      <li>
                        Used Passport.js to simplify the OAuth flow and manage
                        token generation securely.
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
                    pre-designed expenses page while avoiding conflicts in CSS,
                    such as overlapping styles or unexpected behavior caused by
                    shared class names.<p>Solution:</p>
                    <ul className="list-[circle] ms-5">
                      <li>
                        Used a CSS modular approach, encapsulating styles
                        specific to the login page by prefixing classes with a
                        unique identifier (e.g., .login-page).
                      </li>
                      <li>
                        Refactored the CSS for the expenses page to ensure
                        reusable, component-based styling, reducing the
                        likelihood of conflicts.
                      </li>
                      <li>
                        Conducted thorough testing across multiple screen sizes
                        and browsers to identify and resolve visual
                        inconsistencies.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ensuring that charts were well-aligned and displayed correct
                    data dynamically was difficult. Initial attempts led to
                    issues such as charts overlapping other UI elements or
                    failing to refresh when new data was added.
                    <p>Solution:</p>
                    <ul className="list-[circle] ms-5">
                      <li>
                        Leveraged Chart.js for rendering charts due to its
                        flexibility and ease of use.
                      </li>
                      <li>
                        Implemented responsive layouts using Flexbox and CSS
                        Grid, ensuring charts remained aligned across various
                        devices.
                      </li>
                      <li>
                        Added logic to refresh chart data dynamically whenever
                        the user added, edited, or deleted an expense. This was
                        achieved by triggering an event listener tied to the
                        chart’s redraw functionality.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>
            <hr></hr>

            <section id="testing" className="py-2">
              <h3>Testing</h3>
              <div className="my-10">
                <h5></h5>
              </div>
            </section>
            <hr></hr>

            <section id="future-work" className="py-2">
              <h3>Future Work</h3>
              <div className="my-10">
                <h5>Future Enhancements</h5>
                <ul className="list-disc">
                  <li>
                    Expanded Authentication: Support login and authentication
                    with additional accounts, such as Apple ID or social media
                    platforms, beyond just Google accounts.
                  </li>
                  <li>
                    Profile Customization: Introduce options for profile
                    customization to enhance personalization and user
                    engagement.
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
                  Input Validation: Expense amount field allows any characters
                  to be submitted.
                </p>
                <ul className="list-disc">
                  <li>
                    Maintenance: Limit input to only numbers and a single
                    decimal if needed.
                  </li>
                </ul>
                <p>
                  Graphical Insights: If a graph is visible, it will not
                  automatically refresh when an expense is added or deleted. The
                  button to toggle the graph must be clicked twice (hide/appear)
                  to correctly reflect the expense history changes.
                </p>
                <ul className="list-disc">
                  <li>
                    Maintenance: Update graphs when either the Add or Delete
                    button has been triggered.
                  </li>
                </ul>
                <p>
                  Total Amount: Total expense amount remains the same regardless
                  of filtering.
                </p>
                <ul className="list-disc">
                  <li>
                    Maintenance: Update total amount when filters are applied or
                    reset.
                  </li>
                </ul>
              </div>
            </section>
            <hr></hr>

            <section id="timeline" className="py-2">
              <h3>Timeline</h3>
              <div className="my-10">
                <ul className="relative border-l-2 border-accent">
                  {/* Sprint One */}
                  <li className="mb-10 ms-4">
                    <div className="absolute mt-1.5 -start-1.5 w-3 h-3 bg-accent rounded-full border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-primary">
                      February 2022
                    </time>
                    <h5>
                      Sprint 1: Finalize Design and Implement Core Features
                    </h5>
                    <ul className="list-disc">
                      <li>
                        Objectives
                        <ul className="list-[circle] ps-5">
                          <li>
                            Complete the overall system design and architecture.
                          </li>
                          <li>
                            Implement core features: user account creation and
                            basic expense tracking (add, modify, delete
                            expenses).
                          </li>
                          <li>
                            Ensure basic unit testing for the foundational
                            functionality.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Deliverables
                        <ul className="list-[circle] ps-5">
                          <li>
                            Fully functional user account creation and expense
                            tracking modules.
                          </li>
                          <li>Initial unit tests for these core features.</li>
                        </ul>
                      </li>
                      <li>
                        Summary
                        <ul className="list-[circle]">
                          <li className="pl-5">
                            Sprint 1 laid the foundation for the application by
                            establishing its architecture and implementing
                            essential expense management features. Initial
                            testing validated the core functionalities, ensuring
                            a strong base for future enhancements.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>
            <hr></hr>

            <section id="conclusion" className="py-2">
              <h3>Conclusion</h3>
              <div className="my-10">
                <p>
                  The Expensify project successfully achieved its primary goal
                  of creating an intuitive, secure, and efficient platform for
                  users to manage their expenses. The application provides
                  essential functionalities, including expense tracking,
                  filtering, and graphical insights, while maintaining a
                  user-friendly interface and robust performance.
                </p>
                <h5>Overall Success</h5>
                <ul className="list-disc">
                  <li>
                    Core Objectives Met: All functional and non-functional
                    requirements, such as user authentication, data
                    visualization, and responsiveness, were implemented and
                    thoroughly tested.
                  </li>
                  <li>
                    User-Friendly Design: The application's intuitive interface
                    ensures seamless navigation and usability, minimizing the
                    need for additional user training or guides.
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
                    Effective Collaboration: Breaking the project into sprints
                    and aligning deliverables with timelines ensured efficient
                    teamwork and timely completion of tasks.
                  </li>
                  <li>
                    Importance of Modularity: Designing modular code simplified
                    debugging, testing, and the integration of new features.
                  </li>
                  <li>
                    Dynamic Problem-Solving: Addressing challenges, such as
                    integrating Google OAuth and aligning chart rendering with
                    real-time data, underscored the importance of adaptive
                    solutions and iterative improvements.
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
                    Data Visualization: The inclusion of bar, pie, and line
                    charts offers users meaningful insights into their spending
                    patterns.
                  </li>
                  <li>
                    Security: Google OAuth and robust token handling mechanisms
                    ensure user data is securely managed.
                  </li>
                  <li>
                    Performance: The application demonstrates high reliability
                    and efficiency, with fast load times and responsive
                    operations.
                  </li>
                </ul>
                <h5>Final Remarks</h5>
                <p>
                  The Expensify project not only fulfills its initial objectives
                  but also lays a solid foundation for future enhancements, such
                  as custom categories, advanced filters, and expanded
                  authentication options. The project exemplifies a successful
                  application of agile development principles and highlights the
                  value of user-centric design in delivering a high-quality
                  product.
                </p>
              </div>
            </section>
            <hr></hr>
          </main>
        </div>
      </div>
    </div>
  );
}
