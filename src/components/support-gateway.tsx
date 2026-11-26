import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, ExternalLink, Phone } from "lucide-react";

export function SupportGateway() {
  return (
    <Card className="my-3 border-primary/20 bg-primary/5 animate-slide-up">
      <CardHeader className="p-3">
        <CardTitle className="flex items-center gap-1.5 text-sm">
          <MessageCircle className="w-3.5 h-3.5 text-primary" />
          Instant Resolution Gateway
        </CardTitle>
        <CardDescription className="text-[10px]">
          Direct connection to Ginll support team for any legal or technical inquiries.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3 pb-3 flex flex-wrap gap-1.5">
        <Button size="sm" className="h-7 bg-primary hover:bg-primary/90 text-white gap-1.5 text-[10px]" asChild>
          <a href="mailto:lballc256@gmail.com">
            <Mail className="w-3 h-3" />
            Email Support
          </a>
        </Button>
        <Button size="sm" variant="outline" className="h-7 gap-1.5 border-border hover:bg-accent/10 text-[10px]" asChild>
          <a href="tel:+256748307444">
            <Phone className="w-3 h-3" />
            Call Us
          </a>
        </Button>
        <Button size="sm" variant="outline" className="h-7 gap-1.5 border-border hover:bg-accent/10 text-[10px]" asChild>
          <a href="https://zaxchats.online" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-3 h-3" />
            Website
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
