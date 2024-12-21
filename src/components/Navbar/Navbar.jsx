import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ModeToggle } from "../AppearanceModes/mode-toggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 py-4 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <img src="/images/resikel.png" alt="logo" className="h-8 w-auto" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden block text-black dark:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Nav Content */}
        <div
          className={`lg:flex lg:items-center lg:gap-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white dark:bg-gray-800 lg:bg-transparent z-40 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-6 gap-4 items-center">
            <li>
              <Link
                to="/"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Kegiatan
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Edukasi
              </Link>
            </li>
            <li>
              <Link
                to="/Guide"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Panduan
              </Link>
            </li>
            <li>
              <Link
                to="/patners"
                className="text-black dark:text-white font-normal hover:text-emerald-500 dark:hover:text-emerald-400"
              >
                Mitra
              </Link>
            </li>
          </ul>
        </div>

        {/* Login Button and ModeToggle */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/Login"
            className="bg-emerald-600 dark:bg-emerald-500 text-white dark:text-gray-900 hover:bg-white dark:hover:bg-gray-700 px-4 py-2 rounded-md font-normal"
          >
            Login
          </Link>
          <ModeToggle />
        </div>
      </div>

      {/* Login and ModeToggle for Mobile */}
      <div
        className={`lg:hidden flex flex-col items-center gap-4 mt-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/Login"
          className="bg-emerald-600 dark:bg-emerald-500 text-white dark:text-gray-900 hover:bg-white dark:hover:bg-gray-700 px-4 py-2 rounded-md font-normal"
        >
          Login
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
