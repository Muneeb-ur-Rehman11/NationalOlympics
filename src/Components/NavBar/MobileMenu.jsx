import React from 'react';
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ isOpen, setIsOpen, navItems }) => {

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 md:hidden`}
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
        <button className="absolute top-5 right-5 text-3xl" onClick={() => setIsOpen(false)}>
        <RxCross2 />
        </button>
        <ul className="space-y-6 text-lg">
          {navItems.map((item) => (
            <li key={item.id} className="hover:text-gray-300">
              <a href={item.link} onClick={() => setIsOpen(false)}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
