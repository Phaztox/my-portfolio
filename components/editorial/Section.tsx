// components/editorial/Section.tsx
//
// A section is a heavy rule, a marker column and a content column. On desktop
// the marker sticks below the masthead for as long as its section is on
// screen, so the number and title of wherever you are stay readable while you
// scroll the content beside them. On mobile it becomes a plain header block.
import Link from 'next/link';
import { ReactNode } from 'react';
import { DrawnRule } from './Reveal';

interface SectionProps {
  /** Two-digit index, e.g. "01". */
  index: string;
  title: string;
  /** Short line under the title. */
  note?: string;
  /** Optional link in the marker column, e.g. "All work". */
  action?: { label: string; href: string };
  children: ReactNode;
}

export default function Section({ index, title, note, action, children }: SectionProps) {
  return (
    <section className="ed-shell pt-14 md:pt-24">
      <DrawnRule heavy />

      <div className="ed-grid">
        {/* Marker */}
        <div className="col-span-6 md:col-span-3">
          <div className="md:sticky md:top-24 pt-5 md:pt-8 pb-2 md:pb-8">
            <p className="ed-index" aria-hidden="true">
              {index}
            </p>
            <h2 className="ed-heading text-ink mt-1 md:mt-2">{title}</h2>
            {note && <p className="ed-meta text-ink-muted mt-3 max-w-[26ch]">{note}</p>}
            {action && (
              <Link
                href={action.href}
                className="ed-link ed-label text-ink-muted inline-block mt-4 md:mt-5"
              >
                {action.label} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="col-span-6 md:col-span-9 pb-2 md:pt-8 md:pb-8">{children}</div>
      </div>
    </section>
  );
}
