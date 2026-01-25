import path from "path";
import { readFile } from "fs/promises";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ChangelogPage() {
  const changelogPath = path.join(process.cwd(), "..", "..", "CHANGELOG.md");
  const content = await readFile(changelogPath, "utf8");
  const lines = content.split(/\r?\n/);

  const introLines: string[] = [];
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
    } else {
      introLines.push(line);
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  const introText = introLines
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ");

  const buildBlocks = (body: string[]) => {
    const blocks: Array<{ type: "list"; items: string[] } | { type: "paragraph"; text: string }> =
      [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        blocks.push({ type: "list", items: listItems });
        listItems = [];
      }
    };

    for (const line of body) {
      if (line.startsWith("- ")) {
        listItems.push(line.replace(/^-+\s+/, "").trim());
        continue;
      }

      flushList();
      const text = line.trim();
      if (text) {
        blocks.push({ type: "paragraph", text });
      }
    }

    flushList();
    return blocks;
  };

  return (
    <main className="min-h-screen bg-muted/30 px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-semibold tracking-tight">Changelog</h1>
        </div>
        {introText ? <p className="text-sm text-muted-foreground">{introText}</p> : null}
        <div className="grid gap-6">
          {sections
            .map((section, index) => ({
              ...section,
              index,
              date: section.title.match(/-\s*(\d{4}-\d{2}-\d{2})\s*$/)?.[1],
            }))
            .filter((section) => section.title.toLowerCase() !== "[unreleased]")
            .sort((a, b) => {
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
              const blocks = buildBlocks(section.body);
              return (
                <Card key={section.title}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-foreground">
                      {blocks.map((block, index) => {
                        if (block.type === "list") {
                          return (
                            <ul key={`${section.title}-list-${index}`} className="list-disc pl-5">
                              {block.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={`${section.title}-p-${index}`}>{block.text}</p>;
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </main>
  );
}
