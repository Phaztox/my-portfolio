// data/projects.ts - cards shown in the work section.
//
// A project with `blocks` gets its own page; one without is just a row that
// links out to its repo.
//
// NOTE: nothing in here should carry network identifiers (IPs, hostnames,
// domains, ports, usernames). The NAS write-up in notes/nas.md has plenty of
// those and they were deliberately left out - see the page copy below.
import { palette } from './site';
import type { ContentBlock } from './content';

export interface Project {
  title: string;
  desc: string;
  tech: string[];
  color: string;
  /** External link (repo, file). Optional when the project has its own page. */
  link?: string;
  /** Set to give the project a page of its own at /work/<slug>. */
  slug?: string;
  /** Body for that page. */
  blocks?: ContentBlock[];
  /** Year or range, e.g. "2025". */
  year?: string;
  /** Where it came from, e.g. "EFREI" or "Personal". */
  context?: string;
  /** Still being worked on. Renders a live dot. */
  ongoing?: boolean;
  /** Leads the list and is pulled onto the homepage. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Self-built NAS',
    slug: 'nas',
    desc: 'A home server built from secondhand parts and run for real: media, photos, backups, remote access, and a pile of automation I keep adding to.',
    tech: ['Debian', 'Docker', 'Python', 'Bash', 'SQLite', 'Caddy'],
    color: palette.orange,
    year: '2026',
    context: 'Personal',
    ongoing: true,
    featured: true,
    blocks: [
      {
        type: 'prose',
        dropcap: true,
        body: [
          "I had wanted my own server for a long time. Part of it is the appeal of running my own cloud instead of renting someone else's. Part of it is that in an era of relentless digitalisation and centralisation, there is something I genuinely like about **owning a physical thing** - a machine I can put my hands on, that does not stop working because a company changed its pricing or shut a product down.",
          'The freedom matters too: no subscription, no terms of service telling me what I may store, no limits I did not choose. I can do whatever I want with it.',
          'I started in June 2026. Component prices were not good, and the sensible move was probably to wait for them to come down. But waiting could easily have meant years, and **at that rate, with that mentality, I would never do anything.** So I went for it.',
        ],
      },

      {
        type: 'image',
        src: '/images/nas/tower.jpg',
        alt: 'A black mid-tower PC case standing on a wire rack on a small wooden table, against a bare breeze-block wall, with cables running along the wall behind it.',
        width: 3072,
        height: 4080,
        maxWidth: 420,
        caption: 'Not a rack, not a datacentre. A secondhand tower on a wire rack, against a breeze-block wall.',
      },

      {
        type: 'prose',
        heading: 'Buying it at the worst possible time',
        body: [
          'For the last year or so, component prices have been climbing hard - RAM most of all, but SSDs and hard drives too. The cause is a supply squeeze: manufacturers have been redirecting production toward the **AI industry**, and private buyers are left competing over whatever is left.',
          'There is an irony there I am fully aware of. I am studying data science and AI, and the reason my server cost what it did is that the AI industry got to the memory first.',
          'So I did the thing that made the numbers work: I bought secondhand. Two or three days of scrolling classifieds turned up a complete base system for **250 euros** - motherboard, i7-8700, power supply, cooler, fans, cables, 16GB of DDR4 and a 200GB SSD. For that period, that was a very good price. Only the hard drive was bought new, at 360 euros, because a used drive is the one part I was not willing to gamble on. **Around 610 euros all in.**',
        ],
      },

      {
        type: 'prose',
        heading: 'Choosing old hardware on purpose',
        body: [
          'The CPU is an 8th-generation Intel i7-8700, which in 2026 is not a new chip. That was the point. I needed **QuickSync** so the machine could transcode video in hardware rather than burning a core per stream, and 8th generation is where that gets good enough. Going newer would have cost more and drawn more power for capability I would never use.',
          'I also deliberately did not buy a **GPU**. I am not running heavy models on this machine, so a card would have added cost and a permanent power draw in exchange for almost nothing. Leaving it out was one of the easier decisions.',
          'The result draws roughly 85 to 100W under load and 35 to 40W with the drives spun down, which works out around **95 euros a year** to run continuously at French rates. I worked that out before buying rather than after, because a server you cannot afford to leave on is not a server.',
        ],
      },

      {
        type: 'chips',
        heading: 'What it runs',
        items: [
          'Jellyfin',
          'Navidrome',
          'Immich',
          'Kavita',
          'Syncthing',
          'Pingvin Share',
          'Caddy',
          'Dockge',
        ],
      },

      {
        type: 'image',
        src: '/images/nas/dashboard.png',
        alt: 'The OpenMediaVault dashboard: running containers, CPU utilisation at around 10 percent, 15.29 GiB of memory with 71 percent free, disk temperatures of 39 and 50 degrees, filesystem usage, CPU core sensors, and an uptime of two months.',
        width: 1615,
        height: 820,
        wide: true,
        caption: 'An ordinary morning: containers up, drives cool, load near nothing, two months of uptime.',
      },

      {
        type: 'prose',
        heading: 'Picking the software, and skipping the obvious answers',
        body: [
          'For the OS I wanted something **free**, which ruled out Unraid immediately. Between the two remaining candidates I went with OpenMediaVault over TrueNAS: it is a little more flexible, and it simply does more of what I wanted without fighting me.',
          'The container choice took more thought. Portainer is the default answer, and I did not pick it. Two reasons. It has steadily moved useful features - role-based access control, OAuth - behind paid tiers, which has pushed a lot of people to look elsewhere. More importantly, **Portainer converts your compose files into its own internal format**: edit a stack through its interface and the change never flows back to the `.yml` on disk. Dockge leaves the native YAML alone and treats it as the source of truth. On a machine I want to still understand in two years, that mattered more than a nicer dashboard.',
        ],
      },

      {
        type: 'prose',
        heading: 'Tuning the transcoder',
        body: [
          "Hardware transcoding is only free if you configure it honestly. I went through the i7-8700's actual capability matrix and enabled exactly what the chip can do - H264 encode and decode, HEVC and HEVC 10-bit decode, VP9, VP8, MPEG2 - and left AV1 and HEVC **encode** switched off, because 8th generation silicon cannot do them. Ticking every box looks better in a screenshot and quietly falls back to software transcoding in practice, which is the opposite of what you want.",
        ],
      },

      {
        type: 'prose',
        heading: 'A volume normalisation pipeline, and two bugs worth the trouble',
        body: [
          'My music library came from many sources and played back at wildly inconsistent volumes, so I built a nightly job that scans recently-changed files and writes ReplayGain tags. It checks each file for existing tags before doing any work, and runs in parallel across all but two cores so it never starves the transcoder.',
          'It also spent a while quietly lying to me. Every single night it reported the same **166 files** as untagged and re-tagged them. The cause: MP3 and FLAC store ReplayGain in the container-level metadata, but Opus and Ogg store it as `R128_TRACK_GAIN` on the *stream*. My check only looked at the container tags, so correctly-tagged Opus files looked untagged forever. Checking both fixed it.',
          'The second one was subtler. My success and failure counters kept resetting to zero. Piping `find` into a `while` loop runs that loop in a **subshell**, so every variable I incremented died with it. Switching to process substitution kept the loop in the parent shell and the counters survived. Neither bug broke anything visibly, which is exactly why both took a while to notice.',
        ],
      },

      {
        type: 'callout',
        heading: 'A format problem with no clean fix',
        body: [
          'WAV files have no standardised metadata container, so ReplayGain tags simply would not stick to them. The only real answer was to batch-convert the lot to FLAC.',
          'That had a consequence I did not anticipate: my music server references tracks by internal database ID rather than by path, so deleting the old WAV files orphaned about nine tracks inside one playlist, which I had to rebuild by hand. Lossless conversions are safe. The database pointing at them is not.',
        ],
      },

      {
        type: 'prose',
        heading: 'Backups that can actually be restored',
        body: [
          'My first playlist backup script looked like it worked. It exported cleanly, the files were the right size, and every entry was useless - the API it queried returns *virtual* paths (artist, album, title) rather than real filesystem paths, so nothing could be reimported.',
          'The fix was to stop asking the API and query the underlying **SQLite** database directly, joining the playlist and media tables to get true paths, then trimming the library prefix so the exports stayed portable. I also had to force a UTF-8 locale, because Korean and Japanese track titles were being mangled into broken line breaks otherwise. A backup you have never restored from is not a backup.',
        ],
      },

      {
        type: 'prose',
        heading: 'What happens if a drive dies',
        body: [
          'Right now: I lose the contents. There is **no mirroring and no redundancy**, and I would rather say that plainly than imply a resilience I have not built yet.',
          'It is a deliberate trade rather than an oversight. I could not fund several drives at once, and given that, one large drive beat several small ones on two counts. The price per terabyte is better. And the motherboard has a limited number of drive slots, so filling them all with small disks now would have capped how far the machine could ever grow - buying one big drive keeps that door open.',
          'The nightly backup covers the **setup** rather than the bulk content: configuration, compose files, the databases that make the services what they are. It runs to about 3.5GB, which tells you exactly what it is and is not protecting. The content itself is, for now, not irreplaceable enough to justify doubling the storage budget.',
          'Redundancy is the next thing to add when I expand the array. Hopefully before a drive makes the decision for me.',
        ],
      },

      {
        type: 'prose',
        heading: 'Recovering a library from screenshots',
        body: [
          'The part I enjoyed most was not really a server problem at all. I had playlists on an old phone with no export function, and all I could get out of it were **enormous scrolling screenshots** - some close to 15,000 pixels tall.',
          'So I treated it as a data problem. OCR the screenshots into raw text, then fuzzy-match every extracted title against the 1,987 files actually in my library using token set ratio scoring, with the threshold tuned to around 80 to 85. Anything above it matched automatically; anything below went into a review file with a manual override column, so I could force through the ones the matcher was being too cautious about.',
          'That recovered roughly **1,550 entries across seven playlists** - game and anime soundtracks, trap, hardstyle, dubstep, nightcore, eurobeat, bigroom. It is the closest thing to my actual degree that the whole project produced: messy input, a scoring function, a threshold to argue about, and a human in the loop for the cases the score could not settle.',
        ],
      },

      {
        type: 'prose',
        heading: 'Getting to it from outside the house',
        body: [
          'Public services sit behind a reverse proxy, which in turn sits behind a tunnel back to Cloudflare - so **nothing is port-forwarded** on the home router and the machine is never directly exposed. Anything not meant to be public is reachable only over a private mesh VPN instead.',
          "One service refused to work over that VPN for a long time. The container was on Docker's default bridge network, and a bridge network simply has no route to the host's VPN interface. Moving it to host networking fixed it immediately, at the cost of container network isolation - an acceptable trade here, since that service exposes no ports externally, but a trade worth making on purpose rather than by accident.",
          'The people using it are close friends and family, which is a small enough circle that I still hand out access by hand. That is a deliberate ceiling, not a missing feature.',
        ],
      },

      {
        type: 'prose',
        heading: 'Automation and notifications',
        body: [
          'Every scheduled job reports to me over Telegram through one shared notifier script, so failures surface instead of sitting silently in a log. Several jobs also have on-demand Telegram commands, running as small Python services, so I can trigger a run from my phone without opening a terminal.',
          "The largest of those reads a set of Telegram channels I follow, summarises the day's posts with an **LLM**, and publishes a grouped digest to Telegram and Discord twice a day. It is the piece that pushed me into API cost decisions - I moved it onto a free-tier model once I worked out what a paid one would cost to run on a schedule forever.",
        ],
      },

      {
        type: 'image',
        src: '/images/nas/notifications.png',
        alt: 'A phone showing Telegram messages from the server over two days: playlist backup succeeded with nine playlists exported, NAS backup completed at 3.5G, and the ReplayGain run reporting first "no untagged files found, nothing to do" and then "tagged 1 file across 1 folder, no errors".',
        width: 396,
        height: 633,
        maxWidth: 330,
        caption:
          'Every job reports in. "No untagged files found" is the Opus bug, fixed - it used to say 166.',
      },

      {
        type: 'prose',
        heading: 'What was actually new to me',
        body: [
          'I did not come to this from nothing. Self-hosting is something I had been circling for years, and EFREI had already covered enough networking and systems that I was not lost. VPNs, containers, the general shape of a Linux box - none of that was unfamiliar.',
          'Three things genuinely were: **buying and configuring a domain name**, setting up a **reverse proxy**, and getting a **Cloudflare tunnel** working. Those were the parts where I was reading documentation rather than recognising a pattern, and they are the parts I now understand properly because of it.',
        ],
      },

      {
        type: 'prose',
        heading: 'The decision I did not make',
        body: [
          'I seriously evaluated rebuilding the whole thing on a bare-metal hypervisor. It would have been cleaner, more flexible, and more fun. I decided against it: the current stack is stable, the migration meant real downtime and real risk, and "it would be more elegant" is not a good enough reason to take a working system apart. It is parked as a maybe-later, on separate hardware.',
          'Knowing when *not* to rebuild something has been one of the more useful things this project taught me.',
        ],
      },

      {
        type: 'prose',
        heading: 'Still going',
        body: [
          'It is not finished and probably never will be, which is most of the appeal. There is always another service worth self-hosting, another script worth writing, another thing that breaks and teaches me how a layer I thought I understood actually works.',
        ],
      },
    ],
  },

  {
    title: 'AI Trash Bin Detector',
    desc: 'Machine learning model detecting trash bin filling from pictures to reduce appearance of wild dumps.',
    tech: ['Python', 'OpenCV', 'Pillow'],
    link: 'https://github.com/Demonta0109/Projet-MasterCamp/tree/main',
    color: palette.pink,
    year: '2025',
    context: 'EFREI',
  },
  {
    title: 'ANSSI Alerts Analysis',
    desc: 'Automated ANSSI vulnerability analysis: CVE extraction, enrichment (MITRE/FIRST), ML insights, critical email alerts.',
    tech: ['Python', 'KMeans', 'PCA'],
    link: 'https://github.com/Alexandre-gng/ANSSI_alerts',
    color: palette.orange,
    year: '2025',
    context: 'EFREI',
  },
  {
    title: 'Connect 4 Algorithm',
    desc: 'Advanced algorithm research for optimizing gameplay in Connect 4 using Minimax and Alpha-Beta pruning.',
    tech: ['Python', 'Minimax', 'Game Theory'],
    link: 'https://raw.githubusercontent.com/Phaztox/my-portfolio/master/files/Connect-4_FinalVersion.py',
    color: palette.purple,
    year: '2025',
    context: 'EFREI',
  },
];

/** Route for a project page, in a given design. */
export const projectHref = (slug: string, design: 'classic' | 'editorial' = 'editorial') =>
  design === 'classic' ? `/classic/projects/${slug}` : `/work/${slug}`;

export const projectsWithPages = projects.filter(
  (project): project is Project & { slug: string } => Boolean(project.slug && project.blocks)
);

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
