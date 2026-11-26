"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, X } from "lucide-react";
import { understandLegalSectionsWithAI } from "@/ai/flows/understand-legal-sections-with-ai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AiInterpreterButtonProps {
  sectionTitle: string;
  legalText: string;
}

export function AiInterpreterButton({ sectionTitle, legalText }: AiInterpreterButtonProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInterpret = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await understandLegalSectionsWithAI({ sectionTitle, legalText });
      setSummary(result.summary);
    } catch (err) {
      setError("Failed to summarize this section. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {!summary ? (
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-primary/5 border-primary/20 hover:bg-primary/10 text-primary gap-2"
          onClick={handleInterpret}
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          AI Clause Interpreter
        </Button>
      ) : (
        <Alert className="bg-primary/10 border-primary/20 animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between items-start">
            <div>
              <AlertTitle className="flex items-center gap-2 text-primary font-headline">
                <Sparkles className="w-4 h-4" />
                AI Summary
              </AlertTitle>
              <AlertDescription className="text-sm text-foreground/90 mt-2 leading-relaxed italic">
                &quot;{summary}&quot;
              </AlertDescription>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setSummary(null)}>
              <X className="h-4 h-4" />
            </Button>
          </div>
        </Alert>
      )}
      {error && <p className="text-xs text-destructive mt-2">{error}</p>}
    </div>
  );
}
