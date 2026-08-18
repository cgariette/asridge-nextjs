import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSignup from "@/components/StatsSignup";

export const metadata = {
  description:
    "Structural engineering and project management, serving Ontario. One firm, from design through construction - structural design, condition assessments, and Passive House expertise.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <WhoWeWorkWith />
      <ServicesGrid />
      <StatsSignup />
    </>
  );
}
