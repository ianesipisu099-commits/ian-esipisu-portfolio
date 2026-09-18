const digitalWork = [
  {
    number: "01",
    category: "AI Data Work",
    title: "AI Evaluation & Data Annotation",
    description:
      "Applied work involving the review, annotation and evaluation of data used in AI systems, with emphasis on accuracy, consistency and adherence to project guidelines.",
    skills: [
      "Data Annotation",
      "AI Evaluation",
      "Quality Assurance",
      "Guideline Adherence",
      "Video Annotation",
    ],
    link: null,
    linkText: null,
  },
  {
    number: "02",
    category: "Web Development",
    title: "Digital Solutions & Web Projects",
    description:
      "Design and development of responsive web experiences using modern frontend technologies, including school website projects built from concept through deployment.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
      "Vercel",
    ],
    link: "https://st-marks-demo.vercel.app",
    linkText: "View Live Project",
  },
];

export default function DigitalWork() {
  return (
    <section
      id="digital-work"
      className="border-t border-white/10 bg-[#0b0f15] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            AI & Digital Work
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Technology applied beyond traditional analytics.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Experience applying structured evaluation methods to AI data and
            building practical digital products with modern web technologies.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {digitalWork.map((work) => (
            <article
              key={work.number}
              className="group flex min-h-[400px] flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {work.number}
                </span>

                <span className="text-xs uppercase tracking-wider text-gray-500">
                  {work.category}
                </span>
              </div>

              <h3 className="mt-10 max-w-xl text-2xl font-bold leading-tight">
                {work.title}
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                {work.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-10">
                {work.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-cyan-400"
                >
                  <span>{work.linkText}</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}