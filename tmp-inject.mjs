import fs from 'fs';
import path from 'path';

const blogDir = 'd:/Codings/Projects - Lumora/company voice/New Landing Page/anchora-new/blogs';
const dataFile = 'd:/Codings/Projects - Lumora/company voice/New Landing Page/anchora-new/data/blogPosts.ts';

const files = [
  '30_whistleblowing-software-pricing-comparison.md',
  '31_best-eu-directive-compliant-whistleblowing-software.md',
  '32_multilingual-whistleblowing-software-eu.md',
  '33_is-navex-anonymous-ethicspoint-privacy.md',
  '34_workplace-discrimination-investigation-guide.md',
  '35_types-employee-fraud-red-flags-detection.md'
];

let blogPostsTs = fs.readFileSync(dataFile, 'utf-8');

const insertionPointStr = 'export const blogPosts: BlogPost[] = [';
const insertionIndex = blogPostsTs.indexOf(insertionPointStr) + insertionPointStr.length;

if (insertionIndex === -1 + insertionPointStr.length) {
    console.error("Could not find insertion point!");
    process.exit(1);
}

let codeToInsert = '\n';

// Because we need the newest first (35 down to 30), let's reverse the array iteration.
// The task says "Add these entries to the beginning of the blogPosts array (newest first)".
// 35 is newest, so 35 should be inserted first so it becomes index 0.
// Wait, if I insert sequential strings right after [, I should just build the string descending.
const fileList = [...files].reverse();

for (const file of fileList) {
  const filePath = path.join(blogDir, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.error("Could not parse " + file);
    continue;
  }
  
  const frontmatterStr = match[1];
  const content = match[2].trim();
  
  const lines = frontmatterStr.split('\n');
  const metadata = {};
  for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    if (line.startsWith('tags:')) {
        const val = line.substring(line.indexOf('['));
        metadata['tags'] = val;
        continue;
    }
    
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.substring(0, colonIdx).trim();
    let val = line.substring(colonIdx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1);
    }
    metadata[key] = val;
  }
  
  const authorName = metadata.authorName || 'VoxWel Team';
  const authorRole = metadata.authorRole || 'Workplace Safety Advocates';
  
  const objStr = `  {
    slug: ${JSON.stringify(metadata.slug)},
    title: ${JSON.stringify(metadata.title)},
    metaTitle: ${JSON.stringify(metadata.metaTitle || '')},
    metaDescription: ${JSON.stringify(metadata.metaDescription || '')},
    excerpt: ${JSON.stringify(metadata.excerpt)},
    category: ${JSON.stringify(metadata.category)},
    date: ${JSON.stringify(metadata.date)},
    readTime: ${JSON.stringify(metadata.readTime)},
    author: { name: ${JSON.stringify(authorName)}, role: ${JSON.stringify(authorRole)} },
    tags: ${metadata.tags || '[]'},
    icon: ${JSON.stringify(metadata.icon)},
    color: ${JSON.stringify(metadata.color)},
    content: ${JSON.stringify(content)}
  },
`;
  codeToInsert += objStr;
}

blogPostsTs = blogPostsTs.substring(0, insertionIndex) + codeToInsert + blogPostsTs.substring(insertionIndex);

fs.writeFileSync(dataFile, blogPostsTs, 'utf-8');
console.log("Successfully injected 6 blog posts into data/blogPosts.ts");
