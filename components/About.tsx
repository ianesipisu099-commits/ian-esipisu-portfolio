export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#080b10] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Research-minded.
            <br />
            Data-driven.
            <br />
            Built to execute.
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-xl leading-9 text-gray-300">
            I&apos;m a multidisciplinary professional working at the
            intersection of data analytics, research, financial analysis and
            digital technology.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            My background in community development and field research taught me
            how to understand problems from the ground up. I&apos;ve since
            expanded that foundation into SQL, Python, Power BI and financial
            analysis, allowing me to move from collecting information to
            analyzing it and communicating actionable findings.
          </p>

          <p className="mt-6 leading-8 text-gray-400">
            My experience spans public-sector community development,
            international mission operations, independent research, AI data
            work and digital projects. I&apos;m particularly interested in work
            where analytical thinking, technology and real-world problem
            solving intersect.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="mt-1 text-sm text-gray-500">
                Featured Analytics Projects
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">2,000</p>
              <p className="mt-1 text-sm text-gray-500">
                Research Respondents
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">250+</p>
              <p className="mt-1 text-sm text-gray-500">
                Community Beneficiaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}