// data/timeline.ts — education history shown in the "My Studies" section.

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: '2023 - Present',
    title: 'Engineering Student in Data & AI - EFREI PARIS',
    description:
      'Specialized in Data Science and Artificial Intelligence with focus on machine learning algorithms, statistical analysis, and programming. Currently developing skills in Python, Probability, and advanced mathematics for AI applications.',
  },
  {
    year: '2022 - 2023',
    title: 'CPGE : MPSI, Lycée J - B Corot',
    description:
      'Intensive preparatory classes focusing on Mathematics, Physics, and Engineering Sciences. Developed strong analytical thinking, problem-solving skills, and mathematical rigor essential for engineering studies.',
  },
  {
    year: '2022',
    title: 'A - Levels - Lycée Léonard de Vinci',
    description:
      'Completed French Baccalauréat with specialization in Mathematics and Physics. Achieved strong academic foundation in sciences and developed passion for data analysis and logical reasoning.',
  },
];
