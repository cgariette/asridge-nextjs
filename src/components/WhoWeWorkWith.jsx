"use client";

import { motion } from "motion/react";
import Link from "next/link";

const audiences = [
  {
    label: "Developers and Builders",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m8-14h2m-2 4h2m-2 4h2M9 7h.01M9 11h.01M9 15h.01" />
      </svg>
    ),
  },
  {
    label: "Homeowners and Small Projects",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: "Public Agencies",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-4a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
      </svg>
    ),
  },
  {
    label: "Contractors",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function WhoWeWorkWith() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-heading font-semibold text-sky text-xl md:text-2xl mb-12 tracking-wide">
          WHO WE WORK WITH
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-y-0 md:divide-x divide-neutral-200 mb-12">
          {audiences.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 px-4">
              <div className="text-sky">{item.icon}</div>
              <p className="font-heading font-semibold text-sky text-sm uppercase tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-sky text-sky px-6 py-3 rounded-md font-medium text-sm hover:bg-sky hover:text-white transition-colors"
          >
            Request a Review
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-sky text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-brand transition-colors"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
