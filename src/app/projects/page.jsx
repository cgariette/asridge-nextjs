import ProjectsContent from "./ProjectsContent";

export const metadata = {
  title: "Our Projects",
  description:
    "Case studies from Asridge Consulting's structural engineering work, including foundation value engineering and water leak investigation and repair on multi-storey buildings.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
