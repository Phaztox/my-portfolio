// components/editorial/fonts.ts
// Kept in its own module so Next only preloads these faces on pages that
// actually render the editorial design — the classic pages stay on Inter alone.
import { Archivo, Newsreader, JetBrains_Mono } from 'next/font/google';

/** Display + UI. A neo-grotesque with a wide weight range for the big type. */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

/** Long-form prose. Editorial serif — this is what the writing is set in. */
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

/** Metadata: section indices, dates, axis-style labels, tech tags. */
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const editorialFontClass = `${archivo.variable} ${newsreader.variable} ${jetbrainsMono.variable}`;
