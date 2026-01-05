import React, { useState, useEffect } from 'react';

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowHint(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowHint(false);
    
    // Wait for door animation, then trigger fade out
    setTimeout(() => {
      setIsFading(true);
    }, 1200);

    // Complete intro
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  if (isFading) return null; // Or keep it rendered but invisible if you want smooth transition

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 transition-opacity duration-1000 ease-in-out ${isOpen ? 'pointer-events-none' : ''}`}>
      
      {/* Logo Top */}
      <div className={`absolute top-12 transition-opacity duration-700 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex items-center gap-2">
          <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5L15 15L20 5" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            <text x="30" y="20" fill="white" fontFamily="sans-serif" fontSize="18" fontWeight="500" letterSpacing="0.1em">BOWMAN</text>
            <path d="M110 10L105 15L110 20" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>

      {/* Door Scene */}
      <div className="perspective-1500 relative flex items-center justify-center w-full h-full">
        
        {/* Light Source */}
        <div 
          className={`absolute z-0 w-32 h-64 bg-white rounded-lg blur-[60px] transition-all duration-[1500ms] ease-in-out ${
            isOpen ? 'expand-light' : 'opacity-40'
          }`}
        ></div>

        {/* Door Container */}
        <div 
          className="relative z-10 w-48 h-80 sm:w-64 sm:h-96 group cursor-pointer transform-style-3d" 
          onClick={handleOpen}
        >
          {/* Hint Text */}
          <div 
            className={`absolute -bottom-16 left-1/2 -translate-x-1/2 text-zinc-500 text-xs tracking-widest uppercase transition-opacity duration-700 whitespace-nowrap ${
              showHint ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Click to Enter
          </div>

          {/* Door Frame */}
          <div className="absolute -inset-2 border-t-2 border-x-2 border-zinc-800 rounded-t-lg pointer-events-none"></div>

          {/* The Door */}
          <div 
            className={`relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-sm shadow-2xl origin-left transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform-style-3d overflow-hidden ${
              isOpen ? 'door-open' : ''
            }`}
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-zinc-950/80"></div>
            
            {/* Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-950/50"></div>
            
            {/* Handle */}
            <div className="absolute top-1/2 right-4 w-1 h-8 bg-zinc-700 rounded-full shadow-sm group-hover:bg-yellow-500/80 transition-colors duration-300"></div>

            {/* Reflection */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>

          {/* Floor Reflection */}
          <div className="absolute -bottom-8 left-0 w-full h-4 bg-black/50 blur-lg rounded-[100%]"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;