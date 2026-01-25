import path from "path";
import { readFile } from "fs/promises";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getCurrentVersion() {
  const changelogPath = path.join(process.cwd(), "..", "..", "CHANGELOG.md");

  try {
    const content = await readFile(changelogPath, "utf8");
    const matches = Array.from(content.matchAll(/^##\s*\[([^\]]+)\]/gm)).map(
      (match) => match[1],
    );
    return matches.find((heading) => heading.toLowerCase() !== "unreleased") ?? "Unreleased";
  } catch {
    return "Unreleased";
  }
}

export async function Footer() {
  const version = await getCurrentVersion();

  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
          >
            <Link href="/changelog">
              v{version}
            </Link>
          </Button>
          <span className="text-sm text-muted-foreground">
            Built by{" "}
            <Link
              href="https://x.com/chriszeuch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              @chriszeuch
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
