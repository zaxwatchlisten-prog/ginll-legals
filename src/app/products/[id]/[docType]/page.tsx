
"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { GinllShell } from '@/components/ginll-shell';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Scale, FileText, Info, ChevronLeft, ShieldCheck, Cloud, Sparkles, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCT_DATA: Record<string, any> = {
  "ginlltrust": {
    name: "GinllTrust",
    icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
    about: `About Product — GinllTrust\n\nGinllTrust (trust.ginll.com) is a customer review and social-proof platform built by Ginll (ginll.com) to help online stores, agencies, creators, and local businesses collect genuine customer feedback and display it where buying decisions happen.\n\nWhat GinllTrust Does\n\nCollect Customer Feedback: Merchants get a dedicated review submission link (/review) where real customers can leave star ratings and feedback—including text reviews, customer photos, and voice reviews depending on the workspace plan.\n\nModerate & Screen Submissions: Store owners and agencies can review, approve, reply to, or hide submissions from their dashboard, backed by plan-based moderation tools, AI screening, auto-approval, and sentiment tags.\n\nPublish Review Walls & Embeddable Widgets: Approved feedback can be showcased on a public review wall or embedded into a website via a lightweight script served through cdn.ginll.com—supporting static grids, auto-scroll carousels, custom store branding, and white-label controls on higher tiers.\n\nHow It Fits Into Ginll\n\nGinllTrust operates as a core product of Ginll, connected under a unified Ginll account across ginll.com and trust.ginll.com so users can manage their profile, workspaces, and product access seamlessly.\n\nSupport & Inquiries: support@ginll.com`,
    terms: `Terms & Conditions — Ginll & GinllTrust\nEffective Date: November 24, 2026\n\nWebsite & Ecosystem: Ginll (https://ginll.com), GinllTrust (https://trust.ginll.com), and associated Ginll services\n\nContact Email: support@ginll.com\n\n1. Acceptance of Terms\nBy accessing, registering for, or using Ginll, GinllTrust, or any related websites, dashboards, public review walls, submission pages, or embedded widgets (collectively, the "Services"), you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these Terms, please do not use the Services.\n\n2. Accounts & Ecosystem Access\nYou agree to provide accurate, current, and complete information when creating an account (whether via email/password or Google Sign-In) and to keep your login credentials secure.\n\nYour account may provide access across Ginll services subject to role permissions, workspace settings, and active plan limits.\n\nYou are responsible for all activity occurring under your account and must notify support@ginll.com promptly if you suspect unauthorized access or security issues.\n\n3. Subscriptions, Workspaces & Feature Limits\nWorkspaces, review limits, media uploads (such as photo or voice reviews where available), moderation features, and widget display options depend on the plan or tier assigned to your account.\n\nReaching plan limits or downgrading a plan may restrict creating additional workspaces, adding more reviews or media, or using tier-gated features until your plan or usage is adjusted.\n\nWe may update plan features, limits, or pricing structure from time to time.\n\n4. Reviews, Media & Acceptable Conduct\nAuthentic Reviews Only: Reviews must reflect genuine personal experiences with a business, product, or service. Fake reviews, paid or incentivized manipulation, spam, impersonation, and competitor sabotage are strictly prohibited.\n\nRights & Lawfulness: You represent that any text, image, audio recording, or profile information you submit is lawful, accurate, and does not infringe third-party intellectual property, privacy, or publicity rights.\n\nPlatform Integrity: You agree not to scrape, reverse-engineer, interfere with, overload, or bypass security, caching, or rate controls on any Ginll or GinllTrust domain, wall, or widget.\n\n5. Moderation, Enforcement & Intellectual Property\nStore owners and workspace managers may review, approve, reject, or reply to submissions within their workspace tools. Ginll may hide, reject, or remove content that violates these Terms or our review guidelines, and may suspend or terminate accounts involved in abuse, fraud, or repeated violations.\n\nGinll retains all rights, title, and interest in its software, branding, logos, widgets, and platform design. Users retain ownership of their lawful submitted content while granting Ginll a non-exclusive, worldwide, royalty-free license to host, cache, transmit, and display that content as needed to operate the Services.\n\n6. Disclaimers & Limitation of Liability\nThe Services are provided on an "as is" and "as available" basis without warranties of any kind, express or implied, including guarantees of uninterrupted availability, error-free delivery, or the accuracy of third-party reviews or merchant claims. To the fullest extent permitted by applicable law, Ginll is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, revenue, or goodwill arising out of your use of the Services.\n\n7. Updates & Contact\nWe may update these Terms & Conditions from time to time by posting a revised version with an updated Effective Date. For questions, feedback, or support requests, contact us at support@ginll.com.`,
    privacy: `Effective Date: November 24, 2026\n\nWebsite & Ecosystem: https://ginll.com and associated subdomains/services (including trust.ginll.com and cloud.ginll.com)\n\nContact Email: support@ginll.com\n\n1. Who We Are\nGinll builds software, cloud, and digital trust tools for online stores, agencies, creators, businesses, and everyday users. GinllTrust is a product of Ginll that helps merchants collect and display customer reviews, while other Ginll services provide cloud, workspace, and community features under a unified account experience.\n\n2. Information We Collect\nDepending on how you use our sites and products, we may collect:\n\nAccount & Profile Data: Your name, email address, optional phone number, login provider (such as email/password or Google Sign-In), optional account role/category (such as online store, agency, or business), and workspace settings.\n\nReview & Media Submissions: When someone submits a review through GinllTrust, we collect the reviewer's display name, star rating, review text, optional contact details used for verification, and—where enabled on a workspace plan—uploaded photos or voice recordings.\n\nUsage, Device & Edge Data: Basic technical details such as browser/device type, operating system, referrer URLs, timestamps, IP/security logs, and cache/delivery metrics needed to keep pages, walls, and widgets fast and secure.\n\nNewsletter & Support Communications: Your email address if you subscribe to Ginll updates, and messages or details you share when contacting support@ginll.com or partner channels.\n\n3. How We Use Information\nWe use collected information to:\n\nCreate and manage your Ginll account across Ginll products and verify your email or account access.\n\nDisplay approved reviews, ratings, store replies, and enabled media on public review walls and embedded widgets.\n\nScreen submissions for spam, fraud, fake reviews, and policy violations (including automated or AI moderation where active).\n\nProvide customer support, process plan/workspace limits, send requested updates, and protect our infrastructure against abuse.\n\n4. Google Sign-In & Third-Party Services\nIf you choose Continue with Google, we use authentication and cloud infrastructure—including Firebase / Google Cloud and Cloudflare—to sign you in and run our services.\n\nWe only request the basic account information needed to authenticate you and set up your Ginll profile (such as your name, email, and profile identifier).\n\nWe do not sell your personal data or use Google account information for unauthorized advertising purposes.\n\n5. What Is Public vs. Private\nPublic Information: On GinllTrust walls and widgets, approved reviews—including the reviewer's displayed name, rating, comment, store owner replies, and any approved photo or voice review—are visible to visitors.\n\nPrivate Information: Email addresses or phone numbers entered for account login or review verification are kept private and are not displayed publicly on review cards.\n\n6. Data Sharing, Retention & Security\nService Providers: We share data only with trusted infrastructure, hosting, analytics, moderation, or security providers that help operate Ginll services under appropriate safeguards.\n\nLegal & Safety: We may disclose information when required by law, legal process, or to protect the safety, rights, and integrity of Ginll, our users, or the public.\n\nRetention & Security: We apply reasonable technical and organizational safeguards to protect your data and retain information only as long as needed to provide the service, resolve disputes, or meet legal obligations.\n\n7. Your Rights & Choices\nSubject to applicable law (including Uganda's Data Protection and Privacy Act where applicable), you may request to access, update, or delete your account or review data, object to certain processing, or withdraw consent by contacting support@ginll.com. Store owners can also manage or remove reviews directly inside their workspace dashboard.\n\n8. Changes to This Policy\nWe may update this Privacy Policy from time to time as our products evolve. When we make updates, we will revise the Effective Date at the top of this page.`,
    guidelines: `Anti-Fake Review Guidelines — GinllTrust\nEffective Date: November 24, 2026\n\nPlatform: GinllTrust (https://trust.ginll.com) — A project of Ginll (https://ginll.com)\n\nReport Abuse or Disputes: support@ginll.com\n\n1. Why Authenticity Matters\nGinllTrust helps shoppers, clients, and businesses make confident decisions based on real experiences. Fake, misleading, or manipulated reviews hurt both buyers and honest merchants and are strictly prohibited across all GinllTrust walls, submission pages, and embedded widgets.\n\n2. Genuine Experience Only\nEvery review must come from a real person who actually purchased, used, or interacted with the business, product, or service being reviewed.\n\nDo not submit reviews based on rumors, second-hand assumptions, or experiences with a completely different company.\n\n3. Strictly Prohibited Practices\nFabricated or Bot Reviews: Creating fake accounts, using automated scripts or bots, or posting repetitive or AI-generated filler reviews.\n\nPaid, Coerced, or Incentivized Manipulation: Offering or accepting money, discounts, free items, or favors in exchange for a positive rating or for hiding genuine negative feedback.\n\nSelf-Reviews & Insider Boosting: Store owners, staff, partners, or agencies posting fake praise on their own or a client's workspace to inflate ratings.\n\nCompetitor Sabotage & Extortion: Posting false negative reviews to harm a rival business, or threatening negative reviews or ratings to extract money, refunds, or concessions.\n\nMisleading Media: Uploading stock photos, stolen images, unrelated screenshots, or manipulated audio or voice clips as proof of a real experience.\n\n4. Moderation, Screening & Enforcement\nSubmissions may go through store moderation, spam or integrity checks, or automated or AI screening before appearing publicly.\n\nGinllTrust may reject, hide, or remove reviews that violate these guidelines, restrict features, or suspend accounts and workspaces engaged in review manipulation.\n\n5. Reporting Suspected Fake Reviews\nIf you spot a fake, spammy, or abusive review on a GinllTrust wall or widget, email support@ginll.com with the store or workspace link and details about why you believe it violates these guidelines.`
  },
  "ginll-ai-studio": {
    name: "Ginll Ai Studio",
    icon: <Sparkles className="w-4 h-4 text-indigo-500" />,
    about: "Ginll Ai Studio provides cutting-edge generative AI capabilities, including custom LLM fine-tuning, automated content moderation, and AI-driven insights.",
    terms: "Users agree to comply with ethical AI usage guidelines. Use for generating harmful, deceptive, or malicious content is strictly prohibited. Output rights are subject to plan-specific licenses.",
    privacy: "We prioritize data sovereignty. Customer data used for AI inference is processed in secure, non-persistent environments. We do not use proprietary customer data to train foundation models without consent."
  },
  "ginllcloud": {
    name: "GinllCloud",
    icon: <Cloud className="w-4 h-4 text-blue-500" />,
    about: "GinllCloud provides high-performance, regionally-optimized infrastructure. Built to handle massive data throughput with low latency, it serves as the backbone for regional communication.",
    terms: "Service Level Agreements (SLA) for GinllCloud guarantee 99.9% uptime. Users are prohibited from using infrastructure for malicious traffic, cryptomining, or any activity that degrades shared network performance.",
    privacy: "Data stored on GinllCloud is encrypted at rest and in transit. While Lba LLC manages infrastructure, data ownership remains exclusively with the user."
  }
};

export default function ProductDocPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';
  const docType = typeof params.docType === 'string' ? params.docType : '';
  const product = PRODUCT_DATA[id];

  const allowedDocs = ['privacy', 'terms', 'about', 'guidelines'];

  if (!product || !allowedDocs.includes(docType) || !product[docType]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-slate-50">
        <h1 className="text-xl font-bold mb-2">Document Not Found</h1>
        <Link href={`/products/${id}`} className="text-indigo-600 font-bold hover:underline uppercase text-xs">Return to Product Hub</Link>
      </div>
    );
  }

  const titleMap: Record<string, string> = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About Product',
    guidelines: 'Anti-Fake Guidelines'
  };

  const descMap: Record<string, string> = {
    privacy: 'See what account, review, and technical data we collect, how it is used, and what stays private.',
    terms: 'Read the rules governing Ginll accounts, workspaces, plan limits, content rights, and platform use.',
    about: 'Learn how Ginll products help stores and agencies operate with speed and credibility.',
    guidelines: 'Review our authenticity standards against fake, paid, coerced, or misleading reviews.'
  };

  const iconMap: Record<string, any> = {
    privacy: <Scale className="w-4 h-4" />,
    terms: <FileText className="w-4 h-4" />,
    about: <Info className="w-4 h-4" />,
    guidelines: <ShieldAlert className="w-4 h-4" />
  };

  const navDocs = allowedDocs.filter(d => !!product[d]);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-background selection:bg-indigo-600 selection:text-white text-[11px] md:text-xs">
        
        <Sidebar className="hidden lg:flex border-r border-border w-48">
          <SidebarHeader className="p-2 border-b border-border">
            <Link href={`/products/${id}`} className="flex items-center gap-1.5 mb-2">
              <ChevronLeft className="w-3 h-3 text-muted-foreground" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Product Hub</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-indigo-600 flex items-center justify-center rounded text-white p-1">
                {product.icon}
              </div>
              <h1 className="text-[10px] font-black text-foreground leading-none uppercase">{product.name}</h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="px-2 py-1 text-[8px] font-bold text-indigo-600 uppercase tracking-widest">
                  Documents
                </div>
              </SidebarMenuItem>
              {navDocs.map(type => (
                <SidebarMenuItem key={type}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={docType === type}
                    className={cn("h-7 px-1.5 text-[9px] font-medium", docType === type && "bg-indigo-50 text-indigo-600")}
                  >
                    <Link href={`/products/${id}/${type}`}>
                      {iconMap[type]} <span className="ml-2 uppercase">{titleMap[type]}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-y-auto pb-8 bg-white">
          <div className="max-w-[70ch] mx-auto px-4 pt-8">
            <header className="mb-8 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  {iconMap[docType]}
                </div>
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">
                    {titleMap[docType]}
                  </h1>
                  <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest leading-relaxed max-w-md">
                    {descMap[docType]}
                  </p>
                </div>
              </div>
            </header>

            <article className="prose prose-slate prose-sm max-w-none">
              <div className="pl-4 border-l-2 border-indigo-100 whitespace-pre-wrap">
                <p className="text-slate-600 leading-relaxed text-xs">
                  {product[docType]}
                </p>
              </div>
            </article>

            <footer className="mt-24 pt-6 border-t border-slate-100 text-center">
              <p className="text-[8px] text-slate-400 mb-4 uppercase tracking-tighter font-bold">
                © 2026 Ginll Ecosystem — A product of Lba LLC
              </p>
              <div className="flex justify-center gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                <Link href="/" className="hover:text-indigo-600">Legal Hub</Link>
                <Link href="/products" className="hover:text-indigo-600">Product Index</Link>
                <a href="mailto:support@ginll.com" className="hover:text-indigo-600">Talk to Us</a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
