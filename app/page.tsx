import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Research from "@/components/Research";
import DigitalWork from "@/components/DigitalWork";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b10] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="#" className="text-xl font-bold tracking-tight">
          IME<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden gap-7 text-sm text-gray-400 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#research" className="transition hover:text-white">
            Research
          </a>

          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-16 sm:py-20 lg:px-8">
        <div className="w-full max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Data · Research · AI · Digital Solutions
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ian Mark Esipisu
          </h1>

          <h2 className="mt-6 max-w-3xl text-2xl font-medium leading-relaxed text-gray-300 sm:text-3xl">
            Turning data, research and technology into useful insights and
            practical solutions.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I work across data analytics, research, financial analysis and
            digital technology — combining analytical thinking with practical
            project experience.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
            >
              View My Work
            </a>

            <a
              href="/ian-mark-esipisu-cv.pdf"
              download
              className="rounded-lg border border-gray-700 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
            >
              Download CV ↓
            </a>

            <a
              href="#contact"
              className="px-3 py-3 text-center font-semibold text-gray-400 transition hover:text-white"
            >
              Contact Me →
            </a>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Research />
      <DigitalWork />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}