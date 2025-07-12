import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const MobileMenu = ({ showNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const circleRef = useRef(null);

  // handles menu states
  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      setTimeout(() => {
        next ? openMenu() : closeMenu();
      }, 0);
      return next;
    });
  };

  // calculate circle and browser dimensions
  const calculateValues = () => {
    const elem = circleRef.current;
    if (!elem) return;

    // get current size of circle
    const elemRect = elem.getBoundingClientRect();
    const elemW = elemRect.width;
    const elemH = elemRect.height;

    // get size of entire browser window
    const browserW = window.innerWidth;
    const browserH = window.innerHeight;

    // center circle when translated
    const offsetX = browserW / 2 - elemW / 2;
    const offsetY = browserH / 2 - elemH / 2;

    // find distance from top-right to bottom-left corners
    const radius = Math.sqrt(browserW ** 2 + browserH ** 2);

    // how much the circle needs to scale to cover the entire screen
    const scale = radius / (elemW / 2) + 0.1;

    return { offsetX, offsetY, scale };
  };

  // open mobile menu
  const openMenu = () => {
    const { offsetX, offsetY, scale } = calculateValues();
    const elem = circleRef.current;
    if (!elem) return;

    elem.style.setProperty("--translate-x", `${offsetX}px`);
    elem.style.setProperty("--translate-y", `-${offsetY}px`);
    elem.style.setProperty("--scale", scale);
  };

  // close mobile menu and reset circle
  const closeMenu = () => {
    const elem = circleRef.current;
    if (!elem) return;

    elem.style.setProperty("--translate-x", `0px`);
    elem.style.setProperty("--translate-y", `0px`);
    elem.style.setProperty("--scale", `1`);
  };

  // close mobile menu when scrolling back up to Hero or resizing screen
  useEffect(() => {
  const maybeClose = () => {
    const isNowMedium = window.innerWidth >= 768;

    if ((!showNav || isNowMedium) && isMenuOpen) {
      closeMenu();
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", maybeClose);
  maybeClose(); // run immediately on load

  return () => window.removeEventListener("resize", maybeClose);
}, [showNav, isMenuOpen]);

  return (
    <>
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full transition-all duration-700 md:hidden ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {/* background animation for mobile menu pop up */}
        <div
          ref={circleRef}
          id="nav-bg"
          className="fixed top-0 right-0 bg-primary rounded-full z-40 transition-transform duration-600 ease-in-out origin-top-right m-4"
          style={{
            width: "50px",
            height: "50px",
            transform:
              "translate(var(--translate-x), var(--translate-y)) scale(var(--scale))",
            "--translate-x": "0px",
            "--translate-y": "0px",
            "--scale": "1",
            "--offset-value": "0",
          }}
        />
        <div className="flex flex-col justify-between p-4 z-50">
          {/* top sticky header */}
          <header className="flex justify-between h-[35px]" aria-label="header">
            {/* logo */}
            <a href="/" className="block">
              <Image
                src="/logo.svg"
                alt="April Duff logo"
                width={128}
                height={56}
                priority
                className="w-20 cursor-pointer"
              />
            </a>

            {/* menu toggle button for smaller screens */}
            <button
              id="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={`${
                isMenuOpen ? "open" : ""
              }  leading-none relative w-[2.5em] z-60 rotate-0 transition duration-500 ease-in-out cursor-pointer`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>

          {/* sidebar for smaller screens */}
          <nav
            className={`fixed h-screen inset-0 z-50 flex flex-col justify-center items-center gap-4 text-2xl text-foreground transition-opacity duration-300 ${
              isMenuOpen
                ? "opacity-100 delay-500"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Mobile navigation"
          >
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
      </div>
    </>
  );
};

export default MobileMenu;
