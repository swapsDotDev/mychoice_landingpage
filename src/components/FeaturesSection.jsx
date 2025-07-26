import React from 'react';
import { CheckCircle, ShieldCheck, Globe2, Settings } from 'lucide-react'; // Or use your own icons

const features = [
  {
    icon: <CheckCircle size={48} className="text-green-500 bg-green-100 rounded-full p-2" />,
    title: "Frictionless Guest Experience",
    desc: "Check in instantly—no lengthy sign-up required.",
  },
  {
    icon: <Settings size={48} className="text-green-500 bg-green-100 rounded-full p-2" />,
    title: "Venue-First Control Panel",
    desc: "Manage entries and guest logs in real time.",
  },
  {
    icon: <ShieldCheck size={48} className="text-green-500 bg-green-100 rounded-full p-2" />,
    title: "Privacy-First Design",
    desc: "User data stays private and fully secure.",
  },
  {
    icon: <Globe2 size={48} className="text-green-500 bg-green-100 rounded-full p-2" />,
    title: "Works Without Downloading the App",
    desc: "Guests can check in directly via mobile browser.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 text-center bg-white">
      <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4">
        Features
      </div>
      <h2 className="text-4xl font-extrabold mb-12">
        Features That Make Xapper Different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className="bg-[#f9f8ff] p-8 rounded-2xl shadow-lg flex flex-col items-center"
          >
            <div className="mb-6">{feat.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
            <p className="text-gray-600">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
