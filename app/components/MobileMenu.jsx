import React, { useRef } from "react";
import Image from "next/image";

const MobileMenu = () => {
  const handleMenuToggle = useRef();

  if (handleMenuToggle.current) {
    handleMenuToggle.current.style.transform = "translateX(16rem)";
  }

  const openMenu = () => {
    handleMenuToggle.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    handleMenuToggle.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <header
        id="mobile-menu"
        className="flex justify-between md:hidden"
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
          className="p-2 cursor-pointer"
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
      <ul
        ref={handleMenuToggle}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-65 top-0 bottom-0 w-65 z-50 h-screen transition duration-500 bg-rose-50"
      >
        <button
          className="absolute right-6 top-6 cursor-pointer"
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
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
