"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { title: "Home", href: "/#home" },
  { title: "About", href: "/#about" },
  { title: "Skills", href: "/#skills" },
  { title: "Projects", href: "/#projects" },
  { title: "Architecture", href: "/#tech-stack" },
  { title: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f7f1e8]/90 backdrop-blur-md border-b border-[#e8ded0]/80 transition-all duration-300">
        <div className="mx-auto flex h-20 lg:h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-3xl lg:text-4xl font-bold tracking-tight text-[#1b1b1b]"
          >
            <span>Rampravesh</span>
            <span className="h-2 w-2 rounded-full bg-[#cb7b43] transition-transform duration-300 group-hover:scale-150" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-[#2c2c2c] transition-colors hover:text-[#cb7b43]"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/resume"
            className="hidden lg:flex items-center gap-2.5 rounded-full bg-[#2e3b23] px-6 py-3 text-sm font-semibold text-[#f7f1e8] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#3f4f2d] hover:shadow-lg"
          >
            <Download size={16} className="text-[#e2a867]" />
            <span>Download Resume</span>
            <span className="flex items-center justify-center rounded-full bg-[#cb7b43] p-1 text-white">
              <ArrowUpRight size={14} />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8cabb] bg-[#f2e7d8] text-[#1b1b1b] lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#f7f1e8]/98 backdrop-blur-xl p-8 lg:hidden flex flex-col justify-between"
          >
            <div className="mt-20 flex flex-col gap-6">
              {links.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl font-bold text-[#1b1b1b] transition-colors hover:text-[#cb7b43]"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="mb-8">
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#2e3b23] py-4 text-center text-base font-semibold text-[#f7f1e8] shadow-lg"
              >
                <Download size={18} className="text-[#e2a867]" />
                <span>Download Resume</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}