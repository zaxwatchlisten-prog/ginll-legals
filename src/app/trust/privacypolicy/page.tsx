
"use client";

import React from 'react';
import { GinllShell } from '@/components/ginll-shell';

export default function PrivacyPolicyPage() {
  return (
    <GinllShell title="Privacy Policy — GinllTrust">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Data & Privacy</h2>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-600">Official Policy</span>
        </div>
        <div className="space-y-8 text-sm leading-relaxed text-slate-600 sm:text-base whitespace-pre-wrap">
          <p className="font-bold text-slate-900">Effective Date: November 24, 2026</p>
          <p>Website & Ecosystem: <a href="https://ginll.com" className="text-indigo-600 hover:underline">https://ginll.com</a> and associated subdomains/services (including trust.ginll.com and cloud.ginll.com)</p>
          <p>Contact Email: <a href="mailto:support@ginll.com" className="text-indigo-600 hover:underline">support@ginll.com</a></p>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">1. Who We Are</h3>
            <p>
              Ginll builds software, cloud, and digital trust tools for online stores, agencies, creators, businesses, and everyday users. GinllTrust is a product of Ginll that helps merchants collect and display customer reviews, while other Ginll services provide cloud, workspace, and community features under a unified account experience.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">2. Information We Collect</h3>
            <p>Depending on how you use our sites and products, we may collect:</p>
            <ul className="space-y-3 pl-4 mt-2">
              <li className="list-disc"><strong>Account & Profile Data:</strong> Your name, email address, optional phone number, login provider (such as email/password or Google Sign-In), optional account role/category (such as online store, agency, or business), and workspace settings.</li>
              <li className="list-disc"><strong>Review & Media Submissions:</strong> When someone submits a review through GinllTrust, we collect the reviewer&apos;s display name, star rating, review text, optional contact details used for verification, and—where enabled on a workspace plan—uploaded photos or voice recordings.</li>
              <li className="list-disc"><strong>Usage, Device & Edge Data:</strong> Basic technical details such as browser/device type, operating system, referrer URLs, timestamps, IP/security logs, and cache/delivery metrics needed to keep pages, walls, and widgets fast and secure.</li>
              <li className="list-disc"><strong>Newsletter & Support Communications:</strong> Your email address if you subscribe to Ginll updates, and messages or details you share when contacting support@ginll.com or partner channels.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">3. How We Use Information</h3>
            <p>We use collected information to:</p>
            <ul className="space-y-3 pl-4 mt-2">
              <li className="list-disc">Create and manage your Ginll account across Ginll products and verify your email or account access.</li>
              <li className="list-disc">Display approved reviews, ratings, store replies, and enabled media on public review walls and embedded widgets.</li>
              <li className="list-disc">Screen submissions for spam, fraud, fake reviews, and policy violations (including automated or AI moderation where active).</li>
              <li className="list-disc">Provide customer support, process plan/workspace limits, send requested updates, and protect our infrastructure against abuse.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">4. Google Sign-In & Third-Party Services</h3>
            <p>
              If you choose Continue with Google, we use authentication and cloud infrastructure—including Firebase / Google Cloud and Cloudflare—to sign you in and run our services.
            </p>
            <p className="mt-2">
              We only request the basic account information needed to authenticate you and set up your Ginll profile (such as your name, email, and profile identifier). We do not sell your personal data or use Google account information for unauthorized advertising purposes.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">5. What Is Public vs. Private</h3>
            <p>
              <strong>Public Information:</strong> On GinllTrust walls and widgets, approved reviews—including the reviewer&apos;s displayed name, rating, comment, store owner replies, and any approved photo or voice review—are visible to visitors.
            </p>
            <p className="mt-2">
              <strong>Private Information:</strong> Email addresses or phone numbers entered for account login or review verification are kept private and are not displayed publicly on review cards.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">6. Data Sharing, Retention & Security</h3>
            <ul className="space-y-3 pl-4 mt-2">
              <li className="list-disc"><strong>Service Providers:</strong> We share data only with trusted infrastructure, hosting, analytics, moderation, or security providers that help operate Ginll services under appropriate safeguards.</li>
              <li className="list-disc"><strong>Legal & Safety:</strong> We may disclose information when required by law, legal process, or to protect the safety, rights, and integrity of Ginll, our users, or the public.</li>
              <li className="list-disc"><strong>Retention & Security:</strong> We apply reasonable technical and organizational safeguards to protect your data and retain information only as long as needed to provide the service, resolve disputes, or meet legal obligations.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">7. Your Rights & Choices</h3>
            <p>
              Subject to applicable law (including Uganda&apos;s Data Protection and Privacy Act where applicable), you may request to access, update, or delete your account or review data, object to certain processing, or withdraw consent by contacting <a href="mailto:support@ginll.com" className="font-bold text-indigo-600 hover:underline">support@ginll.com</a>. Store owners can also manage or remove reviews directly inside their workspace dashboard.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-base font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">8. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time as our products evolve. When we make updates, we will revise the Effective Date at the top of this page.
            </p>
          </div>
        </div>
      </article>
    </GinllShell>
  );
}
