"use client";

import { motion } from "motion/react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src="/hero-blueprint.jpg"
        alt="Structural engineering and project management"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="max-w-5xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sky font-extrabold xl:font-semibold text-[26px] md:text-[42px] lg:text-[48px] leading-tight tracking-wide mb-3"
            >
              SERVING ONTARIO
            </motion.p>

            <motion.p
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white font-medium text-[26px] md:text-[42px] lg:text-[48px] leading-tight mb-3 md:whitespace-nowrap"
            >
              Structural Engineering &amp; Project Management
            </motion.p>

            <motion.h1
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sky font-extrabold text-[26px] md:text-[42px] lg:text-[48px] xl:text-[60px] leading-tight mb-3 md:whitespace-nowrap"
            >
              ENGINEERED AND DELIVERED
            </motion.h1>

            <motion.p
              custom={0.45}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white font-medium text-[26px] md:text-[42px] lg:text-[48px] leading-tight"
            >
              ONE FIRM FROM DESIGN
              <br />
              THROUGH CONSTRUCTION
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}