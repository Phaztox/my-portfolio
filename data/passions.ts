// data/passions.ts - the four passions, index copy and full page content.
//
// `blocks` holds the page body, shared by both designs (see data/content.ts).
import { palette } from './site';
import type { ContentBlock } from './content';

export interface Passion {
  slug: string;
  title: string;
  /** Sub-heading on the passion's own page. */
  subtitle: string;
  /** Short blurb used on index cards. */
  desc: string;
  icon: string;
  color: string;
  /** Meta description for the page. */
  description: string;
  blocks: ContentBlock[];
}

export const passions: Passion[] = [
  {
    slug: 'gaming',
    title: 'Gaming',
    subtitle: 'Exploring immersive worlds and strategy',
    desc: 'Gaming is my ultimate arena for min-maxing builds and dominating the meta with a programming-driven mindset. The thrill is flawlessly executing engineered strategies.',
    icon: '🎮',
    color: palette.pink,
    description:
      'Why gaming is my playground for optimization, strategic thinking and data analysis, and how it feeds into my work in data and AI.',
    blocks: [
      {
        type: 'prose',
        heading: 'My gaming philosophy',
        body: [
          "Gaming, for me, is far more than just entertainment; it's a dynamic playground for optimization, strategic thinking, and continually pushing the boundaries of what's possible. I'm always driven by the quest to fine-tune stats and uncover the most effective outputs, striving for peak performance. I vividly recall the immense satisfaction of meticulously crafting a strategy, envisioning its every step, and then seeing it flawlessly execute in practice, that perfect alignment between theory and outcome is truly the best feeling.",
          "Whether it's min-maxing character builds, developing highly efficient game plans, or diving deep to master complex mechanics, I approach gaming with the same rigorous, analytical mindset I apply to programming or scientific research. Pushing those boundaries means I'm often experimenting with unconventional strategies to outsmart and surprise opponents, relentlessly optimizing an aspect to its deepest potential (even if it implies a calculated sacrifice elsewhere), or simply aiming for improbable outcomes and celebrating the hard-won success against the odds.",
        ],
      },
      {
        type: 'tiles',
        heading: 'Favourite genres',
        tiles: [
          { title: 'RPGs', desc: 'Character progression, stats and skills optimization' },
          { title: 'Strategy games', desc: 'Complex decision-making and long-term planning' },
          {
            title: 'Competitive games',
            desc: 'Skill development, performance and strategy analysis',
          },
          { title: 'Simulation games', desc: 'Efficiency maximization and operations automation' },
        ],
      },
      {
        type: 'prose',
        heading: 'Gaming data and analytics',
        body: [
          "My passion for gaming isn't just about playing; it's a rich playground for **data analysis and optimization**. I love diving into the numbers to uncover hidden efficiencies and predict outcomes. Whether it's dissecting character stats to engineer the most effective builds, analyzing resource flows for optimal long-term strategies in simulation games, or tracking competitive performance metrics, I find myself constantly looking for the data-driven edge.",
          'This hands-on approach to understanding game mechanics through numbers directly feeds into my interest in real-world data science, showing how raw data can unlock powerful insights and drive continuous improvement.',
        ],
      },
      {
        type: 'prose',
        heading: 'AI in gaming, beyond the NPC',
        body: [
          "As someone fascinated by AI, I'm constantly observing how it's revolutionizing gaming far beyond traditional, predictable non-player characters. I find it incredible how AI now creates adaptive challenges that learn from player behavior, generates vast and detailed worlds through **procedural content**, or even enhances narrative by responding dynamically to player choices.",
          'My curiosity extends to how AI is also used behind the scenes to test games, identify exploits, and fine-tune game mechanics for optimal balance. This intersection of artificial intelligence and interactive entertainment is a field I find incredibly exciting, bridging my love for gaming with my studies in AI.',
        ],
      },
      {
        type: 'prose',
        heading: 'Gaming and programming',
        body: [
          "The analytical skills I've developed through gaming directly translate to my programming work. Problem-solving, optimization thinking, and a systematic approach to challenges are skills that benefit both domains. Gaming has taught me to think in terms of systems, efficiency, and continuous improvement; principles that are fundamental to good software development.",
        ],
      },
    ],
  },

  {
    slug: 'music',
    title: 'Music',
    subtitle: 'From classical piano to electronic music production',
    desc: 'From classical piano to electronic music production. As an 8-year former musician, music holds an important place in my life, providing inspiration and outlet.',
    icon: '🎵',
    color: palette.orange,
    description:
      'Eight years of classical piano, a fascination with digital sound design, and how music became a constant companion in my life and work.',
    blocks: [
      {
        type: 'prose',
        heading: 'My musical journey',
        body: [
          'As an 8-year former musician, music holds an important place in my life, providing inspiration and outlet. My journey began with classical piano training, where I learned the fundamentals of music theory, composition, and the discipline required for mastery. This foundation has evolved into a broader appreciation for the digital side of music, from understanding production techniques to enjoying diverse electronic genres.',
        ],
      },
      {
        type: 'listCards',
        heading: 'Musical expertise',
        cards: [
          {
            title: 'Classical piano',
            items: [
              '8 years of formal training',
              'Music theory and composition',
              'Classical repertoire performance',
              'Sight-reading proficiency',
            ],
          },
          {
            title: 'Digital music insight',
            items: [
              'Familiarity with Digital Audio Workstations (DAWs)',
              'Understanding of sound design and MIDI principles',
              'Appreciation for modern production techniques',
            ],
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Music and technology',
        body: [
          'The intersection of music and technology profoundly fascinates me. My programming and data background allows me to deeply understand how modern music is crafted. From **algorithmic composition** to AI-generated melodies, this technical lens lets me appreciate the intricacies of digital sound design and the production process, which ultimately enriches my listening experience and enjoyment of music today.',
        ],
      },
      {
        type: 'prose',
        heading: 'A lifelong companion',
        body: [
          "Beyond expertise and technical appreciation, music has always been a fundamental part of my existence. It's been a constant presence, right from my earliest memories, even before, to listening to my parents' CDs, through my years at the piano, and to discovering countless new genres online, which I still do today.",
          "Music is my go-to for focusing during intense study sessions, finding rhythm while programming, unwinding after a long day, or enhancing the immersion of gaming. It's a powerful emotional anchor and a wellspring of inspiration, continually shaping my perspective.",
        ],
      },
      {
        type: 'chips',
        heading: 'Musical influences',
        items: ['Electronic', 'Classical', 'Hip-Hop', 'Cinematic'],
      },
    ],
  },

  {
    slug: 'asian-culture',
    title: 'Asian Culture',
    subtitle: 'Japanese and Chinese traditions and media',
    desc: 'Japanese and Chinese traditions & media. I am particularly attracted by how they blend history with modernity.',
    icon: '🏮',
    color: palette.purple,
    description:
      'How Japanese and Chinese cultures blend centuries-old tradition with cutting-edge technology, and what that perspective brings to the way I think about innovation.',
    blocks: [
      {
        type: 'prose',
        heading: 'Cultural fascination',
        body: [
          "I've always been fascinated by the way Asian cultures, especially in Japan and China, manage to blend history and modernity so seamlessly. I love how centuries-old traditions coexist with some of the most advanced technologies in the world, creating a balance that shapes art, philosophy, and everyday life in a really unique way.",
          "On a personal level, I'm drawn to many aspects of this culture; from anime, manga, and music to the more recent internet culture that has grown so quickly in Asia. Being **half Chinese** myself, with a mother from China and a father from France, I feel connected to both worlds, and I really enjoy noticing the different perspectives on technology and society that Asian cultures bring compared to the European vision. It's something that inspires me a lot, both personally and in the way I think about innovation.",
        ],
      },
      {
        type: 'listCards',
        heading: 'Areas of interest',
        cards: [
          {
            title: 'Traditional arts',
            items: [
              'History and philosophy, they never forget their roots',
              'Architecture and nature (temples, gardens, ...)',
              'Mentality and mindset of the population',
              'Tradition in general (clothes, food, festivals, ...)',
            ],
          },
          {
            title: 'Modern media',
            items: [
              'Anime and manga, consumption and production',
              'Asian game design, linked to traditional aspects',
              'Digital art and music style, internet culture',
              'Recent technology progress (AI, VR, ...)',
            ],
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Philosophy and technology',
        body: [
          'What strikes me most in Asian cultures is how philosophy and technology are often seen as connected rather than separate. Ideas like harmony, balance, and the Japanese principle of **kaizen**, continuous improvement through small steady steps, really resonate with the way I think about both software development and personal growth. This mindset of blending values with innovation feels unique compared to other approaches, and I find that truly inspiring.',
        ],
      },
      {
        type: 'tiles',
        heading: 'Principles I admire',
        tiles: [
          { title: '仁 (Rén)', desc: 'Humaneness, compassion, empathy' },
          { title: '改善 (Kaizen)', desc: 'Continuous improvement, steady progress' },
          { title: '無為 (Wú wéi)', desc: 'Effortless action, natural flow' },
        ],
      },
    ],
  },

  {
    slug: 'stats-and-logic',
    title: 'Stats & Logic',
    subtitle: 'Mathematics, optimization, and AI models',
    desc: 'Mathematics, optimization, and AI models. I enjoy tackling complex problems and finding efficient solutions.',
    icon: '📊',
    color: palette.pink,
    description:
      'Why I enjoy unravelling complex systems with statistics, optimization and machine learning, from academic projects to spreadsheets in daily life.',
    blocks: [
      {
        type: 'prose',
        heading: 'Analytical thinking',
        body: [
          'I genuinely enjoy tackling complex problems and finding efficient solutions through mathematical analysis and logical reasoning. My gaming background, for instance, has honed my probability skills, allowing me to grasp and solve academic projects with a clear, strategic mindset. Beyond that, my strong logical thinking helps me not only master mathematical subjects but also explain them effectively to my classmates.',
          'This passion extends to modeling real-world phenomena, like creating models of online opinions to understand digital versus real-world perspectives, or comparing behaviors across different regions. The beauty of mathematics and logic, for me, lies in its ability to unravel complex systems and provide insights that lead to better decision-making.',
        ],
      },
      {
        type: 'listCards',
        heading: 'Areas of expertise',
        cards: [
          {
            title: 'Statistical analysis',
            items: [
              'Descriptive and inferential statistics',
              'Probability distributions',
              'Hypothesis testing',
              'Regression analysis',
            ],
          },
          {
            title: 'Optimization',
            items: [
              'Algorithm complexity analysis',
              'Linear and non-linear optimization',
              'Performance metrics and KPIs',
              'Resource allocation strategies',
            ],
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Machine learning and AI',
        body: [
          "The intersection of statistics and artificial intelligence deeply fascinates me. What I find most impressive and exploitable is ML's ability to uncover and understand patterns that would remain invisible to human perception. While I acknowledge the ethical considerations, especially in sensitive domains like biology, this capability remains utterly captivating.",
          'The sheer potential for **automation** and accelerating complex work is a significant advantage. But what truly fuels my fascination with AI is the constant discovery: every day, week, and month brings new possibilities and usages to imagine. This seemingly infinite source of potential is precisely why I love this field.',
        ],
      },
      {
        type: 'tiles',
        heading: 'Practical applications',
        tiles: [
          { title: 'Gaming optimization', desc: 'Min-maxing strategies and efficiency calculations' },
          { title: 'Code performance', desc: 'Algorithm analysis and optimization techniques' },
          { title: 'Data insights', desc: 'Pattern recognition and predictive modeling' },
          { title: 'Decision making', desc: 'Evidence-based analysis and risk assessment' },
        ],
      },
      {
        type: 'prose',
        heading: 'Personal analytics',
        body: [
          "My affinity for stats and logic isn't confined to academic projects; it spills over into my daily life, often powered by Excel. I frequently delve into gaming-related spreadsheets, meticulously calculating the optimal output for character teams given specific inputs, or efficiently managing in-game resources.",
          "This methodical approach also extends to practical applications like tracking personal expenses, comparing project budgets, or even creating systems to monitor my grades and identify the most impactful exams based on coefficients. It's about bringing structure and insight to various aspects of life, turning data into actionable understanding.",
        ],
      },
      {
        type: 'quote',
        text: 'Mathematics is the language with which God has written the universe.',
        attribution: 'Galileo Galilei',
        body: 'I think this quote beautifully captures the profoundness of mathematics and its role in understanding complex systems: promoting decisions based on evidence, measurements, and logical analysis rather than intuition alone.',
      },
    ],
  },
];

/** Route for a passion in a given design. */
export const passionHref = (slug: string, design: 'classic' | 'editorial' = 'editorial') =>
  design === 'classic' ? `/classic/passions/${slug}` : `/passions/${slug}`;

export const getPassion = (slug: string) => passions.find((passion) => passion.slug === slug);
