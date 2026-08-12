"use client";

import { motion, Variants } from "framer-motion";
import { Layers, Zap, Network, Wrench, Cpu, Check, Sparkles } from "lucide-react";

const architecturePatterns = [
  "MVC Architecture",
  "Clean Architecture",
  "Feature-Based Architecture",
  "Modular Architecture",
  "Component-Based Design",
  "RESTful API Architecture",
  "Monorepo Architecture",
  "Scalable Folder Structure",
  "Design Patterns (Factory, Observer, Singleton)",
];

const performanceOptimizations = [
  "Framer Motion (Fluid UI Animations)",
  "Code Splitting & Dynamic Imports",
  "Lazy Loading & Image Optimization",
  "Bundle Optimization & Tree Shaking",
  "React Memoization (useMemo, useCallback)",
  "DOM Virtualization & Micro-interactions",
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
  "VS Code & Cursor AI",
  "Postman & Bruno API Client",
  "Figma (UI Design & Systems)",
  "Chrome DevTools",
  "ESLint & Prettier",
  "FFmpeg (Media Processing)",
  "Docker Containerization",
  "Git Flow & Branching Strategy",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative border-t border-[#e4d9c8] bg-[#f7f1e8] py-20 lg:py-28 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-linear-to-bl from-[#cb7b43]/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
            <Network size={14} className="text-[#cb7b43]" />
            <span>Architecture & Principles</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl">
            Software Architecture & <span className="italic text-[#cb7b43]">CS Core</span>.
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[#555]">
            Strong engineering foundations built on clean architecture, Framer Motion fluid interactions, performance optimization techniques, and standardized development tooling.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          
          {/* Card 1: Architecture */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm transition-all duration-300 hover:border-[#cb7b43] hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2e3b23] text-[#e2a867] transition-transform duration-300 group-hover:scale-110">
                <Layers size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                Architecture Patterns
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Structuring maintainable codebases
              </p>

              <motion.div variants={containerVariants} className="mt-6 space-y-2.5">
                {architecturePatterns.map((item) => (
                  <motion.div variants={itemVariants} key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Performance & Animations */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group rounded-3xl border border-[#cb7b43]/40 bg-[#fdf8f1] p-6 shadow-md transition-all duration-300 hover:border-[#cb7b43] hover:shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#cb7b43]/10 blur-xl" />
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2e3b23] text-[#e2a867] transition-transform duration-300 group-hover:scale-110">
                <Zap size={22} />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-[#1d1d1d]">
                  Performance & Motion
                </h3>
                <span className="flex items-center gap-1 rounded-full bg-[#cb7b43]/15 px-2 py-0.5 text-[10px] font-bold text-[#cb7b43]">
                  <Sparkles size={10} />
                  Motion
                </span>
              </div>
              <p className="mt-1 text-xs text-[#6b6258]">
                Framer Motion & speed tuning
              </p>

              <motion.div variants={containerVariants} className="mt-6 space-y-2.5">
                {performanceOptimizations.map((item) => (
                  <motion.div
                    variants={itemVariants}
                    key={item}
                    className={`flex items-start gap-2 text-xs font-medium ${
                      item.includes("Framer Motion") ? "text-[#cb7b43] font-semibold" : "text-[#333]"
                    }`}
                  >
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: CS Fundamentals */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm transition-all duration-300 hover:border-[#cb7b43] hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2e3b23] text-[#e2a867] transition-transform duration-300 group-hover:scale-110">
                <Cpu size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                CS Fundamentals
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Algorithmic & system principles
              </p>

              <motion.div variants={containerVariants} className="mt-6 space-y-2.5">
                {csFundamentals.map((item) => (
                  <motion.div variants={itemVariants} key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4: Dev Tools & Workflow */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 shadow-sm transition-all duration-300 hover:border-[#cb7b43] hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2e3b23] text-[#e2a867] transition-transform duration-300 group-hover:scale-110">
                <Wrench size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-[#1d1d1d]">
                Tools & Workflow
              </h3>
              <p className="mt-1 text-xs text-[#6b6258]">
                Developer environment & tooling
              </p>

              <motion.div variants={containerVariants} className="mt-6 space-y-2.5">
                {devTools.map((item) => (
                  <motion.div variants={itemVariants} key={item} className="flex items-start gap-2 text-xs font-medium text-[#333]">
                    <Check size={14} className="text-[#cb7b43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

