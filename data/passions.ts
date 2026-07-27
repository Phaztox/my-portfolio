// data/passions.ts — cards in the Passions section + the navbar dropdown.
import { palette } from './site';

export interface Passion {
  title: string;
  desc: string;
  icon: string;
  color: string;
  href: string;
}

export const passions: Passion[] = [
  {
    title: 'Gaming',
    desc: 'Gaming is my ultimate arena for min-maxing builds and dominating the meta with a programming-driven mindset. The thrill is flawlessly executing engineered strategies.',
    icon: '🎮',
    color: palette.pink,
    href: '/passions/gaming',
  },
  {
    title: 'Music',
    desc: 'From classical piano to electronic music production. As an 8-year former musician, music holds an important place in my life, providing inspiration and outlet.',
    icon: '🎵',
    color: palette.orange,
    href: '/passions/music',
  },
  {
    title: 'Asian Culture',
    desc: 'Japanese and Chinese traditions & media. I am particularly attracted by how they blend history with modernity.',
    icon: '🏮',
    color: palette.purple,
    href: '/passions/asian-culture',
  },
  {
    title: 'Stats & Logic',
    desc: 'Mathematics, optimization, and AI models. I enjoy tackling complex problems and finding efficient solutions.',
    icon: '📊',
    color: palette.pink,
    href: '/passions/stats-and-logic',
  },
];
