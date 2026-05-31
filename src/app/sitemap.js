export default function sitemap() {
  const baseUrl = "https://umair-ali-dev.vercel.app";

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "about", priority: 0.9, changeFrequency: "monthly" },
    { path: "services", priority: 0.9, changeFrequency: "monthly" },
    { path: "work", priority: 0.9, changeFrequency: "weekly" },
    { path: "contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: route.path ? `${baseUrl}/${route.path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
