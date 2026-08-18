import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us",
  description:
    "Meet the Asridge Consulting team - structural engineers serving Ontario with expertise in structural design, foundations, and Passive House engineering, based in Windsor.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
