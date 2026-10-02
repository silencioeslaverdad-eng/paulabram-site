import Seo from "@/components/Seo";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const START = new Date("2026-06-16T07:00:00+01:00").getTime();
const day = Math.max(1, Math.floor((Date.now() - START) / 86400000) + 1);

/* CTA styles: outline for entry tiers, solid ink for flagship, quiet for intensive */
const ctaOutline =
  "inline-block border border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-paper";
const ctaSolid =
  "inline-block bg-paper px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember";

const free = {
  name: "The Daily Practice",
  price: "Free",
  tagline: "Live every morning at 7:00 a.m. BST. Every day. No catch.",
  points: ["Daily live class on YouTube", "Sunday Q&A — ask anything", `Day ${day} of 365, and counting`],
  cta: "Watch on YouTube",
  href: "https://www.youtube.com/@TheGroundedMan-TV",
  style: ctaOutline,
};

const tiers = [
  {
    n: "01",
    name: "The Programme",
    price: "£39",
    per: "/month",
    tagline: "The daily class, organised into a curriculum.",
    who: "For people who want structure and company while they learn the movements.",
    points: [
      "8 hours of live group sessions every month",
      "Full replay library — every class, ever",
      "The community — people doing the same work",
    ],
    cta: "Join the Programme",
    href: "mailto:hello@paulabram.io?subject=The%20Programme%20(£39/mo)",
    style: ctaOutline,
  },
  {
    n: "02",
    name: "The Coaching",
    price: "£149",
    per: "/month",
    tagline: "Your own hour every week, plus the Deep Dive.",
    who: "For people who want personal attention, at their own pace.",
    points: [
      "4 × 60-minute 1:1 sessions each month",
      "Monthly two-hour group Deep Dive",
      "Replay library",
    ],
    cta: "Start the Coaching",
    href: "mailto:hello@paulabram.io?subject=The%20Coaching%20(£149/mo)",
    style: ctaOutline,
  },
  {
    n: "03",
    name: "The Training",
    price: "£392",
    per: "/month",
    tagline: "Personal training — for your fascia.",
    who: "For people who've tried physio, osteopathy, massage — and want a system, not another session.",
    points: [
      "8 × 1:1 sessions a month — twice a week, the retraining rhythm",
      "Week 1: full fascia assessment — where your tension actually lives",
      "Written progression plan, reviewed every 4 weeks",
      "Weekly check-in between sessions",
    ],
    predictability:
      "Week 1: assessment. Weeks 1–4: release and reinforce, twice a week. Week 4: your plan reviewed and progressed. You always know where you are and what happens next.",
    scarcity: "Four places open each month.",
    cta: "Apply",
    href: "https://paulabram.io/apply/",
    style: ctaSolid,
    featured: true,
  },
  {
    n: "04",
    name: "The Intensive",
    price: "£588",
    per: "/month",
    tagline: "The full system, accelerated.",
    who: "For acute situations — severe pain, recovery, a nervous system in crisis. By application only.",
    points: [
      "12 sessions a month — or 8 sessions plus full coaching between them",
      "Everything in The Training",
    ],
    cta: "Enquire",
    href: "mailto:hello@paulabram.io?subject=The%20Intensive%20(£588/mo)",
    style: ctaOutline,
  },
  {
    n: "05",
    name: "The Hands-On",
    price: "£75",
    per: "/session",
    tagline: "Fascia Manoeuvres, hands-on.",
    who: "For people who want the work done with them, not just taught to them. In person, one to one.",
    points: [
      "Direct hands-on Fascia Manoeuvres work — my hands, your fascia",
      "90-minute sessions",
      "In person — Newark-on-Trent, and by arrangement",
      "By application — I take on the people I can genuinely help",
    ],
    scarcity: "Limited by geography and diary.",
    cta: "Apply",
    href: "https://paulabram.io/apply/",
    style: ctaOutline,
  },
];

function TierBlock({ t }: { t: (typeof tiers)[number] }) {
  return (
    <article
      className={`grid gap-6 border-b border-ink/15 px-5 py-12 md:grid-cols-12 md:gap-8 md:px-10 md:py-16 ${
        t.featured ? "bg-ink text-paper" : ""
      }`}
    >
      <div className="md:col-span-3">
        <p
          className={`font-mono text-[12px] uppercase tracking-[0.2em] ${
            t.featured ? "text-ember" : "text-clay"
          }`}
        >
          {t.n} — {t.per}
        </p>
        <h3 className="stretch-semi mt-2 font-display text-[clamp(1.5rem,3vw,1.75rem)] font-black uppercase leading-tight">
          {t.name}
        </h3>
        <p className="stretch-wide mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] font-black leading-none">
          {t.price}
          <span className="font-mono text-[12px] font-normal uppercase tracking-[0.18em] opacity-60">
            {" "}
            {t.per}
          </span>
        </p>
      </div>

      <div className="md:col-span-6">
        <p className={`text-lg leading-relaxed ${t.featured ? "text-paper/90" : "text-ink/85"}`}>
          {t.tagline}
        </p>
        <p
          className={`mt-3 max-w-[52ch] text-base leading-relaxed ${
            t.featured ? "text-paper/70" : "text-ink/70"
          }`}
        >
          {t.who}
        </p>
        <ul className="mt-6 grid gap-2.5">
          {t.points.map((p) => (
            <li key={p} className="flex gap-3 text-base leading-relaxed">
              <span aria-hidden className={t.featured ? "text-ember" : "text-clay"}>
                →
              </span>
              <span className={t.featured ? "text-paper/85" : "text-ink/80"}>{p}</span>
            </li>
          ))}
        </ul>
        {t.predictability && (
          <p className="mt-6 max-w-[58ch] border-l-2 border-ember pl-4 text-base leading-relaxed text-paper/75">
            {t.predictability}
          </p>
        )}
        {t.scarcity && (
          <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.18em] text-ember">
            {t.scarcity}
          </p>
        )}
      </div>

      <div className="flex items-start md:col-span-3 md:justify-end">
        <a href={t.href} className={t.style}>
          {t.cta}
        </a>
      </div>
    </article>
  );
}

export default function WorkWithMe() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Seo
        title="Work With Me"
        description="The Programme, The Coaching, The Training, The Intensive, The Hands-On — fascia personal training with PaulAbram, from free daily practice to full retraining systems."
      />
      <Header />
      <main>
        {/* Page intro */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-12 md:px-10 md:pb-16 md:pt-20">
            <p className="mb-8 font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
              Work with PaulAbram
            </p>
            <h1 className="stretch-wide max-w-[20ch] font-display text-[clamp(1.9rem,4vw,2.75rem)] font-black uppercase leading-[1.02]">
              There's a level of support for wherever you are
            </h1>
            <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink/80 md:text-lg">
              Start free. Move up when it feels right. Every tier is the same
              work — the difference is how much of my time is yours.
            </p>
          </div>
        </section>

        {/* Free tier */}
        <section className="border-b border-ink/15">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-12 md:grid-cols-12 md:gap-8 md:px-10 md:py-14">
            <div className="md:col-span-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-clay">
                Start here
              </p>
              <h2 className="stretch-semi mt-2 font-display text-[clamp(1.5rem,3vw,1.75rem)] font-black uppercase leading-tight">
                {free.name}
              </h2>
              <p className="stretch-wide mt-3 font-display text-[clamp(2rem,4vw,2.75rem)] font-black leading-none">
                {free.price}
              </p>
            </div>
            <div className="md:col-span-6">
              <p className="text-lg leading-relaxed text-ink/85">{free.tagline}</p>
              <ul className="mt-6 grid gap-2.5">
                {free.points.map((p) => (
                  <li key={p} className="flex gap-3 text-base leading-relaxed">
                    <span aria-hidden className="text-clay">
                      →
                    </span>
                    <span className="text-ink/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start md:col-span-3 md:justify-end">
              <a href={free.href} className={free.style}>
                {free.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Paid tiers */}
        <section aria-label="Paid tiers">
          <div className="mx-auto max-w-[1400px] border-t border-ink/15">
            {tiers.map((t) => (
              <TierBlock key={t.n} t={t} />
            ))}
          </div>
        </section>

        {/* Quiet guidance link */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-smoke">
              Not sure where you fit?{" "}
              <a
                href="https://paulabram.io/assessment/"
                className="text-ink underline decoration-clay decoration-2 underline-offset-4 transition-colors hover:text-clay"
              >
                Take the two-minute assessment →
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
