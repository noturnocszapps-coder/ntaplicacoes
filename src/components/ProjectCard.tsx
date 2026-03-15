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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative glass rounded-[2.5rem] p-10 glass-hover shadow-2xl hover:glow-purple hover:-translate-y-3"
    >
      <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <ExternalLink className="w-6 h-6 text-secondary" />
      </div>
      
      <div className="flex items-center space-x-6 mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-700 group-hover:glow-purple">
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
        </div>
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-2 block">
            {project.tag}
          </span>
          <h3 className="text-3xl font-black text-white font-display">{project.title}</h3>
        </div>
      </div>

      <p className="text-text-muted text-lg leading-relaxed mb-12 group-hover:text-white transition-colors duration-500 font-medium">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-8 py-5 text-sm font-black text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group/btn uppercase tracking-widest"
      >
        Acessar plataforma
        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
      </a>
    </motion.div>
  );
};
