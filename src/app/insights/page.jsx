import InsightsContent from "./InsightsContent";

export const metadata = {
  title: "Insights",
  description:
    "Articles on structural engineering, Passive House detailing, and lessons from real projects - from the Asridge Consulting team. New insights coming soon.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return <InsightsContent />;
}
