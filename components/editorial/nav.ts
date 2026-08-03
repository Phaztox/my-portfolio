// components/editorial/nav.ts - the editorial design's information architecture.
//
// About sits first: the site is meant to read as a person before it reads as
// a CV.

export interface EditorialNavItem {
  /** Two-digit index shown in the masthead and on section heads. */
  index: string;
  label: string;
  href: string;
  /** Sub-heading used on the destination page. */
  description: string;
}

export const editorialNav: EditorialNavItem[] = [
  {
    index: '01',
    label: 'About',
    href: '/about',
    description: 'Who I am when I am not being a line on a CV.',
  },
  {
    index: '02',
    label: 'Work',
    href: '/work',
    description: 'Internships and the projects worth showing.',
  },
  {
    index: '03',
    label: 'Studies',
    href: '/studies',
    description: 'Where the training came from, and what it left me with.',
  },
  {
    index: '04',
    label: 'Writing',
    href: '/writing',
    description: 'Things I got curious about and could not leave alone.',
  },
  {
    index: '05',
    label: 'Passions',
    href: '/passions',
    description: 'The things that shaped how I think about everything else.',
  },
];
