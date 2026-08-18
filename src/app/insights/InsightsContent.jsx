"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Newspaper } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function InsightsContent() {
  return (
    <>
      {/* Banner - photo background, matching other interior pages */}
      <section className="relative h-[320px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/insights-banner.jpg"
          alt="Insights"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 bg-sky px-8 py-4">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl tracking-wide">
            INSIGHTS
          </h1>
        </div>
      </section>

      {/* Coming soon placeholder */}
      <section className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mx-auto max-w-xl px-6 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-7 h-7 text-sky" strokeWidth={1.5} />
          </div>

          <h2 className="text-sky font-semibold text-[16px] uppercase tracking-wide mb-3">
            New Insights Are On The Way
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-8">
            We are putting together articles on structural design, Passive House
            detailing, and lessons from real projects. Check back soon, or reach
            out directly if you have a question we can help with now.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-sky text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-brand transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </>
  );
}