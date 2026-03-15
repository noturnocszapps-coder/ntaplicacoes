import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2, MessageCircle, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SERVICES, AI_BENEFITS, PROCESS_STEPS, FEATURES, TECH_STACK } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* 1 — HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-primary/20 text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>Inteligência Artificial & Inovação</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] md:leading-[1]">
              Inteligência Artificial aplicada ao <span className="text-gradient">crescimento</span> de empresas
            </h1>
            
            <p className="text-lg md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              A NT Aplicações desenvolve sistemas inteligentes, automações e soluções digitais modernas para o futuro do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contato"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:scale-105 hover:glow-purple transition-all flex items-center justify-center group"
              >
                Solicitar projeto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-secondary" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Futuristic Visual Element */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
            <div className="glass rounded-[2.5rem] p-4 overflow-hidden border-white/5">
              <div className="aspect-[16/9] bg-zinc-900/50 rounded-[2rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                  <div className="w-48 h-48 bg-secondary/20 blur-[80px] rounded-full animate-pulse delay-500" />
                </div>
                {/* Mockup Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="px-4 py-1 rounded-full glass text-[10px] text-text-muted">AI System v2.0</div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 glass rounded-2xl animate-pulse" />
                    <div className="h-32 glass rounded-2xl animate-pulse delay-150" />
                    <div className="h-32 glass rounded-2xl animate-pulse delay-300" />
                  </div>
                  <div className="h-40 glass rounded-2xl animate-pulse delay-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 — SERVICES SECTION */}
      <section id="servicos" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Soluções digitais inteligentes</h2>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Tecnologia de ponta para transformar a maneira como sua empresa opera e cresce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-10 rounded-[2rem] glass-hover group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:glow-purple transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 — AI SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                  IA aplicada ao <span className="text-gradient">mundo real</span>
                </h2>
                <p className="text-text-muted text-xl mb-12 font-medium leading-relaxed">
                  Não apenas conceitos, mas ferramentas práticas que geram resultados imediatos para sua operação.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {AI_BENEFITS.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <span className="text-white font-bold text-sm">{benefit.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square glass rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
                    <Bot className="w-16 h-16 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Automação Inteligente</h4>
                  <p className="text-text-muted font-medium">Sistemas que aprendem e evoluem com o seu negócio.</p>
                  <div className="mt-8 flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-150" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — WHY NT APLICAÇÕES */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Por que escolher a NT Aplicações</h2>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Excelência técnica e compromisso com o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-10 rounded-[2rem] text-center group"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:glow-blue transition-all duration-500">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 — PROJECT PREVIEW */}
      <section id="projetos" className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Projetos em destaque</h2>
              <p className="text-text-muted text-lg md:text-xl font-medium">
                Plataformas escaláveis e sistemas inteligentes desenvolvidos pela nossa equipe.
              </p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent hidden md:block mb-6 mx-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 6 — PROCESS SECTION */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Como trabalhamos</h2>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Um processo estruturado para garantir a entrega de valor em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block -translate-y-1/2" />
            
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-[2rem] text-center relative z-10 glass-hover"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-xs font-black text-secondary uppercase tracking-[0.2em] mb-2">Passo 0{index + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 — FINAL CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                Vamos transformar sua ideia em <span className="text-gradient">tecnologia?</span>
              </h2>
              <p className="text-text-muted text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
                Nossa equipe está pronta para ajudar você a construir a próxima grande plataforma inteligente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contato"
                  className="w-full sm:w-auto px-12 py-6 bg-primary text-white font-black rounded-2xl hover:glow-purple hover:scale-105 transition-all shadow-2xl shadow-primary/20 group"
                >
                  Solicitar projeto
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-12 py-6 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6 text-secondary" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
