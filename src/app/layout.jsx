import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://asridge.ca"),
  title: {
    default: "Asridge Consulting | Structural Engineering, Ontario",
    template: "%s | Asridge Consulting",
  },
  description:
    "Structural engineering and project management for residential, commercial, and infrastructure projects across Ontario. Structural design, condition assessments, and Passive House engineering.",
  openGraph: {
    siteName: "Asridge Consulting",
    locale: "en_CA",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Asridge Consulting",
  description:
    "Structural engineering practice serving residential, commercial, and infrastructure projects across Ontario, with particular depth in high-performance and Passive House design.",
  url: "https://asridge.ca",
  telephone: "+1-519-995-6328",
  email: "info@asridge.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windsor",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "State",
    name: "Ontario",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
