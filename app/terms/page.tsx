"use client";

import Link from "next/link";
import { ShieldCheck, ArrowLeft, FileText, CheckCircle2, Lock, Scale, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const lastUpdated = "August 4, 2026";

  const sections = [
    {
      id: "agreement",
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this portfolio website (rampraveshkumar.vercel.app or associated domains) or engaging Rampravesh for software engineering, full-stack development, or consulting services, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, please refrain from using the site or services.",
    },
    {
      id: "ip-rights",
      title: "2. Intellectual Property Rights",
      content:
        "Unless explicitly stated otherwise under a custom freelance agreement, all original code, design elements, typography, component architectures, logos, and written material on this website are the intellectual property of Rampravesh. Open-source repositories hosted on GitHub (e.g. Rampravsh repositories) are licensed under their respective open-source licenses (MIT, Apache 2.0, etc.).",
    },
    {
      id: "services",
      title: "3. Software Development & Contract Services",
      content:
        "Engagements for custom software development, mobile application creation, API integration, or technical consulting are governed by dedicated statement-of-work (SOW) documents or written service contracts agreed upon between Rampravesh and the client prior to project commencement.",
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use of Website",
      content:
        "You agree to use this website solely for lawful purposes. You must not attempt to compromise website security, send spam via contact forms, inject malicious scripts, scrape automated content without permission, or disrupt site availability.",
    },
    {
      id: "privacy",
      title: "5. Privacy & Data Protection",
      content:
        "Information submitted via the contact form or email (such as name, email address, and message details) is strictly used for direct communication regarding project inquiries. Your personal details will never be sold, rented, or distributed to third parties.",
    },
    {
      id: "disclaimer",
      title: "6. Disclaimer & Warranty Limitations",
      content:
        "This website and demonstration projects are provided on an 'as is' and 'as available' basis. While every effort is made to maintain 100% uptime and clean code standards, Rampravesh makes no warranties regarding uninterrupted access or third-party external service uptime.",
    },
    {
      id: "governing-law",
      title: "7. Governing Law & Contact Details",
      content:
        "These terms are governed by applicable laws. For any legal inquiries, contract clarifications, or software licensing questions, please reach out directly at rampraveshkr4545@gmail.com.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#1d1d1d] selection:bg-[#cb7b43] selection:text-white flex flex-col justify-between">
      <div>
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
                <ShieldCheck size={14} className="text-[#cb7b43]" />
                <span>Legal & Policies</span>
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-5xl lg:text-6xl">
                Terms & <span className="italic text-[#cb7b43]">Conditions</span>.
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-[#6b6258]">
                Last updated: <span className="font-bold text-[#1d1d1d]">{lastUpdated}</span> • Official Terms of Service & Usage Guidelines
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl sm:rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-6 sm:p-10 shadow-sm space-y-8">
              
              <div className="border-b border-[#ebdcca] pb-6">
                <p className="text-sm sm:text-base leading-relaxed text-[#4a4a4a]">
                  Welcome to Rampravesh&apos;s personal portfolio and software engineering platform. These terms outline the rules and regulations governing website usage, software project engagements, intellectual property, and communication policies.
                </p>
              </div>

              {sections.map((section) => (
                <div key={section.id} id={section.id} className="space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1d1d1d]">
                    {section.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#555]">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="mt-10 rounded-2xl border border-[#ebdcca] bg-[#f7f1e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1d1d1d]">Questions about terms?</h4>
                    <p className="text-xs text-[#6b6258]">Feel free to email rampraveshkr4545@gmail.com</p>
                  </div>
                </div>
                <Link
                  href="/#contact"
                  className="rounded-xl bg-[#2e3b23] px-5 py-2.5 text-xs font-semibold text-[#f7f1e8] transition-colors hover:bg-[#3f4f2d]"
                >
                  Contact Page
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
