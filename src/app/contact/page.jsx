import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your project. Asridge Consulting works with developers, contractors, architects, and other engineers across Ontario. Windsor, Ontario - +1 519 995 6328.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
