import React from 'react';
import { BROKER_INFO } from '../constants';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden relative z-10">
              <img 
                src="https://picsum.photos/600/800?random=10" 
                alt={BROKER_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
             <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-yellow-50 rounded-full blur-3xl opacity-50 -z-0" />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="mb-6">
              <span className="text-yellow-600 font-medium text-sm tracking-wider uppercase">About Deanna</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8 leading-tight">
              Navigating your <br /> real estate journey.
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8 font-light leading-relaxed">
              <p className="mb-6">
                {BROKER_INFO.bio}
              </p>
              <p>
                As a resident of Spring, Texas, I have an intimate understanding of the local community. My affiliation with {BROKER_INFO.agency} provides me with top-tier resources and a global network to serve you better.
              </p>
            </div>
            
            <div className="inline-block p-6 bg-slate-50 rounded-xl border border-slate-100">
              <p className="font-serif italic text-xl text-slate-800 mb-4">"I believe in transparency, integrity, and results. Your home is my priority."</p>
              <p className="font-medium text-sm text-slate-500">— {BROKER_INFO.name}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;