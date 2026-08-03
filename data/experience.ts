// data/experience.ts - professional experience.
//
// Transcribed from CV_Antonin_Lechen_GABET_EN.pdf as a starting point; review
// and reword before publishing.
//
// Entries are newest first. Set `current: true` on a role that is genuinely
// ongoing and the homepage headlines it as "Now"; with nothing current it
// falls back to showing the newest entry as "Most recent".

export interface Experience {
  role: string;
  organisation: string;
  location?: string;
  period: string;
  /** Short line for the homepage. Keep it to one sentence. */
  summary: string;
  /** Expanded bullets for the work page. */
  highlights?: string[];
  stack?: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    role: 'Data Science Intern',
    organisation: 'LAERO',
    location: 'Toulouse',
    period: 'Dec 2025 - Apr 2026',
    summary:
      'Migrated the full data-processing pipeline of the BOREAL atmospheric drone from MATLAB to Python.',
    highlights: [
      'Rebuilt binary telemetry extraction and cleaning (IQR outlier rejection, interpolation) as a Python pipeline.',
      'Built a Streamlit dashboard with 2D/3D views and FFT / multitaper spectral analysis.',
      'Shipped a tkinter desktop interface so the team could run analyses without touching code.',
      'Delivered vibration analyses to M3 Systems.',
    ],
    stack: ['Python', 'NumPy', 'SciPy', 'Streamlit', 'tkinter', 'MATLAB'],
  },
  {
    role: 'Sales Intern',
    organisation: 'Darty',
    period: 'Jan 2024',
    summary:
      'First contact with the professional world, focused on client communication and needs analysis.',
    highlights: [
      'Learned to read an interlocutor and adapt the conversation accordingly.',
      'Applied funnel-based sales technique and structured needs discovery.',
    ],
  },
];

/** A genuinely ongoing role, if there is one. */
export const currentRole = experience.find((entry) => entry.current);

/** What the homepage headlines: the ongoing role, else the newest finished one. */
export const headlineRole = currentRole ?? experience[0];

/** Label for the headline block, so it never claims something is ongoing. */
export const headlineLabel = currentRole ? 'Now' : 'Most recent';
