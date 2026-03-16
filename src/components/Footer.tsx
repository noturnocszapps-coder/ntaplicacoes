import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle, Bot } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg border-t border-white/5 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:glow-purple transition-all duration-500">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white font-display">NT <span className="text-gradient">Aplicações</span></span>
            </Link>
            <p className="text-text-muted text-sm font-medium leading-relaxed">
              Soluções digitais inteligentes e inteligência artificial aplicada ao crescimento de empresas modernas.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, link: 'https://instagram.com/onoturnocsz' },
                { icon: Mail, link: 'mailto:contato@ntaplicacoes.com.br' },
                { icon: MessageCircle, link: '#' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-text-muted hover:text-secondary hover:border-secondary/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8">Navegação</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-muted hover:text-primary font-bold text-sm transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8">Projetos</h4>
            <ul className="space-y-4">
              {[
                { name: 'DriverDash', link: 'https://driverdash.ntaplicacoes.com.br' },
                { name: 'Rota do Lucro', link: 'https://rotadolucro.ntaplicacoes.com.br/' },
                { name: 'Roxou', link: 'https://roxou.com.br' }
              ].map((project) => (
                <li key={project.name}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-text-muted hover:text-secondary font-bold text-sm transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-secondary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/politica-de-privacidade" className="text-text-muted hover:text-primary font-bold text-sm transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-text-muted hover:text-primary font-bold text-sm transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest">
            NT Aplicações © 2026 — Todos os direitos reservados
          </p>
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest">
            Desenvolvido por{' '}
            <a href="https://instagram.com/onoturnocsz" target="_blank" rel="noopener noreferrer" className="text-secondary hover:glow-blue transition-all">
              @onoturnocsz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
