"use client";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/passive-house", label: "Passive House" },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-neutral-900 text-neutral-300 pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About column */}
        <div>
          <h3 className="text-accent font-heading font-semibold tracking-wide text-sm mb-4">
            ASRIDGE CONSULTING
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            We welcome the opportunity to discuss how Asridge Consulting can
            support your next project.
          </p>
        </div>

        {/* Address column */}
        <div>
          <h3 className="text-accent font-heading font-semibold tracking-wide text-sm mb-4">
            OUR ADDRESS
          </h3>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Windsor, Ontario, Canada
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+15199956328" className="hover:text-accent">+1 519 995 6328</a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@asridge.com" className="hover:text-accent">info@asridge.com</a>
            </li>
          </ul>
        </div>

        {/* Company links column */}
        <div>
          <h3 className="text-accent font-heading font-semibold tracking-wide text-sm mb-4">
            COMPANY
          </h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors"
      >
        <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
