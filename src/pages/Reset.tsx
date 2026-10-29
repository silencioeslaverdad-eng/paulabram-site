import { useState } from "react";
import Seo from "@/components/Seo";

/**
 * 7-Day Fascia Reset — sales/waitlist page (standalone, no site chrome).
 *
 * Modes: while playto.so KYC is pending the CTA joins the MailerLite waitlist
 * (iframe share URL, same pattern as Moonrise). When checkout is live, set
 * CHECKOUT_URL and the buttons become payment links.
 *
 * Copy rules honoured: story appears once; no exclamation marks; care line
 * present; no medical claims.
 */

const CHECKOUT_URL: string | null = "https://buy.stripe.com/aFa8wP4D19RRck87xmawo09"; // Stripe Payment Link, £27
const ML_WAITLIST_SHARE_URL =
  "https://preview.mailerlite.io/forms/2538549/REPLACE_ME/share"; // TODO: Paul — create "7-Day Reset waitlist" form in MailerLite and paste its share URL
const ASSESSMENT_URL = "https://paulabram.io/assessment/";
const PRICE = "£27";

const days = [
  { day: "Day 1", title: "Find where you're holding", text: "A guided head-to-toe tour. Most people locate their main line of tension in the first ten minutes — often somewhere they never thought to look." },
  { day: "Day 2", title: "Hands, jaw and scalp", text: "The quiet tension centres. Releasing here is why so many report fewer headaches and better sleep within days." },
  { day: "Day 3", title: "The ribcage and the breath", text: "Open the diaphragm and the lungs. Breath work begins here — this is where “guarded” starts to let go." },
  { day: "Day 4", title: "The pelvis releases the jaw", text: "The connections nobody explains. Work the pelvis and feel the neck, jaw and shoulders follow." },
  { day: "Day 5", title: "Spinal decompression", text: "The anti-gravity manoeuvre. Length without stretching, space without force." },
  { day: "Day 6", title: "Twists and the long exhale", text: "Rotational release paired with breath — the day most people feel something shift." },
  { day: "Day 7", title: "Your practice, yours", text: "Put it together into a daily practice you keep for life — plus how to know when your body needs more." },
];

const forYou = [
  "You've done the work — therapy, physio, yoga, the gym — and you're still holding on",
  "You wake with tension that wasn't there when you went to sleep",
  "Your shoulders, jaw or lower back tighten before you've noticed you're stressed",
  "You want 20–30 calm minutes a day, not another thing to achieve",
];

const notFor = [
  "You want a workout, a sweat, or a fitness programme",
  "You want to be fixed in one session",
  "You'd rather push through pain than listen to it",
];

const faqs = [
  { q: "Is it the same seven sessions for everyone?", a: "No. Your assessment answers decide which sessions you get and in what order. The seven-day arc is the same — find it, release it, make it yours — but the sessions themselves are matched to where your body is holding." },
  { q: "Is this exercise?", a: "No. Fascia Manoeuvres are conscious, gentle movements paired with breath. There is no workout, no equipment, no sweating. If you can lie on the floor and breathe, you can do every session." },
  { q: "How much time does it take?", a: "One guided session per day, 20–30 minutes, for seven days, plus a short focus clip matched to you. Each session is recorded — watch whenever suits you, keep them forever." },
  { q: "I've tried everything. Why would this be different?", a: "Most approaches work on muscle. This works on fascia — the connective tissue that holds tension patterns — and on the breath that tells your nervous system it's safe to let go. That's why people who've “done all the work” often feel this first." },
  { q: "What if it's not for me?", a: "Full refund within 14 days, no questions, no forms. Reply to any email and it's done." },
  { q: "What happens after the seven days?", a: "You keep the sessions and the daily practice. If you want to go further, there's a free daily live class every morning and a small-group programme — but the Reset stands entirely on its own." },
];

export default function Reset() {
  const [showForm, setShowForm] = useState(false);

  const CtaButton = ({ label }: { label: string }) =>
    CHECKOUT_URL ? (
      <a
        href={CHECKOUT_URL}
        className="inline-block rounded-md bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-500"
      >
        {label} — {PRICE}
      </a>
    ) : (
      <button
        onClick={() => setShowForm(true)}
        className="inline-block rounded-md bg-red-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-500"
      >
        Join the waitlist — {PRICE} at launch
      </button>
    );

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-neutral-200 antialiased">
      <Seo
        title="The 7-Day Fascia Reset — tailored to what your body is holding"
        description="Seven guided days of Fascia Manoeuvres — movement and breath, not a workout — selected and sequenced around your assessment. £27, 14-day refund."
      />

      {/* Header */}
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <span className="text-sm font-semibold tracking-widest text-white uppercase">The Grounded Man</span>
        <span className="text-xs text-neutral-500">PaulAbram · Fascia Manoeuvres</span>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-20 text-center">
        <p className="mb-6 text-sm tracking-widest text-red-500 uppercase">The 7-Day Fascia Reset</p>
        <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl">
          You&apos;ve done all the work.<br />You&apos;re still holding on.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
          Seven guided sessions — movement and breath work, not a workout — selected and sequenced
          around your assessment, so the week goes where your body is holding. 20 to 30 calm minutes
          a day. Yours to keep.
        </p>
        <div className="mt-10"><CtaButton label="Start the Reset" /></div>
        <p className="mt-4 text-sm text-neutral-500">14-day full refund · instant access · keep the sessions forever</p>
      </section>

      {/* Waitlist form (waitlist mode only) */}
      {!CHECKOUT_URL && showForm && (
        <section className="mx-auto max-w-md px-6 pb-16">
          <div className="overflow-hidden rounded-2xl bg-white">
            <iframe
              src={ML_WAITLIST_SHARE_URL}
              title="Join the 7-Day Fascia Reset waitlist"
              className="h-[600px] w-full border-0"
            />
          </div>
          <p className="mt-4 text-center text-sm text-neutral-500">
            You&apos;ll be the first to know when the Reset opens — and founding members launch first.
          </p>
        </section>
      )}

      {/* Tailored */}
      <section className="mx-auto max-w-2xl px-6 pb-20 text-center">
        <h2 className="mb-6 text-2xl font-bold text-white">Not a template. Your seven days.</h2>
        <p className="leading-relaxed text-neutral-400">
          Before you start, you take the free assessment. Your answers show where your body is
          holding — jaw, shoulders, breath, pelvis, spine, legs, digestion — and your seven days
          are matched to it. Every day pairs the core session with a short release for{" "}
          <em className="text-neutral-200">your</em> pattern. Two people can take the Reset and
          never do the same week.
        </p>
      </section>

      {/* Story — appears once, per voice rules */}
      <section className="border-y border-neutral-800 bg-[#111111]">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold text-white">I did all the work. I was still holding it.</h2>
          <div className="space-y-4 leading-relaxed text-neutral-400">
            <p>
              In Portugal, I tried to take my life. Three times. The third time, alone in a room
              with no windows, I chewed through my own wrist.
            </p>
            <p>
              At that point, something turned: <em className="text-neutral-200">you cannot take a life
              that is not yours to take.</em> That was not a cure. It was the beginning of years of
              real psychological work — and that work was worth doing.
            </p>
            <p>
              But thirteen years later, I was still holding something. The last part of my healing
              wasn&apos;t in my mind. It was in my body. Fascia Manoeuvres is the practice that
              finally let it leave — and it&apos;s what the Reset teaches, one calm day at a time.
            </p>
            <p className="pt-2 text-sm text-neutral-500">
              If you&apos;re in crisis right now, please call the Samaritans on 116 123 (UK) first.
              This page will still be here.
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">Seven days. One release at a time.</h2>
        <div className="space-y-6">
          {days.map((d) => (
            <div key={d.day} className="flex gap-5 rounded-lg border border-neutral-800 p-5">
              <span className="w-16 shrink-0 pt-1 text-sm font-bold tracking-wide text-red-500 uppercase">{d.day}</span>
              <div>
                <h3 className="font-semibold text-white">{d.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-400">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-selection */}
      <section className="border-y border-neutral-800 bg-[#111111]">
        <div className="mx-auto grid max-w-3xl gap-10 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="mb-5 text-xl font-bold text-white">This is for you if…</h2>
            <ul className="space-y-3">
              {forYou.map((x) => (
                <li key={x} className="flex gap-3 text-sm leading-relaxed text-neutral-300">
                  <span className="text-red-500">✓</span>{x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-xl font-bold text-neutral-500">It&apos;s not for you if…</h2>
            <ul className="space-y-3">
              {notFor.map((x) => (
                <li key={x} className="flex gap-3 text-sm leading-relaxed text-neutral-500">
                  <span>✕</span>{x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500">
              Tension isn&apos;t a mystery; it&apos;s a location.{" "}
              <a href={ASSESSMENT_URL} className="font-semibold tracking-wide text-red-400 underline underline-offset-4 hover:text-red-300">
                Find yours — free ASSESSMENT
              </a>
              , three minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee + FAQ */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-14 rounded-lg border border-neutral-800 p-6 text-center">
          <h2 className="text-xl font-bold text-white">The promise is simple.</h2>
          <p className="mt-3 leading-relaxed text-neutral-400">
            Do the seven days. If you don&apos;t feel a genuine difference in what your body is holding,
            email me within 14 days and I&apos;ll refund every penny. No forms, no questions.
          </p>
        </div>
        <h2 className="mb-8 text-center text-2xl font-bold text-white">Questions</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-neutral-800 bg-[#111111]">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white">Your body has been holding on long enough.</h2>
          <p className="mt-4 text-neutral-400">Start tonight. Feel the difference by the weekend.</p>
          <div className="mt-8"><CtaButton label="Start the 7-Day Reset" /></div>
          <p className="mt-4 text-sm text-neutral-500">14-day full refund · stay grounded</p>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 py-8 text-center text-xs text-neutral-600">
        © PaulAbram · The Grounded Man · paulabram.io · Live and free every morning at 7:00 a.m. UK time on YouTube
      </footer>
    </div>
  );
}
