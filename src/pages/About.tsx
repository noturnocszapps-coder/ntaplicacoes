import React from 'react';
import { motion } from 'motion/react';
import { Target, Shield, Zap, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="relative pt-40 pb-24">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            Nossa <span className="text-gradient">História</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium">
            A NT Aplicações é um projeto focado no desenvolvimento de soluções digitais modernas para mobilidade, logística e entretenimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black text-white tracking-tight">Nossa Missão</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              Criamos plataformas que ajudam profissionais autônomos e negócios locais a organizarem suas operações, acompanharem resultados e tomarem decisões baseadas em dados.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              Nosso foco é criar tecnologia simples, eficiente e acessível, removendo a complexidade técnica para que nossos usuários foquem no que realmente importa: o crescimento de seus negócios.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'Simplicidade',
                'Eficiência',
                'Acessibilidade',
                'Inovação'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 glass px-6 py-4 rounded-2xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-white font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
            <div className="relative glass rounded-[3rem] p-10 md:p-16 space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Foco em Resultados</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">Plataformas desenhadas para maximizar a produtividade e rentabilidade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Segurança e Dados</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">Proteção total das informações com infraestrutura cloud de última geração.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Agilidade Digital</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">Desenvolvimento rápido e otimizado para a web moderna e escalável.</p>
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
