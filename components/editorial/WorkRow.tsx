// components/editorial/WorkRow.tsx
// One row of the unified work list. A project with its own page links inward
// through next/link; one without links out to its repo; experience does not
// link at all - so the row renders as three different wrappers.
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { WorkItem } from '@/data/work';

function RowBody({ item }: { item: WorkItem }) {
  return (
    <>
      <div className="col-span-6 md:col-span-2">
        <p className="ed-label text-accent">
          {item.ongoing && (
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle animate-pulse-soft"
            />
          )}
          {item.label}
        </p>
        {item.meta && <p className="ed-meta text-ink-muted mt-1.5">{item.meta}</p>}
      </div>

      <div className="col-span-6 md:col-span-3">
        <h3 className="ed-heading text-ink transition-colors group-hover:text-accent">
          {item.title}
          {item.subtitle && (
            <>
              <span className="text-ink-muted"> · </span>
              <span className="text-ink-soft">{item.subtitle}</span>
            </>
          )}
        </h3>
        <p className="ed-body text-ink-soft mt-2 md:hidden">{item.desc}</p>
      </div>

      <p className="hidden md:block ed-body text-ink-soft md:col-span-2">{item.desc}</p>

      <ul className="col-span-6 md:col-span-2 flex flex-wrap gap-x-2 gap-y-1 list-none">
        {item.tags.slice(0, 3).map((tag) => (
          <li key={tag} className="ed-meta text-ink-muted whitespace-nowrap">
            {tag}
          </li>
        ))}
      </ul>
    </>
  );
}

const shared =
  'ed-row group grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-2 items-baseline py-6 md:py-8 border-t border-rule';

export default function WorkRow({ item }: { item: WorkItem }): ReactNode {
  if (item.href && item.internal) {
    return (
      <Link href={item.href} className={shared}>
        <RowBody item={item} />
      </Link>
    );
  }

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={shared}>
        <RowBody item={item} />
      </a>
    );
  }

  return (
    <div className={shared}>
      <RowBody item={item} />
    </div>
  );
}
