"use client";

import { motion } from "motion/react";
import Image from "next/image";

const headingClass = "text-sky font-semibold text-[16px] uppercase tracking-wide";

const projects = [
  {
    title: "Rize Parklands \u2013 Foundation Value Engineering, 21 Storeys",
    image: "/projects/rize-parklands.png",
    problem:
      "The client was not convinced the foundation for a 21-storey building was good value, and asked us to check the concrete and steel quantities.",
    whatWeDid:
      "The foundation had been designed to a British code. We checked it independently against the Canadian concrete code, with loads to the national code, and found it was heavier than the actual loads needed.",
    result:
      "We redesigned it with less concrete and less reinforcement while keeping full code compliance and every required safety margin. That means lower cost and lower carbon for the same building.",
  },
  {
    title: "Utopia Parklands \u2013 Water Leak Investigation and Repair",
    image: "/projects/utopia-parklands.png",
    problem:
      "A 16-storey building next to an 18-storey tower was letting water in at the shared wall between them.",
    whatWeDid:
      "We reviewed the drawings for both buildings and worked out how the two towers move differently and how the rain was getting in. The taller building was shedding water straight into the joint, and the joint could not handle the two buildings moving on their own.",
    result:
      "We designed a repair with new flashing set into the taller building's wall, a properly drained roof-to-wall transition, and a joint built to absorb movement instead of fighting it. We produced the full drawings and specs and coordinated the work with the neighbouring owner.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Banner - photo background, matching About/Services/Passive House */}
      <section className="relative h-[320px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/projects-banner.jpg"
          alt="Our Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 bg-sky px-8 py-4">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl tracking-wide">
            OUR PROJECTS
          </h1>
        </div>
      </section>

      <div className="pt-10">
        {projects.map((project, i) => (
          <section key={project.title} className={i === 0 ? "pb-24" : "pb-16"}>
            <div className="mx-auto max-w-6xl px-6">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className={headingClass + " mb-4"}
              >
                {project.title}
              </motion.h2>
            </div>

            {/* Full-width photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative w-full h-[280px] md:h-[360px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating card, overlapping the bottom of the photo */}
            <div className="mx-auto max-w-6xl px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="relative -mt-16 md:-mt-20 bg-white shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-10"
              >
                <div>
                  <h3 className={headingClass + " mb-2"}>The Problem</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h3 className={headingClass + " mb-2"}>What We Did</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{project.whatWeDid}</p>
                </div>
                <div>
                  <h3 className={headingClass + " mb-2"}>The Result</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{project.result}</p>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}