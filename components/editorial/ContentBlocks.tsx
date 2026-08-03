// components/editorial/ContentBlocks.tsx
// Editorial rendering of the shared block model (data/content.ts).
import Image from 'next/image';
import type { ContentBlock } from '@/data/content';
import { renderInline } from '@/components/renderInline';
import { Reveal } from './Reveal';

const strong = 'font-semibold text-accent';

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'prose':
      return (
        <>
          {block.heading && <h3 className="ed-heading text-ink mb-4">{block.heading}</h3>}
          <div className="space-y-4 max-w-[64ch]">
            {block.body.map((paragraph, i) => (
              <p
                key={i}
                className={`ed-body text-ink-soft ${
                  block.dropcap && i === 0
                    ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[3.5em] first-letter:leading-[0.75] first-letter:font-extrabold first-letter:text-accent first-letter:font-[family-name:var(--font-display)]'
                    : ''
                }`}
              >
                {renderInline(paragraph, strong)}
              </p>
            ))}
          </div>
        </>
      );

    case 'listCards':
      return (
        <>
          {block.heading && <h3 className="ed-heading text-ink mb-5">{block.heading}</h3>}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {block.cards.map((card) => (
              <div key={card.title} className="border-t border-ink pt-4">
                <h4 className="ed-label text-accent mb-3">{card.title}</h4>
                <ul className="space-y-2 list-none">
                  {card.items.map((item) => (
                    <li key={item} className="ed-body text-ink-soft flex gap-3">
                      <span aria-hidden="true" className="text-ink-muted shrink-0">
                        ·
                      </span>
                      <span>{renderInline(item, strong)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      );

    case 'tiles':
      return (
        <>
          {block.heading && <h3 className="ed-heading text-ink mb-5">{block.heading}</h3>}
          <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
            {block.tiles.map((tile) => (
              <div key={tile.title} className="bg-paper p-5">
                <h4 className="ed-heading text-ink text-[1.05rem] mb-1.5">{tile.title}</h4>
                <p className="ed-meta text-ink-muted leading-relaxed">{tile.desc}</p>
              </div>
            ))}
          </div>
        </>
      );

    case 'chips':
      return (
        <>
          {block.heading && <h3 className="ed-heading text-ink mb-5">{block.heading}</h3>}
          <ul className="flex flex-wrap gap-2 list-none">
            {block.items.map((item) => (
              <li key={item} className="ed-label text-ink border border-rule px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </>
      );

    case 'callout':
      return (
        <div className="border-l-2 border-accent pl-5 md:pl-6">
          {block.heading && <h3 className="ed-label text-accent mb-3">{block.heading}</h3>}
          <div className="space-y-4 max-w-[62ch]">
            {block.body.map((paragraph, i) => (
              <p key={i} className="ed-body text-ink-soft">
                {renderInline(paragraph, strong)}
              </p>
            ))}
          </div>
        </div>
      );

    case 'image':
      return (
        <figure
          className={block.wide ? 'md:-mx-[16%] lg:-mx-[28%]' : ''}
          style={block.maxWidth ? { maxWidth: block.maxWidth, marginInline: 'auto' } : undefined}
        >
          <div className="border border-rule overflow-hidden bg-surface">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes={
                block.maxWidth
                  ? `(max-width: 768px) 100vw, ${block.maxWidth}px`
                  : '(max-width: 768px) 100vw, 60vw'
              }
              className="w-full h-auto"
            />
          </div>
          {block.caption && (
            <figcaption className="ed-meta text-ink-muted mt-3">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'quote':
      return (
        <figure className="border-t-2 border-ink pt-6">
          <blockquote>
            <p className="ed-lede text-ink italic max-w-[42ch]">
              &ldquo;{renderInline(block.text, strong)}&rdquo;
            </p>
          </blockquote>
          {block.attribution && (
            <figcaption className="ed-label text-accent mt-4">{block.attribution}</figcaption>
          )}
          {block.body && (
            <p className="ed-body text-ink-soft mt-5 max-w-[62ch]">
              {renderInline(block.body, strong)}
            </p>
          )}
        </figure>
      );
  }
}

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => (
        <Reveal key={i} delay={Math.min(i, 4) * 0.05}>
          <div className="py-8 md:py-10 border-t border-rule first:border-t-0 first:pt-0">
            <Block block={block} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
