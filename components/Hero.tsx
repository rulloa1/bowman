import React from 'react';
import { BROKER_INFO } from '../constants';
import { SectionId } from '../types';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToListings = () => {
    document.getElementById(SectionId.LISTINGS)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Top Broker in Spring, TX
            </div>
            
            <h1 className="text-5xl lg:text-7xl tracking-tight text-slate-900 font-medium leading-[1.1]">
              Elevating the <br />
              <span className="text-slate-400">standard of service.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Deanna Bowman delivers premium real estate results. Experience the seamless transition from listing to sold with personalized, data-driven expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToListings}
                className="group flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.02]"
              >
                Browse Listings
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="pt-8 flex items-center gap-6 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight text-slate-900">15+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight text-slate-900">100+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">Families Helped</span>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 transform rotate-2 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-10 left-0 w-1/2 h-1/2 bg-white p-2 rounded-2xl shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-700">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Detail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-slate-900">
                  {BROKER_INFO.agency}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;