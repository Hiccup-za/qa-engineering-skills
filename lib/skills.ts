import path from "path";
import { readdir, readFile, stat } from "fs/promises";

export type SkillEntry = {
  id: string;
  title: string;
  category: string;
  filePath: string;
  slug: string;
};

const SKILLS_ROOT = path.join(process.cwd(), "skills");

async function findSkillFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir);
  const results: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      const nested = await findSkillFiles(fullPath);
      results.push(...nested);
      continue;
    }

    if (entry.toLowerCase() === "skill.md") {
      results.push(fullPath);
    }
  }

  return results;
}

function extractTitle(markdown: string, fallback: string) {
  const lines = markdown.split(/\r?\n/);
  const heading = lines.find((line) => line.trim().startsWith("# "));
  return heading ? heading.replace(/^#\s+/, "").trim() : fallback;
}

export async function getSkills(): Promise<SkillEntry[]> {
  const files = await findSkillFiles(SKILLS_ROOT);
  const skills: SkillEntry[] = [];

  for (const filePath of files) {
    const markdown = await readFile(filePath, "utf8");
    const relative = path.relative(SKILLS_ROOT, filePath);
    const segments = relative.split(path.sep);
    const category = segments.length > 1 ? segments[0] : "general";
    const id = relative.replace(/\\/g, "/");
    const slug = id.replace(/\/?SKILL\.md$/i, "");
    const baseName = segments[segments.length - 2] ?? "Skill";
    const title = extractTitle(markdown, baseName);

    skills.push({
      id,
      title,
      category,
      filePath: relative,
      slug,
    });
  }

  return skills.sort((a, b) => a.title.localeCompare(b.title));
}
