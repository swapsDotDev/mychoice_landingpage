import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex items-center justify-between">
      <div className="flex items-center text-2xl font-bold">
        <span className="text-black">My</span>
        <span className="text-green-500">Choice</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-700">
        <li><a href="#" className="hover:text-green-500 transition">Home</a></li>
        <li><a href="#" className="hover:text-green-500 transition">About Us</a></li>
        <li><a href="#" className="hover:text-green-500 transition">Contact Us</a></li>
      </ul>
      {/* Exclusion Request Button */}
      <a
        href="#"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow transition hidden md:inline-block"
      >
        Exclusion Request &rarr;
      </a>
    </nav>
  );
};

export default Navbar;
