// pages/passions/asian-culture.tsx
import { motion } from 'framer-motion';
import SubPageLayout from '@/components/SubPageLayout';

const interests = [
  {
    title: 'Traditional Arts',
    accent: 'text-purple-600 dark:text-purple-300',
    surface: 'bg-purple-100/50 dark:bg-gray-700/50',
    items: [
      'History and philosophy, they never forget their roots',
      'Architecture and nature (Temples, Gardens, ...)',
      'Mentality and mindset of the population',
      'Tradition in general (Clothes, Food, Festivals, ...)',
    ],
  },
  {
    title: 'Modern Media',
    accent: 'text-indigo-600 dark:text-indigo-300',
    surface: 'bg-indigo-100/50 dark:bg-gray-700/50',
    items: [
      'Anime/manga consumption and production',
      'Asian game designs, linked to Traditional aspects',
      'Digital art and music style, internet culture',
      'Recent technology progress (AI, VR, ...)',
    ],
  },
];

const principles = [
  {
    term: '仁 (Rén)',
    desc: 'Humaneness, compassion, empathy',
    accent: 'text-purple-600 dark:text-purple-300',
    border: 'border-purple-200/60 dark:border-gray-600/50',
  },
  {
    term: '改善 (Kaizen)',
    desc: 'Continuous improvement, steady progress',
    accent: 'text-indigo-600 dark:text-indigo-300',
    border: 'border-indigo-200/60 dark:border-gray-600/50',
  },
  {
    term: '無為 (Wú wéi)',
    desc: 'Effortless action, natural flow',
    accent: 'text-pink-600 dark:text-pink-300',
    border: 'border-pink-200/60 dark:border-gray-600/50',
  },
];

export default function AsianCulture() {
  return (
    <SubPageLayout
      title="Asian Culture"
      subtitle="Japanese and Chinese traditions & media"
      description="How Japanese and Chinese cultures blend centuries-old tradition with cutting-edge technology — and what that perspective brings to the way I think about innovation."
      icon="🏮"
      accent="indigo"
      backHref="/#passions"
      backLabel="Back to Passions"
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-ink">Cultural Fascination</h2>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          I&apos;ve always been fascinated by the way Asian cultures, especially in Japan and China,
          manage to blend history and modernity so seamlessly. I love how centuries-old traditions coexist
          with some of the most advanced technologies in the world, creating a balance that shapes
          art, philosophy, and everyday life in a really unique way. On a personal level,
          I&apos;m drawn to many aspects of this culture; from anime, manga, and music to the more recent internet culture
          that has grown so quickly in Asia. Being half Chinese myself, with a mother from China and a father from France,
          I feel connected to both worlds, and I really enjoy noticing the different perspectives on technology
          and society that Asian cultures bring compared to the European vision.
          It&apos;s something that inspires me a lot, both personally and in the way I think about innovation.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Areas of Interest</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {interests.map((area) => (
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

        <h3 className="text-2xl font-semibold mb-4 text-ink">Philosophy &amp; Technology</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          What strikes me most in Asian cultures is how philosophy and technology are often seen as connected
          rather than separate. Ideas like harmony, balance, and the Japanese principle of kaizen - continuous
          improvement through small, steady steps - really resonate with the way I think about both software
          development and personal growth. This mindset of blending values with innovation feels unique
          compared to other approaches, and I find that truly inspiring.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Cultural Principles I Admire</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {principles.map((principle) => (
            <div
              key={principle.term}
              className={`p-4 text-center rounded-lg border shadow-md dark:shadow-lg bg-white/90 dark:bg-gray-800/80 ${principle.border}`}
            >
              <h4 className={`font-semibold mb-2 ${principle.accent}`}>{principle.term}</h4>
              <p className="text-sm text-ink-soft">{principle.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </SubPageLayout>
  );
}
