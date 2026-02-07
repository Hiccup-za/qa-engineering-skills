"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyableCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  className?: string;
}

export function CopyableCode({ code, className, ...props }: CopyableCodeProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={cn("relative", className)} data-testid="copyableCode" {...props}>
      <pre className="overflow-x-auto rounded-md border border-border bg-muted/50 px-4 py-3 font-mono text-sm shadow-sm pr-12">
        <code data-testid="copyableCodeText">{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-2 h-7 w-7 p-0"
        onClick={handleCopy}
        aria-label="Copy code"
        data-testid="copyableCodeButton"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-600" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </Button>
    </div>
  );
}
