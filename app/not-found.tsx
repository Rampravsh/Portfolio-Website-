"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, FileText, HelpCircle, Map, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#1d1d1d] flex flex-col justify-between selection:bg-[#cb7b43] selection:text-white">
      
      {/* Top Navbar Minimal */}
      <header className="border-b border-[#e8ded0] bg-[#f7f1e8]/90 py-6 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="group flex items-center gap-2 font-serif text-2xl font-bold text-[#1d1d1d]">
            <span>Rampravesh</span>
            <span className="h-2 w-2 rounded-full bg-[#cb7b43] transition-transform duration-300 group-hover:scale-150" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-2 text-xs font-semibold text-[#2f2a24] transition-all hover:bg-[#2e3b23] hover:text-white shadow-xs"
          >
            <ArrowLeft size={14} />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Hero Content */}
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#cb7b43]/30 bg-[#cb7b43]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#cb7b43]">
          <Sparkles size={14} />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Big 404 Display */}
        <h1 className="mt-6 font-serif text-7xl font-extrabold tracking-tight text-[#1d1d1d] sm:text-9xl">
          4<span className="italic text-[#cb7b43]">0</span>4
        </h1>

        <h2 className="mt-4 font-serif text-2xl font-bold text-[#2e3b23] sm:text-3xl">
          Lost in Digital Space?
        </h2>

        <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-[#555]">
          The page you are looking for might have been moved, renamed, or does not exist. Explore the quick links below to get back on track.
        </p>

        {/* Quick Navigation Cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/"
            className="group flex flex-col items-center rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cb7b43] hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867] transition-colors group-hover:bg-[#cb7b43] group-hover:text-white">
              <Home size={20} />
            </div>
            <h3 className="mt-3 font-serif text-base font-bold text-[#1d1d1d]">Home Page</h3>
            <p className="mt-1 text-xs text-[#6b6258]">Overview & Hero section</p>
          </Link>

          <Link
            href="/faq"
            className="group flex flex-col items-center rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cb7b43] hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867] transition-colors group-hover:bg-[#cb7b43] group-hover:text-white">
              <HelpCircle size={20} />
            </div>
            <h3 className="mt-3 font-serif text-base font-bold text-[#1d1d1d]">FAQ Page</h3>
            <p className="mt-1 text-xs text-[#6b6258]">Common questions & answers</p>
          </Link>

          <Link
            href="/sitemap"
            className="group flex flex-col items-center rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cb7b43] hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867] transition-colors group-hover:bg-[#cb7b43] group-hover:text-white">
              <Map size={20} />
            </div>
            <h3 className="mt-3 font-serif text-base font-bold text-[#1d1d1d]">Sitemap</h3>
            <p className="mt-1 text-xs text-[#6b6258]">Complete website directory</p>
          </Link>

          <Link
            href="/resume"
            className="group flex flex-col items-center rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#cb7b43] hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867] transition-colors group-hover:bg-[#cb7b43] group-hover:text-white">
              <FileText size={20} />
            </div>
            <h3 className="mt-3 font-serif text-base font-bold text-[#1d1d1d]">Resume</h3>
            <p className="mt-1 text-xs text-[#6b6258]">View experience & skills</p>
          </Link>
        </div>

        {/* Back to Home CTA */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-[#2e3b23] px-8 py-4 text-sm font-semibold text-[#f7f1e8] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#3f4f2d] hover:shadow-lg"
          >
            <Home size={18} className="text-[#e2a867]" />
            <span>Back to Main Portfolio</span>
          </Link>
        </div>

      </main>

      {/* Footer Minimal */}
      <footer className="border-t border-[#e4d9c8] bg-[#efe3d3]/60 py-6 text-center text-xs text-[#6b6258]">
        <p>© {new Date().getFullYear()} Rampravesh. All rights reserved.</p>
      </footer>

    </div>
  );
}
