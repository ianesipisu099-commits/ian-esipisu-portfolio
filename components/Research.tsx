const researchProjects = [
  {
    number: "01",
    type: "Academic Research",
    title: "Community-Based Mental Health Awareness — Mathare",
    description:
      "Undergraduate research examining the efficacy of community-based interventions in fostering mental health awareness in Mathare, Nairobi.",
    details: [
      "Questionnaire-based quantitative research",
      "Key informant interviews & focus groups",
      "Field observation and primary data collection",
      "SPSS, Excel & Google Forms",
    ],
    highlight: "2,000",
    highlightLabel: "Research Respondents",
  },
  {
    number: "02",
    type: "Community Fieldwork",
    title: "Community Development — Westlands Subcounty",
    description:
      "Field-based community development work supporting self-help groups through capacity building, financial literacy, entrepreneurship training and programme monitoring.",
    details: [
      "Community training & facilitation",
      "Field data collection and reporting",
      "Stakeholder and group engagement",
      "Programme documentation & meeting records",
    ],
    highlight: "250+",
    highlightLabel: "Beneficiaries Reached",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="border-t border-white/10 bg-[#080b10] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Research & Fieldwork
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            From field data to real-world understanding.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            My analytical work is grounded in direct experience collecting
            information, engaging communities and investigating real-world
            social and development challenges.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {researchProjects.map((project) => (
            <article
              key={project.number}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-8"
            >
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm font-semibold text-cyan-400">
                  {project.number}
                </span>

                <span className="text-xs uppercase tracking-wider text-gray-500">
                  {project.type}
                </span>
              </div>

              <h3 className="mt-9 max-w-xl text-2xl font-bold leading-tight">
                {project.title}
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-7">
                {project.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex items-end gap-3">
                <span className="text-4xl font-bold text-white">
                  {project.highlight}
                </span>

                <span className="pb-1 text-sm text-gray-500">
                  {project.highlightLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}