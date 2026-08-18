"use client";

import { motion } from "motion/react";
import Image from "next/image";

const headingClass = "text-sky font-semibold text-[16px] uppercase tracking-wide";

const featured = [
  {
    title: "1915 Canakkale Bridge, Turkiye",
    image: "/projects/featured/canakkale-bridge.jpg",
    caption:
      "The world's longest-span suspension bridge, featuring a 2,023-meter main span and connecting two continents.",
  },
  {
    title: "Gordie Howe International Bridge",
    image: "/projects/featured/gordie-howe-bridge.jpg",
    caption:
      "2.5-kilometre (1.5-mile) cable-stayed bridge spanning the Detroit River, connecting Windsor, Ontario, and Detroit, Michigan.",
  },
  {
    title: "Meadowbrook Place, Windsor",
    image: "/projects/featured/meadowbrook-place.jpg",
    caption:
      "Ontario's first multi-unit Passive House, a 145-unit, 10-storey affordable building in Windsor.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FeaturedProjectsContent() {
  return (
    <>
      {/* Banner - photo background, matching About/Services/Passive House/Our Projects */}
      <section className="relative h-[320px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/featured-projects-banner.jpg"
          alt="Featured Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-white font-extrabold text-2xl md:text-4xl tracking-wide">
          FEATURED PROJECTS
        </h1>
      </section>

      {/* Photo grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: (i % 2) * 0.1 }}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-200 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className={headingClass + " mb-2"}>{project.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{project.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}