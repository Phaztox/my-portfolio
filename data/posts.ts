// data/posts.ts - blog index and post bodies.
//
// A post without `blocks` is a draft: it appears in the index as "work in
// progress" and has no page of its own.
import type { ContentBlock } from './content';

export interface Post {
  slug: string;
  title: string;
  /** Standfirst under the title, also used as the meta description. */
  excerpt: string;
  /** ISO date. Only set on published posts. */
  date?: string;
  /** Body. Absent means draft. */
  blocks?: ContentBlock[];
}

export const posts: Post[] = [
  {
    slug: 'the-compressed-truth',
    title: 'The Compressed Truth: Unpacking My Fascination with Video Codecs & Quality',
    excerpt:
      'How my hobby for creating cool video edits unexpectedly led me down a rabbit hole into the hidden magic and clever science behind making visuals look amazing without hogging all your storage.',
    date: '2025-09-07',
    blocks: [
      {
        type: 'prose',
        dropcap: true,
        body: [
          "There's a distinct satisfaction in taking raw video footage or a static image and, through focused effort, transforming it into a cohesive visual piece. My YouTube channel, primarily a personal archive for various project realizations, became an outlet for this. What began as a simple intent to store videos evolved. A natural progression led to crafting thumbnails, and subsequently, incorporating basic edits with music and transitions. Having experienced the enhanced presentation, it became a standard I felt compelled to maintain for subsequent videos. This process, while primarily for personal enjoyment and a small circle of friends, became a hobby where the pursuit of clean, well-presented results offered its own reward.",
          'This interest naturally extended to **anime edits**, a genre that bridges another personal interest. The technical aspects of dynamically synchronizing cuts, effects, and music to enhance existing media intrigued me. While my recent focus has shifted, the **technical underpinnings** of such detailed visual work continued to hold my attention.',
        ],
      },
      {
        type: 'prose',
        heading: 'The inception of technical curiosity',
        body: [
          "A specific moment brought the technical side of video production into sharp focus. I was in the process of exporting a video project. Previously, my approach to export settings was rudimentary; I simply accepted defaults. On this occasion, however, I observed an option to achieve a notably smaller file size for the same resolution. Intrigued by the prospect of efficiency, I selected it. To my surprise, the resulting file was unplayable on my phone's default viewer. This experience marked my initial encounter with **video codecs** and catalyzed a deeper learning process.",
          'I quickly found myself exploring a new domain, simultaneously fascinated by the effectiveness of **compression** and puzzled by its mechanics. As someone drawn to optimization, the idea of significantly lighter files with no perceptible quality loss seemed almost too good to be true. This apparent paradox fueled my drive to understand the underlying principles. My curiosity was no longer solely about aesthetic composition but extended to the fundamental processes by which videos, pictures, and sound files are stored and rendered efficiently.',
        ],
      },
      {
        type: 'prose',
        heading: 'Deconstructing the digital stream',
        body: [
          'My learning journey began with readily available resources on YouTube, where I consumed numerous videos comparing **codecs** and detailing their operational principles. This led to understanding fundamental video terminology and common settings. From there, I ventured into online articles and forums, particularly Reddit, delving into the intricacies of video codecs and **bitrates**. This exploration broadened to encompass **image compression**, requiring an understanding of how pixels aggregate into a file and the unexpected complexities of image data reduction. The process of discovery for images mirrored that of video. Subsequently, I developed an interest in **audio compression**, learning how sound can be significantly compressed from lossless to lossy formats with minimal audible degradation.',
        ],
      },
      {
        type: 'callout',
        heading: 'Lossless and lossy',
        body: [
          'A core distinction in this domain is between **lossless** and **lossy** compression. Lossless compression aims for efficiency by reducing file size without sacrificing any original information. An analogy for this might be meticulously folding clothes to maximize drawer space: nothing is removed, only reorganized.',
          'Conversely, lossy compression prioritizes a greater reduction in size, accepting the sacrifice of less relevant information. This can be likened to summarizing an extensive document into a concise list of key points. The objective is to discard data that is unlikely to be perceived as missing by human senses.',
        ],
      },
      {
        type: 'prose',
        body: [
          'In the context of video, virtually all content encountered online or elsewhere utilizes lossy codecs. **H.264/AVC** remains a prevalent choice due to its balance of quality and file size, alongside broad compatibility. However, within the field of compression, H.264 is recognized as less efficient compared to newer codecs that offer substantially improved compression ratios. Examples include **VP9** (developed by Google), **H.265/HEVC**, and **AV1** (projected to become a widely adopted standard in the near future), and the very recent **H.266/VVC**. These advanced codecs provide progressively superior compression, typically at the cost of broader support. More sophisticated codecs often necessitate higher-end hardware for decoding and may have licensing complexities (open-source versus proprietary).',
          'When discussing better compression for video, image, or sound, the reference is to achieving a perceptibly similar quality with a smaller file size. This relies on advanced **mathematical algorithms**, innovative computational thinking, and robust technical performance. The perceptible quality aspect underscores a fascinating human element in this research: how algorithms are designed to detect and prioritize which information to retain or discard, based on the nuances of human visual and auditory perception.',
        ],
      },
      {
        type: 'prose',
        heading: 'Expanding the visual spectrum',
        body: [
          'My exploration extended beyond pure compression into more specialized visual technologies. I delved into concepts like **color spaces**, **HDR**, and **luminance**. It was notable how manipulating these settings during file creation could reproduce remarkably realistic contrasts, profound dark tones, and vivid colors, significantly impacting the visual experience. This demonstrated a deeper layer of control over the aesthetic output.',
        ],
      },
      {
        type: 'prose',
        heading: 'Synthesis: craft and calculation',
        body: [
          'This comprehensive exploration has reinforced a core understanding: beyond the fundamental drive for optimization that initially captivated me, the choice of a **compression codec** carries practical implications for different use cases. For general file storage or distribution where size is paramount, higher compression with some quality trade-off is often acceptable. Conversely, for editing workflows, utilizing **lossless** (or near-lossless) codecs is preferable, as it offers greater flexibility and technical ease during post-production.',
          'For me, this domain represents a seamless integration of my creative impulses and my technical, reflective faculties. It continuously feeds my pursuit of optimization, whether in the elegant flow of an **anime edit** or the efficient encoding of a video stream.',
        ],
      },
    ],
  },

  {
    slug: 'the-unseen-architect',
    title: 'The Unseen Architect: My Personal Journey Through the Landscape of Music',
    excerpt:
      "A personal reflection on how music shapes my life, fuels my creativity, and serves as a constant companion through all of life's ups and downs.",
  },

  {
    slug: 'whispered-calculations',
    title: 'Whispered Calculations: An Ode to Tuning Builds, Stats, and Team Alchemy',
    excerpt:
      'A deep dive into the art and science of game mechanics, exploring how small adjustments can lead to significant advantages in competitive play.',
  },
];

/** Route for a post in a given design. */
export const postHref = (slug: string, design: 'classic' | 'editorial' = 'editorial') =>
  design === 'classic' ? `/classic/blog/${slug}` : `/blog/${slug}`;

export const publishedPosts = posts.filter((post) => post.blocks);
export const draftPosts = posts.filter((post) => !post.blocks);
export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
