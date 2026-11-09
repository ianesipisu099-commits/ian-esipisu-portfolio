
const metrics = [
  { value: "39,717", label: "Loans analysed" },
  { value: "$434.81M", label: "Total funded amount" },
  { value: "14.59%", label: "Charge-off rate on resolved loans" },
  { value: "2007–2011", label: "Origination period" },
];

const findings = [
  {
    number: "01",
    title: "Credit grade strongly differentiated risk",
    description:
      "Charge-off rates increased from 5.99% for Grade A loans to 33.78% for Grade G loans. Lower-rated grades showed substantially higher observed credit losses.",
  },
  {
    number: "02",
    title: "Longer loan terms carried higher risk",
    description:
      "Loans with 60-month terms had a 25.31% charge-off rate, compared with 11.09% for 36-month loans.",
  },
  {
    number: "03",
    title: "High revolving utilisation indicated elevated risk",
    description:
      "Borrowers with revolving credit utilisation above 80% had a 20.09% charge-off rate, compared with 9.92% among borrowers in the 0–20% utilisation group.",
  },
  {
    number: "04",
    title: "Portfolio exposure was concentrated in selected grades",
    description:
      "The analysis examined how funded capital was distributed across credit grades, helping distinguish portfolio exposure from the risk of individual loans.",
  },
];

const techniques = [
  "PostgreSQL",
  "SQL",
  "CTEs",
  "Window Functions",
  "Conditional Aggregation",
  "Data Cleaning",
  "Data Validation",
  "Risk Segmentation",
  "Excel",
  "Data Visualisation",
];

const charts = [
  {
    title: "Loan Status Distribution",
    description:
      "Breakdown of loans across fully paid, charged-off and current statuses.",
    image: "/images/projects/loan-portfolio/loan-status-distribution.png",
  },
  {
    title: "Charge-Off Rate by Credit Grade",
    description:
      "Comparison of observed charge-off rates across borrower credit grades.",
    image: "/images/projects/loan-portfolio/charge-off-by-grade.png",
  },
  {
    title: "Charge-Off Rate by Loan Term",
    description:
      "Comparison of charge-off rates between 36-month and 60-month loans.",
    image: "/images/projects/loan-portfolio/charge-off-by-term.png",
  },
  {
    title: "Charge-Off Rate by Revolving Utilisation",
    description:
      "Assessment of how revolving credit utilisation relates to loan outcomes.",
    image:
      "/images/projects/loan-portfolio/charge-off-by-revolving-utilisation.png",
  },
  {
    title: "Funded Amount by Credit Grade",
    description:
      "Distribution of funded capital across the portfolio's credit grades.",
    image: "/images/projects/loan-portfolio/funded-amount-by-grade.png",
  },
];

export default function LoanPortfolioAnalysis() {
  return (
    <main className="min-h-screen bg-[#080b10] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            IME<span className="text-cyan-400">.</span>
          </a>

          <a
            href="/#projects"
            className="text-sm text-gray-400 transition hover:text-cyan-400"
          >
            ← Back to Projects
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            PostgreSQL · Credit Risk Analytics
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Loan Portfolio &amp;
            <span className="block text-cyan-400">
              Credit Risk Analysis
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            An end-to-end analysis of 39,717 historical loans, examining
            portfolio composition, borrower characteristics and credit
            performance to identify patterns associated with loan defaults
            and credit risk.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {techniques.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/ianesipisu099-commits/loan-portfolio-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#080b10] transition hover:bg-cyan-300"
            >
              View GitHub Repository ↗
            </a>

            <a
              href="/#projects"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Explore Other Projects
            </a>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-white/10 bg-[#0b0f15]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Project Overview
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Understanding portfolio performance and credit risk
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-8 text-gray-400 md:text-base">
          <p>
            Lending decisions involve balancing portfolio growth with the
            risk that borrowers may fail to repay their loans. Understanding
            where credit losses occur can help financial institutions
            evaluate lending exposure and assess the characteristics
            associated with higher-risk loans.
          </p>

          <p>
            This project examined a historical LendingClub loan dataset
            covering originations from 2007 to 2011. Using PostgreSQL, I
            cleaned and validated the source data before analysing loan
            outcomes, credit grades, loan terms, borrower characteristics
            and funded capital.
          </p>

          <p>
            The objective was to move beyond basic loan counts and identify
            meaningful differences in observed credit performance across
            portfolio segments.
          </p>
        </div>
      </section>

      {/* Analytical Approach */}
      <section className="border-y border-white/10 bg-[#0b0f15]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Analytical Approach
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            From raw loan records to structured risk analysis
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Data preparation",
                description:
                  "Reviewed the 111-column dataset, addressed inconsistent values, standardised data types and corrected date-parsing issues.",
              },
              {
                number: "02",
                title: "Data validation",
                description:
                  "Performed completeness, uniqueness, chronology and financial reconciliation checks to establish a reliable analytical dataset.",
              },
              {
                number: "03",
                title: "Risk analysis",
                description:
                  "Segmented loans by status, grade, term and borrower characteristics to evaluate charge-off patterns and portfolio exposure.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#080b10] p-7"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Key Findings
        </p>

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          What the analysis revealed
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {findings.map((finding) => (
            <div
              key={finding.number}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-cyan-400/40"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {finding.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold">
                {finding.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visualisations */}
      <section className="border-y border-white/10 bg-[#0b0f15]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Project Visualisations
          </p>

          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Exploring the portfolio through data
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
            These visualisations summarise the main analytical results,
            highlighting loan outcomes, credit risk patterns and the
            distribution of funded capital.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {charts.map((chart) => (
              <div
                key={chart.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#080b10]"
              >
                <div className="flex min-h-[260px] items-center justify-center bg-[#0d121a] p-4">
                  <img
                    src={chart.image}
                    alt={chart.title}
                    className="max-h-[420px] w-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">
                    {chart.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {chart.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Implementation
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Skills and techniques applied
          </h2>
        </div>

        <div>
          <ul className="space-y-4 text-sm leading-7 text-gray-400">
            <li>
              <span className="font-semibold text-white">
                Data cleaning:
              </span>{" "}
              handling missing and inconsistent values, type conversion
              and date standardisation.
            </li>
            <li>
              <span className="font-semibold text-white">
                Data quality:
              </span>{" "}
              record-level validation, chronology checks and financial
              reconciliation.
            </li>
            <li>
              <span className="font-semibold text-white">
                SQL analysis:
              </span>{" "}
              Common Table Expressions, aggregations, CASE expressions
              and conditional calculations.
            </li>
            <li>
              <span className="font-semibold text-white">
                Risk segmentation:
              </span>{" "}
              analysing loan outcomes across grades, terms and borrower
              characteristics.
            </li>
            <li>
              <span className="font-semibold text-white">
                Reporting:
              </span>{" "}
              translating analytical results into visualisations and
              structured Excel reporting.
            </li>
          </ul>
        </div>
      </section>

      {/* Limitations */}
      <section className="border-t border-white/10 bg-[#0b0f15]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Scope and Limitations
          </p>

          <h2 className="text-2xl font-bold tracking-tight">
            Interpreting the results responsibly
          </h2>

          <p className="mt-6 max-w-4xl text-sm leading-8 text-gray-400">
            This analysis uses a historical, loan-level dataset covering
            2007–2011. It is not a monthly repayment history and does not
            support reconstruction of historical outstanding balances.
            Charge-off rates are calculated using resolved loans
            (Fully Paid and Charged Off); Current loans are excluded
            because their final outcomes are not established. The findings
            describe associations within this dataset and should not be
            interpreted as proof of causation, a predictive credit model
            or an assessment of current lending conditions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 md:flex-row md:items-center">
          <p className="text-sm text-gray-500">
            Loan Portfolio &amp; Credit Risk Analysis
          </p>

          <a
            href="https://github.com/ianesipisu099-commits/loan-portfolio-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            Explore the SQL project on GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
