"use client";

import Link from "next/link";
import {
  Map,
  ArrowLeft,
  Home,
  FileText,
  HelpCircle,
  ShieldCheck,
  FolderGit2,
  Code,
  Layers,
  Mail,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SitemapPage() {
  const mainPages = [
    {
      title: "Home Portfolio",
      href: "/",
      description: "Main portfolio homepage with hero, highlights, and interactive sections.",
      icon: Home,
    },
    {
      title: "Interactive Resume",
      href: "/resume",
      description: "Complete professional resume, skill matrix, projects, and print view.",
      icon: FileText,
    },
    {
      title: "FAQ & Knowledge Base",
      href: "/faq",
      description: "Answers to common questions regarding services, tech stack, and hiring.",
      icon: HelpCircle,
    },
    {
      title: "Terms & Conditions",
      href: "/terms",
      description: "Legal policies, code licensing, acceptable use, and privacy guidelines.",
      icon: ShieldCheck,
    },
    {
      title: "XML Sitemap File",
      href: "/sitemap.xml",
      description: "Search engine readable XML sitemap for Google bot indexing.",
      icon: Map,
    },
  ];

  const homepageSections = [
    { title: "Home Hero", href: "/#home", tag: "Main Banner" },
    { title: "About & Engineering Philosophy", href: "/#about", tag: "Background" },
    { title: "Skill Matrix & Competencies", href: "/#skills", tag: "Tech Skills" },
    { title: "Featured Projects", href: "/#projects", tag: "Portfolio Work" },
    { title: "System Architecture", href: "/#tech-stack", tag: "Tech Stack" },
    { title: "Contact & Collaboration", href: "/#contact", tag: "Get in Touch" },
  ];

  const featuredProjects = [
    {
      title: "Easy Ride - Taxi Booking Platform",
      href: "https://github.com/Rampravsh/Easy-Ride--Taxi-Booking-App",
      tech: "React Native, Node.js, Express, MongoDB, WebSockets",
    },
    {
      title: "PragyaOS - Next-Level LMS Platform",
      href: "https://github.com/Rampravsh/PragyaOS",
      tech: "Next.js, React.js, TypeScript, Express, MongoDB",
    },
    {
      title: "Cricket - Real-Time Scoring App",
      href: "https://github.com/Rampravsh/Cricket-Live-Score",
      tech: "React.js, Node.js, WebSockets, Tailwind CSS",
    },
    {
      title: "OpenCV Motion & Gesture Detector",
      href: "https://github.com/Rampravsh",
      tech: "Python, OpenCV, MediaPipe, NumPy",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#1d1d1d] selection:bg-[#cb7b43] selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="relative border-b border-[#e4d9c8] bg-[#f7f1e8] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold text-[#2f2a24] transition-all hover:bg-[#2e3b23] hover:text-white"
              >
                <ArrowLeft size={14} />
                <span>Back to Home</span>
              </Link>
              
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
                <Map size={14} className="text-[#cb7b43]" />
                <span>Site Directory</span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-5xl lg:text-6xl">
                Website <span className="italic text-[#cb7b43]">Sitemap</span>.
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#555]">
                Complete navigation structure and directory of all pages, portfolio sections, and project resources.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
            
            {/* Main Application Pages */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-[#2e3b23]">
                <Layers size={18} className="text-[#cb7b43]" />
                <span>Core Application Pages</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mainPages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.title}
                      href={page.href}
                      className="group flex flex-col justify-between rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cb7b43] hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867] transition-colors group-hover:bg-[#cb7b43] group-hover:text-white">
                            <Icon size={20} />
                          </div>
                          <span className="font-mono text-xs text-[#cb7b43] font-semibold">
                            {page.href}
                          </span>
                        </div>

                        <h3 className="mt-4 font-serif text-lg font-bold text-[#1d1d1d]">
                          {page.title}
                        </h3>

                        <p className="mt-1 text-xs text-[#555] leading-relaxed">
                          {page.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#ebdcca] flex items-center gap-1.5 text-xs font-semibold text-[#2e3b23] group-hover:text-[#cb7b43]">
                        <span>Visit Page</span>
                        <ExternalLink size={12} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Homepage Sections */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-[#2e3b23]">
                <Home size={18} className="text-[#cb7b43]" />
                <span>Homepage Navigation Anchor Sections</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {homepageSections.map((sec) => (
                  <Link
                    key={sec.title}
                    href={sec.href}
                    className="flex items-center justify-between rounded-xl border border-[#ebdcca] bg-[#f7f1e8] px-5 py-4 text-xs font-semibold text-[#1d1d1d] transition-all hover:bg-[#2e3b23] hover:text-white group"
                  >
                    <span>{sec.title}</span>
                    <span className="rounded-md border border-[#c8b79a]/40 bg-[#fdf8f1] px-2.5 py-0.5 text-[10px] font-bold text-[#6b6258] group-hover:bg-white/20 group-hover:text-white">
                      {sec.tag}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-[#2e3b23]">
                <FolderGit2 size={18} className="text-[#cb7b43]" />
                <span>Featured Open Source Repositories</span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {featuredProjects.map((proj) => (
                  <a
                    key={proj.title}
                    href={proj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-5 shadow-xs transition-all hover:border-[#cb7b43]"
                  >
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#1d1d1d]">
                        {proj.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#6b6258] font-mono">
                        {proj.tech}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#cb7b43]">
                      <span>View GitHub Repository</span>
                      <ExternalLink size={12} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
