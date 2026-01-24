import Link from "next/link";

import { getSkills } from "@/lib/skills";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { CopyableCode } from "@/components/ui/copyable-code";

export default async function HomePage() {
  const skills = await getSkills();
  const templateSkills = skills.filter((skill) => skill.category === "templates");
  const bestPracticeSkills = skills.filter((skill) => skill.category === "best-practices");
  const processSkills = skills.filter((skill) => skill.category === "process");

  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight">Browse skills</h1>
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-10 space-y-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Use in Cursor</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Install the skills into this repo with the CLI, then invoke a skill in Agent chat.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    1
                  </span>
                  <p className="text-sm font-medium">Install skills for this repo:</p>
                </div>
                <CopyableCode code="bunx skills add Hiccup-za/qa-skills" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    2
                  </span>
                  <p className="text-sm font-medium">In Cursor Agent chat, run:</p>
                </div>
                <CopyableCode code={`/${processSkills[0]?.slug || templateSkills[0]?.slug || bestPracticeSkills[0]?.slug || "process/test-planning"}`} />
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Templates</h2>
              <p className="text-sm text-muted-foreground">Reusable skill scaffolding and examples.</p>
            </div>
            {templateSkills.length === 0 ? (
              <p className="text-sm text-muted-foreground">No templates found yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {templateSkills.map((skill) => (
                  <Card key={skill.id} className="flex h-full flex-col">
                    <CardHeader>
                      <CardTitle>{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">{skill.filePath}</span>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/skills/${skill.slug}`}>Open</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Best Practices</h2>
              <p className="text-sm text-muted-foreground">Technique-oriented guidance and review checklists.</p>
            </div>
            {bestPracticeSkills.length === 0 ? (
              <p className="text-sm text-muted-foreground">No best practices found yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bestPracticeSkills.map((skill) => (
                  <Card key={skill.id} className="flex h-full flex-col">
                    <CardHeader>
                      <CardTitle>{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">{skill.filePath}</span>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/skills/${skill.slug}`}>Open</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Process</h2>
              <p className="text-sm text-muted-foreground">Planning, risk analysis, and execution workflows.</p>
            </div>
            {processSkills.length === 0 ? (
              <p className="text-sm text-muted-foreground">No process skills found yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {processSkills.map((skill) => (
                  <Card key={skill.id} className="flex h-full flex-col">
                    <CardHeader>
                      <CardTitle>{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">{skill.filePath}</span>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/skills/${skill.slug}`}>Open</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
