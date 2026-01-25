import path from "path";
import { readFile } from "fs/promises";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ChangelogPage() {
  const changelogPath = path.join(process.cwd(), "..", "..", "CHANGELOG.md");
  const content = await readFile(changelogPath, "utf8");
  const lines = content.split(/\r?\n/);

  const sections: { title: string; body: string[] }[] = [];
  let currentSection: { title: string; body: string[] } | null = null;

  for (const line of lines) {
    if (line.startsWith("# ")) {
      continue;
    }

    if (line.startsWith("## ")) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: line.replace(/^##\s+/, "").trim(),
        body: [],
      };
      continue;
    }

    if (currentSection) {
      currentSection.body.push(line);
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  const markdownContent = (body: string[]) => {
    // Trim leading and trailing empty lines, but preserve internal structure
    let start = 0;
    let end = body.length;
    
    while (start < body.length && !body[start].trim()) {
      start++;
    }
    
    while (end > start && !body[end - 1].trim()) {
      end--;
    }
    
    return body.slice(start, end).join("\n");
  };

  return (
    <main className="min-h-screen bg-gradient-brand-subtle">
      <div className="px-6 py-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button 
              asChild 
              variant="ghost" 
              size="sm"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-semibold tracking-tight">
              Changelog
            </h1>
          </div>
          <div className="grid gap-6">
            {sections
              .map((section, index) => ({
                ...section,
                index,
                date: section.title.match(/-\s*(\d{4}-\d{2}-\d{2})\s*$/)?.[1],
              }))
              .filter((section) => section.title.toLowerCase() !== "[unreleased]")
              .toSorted((a, b) => {
                if (a.date && b.date) {
                  return b.date.localeCompare(a.date);
                }
                if (a.date) {
                  return -1;
                }
                if (b.date) {
                  return 1;
                }
                return b.index - a.index;
              })
              .map((section) => {
                const content = markdownContent(section.body);
                // Only render sections that have content
                if (!content.trim()) {
                  return null;
                }
                return (
                  <Card 
                    key={section.title}
                    className="transition-all duration-300 hover:bg-gradient-brand-subtle hover:border-opacity-50"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm dark:prose-invert max-w-none [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-muted [&_code]:text-foreground [&_code]:text-xs [&_code]:font-mono [&_pre]:hidden">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h3: ({ children }) => (
                              <h3 className="text-base font-semibold mt-4 mb-2 first:mt-0 text-primary">{children}</h3>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc pl-5 space-y-1 my-2">{children}</ul>
                            ),
                            li: ({ children }) => (
                              <li className="text-sm text-foreground">{children}</li>
                            ),
                            p: ({ children }) => (
                              <p className="text-sm text-foreground my-2 leading-relaxed">{children}</p>
                            ),
                            pre: () => null,
                          }}
                        >
                          {content}
                        </ReactMarkdown>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
              .filter(Boolean)}
          </div>
        </div>
      </div>
    </main>
  );
}
