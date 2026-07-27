// components/About.tsx
import { aboutParagraphs } from '@/data/about';

export default function About() {
  return (
    <section id="about" className="section-container px-4 sm:px-8 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <h2 className="text-responsive-heading font-bold mb-6 md:mb-8 text-ink">About Me</h2>

        <div className="backdrop-blur-lg responsive-card-radius responsive-card-padding shadow-2xl bg-surface border border-border-soft space-y-6">
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-responsive-about text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
