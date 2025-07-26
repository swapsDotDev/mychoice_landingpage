import React from 'react';
import selfexecutionsImg from '../assets/selfexecutions.png';
import qr from '../assets/qr.png'

const HeroSection = () => {
  return (
    <div className="relative">
      <section className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left: QR Section */}
        <div className="w-full md:w-1/2 bg-green-600 text-white flex flex-col items-center justify-center p-8 md:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">FAST-TRACK YOUR<br />ENTRY WITH A QR SCAN</h1>
          <p className="mb-6 text-lg text-center">Lorem ipsum is a simple dummy text.</p>
          <img src={qr} alt="QR Code" className="w-40 h-40 mb-4 bg-white rounded-xl p-2 shadow-lg" />
          <p className="text-black font-medium mb-2">I’m New – Register Here</p>
          <button className="bg-black text-white font-bold px-10 py-3 rounded-lg shadow-md hover:bg-gray-900 transition">REGISTER</button>
        </div>
        {/* Right: Self-Exclusion Image with Text Overlay */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center min-h-[600px]">
          <img 
            src={selfexecutionsImg} 
            alt="Self Exclusion" 
            className="absolute inset-0 w-full h-full object-cover" 
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 p-8 md:p-16 text-white w-full flex flex-col justify-center items-start">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">FREE ONLINE</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">SELF-EXCLUSION</h1>
            <p className="text-lg md:text-xl font-medium leading-snug max-w-xl">
              Project X will act as a national register for individuals to willingly block online gambling sites including promotional/advertisement content from all New Zealand licensed online gambling operators
            </p>
          </div>
        </div>
      </section>
      {/* Stats Bar - white background, green numbers, gray labels, divider below */}
      <div className="w-full bg-white py-10 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-end mb-6 md:mb-0">
            <span className="text-4xl md:text-5xl font-medium text-green-600">1256</span>
            <span className="text-gray-500 text-lg ml-2">Users</span>
          </div>
          <div className="flex items-end mb-6 md:mb-0">
            <span className="text-4xl md:text-5xl font-medium text-green-600">3,000</span>
            <span className="text-gray-500 text-lg ml-2">Downlaod</span>
          </div>
          <div className="flex items-end mb-6 md:mb-0">
            <span className="text-4xl md:text-5xl font-medium text-green-600">508</span>
            <span className="text-gray-500 text-lg ml-2">Likes</span>
          </div>
          <div className="flex items-end">
            <span className="text-4xl md:text-5xl font-medium text-green-600">807</span>
            <span className="text-gray-500 text-lg ml-2">5 Star Rating</span>
          </div>
        </div>
        <div className="w-full max-w-5xl border-b border-gray-200 mt-8" />
      </div>
    </div>
  );
};

export default HeroSection;
