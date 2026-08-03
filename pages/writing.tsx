// pages/writing.tsx - editorial design, blog index.
import Link from 'next/link';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import Section from '@/components/editorial/Section';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { publishedPosts, draftPosts, postHref } from '@/data/posts';

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
    : undefined;

export default function EditorialWriting() {
  const published = publishedPosts;
  const drafts = draftPosts;

  return (
    <EditorialLayout
      title="Writing"
      description="Essays on the things I fell down a rabbit hole about: video codecs, music, and the mathematics hiding inside games."
    >
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            04 <span className="text-accent">/</span> Writing
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="ed-display text-ink">
            Rabbit <span className="text-accent">holes</span>
          </h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">
              Every so often something small turns out to have an absurd amount of engineering
              underneath it, and I lose a month to reading about it. These are the write-ups.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Published                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section index="01" title="Published" note="Actually finished.">
        <ul className="list-none">
          {published.map((post, i) => (
            <Reveal as="li" key={post.title} delay={i * 0.06}>
              <Link
                href={postHref(post.slug)}
                className="ed-row group block py-7 md:py-9 border-t border-rule"
              >
                {post.date && <p className="ed-meta text-ink-muted mb-3">{formatDate(post.date)}</p>}
                <h3 className="ed-title text-ink transition-colors group-hover:text-accent max-w-[24ch] md:max-w-[20ch]">
                  {post.title}
                </h3>
                <p className="ed-body text-ink-soft mt-4 max-w-[62ch]">{post.excerpt}</p>
                <span className="ed-label text-ink-muted inline-flex items-center gap-2 mt-5 transition-colors group-hover:text-accent">
                  Read
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <hr className="ed-rule" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* In progress                                                        */}
      {/* ---------------------------------------------------------------- */}
      {drafts.length > 0 && (
        <Section index="02" title="In progress" note="Started, not finished.">
          <ul className="list-none">
            {drafts.map((post, i) => (
              <Reveal as="li" key={post.title} delay={i * 0.06}>
                <div className="py-7 md:py-8 border-t border-rule">
                  <p className="ed-label text-ink-muted mb-3">Work in progress</p>
                  <h3 className="ed-heading text-ink-soft max-w-[38ch]">{post.title}</h3>
                  <p className="ed-body text-ink-muted mt-3 max-w-[62ch]">{post.excerpt}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <hr className="ed-rule" />
        </Section>
      )}
    </EditorialLayout>
  );
}
