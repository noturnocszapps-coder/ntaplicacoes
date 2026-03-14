import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, FEATURES, TECH_STACK } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-screen pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-xl shadow-emerald-500/5"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Tecnologia de Ponta</span>
              <ChevronRight className="w-3 h-3 ml-1" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-10 leading-[0.9] lg:leading-[0.85]">
              Tecnologia que transforma <span className="text-gradient">ideias</span> em plataformas <span className="text-gradient">digitais</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Criamos aplicações web modernas para mobilidade, logística e entretenimento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#projetos"
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-black rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all flex items-center justify-center group"
              >
                Conhecer Projetos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contato"
                className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Entrar em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Nossos Projetos</h2>
              <p className="text-zinc-400 text-lg font-medium">
                Plataformas desenvolvidas com foco em experiência do usuário e escalabilidade.
              </p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent hidden md:block mb-6 mx-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Por que escolher a NT Aplicações</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
              Combinamos design de alta fidelidade com engenharia de software robusta.
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
                  className="glass rounded-3xl p-10 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full -mr-48 -mt-48" />
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                  Construído com o que há de <span className="text-gradient">melhor</span> no mercado
                </h2>
                <div className="space-y-6">
                  {[
                    'Desenvolvimento ágil e iterativo',
                    'Foco total em performance e SEO',
                    'Segurança e escalabilidade nativas',
                    'Interfaces intuitivas e modernas'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {TECH_STACK.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass rounded-2xl p-6 flex flex-col items-center text-center group"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-bold text-sm mb-1">{tech.name}</h4>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-400/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Pronto para transformar sua ideia em um <span className="text-gradient">produto digital?</span>
              </h2>
              <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                Nossa equipe está pronta para ajudar você a construir a próxima grande plataforma.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center px-12 py-6 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 hover:scale-105 transition-all shadow-2xl shadow-emerald-500/20 group"
              >
                Entre em contato
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
