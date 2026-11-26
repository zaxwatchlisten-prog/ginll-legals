
"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { GinllShell } from '@/components/ginll-shell';
import { ShieldCheck, Cloud, Sparkles, Scale, FileText, Info, ChevronRight, ShieldAlert } from 'lucide-react';

const PRODUCT_DATA: Record<string, any> = {
  "ginlltrust": {
    name: "GinllTrust",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    tagline: "Security, Compliance & Identity",
    docs: [
      { id: 'privacy', name: 'Privacy Policy', icon: <Scale className="w-4 h-4" />, description: 'See what account, review, and technical data we collect, how it is used, and what stays private.' },
      { id: 'terms', name: 'Terms & Conditions', icon: <FileText className="w-4 h-4" />, description: 'Read the rules governing Ginll accounts, workspaces, plan limits, content rights, and platform use.' },
      { id: 'guidelines', name: 'Anti-Fake Guidelines', icon: <ShieldAlert className="w-4 h-4" />, description: 'Review our authenticity standards against fake, paid, coerced, or misleading reviews.' },
      { id: 'about', name: 'About Product', icon: <Info className="w-4 h-4" />, description: 'Learn how GinllTrust helps stores and agencies collect, moderate, and display verified customer reviews.' }
    ]
  },
  "ginll-ai-studio": {
    name: "Ginll Ai Studio",
    icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
    tagline: "GenAI & LLM Services",
    docs: [
      { id: 'privacy', name: 'Privacy Policy', icon: <Scale className="w-4 h-4" />, description: 'See what account and inference data we collect and how we prioritize data sovereignty.' },
      { id: 'terms', name: 'Terms & Conditions', icon: <FileText className="w-4 h-4" />, description: 'Read the rules governing AI usage, ethical standards, and licensing agreements.' },
      { id: 'about', name: 'About Product', icon: <Info className="w-4 h-4" />, description: 'Explore how Ginll Ai Studio provides moderation and LLM capabilities for modern business.' }
    ]
  },
  "ginllcloud": {
    name: "GinllCloud",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    tagline: "Infrastructure & Hosting",
    docs: [
      { id: 'privacy', name: 'Privacy Policy', icon: <Scale className="w-4 h-4" />, description: 'Understand data ownership, encryption at rest, and infrastructure privacy rules.' },
      { id: 'terms', name: 'Terms & Conditions', icon: <FileText className="w-4 h-4" />, description: 'View SLA guarantees, uptime commitments, and network usage rules.' },
      { id: 'about', name: 'About Product', icon: <Info className="w-4 h-4" />, description: 'Technical overview of regional hosting and high-performance delivery nodes.' }
    ]
  }
};

export default function ProductHubPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const product = PRODUCT_DATA[id];

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-slate-50">
        <h1 className="text-xl font-bold mb-2">Product Not Found</h1>
        <Link href="/" className="text-indigo-600 font-bold hover:underline uppercase text-xs">Return to Hub</Link>
      </div>
    );
  }

  return (
    <GinllShell title={`${product.name} Documentation`} subtitle={product.tagline}>
      <div className="max-w-4xl mx-auto py-4">
        <div className="mb-6 flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="p-3 bg-slate-50 rounded-xl">
            {product.icon}
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">{product.name}</h1>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{product.tagline}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {product.docs.map((doc: any) => (
            <Link 
              key={doc.id} 
              href={`/products/${id}/${doc.id}`}
              className="group flex flex-col p-4 bg-white border border-slate-200 rounded-xl shadow-sm transition-all hover:border-indigo-600 hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                  {doc.icon}
                </div>
                <ChevronRight className="w-3 h-3 text-slate-300 transition-transform group-hover:translate-x-0.5" />
              </div>
              <h2 className="text-xs font-black text-slate-900 mb-1 uppercase tracking-tight">{doc.name}</h2>
              <p className="text-[9px] text-slate-500 leading-relaxed">{doc.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[10px] font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest">
            ← Back to Legal Hub
          </Link>
        </div>
      </div>
    </GinllShell>
  );
}
