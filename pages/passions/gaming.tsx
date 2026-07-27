// pages/passions/gaming.tsx
import { motion } from 'framer-motion';
import SubPageLayout from '@/components/SubPageLayout';

const genres = [
  { title: 'RPGs', desc: 'Character progression, stats and skills optimization' },
  { title: 'Strategy Games', desc: 'Complex decision-making and long-term planning' },
  { title: 'Competitive Games', desc: 'Skill development, performance and strategy analysis' },
  { title: 'Simulation Games', desc: 'Efficiency maximization and operations automation' },
];

export default function Gaming() {
  return (
    <SubPageLayout
      title="Gaming"
      subtitle="Exploring immersive worlds and strategy"
      description="Why gaming is my playground for optimization, strategic thinking and data analysis — and how it feeds into my work in data and AI."
      icon="🎮"
      accent="pink"
      backHref="/#passions"
      backLabel="Back to Passions"
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-ink">My Gaming Philosophy</h2>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          Gaming, for me, is far more than just entertainment; it&apos;s a dynamic playground for optimization,
          strategic thinking, and continually pushing the boundaries of what&apos;s possible. I&apos;m always driven
          by the quest to fine-tune stats and uncover the most effective outputs, striving for peak performance.
          I vividly recall the immense satisfaction of meticulously crafting a strategy, envisioning its every step,
          and then seeing it flawlessly execute in practice - that perfect alignment between theory and outcome is
          truly the best feeling. Whether it&apos;s min-maxing character builds, developing highly efficient game plans,
          or diving deep to master complex mechanics, I approach gaming with the same rigorous, analytical mindset
          I apply to programming or scientific research. Pushing those boundaries means I&apos;m often experimenting with unconventional
          strategies to outsmart and surprise opponents, relentlessly optimizing an aspect to its deepest potential
          (even if it implies a calculated sacrifice elsewhere), or simply aiming for improbable outcomes and
          celebrating the hard-won success against the odds. This dedication to dissecting systems and achieving
          mastery in games directly reflects my approach to problem-solving in data and AI.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Favorite Genres</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {genres.map((genre) => (
            <div key={genre.title} className="p-4 rounded-lg bg-gray-100/50 dark:bg-gray-700/50">
              <h4 className="font-semibold mb-2 text-pink-600 dark:text-purple-300">{genre.title}</h4>
              <p className="text-sm text-ink-soft">{genre.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Gaming Data &amp; Analytics</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          My passion for gaming isn&apos;t just about playing; it&apos;s a rich playground for data analysis and optimization.
          I love diving into the numbers to uncover hidden efficiencies and predict outcomes. Whether it&apos;s dissecting
          character stats to engineer the most effective builds, analyzing resource flows for optimal long-term
          strategies in simulation games, or tracking competitive performance metrics, I find myself constantly
          looking for the data-driven edge. This hands-on approach to understanding game mechanics through numbers
          directly feeds into my interest in real-world data science, showing how raw data can unlock powerful
          insights and drive continuous improvement.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">AI in Gaming: Beyond the NPC</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          As someone fascinated by AI, I&apos;m constantly observing how it&apos;s revolutionizing gaming far beyond
          traditional, predictable non-player characters. I find it incredible how AI now creates adaptive
          challenges that learn from player behavior, generates vast and detailed worlds through procedural
          content, or even enhances narrative by responding dynamically to player choices. My curiosity extends
          to how AI is also used behind the scenes to test games, identify exploits, and fine-tune game mechanics
          for optimal balance. This intersection of artificial intelligence and interactive entertainment is a
          field I find incredibly exciting, bridging my love for gaming with my studies in AI.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Gaming &amp; Programming Connection</h3>
        <p className="text-lg leading-relaxed text-ink-soft">
          The analytical skills I&apos;ve developed through gaming directly translate to my programming work.
          Problem-solving, optimization thinking, and systematic approach to challenges are skills that
          benefit both domains. Gaming has taught me to think in terms of systems, efficiency, and
          continuous improvement; principles that are fundamental to good software development.
        </p>
      </motion.section>
    </SubPageLayout>
  );
}
