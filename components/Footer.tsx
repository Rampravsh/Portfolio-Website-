"use client";

import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#e4d9c8] bg-[#2e3b23] text-[#f7f1e8] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Brand */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="#home"
              className="font-serif text-3xl font-bold tracking-tight text-white flex items-center gap-2"
            >
              <span>Rampravesh</span>
              <span className="h-2 w-2 rounded-full bg-[#cb7b43]" />
            </Link>
            <p className="text-xs text-[#c2b6a6]">
              Full Stack • Mobile • AI Developer & Software Architect
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#dfd5c7]">
            <Link href="#home" className="transition hover:text-white">Home</Link>
            <Link href="#about" className="transition hover:text-white">About</Link>
            <Link href="#skills" className="transition hover:text-white">Skills</Link>
            <Link href="#projects" className="transition hover:text-white">Projects</Link>
            <Link href="#tech-stack" className="transition hover:text-white">Architecture</Link>
            <Link href="#contact" className="transition hover:text-white">Contact</Link>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rampravsh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/20"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/20"
            >
              <FaLinkedinIn size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll Back To Top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cb7b43] text-white shadow-md transition hover:scale-110"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-[#a39786]">
          <p>© {new Date().getFullYear()} Rampravesh. All rights reserved. Built with Next.js, React & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
}
