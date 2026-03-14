import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">NT Aplicações</h3>
            <p className="text-zinc-400 text-sm max-w-xs">
              Soluções digitais modernas para mobilidade, logística e entretenimento.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/onoturnocsz" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contato@ntaplicacoes.com.br" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
              <Link to="/politica-de-privacidade" className="text-zinc-400 hover:text-emerald-400 text-sm transition-colors">
                Política de Privacidade
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-800 md:border-none md:mt-0 md:pt-0">
              <p className="text-zinc-500 text-xs">
                NT Aplicações © 2026
              </p>
              <p className="text-zinc-500 text-xs mt-1">
                Desenvolvido por{' '}
                <a href="https://instagram.com/onoturnocsz" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">
                  @onoturnocsz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
