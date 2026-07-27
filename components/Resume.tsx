// components/Resume.tsx — cascading education timeline.
import { timeline } from '@/data/timeline';

export default function Resume() {
  return (
    <section id="resume" className="section-container px-6 sm:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <h2 className="text-responsive-heading font-bold mb-6 md:mb-8 text-center text-ink">My Studies</h2>

        <ol className="relative border-l-4 responsive-timeline-padding border-pink-400 dark:border-purple-400 list-none">
          {timeline.map((item) => (
            <li key={item.title} className="relative group resume-item-spacing">
              <span
                aria-hidden="true"
                className="absolute rounded-full border-4 border-white bg-pastel-pink dark:border-gray-800"
                style={{
                  left: 'clamp(-1.25rem, min(-1.5vw, -2vh), -1.5rem)',
                  top: 'clamp(0.25rem, min(0.5vw, 0.75vh), 0.5rem)',
                  width: 'clamp(1.5rem, min(2vw, 3vh), 2rem)',
                  height: 'clamp(1.5rem, min(2vw, 3vh), 2rem)',
                }}
              />

              <div className="backdrop-blur-lg responsive-card-radius resume-card-padding shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative bg-surface border border-border-soft">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="text-responsive-card-title font-bold leading-tight flex-1 text-ink">
                    {item.title}
                  </h3>
                  <span className="responsive-badge-text font-bold responsive-badge-padding responsive-card-radius text-white shrink-0 w-fit bg-pastel-purple">
                    {item.year}
                  </span>
                </div>
                <p className="text-responsive-card leading-relaxed mt-3 text-ink-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
