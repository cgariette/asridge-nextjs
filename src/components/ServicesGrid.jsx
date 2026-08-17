"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Structural Engineering", image: "/services/structural-engineering.png" },
  { label: "Foundations and Value Engineering", image: "/services/foundations.png" },
  { label: "High-Performance & Passive House", image: "/services/passive-house.png" },
  { label: "Durability and Restoration", image: "/services/durability.jpg" },
  { label: "Project Management and Controls", image: "/services/project-management.png" },
  { label: "Studies, Assessment and BIM", image: "/services/studies-bim.png" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              custom={i * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              className="text-center"
            >
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-sm bg-white border border-neutral-200">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="font-heading font-semibold text-sky text-base uppercase tracking-wide">
                {service.label}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-sky text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-brand transition-colors"
          >
            See Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
