"use client";

import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, Sparkles, Code2, Cpu, Globe2, Layers } from "lucide-react";
import Link from "next/link";

const highlightSkills = [
  "React",
  "React Native",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Spring Boot",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Tailwind CSS",
  "Three.js",
  "Electron.js",
  "Docker",
  "GitHub",
  "OpenAI",
  "Gemini",
  "OpenCV",
  "NumPy",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-16 lg:pb-24">
      {/* Background Decorative SVG Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-30 blur-sm"
          width="1200"
          height="800"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <circle cx="600" cy="200" r="450" stroke="#d59b55" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="600" cy="200" r="320" stroke="#2e3b23" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M100 400 Q600 100 1100 400" stroke="#cb7b43" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
        </svg>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-linear-to-br from-[#e2a867]/20 to-[#cb7b43]/10 blur-3xl" />
        <div className="absolute left-0 bottom-10 h-80 w-80 rounded-full bg-linear-to-tr from-[#2e3b23]/15 to-[#e8ded0]/30 blur-2xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          {/* Greeting Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#c8b79a] bg-[#fdf8f1]/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2f2a24] shadow-sm backdrop-blur-md">
            <Sparkles size={15} className="text-[#cb7b43]" />
            <span>Full Stack • Mobile • AI Developer</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold leading-[1.15] text-[#1d1d1d] sm:text-5xl md:text-6xl lg:text-7xl">
            Architecting <span className="italic text-[#cb7b43] font-normal">Intelligent</span>
            <br />
            Digital Experiences.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#4a4a4a] sm:text-lg lg:text-xl">
            Crafting high-performance web applications, cross-platform mobile apps, dynamic AI integrations, and scalable backend architectures.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-[#2e3b23] px-7 py-4 font-semibold text-[#f7f1e8] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#3f4f2d] hover:shadow-xl"
            >
              <span>Let&apos;s Build Together</span>
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-[#c8b79a] bg-[#fdf8f1] px-7 py-4 font-semibold text-[#2f2a24] shadow-sm transition-all duration-300 hover:bg-[#efe2cf] hover:shadow-md"
            >
              <Code2 size={18} className="text-[#cb7b43]" />
              <span>Explore Projects</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/Rampravsh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8b79a] bg-[#fdf8f1] text-[#2f2a24] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#2e3b23] hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8b79a] bg-[#fdf8f1] text-[#2f2a24] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#2e3b23] hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="https://www.instagram.com/dream.coder__?igsh=cGp3azRlaHlucG1h"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8b79a] bg-[#fdf8f1] text-[#2f2a24] shadow-sm transition-all duration-300 hover:scale-110 hover:bg-[#2e3b23] hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Top Highlighted Skills Badge Strip */}
          <div className="mt-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#6b6258] flex items-center gap-2">
              <Cpu size={14} className="text-[#cb7b43]" />
              Featured Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {highlightSkills.slice(0, 10).map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[#dfd4c3] bg-[#f2e7d8]/80 px-3 py-1.5 text-xs font-medium text-[#2d2a26] transition-colors hover:border-[#cb7b43] hover:bg-[#fdf8f1]"
                >
                  {skill}
                </span>
              ))}
              <span className="rounded-lg border border-[#cb7b43]/40 bg-[#cb7b43]/10 px-3 py-1.5 text-xs font-semibold text-[#cb7b43]">
                +10 More
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:col-span-5"
        >
          {/* Background Blob Card */}
          <div className="absolute h-130 w-95 rounded-[45px] bg-linear-to-b from-[#d69a56] to-[#b87c3b] shadow-2xl opacity-90 rotate-2" />

          {/* Main Image Frame */}
          <div className="relative h-120 w-full max-w-95 overflow-hidden rounded-[35px] border-8 border-[#efe7db] shadow-2xl sm:h-130">
            <Image
              src="/images/profile.png"
              alt="Rampravesh - Full Stack & AI Developer"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              className="object-cover object-[50%_15%]"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>

          {/* Floating Luxury Glassmorphic Note */}
          <motion.div
            initial={{ rotate: -8, opacity: 0 }}
            animate={{ rotate: -5, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-4 top-48 w-60 rounded-2xl border border-white/60 bg-[#f5d470]/95 p-4 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2 text-[#2d2d2d] font-bold text-sm">
              <Coffee size={18} className="text-[#8b5a2b]" />
              <span>Clean Code & Passion</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#3a352f]">
              Transforming complex algorithmic requirements into elegant, user-centric software.
            </p>
          </motion.div>

          {/* Floating Stat Badge */}
          <div className="absolute bottom-4 -left-4 rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1]/95 px-5 py-3.5 shadow-xl backdrop-blur-md flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
              <Layers size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#6b6258] uppercase tracking-wider">Experience</p>
              <h4 className="text-xl font-bold text-[#1f1a17]">3+ Years</h4>
            </div>
          </div>

          {/* Secondary Floating Tech Badge */}
          <div className="absolute -top-4 right-10 rounded-xl border border-[#c8b79a] bg-[#2e3b23] px-4 py-2 text-white shadow-lg flex items-center gap-2 text-xs font-medium">
            <Globe2 size={14} className="text-[#e2a867]" />
            <span>Full-Stack Architecture</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}