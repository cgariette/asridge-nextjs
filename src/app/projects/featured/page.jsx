import FeaturedProjectsContent from "./FeaturedProjectsContent";

export const metadata = {
  title: "Featured Projects",
  description:
    "Landmark structural engineering projects including the 1915 Canakkale Bridge, the Gordie Howe International Bridge, and Meadowbrook Place, Ontario's first multi-unit Passive House.",
  alternates: { canonical: "/projects/featured" },
};

export default function FeaturedProjectsPage() {
  return <FeaturedProjectsContent />;
}
