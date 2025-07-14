import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-4 pt-10 pb-15 max-w-6xl mx-auto"
    >
      <h2 className="text-center mb-10">experience</h2>

      <div className="flex justify-around gap-8">
        {/* OSU CEAT IT */}
        <div className="card flex flex-col items-center p-8 basis-1/2">
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
          <p>Student IT Technician</p>
          <a href="https://ceat.okstate.edu/itservices/" aria-label="OSU CEAT IT Website">Oklahoma State University CEAT IT</a>

          <div className="text-center">
            <p>
              Provisioned and deployed computer systems to OSU staff, faculty,
              and students.
            </p>
            <p>Troubleshot and resolved software and hardware issues.</p>
            <p>Developed and revised technical documentation.</p>
          </div>
        </div>

        {/* QuikTrip */}
        <div className="card flex flex-col items-center p-8 basis-1/2">
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

          <p>Store Clerk</p>
          <a href="https://www.quiktrip.com/" aria-label="QuikTrip Website">QuikTrip</a>
          <div className="text-center">
            <p>Managed customer transactions and daily cash handling.</p>
            <p>
              Maintained building cleanliness and upheld food safety standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
