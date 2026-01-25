import { getSkills } from "@/lib/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

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
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold tracking-tight">QA Engineering Skills</h1>
              <p className="text-sm text-muted-foreground">
                QA testing knowledge and best practices for engineering teams.
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-10 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Active Skills</h2>
          </div>
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
