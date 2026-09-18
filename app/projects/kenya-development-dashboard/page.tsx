export default function KenyaDevelopmentDashboard() {
  const metrics = [
    { value: "$135.9B", label: "Latest GDP" },
    { value: "$2.4K", label: "GDP per Capita" },
    { value: "57.5M", label: "Population" },
    { value: "4.6%", label: "GDP Growth" },
  ];

  const findings = [
    {
      number: "01",
      title: "Economic Expansion",
      text: "Kenya's nominal GDP expanded substantially over the period analyzed, reaching approximately $135.9 billion, while GDP per capita reached roughly $2.4K.",
    },
    {
      number: "02",
      title: "Labor Market Shift",
      text: "Labor-force participation declined from the mid-70% range after 2016, while unemployment remained elevated relative to earlier periods.",
    },
    {
      number: "03",
      title: "Digital & Infrastructure Growth",
      text: "Electricity access surpassed 75%, while internet usage grew from near-zero levels in 2000 to approximately 35%, highlighting major progress alongside a continuing digital-access gap.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080b10] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="/" className="text-xl font-bold tracking-tight">
          IME<span className="text-cyan-400">.</span>
        </a>

        <a
          href="/#projects"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Projects
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Power BI · Data Analytics
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl">
          Kenya Development Dashboard
        </h1>

        <p className="mt-7 max-w-3xl text-xl leading-9 text-gray-400">
          An interactive analysis of Kenya&apos;s economic, labor and digital
          development using World Bank indicators covering 2000–2025.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {["Power BI", "DAX", "Power Query", "World Bank Data"].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b0f15] px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl font-bold text-white sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Dashboard
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Interactive Report Design
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              The final Power BI report combines headline development
              indicators with long-term economic, labor and infrastructure
              trends in a single analytical view.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
            <img
              src="/kenya-development-dashboard.png"
              alt="Kenya Development Dashboard showing GDP, GDP per capita, population, GDP growth, labor market trends and digital infrastructure indicators"
              className="h-auto w-full"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Source: World Bank — World Development Indicators
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Project Overview
          </p>

          <h2 className="mt-4 text-3xl font-bold">The Analysis</h2>
        </div>

        <div className="space-y-6 leading-8 text-gray-400">
          <p>
            The project examines how Kenya&apos;s economy, labor market and
            access to digital and physical infrastructure evolved between 2000
            and 2025.
          </p>

          <p>
            World Bank Development Indicators were transformed in Power Query
            into an analysis-ready structure. DAX measures were then used to
            calculate and present current headline indicators alongside
            historical trends.
          </p>

          <p>
            Eight indicators were analyzed across GDP, GDP growth, GDP per
            capita, population, unemployment, labor-force participation,
            electricity access and internet usage.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0f15] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Findings
          </p>

          <h2 className="mt-4 text-4xl font-bold">Key Insights</h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {findings.map((finding) => (
              <div
                key={finding.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="text-sm font-semibold text-cyan-400">
                  {finding.number}
                </span>

                <h3 className="mt-7 text-xl font-bold">{finding.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {finding.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}