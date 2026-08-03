// pages/about.tsx - editorial design, about page.
import Link from 'next/link';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import Section from '@/components/editorial/Section';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { renderInline } from '@/components/renderInline';
import { aboutIntro, aboutParagraphs } from '@/data/about';
import { passions, passionHref } from '@/data/passions';
import { spokenLanguages } from '@/data/skills';
import { site } from '@/data/site';

export default function EditorialAbout() {
  return (
    <EditorialLayout
      title="About"
      description="Antonin Gabet: engineering student at EFREI Paris, heading into data science and AI, with a habit of taking systems apart until they make sense."
    >
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            01 <span className="text-accent">/</span> About
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          {/* The introduction is the headline. Set as a quote rather than a
              title, because it says more than a label would. */}
          <blockquote className="ed-title text-ink max-w-[18ch] md:max-w-[24ch]">
            &ldquo;{aboutIntro}&rdquo;
          </blockquote>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* The longer version                                                 */}
      {/* ---------------------------------------------------------------- */}
      <Section index="01" title="The longer version" note="If you have a minute.">
        <div className="space-y-6 max-w-[64ch]">
          {aboutParagraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="ed-body text-ink-soft">
                {renderInline(paragraph, 'font-semibold text-accent')}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Facts                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section index="02" title="The short version" note="For the impatient.">
        <dl className="list-none">
          {[
            { term: 'Based in', value: 'Paris, France' },
            { term: 'Studying', value: 'Data & AI engineering, EFREI Paris' },
            {
              term: 'Languages',
              value: spokenLanguages.map((l) => `${l.language} (${l.level.toLowerCase()})`).join(', '),
            },
            { term: 'Piano', value: '8 years, classical' },
            { term: 'Reachable at', value: site.email },
          ].map((fact, i) => (
            <Reveal key={fact.term} delay={i * 0.05}>
              <div className="grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-1 py-4 md:py-5 border-t border-rule">
                <dt className="ed-label text-ink-muted col-span-6 md:col-span-2">{fact.term}</dt>
                <dd className="ed-body text-ink col-span-6 md:col-span-7">{fact.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <hr className="ed-rule" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Passions pointer                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section
        index="03"
        title="What shaped it"
        note="Each one has a page of its own."
        action={{ label: 'All passions', href: '/passions' }}
      >
        <ul className="list-none">
          {passions.map((passion, i) => (
            <Reveal as="li" key={passion.slug} delay={i * 0.05}>
              <Link
                href={passionHref(passion.slug)}
                className="ed-row group grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 items-baseline py-5 md:py-6 border-t border-rule"
              >
                <span className="ed-heading text-ink col-span-5 md:col-span-3 transition-colors group-hover:text-accent">
                  {passion.title}
                </span>
                <span className="ed-meta text-ink-muted col-span-6 md:col-span-5">
                  {passion.subtitle}
                </span>
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
