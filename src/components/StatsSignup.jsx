"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

function CountUp({ target = 20, suffix = "k" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to an actual endpoint (e.g. /api/newsletter)
    // once the email service (Resend/SendGrid) is set up alongside the
    // contact form in hours 24-30.
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-sky text-5xl md:text-6xl mb-4"
        >
          <CountUp target={20} suffix="k" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-neutral-700 text-lg mb-8"
        >
          Trusted on projects large and small
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Please enter your email here.."
            className="w-full sm:w-80 px-4 py-3 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sky"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-sky text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-brand transition-colors disabled:opacity-60"
          >
            {status === "submitting" ? "Joining..." : "Join us today"}
          </button>
        </motion.form>

        {status === "success" && (
          <p className="text-sm text-green-600 mt-3">Thanks — you're on the list.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 mt-3">Something went wrong. Please try again.</p>
        )}

        <p className="text-sm text-neutral-500 mt-4">
          Sign up for occasional updates on our projects and what we are learning.
        </p>
      </div>
    </section>
  );
}
