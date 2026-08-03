"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Smartphone,
  Cloud,
  Lock,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Cpu,
  Bot,
} from "lucide-react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithub,
  SiThreedotjs,
  SiElectron,
  SiOpencv,
  SiNumpy,
} from "react-icons/si";

const highlightSkillsList = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-[#000000]" },
  { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Three.js", icon: SiThreedotjs, color: "text-black" },
  { name: "Electron.js", icon: SiElectron, color: "text-[#47848F]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "GitHub", icon: SiGithub, color: "text-[#181717]" },
  { name: "OpenAI", icon: Bot, color: "text-[#10A37F]" },
  { name: "Gemini AI", icon: Brain, color: "text-[#cb7b43]" },
  { name: "OpenCV", icon: SiOpencv, color: "text-[#5C3EE8]" },
  { name: "NumPy", icon: SiNumpy, color: "text-[#013243]" },
];

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn UI",
      "Redux & Redux Toolkit",
      "Context API",
      "React Router",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "Electron.js",
      "Responsive Layouts",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      "REST API Design",
      "WebSocket & Socket.IO",
      "JWT Authentication",
      "OAuth 2.0",
      "Role-Based Access Control (RBAC)",
      "File Upload APIs",
      "Email Services",
      "API Documentation (Swagger / OpenAPI)",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "SQLite",
      "Database Schema Design",
      "Database Indexing",
      "Query Optimization",
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: Brain,
    skills: [
      "OpenAI API Integration",
      "Google Gemini API",
      "Prompt Engineering",
      "AI Chatbots",
      "LLM Integration",
      "AI Workflow Automation",
      "OpenCV",
      "NumPy",
      "Jupyter Notebook",
      "Computer Vision Basics",
    ],
  },
  {
    id: "mobile",
    label: "Mobile Dev",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Expo Router",
      "Deep Linking",
      "Push Notifications",
      "Camera API",
      "File System API",
      "Secure Storage",
      "App Permissions",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "Docker",
      "Git & GitHub Actions",
      "Firebase Auth & FCM",
      "Supabase",
      "Cloudinary",
      "Vercel",
      "Netlify",
      "Render",
      "Linux / Ubuntu / Lubuntu",
      "npm / pnpm / Yarn",
      "Environment Configuration",
    ],
  },
  {
    id: "security",
    label: "Security & Real-Time",
    icon: Lock,
    skills: [
      "JWT & Refresh Tokens",
      "Google OAuth",
      "Password Hashing (bcrypt)",
      "Helmet & CORS Security",
      "Rate Limiting",
      "Input Validation",
      "Socket.IO Live Chat",
      "Real-Time Notifications",
      "Presence Systems",
      "Live Dashboards",
    ],
  },
  {
    id: "learning",
    label: "Currently Learning",
    icon: GraduationCap,
    skills: [
      "Kubernetes",
      "AWS Services",
      "CI/CD Pipelines",
      "Microservices Architecture",
      "GraphQL",
      "Apache Kafka",
      "Elasticsearch",
      "React Three Fiber (R3F)",
      "Prisma ORM",
      "tRPC",
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const currentCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative border-t border-[#e4d9c8] bg-[#f7f1e8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-start gap-3 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
            <Cpu size={14} className="text-[#cb7b43]" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl">
            Skills & <span className="italic text-[#cb7b43]">Tooling</span> Inventory.
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[#555]">
            A comprehensive overview of my programming languages, frameworks, backend infrastructure, cloud services, and AI technologies.
          </p>
        </div>

        {/* TOP 20 FEATURED HIGHLIGHT SKILLS GRID */}
        <div className="mt-12 rounded-3xl border border-[#e4d7c5] bg-[#efe3d3]/80 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-[#2e3b23]">
            <Sparkles size={16} className="text-[#cb7b43]" />
            <span>Featured Core Skills (Highlight)</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
            {highlightSkillsList.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 rounded-xl border border-[#dfd4c3] bg-[#fdf8f1] p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cb7b43] hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#efe7db] text-lg text-[#1d1d1d] transition-transform group-hover:scale-110">
                    <Icon className={skill.color} />
                  </div>
                  <span className="text-xs font-semibold text-[#1d1d1d] truncate">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE CATEGORY TABS SYSTEM */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6 text-sm font-bold uppercase tracking-wider text-[#6b6258]">
            <Code size={16} className="text-[#cb7b43]" />
            <span>Browse By Technical Domain</span>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-[#e4d7c5] bg-[#efe3d3]/60 p-2">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#2e3b23] text-[#f7f1e8] shadow-md scale-105"
                      : "text-[#4a4a4a] hover:bg-[#fdf8f1] hover:text-[#1d1d1d]"
                  }`}
                >
                  <Icon size={15} className={isActive ? "text-[#e2a867]" : "text-[#8b7b6b]"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-8 min-h-55 rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 border-b border-[#ebdcca] pb-4 mb-6">
                  {currentCategory && (
                    <>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                        <currentCategory.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#1d1d1d]">
                          {currentCategory.label}
                        </h3>
                        <p className="text-xs text-[#6b6258]">
                          {currentCategory.skills.length} competencies listed in this domain
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {currentCategory?.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 rounded-xl border border-[#ebdcca] bg-[#f7f1e8]/90 px-4 py-3 text-xs font-semibold text-[#2d2a26] transition-colors hover:border-[#cb7b43] hover:bg-white"
                    >
                      <CheckCircle2 size={16} className="text-[#cb7b43] shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
