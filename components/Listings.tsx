import React from 'react';
import { MOCK_PROPERTIES } from '../constants';
import { SectionId } from '../types';
import { MapPin, BedDouble, Bath, Square, ArrowRight } from 'lucide-react';

const Listings: React.FC = () => {
  return (
    <section id={SectionId.LISTINGS} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Featured Listings</h2>
            <p className="text-slate-500 max-w-xl">
              Discover a selection of the finest properties currently available in Spring, TX.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-yellow-600 transition-colors">
            View All Properties <ArrowRight size={16} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map((property) => (
            <div key={property.id} className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm backdrop-blur-md ${
                    property.status === 'For Sale' ? 'bg-white/90 text-green-700' : 
                    property.status === 'Pending' ? 'bg-white/90 text-orange-600' : 'bg-white/90 text-red-600'
                  }`}>
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-yellow-600 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-lg font-bold text-slate-900">{property.price}</p>
                </div>
                
                <div className="flex items-center text-slate-500 mb-6 text-sm">
                  <MapPin size={14} className="mr-1 flex-shrink-0" />
                  <span className="truncate">{property.address}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-slate-600">
                  <div className="flex items-center gap-1.5" title="Bedrooms">
                    <BedDouble size={16} className="text-slate-400" />
                    <span className="text-sm font-medium">{property.beds} <span className="text-slate-400 font-normal">Beds</span></span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Bathrooms">
                    <Bath size={16} className="text-slate-400" />
                    <span className="text-sm font-medium">{property.baths} <span className="text-slate-400 font-normal">Baths</span></span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Square Footage">
                    <Square size={16} className="text-slate-400" />
                    <span className="text-sm font-medium">{property.sqft} <span className="text-slate-400 font-normal">sqft</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 py-3 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 flex items-center justify-center gap-2">
           View All Properties <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Listings;