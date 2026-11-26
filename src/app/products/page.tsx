
"use client";

import React from 'react';
import Link from 'next/link';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Package, ChevronLeft, ShieldCheck, Cloud, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GINLL_PRODUCTS = [
  {
    id: "ginlltrust",
    name: "GinllTrust",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
    tagline: "Security, Compliance & Identity",
    description: "The parent software and cloud ecosystem behind GinllTrust review tools. Collect, moderate, and display verified customer feedback.",
    features: ["Biometric Identity", "Verified Review Walls", "AI Moderation"]
  },
  {
    id: "ginll-ai-studio",
    name: "Ginll Ai Studio",
    icon: <Sparkles className="w-4 h-4 text-indigo-500" />,
    tagline: "GenAI & LLM Services",
    description: "Advanced generative AI tools for modern businesses. LLM fine-tuning, automated content moderation, and business insights.",
    features: ["Custom LLM Models", "Automated Moderation", "AI Business Insights"]
  },
  {
    id: "ginllcloud",
    name: "GinllCloud",
    icon: <Cloud className="w-4 h-4 text-blue-500" />,
    tagline: "Infrastructure & Hosting",
    description: "High-performance cloud infrastructure optimized for regional delivery. Localized hosting with elastic scaling.",
    features: ["Regional Hosting", "Elastic Scaling", "Unified Storage API"]
  }
];

export default function GinllProductsPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background text-[11px] md:text-xs">
        
        <Sidebar className="hidden lg:flex border-r border-border w-48">
          <SidebarHeader className="p-2 border-b border-border">
            <Link href="/" className="flex items-center gap-1.5 mb-2">
              <ChevronLeft className="w-3 h-3 text-muted-foreground" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Legal Hub</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-indigo-600 flex items-center justify-center rounded">
                <Package className="text-white w-3 h-3" />
              </div>
              <h1 className="text-[10px] font-bold text-foreground leading-none uppercase">Ecosystem</h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="px-2 py-1 text-[8px] font-bold text-indigo-600 uppercase tracking-widest">
                  Directory
                </div>
              </SidebarMenuItem>
              {GINLL_PRODUCTS.map(p => (
                <SidebarMenuItem key={p.id}>
                  <SidebarMenuButton asChild className="h-7 px-1.5 text-[9px]">
                    <Link href={`/products/${p.id}`}>
                      {p.icon} <span className="ml-1.5">{p.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-y-auto pb-8">
          <div className="max-w-[70ch] mx-auto px-4 pt-4">
            <header className="mb-4 border-b border-border pb-2">
              <h1 className="text-2xl font-black mb-1 text-slate-900 tracking-tight">
                Ginll Products
              </h1>
              <p className="text-[10px] text-muted-foreground leading-tight uppercase tracking-wide">
                Foundational technologies powering the Ginll digital ecosystem.
              </p>
            </header>

            <div className="grid grid-cols-1 gap-3">
              {GINLL_PRODUCTS.map((product) => (
                <Card key={product.id} className="bg-white border-slate-200 hover:border-indigo-600 transition-all shadow-sm">
                  <CardHeader className="p-3 pb-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 bg-slate-50 rounded-lg">
                        {product.icon}
                      </div>
                      <div>
                        <CardTitle className="text-sm font-bold leading-none">{product.name}</CardTitle>
                        <CardDescription className="text-[9px] font-medium text-indigo-600 mt-0.5 uppercase tracking-tighter">
                          {product.tagline}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <p className="text-[10px] text-slate-600 leading-normal mb-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map(feature => (
                        <div key={feature} className="px-1.5 py-0.5 bg-slate-100 rounded text-[8px] font-bold text-slate-500 border border-slate-200 uppercase">
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Button size="sm" className="h-6 text-[9px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-widest px-4 gap-1.5" asChild>
                        <Link href={`/products/${product.id}`}>
                          Explore Product <ChevronRight className="w-2.5 h-2.5" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <footer className="mt-8 pt-4 border-t border-slate-100 text-center">
              <p className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">
                © 2026 Ginll Ecosystem — Built for speed and credibility.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
