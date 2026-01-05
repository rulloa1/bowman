import React from 'react';
import { BROKER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
               <svg width="100" height="24" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5L15 15L20 5" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <text x="30" y="20" fill="#0f172a" fontFamily="sans-serif" fontSize="18" fontWeight="600" letterSpacing="0.1em">BOWMAN</text>
                  <path d="M110 10L105 15L110 20" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Exceptional real estate services in Spring, TX. Helping you find your perfect home with integrity and professionalism.
            </p>
          </div>

          <div className="flex gap-16">
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Contact</h4>
              <div className="space-y-3 text-slate-500 text-sm">
                <p>{BROKER_INFO.agency}</p>
                <p>{BROKER_INFO.location}</p>
                <p><a href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-slate-900 transition-colors">{BROKER_INFO.phone}</a></p>
                <p><a href={`mailto:${BROKER_INFO.email}`} className="hover:text-slate-900 transition-colors">{BROKER_INFO.email}</a></p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h4>
              <div className="space-y-3 text-slate-500 text-sm">
                <p className="cursor-pointer hover:text-slate-900 transition-colors">TREC Consumer Protection</p>
                <p className="cursor-pointer hover:text-slate-900 transition-colors">Information About Brokerage</p>
                <div className="mt-4 opacity-30 hover:opacity-100 transition-opacity">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Equal_Housing_Opportunity_Logo.svg/240px-Equal_Housing_Opportunity_Logo.svg.png" alt="Equal Housing Opportunity" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {BROKER_INFO.name}. All rights reserved.</p>
          <p>Designed with Gemini</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;