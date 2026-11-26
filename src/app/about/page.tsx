"use client";

import React from 'react';
import Link from 'next/link';
import { GinllShell } from '@/components/ginll-shell';

export default function AboutPage() {
  return (
    <GinllShell title="About Us — Ginll">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Company Overview</h2>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-bold text-indigo-600">Lba LLC</span>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          <p>
            <strong>Ginll</strong> (<code>ginll.com</code>) is a software and cloud technology company building practical tools that help online stores, creators, agencies, and local businesses operate with speed and credibility.
          </p>
          <p>
            <strong>GinllTrust</strong> is a flagship product of Ginll designed to help merchants collect genuine customer feedback, showcase verified reviews on their websites and public walls, and give shoppers clear proof before they buy.
          </p>
          <div className="my-8 rounded-xl bg-slate-50 p-6">
            <h3 className="mb-4 text-base font-bold text-slate-900">Our Core Principles</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span><strong>Built for Real Commerce:</strong> Clear ratings, verified badges, and straightforward review walls without clutter.</span>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span><strong>Cross-Product Ecosystem:</strong> Connected under a unified Ginll account across <code>ginll.com</code>, <code>trust.ginll.com</code>, and partner cloud services.</span>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                <span><strong>Direct Support:</strong> Reach our team anytime at <a href="mailto:support@ginll.com" className="text-indigo-600 hover:underline">support@ginll.com</a>.</span>
              </li>
            </ul>
          </div>
          <p>
            We believe that transparency shouldn&apos;t be a premium feature. By providing accessible tools for identity verification and authentic feedback, we help bridge the gap between businesses and their customers.
          </p>
        </div>
      </article>
    </GinllShell>
  );
}
