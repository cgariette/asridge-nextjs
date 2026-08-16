import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSignup from "@/components/StatsSignup";

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