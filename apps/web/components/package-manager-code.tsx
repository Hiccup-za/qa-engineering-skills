"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CopyableCode } from "@/components/ui/copyable-code";

interface PackageManagerCodeProps {
  packageName: string;
  className?: string;
}

type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

const packageManagerCommands: Record<PackageManager, string> = {
  bun: "bunx",
  npm: "npx",
  pnpm: "pnpm dlx",
  yarn: "yarn dlx",
};

export function PackageManagerCode({ packageName, className }: PackageManagerCodeProps) {
  const getCommand = (manager: PackageManager) => {
    const command = packageManagerCommands[manager];
    return `${command} skills add ${packageName}`;
  };

  return (
    <Tabs defaultValue="bun" className={className}>
      <TabsList>
        <TabsTrigger value="bun">Bun</TabsTrigger>
        <TabsTrigger value="npm">NPM</TabsTrigger>
        <TabsTrigger value="pnpm">PNPM</TabsTrigger>
        <TabsTrigger value="yarn">Yarn</TabsTrigger>
      </TabsList>
      <TabsContent value="bun">
        <CopyableCode code={getCommand("bun")} className="w-fit" />
      </TabsContent>
      <TabsContent value="npm">
        <CopyableCode code={getCommand("npm")} className="w-fit" />
      </TabsContent>
      <TabsContent value="pnpm">
        <CopyableCode code={getCommand("pnpm")} className="w-fit" />
      </TabsContent>
      <TabsContent value="yarn">
        <CopyableCode code={getCommand("yarn")} className="w-fit" />
      </TabsContent>
    </Tabs>
  );
}
