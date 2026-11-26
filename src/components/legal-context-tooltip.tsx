import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ContextTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

export function LegalContextTooltip({ term, definition, children }: ContextTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="cursor-help border-b border-dotted border-accent text-accent font-medium hover:bg-accent/10 transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-3 bg-popover border-accent/20">
          <p className="text-sm font-headline text-accent mb-1">{term}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
