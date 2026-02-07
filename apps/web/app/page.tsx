import { getSkills } from "@/lib/skills";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyableCode } from "@/components/ui/copyable-code";
import { PackageManagerCode } from "@/components/package-manager-code";
import { Activity } from "lucide-react";
import { SkillCardHeader } from "@/components/skill-card-header";

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
    <main className="flex-1 bg-gradient-brand-subtle" data-testid="homePage">
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-12">
        <div className="flex flex-col gap-6" data-testid="homeHeroSection">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] pb-1" data-testid="homeTitle">
                QA Engineering Skills
              </h1>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed" data-testid="homeDescription">
                QA Engineering process and best-practice skills for engineering teams.
              </p>
            </div>
            <div className="mt-2" data-testid="homePackageManagerCode">
              <PackageManagerCode packageName="Hiccup-za/qa-skills" className="w-fit" />
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          {skills.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(340px,1fr))]" data-testid="homeSkillsGrid">
              {skills.map((skill) => (
                <Card 
                  key={skill.id} 
                  className="flex h-full flex-col transition-all duration-300 hover:bg-gradient-brand-subtle hover:border-opacity-50"
                  data-testid={`skillCard-${skill.id}`}
                >
                  <SkillCardHeader
                    title={skill.title}
                    description={skill.description ? getFirstSentence(skill.description) : undefined}
                    installs={skill.installs}
                    version={skill.version}
                  />
                  <CardContent className="flex flex-col gap-4 mt-auto">
                    {skill.commands && skill.commands.length > 0 && (
                      <div className="flex flex-col gap-2" data-testid="skillCommandsSection">
                        <h3 className="text-xs font-semibold uppercase tracking-wider" data-testid="skillCommandsHeading">
                          Commands
                        </h3>
                        <div className="flex flex-col gap-2">
                          {skill.commands.map((command) => (
                            <CopyableCode
                              key={command.name}
                              code={`/${command.name}`}
                              className="w-full"
                              data-testid={`skillCommand-${command.name}`}
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
            <p className="text-sm text-muted-foreground" data-testid="skillCardEmptyState">No skills found yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
