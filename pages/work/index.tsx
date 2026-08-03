// pages/work/index.tsx - editorial design, work page.
import Link from 'next/link';
import EditorialLayout from '@/components/editorial/EditorialLayout';
import Section from '@/components/editorial/Section';
import { Reveal, DrawnRule } from '@/components/editorial/Reveal';
import { experience } from '@/data/experience';
import { projects, projectHref } from '@/data/projects';

export default function EditorialWork() {
  return (
    <EditorialLayout
      title="Work"
      description="Professional experience and selected projects: machine learning, signal processing and data pipelines."
    >
      {/* Page head */}
      <section className="ed-shell pt-12 pb-4 md:pt-20 md:pb-8">
        <Reveal>
          <p className="ed-label text-ink-muted mb-5 md:mb-8">
            02 <span className="text-accent">/</span> Work
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="ed-display text-ink">
            What I&apos;ve <span className="text-accent">built</span>
          </h1>
        </Reveal>

        <DrawnRule className="mt-10 md:mt-14" />

        <div className="ed-grid pt-8 md:pt-10">
          <Reveal delay={0.05} className="col-span-6 md:col-span-7">
            <p className="ed-lede text-ink-soft">
              Most of what I do sits where statistics meets engineering. Somebody hands over a messy
              signal, a pile of raw records, or a problem nobody has quite pinned down yet, and the job
              is to turn it into something a person can actually read a decision off.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Experience                                                         */}
      {/* ---------------------------------------------------------------- */}
      <Section index="01" title="Experience" note="Where I have worked so far.">
        <div>
          {experience.map((entry, i) => (
            <Reveal as="article" key={`${entry.organisation}-${entry.period}`} delay={i * 0.06}>
              <div className="grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-3 py-7 md:py-9 border-t border-rule">
                <div className="col-span-6 md:col-span-2">
                  <p className="ed-meta text-ink-muted">{entry.period}</p>
                  {entry.current && (
                    <p className="ed-label text-accent mt-2">
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle"
                      />
                      Current
                    </p>
                  )}
                  {entry.location && <p className="ed-meta text-ink-muted mt-1">{entry.location}</p>}
                </div>

                <div className="col-span-6 md:col-span-7">
                  <h3 className="ed-heading text-ink">
                    {entry.role}
                    <span className="text-ink-muted"> · </span>
                    {entry.organisation}
                  </h3>

                  <p className="ed-body text-ink-soft mt-3 max-w-[60ch]">{entry.summary}</p>

                  {entry.highlights && (
                    <ul className="mt-5 space-y-2.5 list-none max-w-[62ch]">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight} className="ed-body text-ink-soft flex gap-3">
                          <span aria-hidden="true" className="text-accent shrink-0">
                            ·
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.stack && (
                    <ul className="flex flex-wrap gap-x-2 gap-y-1.5 mt-5 list-none">
                      {entry.stack.map((tool) => (
                        <li
                          key={tool}
                          className="ed-meta text-ink-muted border border-rule px-2 py-0.5"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <hr className="ed-rule" />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Projects                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section index="02" title="Projects" note="Built for coursework, or just because.">
        <ul className="list-none">
          {projects.map((project, i) => {
            const rowClass =
              'ed-row group grid grid-cols-6 md:grid-cols-9 gap-x-4 md:gap-x-6 gap-y-2 items-baseline py-7 md:py-8 border-t border-rule';

            const body = (
              <>
                {/* Year on the left, matching the Experience rows above. */}
                <div className="col-span-6 md:col-span-2">
                  {project.year && <p className="ed-meta text-ink-muted">{project.year}</p>}
                  {project.ongoing && (
                    <p className="ed-label text-accent mt-1.5">
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle animate-pulse-soft"
                      />
                      Ongoing
                    </p>
                  )}
                  {project.context && (
                    <p className="ed-meta text-ink-muted mt-1">{project.context}</p>
                  )}
                </div>

                <h3 className="ed-heading text-ink col-span-6 md:col-span-3 transition-colors group-hover:text-accent">
                  {project.title}
                </h3>

                <p className="ed-body text-ink-soft col-span-6 md:col-span-2">{project.desc}</p>

                <span className="col-span-6 md:col-span-2 flex flex-wrap gap-x-2 gap-y-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="ed-meta text-ink-muted whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </span>
              </>
            );

            return (
              <Reveal as="li" key={project.title} delay={i * 0.06}>
                {/* Projects with their own page link inward; the rest go to
                    their repo. */}
                {project.slug ? (
                  <Link href={projectHref(project.slug)} className={rowClass}>
                    {body}
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    {body}
                  </a>
                )}
              </Reveal>
            );
          })}
        </ul>
        <hr className="ed-rule" />
      </Section>
    </EditorialLayout>
  );
}
