import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Services",
  description:
    "Structural design, condition assessments, Passive House engineering, and project delivery for residential, commercial, and infrastructure projects across Ontario.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
