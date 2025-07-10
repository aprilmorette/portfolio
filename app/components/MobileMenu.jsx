import React, { useState, useEffect } from "react";
import Image from "next/image";

const MobileMenu = ({ showNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // close the menu if user scrolls back up to Hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition < heroHeight - 50 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <header
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 transition-all duration-700 md:hidden ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {/* logo */}
        <a href="/" className="pt-4 pl-4 block">
          <Image
            src="/logo.svg"
            alt="April Duff logo"
            width={128}
            height={56}
            priority
            className="w-20 h-auto cursor-pointer"
          />
        </a>

        {/* menu button for smaller screens */}
        <button
          className="pt-4 pr-4 cursor-pointer"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      {/* sidebar for smaller screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "-translate-x-0" : "-translate-x-[-100%]"
        }`}
      >
        <button
          className="p-4 cursor-pointer"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;