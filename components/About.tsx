"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Layers, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Tech Stack Mastered", value: "15+" },
  { label: "Code Quality & Precision", value: "100%" },
];

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Web Engineering",
    description:
      "Designing responsive, accessible, and fast web applications using React, Next.js, Node.js, Express, and modern CSS frameworks like Tailwind.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "Integrating OpenAI & Gemini LLM APIs, prompt engineering, computer vision workflows with OpenCV/NumPy, and building custom AI chatbots.",
  },
  {
    icon: Layers,
    title: "Mobile & Real-Time Apps",
    description:
      "Developing cross-platform mobile apps with React Native & Expo, alongside high-performance WebSocket & Socket.IO real-time architectures.",
  },
  {
    icon: ShieldCheck,
    title: "Software Architecture & Security",
    description:
      "Applying Clean Architecture, MVC patterns, JWT/OAuth authentication, RBAC, rate limiting, and robust database indexing (PostgreSQL, MongoDB, Redis).",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-[#e4d9c8] bg-[#f7f1e8] py-20 lg:py-28">
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#cb7b43" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
            <Terminal size={14} className="text-[#cb7b43]" />
            <span>Engineering Core</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl">
            Passionate About Crafting <span className="italic text-[#cb7b43]">Scalable</span> Systems.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Bio Text */}
          <div className="lg:col-span-6 space-y-6 text-base leading-relaxed text-[#444]">
            <p>
              I am a <strong className="text-[#1d1d1d]">Full Stack Developer</strong> and <strong className="text-[#1d1d1d]">Software Architect</strong> with a solid foundation in Computer Science fundamentals, Object-Oriented Programming, Data Structures, and Algorithms.
            </p>
            <p>
              My expertise spans the entire software development lifecycle—from designing sleek, responsive user interfaces with <strong className="text-[#1d1d1d]">React, Next.js, and Tailwind CSS</strong> to building secure, scalable backends with <strong className="text-[#1d1d1d]">Node.js, Express, FastAPI, and Spring Boot</strong>.
            </p>
            <p>
              Whether it&apos;s deploying cross-platform mobile apps with <strong className="text-[#1d1d1d]">React Native</strong>, engineering real-time data pipelines using <strong className="text-[#1d1d1d]">WebSockets and Redis</strong>, or harnessing <strong className="text-[#1d1d1d]">AI APIs (OpenAI / Gemini)</strong> for workflow automation, I build with performance, maintainability, and user experience at the core.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#2d2a26]">
                <CheckCircle2 size={18} className="text-[#cb7b43]" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#2d2a26]">
                <CheckCircle2 size={18} className="text-[#cb7b43]" />
                <span>Performance Tuning</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#2d2a26]">
                <CheckCircle2 size={18} className="text-[#cb7b43]" />
                <span>AI & Automation</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#2d2a26]">
                <CheckCircle2 size={18} className="text-[#cb7b43]" />
                <span>Cross-Platform Apps</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cb7b43] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#1d1d1d]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#555]">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-[#e4d7c5] bg-[#efe3d3]/70 p-6 md:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="font-serif text-3xl font-extrabold text-[#2e3b23] sm:text-4xl">
                {stat.value}
              </h4>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#6b6258]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
