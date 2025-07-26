import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex items-center justify-between">
      {/* Logo */}
      <div
  className="absolute left-[8.39%] right-0 top-[16.13%] bottom-[41.94%] bg-black flex items-center justify-start"
>
  <img
    src="/mnt/data/ec1ad9d8-a4af-405d-8919-fdf02b78d5d4.png"
    alt="My Choice Logo"
    style={{
      position: 'absolute',
      width: '297px',
      height: '93px',
      left: '211px',
      top: '29px',
    }}
  />
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
