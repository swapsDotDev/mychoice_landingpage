import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import SelfExclusionSection from './components/SelfExclusionSection';
import FeaturesSection from './components/FeaturesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SelfExclusionSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />

    </div>
  );
}

export default App;
