import path from "path";
import { readdir, readFile, stat } from "fs/promises";

export type SkillEntry = {
  id: string;
  title: string;
  category: string;
  filePath: string;
  slug: string;
  description?: string;
  version?: string;
};

const SKILLS_ROOT = path.join(process.cwd(), "..", "..", ".agents", "skills");

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

function extractDescription(markdown: string): string | undefined {
  const frontmatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return undefined;
  
  const frontmatter = frontmatterMatch[1];
  const lines = frontmatter.split(/\r?\n/);
  
  // Find the description line
  let descriptionStartIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^description:\s*(.+)$/)) {
      descriptionStartIndex = i;
      break;
    }
  }
  
  if (descriptionStartIndex === -1) return undefined;
  
  const descriptionLine = lines[descriptionStartIndex];
  const descriptionMatch = descriptionLine.match(/^description:\s*(.+)$/);
  
  if (!descriptionMatch) return undefined;
  
  const descriptionValue = descriptionMatch[1].trim();
  
  // Check if it's a multiline YAML format (| or >)
  if (descriptionValue === '|' || descriptionValue === '>') {
    // Extract multiline content
    const multilineContent: string[] = [];
    let indentLevel = -1;
    
    // Find the first content line to determine indentation
    for (let i = descriptionStartIndex + 1; i < lines.length; i++) {
      const line = lines[i];
      
      // Stop if we hit another top-level key (no indentation)
      if (line.trim() && !line.match(/^\s/)) {
        break;
      }
      
      // Skip empty lines at the start
      if (multilineContent.length === 0 && !line.trim()) {
        continue;
      }
      
      // Determine indentation from first non-empty line
      if (indentLevel === -1 && line.trim()) {
        indentLevel = line.match(/^(\s*)/)?.[1].length ?? 0;
      }
      
      // Collect lines with same or greater indentation
      if (line.trim()) {
        const lineIndent = line.match(/^(\s*)/)?.[1].length ?? 0;
        if (lineIndent >= indentLevel) {
          // Remove the base indentation
          multilineContent.push(line.substring(indentLevel));
        } else {
          // Less indentation means we've reached the end
          break;
        }
      } else if (multilineContent.length > 0) {
        // Preserve empty lines within the multiline content
        multilineContent.push('');
      }
    }
    
    // Join lines: preserve newlines for |, fold for >
    const joined = descriptionValue === '|' 
      ? multilineContent.join('\n')
      : multilineContent.join(' ').replace(/\s+/g, ' ');
    
    return joined.trim();
  }
  
  // Single-line description
  return descriptionValue;
}

function extractVersion(markdown: string): string | undefined {
  const frontmatterMatch = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return undefined;
  
  const frontmatter = frontmatterMatch[1];
  
  // Look for metadata section with version
  const metadataMatch = frontmatter.match(/metadata:\s*\n([\s\S]*?)(?=\n\w+:|$)/);
  if (!metadataMatch) return undefined;
  
  const metadata = metadataMatch[1];
  const versionMatch = metadata.match(/version:\s*["']?([^"'\n]+)["']?/);
  return versionMatch ? versionMatch[1].trim() : undefined;
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
    const description = extractDescription(markdown);
    const version = extractVersion(markdown);

    skills.push({
      id,
      title,
      category,
      filePath: relative,
      slug,
      description,
      version,
    });
  }

  return skills.sort((a, b) => a.title.localeCompare(b.title));
}
