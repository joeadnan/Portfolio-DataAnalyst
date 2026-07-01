import { projects } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

type PortfolioProject = (typeof projects)[number];

function ProjectSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-slate-300"
          >
            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-orange-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectImpact({ project }: { project: PortfolioProject }) {
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
      <h4 className="font-bold text-emerald-200">Result & Impact</h4>
      <p className="mt-3 text-sm leading-7 text-slate-200">{project.result}</p>

      <ul className="mt-4 space-y-2">
        {project.impact.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Case Studies"
          title="Project & Studi Kasus Data Analyst"
          description=""
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
                      {project.category}
                    </span>
                    <a
                      href="http://"
                      className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 hover:bg-emerald-50"
                    >
                      {project.label}
                    </a>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    <strong className="text-slate-200">
                      Business Question:
                    </strong>{" "}
                    {project.problem}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div className="space-y-6">
                  <ProjectSection
                    title="Analisis yang Dilakukan"
                    items={project.analysis}
                  />
                  <ProjectSection
                    title="Langkah Pengerjaan"
                    items={project.steps}
                  />
                </div>

                <div className="space-y-6">
                  <ProjectImpact project={project} />

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="font-bold text-white">Tools</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-slate-950 px-3 py-1 text-xs text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
                    <h4 className="font-bold text-sky-200">Interview Point</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {project.interviewPoint}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
