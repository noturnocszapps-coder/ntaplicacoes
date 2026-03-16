import { 
  Car, Truck, PartyPopper, Zap, BarChart3, Cloud, 
  Globe, Cpu, MessageSquare, Layout, Link2, Settings,
  Bot, Repeat, UserPlus, PieChart, Smartphone, ClipboardCheck,
  Search, PenTool, Code2, Rocket
} from 'lucide-react';
import { Project, NavLink, Feature, Tech } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'driverdash',
    title: 'DriverDash',
    tag: 'Mobilidade & IA',
    description: 'Gestão financeira inteligente para motoristas. Algoritmos de previsão de ganhos e otimização de despesas.',
    link: 'https://driverdash.ntaplicacoes.com.br',
    icon: Car,
  },
  {
    id: 'rotalucro',
    title: 'Rota do Lucro',
    tag: 'Logística & Dados',
    description: 'Análise preditiva de lucro para logística. Simulação de rotas com IA para máxima rentabilidade.',
    link: 'https://rotadolucro.ntaplicacoes.com.br/',
    icon: Truck,
  },
  {
    id: 'roxou',
    title: 'Roxou',
    tag: 'Entretenimento',
    description: 'Plataforma de eventos com recomendação personalizada. Otimização de busca por geolocalização.',
    link: 'https://roxou.com.br',
    icon: PartyPopper,
  },
];

export const SERVICES = [
  {
    title: 'Desenvolvimento de Sites',
    description: 'Websites institucionais modernos, rápidos e otimizados para conversão.',
    icon: Globe,
  },
  {
    title: 'Sistemas Personalizados',
    description: 'Softwares sob medida para resolver problemas específicos do seu negócio.',
    icon: Cpu,
  },
  {
    title: 'Automação com IA',
    description: 'Integramos inteligência artificial para automatizar tarefas repetitivas.',
    icon: Bot,
  },
  {
    title: 'Chatbots Inteligentes',
    description: 'Atendimento 24/7 com IA que entende e resolve as dúvidas dos seus clientes.',
    icon: MessageSquare,
  },
  {
    title: 'Landing Pages',
    description: 'Páginas de alta conversão focadas em transformar visitantes em leads.',
    icon: Layout,
  },
  {
    title: 'Integrações e APIs',
    description: 'Conectamos seus sistemas para um fluxo de dados contínuo e eficiente.',
    icon: Link2,
  },
];

export const AI_BENEFITS = [
  { title: 'Automação de Atendimento', icon: Bot },
  { title: 'Automação de Processos', icon: Repeat },
  { title: 'Captura de Leads', icon: UserPlus },
  { title: 'Dashboards Inteligentes', icon: PieChart },
  { title: 'Integração WhatsApp', icon: Smartphone },
  { title: 'Organização de Operações', icon: ClipboardCheck },
];

export const PROCESS_STEPS = [
  { title: 'Diagnóstico', description: 'Entendemos seus desafios e objetivos de negócio.', icon: Search },
  { title: 'Planejamento', description: 'Desenhamos a melhor solução técnica e estratégica.', icon: PenTool },
  { title: 'Desenvolvimento', description: 'Construímos sua plataforma com tecnologias de ponta.', icon: Code2 },
  { title: 'Implantação', description: 'Lançamos seu projeto com suporte e monitoramento.', icon: Rocket },
];

export const FEATURES: Feature[] = [
  {
    title: 'Tecnologia Moderna',
    description: 'Utilizamos as ferramentas mais atuais do mercado para garantir performance e segurança.',
    icon: Zap,
  },
  {
    title: 'Design Personalizado',
    description: 'Interfaces exclusivas focadas na melhor experiência para o seu usuário final.',
    icon: BarChart3,
  },
  {
    title: 'Soluções Escaláveis',
    description: 'Sistemas preparados para crescer junto com a sua empresa sem perda de qualidade.',
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
  { name: 'Início', path: '/' },
  { name: 'Quem Somos', path: '/quem-somos' },
  { name: 'Privacidade', path: '/politica-de-privacidade' },
  { name: 'Contato', path: '/contato' },
];
