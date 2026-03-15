import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-3xl px-6 h-20 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'shadow-2xl shadow-primary/10 border-primary/20 bg-bg/80' : 'border-white/5'
        }`}>
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:glow-purple transition-all duration-500">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white font-display">NT <span className="text-gradient">Aplicações</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-baseline space-x-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-secondary ${
                    location.pathname === link.path ? 'text-primary' : 'text-text-muted'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-6 w-px bg-white/10" />
            <Link
              to="/contato"
              className="inline-flex items-center px-6 py-3 text-sm font-bold text-white bg-primary rounded-xl hover:glow-purple hover:scale-105 transition-all group"
            >
              Solicitar Projeto
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl text-text-muted hover:text-white hover:bg-white/5 focus:outline-none transition-all"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-4 md:hidden"
          >
            <div className="glass rounded-[2rem] p-6 space-y-4 shadow-2xl border-primary/20">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-5 text-lg font-bold text-white bg-primary rounded-2xl hover:glow-purple transition-all"
                >
                  Solicitar Projeto
                </Link>
                <a
                  href="https://wa.me/5500000000000"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-5 text-lg font-bold text-white glass rounded-2xl hover:bg-white/10 transition-all gap-2"
                >
                  <MessageCircle className="w-6 h-6 text-secondary" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
