import { Car, Truck, PartyPopper, Zap, BarChart3, Cloud } from 'lucide-react';
import { Project, NavLink, Feature, Tech } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'driverdash',
    title: 'DriverDash',
    tag: 'Mobilidade',
    description: 'Gestão financeira para motoristas de aplicativo. Controle faturamento, combustível, despesas e relatórios inteligentes.',
    link: 'https://driverdash.ntaplicacoes.com.br',
    icon: Car,
  },
  {
    id: 'rotalucro',
    title: 'RotaLucro',
    tag: 'Logística',
    description: 'Controle de lucro para entregadores e logística. Simule rotas, acompanhe custos e descubra a rentabilidade real das entregas.',
    link: 'https://rotadolucro.ntaplicacoes.com.br',
    icon: Truck,
  },
  {
    id: 'roxou',
    title: 'Roxou',
    tag: 'Entretenimento',
    description: 'Plataforma digital e guia de eventos e entretenimento. Descubra festas, bares e eventos da cidade.',
    link: 'https://roxou.com.br',
    icon: PartyPopper,
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Performance',
    description: 'Aplicações ultra rápidas, construídas com tecnologias modernas e arquitetura escalável.',
    icon: Zap,
  },
  {
    title: 'Inteligência de Dados',
    description: 'Relatórios e métricas que ajudam profissionais a tomar decisões melhores.',
    icon: BarChart3,
  },
  {
    title: 'Infraestrutura Cloud',
    description: 'Deploy global com tecnologias modernas como Vercel, Supabase e Firebase.',
    icon: Cloud,
  },
];

export const TECH_STACK: Tech[] = [
  { name: 'React', description: 'Biblioteca UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', description: 'Build Tool', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Supabase', description: 'Backend as a Service', icon: 'https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo.svg' },
  { name: 'Firebase', description: 'Plataforma Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Vercel', description: 'Deployment', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'TailwindCSS', description: 'Styling Engine', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
];

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Quem Somos', path: '/quem-somos' },
  { name: 'Política de Privacidade', path: '/politica-de-privacidade' },
  { name: 'Contato', path: '/contato' },
];
