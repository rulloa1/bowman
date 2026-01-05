import React, { useState } from 'react';
import { BROKER_INFO } from '../constants';
import { SectionId, ContactFormState } from '../types';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-slate-200/50">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <span className="text-yellow-600 font-medium text-sm tracking-wider uppercase">Contact</span>
                <h2 className="text-3xl font-medium text-slate-900 mt-2 mb-4">Let's talk.</h2>
                <p className="text-slate-500 leading-relaxed">
                  Ready to take the next step? Whether buying or selling, I'm here to provide expert guidance.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <a href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium">Phone</p>
                    <p className="text-slate-900 font-medium">{BROKER_INFO.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${BROKER_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium">Email</p>
                    <p className="text-slate-900 font-medium">{BROKER_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-medium">Office</p>
                    <p className="text-slate-900 font-medium">{BROKER_INFO.agency}, {BROKER_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-4 px-8 rounded-lg text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 ${
                    status === 'success' ? 'bg-green-600' : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    'Message Sent'
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;