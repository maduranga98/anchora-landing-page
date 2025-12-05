import { blogPosts } from "@/data/blogPosts";

export const dynamic = "force-static";

export async function GET() {
  const siteUrl = "https://www.voxwel.com";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>VoxWel Blog - Workplace Safety &amp; Compliance Insights</title>
    <link>${siteUrl}/blogs</link>
    <description>Expert insights on workplace harassment prevention, fraud detection, whistleblower protection, and anonymous reporting. Learn how to protect your company with proven strategies.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <generator>VoxWel Blog Generator</generator>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>VoxWel</title>
      <link>${siteUrl}</link>
    </image>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blogs/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blogs/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator><![CDATA[${post.author.name}]]></dc:creator>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("\n      ")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
