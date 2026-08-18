"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Clock, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: "info@asridge.com",
    href: "mailto:info@asridge.com",
  },
  {
    icon: Clock,
    label: "Working hours",
    value: "Monday to Friday, 9:00 AM to 5:00 PM",
    href: null, // not a clickable action, just information
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+1 519 995 6328",
    href: "tel:+15199956328", // spaces stripped - tel: links need a clean number
    emphasize: true, // renders larger/bolder per feedback
  },
];

export default function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", company: "", project: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", company: "", project: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Banner - solid navy, matching Our Projects / Featured Projects */}
      <section className="bg-brand py-14 flex items-center justify-center">
        <h1 className="text-white font-extrabold text-2xl md:text-4xl tracking-wide text-center px-6">
          TELL US ABOUT YOUR PROJECT
        </h1>
      </section>

      {/* Intro line */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-10"
      >
        <div className="mx-auto max-w-6xl px-6 text-left text-neutral-600 leading-relaxed">
          Tell us what the building needs to do, or what problem you are seeing, and we will
          tell you what the structure needs. We work with developers, contractors, architects,
          and other engineers across Ontario.
        </div>
      </motion.section>

      {/* Gradient info bar */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="bg-gradient-to-r from-sky to-[#1B6FA8]">
          <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/30">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 py-6 md:py-0 px-0 md:px-8">
                <item.icon className="w-6 h-6 text-white shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={
                        item.emphasize
                          ? "text-white font-bold text-base md:text-lg tracking-wide hover:underline"
                          : "text-white/90 text-sm hover:underline"
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/90 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-1">
                Name <span className="text-sky">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-1">
                Email <span className="text-sky">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-neutral-800 mb-1">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky"
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-semibold text-neutral-800 mb-1">
                About your project
              </label>
              <textarea
                id="project"
                name="project"
                rows={5}
                value={form.project}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-sky text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-brand transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600">
                Thanks — your message has been sent. We will be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong sending your message. Please try again, or email us
                directly at info@asridge.com.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}