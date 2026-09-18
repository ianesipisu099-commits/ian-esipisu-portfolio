export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#0b0f15] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Interested in working together?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              I&apos;m open to opportunities across data analytics, research,
              AI data work, financial analysis and digital projects.
            </p>

            <a
              href="/ian-mark-esipisu-cv.pdf"
              download
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href="mailto:ianesipisu099@gmail.com"
              className="flex items-center justify-between rounded-xl border border-white/10 px-6 py-5 text-white transition hover:border-cyan-400/50 hover:bg-white/[0.03]"
            >
              <div>
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-sm text-gray-500">
                  ianesipisu099@gmail.com
                </p>
              </div>
              <span className="text-cyan-400">↗</span>
            </a>

            <a
              href="https://github.com/ianesipisu099-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 px-6 py-5 text-white transition hover:border-cyan-400/50 hover:bg-white/[0.03]"
            >
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="mt-1 text-sm text-gray-500">
                  ianesipisu099-commits
                </p>
              </div>
              <span className="text-cyan-400">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ian-esipisu-47a95733b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 px-6 py-5 text-white transition hover:border-cyan-400/50 hover:bg-white/[0.03]"
            >
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="mt-1 text-sm text-gray-500">
                  Ian Esipisu
                </p>
              </div>
              <span className="text-cyan-400">↗</span>
            </a>
          </div>
        </div>

        <footer className="mt-24 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ian Mark Esipisu</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
}