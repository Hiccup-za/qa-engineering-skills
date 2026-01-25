import "./globals.css";
import path from "path";
import { readFile } from "fs/promises";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "QA Skills",
  description: "Browse QA skills and best practices.",
};

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const version = await getCurrentVersion();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        {children}
        <div className="pointer-events-none fixed bottom-4 left-0 right-0">
          <div className="mx-auto flex max-w-6xl px-6">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="pointer-events-auto"
            >
              <Link href="/changelog">
                v{version}
              </Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
