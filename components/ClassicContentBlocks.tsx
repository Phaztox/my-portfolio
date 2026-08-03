// components/ClassicContentBlocks.tsx
// Classic (pastel) rendering of the shared block model (data/content.ts).
import Image from 'next/image';
import type { ContentBlock } from '@/data/content';
import { renderInline } from './renderInline';

const strong = 'font-bold text-pink-600 dark:text-pink-300';

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'prose':
      return (
        <>
          {block.heading && (
            <h3 className="text-2xl font-semibold mb-4 text-ink">{block.heading}</h3>
          )}
          {block.body.map((paragraph, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed text-ink-soft mb-4 last:mb-0 ${
                block.dropcap && i === 0
                  ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-purple-600 dark:first-letter:text-purple-400'
                  : ''
              }`}
            >
              {renderInline(paragraph, strong)}
            </p>
          ))}
        </>
      );

    case 'listCards':
      return (
        <>
          {block.heading && (
            <h3 className="text-2xl font-semibold mb-4 text-ink">{block.heading}</h3>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {block.cards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-lg bg-gray-100/60 dark:bg-gray-700/50"
              >
                <h4 className="font-semibold mb-3 text-xl text-pink-600 dark:text-pink-300">
                  {card.title}
                </h4>
                <ul className="space-y-2 text-sm text-ink-soft">
                  {card.items.map((item) => (
                    <li key={item}>• {renderInline(item, strong)}</li>
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
          {block.heading && (
            <h3 className="text-2xl font-semibold mb-4 text-ink">{block.heading}</h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {block.tiles.map((tile) => (
              <div
                key={tile.title}
                className="p-4 rounded-lg border shadow-md dark:shadow-lg bg-white/90 dark:bg-gray-800/80 border-gray-200/60 dark:border-gray-600/50"
              >
                <h4 className="font-semibold mb-2 text-pink-600 dark:text-pink-300">
                  {tile.title}
                </h4>
                <p className="text-sm text-ink-soft">{tile.desc}</p>
              </div>
            ))}
          </div>
        </>
      );

    case 'chips':
      return (
        <>
          {block.heading && (
            <h3 className="text-2xl font-semibold mb-4 text-ink">{block.heading}</h3>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {block.items.map((item) => (
              <div
                key={item}
                className="p-3 text-center rounded-lg border shadow-md dark:shadow-lg bg-white/90 dark:bg-gray-800/80 border-gray-200/60 dark:border-gray-600/50"
              >
                <span className="font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </>
      );

    case 'callout':
      return (
        <div className="p-6 rounded-lg border-l-4 border-pink-500 dark:border-pink-400 bg-pink-50/70 dark:bg-gray-700/30">
          {block.heading && (
            <h3 className="font-semibold mb-2 text-pink-700 dark:text-pink-300">{block.heading}</h3>
          )}
          {block.body.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft mb-3 last:mb-0">
              {renderInline(paragraph, strong)}
            </p>
          ))}
        </div>
      );

    case 'image':
      return (
        <figure
          style={block.maxWidth ? { maxWidth: block.maxWidth, marginInline: 'auto' } : undefined}
        >
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200/60 dark:border-gray-600/50">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes={
                block.maxWidth
                  ? `(max-width: 768px) 100vw, ${block.maxWidth}px`
                  : '(max-width: 768px) 100vw, 800px'
              }
              className="w-full h-auto"
            />
          </div>
          {block.caption && (
            <figcaption className="text-sm text-ink-muted mt-3 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'quote':
      return (
        <blockquote className="p-6 rounded-lg border-l-4 border-pink-500 dark:border-pink-400 bg-gradient-to-r from-pink-100 to-red-100 dark:bg-none dark:bg-gray-700/30">
          <p className="font-semibold mb-2 text-pink-700 dark:text-pink-300">
            &ldquo;{block.text}&rdquo;
            {block.attribution && <span className="font-normal"> - {block.attribution}</span>}
          </p>
          {block.body && <p className="text-sm text-ink-soft">{block.body}</p>}
        </blockquote>
      );
  }
}

export default function ClassicContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, i) => (
        <div key={i}>
          <Block block={block} />
        </div>
      ))}
    </div>
  );
}
