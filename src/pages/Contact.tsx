import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="relative pt-40 pb-24">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Vamos <span className="text-gradient">Conversar</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-12 font-medium leading-relaxed">
              Tem alguma dúvida sobre nossos projetos ou quer sugerir uma nova funcionalidade? Estamos prontos para te ouvir.
            </p>

            <div className="space-y-6">
              {[
                { icon: MessageCircle, title: 'WhatsApp', desc: 'Fale conosco em tempo real', link: '#' },
                { icon: Mail, title: 'E-mail', desc: 'contato@ntaplicacoes.com.br', link: 'mailto:contato@ntaplicacoes.com.br' },
                { icon: Instagram, title: 'Instagram', desc: '@onoturnocsz', link: 'https://instagram.com/onoturnocsz' }
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.link} 
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-6 glass p-6 rounded-3xl hover:border-emerald-500/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <item.icon className="w-7 h-7 text-emerald-500 group-hover:text-black transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-medium">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full -mr-32 -mt-32" />
            
            <form className="relative space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-400 ml-1 uppercase tracking-widest">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600 font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-400 ml-1 uppercase tracking-widest">E-mail Corporativo</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600 font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-400 ml-1 uppercase tracking-widest">Mensagem</label>
                <textarea
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600 font-medium resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 hover:scale-[1.02] transition-all flex items-center justify-center group shadow-2xl shadow-emerald-500/20"
              >
                Enviar Mensagem
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
