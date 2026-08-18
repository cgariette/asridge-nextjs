"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ShieldCheck, Award, Users2 } from "lucide-react";

const team = [
  {
    name: "Farah Mohamed, P.Eng., PMP",
    title: "Founder & Principal Engineer",
    email: "farah@asridge.ca",
    photo: "/team/farah-mohamed.jpg",
    bio: "Farah leads Asridge and stays involved in every project. He's a structural engineer whose work covers new design, foundations, and condition assessments, and he handles the delivery side of a project as closely as the engineering.",
    education: "Master of Applied Science in Civil Engineering - University of Windsor.",
    credentials: [
      "Professional Engineer (P.Eng.) - Professional Engineers Ontario",
      "Project Management Professional (PMP)",
      "Lean Six Sigma Green Belt",
      "PRINCE2",
    ],
    credentialsLabel: "Licences & Certifications",
  },
  {
    name: "Abdullah Aksoy",
    title: "Structural Designer",
    email: "abdullah@asridge.ca",
    photo: "/team/abdullah-aksoy.jpg",
    bio: "Abdullah is a design engineer whose experience covers site investigation, geotechnical and durability testing, and deep foundations, work he brought from years on the 1915 Canakkale Bridge.",
    education: "Master of Applied Science in Civil Engineering - University of Windsor.",
    credentials: ["Revit", "Navisworks", "BIM 360", "SAP2000", "Advance Steel", "AutoCAD", "ArcGIS"],
    credentialsLabel: "Certifications",
  },
];

const values = [
  {
    number: "01.",
    label: "Integrity",
    description: "We operate with honesty, transparency, and professional accountability in every engagement.",
    icon: ShieldCheck,
  },
  {
    number: "02.",
    label: "Excellence",
    description: "We pursue the highest standards of engineering, project management, and client service.",
    icon: Award,
  },
  {
    number: "03.",
    label: "Collaboration",
    description: "We believe successful projects are built through strong partnerships and open communication.",
    icon: Users2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// headingClass: smaller sub-headings (Education, credential labels, value labels)
const headingClass = "text-sky font-semibold text-[16px] uppercase tracking-wide";
// sectionHeadingClass: the two big page-level section titles - now
// deliberately heavier/larger than a team member's name, per feedback.
const sectionHeadingClass = "text-sky font-extrabold text-2xl md:text-3xl uppercase tracking-wide";

export default function AboutContent() {
  return (
    <>
      <section className="relative h-[320px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/about-banner.jpg"
          alt="Asridge Consulting"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 bg-sky px-8 py-4">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl tracking-wide">
            WHO WE ARE
          </h1>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-14"
      >
        <div className="mx-auto max-w-6xl px-6 text-neutral-700 space-y-4 leading-relaxed text-left">
          <p>
            Asridge Consulting is a structural engineering practice serving residential,
            commercial, and infrastructure projects. We support architects, builders,
            developers, and owners with structural design and technical input that
            informs design decisions and regulatory approvals.
          </p>
          <p>
            We work across new structures, foundations, and the assessment of existing
            buildings, with particular depth in high-performance and Passive House
            design, where structure meets building performance.
          </p>
        </div>
      </motion.section>

      <section className="py-10 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={sectionHeadingClass + " mb-10"}>Our Team</h2>

          <div className="space-y-16">
            {team.map((member, i) => {
              const reversed = i % 2 === 1;
              return (
                <motion.div
                  key={member.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className={"flex flex-col md:flex-row " + (reversed ? "md:flex-row-reverse " : "") + "gap-8 items-stretch"}
                >
                  <div className="relative w-full h-72 sm:h-80 md:w-64 md:h-auto md:min-h-[280px] shrink-0 bg-neutral-200 overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-base uppercase text-sky tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-[#2b2b2c] text-sm font-medium tracking-wide uppercase mb-1">
                      {member.title}
                    </p>
                    <a
                      href={"mailto:" + member.email}
                      className="text-sm text-neutral-500 hover:text-sky transition-colors"
                    >
                      {member.email}
                    </a>
                    <p className="mt-4 text-neutral-700 leading-relaxed">{member.bio}</p>

                    <p className={headingClass + " mt-4"}>Education</p>
                    <p className="text-sm text-neutral-600">{member.education}</p>

                    <p className={headingClass + " mt-4"}>{member.credentialsLabel}</p>
                    <ul className="text-sm text-neutral-600">
                      {member.credentials.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className={sectionHeadingClass + " mb-12"}>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <value.icon className="w-8 h-8 text-sky mb-4" strokeWidth={1.5} />
                <h3 className={headingClass + " mb-2"}>
                  {value.number} {value.label}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}