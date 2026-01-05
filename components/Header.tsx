import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BROKER_INFO } from '../constants';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: SectionId) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection(SectionId.HOME)}
          className="flex items-center gap-2 cursor-pointer group"
        >
           <svg width="100" height="24" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform">
              <path d="M10 5L15 15L20 5" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              <text x="30" y="20" fill="#0f172a" fontFamily="sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.1em">BOWMAN</text>
              <path d="M110 10L105 15L110 20" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', id: SectionId.HOME },
            { label: 'About', id: SectionId.ABOUT },
            { label: 'Listings', id: SectionId.LISTINGS },
            { label: 'Contact', id: SectionId.CONTACT },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a 
             href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`}
             className="text-sm font-medium text-slate-900 hover:opacity-70 transition-opacity hidden sm:block"
          >
            {BROKER_INFO.phone}
          </a>
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10"
          >
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-slate-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col space-y-4 border-t border-slate-100">
           {[
            { label: 'Home', id: SectionId.HOME },
            { label: 'About', id: SectionId.ABOUT },
            { label: 'Listings', id: SectionId.LISTINGS },
            { label: 'Contact', id: SectionId.CONTACT },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-slate-900 font-medium text-lg py-2 border-b border-slate-100 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;