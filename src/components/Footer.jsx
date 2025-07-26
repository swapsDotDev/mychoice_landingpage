import React from 'react';
// import { FaGoogle, FaXTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 md:px-20 pt-12 pb-4 rounded-t-3xl mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8">
        {/* Left side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/path/to/logo.png" alt="MyChoice Logo" className="mb-4 w-48" />
          <p className="text-base md:text-lg text-white/90">
            Project X will act as a national register for individuals to willingly block online gambling sites
            including promotional/advertisement content from all New Zealand licensed online gambling operators
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-auto">
          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Start a conversation</h4>
            <p className="text-white/80">sales@mychoice.com</p>
            <p className="text-white/80">support@mychoice.com</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="font-bold text-lg mb-2">More</h4>
            <p className="text-white/80">Terms & Conditions</p>
            <p className="text-white/80">Privacy Policy</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons */}
            <a href="#" className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">
              <div className="text-white" alt="google"/>
            </a>
            <a href="#" className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">
              <div className="text-white"  alt="google"/>
            </a>
            <a href="#" className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">
              <div className="text-white"  alt="google"/>
            </a>
            <a href="#" className="bg-green-500 hover:bg-green-600 rounded-full w-10 h-10 flex items-center justify-center">
              <div className="text-white"  alt="google"/>
            </a>
            <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <div className="text-green-600"  alt="google"/>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-4 text-center text-white/80 text-sm">
        Copyright © 2025 My Choice. All rights reserved. Designed By - Mplussoft
      </div>
    </footer>
  );
};

export default Footer;
