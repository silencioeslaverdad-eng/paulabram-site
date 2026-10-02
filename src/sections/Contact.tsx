import { useState } from "react";

import { submitViaMailto } from "@/config";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-8 font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
              Start here
            </p>
            <h2 className="stretch-wide font-display font-black uppercase leading-[0.95]">
              <span className="block text-[clamp(1.9rem,3.6vw,2.25rem)]">Ready</span>
              <span className="block text-[clamp(1.2rem,2vw,1.5rem)] font-bold text-ink/60">
                when you are.
              </span>
            </h2>
            <p className="mt-8 max-w-[42ch] text-base leading-relaxed text-ink/80 md:text-lg">
              No sales call, no programme pitch. One conversation to see
              whether this is the right work for you — and if it isn't, I'll
              tell you that too.
            </p>
            <a
              href="mailto:hello@paulabram.io"
              className="stretch-semi mt-8 inline-block font-display text-[clamp(1.15rem,2vw,1.5rem)] font-extrabold underline decoration-clay decoration-[3px] underline-offset-8 transition-colors hover:text-clay"
            >
              hello@paulabram.io
            </a>
            <p className="mt-4">
              <a
                href="https://calendly.com/paulabram/20min"
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay"
              >
                Or grab 20 minutes straight in the diary →
              </a>
            </p>
          </div>

          <div className="md:col-span-6">
            <form
              className="border border-ink/20 p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                submitViaMailto({
                  name: String(fd.get("name") ?? ""),
                  email: String(fd.get("email") ?? ""),
                  message: String(fd.get("message") ?? ""),
                });
                setSent(true);
              }}
            >
              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border-b border-ink/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-clay"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="border-b border-ink/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-clay"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                    What's going on for you? — optional
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="resize-y border-b border-ink/30 bg-transparent py-2 text-base outline-none transition-colors focus:border-clay"
                  />
                </label>
                <button
                  type="submit"
                  className="stretch-semi mt-2 bg-ink px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-clay"
                >
                  Send
                </button>
                {sent && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay">
                    Your email app should have opened with this ready to send —
                    hit send and it's with me.
                  </p>
                )}
                <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-smoke">
                  Three fields, nothing more. I read everything myself.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
