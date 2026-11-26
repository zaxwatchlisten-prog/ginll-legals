
"use client";

import React from 'react';
import Link from 'next/link';
import { GinllShell } from '@/components/ginll-shell';
import { ShieldCheck, Cloud, Sparkles, ChevronRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'ginlltrust',
    name: 'GinllTrust',
    description: 'Security, Compliance & Identity. Tools to collect, moderate, and display verified customer reviews.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    path: '/products/ginlltrust'
  },
  {
    id: 'ginll-ai-studio',
    name: 'Ginll Ai Studio',
    description: 'GenAI & LLM Services. Advanced moderation, fine-tuning, and business insight infrastructure.',
    icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
    path: '/products/ginll-ai-studio'
  },
  {
    id: 'ginllcloud',
    name: 'GinllCloud',
    description: 'Infrastructure & Hosting. Regional cloud solutions and high performance regional delivery.',
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    path: '/products/ginllcloud'
  }
];

export default function LandingPage() {
  return (
    <GinllShell title="Ginll Legals" showHero={false}>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Select a Product</h1>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Access specific legal documentation, privacy policies, and terms of service for the Ginll ecosystem products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <Link 
              key={product.id} 
              href={product.path}
              className="group relative flex flex-col p-5 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all hover:border-indigo-600 hover:shadow-md"
            >
              <div className="mb-3">
                {product.icon}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h2>
              <p className="text-xs text-slate-500 mb-4 flex-1">{product.description}</p>
              <div className="flex items-center text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                Explore Product <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/about" className="hover:text-indigo-600">About Ginll</Link>
            <Link href="/trust/privacypolicy" className="hover:text-indigo-600">Privacy Policy</Link>
            <Link href="/trust/terms" className="hover:text-indigo-600">Terms & Conditions</Link>
            <a href="mailto:support@ginll.com" className="hover:text-indigo-600">Contact Support</a>
          </div>
        </div>
      </div>
    </GinllShell>
  );
}
