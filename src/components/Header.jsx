import React from "react";
import { GoBell } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">#</span>
          </div>
          <span className="text-xl font-bold text-gray-900">ROSTER GRID</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            Dashboard
            <FaCaretDown />
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            Roster
            <FaCaretDown />
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            Communications
            <FaCaretDown />
          </a>
          <a
            href="#"
            className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium"
          >
            CRM
            <FaCaretDown />
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            Contracts
            <FaCaretDown />
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            Settings
            <FaCaretDown />
          </a>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
          >
            More
            <FaCaretDown />
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            <GoBell className=" text-gray-600 hover:text-gray-900 text-lg" />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-medium text-sm">M</span>
            </div>
            <span className="text-gray-900 font-medium">Michael M</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
