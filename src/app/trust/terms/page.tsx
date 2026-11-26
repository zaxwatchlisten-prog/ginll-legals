
"use client";

import React from 'react';
import { GinllShell } from '@/components/ginll-shell';
import { FileText, ShieldCheck, Scale, Info } from 'lucide-react';

export default function TermsPage() {
  return (
    <GinllShell title="Terms & Conditions — Ginll & GinllTrust">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Service Agreement</h2>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-bold text-indigo-600">Effective: Nov 24, 2026</span>
        </div>
        
        <div className="space-y-6 text-xs leading-relaxed text-slate-600 sm:text-sm whitespace-pre-wrap">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-slate-900">Effective Date: November 24, 2026</p>
            <p>Website & Ecosystem: Ginll (https://ginll.com), GinllTrust (https://trust.ginll.com), and associated Ginll services</p>
            <p>Contact Email: <a href="mailto:support@ginll.com" className="text-indigo-600 hover:underline">support@ginll.com</a></p>
          </div>

          <section>
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">1. Acceptance of Terms</h3>
            <p>
              By accessing, registering for, or using Ginll, GinllTrust, or any related websites, dashboards, public review walls, submission pages, or embedded widgets (collectively, the &quot;Services&quot;), you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these Terms, please do not use the Services.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">2. Accounts & Ecosystem Access</h3>
            <p>
              You agree to provide accurate, current, and complete information when creating an account (whether via email/password or Google Sign-In) and to keep your login credentials secure.
            </p>
            <p>
              Your account may provide access across Ginll services subject to role permissions, workspace settings, and active plan limits.
            </p>
            <p>
              You are responsible for all activity occurring under your account and must notify support@ginll.com promptly if you suspect unauthorized access or security issues.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">3. Subscriptions, Workspaces & Feature Limits</h3>
            <p>
              Workspaces, review limits, media uploads (such as photo or voice reviews where available), moderation features, and widget display options depend on the plan or tier assigned to your account.
            </p>
            <p>
              Reaching plan limits or downgrading a plan may restrict creating additional workspaces, adding more reviews or media, or using tier-gated features until your plan or usage is adjusted.
            </p>
            <p>
              We may update plan features, limits, or pricing structure from time to time.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">4. Reviews, Media & Acceptable Conduct</h3>
            <ul className="space-y-3 pl-4">
              <li className="list-disc"><strong>Authentic Reviews Only:</strong> Reviews must reflect genuine personal experiences with a business, product, or service. Fake reviews, paid or incentivized manipulation, spam, impersonation, and competitor sabotage are strictly prohibited.</li>
              <li className="list-disc"><strong>Rights & Lawfulness:</strong> You represent that any text, image, audio recording, or profile information you submit is lawful, accurate, and does not infringe third-party intellectual property, privacy, or publicity rights.</li>
              <li className="list-disc"><strong>Platform Integrity:</strong> You agree not to scrape, reverse-engineer, interfere with, overload, or bypass security, caching, or rate controls on any Ginll or GinllTrust domain, wall, or widget.</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">5. Moderation, Enforcement & Intellectual Property</h3>
            <p>
              Store owners and workspace managers may review, approve, reject, or reply to submissions within their workspace tools. Ginll may hide, reject, or remove content that violates these Terms or our review guidelines, and may suspend or terminate accounts involved in abuse, fraud, or repeated violations.
            </p>
            <p>
              Ginll retains all rights, title, and interest in its software, branding, logos, widgets, and platform design. Users retain ownership of their lawful submitted content while granting Ginll a non-exclusive, worldwide, royalty-free license to host, cache, transmit, and display that content as needed to operate the Services.
            </p>
          </section>

          <section className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">6. Disclaimers & Limitation of Liability</h3>
            <p className="text-slate-500 italic">
              The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied, including guarantees of uninterrupted availability, error-free delivery, or the accuracy of third-party reviews or merchant claims. To the fullest extent permitted by applicable law, Ginll is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, revenue, or goodwill arising out of your use of the Services.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-bold text-slate-900 uppercase tracking-tight">7. Updates & Contact</h3>
            <p>
              We may update these Terms & Conditions from time to time by posting a revised version with an updated Effective Date. For questions, feedback, or support requests, contact us at <a href="mailto:support@ginll.com" className="text-indigo-600 font-bold hover:underline">support@ginll.com</a>.
            </p>
          </section>
        </div>
      </article>
    </GinllShell>
  );
}
