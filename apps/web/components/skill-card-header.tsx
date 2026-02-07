import { CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

interface SkillCardHeaderProps {
  title: string;
  description?: string;
  installs?: number;
  version?: string;
}

export function SkillCardHeader({
  title,
  description,
  installs,
  version,
}: SkillCardHeaderProps) {
  return (
    <div className="flex flex-col p-6" data-testid="skillCardHeader">
      <div className="flex items-start justify-between w-full mb-4">
        <div className="flex-1 min-w-0">
          <CardTitle className="text-xl break-words" data-testid="skillTitle">{title}</CardTitle>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
          {installs && installs > 0 && (
            <Badge variant="outline" className="flex items-center gap-1 border-2 font-semibold bg-white text-foreground dark:bg-white dark:text-black" data-testid="skillInstallsBadge">
              <Activity className="h-3 w-3" />
              {installs}
            </Badge>
          )}
          {version && <Badge variant="outline" data-testid="skillVersionBadge">{version}</Badge>}
        </div>
      </div>
      {description && (
        <div className="w-full">
          <CardDescription className="leading-relaxed w-full" data-testid="skillDescription">
            {description}
          </CardDescription>
        </div>
      )}
    </div>
  );
}
