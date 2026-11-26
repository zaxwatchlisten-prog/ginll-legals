
"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface GinllShellProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showHero?: boolean;
}

const NAV_ITEMS = [
  { href: '/', label: 'Legal Hub' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Ginll' },
  { href: '/trust/privacypolicy', label: 'Privacy Policy' },
  { href: '/trust/terms', label: 'Terms' },
];

export function GinllShell({ children, title, subtitle, showHero = true }: GinllShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-indigo-600 selection:text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm transition-transform group-hover:scale-110">
              <Check className="h-3 w-3 stroke-[4px]" />
            </div>
            <span className="text-base font-black tracking-tight text-slate-900">Ginll legals</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest transition-colors",
                    pathname === item.href ? "text-indigo-600" : "text-slate-400 hover:text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link 
              href="https://ginll.com"
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold text-slate-900 transition-colors hover:bg-slate-50 uppercase tracking-tighter"
            >
              Main Site
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 flex-1">
        {showHero && (
          <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm animate-slide-up">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                <Check className="h-2.5 w-2.5" />
                Verified Documentation
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-semibold text-slate-500">
                Updated Nov 2026
              </div>
            </div>
            <h1 className="mb-1 text-2xl font-black tracking-tight text-slate-900">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs leading-relaxed text-slate-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </section>
        )}

        <div className="animate-slide-up">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 mt-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Link href="/about" className="hover:text-indigo-600 transition-colors">About Ginll</Link>
            <Link href="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
            <Link href="/trust/privacypolicy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link>
            <Link href="/trust/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
            <Link href="/trust/guidelines" className="hover:text-indigo-600 transition-colors">Anti-Fake Guidelines</Link>
            <a href="mailto:support@ginll.com" className="hover:text-indigo-600 transition-colors">Talk to Us</a>
          </div>
          <p className="text-[9px] font-medium text-slate-400 uppercase tracking-tighter">
            © 2026 Ginll Ecosystem — Built for speed and credibility.
          </p>
        </div>
      </footer>
    </div>
  );
}
