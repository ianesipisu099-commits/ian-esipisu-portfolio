
"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Kenya Development Dashboard",
    category: "Power BI · Data Analytics",
    description:
      "Interactive analysis of Kenya's economic, labor and digital development using World Bank indicators from 2000–2025.",
    image: "/images/projects/kenya-development-dashboard.png",
    imageAlt: "Kenya Development Dashboard preview",
    tags: ["Power BI", "DAX", "Power Query", "World Bank Data"],
    link: "/projects/kenya-development-dashboard",
    linkText: "View Project",
    external: false,
  },
  {
    number: "02",
    title: "Retail Sales & Customer Analytics",
    category: "SQL · PostgreSQL",
    description:
      "Analysis of approximately 100,000 e-commerce orders covering sales trends, product performance, customer behavior and RFM segmentation.",
    image: "/images/projects/retail-sales-analytics.png",
    imageAlt: "Retail Sales and Customer Analytics preview",
    tags: ["PostgreSQL", "SQL", "CTEs", "Window Functions", "RFM"],
    link: "https://github.com/ianesipisu099-commits/retail-sql-analytics",
    linkText: "View on GitHub",
    external: true,
  },
  {
    number: "03",
    title: "Loan Portfolio & Credit Risk Analysis",
    category: "SQL · Excel · Financial Analysis",
    description:
      "Analysis of 39,717 historical LendingClub loans using PostgreSQL and Excel to evaluate portfolio performance, repayment outcomes, borrower risk and loan characteristics.",
    image: "/images/projects/loan-portfolio-risk.png",
    imageAlt: "Loan Portfolio and Credit Risk Analysis preview",
    tags: [
      "PostgreSQL",
      "SQL",
      "Excel",
      "Credit Risk",
      "Portfolio Analysis",
      "Data Visualization",
    ],
    link: "https://github.com/ianesipisu099-commits/loan-portfolio-analysis",
    linkText: "View on GitHub",
    external: true,
  },
  {
    number: "04",
    title: "Financial Markets & Portfolio Risk",
    category: "Python · Financial Analysis",
    description:
      "Cross-asset analysis of returns, volatility, correlation, drawdowns and portfolio diversification using historical market data.",
    image: "/images/projects/financial-markets-risk.png",
    imageAlt: "Financial Markets and Portfolio Risk preview",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "yfinance"],
    link: "https://github.com/ianesipisu099-commits/financial-markets-python-analysis",
    linkText: "View on GitHub",
    external: true,
  },
  {
    number: "05",
    title: "Retail Profitability Analysis",
    category: "SQL · PostgreSQL",
    description:
      "An end-to-end retail analytics project investigating sales performance, discount strategies, product profitability and returns using PostgreSQL.",
    image: "/images/projects/retail-profitability.png",
    imageAlt: "Retail Profitability Analysis preview",
    tags: [
      "PostgreSQL",
      "SQL",
      "Data Analysis",
      "Profitability Analysis",
      "Business Intelligence",
    ],
    link: "https://github.com/ianesipisu099-commits/retail-profitability-analysis",
    linkText: "View on GitHub",
    external: true,
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#0b0f15] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Applied projects demonstrating how I use data and technology to
            investigate real questions and communicate useful findings.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {project.number}
                </span>

                <span className="text-xs uppercase tracking-wider text-gray-500">
                  {project.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedImage({
                    src: project.image,
                    alt: project.imageAlt,
                  })
                }
                aria-label={`Enlarge image: ${project.title}`}
                className="mt-6 block aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-[#111827] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>

              <h3 className="mt-7 text-2xl font-bold leading-tight">
                {project.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                <a
                  href={project.link}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-cyan-300"
                >
                  {project.linkText}
                </a>

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged project preview"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
