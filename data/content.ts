// data/content.ts - a small block vocabulary for long-form pages.
//
// Passion pages and blog posts are written as arrays of these blocks, so the
// same text can be rendered by any design. Each design supplies its own
// renderer; the content never has to know how it will look.
//
// Inline emphasis inside `body` and `text` uses **double asterisks**. That is
// the only markup - see `renderInline` in the design renderers.

export type ContentBlock =
  /**
   * A heading (optional) followed by one or more paragraphs.
   * `dropcap` enlarges the first letter of the first paragraph - used to open
   * a long article.
   */
  | { type: 'prose'; heading?: string; body: string[]; dropcap?: boolean }
  /** A grid of cards, each a title over a bullet list. */
  | { type: 'listCards'; heading?: string; cards: { title: string; items: string[] }[] }
  /** A grid of small tiles, each a term over a one-line gloss. */
  | { type: 'tiles'; heading?: string; tiles: { title: string; desc: string }[] }
  /** A row of short labels. */
  | { type: 'chips'; heading?: string; items: string[] }
  /** A pull quote, optionally with a paragraph of commentary under it. */
  | { type: 'quote'; text: string; attribution?: string; body?: string }
  /** A boxed aside that should stand out from the surrounding prose. */
  | { type: 'callout'; heading?: string; body: string[] }
  /**
   * A figure. `src` is a path under /public. `width`/`height` are the image's
   * real pixel dimensions - next/image needs them to reserve space and avoid
   * layout shift while loading.
   *
   * `alt` describes the image for screen readers and is required. `caption` is
   * the visible line underneath, and is for the reader.
   */
  | {
      type: 'image';
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
      /** Let the figure break out wider than the reading column. */
      wide?: boolean;
      /**
       * Cap the rendered width in px, and centre it. Use for tall portrait
       * shots that would otherwise dominate the column, and for small
       * screenshots that would look soft if stretched past their native size.
       */
      maxWidth?: number;
    };
