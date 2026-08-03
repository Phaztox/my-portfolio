// components/renderInline.tsx
// The only inline markup the content model supports: **emphasis**.
// Kept dependency-free deliberately - a markdown parser would be far more
// machinery than one delimiter needs.
import { Fragment, ReactNode } from 'react';

/**
 * Splits on `**...**` and wraps the enclosed runs in <strong>.
 *
 * @param text      source string
 * @param strongClass classes applied to each emphasised run
 */
export function renderInline(text: string, strongClass = ''): ReactNode {
  // Capturing group keeps the delimited runs in the split output, so odd
  // indices are always the emphasised ones.
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={strongClass}>
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
