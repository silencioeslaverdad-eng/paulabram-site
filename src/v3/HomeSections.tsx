import { useMemo } from "react";
import { Link } from "react-router";
import { CALENDLY, YOUTUBE } from "../content/offers";

export function Hero() {
  return (
    <div className="g3-hero">
      <div className="g3-inner">
        <div className="g3-hero-grid">
          <div>
            <div className="g3-kicker">Fascia · Nervous system regulation · Grounding</div>
            <h1>
              I thought I did all the work.
              <br />
              In the end I was <em>still holding on.</em>
            </h1>
            <p className="sub">
              The last part of my healing wasn't in my mind. It was in my body. I help people
              release what they're holding — physically and emotionally — so they can stop
              hiding, stop reacting, and live a regulated life.
            </p>
            <p className="sub" style={{ marginTop: 18 }}>
              And what that means is less stress — more capacity, reduced pain — more
              flexibility, greater awareness, and more space.
            </p>
          </div>
          <div className="g3-hero-photo">
            <img src="/images/hero-paul.jpg" alt="PaulAbram, Fascia Personal Trainer, outdoors" />
            <div className="g3-hero-ctas">
              <a className="g3-cta" href={CALENDLY} target="_blank" rel="noopener">
                Book a free 20-minute call
              </a>
              <a className="g3-cta secondary" href={YOUTUBE} target="_blank" rel="noopener">
                Join the free daily practice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Front-page Work-with-me summary (rock white): who, what, what it costs. */
export function OfferSummary() {
  return (
    <section className="g3-section rock">
      <div className="g3-inner">
        <h2>
          <span className="num">01</span>Work with me — what's on the table
        </h2>
        <p className="g3-standfirst">Here's what I offer and what it costs.</p>
        <div className="g3-offer">
          <div className="g3-offer-row">
            <div className="g3-offer-name">
              The daily practice{" "}
              <small>
                Live fascia and grounding, 7:00 a.m. UK time, every morning on YouTube.
                Turn up, that's the whole deal.
              </small>
            </div>
            <div className="g3-offer-price">Free</div>
          </div>
          <div className="g3-offer-row">
            <div className="g3-offer-name">
              A 20-minute call{" "}
              <small>
                Tell me where you're at. If I can help, I'll say how. If I can't, I'll say
                that.
              </small>
            </div>
            <div className="g3-offer-price">Free</div>
          </div>
          <div className="g3-offer-row">
            <div className="g3-offer-name">
              The 21-Day Reset{" "}
              <small>
                Three weeks of guided practice, live with me. Rebuild the habit of standing
                down.
              </small>
            </div>
            <div className="g3-offer-price">By donation</div>
          </div>
          <div className="g3-offer-row">
            <div className="g3-offer-name">
              One-to-one fascia work{" "}
              <small>
                In person or by video. Sustained release work — regulation, not
                stimulation.
              </small>
            </div>
            <div className="g3-offer-price">£65–£75 per session</div>
          </div>
          <div className="g3-offer-row">
            <div className="g3-offer-name">
              Monthly programmes{" "}
              <small>
                Group practice, coaching or full one-to-one training — the real work,
                priced plainly.
              </small>
            </div>
            <div className="g3-offer-price">From £39 / month</div>
          </div>
        </div>
        <div className="g3-story-links" style={{ marginTop: 32 }}>
          <Link to="/work-with-me" style={{ color: "var(--black)" }}>
            The full list, with payment →
          </Link>
        </div>
      </div>
    </section>
  );
}

const CHRONO: [string, string, boolean?][] = [
  [
    "1988",
    "Joined the British military at nineteen. Felt born to it. Learned to override every signal my body sent.",
  ],
  [
    "20 years on",
    "Medically discharged. The uniform came off; the overriding didn't.",
  ],
  [
    "The days that followed",
    "The dark days — depression, and more than one attempt at suicide.",
  ],
  [
    "The fight back",
    "No one else could help me; that was my big problem. So I taught myself — reading, practising, meditating, year after year.",
  ],
  [
    "18 years on — April 2026",
    "The revelation: what I was still holding lived in my body, not my mind. The dark night of the soul, and finally naming it all — complex PTSD braided with ADHD, the grief of Mum dying, the childhood, the things seen on tour. Named, faced, and now the ground I teach from.",
    true,
  ],
];

export function Story() {
  return (
    <section className="g3-section">
      <div className="g3-inner">
        <h2>
          <span className="num">02</span>The story
        </h2>
        <p className="g3-standfirst">Because we all love a story — and storytellers.</p>
        <div className="g3-chrono">
          {CHRONO.map(([when, what, now]) => (
            <div className={now ? "g3-chrono-row now" : "g3-chrono-row"} key={when}>
              <div className="when">{when}</div>
              <div className="what">{what}</div>
            </div>
          ))}
        </div>
        <div className="g3-story-links">
          <Link to="/story">Read the book — Hypnotised to Death</Link>
          <Link to="/blog">More stories in The Guarded Body →</Link>
        </div>
      </div>
    </section>
  );
}

const CARDS = [
  {
    tag: "T1 · Grounding",
    title: "Letting it leave",
    body: "This is where we actually learn to let go. Not holding it together — letting what's moving through you actually leave.",
  },
  {
    tag: "T2 · Tension → Regulation",
    title: "Stop guarding",
    body: "Out of hyper-vigilance, overriding and performing — into a nervous system that can stand down.",
  },
  {
    tag: "T3 · Embodiment",
    title: "Knowing isn't being free",
    body: "Knowing about your patterns is not the same as being free of them. The work happens in the body or not at all.",
  },
  {
    tag: "T4 · Authentic self-expression",
    title: "Living from your own truth",
    body: "Expressed from regulation, not protection. This is the outcome all the work points towards.",
  },
];

export function WorkCards() {
  return (
    <section className="g3-section" id="the-work">
      <div className="g3-inner">
        <h2>
          <span className="num">03</span>What the work is
        </h2>
        <div className="g3-cards">
          {CARDS.map((c) => (
            <div className="g3-card" key={c.tag}>
              <div className="tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Honest() {
  return (
    <section className="g3-section rock g3-honest">
      <div className="g3-inner">
        <h2>What this is not</h2>
        <p>
          This isn't therapy and it isn't medicine. I don't treat or cure anything. What I
          offer is a way of working with the body that I've lived, tested on myself first,
          and watched change people's lives.{" "}
          <strong>Where your path needs a clinician, I'll say so.</strong>
        </p>
      </div>
    </section>
  );
}

// Day-1 of the 365 morning practice. Day 121 fell on 2026-10-17 (per the approved
// test sheet); adjust this constant if Paul gives a different start date.
const CHALLENGE_START = new Date(2026, 5, 18); // 18 June 2026

export function LiveStrip() {
  const day = Math.max(
    1,
    Math.floor((Date.now() - CHALLENGE_START.getTime()) / 86400000) + 1
  );
  return (
    <section className="g3-section">
      <div className="g3-inner g3-live">
        <div>
          <div className="count">
            DAY <span>{day}</span> OF 365
          </div>
          <p>
            One live practice, every morning, free for a year. 7:00 a.m. UK time on
            YouTube. Not quite halfway. Not stopping.
          </p>
        </div>
        <a
          className="g3-cta"
          style={{ marginTop: 0 }}
          href={YOUTUBE}
          target="_blank"
          rel="noopener"
        >
          Watch tomorrow morning
        </a>
      </div>
    </section>
  );
}

const ZONES: [string, string][] = [
  ["UK", "Europe/London"],
  ["US Eastern", "America/New_York"],
  ["US Central", "America/Chicago"],
  ["US Pacific", "America/Los_Angeles"],
  ["Central Europe", "Europe/Berlin"],
  ["Gulf", "Asia/Dubai"],
  ["India", "Asia/Kolkata"],
  ["Thailand", "Asia/Bangkok"],
  ["Sydney", "Australia/Sydney"],
  ["New Zealand", "Pacific/Auckland"],
];

function londonOffsetMinutes(at: Date): number {
  const dtf = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const p: Record<string, string> = {};
  dtf.formatToParts(at).forEach((x) => {
    if (x.type !== "literal") p[x.type] = x.value;
  });
  const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute);
  return (asUTC - at.getTime()) / 60000;
}

function nextClass(): Date {
  const now = new Date();
  const off = londonOffsetMinutes(now);
  const lon = new Date(now.getTime() + off * 60000);
  let cand = new Date(
    Date.UTC(lon.getUTCFullYear(), lon.getUTCMonth(), lon.getUTCDate(), 7, 0) -
      off * 60000
  );
  if (cand <= now) cand = new Date(cand.getTime() + 86400000);
  return cand;
}

function dayDiff(tzA: string, tzB: string, instant: Date): string {
  const o: Intl.DateTimeFormatOptions = {
    timeZone: tzA,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const a = new Intl.DateTimeFormat("en-GB", o).format(instant);
  o.timeZone = tzB;
  const b = new Intl.DateTimeFormat("en-GB", o).format(instant);
  if (a === b) return "";
  return b < a ? " · prev. day" : " · next day";
}

function fmt(tz: string, instant: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(instant);
}

export function Zones() {
  const { rows, you } = useMemo(() => {
    const t = nextClass();
    const rows = ZONES.map(
      ([name, tz]) => [name, fmt(tz, t) + dayDiff(tz, "Europe/London", t)] as [string, string]
    );
    const mine = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const you = mine
      ? fmt(mine, t) + dayDiff(mine, "Europe/London", t)
      : null;
    return { rows, you };
  }, []);

  return (
    <section className="g3-section" style={{ paddingTop: 0, borderBottom: "none" }}>
      <div className="g3-inner">
        <div className="g3-zones-box">
          <div className="g3-zones-head">7:00 a.m. UK is…</div>
          <div className="g3-zones-grid">
            {rows.map(([name, time]) => (
              <div className="g3-zone" key={name}>
                <div className="g3-zone-name">{name}</div>
                <div className="g3-zone-time">{time}</div>
              </div>
            ))}
          </div>
          {you && (
            <div className="g3-zones-you">
              Your time: <strong>{you}</strong> — next class, live on YouTube.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
