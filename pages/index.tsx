// pages/index.tsx - editorial design, index homepage.
import Link from 'next/link';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import Section from '@/components/editorial/Section';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import WorkRow from '@/components/editorial/WorkRow';
import RotatingWord from '@/components/editorial/RotatingWord';
import { editorialNav } from '@/components/editorial/nav';
import { resolveHeadline } from '@/data/headline';
import { homepageWork } from '@/data/work';
import { optimisingThings } from '@/data/personal';
import { aboutIntro } from '@/data/about';
import { site } from '@/data/site';

export default function EditorialHome() {
  // Internships and projects together, so "work" reads as one idea here and
  // on /work rather than two different ones. Featured projects lead.
  const selected = homepageWork();
  const headline = resolveHeadline();
  // Work and About both have their own block above; listing them again here
  // was what made the old index feel like it repeated itself.
  const covered = ['/work', '/about'];
  const indexItems = editorialNav.filter((item) => !covered.includes(item.href));

  return (
    <EditorialLayout description={site.description}>
      {/* ---------------------------------------------------------------- */}
      {/* Statement                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">EFREI Paris · Portfolio</p>
        </Reveal>

        <h1>
          <Reveal delay={0.06}>
            <span className="ed-display text-ink block">{site.name}</span>
          </Reveal>
        </h1>

        {/* The rotating line. Renders its first phrase on the server and never
            cycles under prefers-reduced-motion. */}
        <Reveal delay={0.14}>
          {/* `ed-heading` rather than `ed-title`: the phrases run to ~18
              characters and must stay on one line at 320px wide. */}
          <p className="ed-heading text-ink-muted mt-5 md:mt-7 flex flex-wrap items-baseline gap-x-3">
            <span>probably optimising</span>
            <RotatingWord items={optimisingThings} className="text-accent" />
          </p>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-12">
          <Reveal delay={0.05} className="col-span-6 md:col-span-6">
            <p className="ed-lede text-ink-soft">
              Fifth-year engineering student at EFREI Paris, heading into data science and AI. I like
              problems where the answer is hiding somewhere in the numbers, and I like automating the
              boring part of getting to it.
            </p>
          </Reveal>

          {/* Headline block: availability, current role, or studies.
              Switched by `headlineMode` in data/headline.ts. */}
          {headline && (
            <Reveal delay={0.12} className="col-span-6 md:col-span-5 md:col-start-8">
              <div className="border-t-2 border-ink pt-4">
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <p className="ed-label text-accent">
                    {headline.live && (
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle animate-pulse-soft"
                      />
                    )}
                    {headline.label}
                  </p>
                  <p className="ed-meta text-ink-muted">{headline.meta}</p>
                </div>

                <p className="ed-heading text-ink">{headline.title}</p>
                <p className="ed-body text-ink-soft mt-3">{headline.body}</p>

                {headline.tags && (
                  <ul className="flex flex-wrap gap-x-2 gap-y-1.5 mt-4 list-none">
                    {headline.tags.map((tag) => (
                      <li key={tag} className="ed-meta text-ink-muted border border-rule px-2 py-0.5">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {headline.cta && (
                  <a
                    href={headline.cta.href}
                    className="ed-label inline-flex items-center gap-2 mt-5 bg-accent text-accent-contrast px-3 py-2 transition-opacity hover:opacity-85"
                  >
                    {headline.cta.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Introduction                                                       */}
      {/* ---------------------------------------------------------------- */}
      {/* Unnumbered on purpose: it is a way in, not a section of the index. */}
      <section className="ed-shell pt-14 md:pt-24">
        <DrawnRule heavy />
        <div className="ed-grid pt-8 md:pt-12">
          <Reveal className="col-span-6 md:col-span-6 md:col-start-4">
            <blockquote className="ed-lede text-ink">
              &ldquo;{aboutIntro}&rdquo;
            </blockquote>
            <Link href="/about" className="ed-link ed-label text-ink-muted inline-block mt-6">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Selected work                                                      */}
      {/* ---------------------------------------------------------------- */}
      <Section
        index="01"
        title="Selected work"
        note="Internships and projects, newest first."
        action={{ label: 'All work', href: '/work' }}
      >
        <ul className="list-none">
          {selected.map((item, i) => (
            <Reveal as="li" key={`${item.kind}-${item.title}`} delay={i * 0.06}>
              <WorkRow item={item} />
            </Reveal>
          ))}
        </ul>
        <hr className="ed-rule" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Index                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section index="02" title="Elsewhere" note="The rest of the site.">
        <ul className="list-none">
          {indexItems.map((item, i) => (
            <Reveal as="li" key={item.href} delay={i * 0.05}>
              <Link
                href={item.href}
                className="ed-row group grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-1 items-baseline py-6 md:py-7 border-t border-rule"
              >
                <span className="ed-title text-ink col-span-6 md:col-span-3 transition-colors group-hover:text-accent">
                  {item.label}
                </span>
                <span className="ed-body text-ink-soft col-span-6 md:col-span-5">
                  {item.description}
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
