import React from 'react';
import { MapPin, TrendingUp, Heart } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-yellow-600">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Local Expert</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Deep knowledge of Spring, TX neighborhoods and hidden gems.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-yellow-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Data Driven</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Strategic pricing and market analysis to maximize your value.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-yellow-600">
              <Heart size={20} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Client Focused</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Personalized service that puts your goals and comfort first.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;