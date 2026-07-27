// pages/passions/music.tsx
import { motion } from 'framer-motion';
import SubPageLayout from '@/components/SubPageLayout';

const expertise = [
  {
    title: 'Classical Piano',
    accent: 'text-orange-600 dark:text-orange-300',
    surface: 'bg-orange-100/50 dark:bg-gray-700/50',
    items: [
      '8 years of formal training',
      'Music theory and composition',
      'Classical repertoire performance',
      'Sight-reading proficiency',
    ],
  },
  {
    title: 'Digital Music Insight',
    accent: 'text-yellow-600 dark:text-yellow-300',
    surface: 'bg-yellow-100/50 dark:bg-gray-700/50',
    items: [
      'Familiarity with Digital Audio Workstations (DAWs)',
      'Understanding of sound design and MIDI principles',
      'Appreciation for modern production techniques',
    ],
  },
];

const genres = ['Electronic', 'Classical', 'Hip-Hop', 'Cinematic'];

export default function Music() {
  return (
    <SubPageLayout
      title="Music"
      subtitle="From classical piano to electronic music production"
      description="Eight years of classical piano, a fascination with digital sound design, and how music became a constant companion in my life and work."
      icon="🎵"
      accent="orange"
      backHref="/#passions"
      backLabel="Back to Passions"
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-ink">My Musical Journey</h2>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          As an 8-year former musician, music holds an important place in my life, providing inspiration and outlet.
          My journey began with classical piano training, where I learned the fundamentals of music theory,
          composition, and the discipline required for mastery. This foundation has evolved into a broader
          appreciation for the digital side of music, from understanding production techniques to enjoying
          diverse electronic genres.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Musical Expertise</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {expertise.map((area) => (
            <div key={area.title} className={`p-6 rounded-lg ${area.surface}`}>
              <h4 className={`font-semibold mb-3 text-xl ${area.accent}`}>{area.title}</h4>
              <ul className="space-y-2 text-sm text-ink-soft">
                {area.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Music &amp; Technology</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          The intersection of music and technology profoundly fascinates me. My programming and data background
          allows me to deeply understand how modern music is crafted. From algorithmic composition to AI-generated
          melodies, this technical lens lets me appreciate the intricacies of digital sound design and the
          production process, which ultimately enriches my listening experience and enjoyment of music today.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Music: A Lifelong Companion</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          Beyond expertise and technical appreciation, music has always been a fundamental part of my existence.
          It&apos;s been a constant presence, right from my earliest memories - even before - to listening to my parents&apos;
          CDs, through my years at the piano, and to discovering countless new genres online, which
          I still do today. Music is my go-to for focusing during intense study sessions, finding rhythm
          while programming, unwinding after a long day, or enhancing the immersion of gaming. It&apos;s a
          powerful emotional anchor and a wellspring of inspiration, continually shaping my perspective.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Musical Influences</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <div
              key={genre}
              className="p-3 text-center rounded-lg border shadow-md dark:shadow-lg bg-white/90 border-orange-200/60 dark:bg-gray-800/80 dark:border-gray-600/50"
            >
              <span className="font-medium text-ink">{genre}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </SubPageLayout>
  );
}
