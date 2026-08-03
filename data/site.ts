// data/site.ts - single source of truth for identity, links and SEO defaults.

export const site = {
  name: 'Antonin Gabet',
  initials: 'AG',
  /**
   * One line summing you up. This is the subtitle on every social preview
   * card, so it is what someone sees when a link to the site is pasted into
   * LinkedIn, Discord or Slack. Keep it short enough to read at a glance.
   */
  role: 'Data & AI engineering student at EFREI Paris. Probably optimising something.',
  /** Default meta description: what search results show under the title. */
  description:
    'Antonin Gabet - data science and AI engineering student at EFREI Paris. Work, writing, and the things outside the CV that shaped how I think.',
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
