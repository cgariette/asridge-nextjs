"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ClipboardList, Building2, Settings } from "lucide-react";

const headingClass = "text-sky font-semibold text-[16px] uppercase tracking-wide";

const serviceCategories = [
  {
    number: "1.",
    title: "Structural Design",
    items: [
      "Structural design for new residential, commercial, and industrial buildings",
      "Foundation design, including shallow and deep foundations",
      "Structural analysis and modelling",
      "Design of additions, alterations, and structural modifications",
      "Framing and lateral system design in steel, concrete, wood, and masonry",
      "Design coordination with architects and project teams",
      "Regulatory and permit documentation",
    ],
  },
  {
    number: "2.",
    title: "Condition Assessments & Existing Structures",
    items: [
      "Structural condition surveys and building assessments",
      "Investigation of existing buildings prior to renovation or change of use",
      "Load evaluations and capacity reviews",
      "Structural review of foundations and existing framing",
      "Remedial recommendations and repair design",
      "Crack monitoring and defect investigation",
      "Independent review services",
    ],
  },
  {
    number: "3.",
    title: "High-Performance & Passive House",
    items: [
      "Structural design for Passive House and high-performance buildings",
      "Detailing for thermal-bridge-free connections",
      "Structural support for continuous insulation and building-envelope systems",
      "Durability and long-term performance detailing",
      "Lower-carbon material selection and optimization",
      "Coordination with envelope, energy, and airtightness teams",
    ],
  },
  {
    number: "4.",
    title: "Project Delivery & Complementary Services",
    items: [
      "Cost, schedule, and change control on infrastructure projects",
      "Owner's-side engineering support",
      "Risk assessment and management",
      "Construction-phase engineering and site review",
      "Subject-matter expertise and independent review",
      "Contract and project delivery support",
    ],
  },
];

const showcaseImages = [
  { src: "/services/showcase-construction.png", alt: "Building under construction" },
  { src: "/services/showcase-house.jpg", alt: "Modern high-performance home" },
  { src: "/services/showcase-bridge.png", alt: "Cable-stayed bridge" },
];

const whoWeServe = [
  {
    title: "Public Agencies and Municipalities",
    description:
      "Owner-side support and project controls that follow public procurement and OPSS/OPSD standards, with experience reporting to senior public and federal staff.",
    icon: ClipboardList,
  },
  {
    title: "Developers, Builders and Housing Providers",
    description:
      "Structural engineering, cost and schedule support, and permit help, including current work on high-performance Passive House homes.",
    icon: Building2,
  },
  {
    title: "Other Engineering Firms and Project Teams",
    description:
      "Specialist help with structural work, construction quality, and BIM that fits into your existing team and carries its own professional accountability.",
    icon: Settings,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[320px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/services-banner.png"
          alt="Asridge Consulting services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 bg-sky px-8 py-4">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl tracking-wide">
            WHAT WE DO
          </h1>
        </div>
      </section>

      {/* Intro line */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-10"
      >
        <div className="mx-auto max-w-6xl px-6 text-left text-neutral-600">
          We work across homes, commercial and institutional buildings, and infrastructure.
          Our work falls into a few areas.
        </div>
      </motion.section>

      {/* 4-column numbered services grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Single grid, one card per category — title and list always
              stay together in the DOM, so mobile's single-column stack
              can't separate them. Desktop row-alignment comes from the
              min-h below (reserves 2-line height even for 1-line
              titles) instead of splitting into separate grids. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {serviceCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-sky font-extrabold text-4xl mb-2">{category.number}</p>
                <h3 className={headingClass + " leading-snug min-h-[5rem] mb-4"}>
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600 list-disc list-outside pl-4">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase row */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="pb-16"
      >
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {showcaseImages.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Who We Serve — navy band for the heading only */}
      <section className="bg-brand py-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-white font-extrabold text-2xl md:text-3xl tracking-wide text-center"
        >
          WHO WE SERVE
        </motion.h2>
      </section>

      {/* Cards sit on a plain white section below the band */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whoWeServe.map((audience, i) => (
              <motion.div
                key={audience.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-left"
              >
                <audience.icon className="w-8 h-8 text-sky mb-4" strokeWidth={1.5} />
                <h3 className={headingClass + " mb-3"}>{audience.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}