import path from "path";
import { readdir, readFile, stat } from "fs/promises";

export type Command = {
  name: string;
  description?: string;
};

export type SkillEntry = {
  id: string;
  title: string;
  category: string;
  filePath: string;
  slug: string;
  description?: string;
  version?: string;
  commands?: Command[];
  installs?: number;
};

const SKILLS_ROOT = path.join(process.cwd(), "..", "..", "skills");

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

async function findCommands(skillDir: string): Promise<Command[]> {
  const commandDir = path.join(skillDir, "command");
  const commands: Command[] = [];

  try {
    const entries = await readdir(commandDir);
    
    for (const entry of entries) {
      const fullPath = path.join(commandDir, entry);
      const info = await stat(fullPath);
      
      if (info.isFile() && entry.endsWith(".md")) {
        const markdown = await readFile(fullPath, "utf8");
        const commandName = entry.replace(/\.md$/, "");
        const description = extractDescription(markdown);
        
        commands.push({
          name: commandName,
          description,
        });
      }
    }
  } catch (error) {
    // Command directory doesn't exist or can't be read - that's okay
    // Just return empty array
  }

  return commands.sort((a, b) => a.name.localeCompare(b.name));
}

async function fetchInstallCounts(): Promise<Map<string, number>> {
  const installCounts = new Map<string, number>();
  
  try {
    const response = await fetch("https://skills.sh/hiccup-za/qa-skills", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!response.ok) {
      return installCounts;
    }
    
    const html = await response.text();
    
    // Parse HTML to extract skill names and install counts
    // The structure may vary, so we'll try multiple patterns
    // Common patterns to look for:
    // 1. Skill name followed by install count
    // 2. Data attributes with install counts
    // 3. Text patterns like "X installs" or "Installs: X"
    
    // Try to find skill entries - this is a flexible parser
    // that looks for common patterns in the HTML
    
    // Pattern 1: Look for skill slugs in the HTML (e.g., "istqb-foundation", "changelog-generator")
    // and try to find associated install counts nearby
    
    // Strategy 1: Look for JSON data embedded in the page (most reliable)
    const jsonMatch = html.match(/<script[^>]*type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/i);
    if (jsonMatch) {
      try {
        const data = JSON.parse(jsonMatch[1]);
        // Try various JSON structures
        if (data.skills && Array.isArray(data.skills)) {
          for (const skill of data.skills) {
            if (skill.slug && typeof skill.installs === "number") {
              installCounts.set(skill.slug, skill.installs);
            }
          }
        }
        // Also check for flat structure
        if (data.installs && typeof data.installs === "object") {
          for (const [slug, count] of Object.entries(data.installs)) {
            if (typeof count === "number") {
              installCounts.set(slug, count);
            }
          }
        }
      } catch {
        // JSON parsing failed, continue with other methods
      }
    }
    
    // Strategy 2: Look for data attributes (e.g., data-skill-slug, data-installs)
    const dataAttributePattern = /data-skill-slug=["']([^"']+)["'][^>]*data-installs=["'](\d+)["']/gi;
    let dataMatch;
    while ((dataMatch = dataAttributePattern.exec(html)) !== null) {
      const slug = dataMatch[1];
      const count = parseInt(dataMatch[2], 10);
      if (!isNaN(count)) {
        installCounts.set(slug, count);
      }
    }
    
    // Strategy 3: Look for skill slugs in hrefs/links and find install counts within the same <a> tag
    // Pattern: href="/hiccup-za/qa-skills/{skill-slug}" followed by content and then a span with a number
    // The structure is: <a href="/hiccup-za/qa-skills/changelog-generator">...<div class="...text-right..."><span>2</span></div></a>
    // We match the href, capture everything until </a>, then find the number in a span
    const linkPattern = /href=["']\/hiccup-za\/qa-skills\/([a-z0-9-]+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let linkMatch;
    while ((linkMatch = linkPattern.exec(html)) !== null) {
      const slug = linkMatch[1];
      const linkContent = linkMatch[2];
      
      // Look for a span with a number in the link content
      // The install count is typically in: <div class="...text-right..."><span>2</span></div>
      // or <span class="font-mono text-sm text-foreground">2</span>
      // Try multiple patterns to be robust, in order of specificity
      const patterns = [
        // Most specific: text-right div containing a span with number
        /<div[^>]*\btext-right\b[^>]*>[\s\S]*?<span[^>]*>(\d+)<\/span>/i,
        // Font-mono span (common for numbers)
        /<span[^>]*\bfont-mono\b[^>]*>(\d+)<\/span>/i,
        // Any span with text-foreground class
        /<span[^>]*\btext-foreground\b[^>]*>(\d+)<\/span>/i,
        // Last resort: any span with just a number (but prefer ones near the end)
        /<span[^>]*>(\d+)<\/span>(?=[\s\S]{0,100}<\/a>)/i,
      ];
      
      for (const pattern of patterns) {
        const countMatch = linkContent.match(pattern);
        if (countMatch) {
          const count = parseInt(countMatch[1], 10);
          if (!isNaN(count) && slug.length > 2 && count > 0) {
            installCounts.set(slug, count);
            break; // Found a match, move to next link
          }
        }
      }
    }
    
    // Strategy 4: Look for patterns like "skill-name" followed by install count
    // This is more flexible and searches for any kebab-case identifier followed by install info
    const flexiblePattern = /([a-z0-9]+(?:-[a-z0-9]+)+)[\s\S]{0,300}?(?:installs?|downloads?)[\s:]+(\d+)/gi;
    let flexMatch;
    while ((flexMatch = flexiblePattern.exec(html)) !== null) {
      const slug = flexMatch[1];
      const count = parseInt(flexMatch[2], 10);
      // Only accept if it looks like a skill slug (has at least one dash and reasonable length)
      if (!isNaN(count) && slug.includes("-") && slug.length >= 5 && slug.length <= 50) {
        // Don't overwrite if we already have a count for this slug (prefer more specific matches)
        if (!installCounts.has(slug)) {
          installCounts.set(slug, count);
        }
      }
    }
    
  } catch (error) {
    // Silently fail - return empty map (graceful degradation)
    console.error("Failed to fetch install counts:", error);
  }
  
  return installCounts;
}

export async function getSkills(): Promise<SkillEntry[]> {
  const files = await findSkillFiles(SKILLS_ROOT);
  const skills: SkillEntry[] = [];
  
  // Fetch install counts once for all skills
  const installCounts = await fetchInstallCounts();

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
    
    // Find the skill directory (parent of SKILL.md)
    const skillDir = path.dirname(filePath);
    const commands = await findCommands(skillDir);
    
    // Get install count for this skill
    const installs = installCounts.get(slug);

    skills.push({
      id,
      title,
      category,
      filePath: relative,
      slug,
      description,
      version,
      commands: commands.length > 0 ? commands : undefined,
      installs,
    });
  }

  return skills.sort((a, b) => a.title.localeCompare(b.title));
}
