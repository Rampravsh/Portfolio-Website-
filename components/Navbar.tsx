"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f7f1e8]/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-4xl font-bold tracking-tight text-[#1b1b1b]"
          >
            Rampravesh.
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`relative text-[15px] transition ${
                  index === 0
                    ? "text-[#c46b35]"
                    : "text-[#232323] hover:text-[#c46b35]"
                }`}
              >
                {item.title}

                {index === 0 && (
                  <span className="absolute left-0 -bottom-3 h-[2px] w-full rounded-full bg-[#c46b35]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-2 rounded-2xl bg-[#2d3b23] px-7 py-4 text-white transition hover:scale-105"
          >
            Let's Connect
            <span className="rounded-full bg-[#d59b55] p-1">
              <ArrowUpRight size={15} />
            </span>
          </Link>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed inset-0 z-40 bg-[#f7f1e8] p-10 lg:hidden"
          >
            <div className="mt-24 flex flex-col gap-8">
              {links.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-serif"
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="#contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#2d3b23] px-6 py-4 text-white"
              >
                Let's Connect
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}