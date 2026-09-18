const experiences = [
  {
    period: "2025",
    organization: "Canadian High Commission — Nairobi",
    role: "Property Management Team Intern",
    description:
      "Supported property preparation, inventory management, compliance checks, contractor coordination, documentation and operational readiness for staff residences.",
  },
  {
    period: "2024",
    organization: "Nairobi City County Government",
    role: "Community Development Intern — Westlands Subcounty",
    description:
      "Supported community development programmes involving self-help groups, training, field data collection, reporting and stakeholder engagement, reaching approximately 250 beneficiaries.",
  },
  {
    period: "Research",
    organization: "St. Paul's University",
    role: "Undergraduate Researcher",
    description:
      "Conducted a large-scale study examining community-based interventions and mental health awareness in Mathare, using questionnaires, interviews, focus groups and quantitative analysis.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 bg-[#080b10] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Professional Background
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Experience
        </h2>

        <div className="mt-14">
          {experiences.map((experience) => (
            <div
              key={experience.organization}
              className="grid gap-5 border-t border-white/10 py-9 md:grid-cols-[120px_1fr_1.4fr]"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {experience.period}
              </p>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {experience.role}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {experience.organization}
                </p>
              </div>

              <p className="max-w-2xl leading-7 text-gray-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}