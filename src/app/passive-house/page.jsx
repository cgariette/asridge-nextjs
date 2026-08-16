"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const headingClass = "text-sky font-semibold text-[16px] uppercase tracking-wide";

const topics = [
  {
    title: "Thermal Bridges",
    body: "Thermal bridges at the connections. Every place the structure crosses the insulation is a spot where heat can escape and moisture can form. We detail those crossings on purpose, using structural thermal breaks at balconies, canopies, and slab edges, and at the joint between the foundation and the wall. Where a break is not possible, we keep the bridge as small as we can and measure it so the energy model stays honest.",
  },
  {
    title: "Insulation Support",
    body: "Support for thick insulation and cladding. High-performance walls are thick, and the cladding has to reach back through several inches of insulation to the structure. We design that support to carry wind and weight while keeping the wall stiff enough to stay airtight and free of cracks.",
  },
  {
    title: "Foundations",
    body: "Foundations for high-performance walls. The insulation has to wrap the building all the way to the ground, so the structure often carries load through insulation, not just soil. We detail insulation under slabs and footings using the right product for the load, and we break the thermal bridge at the slab edge, which is the coldest line in the building.",
  },
  {
    title: "Airtightness",
    body: "Keeping the building airtight. Airtightness is as much about coordination as detailing. We place the structural connections where the air barrier can stay continuous, so the structure is never the reason a building fails its airtightness test. We work closely with the architect, the envelope consultant, and the energy modeller.",
  },
  {
    title: "Durability/Carbon",
    body: "Durable and lower in carbon. A high-performance building should last for decades, so the structure has to resist moisture and corrosion everywhere it meets the outside. We detail for that, and we cut embodied carbon by using efficient concrete mixes, using less material where we safely can, and looking at mass timber where it fits.",
  },
  {
    title: "Early Involvement",
    body: "In early, not late. Most thermal bridges get built because the structural engineer arrives after the design is set. We would rather be in the room early, lining up the structure with the insulation and airtightness plan before the shape of the building is locked in.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PassiveHousePage() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[320px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/passive-house-banner.png"
          alt="Passive House"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 bg-sky px-8 py-4">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl tracking-wide">
            PASSIVE HOUSE
          </h1>
        </div>
      </section>

      {/* Intro */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-14"
      >
        <div className="mx-auto max-w-6xl px-6 text-left text-neutral-700 leading-relaxed">
          A Passive House works or fails at its connections. You can design a perfect wall,
          but the moment a balcony, a beam, or a foundation cuts through the insulation, heat
          escapes and the building stops performing the way it was modelled. We engineer the
          structure so that does not happen, without giving up strength or making it hard to
          build. We work to both the PHI and PHIUS Passive House standards, and on net-zero
          and high-performance projects that are not going for formal certification.
        </div>
      </motion.section>

      {/* Topic cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: (i % 2) * 0.1 }}
                className="bg-neutral-50 border-l-4 border-sky px-8 py-8"
              >
                <h3 className={headingClass + " mb-3"}>{topic.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{topic.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative h-[280px] w-full overflow-hidden flex items-center">
        <Image
          src="/passive-house-cta.png"
          alt="Passive House project"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="relative z-10 w-full px-6"
        >
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h2 className="text-white font-extrabold text-xl md:text-2xl tracking-wide uppercase max-w-xl">
              Bring us in early on your Passive House or net-zero project.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-sky px-6 py-3 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors whitespace-nowrap"
            >
              Request a Review
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}