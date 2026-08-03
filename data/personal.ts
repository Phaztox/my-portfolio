// data/personal.ts - the human touches.
//
// Small, quiet details rather than a personality section. Everything here is
// optional: anything left empty simply does not render.

/**
 * Cycles under the name on the homepage. Each entry completes the sentence
 * "probably optimising ___".
 *
 * Keep them concrete and true - the line works because a reader can picture
 * each one, and because every entry matches something else on the site.
 */
export const optimisingThings: string[] = [
  'an automation pipeline',
  'a game build',
  'an export preset',
  'a spreadsheet',
  'a server feature',
];

/**
 * The "currently" strip in the colophon.
 *
 * WHAT TO PUT HERE
 * Think "what would I tell a friend I'm into this month", not a CV line. It is
 * the one place on the site that dates itself on purpose, which is exactly why
 * it reads as human. Good candidates:
 *
 *   Playing    a game you are actually sinking hours into
 *   Listening  an album, an artist, or a genre you are on at the moment
 *   Reading    a book, a paper, a long article, a manga
 *   Building   what the NAS (or whatever is next) is currently getting
 *   Learning   a language, a framework, a piece of theory
 *
 * HOW TO USE IT
 * Fill in `value` for the rows you want and leave the rest as empty strings.
 * Empty rows disappear, and if every row is empty the whole strip disappears,
 * so it never looks broken or half-finished.
 *
 * Add or rename rows freely - `label` is whatever you type. Two or three
 * filled rows reads better than five.
 *
 * ONE HONEST WARNING
 * A "currently" strip that has not moved in a year is worse than not having
 * one, because it quietly tells the reader the site is abandoned. If you do
 * not think you will touch it every month or two, leave it empty: everything
 * else on the page still works without it.
 */
export interface CurrentlyEntry {
  label: string;
  value: string;
}

export const currently: CurrentlyEntry[] = [
  { label: 'Playing', value: '' },
  { label: 'Listening', value: '' },
  { label: 'Building', value: '' },
];

/** Only the rows you have actually filled in. */
export const activeCurrently = currently.filter((entry) => entry.value.trim().length > 0);

/** A closing line in the colophon. */
export const colophonNote = 'Written in Paris, usually with some music in the headphones.';
