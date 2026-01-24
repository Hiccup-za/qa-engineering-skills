import path from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";

import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function SkillPage({ params }: PageProps) {
  const { slug = [] } = await params;
  const safeSlug = slug.map((segment) => segment.replace(/[^a-z0-9-_]/gi, ""));
  const skillPath = path.join(process.cwd(), "skills", ...safeSlug, "SKILL.md");

  let content = "";
  try {
    content = await readFile(skillPath, "utf8");
  } catch {
    notFound();
  }

  const heading = content.split(/\r?\n/).find((line) => line.startsWith("# "));
  const title = heading ? heading.replace(/^#\s+/, "").trim() : safeSlug.at(-1) ?? "Skill";
  const lines = content.split(/\r?\n/);

  const renderLine = (line: string, index: number): ReactNode => {
    const headingMatch = /^(#{1,2})(\s+)(.*)$/.exec(line);
    if (headingMatch) {
      const [, marker, spacing, text] = headingMatch;
      const isPrimary = marker.length === 1;
      const markerClass = isPrimary ? "text-sky-600" : "text-amber-500";
      const textClass = isPrimary ? "text-sky-600" : "text-amber-500";

      return (
        <span key={`line-${index}`}>
          <span className={markerClass}>{marker}</span>
          {spacing}
          <span className={textClass}>{text}</span>
        </span>
      );
    }

    const metaMatch = /^(\s*)(name|description|disable-model-invocation):(.*)$/.exec(line);
    if (metaMatch) {
      const [, indentation, key, value] = metaMatch;
      const keyClass =
        key === "disable-model-invocation" ? "text-rose-500" : "text-emerald-600";
      return (
        <span key={`line-${index}`}>
          {indentation}
          <span className={keyClass}>{key}</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-foreground">{value}</span>
        </span>
      );
    }

    return <span key={`line-${index}`}>{line}</span>;
  };

  return (
    <main className="min-h-screen bg-muted/30 px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">Back</Link>
          </Button>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        </div>
        <span className="text-xs text-muted-foreground">
          skills/{safeSlug.join("/")}/SKILL.md
        </span>
        <Card>
          <CardContent>
            <article className="whitespace-pre-wrap text-sm text-foreground">
              {lines.map((line, index) => (
                <span key={`row-${index}`}>
                  {renderLine(line, index)}
                  {index < lines.length - 1 ? "\n" : null}
                </span>
              ))}
            </article>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
