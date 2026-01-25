import { getSkills } from "@/lib/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyableCode } from "@/components/ui/copyable-code";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

function getFirstSentence(text: string): string {
  // Remove extra whitespace and newlines
  const cleaned = text.replace(/\s+/g, " ").trim();
  
  // Match first sentence ending with . ! or ?
  const match = cleaned.match(/^[^.!?]+[.!?]/);
  if (match) {
    return match[0].trim();
  }
  
  // If no sentence ending found, return first 150 characters
  return cleaned.length > 150 ? cleaned.substring(0, 150).trim() + "..." : cleaned;
}

export default async function HomePage() {
  const skills = await getSkills();

  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold tracking-tight">QA Engineering Skills</h1>
                <p className="text-sm text-muted-foreground">
                  QA Engineering process and best-practice skills for engineering teams.
                </p>
              </div>
              <CopyableCode code="npx skills add Hiccup-za/qa-skills" className="w-fit" />
            </div>
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link
                  href="https://skills.sh/Hiccup-za/qa-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  skills.sh
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {skills.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <Card key={skill.id} className="flex h-full flex-col relative">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle>{skill.title}</CardTitle>
                      {skill.version && (
                        <Badge variant="outline">{skill.version}</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 mt-auto">
                    {skill.description && (
                      <p className="text-sm text-muted-foreground">{getFirstSentence(skill.description)}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No skills found yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
