export default function sitemap() {
  const baseUrl = "https://asridge.com";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/passive-house", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
    { path: "/projects/featured", priority: 0.6, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.5, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
