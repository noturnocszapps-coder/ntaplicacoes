import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
    >
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <ExternalLink className="w-5 h-5 text-emerald-500" />
      </div>
      
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-400/20 rounded-2xl flex items-center justify-center group-hover:from-emerald-500 group-hover:to-teal-400 transition-all duration-500">
          <Icon className="w-7 h-7 text-emerald-500 group-hover:text-black transition-colors duration-500" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500/80 mb-1 block">
            {project.tag}
          </span>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <p className="text-zinc-400 text-base leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 group/btn"
      >
        Acessar plataforma
        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};
