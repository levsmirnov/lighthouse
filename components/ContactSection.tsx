"use client";
import { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F8FAFF]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-slate-950 mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Drop us a message
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column — contact info */}
          <div className="flex-1 space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="text-blue-600"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-950 mb-1">Email us</p>
                <a
                  href="mailto:team@lighthouselab.eu"
                  className="text-blue-600 hover:underline"
                >
                  team@lighthouselab.eu
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="text-blue-600"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-950 mb-1">Location</p>
                <p className="text-slate-500">
                  Available worldwide — Remote-first studio
                </p>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white mt-4">
              <svg
                className="mb-4 opacity-60"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl font-medium leading-relaxed italic">
                Great digital products start with a great conversation.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <svg
                    className="text-green-600"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500">
                  Thanks! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-950 placeholder-slate-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-950 placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-950 placeholder-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-slate-950 placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Something went wrong. Please email us directly at{" "}
                    <a
                      href="mailto:team@lighthouselab.eu"
                      className="underline"
                    >
                      team@lighthouselab.eu
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 btn-gradient disabled:opacity-60 text-white font-semibold rounded-full"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
