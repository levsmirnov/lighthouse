import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Spendy Wendy | Lighthouse Digi Lab",
  description: "Privacy Policy for Spendy Wendy iOS app by Lighthouse Digi Lab.",
};

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-slate-500 leading-relaxed mb-3">
          Spendy Wendy collects the following information to provide our services:
        </p>
        <ul className="space-y-2">
          {[
            "Email address (for account creation and authentication)",
            "Display name and avatar emoji (set by you)",
            "Financial data you enter: budgets, transactions, categories, and wallets",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-slate-500">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "2",
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-2">
        {[
          "To provide and maintain the app's functionality",
          "To sync your data across devices",
          "To allow shared budgets with other users you invite",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-slate-500">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: "3",
    title: "Data Storage",
    content: (
      <p className="text-slate-500 leading-relaxed">
        Your data is stored securely using{" "}
        <span className="font-medium text-slate-700">Google Firebase</span> (Firestore and
        Authentication). Firebase complies with GDPR and other privacy regulations.
      </p>
    ),
  },
  {
    number: "4",
    title: "Data Sharing",
    content: (
      <p className="text-slate-500 leading-relaxed">
        We do not sell or share your personal data with third parties. Budget data is only
        shared with members you explicitly invite using an invite code.
      </p>
    ),
  },
  {
    number: "5",
    title: "Google Sign-In",
    content: (
      <p className="text-slate-500 leading-relaxed">
        If you sign in with Google, we receive your email address and name from Google. We
        do not access any other Google account data.
      </p>
    ),
  },
  {
    number: "6",
    title: "Data Deletion",
    content: (
      <p className="text-slate-500 leading-relaxed">
        You may delete your account and all associated data by contacting us at:{" "}
        <a
          href="mailto:team@lighthouselab.eu"
          className="text-blue-600 hover:underline font-medium"
        >
          team@lighthouselab.eu
        </a>
      </p>
    ),
  },
  {
    number: "7",
    title: "Contact",
    content: (
      <p className="text-slate-500 leading-relaxed">
        If you have any questions about this Privacy Policy, contact us at:{" "}
        <a
          href="mailto:team@lighthouselab.eu"
          className="text-blue-600 hover:underline font-medium"
        >
          team@lighthouselab.eu
        </a>
      </p>
    ),
  },
];

export default function SpendyWendyPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/projects/spendy-wendy"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 text-sm font-medium mb-10 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6" />
          </svg>
          Back to Spendy Wendy
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-3">
          <img
            src="/images/Frame 14.png"
            alt="Spendy Wendy"
            className="w-12 h-12 rounded-2xl shadow-sm"
          />
          <div>
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest">
              Spendy Wendy
            </p>
            <h1 className="text-2xl font-bold text-slate-950">Privacy Policy</h1>
          </div>
        </div>
        <p className="text-slate-400 text-sm mb-12">Last updated: June 3, 2026</p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.number} className="flex gap-5">
              {/* Number */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">{section.number}</span>
              </div>
              {/* Content */}
              <div className="flex-1 pt-1">
                <h2 className="text-base font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Lighthouse Digi Lab Oy · 3238184-8
          </p>
        </div>
      </div>
    </div>
  );
}
