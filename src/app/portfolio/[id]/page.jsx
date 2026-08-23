import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Globe,
  CheckCircle2,
  Layers,
  Tag,
  KeyRound,
  ChevronRight,
  Home,
} from "lucide-react";
import { portfolioData } from "@/app/api/portfolioData";
import PortfolioCard from "@/app/components/PortfolioCard";

/* ─── brand color tokens ─────────────────────────────────── */
const BRAND      = "#3B966A";
const BRAND_DARK = "#2d7554";
const BG         = "#fdf6e3";

/* Per-stack subtle accent (all rooted in green family) */
const stackMeta = {
  react: {
    label:    "React / Next.js",
    gradient: "from-[#3B966A] to-teal-600",
    lightBg:  "bg-green-50",
    textColor:"text-[#3B966A]",
    border:   "border-green-200",
  },
  shopify: {
    label:    "Shopify",
    gradient: "from-[#3B966A] to-emerald-700",
    lightBg:  "bg-emerald-50",
    textColor:"text-emerald-700",
    border:   "border-emerald-200",
  },
  webflow: {
    label:    "Webflow",
    gradient: "from-[#3B966A] to-cyan-700",
    lightBg:  "bg-teal-50",
    textColor:"text-teal-700",
    border:   "border-teal-200",
  },
  mern: {
    label:    "MERN Stack",
    gradient: "from-[#3B966A] to-green-800",
    lightBg:  "bg-green-50",
    textColor:"text-green-800",
    border:   "border-green-300",
  },
};

const defaultMeta = {
  label:    "Project",
  gradient: "from-[#3B966A] to-[#2d7554]",
  lightBg:  "bg-green-50",
  textColor:"text-[#3B966A]",
  border:   "border-green-200",
};

const PortfolioDetails = async ({ params }) => {
  const { id }    = await params;
  const project   = portfolioData.find((proj) => proj.id === parseInt(id));

  /* ── 404 ── */
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf6e3] px-4">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-3">Project Not Found</h1>
        <p className="text-slate-500 mb-8">
          Sorry, the project you're looking for doesn't exist.
        </p>
        <Link
          href="/portfolio"
          className="flex items-center gap-2 px-6 py-3 bg-[#3B966A] text-white rounded-full font-semibold hover:bg-[#2d7554] hover:shadow-lg transition-all"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const meta = stackMeta[project.teckStack?.toLowerCase()] || defaultMeta;

  const relatedProjects = portfolioData
    .filter((item) => item.id !== project.id && item.teckStack === project.teckStack)
    .slice(0, 3);

  /* Parse features into array */
  const rawFeatures = project.features || project.Features;
  const featuresArray = Array.isArray(rawFeatures)
    ? rawFeatures
    : typeof rawFeatures === "string"
    ? rawFeatures
        .split(/(?<=[.!?])\s+|(?<=\.)(?=[A-Z])/)
        .map((s) => s.trim())
        .filter((s) => s.length > 10)
    : [];

  const projectIndex = portfolioData.findIndex((p) => p.id === project.id);
  const prevProject  = projectIndex > 0 ? portfolioData[projectIndex - 1] : null;
  const nextProject  = projectIndex < portfolioData.length - 1 ? portfolioData[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#fdf6e3]">

      {/* ── Hero Banner ── */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${meta.gradient} py-16 px-4 lg:px-16`}>
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-8" aria-label="breadcrumb">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/portfolio" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium truncate max-w-[200px]">{project.title}</span>
          </nav>

          {/* Title + CTAs */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              {project.teckStack && (
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  {meta.label}
                </span>
              )}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-sm"
              >
                <Globe size={16} />
                Live Site
              </a>
              {project.client_link && (
                <a
                  href={project.client_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-200 text-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left column */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-right">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
              <Image
                src={project.image}
                width={800}
                height={450}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                alt={project.title}
                className="w-full object-cover aspect-video"
              />
            </div>

            {/* Quick info card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Project Info
              </h3>

              {project.teckStack && (
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded-xl ${meta.lightBg} ${meta.textColor}`}>
                    <Layers size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Stack</p>
                    <p className="text-sm font-semibold text-slate-700 capitalize">{meta.label}</p>
                  </div>
                </div>
              )}

              {project.pass && (
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-red-50 text-red-500">
                    <KeyRound size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Store Password</p>
                    <p className="text-sm font-bold text-red-600">{project.pass}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <span className={`p-2 rounded-xl ${meta.lightBg} ${meta.textColor}`}>
                  <Tag size={16} />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Technologies</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {project.technology?.length} tools used
                  </p>
                </div>
              </div>
            </div>

            {/* Links card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Links
              </h3>
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-xl border ${meta.border} ${meta.lightBg} ${meta.textColor} font-semibold text-sm hover:shadow-md transition-all`}
              >
                <ExternalLink size={16} />
                <span>Visit Live Site</span>
              </a>
              {project.client_link && (
                <a
                  href={project.client_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50 text-slate-700 font-semibold text-sm hover:shadow-md hover:border-gray-300 transition-all"
                >
                  <Github size={16} />
                  <span>Client Repository</span>
                </a>
              )}
              {project.server_link && !project.server_link.includes("full-stack online") && (
                <a
                  href={project.server_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-gray-50 text-slate-700 font-semibold text-sm hover:shadow-md hover:border-gray-300 transition-all"
                >
                  <Github size={16} />
                  <span>Server Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-3 flex flex-col gap-8" data-aos="fade-left" data-aos-delay="100">

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${meta.gradient} mb-5`} />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Project</h2>
              <p className="text-slate-600 leading-relaxed text-[15px]">{project.description}</p>
            </div>

            {/* Key Features */}
            {featuresArray.length > 0 && (
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${meta.gradient} mb-5`} />
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {featuresArray.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      data-aos="fade-up"
                      data-aos-delay={150 + i * 50}
                    >
                      <span className={`mt-0.5 shrink-0 ${meta.textColor}`}>
                        <CheckCircle2 size={18} />
                      </span>
                      <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack */}
            <div
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${meta.gradient} mb-5`} />
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.technology?.map((tech, index) => (
                  <span
                    key={index}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border ${meta.lightBg} ${meta.textColor} ${meta.border}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Prev / Next ── */}
        {(prevProject || nextProject) && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up">
            {prevProject ? (
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="group flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3B966A]/30 transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-green-50 flex items-center justify-center transition-colors">
                  <ArrowLeft size={18} className="text-slate-500 group-hover:text-[#3B966A]" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400 mb-0.5">Previous</p>
                  <p className="text-sm font-semibold text-slate-800 truncate">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="group flex items-center justify-end gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#3B966A]/30 transition-all text-right"
              >
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400 mb-0.5">Next</p>
                  <p className="text-sm font-semibold text-slate-800 truncate">{nextProject.title}</p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 group-hover:bg-green-50 flex items-center justify-center transition-colors">
                  <ChevronRight size={18} className="text-slate-500 group-hover:text-[#3B966A]" />
                </div>
              </Link>
            )}
          </div>
        )}

        {/* ── Related Projects ── */}
        {relatedProjects.length > 0 && (
          <div className="mt-20" data-aos="fade-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  More like this
                </p>
                <h2 className="text-3xl font-bold text-slate-900">Related Projects</h2>
              </div>
              <Link
                href="/portfolio"
                className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border font-semibold text-sm ${meta.border} ${meta.textColor} ${meta.lightBg} hover:shadow-md transition-all`}
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>

            <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${meta.gradient} mb-8`} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((proj, i) => (
                <div key={proj.id} data-aos="fade-up" data-aos-delay={i * 100}>
                  <PortfolioCard data={proj} />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 sm:hidden">
              <Link
                href="/portfolio"
                className={`flex items-center gap-2 px-6 py-3 rounded-full border font-semibold text-sm ${meta.border} ${meta.textColor} ${meta.lightBg}`}
              >
                View All Projects <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetails;
