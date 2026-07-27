// data/sections.ts — the homepage sections, in scroll order.
// Shared by the page itself, the navbar and the side indicator so the ids,
// labels and ordering can never drift apart.

export interface Section {
  id: string;
  /** Shown in the side indicator tooltip. */
  label: string;
  /** Shown in the navbar; omitted for sections the navbar doesn't link to. */
  navLabel?: string;
}

export const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About', navLabel: 'About Me' },
  { id: 'resume', label: 'Studies', navLabel: 'Studies' },
  { id: 'projects', label: 'Projects', navLabel: 'Projects' },
  { id: 'passions', label: 'Passions' },
  { id: 'blog', label: 'Blog' },
];

export const sectionIds = sections.map((s) => s.id);

export const sectionIndex = (id: string) => sectionIds.indexOf(id);
