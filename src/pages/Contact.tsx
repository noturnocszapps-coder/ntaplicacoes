import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MessageCircle, Send, ArrowRight, Bot } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8 border-secondary/20">
              <Bot className="w-4 h-4 text-secondary" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-secondary">Conecte-se Conosco</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] font-display">
              Vamos <span className="text-gradient">Conversar</span>
            </h1>
            <p className="text-xl text-text-muted mb-16 font-medium leading-relaxed max-w-lg">
              Pronto para levar sua empresa ao próximo nível com IA e tecnologia de ponta? Nossa equipe está pronta para transformar sua visão em realidade.
            </p>

            <div className="space-y-6">
              {[
                { icon: MessageCircle, title: 'WhatsApp', desc: 'Atendimento imediato via chat', link: 'https://wa.me/5500000000000', color: 'text-secondary' },
                { icon: Mail, title: 'E-mail', desc: 'contato@ntaplicacoes.com.br', link: 'mailto:contato@ntaplicacoes.com.br', color: 'text-primary' },
                { icon: Instagram, title: 'Instagram', desc: '@onoturnocsz', link: 'https://instagram.com/onoturnocsz', color: 'text-secondary' }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.link} 
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-8 glass p-8 rounded-[2rem] glass-hover group border-white/5"
                >
                  <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-black text-xl font-display">{item.title}</h3>
                    <p className="text-text-muted font-medium text-lg">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-primary group-hover:translate-x-2 transition-all duration-500" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-[3.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden border-white/5"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -mr-40 -mt-40" />
            
            <form className="relative space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-xs font-black text-text-muted ml-2 uppercase tracking-[0.2em]">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-bold text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-text-muted ml-2 uppercase tracking-[0.2em]">E-mail Corporativo</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-bold text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black text-text-muted ml-2 uppercase tracking-[0.2em]">Mensagem</label>
                <textarea
                  placeholder="Descreva seu projeto ou dúvida..."
                  rows={5}
                  className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-white/20 font-bold text-lg resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-7 bg-primary text-white font-black rounded-2xl hover:glow-purple hover:scale-[1.02] transition-all flex items-center justify-center group shadow-2xl uppercase tracking-[0.2em] text-sm"
              >
                Enviar Mensagem
                <Send className="ml-4 w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

