"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const skills = [
  {
    category: "Languages",
    items: "JavaScript (ES6+), TypeScript, Python, Java, C++, SQL, HTML5, CSS3",
  },
  {
    category: "Frontend",
    items: "React.js, Next.js, React Native, Expo, Vite, Tailwind CSS, Redux Toolkit, Framer Motion, Three.js, Electron.js",
  },
  {
    category: "Backend & APIs",
    items: "Node.js, Express.js, FastAPI, Spring Boot, REST APIs, WebSockets, Socket.IO, JWT Auth, OAuth 2.0, RBAC",
  },
  {
    category: "Databases & Cloud",
    items: "MongoDB, PostgreSQL, Redis, MySQL, SQLite, Docker, Git, GitHub Actions, Firebase, Supabase, Vercel",
  },
  {
    category: "AI & Machine Learning",
    items: "OpenAI API, Gemini API, Prompt Engineering, OpenCV, MediaPipe, NumPy, Jupyter, Computer Vision",
  },
];

const projects = [
  {
    name: "Easy Ride - Taxi Booking App",
    role: "Full Stack & Mobile Developer",
    link: "https://github.com/Rampravsh/Easy-Ride--Taxi-Booking-App",
    tech: "React Native, React.js, Node.js, Express, MongoDB, Socket.IO, Google Maps API",
    points: [
      "Built a complete taxi booking platform with separate apps for passengers and drivers, plus an admin panel.",
      "Added real-time GPS tracking, ride dispatching, and dynamic fare estimation using Socket.IO and Google Maps API.",
    ],
  },
  {
    name: "PragyaOS - LMS Platform",
    role: "Full Stack Developer",
    link: "https://github.com/Rampravsh/PragyaOS",
    tech: "Next.js, React.js, TypeScript, Node.js, Express, MongoDB, Tailwind CSS",
    points: [
      "Built an online learning management system with separate logins for students, teachers, and admins.",
      "Added video streaming, student progress tracking, interactive quizzes, and course completion certificates.",
    ],
  },
  {
    name: "Cricket - Live Score App",
    role: "Backend & Full Stack Developer",
    link: "https://github.com/Rampravsh/Cricket",
    tech: "React.js, Node.js, Express, Socket.IO, WebSockets, MongoDB, Tailwind CSS",
    points: [
      "Developed a live score update system that sends ball-by-ball score changes to users in real time.",
      "Optimized backend connections to ensure fast and reliable live scoring updates for active users.",
    ],
  },
];

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f7f1e8] py-8 text-[#1d1d1d] selection:bg-[#cb7b43] selection:text-white print:bg-white print:py-0">
      
      {/* Top Action Bar (Hidden when printing) */}
      <div className="mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-[#c8b79a] bg-[#fdf8f1] px-4 py-2 text-xs font-semibold text-[#2f2a24] shadow-sm transition hover:bg-[#efe2cf]"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://rampraveshkumar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#cb7b43]/40 bg-[#cb7b43]/10 px-4 py-2 text-xs font-semibold text-[#cb7b43] shadow-sm transition hover:bg-[#cb7b43] hover:text-white"
          >
            <Globe size={15} />
            <span>Visit Live Portfolio</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-[#2e3b23] px-5 py-2.5 text-xs font-semibold text-[#f7f1e8] shadow-md transition hover:bg-[#3f4f2d]"
          >
            <Printer size={16} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Wrapper */}
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-8 shadow-xl print:m-0 print:max-w-none print:rounded-none print:border-none print:bg-white print:p-0 print:shadow-none sm:p-12">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col gap-6 border-b border-[#e4d7c5] pb-8 print:border-gray-300 print:pb-3 print:gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6 print:gap-4">
            {/* Profile Photo */}
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-4 border-[#efe7db] shadow-md shrink-0 print:h-16 print:w-16 print:border-2 print:border-gray-200">
              <Image
                src="/images/profile.png"
                alt="Rampravesh"
                width={120}
                height={120}
                className="h-full w-full object-cover object-[50%_15%]"
                priority
              />
            </div>

            <div>
              <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] print:text-2xl sm:text-4xl">
                Rampravesh
              </h1>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#cb7b43] print:text-xs print:mt-0.5 print:text-gray-700">
                Full Stack • Mobile • AI Developer
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-[#6b6258] print:text-[11px] print:mt-0.5 print:text-gray-600">
                <MapPin size={14} className="text-[#cb7b43]" />
                <span>Remote / On-Site Available</span>
              </div>
            </div>
          </div>

          {/* Active Contact Links */}
          <div className="flex flex-col gap-2 text-xs font-medium text-[#333] print:gap-1 print:text-[11px] print:text-gray-700">
            <a
              href="mailto:rampraveshkr4545@gmail.com"
              className="flex items-center gap-2 transition hover:text-[#cb7b43]"
            >
              <Mail size={14} className="text-[#cb7b43]" />
              <span>rampraveshkr4545@gmail.com</span>
            </a>

            <a
              href="https://rampraveshkumar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-[#cb7b43] transition hover:underline"
            >
              <Globe size={14} className="text-[#cb7b43]" />
              <span>rampraveshkumar.vercel.app</span>
            </a>

            <a
              href="https://github.com/Rampravsh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-[#cb7b43]"
            >
              <FaGithub size={14} className="text-[#cb7b43]" />
              <span>github.com/Rampravsh</span>
            </a>

            <a
              href="https://www.instagram.com/dream.coder__?igsh=cGp3azRlaHlucG1h"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-[#cb7b43]"
            >
              <FaInstagram size={14} className="text-[#cb7b43]" />
              <span>instagram.com/dream.coder__</span>
            </a>
          </div>
        </header>

        {/* SUMMARY */}
        <section className="mt-8 border-b border-[#e4d7c5] pb-6 print:mt-3 print:border-gray-200 print:pb-2.5">
          <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2e3b23] print:text-[13.5px] print:text-gray-900">
            Executive Summary
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#444] print:mt-1 print:text-[11.5px] print:leading-snug print:text-gray-700">
            Full Stack & Mobile Developer with 3+ years of experience building web applications, mobile apps with React Native, real-time features, and AI tool integrations. I focus on writing clean code, working with databases like PostgreSQL and MongoDB, and delivering user-friendly products. You can view my live projects at <a href="https://rampraveshkumar.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#cb7b43] underline">rampraveshkumar.vercel.app</a>.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mt-8 border-b border-[#e4d7c5] pb-6 print:mt-3 print:border-gray-200 print:pb-2.5">
          <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2e3b23] print:text-[13.5px] print:text-gray-900">
            Technical Skills & Competencies
          </h2>
          <div className="mt-4 space-y-2 text-xs print:mt-1.5 print:space-y-1 print:text-[11px] print:leading-normal">
            {skills.map((s) => (
              <div key={s.category} className="grid grid-cols-1 sm:grid-cols-4">
                <span className="font-bold text-[#1d1d1d] print:text-gray-900">
                  {s.category}:
                </span>
                <span className="text-[#444] sm:col-span-3 print:text-gray-700">
                  {s.items}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-8 border-b border-[#e4d7c5] pb-6 print:mt-3 print:border-gray-200 print:pb-2.5">
          <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2e3b23] print:text-[13.5px] print:text-gray-900">
            Featured Projects & Key Work
          </h2>
          <div className="mt-4 space-y-6 print:mt-2 print:space-y-2.5">
            {projects.map((p) => (
              <div key={p.name} className="space-y-1.5 print:space-y-0.5">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-serif text-base font-bold text-[#1d1d1d] transition hover:text-[#cb7b43] print:text-[13.5px] print:text-gray-900"
                  >
                    <span>{p.name}</span>
                    <ExternalLink size={13} className="text-[#cb7b43] transition group-hover:translate-x-0.5 print:hidden" />
                  </a>
                  <span className="text-xs font-semibold text-[#cb7b43] print:text-[11px] print:text-gray-600">
                    {p.role}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#6b6258] print:text-[10.5px] print:text-gray-600">
                  Tech Stack: {p.tech}
                </p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-[#444] print:space-y-0.5 print:text-[11px] print:leading-snug print:text-gray-700">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE & CS FUNDAMENTALS */}
        <section className="mt-8 print:mt-3">
          <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#2e3b23] print:text-[13.5px] print:text-gray-900">
            Core Technical Skills & Practices
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-[#444] print:mt-1.5 print:gap-1.5 print:text-[11px] print:text-gray-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-[#cb7b43] shrink-0 mt-0.5 print:h-3.5 print:w-3.5" />
              <span>Clean, modular code structure & easy-to-maintain codebase</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-[#cb7b43] shrink-0 mt-0.5 print:h-3.5 print:w-3.5" />
              <span>Data Structures, Algorithms & Object-Oriented Design</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-[#cb7b43] shrink-0 mt-0.5 print:h-3.5 print:w-3.5" />
              <span>Secure user login with JWT and Role-Based Access Control</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-[#cb7b43] shrink-0 mt-0.5 print:h-3.5 print:w-3.5" />
              <span>Fast page loading, code splitting, and database query optimization</span>
            </div>
          </div>
        </section>

        {/* DOCUMENT FOOTER */}
        <footer className="mt-10 border-t border-[#e4d7c5] pt-4 text-center text-[11px] text-[#777] print:mt-3 print:border-gray-200 print:pt-2 print:text-[10px]">
          <p>
            Rampravesh — Full Stack • Mobile • AI Developer | Portfolio:{" "}
            <a
              href="https://rampraveshkumar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#cb7b43] hover:underline"
            >
              https://rampraveshkumar.vercel.app/
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
}

