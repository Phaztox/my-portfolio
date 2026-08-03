// data/headline.ts - what the homepage leads with, right under the statement.
//
// Three modes are configured below. Change `headlineMode` and the homepage
// swaps what it headlines; nothing else needs touching.
//
//   'availability' - what you are looking for next  (strongest recruiter signal)
//   'role'         - your ongoing or most recent role
//   'studies'      - where you are in your degree
import { site } from './site';
import { experience, currentRole } from './experience';
import { timeline } from './timeline';

export type HeadlineMode = 'availability' | 'role' | 'studies';

/** Change this one line to switch what the homepage leads with. */
export const headlineMode: HeadlineMode = 'availability';

/** Normalised shape, so any design can render any mode the same way. */
export interface HeadlineContent {
  /** Small caps label, e.g. "Available". */
  label: string;
  /** Right-aligned metadata, e.g. a date window. */
  meta: string;
  title: string;
  body: string;
  tags?: string[];
  cta?: { label: string; href: string };
  /** Draws the pulsing dot. Only for things that are genuinely live. */
  live?: boolean;
}

/** What you are looking for next. Edit this when the search changes. */
export const availability = {
  label: 'Available',
  window: 'Mar - May 2027',
  title: 'Final-year internship, 6 months',
  body: 'Looking for a 6-month end-of-studies internship in data science or AI. I can start any time between mid-March and the end of May 2027.',
  tags: ['Data science', 'Machine learning', 'Python', 'Île-de-France or remote'],
};

export function resolveHeadline(mode: HeadlineMode = headlineMode): HeadlineContent | undefined {
  if (mode === 'availability') {
    return {
      label: availability.label,
      meta: availability.window,
      title: availability.title,
      body: availability.body,
      tags: availability.tags,
      cta: { label: 'Get in touch', href: `mailto:${site.email}` },
      live: true,
    };
  }

  if (mode === 'studies') {
    const study = timeline[0];
    if (!study) return undefined;

    return {
      label: 'Studying',
      meta: study.year,
      title: study.institution ? `${study.title} · ${study.institution}` : study.title,
      body: study.description,
      tags: study.courses?.slice(0, 4),
      live: true,
    };
  }

  const role = currentRole ?? experience[0];
  if (!role) return undefined;

  return {
    label: currentRole ? 'Now' : 'Most recent',
    meta: role.period,
    title: `${role.role} · ${role.organisation}`,
    body: role.summary,
    tags: role.stack,
    live: Boolean(currentRole),
  };
}
