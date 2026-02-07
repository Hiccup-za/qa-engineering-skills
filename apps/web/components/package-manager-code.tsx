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
    <Tabs defaultValue="bun" className={className} data-testid="packageManagerTabs">
      <TabsList>
        <TabsTrigger value="bun" data-testid="packageManagerTab-bun">Bun</TabsTrigger>
        <TabsTrigger value="npm" data-testid="packageManagerTab-npm">NPM</TabsTrigger>
        <TabsTrigger value="pnpm" data-testid="packageManagerTab-pnpm">PNPM</TabsTrigger>
        <TabsTrigger value="yarn" data-testid="packageManagerTab-yarn">Yarn</TabsTrigger>
      </TabsList>
      <TabsContent value="bun" data-testid="packageManagerContent-bun">
        <CopyableCode code={getCommand("bun")} className="w-fit" />
      </TabsContent>
      <TabsContent value="npm" data-testid="packageManagerContent-npm">
        <CopyableCode code={getCommand("npm")} className="w-fit" />
      </TabsContent>
      <TabsContent value="pnpm" data-testid="packageManagerContent-pnpm">
        <CopyableCode code={getCommand("pnpm")} className="w-fit" />
      </TabsContent>
      <TabsContent value="yarn" data-testid="packageManagerContent-yarn">
        <CopyableCode code={getCommand("yarn")} className="w-fit" />
      </TabsContent>
    </Tabs>
  );
}
