import { getSkills } from "@/lib/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyableCode } from "@/components/ui/copyable-code";
import { PackageManagerCode } from "@/components/package-manager-code";
import { ThemeToggle } from "@/components/theme-toggle";
import { Activity } from "lucide-react";
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
    <main>
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
              <PackageManagerCode packageName="Hiccup-za/qa-skills" className="w-fit" />
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
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link
                  href="https://github.com/Hiccup-za/qa-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
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
                      <div className="flex items-center gap-2">
                        {skill.installs && skill.installs > 0 && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Activity className="h-3 w-3" />
                            {skill.installs}
                          </Badge>
                        )}
                        {skill.version && (
                          <Badge variant="outline">{skill.version}</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 mt-auto">
                    {skill.description && (
                      <p className="text-sm text-muted-foreground">{getFirstSentence(skill.description)}</p>
                    )}
                    {skill.commands && skill.commands.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Commands
                        </h3>
                        <div className="flex flex-col gap-2">
                          {skill.commands.map((command) => (
                            <CopyableCode
                              key={command.name}
                              code={`/${command.name}`}
                              className="w-full"
                            />
                          ))}
                        </div>
                      </div>
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
