const skillGroups = [
  {
    title: "Data & Analytics",
    skills: [
      "Power BI",
      "SQL",
      "PostgreSQL",
      "Excel",
      "SPSS",
      "Google Analytics",
      "Data Visualization",
    ],
  },
  {
    title: "Python & Finance",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Financial Markets",
      "Portfolio Analysis",
      "Risk Analysis",
    ],
  },
  {
    title: "Research",
    skills: [
      "Quantitative Research",
      "Qualitative Research",
      "Questionnaire Design",
      "Key Informant Interviews",
      "Focus Groups",
      "Data Collection",
      "Report Writing",
    ],
  },
  {
    title: "Digital & Development",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git & GitHub",
      "Vercel",
      "AI Data Evaluation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-[#0b0f15] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Capabilities
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Skills & Tools
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          A multidisciplinary toolkit spanning analytics, research, financial
          analysis and digital development.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}