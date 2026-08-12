"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Copy, Check, MessageSquare, MapPin, Clock, Globe } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const emailAddress = "rampraveshkr4545@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry"
    );
    const mailtoBody = encodeURIComponent(
      `Hello Rampravesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative border-t border-[#e4d9c8] bg-[#f7f1e8] py-14 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-linear-to-tr from-[#2e3b23]/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8b79a] bg-[#fdf8f1] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f2a24]">
            <MessageSquare size={14} className="text-[#cb7b43]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1d1d1d] sm:text-4xl lg:text-5xl leading-tight">
            Let&apos;s Build Something <span className="italic text-[#cb7b43]">Extraordinary</span>.
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#555]">
            Have a project, role, or collaboration in mind? Feel free to reach out. I am always open to discussing new software ideas.
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-12 grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Copy Email Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl sm:rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#6b6258]">
                Direct Email
              </p>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl sm:rounded-2xl border border-[#ebdcca] bg-[#f7f1e8] p-3 sm:p-3.5 min-w-0">
                <a
                  href={`mailto:${emailAddress}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-[#1d1d1d] break-all sm:truncate hover:text-[#cb7b43] transition-colors min-w-0 flex-1"
                >
                  {emailAddress}
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-[#2e3b23] px-3.5 py-2 text-xs font-semibold text-[#f7f1e8] transition-all hover:bg-[#3f4f2d] shrink-0 w-full sm:w-auto shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#e2a867]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Availability & Location Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 rounded-2xl sm:rounded-3xl border border-[#e4d7c5] bg-[#efe3d3]/70 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1d1d1d]">Response Time</h4>
                  <p className="text-xs text-[#555]">Usually responds within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-[#dfd4c3] pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2e3b23] text-[#e2a867]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1d1d1d]">Location & Availability</h4>
                  <p className="text-xs text-[#555]">Remote Worldwide & On-Site</p>
                </div>
              </div>
            </motion.div>

            {/* Social Channels */}
            <div className="pt-2">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#6b6258]">
                Social Profiles
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <motion.a
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://rampraveshkumar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#cb7b43]/40 bg-[#cb7b43]/10 px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-bold text-[#cb7b43] transition-all hover:bg-[#cb7b43] hover:text-white min-w-[105px] shadow-sm"
                >
                  <Globe size={16} />
                  <span>Portfolio</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://github.com/Rampravsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-bold text-[#1d1d1d] transition-all hover:bg-[#2e3b23] hover:text-white min-w-[105px] shadow-sm"
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-bold text-[#1d1d1d] transition-all hover:bg-[#2e3b23] hover:text-white min-w-[105px] shadow-sm"
                >
                  <FaLinkedinIn size={16} />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.instagram.com/dream.coder__?igsh=cGp3azRlaHlucG1h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#e4d7c5] bg-[#fdf8f1] px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-bold text-[#1d1d1d] transition-all hover:bg-[#2e3b23] hover:text-white min-w-[105px] shadow-sm"
                >
                  <FaInstagram size={16} />
                  <span>Instagram</span>
                </motion.a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl sm:rounded-3xl border border-[#e4d7c5] bg-[#fdf8f1] p-5 sm:p-8 shadow-md">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1d1d1d]">
                Send a Message
              </h3>
              <p className="mt-1 text-xs text-[#555]">
                Fill out the form below and I will get back to you promptly.
              </p>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 rounded-2xl border border-[#cb7b43]/40 bg-[#cb7b43]/10 p-6 text-center"
                  >
                    <Check size={32} className="mx-auto text-[#cb7b43]" />
                    <h4 className="mt-2 font-serif text-lg font-bold text-[#1d1d1d]">
                      Message Sent Successfully!
                    </h4>
                    <p className="mt-1 text-xs text-[#4a4a4a]">
                      Thank you for reaching out. I will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-[#2d2a26] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full rounded-xl border border-[#ebdcca] bg-[#f7f1e8] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-[#1d1d1d] outline-none transition-all focus:border-[#cb7b43] focus:ring-2 focus:ring-[#cb7b43]/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#2d2a26] mb-1.5">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-xl border border-[#ebdcca] bg-[#f7f1e8] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-[#1d1d1d] outline-none transition-all focus:border-[#cb7b43] focus:ring-2 focus:ring-[#cb7b43]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2d2a26] mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry / Job Opportunity"
                        className="w-full rounded-xl border border-[#ebdcca] bg-[#f7f1e8] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-[#1d1d1d] outline-none transition-all focus:border-[#cb7b43] focus:ring-2 focus:ring-[#cb7b43]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2d2a26] mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or inquiry..."
                        className="w-full rounded-xl border border-[#ebdcca] bg-[#f7f1e8] px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm text-[#1d1d1d] outline-none transition-all focus:border-[#cb7b43] focus:ring-2 focus:ring-[#cb7b43]/20"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2e3b23] py-3.5 sm:py-4 text-sm font-semibold text-[#f7f1e8] shadow-md transition-all hover:bg-[#3f4f2d] hover:shadow-lg"
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

