"use client";

import { FiFileText } from "react-icons/fi";

interface Heading {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-32">
        <div className="bg-linear-to-br from-background-light to-white border-2 border-border-light rounded-2xl p-6 shadow-lg">
          <h3 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4 flex items-center gap-2">
            <FiFileText className="w-4 h-4" />
            Table of Contents
          </h3>
          <nav className="space-y-2">
            {headings.map((heading, index) => (
              <a
                key={index}
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`block text-sm hover:text-primary-teal hover:bg-primary-teal/5 transition-all px-3 py-2 rounded-lg ${
                  heading.level === 2
                    ? "font-bold text-text-primary"
                    : heading.level === 3
                    ? "text-text-secondary pl-6"
                    : "text-text-tertiary pl-9"
                }`}
              >
                {heading.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
