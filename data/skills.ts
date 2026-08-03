// data/skills.ts - what I actually work with.
//
// Transcribed from the CV; provisional, review before publishing. Kept
// deliberately honest: only things that appear on the CV or in the projects
// and experience listed elsewhere in data/.

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'C', 'Scala', 'SQL / MySQL', 'VHDL', 'HTML'],
  },
  {
    title: 'Data & AI',
    items: [
      'Machine learning',
      'Deep learning',
      'Data analysis',
      'Data visualisation',
      'Probability & statistics',
      'Cloud computing',
    ],
  },
  {
    title: 'Tools',
    items: ['MATLAB', 'Streamlit', 'tkinter', 'Git', 'VS Code', 'Excel', 'After Effects'],
  },
];

export interface SpokenLanguage {
  language: string;
  level: string;
}

export const spokenLanguages: SpokenLanguage[] = [
  { language: 'French', level: 'Native' },
  { language: 'English', level: 'Advanced' },
  { language: 'Chinese', level: 'Intermediate' },
];
