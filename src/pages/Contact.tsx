import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../components/Animations';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, Globe, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-light-grey">
      {/* Hero Section */}
      <section className="bg-white border-b py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary-blue font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
              Let's Start a <br /><span className="text-primary-blue">Conversation</span>
            </h1>
            <p className="text-slate-500 text-2xl leading-relaxed max-w-2xl">
              Have questions about our products or bulk export solutions? Our team is here to help you navigate global trade with ease.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-16">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight">Contact Information</h3>
                  <div className="space-y-12">
                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all rounded-full">
                        <Phone size={28} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">Phone</span>
                        <p className="text-slate-900 font-bold text-lg">+86 123 4567 890</p>
                        <p className="text-slate-500 text-sm">Mon-Fri, 9am - 6pm CST</p>
                      </div>
                    </div>

                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all rounded-full">
                        <Mail size={28} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">Email</span>
                        <p className="text-slate-900 font-bold text-lg">info@prolink-trading.com</p>
                        <p className="text-slate-500 text-sm">sales@prolink-trading.com</p>
                      </div>
                    </div>

                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-all rounded-full">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">Address</span>
                        <p className="text-slate-900 font-bold text-lg">Hebei Prolink Building</p>
                        <p className="text-slate-500 text-sm leading-relaxed">No. 123 Trade Avenue, Shijiazhuang, Hebei Province, China</p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="p-12 bg-white border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-3xl" />
                <Clock size={48} className="text-primary-blue mb-8" />
                <h4 className="text-2xl font-bold mb-6 tracking-tight text-slate-900">Global Support</h4>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Our digital office ensures we are responsive to global time zones. Expect a response within 24 hours.
                </p>
                <div className="flex items-center gap-3 text-primary-blue font-bold">
                  <Globe size={20} />
                  Available Worldwide
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
                  <h3 className="text-4xl font-bold text-slate-900 mb-12 tracking-tight">Inquiry Form</h3>
                  <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                        <input 
                          type="text" 
                          placeholder="John" 
                          className="w-full bg-slate-50 border-2 border-slate-50 px-8 py-5 focus:outline-none focus:border-primary-blue focus:bg-white transition-all text-lg rounded-full"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                        <input 
                          type="text" 
                          placeholder="Doe" 
                          className="w-full bg-slate-50 border-2 border-slate-50 px-8 py-5 focus:outline-none focus:border-primary-blue focus:bg-white transition-all text-lg rounded-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-slate-50 border-2 border-slate-50 px-8 py-5 focus:outline-none focus:border-primary-blue focus:bg-white transition-all text-lg rounded-full"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                        <input 
                          type="text" 
                          placeholder="+1 234 567 890" 
                          className="w-full bg-slate-50 border-2 border-slate-50 px-8 py-5 focus:outline-none focus:border-primary-blue focus:bg-white transition-all text-lg rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea 
                        rows={6} 
                        placeholder="Tell us about your requirements..." 
                        className="w-full bg-slate-50 border-2 border-slate-50 px-8 py-5 focus:outline-none focus:border-primary-blue focus:bg-white transition-all resize-none text-lg rounded-3xl"
                      />
                    </div>

                    <button className="w-full glass-button-primary text-white py-6 font-bold text-xl hover:bg-primary-red transition-all flex items-center justify-center gap-4 active:scale-[0.99] rounded-full">
                      Send Inquiry
                      <Send size={24} />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] bg-slate-100 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/map/1920/1080?grayscale" 
          alt="Map Placeholder" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-12 shadow-2xl border border-slate-100 flex flex-col items-center text-center max-w-md rounded-3xl">
            <div className="w-20 h-20 bg-primary-blue flex items-center justify-center text-white mb-8 shadow-lg shadow-primary-blue/30 rounded-full">
              <MapPin size={36} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Hebei Prolink HQ</h4>
            <p className="text-slate-500 text-lg mb-8">Shijiazhuang, Hebei Province, China</p>
            <button className="text-primary-blue font-bold text-lg flex items-center gap-3 hover:gap-5 transition-all px-8 py-3 rounded-full border border-primary-blue/10 hover:bg-primary-blue/5">
              Get Directions <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
