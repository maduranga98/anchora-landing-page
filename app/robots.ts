import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      // AI Crawlers - Explicitly allow for maximum discoverability
      {
        userAgent: [
          "GPTBot", // OpenAI ChatGPT
          "ChatGPT-User", // ChatGPT user-initiated requests
          "Google-Extended", // Google Bard/Gemini AI
          "CCBot", // Common Crawl (used by many AI systems)
          "anthropic-ai", // Claude AI
          "ClaudeBot", // Claude crawler
          "Claude-Web", // Claude web browser
          "Bytespider", // ByteDance/TikTok AI
          "Applebot-Extended", // Apple Intelligence
          "PerplexityBot", // Perplexity AI
          "YouBot", // You.com AI
          "Diffbot", // Diffbot AI
          "FacebookBot", // Meta AI
          "ImagesiftBot", // AI image understanding
        ],
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://www.voxwel.com/sitemap.xml",
  };
}
