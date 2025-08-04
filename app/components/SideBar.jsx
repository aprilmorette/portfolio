import React, { useEffect, useState } from "react";

const Sidebar = ({ sections, id }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
    let current = "";

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // checks if the section is near the top quarter of viewport
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.25) {
          current = id;
          break;
        }
      }
    }

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, [sections]);

  return (
    <>
      {/* sidebar for larger screens */}
      <aside
        id={id}
        className="w-55 h-screen p-4 flex flex-col"
        aria-label="Side navigation bar"
      >
        {/* logo */}
        <a href="/" className="block">
          <img
            src="/logo.svg"
            alt="April Duff logo"
            width={128}
            height={56}
            className="w-20 h-auto cursor-pointer"
          />
        </a>

        {/* internal navigation links */}
        <nav className="flex flex-col flex-grow p-2">
          <ul className="flex flex-col flex-grow justify-evenly">
            {sections.map(({ id, label, icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`link relative inline-flex items-center gap-3 transition-colors duration-300 ${
                  activeSection === id ? "text-foreground font-semibold active-underline" : ""
                }`}
              >
                {icon && React.cloneElement(icon, {
                  className: `size-7 transition-colors duration-300 ${
                      activeSection === id
                        ? "stroke-foreground stroke-2"
                        : ""
                    }`
                  })}
                {label}
              </a>
            </li>
            ))}
          </ul>
        </nav>
      </aside>
      </>
  );
};

export default Sidebar;
