export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // no reason for search engines to crawl the API route
    },
    sitemap: "https://asridge.com/sitemap.xml",
  };
}
