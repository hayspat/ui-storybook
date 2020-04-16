import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative hidden ml-6 sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-8 h-8 overflow-hidden border-2 border-gray-600 rounded-full focus:outline-none focus:border-white "
      >
        <img
          src="https://kprofiles.com/wp-content/uploads/2019/11/D6aGkQlUcAAgf_n-533x800.jpg"
          alt="avatar"
        />
      </button>
      {isOpen && (
        <button
          className="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`absolute right-0 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl ${
          isOpen ? "block" : "hidden"
        } `}
      >
        <a
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          href="#"
        >
          Account Settings
        </a>
        <a
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          href="#"
        >
          Support
        </a>
        <a
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          href="#"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
