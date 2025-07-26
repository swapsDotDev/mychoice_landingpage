import React from 'react';
import maletraveller from '../assets/male-traveller.png';

const SelfExclusionSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center py-16 px-4 md:px-16 bg-white overflow-hidden">
      {/* Decorative green dots/circles */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-green-100 rounded-full z-0" />
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-green-100 rounded-full z-0" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-400 rounded-full z-0" />
      {/* Left: Man using phone image and badge */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative z-10 mb-12 md:mb-0">
        <div className="absolute -top-8 -left-8 hidden md:block">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full">
            {/* Shield icon SVG */}
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4l7 4v4c0 5-3.5 9-7 9s-7-4-7-9V8l7-4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
          </div>
        </div>
        <img src={maletraveller} alt="Man using phone" className="w-72 md:w-96 rounded-3xl shadow-xl object-cover" />
      </div>
      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center z-10 md:pl-12">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-base font-medium mb-4">About Our App <span role="img" aria-label="thumbs up">👍</span></span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3"></span>
          Free Online Self-Exclusion
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          Project X will act as a national register for individuals to willingly block online gambling sites including promotional/advertisement content from all New Zealand licensed online gambling operators
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start text-lg"><span className="inline-block w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">✔</span> <span className="font-semibold">Blocking & Content Filtering</span> for users who have downloaded the app</li>
          <li className="flex items-start text-lg"><span className="inline-block w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">✔</span> <span className="font-semibold">Release register for self-exclusion</span> of NZ Approved Online Gambling License Holder.</li>
          <li className="flex items-start text-lg"><span className="inline-block w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">✔</span> <span className="font-semibold">Share new registrations</span> with online providers by list and or API to their membership database.</li>
          <li className="flex items-start text-lg"><span className="inline-block w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">✔</span> <span className="font-semibold">Blocking of Credit Cards</span> with respective banks or be given advice on how to block their cards.</li>
          <li className="flex items-start text-lg"><span className="inline-block w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">✔</span> <span className="font-semibold">API Integrations – NHI</span> (National Health Identifier) to provide insights to the regulator.</li>
        </ul>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg text-lg flex items-center">Discover More <span className="ml-2">→</span></button>
      </div>
    </section>
  );
};

export default SelfExclusionSection;
