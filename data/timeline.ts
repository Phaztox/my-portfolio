// data/timeline.ts - education history.
//
// `courses` and `projects` are transcribed from the CV and are provisional;
// the classic design shows only `description`, the editorial design shows the
// lot.

export interface TimelineEntry {
  year: string;
  title: string;
  /** Institution on its own, for designs that lay it out separately. */
  institution?: string;
  description: string;
  courses?: string[];
  projects?: string[];
  /** e.g. a mention or distinction. */
  note?: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: '2023 - Present',
    title: 'Engineering Student in Data & AI',
    institution: 'EFREI Paris',
    description:
      'Specialized in Data Science and Artificial Intelligence with focus on machine learning algorithms, statistical analysis, and programming. Currently developing skills in Python, Probability, and advanced mathematics for AI applications.',
    courses: [
      'Algorithms',
      'Web programming',
      'Databases',
      'Machine learning',
      'Cloud computing',
      'Probability',
      'Data analysis',
      'Data visualisation',
      'Deep learning',
    ],
    projects: [
      'Website creation with database integration',
      'Probabilistic data analysis using machine learning, later upgraded with deep learning models',
    ],
  },
  {
    year: '2022 - 2023',
    title: 'CPGE : MPSI',
    institution: 'Lycée J - B Corot',
    description:
      'Intensive preparatory classes focusing on Mathematics, Physics, and Engineering Sciences. Developed strong analytical thinking, problem-solving skills, and mathematical rigor essential for engineering studies.',
    courses: [
      'Algebra',
      'Analysis',
      'Probability',
      'Thermodynamics',
      'Mechanics',
      'Electricity',
      'Python',
      'Computational complexity',
    ],
    projects: [
      'TIPE: comparison of programs simulating various strategies, searching for an optimal one',
    ],
  },
  {
    year: '2022',
    title: 'A - Levels',
    institution: 'Lycée Léonard de Vinci',
    description:
      'Completed French Baccalauréat with specialization in Mathematics and Physics. Achieved strong academic foundation in sciences and developed passion for data analysis and logical reasoning.',
    courses: ['Mathematics', 'Physics-Chemistry', 'Advanced mathematics', 'Science in English (DNL)'],
    note: 'Graduated with high honours',
  },
];
