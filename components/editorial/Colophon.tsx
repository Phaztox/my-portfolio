// components/editorial/Colophon.tsx — the footer, as a print colophon.
import { cvLinks, site } from '@/data/site';
import { activeCurrently, colophonNote } from '@/data/personal';

export default function Colophon() {
  return (
    <footer className="mt-24 md:mt-40">
      <hr className="ed-rule-heavy" />
      <div className="ed-shell py-12 md:py-16">
        <div className="ed-grid">
          <div className="col-span-6 md:col-span-5">
            <p className="ed-label text-ink-muted mb-4">Get in touch</p>
            {/* Sized to fit the column at every breakpoint. `ed-title` was too
                large here, so the address wrapped mid-word however wide the
                window got. */}
            <a
              href={`mailto:${site.email}`}
              className="ed-link ed-heading text-ink inline-block"
            >
              {site.email}
            </a>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-start-7">
            <p className="ed-label text-ink-muted mb-4">Elsewhere</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link ed-body text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link ed-body text-ink"
                >
                  GitHub
                </a>
              </li>
              <li className="ed-body text-ink">
                CV{' '}
                <a
                  href={cvLinks.english}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link"
                >
                  EN
                </a>
                {' / '}
                <a
                  href={cvLinks.french}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ed-link"
                >
                  FR
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-start-10">
            <p className="ed-label text-ink-muted mb-4">Colophon</p>
            <p className="ed-meta text-ink-muted leading-relaxed">
              Set in Archivo, Newsreader and JetBrains Mono.
              <br />
              Built with Next.js.
            </p>
          </div>
        </div>

        {/* Only renders once there is something to say - see data/personal.ts */}
        {activeCurrently.length > 0 && (
          <>
            <hr className="ed-rule my-8 md:my-10" />
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {activeCurrently.map((entry) => (
                <p key={entry.label} className="ed-meta text-ink-muted">
                  <span className="ed-label text-accent mr-2">{entry.label}</span>
                  {entry.value}
                </p>
              ))}
            </div>
          </>
        )}

        <hr className="ed-rule my-8 md:my-10" />

        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p suppressHydrationWarning className="ed-meta text-ink-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="ed-meta text-ink-muted italic">{colophonNote}</p>
        </div>
      </div>
    </footer>
  );
}
