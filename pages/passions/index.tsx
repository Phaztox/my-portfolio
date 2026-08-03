// pages/passions.tsx - editorial design, passions index.
import Link from 'next/link';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import Section from '@/components/editorial/Section';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { passions, passionHref } from '@/data/passions';

export default function EditorialPassions() {
  return (
    <EditorialLayout
      title="Passions"
      description="Gaming, music, Asian culture and the pleasure of statistics: the things outside the CV that shaped how I think."
    >
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            05 <span className="text-accent">/</span> Passions
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="ed-display text-ink">
            Outside the <span className="text-accent">CV</span>
          </h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">
              Things I spend real time on. None of them are on a transcript, and every one of them
              changed how I go at a problem, which is why they get proper pages rather than a line
              in an interests section.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* The list                                                            */}
      {/* ---------------------------------------------------------------- */}
      <Section index="01" title="What I'm into" note="One page each. The list grows.">
        <ul className="list-none">
          {passions.map((passion, i) => (
            <Reveal as="li" key={passion.slug} delay={i * 0.06}>
              <Link
                href={passionHref(passion.slug)}
                className="ed-row group grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-2 items-baseline py-7 md:py-9 border-t border-rule"
              >
                <h3 className="ed-title text-ink col-span-6 md:col-span-3 transition-colors group-hover:text-accent">
                  {passion.title}
                </h3>

                <p className="ed-body text-ink-soft col-span-6 md:col-span-5">{passion.desc}</p>

                <span
                  aria-hidden="true"
                  className="hidden md:block md:col-span-1 text-right text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <hr className="ed-rule" />
      </Section>
    </EditorialLayout>
  );
}
