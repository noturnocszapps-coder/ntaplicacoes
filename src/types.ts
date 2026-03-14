import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  tag: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Tech {
  name: string;
  description: string;
  icon: string;
}
