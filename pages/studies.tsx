// pages/studies.tsx - editorial design, studies page.
import EditorialLayout from '@/components/editorial/EditorialLayout';
import Section from '@/components/editorial/Section';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { timeline } from '@/data/timeline';
import { skillGroups, spokenLanguages } from '@/data/skills';

export default function EditorialStudies() {
  return (
    <EditorialLayout
      title="Studies"
      description="Engineering studies in Data and AI at EFREI Paris, preparatory classes in MPSI, and the skills that came out of them."
    >
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            03 <span className="text-accent">/</span> Studies
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="ed-display text-ink">
            Where the <span className="text-accent">training</span> came from
          </h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">
              French preparatory classes gave me the mathematical rigour, and EFREI gave me somewhere
              to point it. The through-line is the same one that runs through everything else here:
              take something complicated apart until it makes sense.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Education                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section index="01" title="Education" note="Newest first.">
        <div>
          {timeline.map((entry, i) => (
            <Reveal as="article" key={entry.title} delay={i * 0.06}>
              <div className="grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-3 py-7 md:py-9 border-t border-rule">
                <div className="col-span-6 md:col-span-2">
                  <p className="ed-meta text-ink-muted">{entry.year}</p>
                  {entry.note && <p className="ed-label text-accent mt-2">{entry.note}</p>}
                </div>

                <div className="col-span-6 md:col-span-7">
                  <h3 className="ed-heading text-ink">{entry.title}</h3>
                  {entry.institution && (
                    <p className="ed-meta text-ink-muted mt-1">{entry.institution}</p>
                  )}

                  <p className="ed-body text-ink-soft mt-3 max-w-[62ch]">{entry.description}</p>

                  {entry.courses && (
                    <div className="mt-5">
                      <p className="ed-label text-ink-muted mb-2.5">Coursework</p>
                      <ul className="flex flex-wrap gap-x-2 gap-y-1.5 list-none">
                        {entry.courses.map((course) => (
                          <li
                            key={course}
                            className="ed-meta text-ink-muted border border-rule px-2 py-0.5"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.projects && (
                    <div className="mt-5">
                      <p className="ed-label text-ink-muted mb-2.5">Projects</p>
                      <ul className="space-y-2 list-none max-w-[62ch]">
                        {entry.projects.map((project) => (
                          <li key={project} className="ed-body text-ink-soft flex gap-3">
                            <span aria-hidden="true" className="text-accent shrink-0">
                              ·
                            </span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <hr className="ed-rule" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Skills                                                             */}
      {/* ---------------------------------------------------------------- */}
      <Section index="02" title="Toolbox" note="What I actually reach for.">
        <div>
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-2 py-6 md:py-7 border-t border-rule">
                <p className="ed-label text-ink-muted col-span-6 md:col-span-2">{group.title}</p>
                <ul className="col-span-6 md:col-span-7 flex flex-wrap gap-x-2 gap-y-1.5 list-none">
                  {group.items.map((item) => (
                    <li key={item} className="ed-meta text-ink border border-rule px-2 py-0.5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={skillGroups.length * 0.06}>
            <div className="grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-2 py-6 md:py-7 border-t border-rule">
              <p className="ed-label text-ink-muted col-span-6 md:col-span-2">Languages</p>
              <ul className="col-span-6 md:col-span-7 flex flex-wrap gap-x-8 gap-y-3 list-none">
                {spokenLanguages.map((language) => (
                  <li key={language.language}>
                    <span className="ed-body text-ink">{language.language}</span>
                    <span className="ed-meta text-ink-muted ml-2">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <hr className="ed-rule" />
      </Section>
    </EditorialLayout>
  );
}
