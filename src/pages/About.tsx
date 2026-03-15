import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Zap, CheckCircle2, Bot, Cpu, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8 border-primary/20">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Inovação & Tecnologia</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] font-display">
            Moldando o <span className="text-gradient">Amanhã</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium max-w-3xl mx-auto">
            A NT Aplicações nasceu da visão de que a tecnologia e a inteligência artificial devem ser acessíveis e transformadoras para todos os negócios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl font-black text-white tracking-tighter font-display">Nossa Missão</h2>
            <p className="text-text-muted text-xl leading-relaxed font-medium">
              Desenvolvemos ecossistemas digitais que capacitam empresas a operarem com eficiência máxima. Através da IA, eliminamos barreiras técnicas e criamos caminhos claros para o crescimento.
            </p>
            <p className="text-text-muted text-xl leading-relaxed font-medium">
              Não entregamos apenas código; entregamos inteligência competitiva e design de classe mundial para que sua marca se destaque no futuro digital.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                { text: 'Simplicidade Radical', icon: Zap },
                { text: 'Eficiência Preditiva', icon: Cpu },
                { text: 'Escalabilidade Global', icon: Rocket },
                { text: 'Inovação Contínua', icon: Bot }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 glass px-8 py-6 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-white font-black text-sm uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10" />
            <div className="relative glass rounded-[3rem] p-12 md:p-20 space-y-16 border-white/5 shadow-2xl">
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 font-display">Foco em Resultados</h3>
                  <p className="text-text-muted text-lg font-medium leading-relaxed">Arquiteturas desenhadas para converter dados em lucro real.</p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-secondary/20">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 font-display">Segurança Avançada</h3>
                  <p className="text-text-muted text-lg font-medium leading-relaxed">Sistemas blindados com criptografia de ponta e nuvem resiliente.</p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 font-display">Performance Extrema</h3>
                  <p className="text-text-muted text-lg font-medium leading-relaxed">Velocidade de carregamento e resposta que desafiam os padrões.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
