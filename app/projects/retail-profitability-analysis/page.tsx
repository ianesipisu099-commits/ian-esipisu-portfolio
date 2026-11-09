
const metrics = [
  { value: "4,581", label: "Historical orders analysed" },
  { value: "$2.11M", label: "Historical sales" },
  { value: "$273.11K", label: "Historical profit" },
  { value: "12.93%", label: "Historical profit margin" },
];

const findings = [
  {
    number: "01",
    title: "High discounts were associated with substantial losses",
    description:
      "Orders with discounts of 30% or more generated a negative profit margin of -35.97%, compared with a positive 21.88% margin for orders discounted below 30%.",
  },
  {
    number: "02",
    title: "Office Supplies was particularly exposed to discount losses",
    description:
      "Within the high-discount group, Office Supplies recorded a profit margin of -115.01%, highlighting the importance of evaluating discount decisions at category level.",
  },
  {
    number: "03",
    title: "Return patterns varied across product categories",
    description:
      "Technology had the highest recorded return incidence among the three main categories at 7.77%, followed by Furniture at 7.49% and Office Supplies at 5.98%.",
  },
  {
    number: "04",
    title: "Return incidence also differed by customer segment",
    description:
      "Corporate orders had a recorded return incidence of 6.03%, compared with 5.76% for Consumer and 5.09% for Home Office orders.",
  },
];

const charts = [
  {
    title: "Discount Impact by Category",
    description:
      "Examines how higher discount levels relate to profitability across product categories.",
    image: "/images/projects/retail-profitability/discount-by-category.png",
  },
  {
    title: "Profitability: High vs. Lower Discounts",
    description:
      "Compares the financial performance of orders with discounts of 30% or more against lower-discount orders.",
    image: "/images/projects/retail-profitability/discount-comparison.png",
  },
  {
    title: "Recorded Returns by Category",
    description:
      "Compares recorded return incidence across Furniture, Office Supplies and Technology.",
    image: "/images/projects/retail-profitability/returns-by-category.png",
  },
  {
    title: "Recorded Returns by Customer Segment",
    description:
      "Explores differences in recorded return incidence among Consumer, Corporate and Home Office customers.",
    image: "/images/projects/retail-profitability/returns-by-segment.png",
  },
  {
    title: "Recorded Returns by Subcategory",
    description:
      "Identifies product subcategories with comparatively high recorded return incidence.",
    image: "/images/projects/retail-profitability/returns-by-subcategory.png",
  },
];

const techniques = [
  "PostgreSQL",
  "SQL",
  "CTEs",
  "Window Functions",
  "Conditional Aggregation",
  "CASE Expressions",
  "Data Validation",
  "Profitability Analysis",
  "Return Analysis",
  "Business Intelligence",
];

export default function RetailProfitabilityAnalysis() {
  return (
    <main className="min-h-screen bg-[#080b10] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="/" className="text-xl font-bold tracking-tight">
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
            PostgreSQL · Retail Analytics
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Retail Profitability
            <span className="block text-cyan-400">
              Analysis
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
            An end-to-end retail analysis using PostgreSQL to investigate
            sales performance, product profitability, discount strategies
            and recorded returns. The project examines where profit was
            generated, where it was lost and which areas warrant closer
            business attention.
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
              href="https://github.com/ianesipisu099-commits/retail-profitability-analysis"
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

      {/* Project Overview */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Project Overview
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Understanding what drives retail profitability
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-8 text-gray-400 md:text-base">
          <p>
            Strong sales do not necessarily translate into strong
            profitability. Discounting can increase sales volume while
            reducing margins, and product returns can create additional
            pressure on business performance.
          </p>

          <p>
            This project uses a retail orders dataset to examine sales,
            profit, discount levels and recorded returns across products,
            categories and customer segments. PostgreSQL was used to
            prepare, validate and analyse the data through a structured
            sequence of SQL scripts.
          </p>

          <p>
            The analysis focuses on turning transaction-level records
            into findings that can support better pricing, discount
            management and product performance decisions.
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
            From transaction records to business findings
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Data quality and preparation",
                description:
                  "Reviewed source tables, assessed data completeness and consistency, checked key relationships and established the historical reporting cutoff.",
              },
              {
                number: "02",
                title: "Sales and profitability",
                description:
                  "Analysed sales, profit and margins across product categories, subcategories and customer segments to understand business performance.",
              },
              {
                number: "03",
                title: "Discounts and returns",
                description:
                  "Compared profitability across discount levels and examined recorded return patterns by category, subcategory and customer segment.",
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

      {/* Key Findings */}
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
            Exploring profitability and returns through data
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
            These visualisations highlight the relationship between
            discounting and profit, alongside differences in recorded
            return patterns across the retail business.
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
                    loading="lazy"
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

      {/* Technical Implementation */}
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
                Data quality:
              </span>{" "}
              assessing record completeness, validating key fields and
              checking relationships between source tables.
            </li>

            <li>
              <span className="font-semibold text-white">
                SQL querying:
              </span>{" "}
              using Common Table Expressions, aggregations, joins and
              conditional logic to organise analytical workflows.
            </li>

            <li>
              <span className="font-semibold text-white">
                Profitability analysis:
              </span>{" "}
              calculating sales, profit and profit margins across
              business dimensions.
            </li>

            <li>
              <span className="font-semibold text-white">
                Discount analysis:
              </span>{" "}
              grouping transactions by discount levels and comparing
              their financial performance.
            </li>

            <li>
              <span className="font-semibold text-white">
                Returns analysis:
              </span>{" "}
              joining order-level return information and evaluating
              recorded return incidence across business segments.
            </li>
          </ul>
        </div>
      </section>

      {/* Business Implications */}
      <section className="border-y border-white/10 bg-[#0b0f15]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Business Implications
          </p>

          <h2 className="text-2xl font-bold tracking-tight">
            Turning analysis into practical decisions
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-white">
                Review discount policies
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Evaluate high-discount transactions by category and
                product to identify pricing decisions that may be
                undermining margins.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Investigate return patterns
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Review categories and subcategories with higher recorded
                return incidence to identify areas for further
                operational investigation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Monitor profitability
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Assess performance using profit and margin measures
                alongside sales volume rather than relying on revenue
                alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope and Limitations */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Scope and Limitations
        </p>

        <h2 className="text-2xl font-bold tracking-tight">
          Interpreting the results responsibly
        </h2>

        <p className="mt-6 max-w-4xl text-sm leading-8 text-gray-400">
          The dataset contains 10,194 transaction rows, including
          future-dated records. To avoid treating future transactions as
          historical performance, the main analysis uses records dated
          on or before 22 October 2026. This historical scope contains
          9,175 rows across 4,581 distinct orders. Return status is
          identified using the supplied returns table at order level;
          an order not listed in that table is not necessarily proof
          that no return occurred. The discount findings show observed
          associations and do not establish that discounting alone
          caused a change in profitability.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 md:flex-row md:items-center">
          <p className="text-sm text-gray-500">
            Retail Profitability Analysis
          </p>

          <a
            href="https://github.com/ianesipisu099-commits/retail-profitability-analysis"
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
