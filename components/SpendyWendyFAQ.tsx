"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  // 🔐 Account & Sign In
  {
    category: "Account & Sign In",
    question: "How do I create an account?",
    answer:
      'Tap "Sign Up" on the login screen, enter your email and password — or sign in with Google or Apple in one tap.',
  },
  {
    category: "Account & Sign In",
    question: "I forgot my password. What should I do?",
    answer:
      'Tap "Forgot Password?" on the login screen, enter your email address and we\'ll send you a reset link.',
  },
  {
    category: "Account & Sign In",
    question: "Can I use the app on multiple devices?",
    answer:
      "Yes. Sign in with the same account and all your data will sync across devices in real time via the cloud.",
  },
  // 💰 Budgets & Categories
  {
    category: "Budgets & Categories",
    question: "What is a budget in the app?",
    answer:
      "A budget is a workspace containing your transactions, wallets, and categories. You can have multiple budgets — for example, a personal one and a family one.",
  },
  {
    category: "Budgets & Categories",
    question: "How do I invite a partner or family member to a budget?",
    answer:
      'Go to budget settings → "Invite member". Share the 6-digit code or send a link. The other person enters the code under "Join another budget".',
  },
  {
    category: "Budgets & Categories",
    question: "How do I create custom categories?",
    answer:
      "Go to Tools → Categories. From there you can add, edit, and delete categories and category groups.",
  },
  {
    category: "Budgets & Categories",
    question: 'What does "Load default categories" mean?',
    answer:
      "It's a quick-start option that automatically creates a set of 12 groups and 57 categories covering housing, food, transport, and more.",
  },
  // 💳 Wallets & Transactions
  {
    category: "Wallets & Transactions",
    question: "How many wallets can I add?",
    answer:
      "Unlimited. Create wallets for cash, bank cards, savings accounts, or any other accounts you manage.",
  },
  {
    category: "Wallets & Transactions",
    question: "How do I transfer money between wallets?",
    answer:
      "On the main screen or in the Wallets section, tap the ⇄ button — select the wallets and the amount.",
  },
  {
    category: "Wallets & Transactions",
    question: "Can I edit or delete a transaction?",
    answer:
      "Yes. Tap any transaction in the list and the edit screen will open.",
  },
  // 📊 Export & Data
  {
    category: "Export & Data",
    question: "How do I export transactions to Excel?",
    answer:
      "Go to Tools → Export Data → choose a date range → tap Export CSV. The file opens in Excel, Numbers, or Google Sheets.",
  },
  {
    category: "Export & Data",
    question: "Is my data safe?",
    answer:
      "All data is stored in Firebase (Google Cloud) with encryption. We never share it with third parties.",
  },
];

const VISIBLE_BY_DEFAULT = 3;

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-slate-900 font-semibold text-base group-hover:text-blue-600 transition-colors">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-200 ${
            open ? "border-blue-600 text-blue-600 rotate-45" : "group-hover:border-blue-400"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-500 text-base leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function SpendyWendyFAQ() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? faqs : faqs.slice(0, VISIBLE_BY_DEFAULT);

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-slate-950">FAQ</h2>
        <span className="px-2.5 py-0.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
          {faqs.length} questions
        </span>
      </div>

      {/* FAQ list */}
      <div className="bg-[#F8FAFF] rounded-3xl border border-slate-200 px-8">
        {visible.map((item, i) => (
          <FAQRow key={i} item={item} />
        ))}
      </div>

      {/* Show all / collapse */}
      {!showAll ? (
        <button
          onClick={() => setShowAll(true)}
          className="mt-5 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group"
        >
          <span>Show all {faqs.length} questions</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-y-0.5 transition-transform"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setShowAll(false)}
          className="mt-5 flex items-center gap-2 text-slate-400 hover:text-slate-600 font-semibold text-sm transition-colors group"
        >
          <span>Collapse</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-y-0.5 transition-transform"
          >
            <polyline points="6,15 12,9 18,15" />
          </svg>
        </button>
      )}
    </div>
  );
}
