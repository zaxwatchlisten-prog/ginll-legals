
"use client";

import React from 'react';
import { GinllShell } from '@/components/ginll-shell';
import { ShieldCheck, AlertTriangle, ShieldAlert, Mail } from 'lucide-react';

export default function GuidelinesPage() {
  return (
    <GinllShell title="Anti-Fake Review Guidelines — GinllTrust">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Authenticity Standard</h2>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-600">Official Policy</span>
        </div>
        
        <div className="space-y-8 text-sm leading-relaxed text-slate-600 sm:text-base">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-slate-900">Effective Date: November 24, 2026</p>
            <p>Platform: <a href="https://trust.ginll.com" className="text-indigo-600 hover:underline">GinllTrust</a> — A project of <a href="https://ginll.com" className="text-indigo-600 hover:underline">Ginll</a></p>
            <p>Report Abuse or Disputes: <a href="mailto:support@ginll.com" className="text-indigo-600 font-bold hover:underline">support@ginll.com</a></p>
          </div>

          <section>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">1. Why Authenticity Matters</h3>
            <p>
              GinllTrust helps shoppers, clients, and businesses make confident decisions based on real experiences. Fake, misleading, or manipulated reviews hurt both buyers and honest merchants and are strictly prohibited across all GinllTrust walls, submission pages, and embedded widgets.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">2. Genuine Experience Only</h3>
            <p>
              Every review must come from a real person who actually purchased, used, or interacted with the business, product, or service being reviewed. Do not submit reviews based on rumors, second-hand assumptions, or experiences with a completely different company.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">3. Strictly Prohibited Practices</h3>
            <div className="grid gap-4 mt-4">
              {[
                {
                  title: "Fabricated or Bot Reviews",
                  desc: "Creating fake accounts, using automated scripts or bots, or posting repetitive or AI-generated filler reviews.",
                  icon: <ShieldAlert className="w-4 h-4" />
                },
                {
                  title: "Paid or Coerced Manipulation",
                  desc: "Offering or accepting money, discounts, free items, or favors in exchange for a positive rating or for hiding genuine negative feedback.",
                  icon: <AlertTriangle className="w-4 h-4" />
                },
                {
                  title: "Self-Reviews & Insider Boosting",
                  desc: "Store owners, staff, partners, or agencies posting fake praise on their own or a client's workspace to inflate ratings.",
                  icon: <ShieldCheck className="w-4 h-4" />
                },
                {
                  title: "Competitor Sabotage & Extortion",
                  desc: "Posting false negative reviews to harm a rival business, or threatening negative reviews or ratings to extract money, refunds, or concessions.",
                  icon: <AlertTriangle className="w-4 h-4" />
                },
                {
                  title: "Misleading Media",
                  desc: "Uploading stock photos, stolen images, unrelated screenshots, or manipulated audio or voice clips as proof of a real experience.",
                  icon: <ShieldAlert className="w-4 h-4" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="mt-1 text-rose-500">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">4. Moderation, Screening & Enforcement</h3>
            <p>
              Submissions may go through store moderation, spam or integrity checks, or automated or AI screening before appearing publicly. GinllTrust may reject, hide, or remove reviews that violate these guidelines, restrict features, or suspend accounts and workspaces engaged in review manipulation.
            </p>
          </section>

          <section className="bg-slate-900 rounded-2xl p-6 text-white">
            <h3 className="mb-2 text-base font-bold flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              5. Reporting Suspected Fake Reviews
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              If you spot a fake, spammy, or abusive review on a GinllTrust wall or widget, email <span className="text-indigo-400 font-bold">support@ginll.com</span> with the store or workspace link and details about why you believe it violates these guidelines.
            </p>
            <a 
              href="mailto:support@ginll.com" 
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-2.5 text-xs font-bold transition-all hover:bg-indigo-500 active:scale-95"
            >
              Contact Platform Integrity
            </a>
          </section>
        </div>
      </article>
    </GinllShell>
  );
}
