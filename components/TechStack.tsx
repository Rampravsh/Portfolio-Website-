"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Network, Wrench, GitBranch, Cpu, Terminal, Check } from "lucide-react";

const architecturePatterns = [
  "MVC Architecture",
  "Clean Architecture",
  "Feature-Based Architecture",
  "Modular Architecture",
  "Component-Based Design",
  "RESTful Architecture",
  "Monorepo Architecture",
  "Scalable Folder Structure",
  "Design Patterns (Factory, Observer, Singleton)",
];

const performanceOptimizations = [
  "Code Splitting & Dynamic Imports",
  "Lazy Loading",
  "Next.js Image Optimization",
  "Bundle Optimization & Tree Shaking",
  "React Memoization (useMemo, useCallback)",
  "DOM Virtualization",
  "Redis & Browser Caching",
  "Infinite Scroll & Pagination",
];

const csFundamentals = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Functional Programming",
  "Operating Systems Fundamentals",
  "Computer Networks (TCP/IP, HTTP/HTTPS)",
  "Database Management Systems (DBMS)",
];

const devTools = [
  "VS Code & Cursor",
  "Postman & Bruno API Client",
  "Figma (UI Design & Systems)",
  "Chrome DevTools",
  "ESLint & Prettier",
  "FFmpeg (Audio/Video Processing)",
  "Docker Containerization",
  "Git Flow & Branching Strategy",
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative border-t border-[#e4d9c8] bg-[#f7f1e8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
            <Network size={14} className="text-[#cb7b43]" />
            <span>Architecture & Principles</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl">
            Software Architecture & <span className="italic text-[#cb7b43]">CS Core</span>.
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[#555]">
            Strong engineering foundations built on clean architecture, performance optimization techniques, and standardized development tooling.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                <Layers size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                Architecture Patterns
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Structuring maintainable codebases
              </p>

              <div className="mt-6 space-y-2.5">
                {architecturePatterns.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                <Zap size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                Performance Engineering
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Maximizing speed & efficiency
              </p>

              <div className="mt-6 space-y-2.5">
                {performanceOptimizations.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: CS Fundamentals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                <Cpu size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                CS Fundamentals
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Algorithmic & system principles
              </p>

              <div className="mt-6 space-y-2.5">
                {csFundamentals.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Dev Tools & Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                <Wrench size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                Tools & Workflow
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Developer environment & tooling
              </p>

              <div className="mt-6 space-y-2.5">
                {devTools.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
