const education = [
  {
    status: "Ongoing",
    title: "MSc Financial Engineering",
    institution: "WorldQuant University",
    detail:
      "Graduate studies in financial markets, quantitative methods and financial engineering.",
  },
  {
    status: "2025",
    title: "Bachelor of Arts in Community Development",
    institution: "St. Paul's University, Kenya",
    detail:
      "Second Class Honours — Upper Division. Research focus included community-based interventions and applied field research.",
  },
];

const credentials = [
  "HubSpot Content Marketing",
  "HubSpot Digital Marketing",
  "Google Foundations in Generative AI",
  "HP LIFE — Data Science & Analytics",
  "HP LIFE — Critical Thinking in the AI Era",
];

export default function Education() {
  return (
    <section className="border-t border-white/10 bg-[#080b10] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Education & Credentials
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Academic Foundation
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            {education.map((item) => (
              <div
                key={item.title}
                className="border-t border-white/10 py-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <span className="text-sm font-semibold text-cyan-400">
                    {item.status}
                  </span>
                </div>

                <p className="mt-2 text-gray-300">{item.institution}</p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
            <h3 className="text-xl font-bold text-white">
              Selected Credentials
            </h3>

            <div className="mt-6 space-y-4">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="border-b border-white/10 pb-4 text-gray-300 last:border-0"
                >
                  {credential}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}