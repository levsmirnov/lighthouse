"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const SUBJECTS = [
  "Account & Sign In",
  "Budgets & Categories",
  "Wallets & Transactions",
  "Export & Data",
  "Bug Report",
  "Feature Request",
  "Other",
];

export default function SpendyWendySupportForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xgvkwpja", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all";

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-950 mb-1">Contact Support</h2>
        <p className="text-slate-500 text-sm">
          Have a question or ran into an issue? We&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="bg-[#F8FAFF] rounded-3xl border border-slate-200 p-8 md:p-10">
        {status === "success" ? (
          /* Success state */
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-950">Message sent!</h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Thanks for reaching out. We&apos;ll reply to your email within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Mark"
                  value={form.name}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="mark@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Topic
              </label>
              <select
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Select a topic…
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Describe your issue or question in detail…"
                value={form.message}
                onChange={handleChange}
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-full text-sm transition-colors flex items-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <svg
                    className="animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
