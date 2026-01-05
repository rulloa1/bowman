import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Listings from './components/Listings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import IntroOverlay from './components/IntroOverlay';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <IntroOverlay onComplete={() => setIntroComplete(true)} />}
      
      <div 
        className={`min-h-screen bg-white transition-all duration-1000 ease-out ${
          introComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-screen overflow-hidden'
        }`}
      >
        <Header />
        <main>
          <Hero />
          <Features />
          <About />
          <Listings />
          <Contact />
        </main>
        <Footer />
        <AIChat />
      </div>
    </>
  );
}

export default App;