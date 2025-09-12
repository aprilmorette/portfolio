import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="px-4 pt-10 pb-15 max-w-6xl mx-auto">
      <h2 className="text-center mb-10">experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-around gap-8">
        {/* StreetCats */}
        <div className="card fade-in opacity-0 translate-y-15 transition duration-800 flex flex-col items-center p-8 w-full gap-2">
          <p className="font-bold text-center text-base md:text-lg">
            Animal Care Volunteer ·{" "}
            <a
              href="https://www.streetcatstulsa.org/"
              aria-label="StreetCats, Inc. Website"
              className="inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              StreetCats, Inc.
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
            </a>
          </p>
          <p className="italic">AUGUST 2025 - PRESENT</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 sm:size-12 stroke-primary"
          >
            <circle cx="11" cy="4" r="2" />
            <circle cx="18" cy="8" r="2" />
            <circle cx="20" cy="16" r="2" />
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z" />
          </svg>

          <ul className="list-disc">
            <li className="pb-2">
              Provide a safe, sanitary environment for the cats by cleaning food
              bowls, litter boxes, cages, and bedding.
            </li>
            <li className="pb-2">
              Support animal well-being and adoption center presentation through
              facility upkeep, including sweeping, mopping, and sanitizing play
              areas.
            </li>
          </ul>
        </div>

        {/* OSU CEAT IT */}
        <div className="card fade-in opacity-0 translate-y-15 transition duration-800 flex flex-col items-center p-8 w-full gap-2">
          <p className="font-bold text-center text-base md:text-lg">
            Student IT Technician ·{" "}
            <a
              href="https://ceat.okstate.edu/itservices/"
              aria-label="OSU CEAT IT Website"
              className="inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              OSU CEAT IT
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
            </a>
          </p>
          <p className="italic">MAY 2022 - MAY 2025</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 sm:size-12 stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>

          <ul className="list-disc">
            <li className="pb-2">
              Provisioned and deployed computer systems to OSU staff, faculty,
              and students.
            </li>
            <li className="pb-2">
              Troubleshot and resolved software and hardware issues.
            </li>
            <li>Developed and revised technical documentation.</li>
          </ul>
        </div>

        {/* QuikTrip */}
        <div className="md:col-span-2 xl:col-span-1 flex justify-center">
          <div className="card fade-in opacity-0 translate-y-15 transition duration-800 flex flex-col items-center p-8 w-full md:w-auto gap-2">
            <p className="font-bold text-center text-base md:text-lg">
              Part-Time Store Clerk ·{" "}
              <a
                href="https://www.quiktrip.com/"
                aria-label="QuikTrip Website"
                className="inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                QuikTrip{" "}
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
              </a>
            </p>
            <p className="italic">JUNE 2020 - AUGUST 2021</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 sm:size-12 stroke-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <ul className="list-disc">
              <li className="pb-2">
                Managed customer transactions and daily cash handling.
              </li>
              <li>
                Maintained building cleanliness and upheld food safety
                standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
