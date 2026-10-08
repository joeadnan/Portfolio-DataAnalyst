import {
  ArrowUpRight,
  Download,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  BarChart3,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

import { availability, profile } from "../data/portfolio";

const skills = [
  {
    icon: Database,
    title: "SQL",
    description: "Query & Analysis",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Data Processing",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Dashboard",
  },
  {
    icon: TrendingUp,
    title: "Insights",
    description: "Business Reporting",
  },
];

export function Hero() {
  const targetRoles = availability.targetRoles || [];
  const workTypes = availability.workTypes || [];

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#070D1B] text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* RIGHT CARD
              Mobile: posisi pertama
              Desktop: kolom kanan */}
          <div className="order-1 mx-auto w-full max-w-[340px] sm:max-w-[390px] lg:order-2 lg:max-w-[430px]">
            <div className="relative rounded-[28px] border border-white/10 bg-[#111B2D] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:p-5">
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-b from-[#203652] to-[#101827]">
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="h-[240px] w-full object-cover object-top sm:h-[300px] lg:h-[365px]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent px-5 pb-5 pt-20">
                  <div className="flex items-center gap-2">
                    <BarChart3 size={17} className="text-sky-300" />

                    <p className="text-sm font-semibold text-white">
                      Data Analytics
                    </p>
                  </div>

                  <p className="mt-1 text-xs text-slate-300">
                    Data Cleaning • SQL • Visualization
                  </p>
                </div>
              </div>

              {/* Profile Details */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xl font-bold text-white">SQL</p>

                  <p className="mt-1 text-xs text-slate-400">Data Query</p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="text-xl font-bold text-sky-300">Power BI</p>

                  <p className="mt-1 text-xs text-slate-400">
                    Data Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT
              Mobile: posisi setelah foto
              Desktop: kolom kiri */}
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
            {/* Status */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2 text-xs font-medium text-sky-300 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]" />

              {profile.status}
            </div>

            {/* Intro */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              {profile.name}
            </h1>

            {/* Role */}
            <h2 className="mt-5 bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-[35px]">
              {profile.role}
            </h2>

            {/* Summary */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:mx-0">
              {profile.summary}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Lihat Project
                <ArrowUpRight size={17} />
              </a>

              <a
                href={profile.cv}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Download size={17} />
                Download CV
              </a>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi WhatsApp"
                className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-slate-300 transition hover:border-emerald-400/30 hover:text-emerald-300"
              >
                <MessageCircle size={19} />
              </a>
            </div>

            {/* Availability */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-slate-400 lg:justify-start">
              <div className="flex items-center gap-2">
                <MapPin size={17} className="text-sky-400" />

                <span>{availability.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-400" />

                <span>{availability.status}</span>
              </div>
            </div>

            {/* Target Roles */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {targetRoles.slice(0, 2).map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400"
                >
                  {role}
                </span>
              ))}

              {workTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS STRIP */}
        <div className="mt-16 border-t border-white/10 pt-8 lg:mt-24">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <BriefcaseBusiness size={15} />
            Core Expertise
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
            {skills.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/10 bg-sky-400/[0.06] text-sky-300 transition group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    {title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
