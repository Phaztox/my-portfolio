// components/editorial/EditorialLayout.tsx — root shell for the editorial design.
import { ReactNode, useEffect } from 'react';
import Seo from '@/components/Seo';
import Masthead from './Masthead';
import Colophon from './Colophon';
import { editorialFontClass } from './fonts';
import { defaultDesign } from '@/data/designs';

interface EditorialLayoutProps {
  title?: string;
  description?: string;
  seoType?: 'website' | 'article';
  publishedTime?: string;
  children: ReactNode;
}

export default function EditorialLayout({
  title,
  description,
  seoType,
  publishedTime,
  children,
}: EditorialLayoutProps) {
  // `data-design` on the wrapper is what scopes the tokens (and it is present
  // in the server HTML, so there is no flash). Mirroring it onto <html> is
  // only so the root background matches during overscroll.
  useEffect(() => {
    document.documentElement.dataset.design = 'editorial';
    return () => {
      delete document.documentElement.dataset.design;
    };
  }, []);

  return (
    <>
      <Seo
        title={title}
        description={description}
        type={seoType}
        publishedTime={publishedTime}
        // While classic is the default, these pages stay out of the index so
        // the two designs don't compete for the same searches. Flipping
        // `defaultDesign` in data/designs.ts swaps which set is indexed.
        noindex={defaultDesign !== 'editorial'}
      />

      <div
        data-design="editorial"
        className={`${editorialFontClass} min-h-screen bg-paper text-ink antialiased`}
      >
        <a
          href="#main"
          className="ed-label sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-3 focus:left-3 focus:bg-accent focus:text-accent-contrast focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        <Masthead />
        <main id="main">{children}</main>
        <Colophon />
      </div>
    </>
  );
}
