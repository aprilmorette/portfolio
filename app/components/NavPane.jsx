import Image from "next/image";
import React, { useRef } from "react";

const NavPane = () => {
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
    <div className="transition-transform duration-500 ease-in-out">
      {/* mobile menu */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
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
        <button
          className="md:hidden p-2 cursor-pointer"
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
      </div>

      {/* sidebar for smaller screens */}
      <ul
        ref={handleMenuToggle}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-rose-50"
      >
        <button
          className="absolute right-6 top-6 cursor-pointer"
          onClick={closeMenu}
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

      {/* sidebar for larger screens */}
      <div className="bg-amber-400 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 transition-transform duration-300 lg:translate-x-0 md:flex hidden flex-col justify-between">
        <nav className="p-3 w-full flex flex-col flex-wrap">
          <ul className="flex flex-col space-y-1" data-hs-scrollspy="#scrollspy">
            <li>
              <a
                href="#about"
                className="flex items-center gap-3 text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 transition-colors"
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
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="flex items-center gap-3 text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 transition-colors"
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center gap-3 text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 transition-colors"
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
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-3 text-gray-800 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 transition-colors"
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* dark/light mode toggle */}
      <div className="p-4 flex items-center">
        <button className="cursor-pointer">
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
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavPane;
