import React from 'react';
import { ArrowRight, Globe, Users, Award, CheckCircle2, ShoppingBag, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { CountUp, FadeIn } from '../components/Animations';
import { Page } from '../components/Layout';

export const Home = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[500px] flex items-stretch overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row items-end">
          <div className="w-full md:w-[55%] bg-primary-blue p-10 md:p-14 text-white flex flex-col justify-center min-h-[250px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
                Customs Clearance
              </h1>
              <div className="w-40 h-1 bg-white/30 mb-6 flex">
                <div className="w-1/3 h-full bg-white" />
              </div>
              <p className="text-base md:text-lg font-medium max-w-md leading-relaxed opacity-90">
                Providing premium quality in record time.
              </p>
            </motion.div>
          </div>
          <div className="w-full md:w-[35%] bg-primary-red p-10 md:p-14 text-white flex items-center justify-between group cursor-pointer rounded-l-full md:rounded-l-none md:rounded-r-full shadow-2xl" onClick={() => setPage('products')}>
            <div className="flex items-center gap-4">
              <div className="w-5 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1.5 bg-white rounded-full animate-bounce" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Discover catalog</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-red group-hover:scale-110 transition-transform shadow-lg">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
            {[
              { label: 'Declarations processed yearly', value: 4, suffix: 'M+' },
              { label: 'Declaration lines yearly', value: 20, suffix: 'M+' },
              { label: 'Customs experts', value: 1700, suffix: '+' },
              { label: 'Clients', value: 60000, suffix: '+' },
              { label: 'European countries', value: 15, suffix: '' },
              { label: 'Connected customs network', value: 1, suffix: '' },
            ].map((fig, i) => (
              <div key={i} className="relative">
                <div className="h-1.5 bg-slate-100 w-full mb-8 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-primary-blue"
                  />
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-bold tracking-tight text-primary-blue">
                    <CountUp to={fig.value} duration={2.5} />
                    {fig.suffix}
                  </span>
                  <span className="text-sm font-medium text-slate-500 max-w-[150px] leading-tight">
                    {fig.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-light-grey relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
                Your All-in-One Solution for <br />
                <span className="text-primary-blue">Customs Clearance</span>
              </h2>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3">
            <FadeIn delay={0.1}>
              <div className="bg-primary-blue p-12 text-white h-full flex flex-col group cursor-pointer hover:bg-primary-red transition-colors">
                <CheckCircle2 size={28} className="mb-6 opacity-60" />
                <h3 className="text-2xl font-bold mb-3">Import Clearance</h3>
                <p className="opacity-80 text-base">Streamlined procedures for all your incoming goods.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-secondary-blue p-12 text-white h-full flex flex-col group cursor-pointer hover:bg-primary-red transition-colors">
                <TrendingUp size={28} className="mb-6 opacity-60" />
                <h3 className="text-2xl font-bold mb-3">Export Clearance</h3>
                <p className="opacity-80 text-base">Efficient processing for global distribution.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-primary-red p-12 text-white h-full flex flex-col group cursor-pointer hover:bg-secondary-red transition-colors">
                <Globe size={28} className="mb-6 opacity-60" />
                <h3 className="text-2xl font-bold mb-3">Transit Clearance</h3>
                <p className="opacity-80 text-base">Seamless movement through international borders.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Collection</span>
              <h2 className="text-5xl font-bold text-slate-900 tracking-tight">Signature Caps</h2>
            </div>
            <button 
              onClick={() => setPage('products')}
              className="px-10 py-4 glass-button-dark font-bold hover:border-primary-blue hover:text-primary-blue transition-all rounded-full shadow-sm hover:shadow-md"
            >
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-slate-50 overflow-hidden mb-8 relative group-hover:shadow-2xl transition-all duration-500">
                      <img 
                        src={`https://picsum.photos/seed/cap${i}/800/800`} 
                        alt={`Product ${i}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-0 right-0 bg-primary-blue text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                        New Arrival
                      </div>
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-primary-blue transition-colors">Premium Baseball Cap v{i}</h3>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">High-end Embroidery • 100% Cotton</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News/Newsletter Section */}
      <section className="py-24 bg-white text-slate-900 overflow-hidden relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary-blue font-bold uppercase tracking-widest text-xs mb-6 block">Stay Updated</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Latest Updates</h2>
              <div className="space-y-10">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer">
                    <div className="w-28 h-28 overflow-hidden shrink-0">
                      <img 
                        src={`https://picsum.photos/seed/news${i}/400/400`} 
                        alt="News" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-primary-blue text-[10px] font-bold uppercase tracking-widest mb-2 block">Industry News • March 2024</span>
                      <h4 className="font-bold text-xl group-hover:text-primary-blue transition-colors leading-tight">Hebei Prolink Expands to New European Markets</h4>
                      <p className="text-slate-500 text-xs mt-2 line-clamp-1">Our latest expansion brings high-quality headwear to the Nordic region...</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setPage('news')}
                className="mt-12 inline-flex items-center gap-2 text-slate-900 font-bold hover:text-primary-blue transition-colors text-base"
              >
                View All News <ArrowRight size={20} />
              </button>
            </div>

            <div className="bg-light-grey p-12 border border-slate-100 flex flex-col justify-center">
              <TrendingUp size={48} className="text-primary-blue mb-6" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Contact us directly</h3>
              <p className="text-slate-500 text-base mb-8 leading-relaxed">
                Have specific requirements or need a tailored solution? Reach out to our team of experts for immediate assistance.
              </p>
              <button 
                onClick={() => setPage('contact')}
                className="glass-button-primary text-white px-10 py-5 font-bold hover:bg-slate-900 transition-all text-lg flex items-center justify-center gap-3 group rounded-full"
              >
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
