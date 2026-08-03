// data/work.ts - "work" as one idea: internships and projects together.
//
// The homepage teaser and the work page both read from here, so the two can
// never tell different stories about what "work" means.
import { experience } from './experience';
import { projects, projectHref } from './projects';

export type WorkKind = 'experience' | 'project';

export interface WorkItem {
  kind: WorkKind;
  /** Shown as the row's category, e.g. "Internship". */
  label: string;
  title: string;
  /** Organisation for a role, context for a project. */
  subtitle?: string;
  /** Period or year. Omitted when unknown rather than invented. */
  meta?: string;
  desc: string;
  tags: string[];
  /** Where the row goes, if anywhere. */
  href?: string;
  /** True when `href` is an internal route rather than an external repo. */
  internal?: boolean;
  /** Still being worked on. */
  ongoing?: boolean;
}

const fromExperience = (): WorkItem[] =>
  experience.map((entry) => ({
    kind: 'experience',
    label: entry.role.toLowerCase().includes('intern') ? 'Internship' : 'Role',
    title: entry.role,
    subtitle: entry.organisation,
    meta: entry.period,
    desc: entry.summary,
    tags: entry.stack ?? [],
  }));

const fromProjects = (): WorkItem[] =>
  projects.map((project) => ({
    kind: 'project',
    label: project.ongoing ? 'Ongoing' : 'Project',
    title: project.title,
    subtitle: project.context,
    meta: project.year,
    desc: project.desc,
    tags: project.tech,
    // A project with its own page links there; the rest link out to a repo.
    href: project.slug ? projectHref(project.slug) : project.link,
    internal: Boolean(project.slug),
    ongoing: project.ongoing,
  }));

/** Everything, experience first. */
export const allWork = (): WorkItem[] => [...fromExperience(), ...fromProjects()];

/**
 * The homepage teaser: a deliberate mix so "work" reads as both things at a
 * glance, rather than looking like a project list that hides an experience
 * section behind it.
 */
export const selectedWork = (experienceCount = 1, projectCount = 2): WorkItem[] => [
  ...fromExperience().slice(0, experienceCount),
  ...fromProjects().slice(0, projectCount),
];

/** Featured projects lead the homepage, ahead of the newest internship. */
export const homepageWork = (): WorkItem[] => {
  const projectItems = fromProjects();
  const featured = projects
    .map((project, i) => (project.featured ? projectItems[i] : null))
    .filter((item): item is WorkItem => item !== null);
  const rest = projectItems.filter((item) => !featured.includes(item));

  return [...featured, ...fromExperience().slice(0, 1), ...rest.slice(0, 1)];
};
