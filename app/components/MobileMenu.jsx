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
        className={`fixed top-0 left-0 w-full flex justify-between p-4 z-50 transition-all duration-700 md:hidden ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {/* logo */}
        <a href="/" className="block">
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
          <button id="mobile-menu-toggle" onClick={isMenuOpen ? closeMenu : openMenu} aria-label="Toggle Menu" className={`${isMenuOpen ? "open" : ""} flex items-center justify-center leading-none relative w-10 aspect-square z-50 rotate-0 transition duration-500 ease-in-out cursor-pointer`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* sidebar for smaller screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "-translate-x-0" : "-translate-x-[-100%]"
        }`}
      >

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