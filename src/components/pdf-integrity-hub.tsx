"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FileDown, Shield } from "lucide-react";
import { format } from "date-fns";

export function PdfIntegrityHub() {
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    setTimestamp(format(new Date(), 'MMM dd, yyyy HH:mm:ss'));
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-secondary/50 rounded-xl border border-border mt-8 mb-4 animate-slide-up">
      <div className="flex items-center gap-3 mb-3 sm:mb-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-headline text-base font-semibold">PDF Integrity Hub</h4>
          <p className="text-xs text-muted-foreground">Export a timestamped copy of these terms.</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-[10px] text-muted-foreground mb-1 font-mono uppercase tracking-tight">
          {timestamp ? `Verified: ${timestamp}` : 'Verifying...'}
        </div>
        <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white gap-2 text-xs" onClick={handleDownload}>
          <FileDown className="w-3.5 h-3.5" />
          Export Terms
        </Button>
      </div>
    </div>
  );
}
