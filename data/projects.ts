// data/projects.ts — cards shown in the "Featured Projects" section.
import { palette } from './site';

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: 'AI Trash Bin Detector',
    desc: 'Machine learning model detecting trash bin filling from pictures to reduce appearance of wild dumps.',
    tech: ['Python', 'OpenCV', 'Pillow'],
    link: 'https://github.com/Demonta0109/Projet-MasterCamp/tree/main',
    color: palette.pink,
  },
  {
    title: 'ANSSI Alerts Analysis',
    desc: 'Automated ANSSI vulnerability analysis: CVE extraction, enrichment (MITRE/FIRST), ML insights, critical email alerts.',
    tech: ['Python', 'KMeans', 'PCA'],
    link: 'https://github.com/Alexandre-gng/ANSSI_alerts',
    color: palette.orange,
  },
  {
    title: 'Connect 4 Algorithm',
    desc: 'Advanced algorithm research for optimizing gameplay in Connect 4 using Minimax and Alpha-Beta pruning.',
    tech: ['Python', 'Minimax', 'Game Theory'],
    link: 'https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/Connect-4_FinalVersion.py',
    color: palette.purple,
  },
];
