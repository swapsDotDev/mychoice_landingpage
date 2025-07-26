import React from 'react';
import ctapplestore from '../assets/ctapplestore.png';
import ctplaystore from '../assets/ctplaystore.png';
import slidermac2 from '../assets/slidermac2.png';
import anotherphone from '../assets/2222.png';

const DownloadSection = () => {
  return (
    <section className="relative w-full bg-white flex flex-col items-center justify-center py-0 px-0 overflow-visible min-h-[600px]">
      {/* Decorative green dots/circles */}
      <div className="absolute left-0 top-0 w-48 h-48 bg-green-100 rounded-full z-0 -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute left-24 top-1/2 w-3 h-3 bg-green-400 rounded-full z-0" />
      {/* Green Card with content */}
      <div className="relative w-full max-w-5xl flex items-center justify-center z-10" style={{ minHeight: '420px' }}>
        <div className="relative w-full md:w-3/4 flex flex-col md:flex-row items-center justify-between">
          {/* Green card */}
          <div className="relative w-full md:w-3/5 bg-gradient-to-br from-green-600 to-green-500 rounded-[48px] md:rounded-[48px] p-10 md:p-16 flex flex-col justify-center items-start z-10 shadow-xl" style={{ minHeight: '420px' }}>
            {/* Concentric circles */}
            <svg className="absolute left-0 top-0 w-full h-full z-0" viewBox="0 0 700 420" fill="none"><circle cx="350" cy="210" r="200" stroke="#22c55e" strokeOpacity="0.15" strokeWidth="2" /><circle cx="350" cy="210" r="120" stroke="#22c55e" strokeOpacity="0.15" strokeWidth="2" /><circle cx="350" cy="210" r="60" stroke="#22c55e" strokeOpacity="0.15" strokeWidth="2" /></svg>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight text-white">
                Download our app and start your <br className="hidden md:block" />free trail to get started today!
              </h2>
              <p className="mb-8 text-white/90 max-w-md">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
              <div className="flex space-x-4">
                <img src={ctplaystore} alt="Google Play" className="h-12 w-auto rounded-lg shadow-lg" />
                <img src={ctapplestore} alt="App Store" className="h-12 w-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          {/* Phone Mockups, overlapping the card */}
          <div className="relative flex items-end justify-center md:-ml-16 mt-8 md:mt-0 z-20" style={{ minHeight: '420px' }}>
            {/* Phone 2 (behind) */}
            <img
              src={anotherphone}
              alt="App Preview 2"
              className="w-44 md:w-56 rounded-3xl shadow-2xl absolute left-0 bottom-0 z-10 opacity-100"
              style={{ filter: 'blur(0.5px)', transform: 'translateY(32px) scale(0.97)' }}
            />
            {/* Phone 1 (front) */}
            <img
              src={slidermac2}
              alt="App Preview 1"
              className="w-44 md:w-56 rounded-3xl shadow-2xl relative z-20"
              style={{ transform: 'translateX(56px)' }}
            />
          </div>
        </div>
      </div>
      {/* More decorative circles */}
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-green-100 rounded-full z-0 translate-x-1/3 translate-y-1/3" />
      <div className="absolute right-24 bottom-1/2 w-2 h-2 bg-green-400 rounded-full z-0" />
    </section>
  );
};

export default DownloadSection;
