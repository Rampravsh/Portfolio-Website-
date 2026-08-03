"use client";

import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ArrowUpRight, Hand } from "lucide-react";

export default function Hero() {
    return (
        <section className="overflow-hidden">
            <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-10">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                >
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-4 py-2 text-sm font-medium text-[#2f2a24] shadow-sm">
                        <Hand size={16} className="text-[#cb7b43]" />
                        Hello, I'm Rampravesh
                    </p>

                    <h1 className="font-serif text-5xl font-bold leading-tight text-[#1d1d1d] md:text-7xl">
                        Building Digital
                        <br />
                        <span className="italic text-[#cb7b43]">Experiences</span>
                        <br />
                        That Matter.
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-[#5e5e5e]">
                        Full Stack Developer crafting fast, elegant and scalable web
                        applications with React, Next.js, Node.js and modern technologies.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">
                        <button className="flex items-center gap-2 rounded-2xl bg-[#2e3b23] px-7 py-4 font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[#3f4f2d]">
                            Let's Talk
                            <ArrowUpRight size={18} />
                        </button>

                        <button className="rounded-2xl border border-[#c8b79a] bg-[#fdf8f1] px-7 py-4 font-semibold text-[#2f2a24] shadow-sm transition hover:bg-[#efe2cf]">
                            View Projects
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-5">
                        <a
                            href="https://github.com/yourusername"
                            className="rounded-full border border-[#c8b79a] bg-[#fdf8f1] p-3 text-[#2f2a24] shadow-sm transition hover:bg-[#efe2cf] hover:text-[#1b1610]"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            className="rounded-full border border-[#c8b79a] bg-[#fdf8f1] p-3 text-[#2f2a24] shadow-sm transition hover:bg-[#efe2cf] hover:text-[#1b1610]"
                        >
                            <FaLinkedinIn size={20} />
                        </a>

                        <a
                            href="https://instagram.com/yourusername"
                            className="rounded-full border border-[#c8b79a] bg-[#fdf8f1] p-3 text-[#2f2a24] shadow-sm transition hover:bg-[#efe2cf] hover:text-[#1b1610]"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    className="relative flex justify-center"
                >
                    {/* Background Blob */}
                    <div className="absolute h-[540px] w-[420px] rounded-[45%] bg-[#d69a56]" />

                    {/* Main Image */}
                    <div className="relative h-[480px] w-full max-w-[420px] overflow-hidden rounded-[35px] border-[10px] border-[#efe7db] shadow-2xl sm:h-[540px]">
                        <Image
                            src="/images/profile.png"
                            alt="Rampravesh"
                            width={450}
                            height={600}
                            priority
                            quality={100}
                            unoptimized
                            sizes="(max-width: 768px) 100vw, 420px"
                            className="h-full w-full scale-[1.03] object-cover object-[50%_15%]"
                        />
                    </div>

                    {/* Sticky Note */}
                    <motion.div
                        initial={{ rotate: -8, opacity: 0 }}
                        animate={{ rotate: -6, opacity: 1 }}
                        transition={{ delay: .5 }}
                        className="absolute -right-6 top-64 w-56 rounded-xl bg-[#f5d470] p-5 shadow-xl"
                    >
                        <p className="font-semibold text-[#2d2d2d]">
                            Coffee + Code ☕
                        </p>

                        <p className="mt-2 text-sm text-[#444]">
                            Great products start with curiosity and countless cups of coffee.
                        </p>
                    </motion.div>

                    {/* Decorative Circle */}
                    <div className="absolute -left-10 top-6 h-20 w-20 rounded-full bg-[#f2bf5d]" />

                    {/* Small Badge */}
                    <div className="absolute bottom-6 left-0 rounded-2xl bg-white px-6 py-4 shadow-lg">
                        <p className="text-sm font-medium text-[#6b6258]">
                            Experience
                        </p>

                        <h4 className="text-2xl font-bold text-[#1f1a17]">
                            3+ Years
                        </h4>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}