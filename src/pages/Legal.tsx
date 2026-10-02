import Seo from "@/components/Seo";

const content = {
  privacy: {
    title: "Privacy",
    intro: "Last updated: 28 September 2026.",
    sections: [
      {
        h: "What I collect",
        p: "If you contact me through this site, I receive your name, email address, and whatever you choose to tell me. If you book a session, I receive the details you give the booking provider. That's the list.",
      },
      {
        h: "What I don't do",
        p: "I don't sell data, share it with advertisers, or send marketing you didn't ask for. I don't collect health information through this website — please don't send medical details by email.",
      },
      {
        h: "Third parties",
        p: "This site links to external services — YouTube, Calendly, the blog, and the assessment and application forms — each with their own privacy policies. Analytics, if enabled, is privacy-respecting and cookieless where possible.",
      },
      {
        h: "Your rights",
        p: "You can ask me what I hold about you, or ask me to delete it, at any time: hello@paulabram.io. I will answer personally.",
      },
    ],
  },
  terms: {
    title: "Terms",
    intro: "Last updated: 28 September 2026.",
    sections: [
      {
        h: "The work",
        p: "PaulAbram offers coaching, teaching and bodywork built around Fascia Manoeuvres and nervous system regulation. This is not medicine, physiotherapy, or psychotherapy, and it doesn't replace clinical care. Where your situation needs a clinician, I'll say so.",
      },
      {
        h: "Sessions and subscriptions",
        p: "Paid tiers are billed monthly. You can cancel a subscription at any time and it stops at the end of the current billing period. Missed sessions: with 24 hours' notice we rearrange; without notice the session is spent.",
      },
      {
        h: "Hands-on work",
        p: "In-person hands-on sessions are by application. I take on the people I can genuinely help, and I reserve the right to decline or refer out.",
      },
      {
        h: "Content",
        p: "The daily live classes and written material are for general education. They are not a substitute for medical advice, diagnosis, or treatment.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    intro: "",
    sections: [
      {
        h: "Not medical advice",
        p: "Nothing on this site — written, filmed, or said in live classes — constitutes medical advice, diagnosis, or treatment. Always consult a qualified health professional about medical conditions.",
      },
      {
        h: "Your body, your call",
        p: "Movement and bodywork practices carry ordinary physical risk. Go at your own pace, listen to your body, and stop if something doesn't feel right.",
      },
      {
        h: "If you're in crisis",
        p: "This work is not crisis support. If you need urgent help: Samaritans 116 123 (UK — free, 24 hours). In an emergency, call 999.",
      },
    ],
  },
};

function LegalPage({ page }: { page: keyof typeof content }) {
  const c = content[page];
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Seo title={c.title} />
      <main className="mx-auto max-w-[860px] px-5 py-16 md:py-24">
        <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
          PaulAbram
        </p>
        <h1 className="stretch-wide font-display text-[clamp(1.9rem,4vw,2.75rem)] font-black uppercase leading-tight">
          {c.title}
        </h1>
        {c.intro && (
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-smoke">
            {c.intro}
          </p>
        )}
        <div className="mt-10 border-t border-ink/15">
          {c.sections.map((s) => (
            <section key={s.h} className="border-b border-ink/15 py-8">
              <h2 className="stretch-semi font-display text-lg font-extrabold uppercase">
                {s.h}
              </h2>
              <p className="mt-3 max-w-[62ch] text-base leading-relaxed text-ink/80">
                {s.p}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-8">
          <a
            href="/"
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay"
          >
            ← Back to the site
          </a>
        </p>
      </main>
    </div>
  );
}

export const PrivacyPage = () => <LegalPage page="privacy" />;
export const TermsPage = () => <LegalPage page="terms" />;
export const DisclaimerPage = () => <LegalPage page="disclaimer" />;
