import React, { useState, useEffect, useRef } from "react";

const MobileMenu = ({ showContent, sections, id }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [ignoreScroll, setIgnoreScroll] = useState(false);
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

    setIgnoreScroll(true);
  };

  // close mobile menu and reset circle
  const closeMenu = () => {
    const elem = circleRef.current;
    if (!elem) return;

    elem.style.setProperty("--translate-x", `0px`);
    elem.style.setProperty("--translate-y", `0px`);
    elem.style.setProperty("--scale", `1`);
    setIsMenuOpen(false);

    setIsVisible(false);
    setTimeout(() => setIgnoreScroll(false), 2000);
  };

  useEffect(() => {
    // close mobile menu when scrolling back up to Hero or expanding screen greater than or equal to large viewport
    const maybeClose = () => {
      const isLarge = window.innerWidth >= 1024;
      if ((!showContent || isLarge) && isMenuOpen) {
        closeMenu();
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", maybeClose);
    maybeClose(); // run immediately on load

    const handleScroll = () => {
      if (ignoreScroll) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // scrolling down → hide
        setIsVisible(false);
      } else {
        // scrolling up → show
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", maybeClose);
    window.addEventListener("scroll", handleScroll);

    maybeClose();

    return () => {
      window.removeEventListener("resize", maybeClose);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showContent, isMenuOpen, lastScrollY, ignoreScroll]);

  return (
    <>
      <div
        id={id}
        className={`fixed top-0 w-full transition-all duration-700 lg:hidden bg-background ${
          showContent && isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {/* top sticky header */}
        <header className="flex justify-between items-center p-4 z-50" aria-label="header">
          {/* logo */}
          <a href="/" className="block">
            <img
              src="/logo.svg"
              alt="April Duff logo"
              width={128}
              height={56}
              className="w-20 cursor-pointer"
            />
          </a>
          <div className="menu-button relative w-12 h-12">
            {/* background animation for mobile menu pop up */}
            <div
              ref={circleRef}
              className="bg-primary absolute inset-0 w-full h-full rounded-full z-50 transition-transform duration-600 ease-in-out origin-top-right"
              style={{
                transform:
                  "translate(var(--translate-x), var(--translate-y)) scale(var(--scale))",
                "--translate-x": "0px",
                "--translate-y": "0px",
                "--scale": "1",
                "--offset-value": "0",
              }}
            />

            {/* menu toggle button for smaller screens */}
            <button
              id="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={`${
                isMenuOpen ? "open" : ""
              } flex flex-col justify-center items-center z-60 w-full h-full`}
            >
              <span></span> 
              <span></span> 
              <span></span> 
              <span></span>
            </button>
          </div>

          {/* navigation menu for smaller screens */}
          <nav
            id="mobile-menu"
            className={`fixed h-screen inset-0 z-50 flex flex-col justify-center items-center gap-4 transition-opacity duration-300 ${
              isMenuOpen
                ? "opacity-100 delay-300"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Mobile navigation"
          >
            {sections.map(({ id, label }) => (
              <ul key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className="link relative flex items-center text-xl gap-3 transition-colors duration-300"
                >
                  {label}
                </a>
              </ul>
            ))}
          </nav>
        </header>
      </div>
    </>
  );
};
export default MobileMenu;
