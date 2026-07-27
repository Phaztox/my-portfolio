// pages/blog/the-compressed-truth.tsx
import { motion } from 'framer-motion';
import SubPageLayout from '@/components/SubPageLayout';
import { posts } from '@/data/posts';

const post = posts.find((p) => p.href === '/blog/the-compressed-truth')!;

export default function TheCompressedTruth() {
  return (
    <SubPageLayout
      title={post.title}
      subtitle={post.excerpt}
      accent="purple"
      backHref="/#blog"
      backLabel="Back to Blog"
      seoType="article"
      publishedTime={post.date}
      variant="article"
    >
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl p-8 bg-surface backdrop-blur-sm shadow-xl space-y-8"
      >
        {/* Opening */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/50"
        >
          <p className="text-lg leading-relaxed tracking-wide mb-6 text-ink-soft first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-purple-600 dark:first-letter:text-purple-400">
            There&apos;s a distinct satisfaction in taking raw video footage or a static image and, through focused
            effort, transforming it into a cohesive visual piece. My YouTube channel, primarily a personal archive
            for various project realizations, became an outlet for this. What began as a simple intent to
            &ldquo;store&rdquo; videos evolved. A natural progression led to crafting thumbnails, and subsequently,
            incorporating basic edits with music and transitions. Having experienced the enhanced presentation, it
            became a standard I felt compelled to maintain for subsequent videos. This process, while primarily for
            personal enjoyment and a small circle of friends, became a hobby where the pursuit of clean,
            well-presented results offered its own reward.
          </p>

          <p className="text-lg leading-relaxed text-ink-soft">
            This interest naturally extended to{' '}
            <strong className="font-bold text-pink-600 dark:text-pink-300">&ldquo;anime edits,&rdquo;</strong> a genre
            that bridges another personal interest. The technical aspects of dynamically synchronizing cuts, effects,
            and music to enhance existing media intrigued me. While my recent focus has shifted, the{' '}
            <strong className="font-bold text-indigo-600 dark:text-indigo-300">technical underpinnings</strong> of such
            detailed visual work continued to hold my attention.
          </p>
        </motion.section>

        {/* Technical curiosity */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-purple-300 dark:from-gray-800/60 dark:to-gray-700/40 dark:border-gray-600/50 dark:hover:border-purple-500/50"
        >
          <div
            className="absolute top-4 right-4 w-8 h-8 opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110 text-purple-500 dark:text-purple-400"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-6 tracking-tight transition-colors text-purple-700 group-hover:text-purple-600 dark:text-purple-300 dark:group-hover:text-purple-200">
            The Inception of Technical Curiosity
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-ink-soft">
              A specific moment brought the technical side of video production into sharp focus. I was in the process
              of exporting a video project. Previously, my approach to export settings was rudimentary; I simply
              accepted defaults. On this occasion, however, I observed an option to achieve a notably smaller file size
              for the same resolution. Intrigued by the prospect of efficiency, I selected it. To my surprise, the
              resulting file was unplayable on my phone&apos;s default viewer. This experience marked my initial
              encounter with{' '}
              <strong className="font-bold text-purple-600 dark:text-purple-300">video codecs</strong> and catalyzed a
              deeper learning process.
            </p>

            <p className="text-lg leading-relaxed text-ink-soft">
              I quickly found myself exploring a new domain, simultaneously fascinated by the effectiveness of{' '}
              <strong className="font-bold text-indigo-600 dark:text-indigo-300">compression</strong> and puzzled by its
              mechanics. As someone drawn to optimization, the idea of significantly lighter files with no perceptible
              quality loss seemed almost too good to be true. This apparent paradox fueled my drive to understand the
              underlying principles. My curiosity was no longer solely about aesthetic composition but extended to the
              fundamental processes by which videos, pictures, and sound files are stored and rendered efficiently.
            </p>
          </div>
        </motion.section>

        {/* Compression principles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl group bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 dark:from-indigo-900/30 dark:to-purple-900/20 dark:border-indigo-700/30"
        >
          <div
            className="absolute -top-4 -right-4 w-16 h-16 opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:rotate-12 text-indigo-500 dark:text-indigo-400"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="20" cy="20" r="8" />
              <circle cx="50" cy="20" r="8" />
              <circle cx="80" cy="20" r="8" />
              <circle cx="20" cy="50" r="8" />
              <circle cx="50" cy="50" r="8" />
              <circle cx="80" cy="50" r="8" />
              <circle cx="20" cy="80" r="8" />
              <circle cx="50" cy="80" r="8" />
              <circle cx="80" cy="80" r="8" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-6 tracking-tight text-indigo-700 dark:text-indigo-300">
            Deconstructing the Digital Stream: Codecs and Compression Principles
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-ink-soft">
              My learning journey began with readily available resources on YouTube, where I consumed numerous videos
              comparing <strong className="font-bold text-indigo-600 dark:text-indigo-300">codecs</strong> and detailing
              their operational principles. This led to understanding fundamental video terminology and common settings.
              From there, I ventured into online articles and forums, particularly Reddit, delving into the intricacies
              of video codecs and{' '}
              <strong className="font-bold text-indigo-600 dark:text-indigo-300">bitrates</strong>. This exploration
              broadened to encompass{' '}
              <strong className="font-bold text-indigo-600 dark:text-indigo-300">image compression</strong>, requiring an
              understanding of how pixels aggregate into a file and the unexpected complexities of image data reduction.
              The process of discovery for images mirrored that of video. Subsequently, I developed an interest in{' '}
              <strong className="font-bold text-indigo-600 dark:text-indigo-300">audio compression</strong>, learning how
              sound can be significantly compressed from lossless to lossy formats with minimal audible degradation.
            </p>

            <div className="relative p-6 rounded-xl border-l-4 transition-all duration-300 bg-blue-50 border-blue-500 text-blue-900 hover:bg-blue-100 dark:bg-blue-900/30 dark:border-blue-400 dark:text-blue-100 dark:hover:bg-blue-900/40">
              <div className="absolute top-3 right-3 w-6 h-6 opacity-30 text-blue-600 dark:text-blue-300" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-lg leading-relaxed font-medium">
                A core distinction in this domain is between{' '}
                <strong className="font-bold text-blue-700 dark:text-blue-300">lossless</strong> and{' '}
                <strong className="font-bold text-blue-700 dark:text-blue-300">lossy</strong> compression. Lossless
                compression aims for efficiency by reducing file size without sacrificing any original information. An
                analogy for this might be meticulously folding clothes to maximize drawer space: nothing is removed, only
                reorganized. Conversely, lossy compression prioritizes a greater reduction in size, accepting the
                sacrifice of less relevant information. This can be likened to summarizing an extensive document into a
                concise list of key points. The objective is to discard data that is unlikely to be perceived as missing
                by human senses.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-ink-soft">
              In the context of video, virtually all content encountered online or elsewhere utilizes lossy codecs.{' '}
              <strong className="font-bold text-orange-600 dark:text-orange-300">H.264/AVC</strong> remains a prevalent
              choice due to its balance of quality and file size, alongside broad compatibility. However, within the
              field of compression, H.264 is recognized as less efficient compared to newer codecs that offer
              substantially improved compression ratios. Examples include{' '}
              <strong className="font-bold text-orange-600 dark:text-orange-300">VP9</strong> (developed by Google),{' '}
              <strong className="font-bold text-orange-600 dark:text-orange-300">H.265/HEVC</strong>, and{' '}
              <strong className="font-bold text-orange-600 dark:text-orange-300">AV1</strong> (projected to become a
              widely adopted standard in the near future), and the very recent{' '}
              <strong className="font-bold text-orange-600 dark:text-orange-300">H.266/VVC</strong>. These advanced
              codecs provide progressively superior compression, typically at the cost of broader support. More
              sophisticated codecs often necessitate higher-end hardware for decoding and may have licensing
              complexities (open-source vs. proprietary).
            </p>

            <p className="text-lg leading-relaxed text-ink-soft">
              When discussing &ldquo;better compression&rdquo; for video, image, or sound, the reference is to achieving
              a perceptibly similar quality with a smaller file size. This relies on advanced{' '}
              <strong className="font-bold text-purple-600 dark:text-purple-300">mathematical algorithms</strong>,
              innovative computational thinking, and robust technical performance. The &ldquo;perceptible
              quality&rdquo; aspect underscores a fascinating human element in this research: how algorithms are designed
              to detect and prioritize which information to retain or discard, based on the nuances of human visual and
              auditory perception.
            </p>
          </div>
        </motion.section>

        {/* Visual spectrum */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="p-8 rounded-2xl transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-700/30"
        >
          <h2 className="text-2xl font-bold mb-6 tracking-tight text-emerald-700 dark:text-emerald-300">
            Expanding the Visual Spectrum: Beyond Compression
          </h2>

          <p className="text-lg leading-relaxed text-ink-soft">
            My exploration extended beyond pure compression into more specialized visual technologies. I delved into
            concepts like <strong className="font-bold text-emerald-600 dark:text-emerald-300">color spaces</strong>,{' '}
            <strong className="font-bold text-emerald-600 dark:text-emerald-300">HDR</strong>, and{' '}
            <strong className="font-bold text-emerald-600 dark:text-emerald-300">luminance</strong>. It was notable how
            manipulating these settings during file creation could reproduce remarkably realistic contrasts, profound
            dark tones, and vivid colors, significantly impacting the visual experience. This demonstrated a deeper
            layer of control over the aesthetic output.
          </p>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative p-10 rounded-3xl border-2 border-dashed transition-all duration-500 hover:shadow-2xl group border-purple-500/60 bg-gradient-to-br from-purple-50 to-indigo-50 hover:border-purple-400 dark:border-purple-400/60 dark:from-purple-900/20 dark:to-indigo-900/10 dark:hover:border-purple-300"
        >
          <div
            className="absolute top-4 left-4 w-12 h-12 opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:rotate-45 text-purple-500 dark:text-purple-400"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,10 61,35 90,35 69,57 79,91 50,75 21,91 31,57 10,35 39,35" />
            </svg>
          </div>

          <div
            className="absolute bottom-4 right-4 w-8 h-8 opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:-rotate-45 text-indigo-500 dark:text-indigo-400"
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold mb-8 tracking-tight text-purple-800 dark:text-purple-200">
            Synthesis: The Interplay of Craft and Calculation
          </h2>

          <div className="space-y-6">
            <p className="text-xl leading-relaxed font-medium text-purple-900 dark:text-purple-100">
              This comprehensive exploration has reinforced a core understanding: beyond the fundamental drive for
              optimization that initially captivated me, the choice of a{' '}
              <strong className="font-bold text-purple-600 dark:text-purple-300">compression codec</strong> carries
              practical implications for different use cases. For general file storage or distribution where size is
              paramount, higher compression with some quality trade-off is often acceptable. Conversely, for editing
              workflows, utilizing <strong className="font-bold text-green-600 dark:text-green-300">lossless</strong>{' '}
              (or near-lossless) codecs is preferable, as it offers greater flexibility and technical ease during
              post-production.
            </p>

            <p className="text-xl leading-relaxed font-medium text-purple-900 dark:text-purple-100">
              For me, this domain represents a seamless integration of my creative impulses and my technical, reflective
              faculties. It continuously feeds my pursuit of optimization, whether in the elegant flow of an{' '}
              <strong className="font-bold text-pink-600 dark:text-pink-300">anime edit</strong> or the efficient
              encoding of a video stream.
            </p>
          </div>

          <div className="mt-8 h-1 rounded-full transition-all duration-500 group-hover:h-2 bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-500 dark:from-purple-600 dark:via-indigo-500 dark:to-purple-600" />
        </motion.section>
      </motion.article>
    </SubPageLayout>
  );
}
