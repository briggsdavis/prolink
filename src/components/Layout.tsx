import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ChevronRight, Search, Filter, ArrowRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
export type Page = 'home' | 'about' | 'products' | 'news' | 'contact';

// --- Components ---

export const Header = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'CN'>('EN');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About Us', value: 'about' },
    { label: 'Products', value: 'products' },
    { label: 'News', value: 'news' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <img src="/prolinklogo.png" alt="Prolink" className="h-12 w-auto group-hover:scale-105 transition-transform" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => setPage(link.value)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary-blue relative group ${
                isScrolled 
                  ? (currentPage === link.value ? 'text-slate-900' : 'text-slate-600')
                  : (currentPage === link.value ? 'text-white' : 'text-white/80')
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled ? 'bg-slate-900' : 'bg-white'} ${currentPage === link.value ? 'w-full' : ''}`} />
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'CN' : 'EN')}
            className={`flex items-center gap-1 text-xs font-bold border px-4 py-2 transition-all rounded-full ${
              isScrolled ? 'text-slate-900 border-slate-200 hover:bg-slate-50' : 'glass-button text-white border-white/40'
            }`}
          >
            <Globe size={14} />
            {lang}
          </button>
          <button 
            onClick={() => setPage('contact')}
            className="hidden md:block bg-primary-red text-white px-8 py-2.5 text-sm font-bold hover:bg-primary-blue transition-all active:scale-95 rounded-full shadow-lg"
          >
            Contact
          </button>
          <button 
            className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => {
                    setPage(link.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${currentPage === link.value ? 'text-primary-blue' : 'text-slate-600'}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setPage('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-primary-blue text-white px-6 py-3 text-center font-bold rounded-full shadow-lg"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
  return (
    <footer className="bg-light-grey text-slate-900 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-8">
            <img src="/prolinklogo.png" alt="Prolink" className="h-12 w-auto" />
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            A leading index model enterprise founded in 2004, specializing in high-end caps, hats, and global trading solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors rounded-full">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors rounded-full">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-slate-200 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors rounded-full">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><button onClick={() => setPage('home')} className="hover:text-primary-blue transition-colors">Home</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-primary-blue transition-colors">About Us</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-primary-blue transition-colors">Our Products</button></li>
            <li><button onClick={() => setPage('news')} className="hover:text-primary-blue transition-colors">Latest News</button></li>
            <li><button onClick={() => setPage('contact')} className="hover:text-primary-blue transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Products</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><button onClick={() => setPage('products')} className="hover:text-primary-blue transition-colors">Signature Caps</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-primary-blue transition-colors">Winter Wear</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-primary-blue transition-colors">Kitchenware & Aprons</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-primary-blue transition-colors">Bags & Accessories</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-primary-blue transition-colors">Rainwear</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary-blue shrink-0" />
              <span>Hebei, China</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary-blue shrink-0" />
              <span>+86 123 4567 890</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary-blue shrink-0" />
              <span>info@prolink-trading.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© 2024 Hebei Prolink Import and Export Trading Co., Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
