"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Code2,
  Briefcase,
  Layers,
  ShieldCheck,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQItem {
  id: string;
  category: "Services" | "Tech Stack" | "Hiring & Pricing" | "Workflow";
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Services",
    question: "What types of software applications do you specialize in building?",
    answer:
      "I specialize in building end-to-end Web Applications (Next.js, React.js), Cross-Platform Mobile Applications (React Native, Expo), Enterprise SaaS Platforms, RESTful & GraphQL APIs, and AI-powered automation systems. Whether you need a product MVP from scratch or optimization of an existing platform, I deliver production-ready code.",
  },
  {
    id: "faq-2",
    category: "Tech Stack",
    question: "What is your core technology stack for full-stack development?",
    answer:
      "My primary frontend stack includes TypeScript, React.js, Next.js (App Router), Tailwind CSS, Framer Motion, and Three.js. On the backend, I leverage Node.js, Express, Python (FastAPI/Flask), MongoDB, PostgreSQL, and Redis. For mobile apps, I use React Native and Expo.",
  },
  {
    id: "faq-3",
    category: "Hiring & Pricing",
    question: "Are you available for full-time engineering roles, contract, or freelance work?",
    answer:
      "Yes! I am actively open to Full-Time Software Engineering positions (Remote worldwide or On-site), High-Impact Contract Engagements, and Freelance Consulting. Feel free to send a direct email or fill out the contact form with your proposal.",
  },
  {
    id: "faq-4",
    category: "Services",
    question: "Can you integrate custom AI models and Computer Vision features into my app?",
    answer:
      "Absolutley. I have experience integrating LLM APIs (OpenAI GPT-4, Google Gemini API), prompt engineering pipelines, dynamic RAG workflows, as well as Computer Vision models using OpenCV and Python. I can build intelligent features like automated image recognition, smart data parsing, and AI conversational assistants.",
  },
  {
    id: "faq-5",
    category: "Workflow",
    question: "What is your typical project delivery workflow and timeline?",
    answer:
      "My workflow follows 5 structured phases: (1) Architecture & Requirements Definition, (2) UI/UX Wireframing & Design System creation, (3) Agile Iterative Development Sprints, (4) Automated Testing & Security Review, and (5) Continuous Deployment (CI/CD) to cloud platforms like Vercel or AWS. Timelines range from 2 weeks for targeted MVPs to 8+ weeks for enterprise systems.",
  },
  {
    id: "faq-6",
    category: "Workflow",
    question: "How do you ensure code quality, maintainability, and scalability?",
    answer:
      "I enforce strict TypeScript typing, modular component architectures, comprehensive API documentation, state-management best practices, and standard Git branching workflows. All code is structured for high maintainability, fast loading performance (Lighthouse 90+), and easy scalability.",
  },
  {
    id: "faq-7",
    category: "Hiring & Pricing",
    question: "How do we get started on a new project or hire you?",
    answer:
      "Getting started is simple! Reach out via the Contact section on this website or email rampraveshkr4545@gmail.com with your project brief or job requirements. I usually respond within 24 hours to schedule an initial discovery call.",
  },
  {
    id: "faq-8",
    category: "Tech Stack",
    question: "Do you handle responsive UI design and mobile optimization?",
    answer:
      "Yes, mobile-first responsiveness and high visual aesthetics are central to all my projects. Every interface is tested across multiple screen breakpoints (iOS, Android, Tablets, Desktops) with fluid layouts, dark/light accessibility, and hardware-accelerated animations.",
  },
];

const categories = ["All", "Services", "Tech Stack", "Hiring & Pricing", "Workflow"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-3"]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#1d1d1d] selection:bg-[#cb7b43] selection:text-white flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative border-b border-[#e4d9c8] bg-[#f7f1e8] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            
            <div className="flex flex-col items-start gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold text-[#2f2a24] transition-all hover:bg-[#2e3b23] hover:text-white"
              >
                <ArrowLeft size={14} />
                <span>Back to Home</span>
              </Link>
              
              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
                <HelpCircle size={14} className="text-[#cb7b43]" />
                <span>Knowledge Base</span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-5xl lg:text-6xl">
                Frequently Asked <span className="italic text-[#cb7b43]">Questions</span>.
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#555]">
                Everything you need to know about my software development services, tech stack, hiring terms, and project workflow.
              </p>
            </div>

            {/* Search Input & Category Filters */}
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Search Field */}
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6258]" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. Next.js, pricing, AI)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-[#ebdcca] bg-[#fdf8f1] pl-11 pr-4 py-3 text-sm text-[#1d1d1d] outline-none shadow-xs transition-all focus:border-[#cb7b43] focus:bg-white"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? "bg-[#2e3b23] text-[#f7f1e8] shadow-sm"
                        : "border border-[#e4d7c5] bg-[#fdf8f1] text-[#555] hover:bg-[#efe3d3] hover:text-[#1d1d1d]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {filteredFaqs.length === 0 ? (
              <div className="rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-12 text-center shadow-xs">
                <HelpCircle size={40} className="mx-auto text-[#cb7b43]" />
                <h3 className="mt-4 font-serif text-xl font-bold text-[#1d1d1d]">
                  No matching questions found
                </h3>
                <p className="mt-1 text-xs text-[#6b6258]">
                  Try searching for another keyword or clear the category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-5 rounded-xl bg-[#2e3b23] px-5 py-2.5 text-xs font-semibold text-[#f7f1e8]"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl sm:rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] transition-all shadow-xs overflow-hidden"
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-[#efe3d3]/40"
                      >
                        <div className="flex items-center gap-3">
                          <span className="rounded-lg border border-[#cb7b43]/30 bg-[#cb7b43]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#cb7b43] shrink-0">
                            {faq.category}
                          </span>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#1d1d1d]">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2e3b23] text-[#e2a867] transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#cb7b43] text-white" : ""}`}>
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-[#ebdcca] px-5 pb-6 pt-4 sm:px-6">
                          <p className="text-sm leading-relaxed text-[#4a4a4a]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Still Have Questions CTA */}
            <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#e4d7c5] bg-[#efe3d3]/80 p-6 sm:p-8 text-center sm:flex-row sm:text-left shadow-sm">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1d1d1d]">
                  Still have questions?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#555]">
                  Can&apos;t find the answer you are looking for? Please send a message directly.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2e3b23] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#f7f1e8] shadow-md transition-all hover:bg-[#3f4f2d] shrink-0"
              >
                <Send size={16} />
                <span>Contact Rampravesh</span>
              </Link>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
