// data/designs.ts — the two designs the site can be rendered in.
//
// Content lives in the other data/ files and is shared. A design decides only
// how that content looks. Both are always reachable, so they can be compared
// on real devices; `defaultDesign` decides which one `/` serves.

export type DesignId = 'classic' | 'editorial';

export interface Design {
  id: DesignId;
  /** Shown in the switcher. */
  name: string;
  /** One line describing the design, for the switcher tooltip. */
  tagline: string;
  /** Where this design's homepage lives. */
  home: string;
}

export const designs: Record<DesignId, Design> = {
  classic: {
    id: 'classic',
    name: 'Classic',
    tagline: 'Pastel gradients, full-screen sections',
    home: '/classic',
  },
  editorial: {
    id: 'editorial',
    name: 'Editorial',
    tagline: 'Ink on paper, index and sub-pages',
    home: '/',
  },
};

export const designList = Object.values(designs);

/**
 * Which design `/` serves. Flip this to 'editorial' to promote the redesign —
 * the other design stays reachable at its own route either way.
 */
export const defaultDesign: DesignId = 'editorial';

/** Maps a path to the design that renders it. */
export function designForPath(path: string): DesignId {
  return path === '/classic' || path.startsWith('/classic/') ? 'classic' : 'editorial';
}

/** The counterpart route, so the switcher knows where to send you. */
export function otherDesign(current: DesignId): Design {
  return current === 'classic' ? designs.editorial : designs.classic;
}
