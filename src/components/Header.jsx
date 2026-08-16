"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/passive-house", label: "Passive House" },
  {
    label: "Projects",
    dropdown: [
      { href: "/projects", label: "Projects" },
      { href: "/projects/featured", label: "Featured" },
    ],
  },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const pathname = usePathname();

  const isProjectsActive = pathname.startsWith("/projects");

  // Safety net: whatever link was actually clicked, the moment the
  // route changes, the mobile menu (and its accordion) closes. This
  // doesn't depend on every individual link remembering to call
  // setMobileOpen(false) - it just can't stay open across a navigation.
  useEffect(() => {
    setMobileOpen(false);
    setMobileProjectsOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Asridge Consulting"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold uppercase tracking-wide text-neutral-700">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 uppercase hover:text-sky transition-colors ${
                    isProjectsActive ? "text-sky" : ""
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${projectsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {projectsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-neutral-200 shadow-lg rounded-md py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm hover:bg-neutral-50 hover:text-sky ${
                          pathname === item.href ? "text-sky font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-sky transition-colors ${
                  pathname === link.href ? "text-sky" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-black/50"
            />

            {/* Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="md:hidden fixed top-0 right-0 z-50 h-full w-[82%] max-w-xs bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-neutral-100">
                <span className="text-sm font-semibold uppercase tracking-wide text-neutral-400">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-1 text-neutral-500 hover:text-sky transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-2 py-2">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="border-b border-neutral-100">
                      <button
                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        className={`w-full flex items-center justify-between px-4 py-4 text-[15px] font-semibold uppercase tracking-wide transition-colors ${
                          isProjectsActive ? "text-sky" : "text-neutral-800"
                        }`}
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileProjectsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-neutral-50"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-8 py-3 text-sm font-medium ${
                                  pathname === item.href ? "text-sky" : "text-neutral-600"
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-4 text-[15px] font-semibold uppercase tracking-wide border-b border-neutral-100 transition-colors ${
                        pathname === link.href ? "text-sky" : "text-neutral-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}