"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Full-Stack Web" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI & ML Workflows" },
  { id: "realtime", label: "Real-Time Systems" },
];

const projects = [
  {
    title: "Easy Ride - Taxi Booking App Platform",
    category: "mobile",
    description:
      "Industrial-grade ride-hailing ecosystem comprising Customer Mobile App, Driver/Rider Mobile App, and Admin Web Management Dashboard with real-time GPS tracking, ride dispatch, and automated fare calculation.",
    tags: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Google Maps API", "JWT"],
    github: "https://github.com/Rampravsh/Easy-Ride--Taxi-Booking-App",
    demo: "https://github.com/Rampravsh/Easy-Ride--Taxi-Booking-App",
    badge: "Featured • Industrial Level",
  },
  {
    title: "PragyaOS - Next-Level LMS Platform",
    category: "web",
    description:
      "Full-stack ed-tech Learning Management System (LMS) with complete frontend & backend architecture, featuring course creation, student progress tracking, interactive video player, and role-based access control.",
    tags: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Rampravsh/PragyaOS",
    demo: "https://github.com/Rampravsh/PragyaOS",
    badge: "Full-Stack • EdTech LMS",
  },
  {
    title: "Cricket - Real-Time Live Scoring Application",
    category: "realtime",
    description:
      "High-performance real-time cricket scoring application built with Socket.IO for instantaneous ball-by-ball updates, live scoreboard synchronization, match statistics, and spectator tracking.",
    tags: ["React.js", "Node.js", "Express.js", "Socket.IO", "WebSockets", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Rampravsh/Cricket",
    demo: "https://github.com/Rampravsh/Cricket",
    badge: "Real-Time • Socket.IO",
  },
  {
    title: "Air-Writing - Computer Vision Gesture Recognition",
    category: "ai",
    description:
      "Computer vision application leveraging MediaPipe hand-tracking landmark detection and OpenCV for real-time virtual air-canvas drawing, fingertip gesture control, and character recognition.",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "Computer Vision", "Machine Learning"],
    github: "https://github.com/Rampravsh/Air-Writing",
    demo: "https://github.com/Rampravsh/Air-Writing",
    badge: "AI • Computer Vision",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative border-t border-[#e4d9c8] bg-[#f7f1e8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
            <FolderGit2 size={14} className="text-[#cb7b43]" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl">
            Selected <span className="italic text-[#cb7b43]">Projects</span> & Systems.
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[#555]">
            A showcase of production-ready applications, cross-platform mobile products, and AI workflow integrations built with scalable engineering standards.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#2e3b23] text-[#f7f1e8] shadow-md scale-105"
                    : "border border-[#e4d7c5] bg-[#fdf8f1] text-[#4a4a4a] hover:bg-[#efe3d3] hover:text-[#1d1d1d]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cb7b43] hover:shadow-xl"
              >
                {/* Decorative Geometric Line */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-md bg-linear-to-r from-[#2e3b23] via-[#cb7b43] to-[#e2a867] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#cb7b43]/30 bg-[#cb7b43]/10 px-3.5 py-1 text-xs font-semibold text-[#cb7b43]">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Source Code"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcd0bf] bg-[#f7f1e8] text-[#1d1d1d] transition-all hover:bg-[#2e3b23] hover:text-white"
                      >
                        <FaGithub size={16} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Live Project"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcd0bf] bg-[#f7f1e8] text-[#1d1d1d] transition-all hover:bg-[#2e3b23] hover:text-white"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold leading-tight text-[#1d1d1d]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#555]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#ebdcca] pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#dfd4c3] bg-[#f7f1e8] px-3 py-1 text-xs font-medium text-[#2d2a26]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Projects GitHub Banner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#e4d7c5] bg-[#efe3d3]/80 p-8 text-center sm:flex-row sm:text-left shadow-sm">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#1d1d1d]">
              Want to explore more projects?
            </h3>
            <p className="mt-1 text-xs text-[#555]">
              Check out all my open-source repositories, experiments, and contributions on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Rampravsh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-[#2e3b23] px-7 py-4 text-sm font-semibold text-[#f7f1e8] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#3f4f2d] shrink-0"
          >
            <FaGithub size={18} />
            <span>More Projects on GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
