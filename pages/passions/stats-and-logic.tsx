// pages/passions/stats-and-logic.tsx
import { motion } from 'framer-motion';
import SubPageLayout from '@/components/SubPageLayout';

const expertise = [
  {
    title: 'Statistical Analysis',
    accent: 'text-pink-600 dark:text-pink-300',
    surface: 'bg-pink-100/50 dark:bg-gray-700/50',
    items: [
      'Descriptive and inferential statistics',
      'Probability distributions',
      'Hypothesis testing',
      'Regression analysis',
    ],
  },
  {
    title: 'Optimization',
    accent: 'text-red-600 dark:text-red-300',
    surface: 'bg-red-100/50 dark:bg-gray-700/50',
    items: [
      'Algorithm complexity analysis',
      'Linear and non-linear optimization',
      'Performance metrics and KPIs',
      'Resource allocation strategies',
    ],
  },
];

const applications = [
  {
    title: 'Gaming Optimization',
    desc: 'Min-maxing strategies and efficiency calculations',
    accent: 'text-pink-600 dark:text-pink-300',
    border: 'border-pink-200/60 dark:border-gray-600/50',
  },
  {
    title: 'Code Performance',
    desc: 'Algorithm analysis and optimization techniques',
    accent: 'text-red-600 dark:text-red-300',
    border: 'border-red-200/60 dark:border-gray-600/50',
  },
  {
    title: 'Data Insights',
    desc: 'Pattern recognition and predictive modeling',
    accent: 'text-purple-600 dark:text-purple-300',
    border: 'border-purple-200/60 dark:border-gray-600/50',
  },
  {
    title: 'Decision Making',
    desc: 'Evidence-based analysis and risk assessment',
    accent: 'text-indigo-600 dark:text-indigo-300',
    border: 'border-indigo-200/60 dark:border-gray-600/50',
  },
];

export default function StatsAndLogic() {
  return (
    <SubPageLayout
      title="Stats & Logic"
      subtitle="Mathematics, optimization, and AI models"
      description="Why I enjoy unravelling complex systems with statistics, optimization and machine learning — from academic projects to spreadsheets in daily life."
      icon="📊"
      accent="red"
      backHref="/#passions"
      backLabel="Back to Passions"
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-ink">Analytical Thinking</h2>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          I genuinely enjoy tackling complex problems and finding efficient solutions through mathematical
          analysis and logical reasoning. My gaming background, for instance, has honed my probability skills,
          allowing me to grasp and solve academic projects with a clear, strategic mindset. Beyond that,
          my strong logical thinking helps me not only master mathematical subjects but also explain
          them effectively to my classmates. This passion extends to modeling real-world phenomena, like
          creating models of online opinions to understand digital vs. real-world perspectives, or comparing
          behaviors across different regions. The beauty of mathematics and logic, for me, lies in its
          ability to unravel complex systems and provide insights that lead to better decision-making.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Areas of Expertise</h3>
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

        <h3 className="text-2xl font-semibold mb-4 text-ink">Machine Learning &amp; AI</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          The intersection of statistics and artificial intelligence deeply fascinates me. What I find most
          impressive and exploitable is ML&apos;s ability to uncover and understand patterns that would remain
          invisible to human perception. While I acknowledge the ethical considerations, especially in
          sensitive domains like biology, this capability remains utterly captivating. The sheer potential
          for automation and accelerating complex work is a significant advantage. But what truly fuels
          my fascination with AI is the constant discovery - every day, week, and month brings new possibilities
          and usages to imagine. This seemingly infinite source of potential is precisely why I love this field.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Practical Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {applications.map((app) => (
            <div
              key={app.title}
              className={`p-4 rounded-lg border shadow-md dark:shadow-lg bg-white/90 dark:bg-gray-800/80 ${app.border}`}
            >
              <h4 className={`font-semibold mb-2 ${app.accent}`}>{app.title}</h4>
              <p className="text-sm text-ink-soft">{app.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-ink">Personal Analytics &amp; Optimization</h3>
        <p className="text-lg mb-6 leading-relaxed text-ink-soft">
          My affinity for stats and logic isn&apos;t confined to academic projects; it spills over into my daily life,
          often powered by Excel. I frequently delve into gaming-related spreadsheets, meticulously calculating
          the optimal output for character teams given specific inputs, or efficiently managing in-game resources.
          This methodical approach also extends to practical applications like tracking personal expenses,
          comparing project budgets, or even creating systems to monitor my grades and identify the most impactful
          exams based on coefficients. It&apos;s about bringing structure and insight to various aspects of life,
          turning data into actionable understanding.
        </p>

        <blockquote className="p-6 rounded-lg border-l-4 border-pink-500 bg-gradient-to-r from-pink-100 to-red-100 dark:border-pink-400 dark:bg-none dark:bg-gray-700/30">
          <p className="font-semibold mb-2 text-pink-700 dark:text-pink-300">
            &ldquo;Mathematics is the language with which God has written the universe.&rdquo; - Galileo Galilei
          </p>
          <p className="text-sm text-ink-soft">
            I think this Galileo quote beautifully captures the profoundness of mathematics and
            its role in understanding complex systems: promoting decisions based on evidence,
            measurements, and logical analysis rather than intuition alone.
          </p>
        </blockquote>
      </motion.section>
    </SubPageLayout>
  );
}
