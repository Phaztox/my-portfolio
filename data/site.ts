// data/site.ts - single source of truth for identity, links and SEO defaults.

export const site = {
  name: 'Antonin Gabet',
  initials: 'AG',
  role: 'Informatics Student | Data & AI Enthusiast | Problem Solver',
  description:
    'Portfolio of Antonin Gabet - engineering student at EFREI Paris specialising in Data Science and Artificial Intelligence. Projects, studies, writing and passions.',
  url: 'https://antonin-gabet-portfolio.vercel.app',
  email: 'antonin.gabet@efrei.net',
  github: 'https://github.com/Phaztox',
  linkedin: 'https://linkedin.com/in/antonin-gabet-42265b183',
  locale: 'en_US',
} as const;

export const cvLinks = {
  english:
    'https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/CV_Antonin_Lechen_GABET_EN.pdf',
  french:
    'https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/CV_Antonin_Lechen_GABET_FR.pdf',
} as const;

/** Brand palette, mirrored from the `--color-pastel-*` tokens in globals.css. */
export const palette = {
  pink: '#F7A8B8',
  orange: '#FFB347',
  purple: '#CBB3EE',
  sky: '#87CEEB',
  mint: '#98FB98',
} as const;
