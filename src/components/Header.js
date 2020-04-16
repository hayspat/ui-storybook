import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0 ">
        <div>
          <img
            src="http://pluspng.com/img-png/logo-aygaz-png-file-aygaz-logo-svg-1280.png"
            alt="logo"
            className="h-8"
          />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            type="button"
            className="block text-white text-gray-500 focus:text-white focus:outline-none hover:text-white "
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              ) : (
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav className={`px-2 pt-2 pb-4 ${isOpen ? "block" : "hidden"} sm:flex`}>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          href="#"
        >
          Trips
        </a>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          href="#"
        >
          News
        </a>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          href="#"
        >
          Old page
        </a>
      </nav>
      <Dropdown />
    </header>
  );
};

export default Header;
