import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Zap, ShieldCheck } from "lucide-react";

export function BillingVisualizer() {
  const tiers = [
    {
      name: "Standard",
      price: "$0",
      features: ["Basic Chat", "Standard Media", "Community Access"],
      icon: <Zap className="w-4 h-4 text-muted-foreground" />,
      current: true
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      features: ["Ad-free Experience", "HD Media Uploads", "Priority Support", "Custom Themes"],
      icon: <Zap className="w-4 h-4 text-accent" />,
      current: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["API Access", "Unlimited Metered Usage", "Dedicated Account Manager"],
      icon: <ShieldCheck className="w-4 h-4 text-primary" />,
      current: false
    }
  ];

  return (
    <div className="my-6 animate-slide-up">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="w-4 h-4 text-primary" />
        <h3 className="text-lg font-headline font-semibold">Internal Economy & Tiers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`relative overflow-hidden border-border transition-all hover:border-primary/50 ${tier.current ? 'bg-primary/5' : ''}`}>
            {tier.current && (
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] h-4">Active</Badge>
            )}
            <CardHeader className="p-4 pb-2">
              <div className="mb-1">{tier.icon}</div>
              <CardTitle className="text-base">{tier.name}</CardTitle>
              <CardDescription className="text-xl font-bold text-foreground">{tier.price}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <ul className="space-y-1 text-xs text-muted-foreground">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
