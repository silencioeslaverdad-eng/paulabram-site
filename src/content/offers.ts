// Live payment + booking links (created and verified 2026-10-17).
// Decisions confirmed by Paul 2026-10-17: 7-Day stays one-off; Coaching auto-bills monthly.

export const STRIPE = {
  programme: "https://buy.stripe.com/8x2bJ10mLfcbfwk18Yawo01", // £39/month
  sevenDay: "https://buy.stripe.com/6oU8wPc5td43fwk2d2awo02", // £49 one-off
  coaching: "https://buy.stripe.com/fZu28rd9x3ttbg418Yawo03", // £149/month
  training: "https://buy.stripe.com/7sYaEX0mLggf0Bq4laawo04", // £392/month
  intensive: "https://buy.stripe.com/aFaeVd6L97JJac06tiawo05", // £588/month
  online: "https://buy.stripe.com/8x2dR9glJ6FF83S7xmawo06", // £65 one-off
  inPerson: "https://buy.stripe.com/00w28r5H50hh3NCg3Sawo07", // £75 one-off
  reset21: "https://buy.stripe.com/00w7sLc5t5BBdoc18Yawo08", // donation
};

export const CALENDLY = "https://calendly.com/paulabram/20min";
export const YOUTUBE = "https://www.youtube.com/@TheGroundedMan-TV";
export const BLOG = "/blog";

export interface Offer {
  name: string;
  blurb: string;
  price: string;
  priceClass?: "sub" | "once";
  cta: string;
  href: string;
  free?: boolean;
}

export const FREE_OFFERS: Offer[] = [
  {
    name: "The daily practice",
    blurb:
      "Live fascia and grounding, 7:00 a.m. UK time, every morning on YouTube. Turn up — that's the whole deal.",
    price: "Free",
    cta: "Watch on YouTube",
    href: YOUTUBE,
    free: true,
  },
  {
    name: "A 20-minute call",
    blurb:
      "Tell me where you're at. If I can help, I'll say how. If I can't, I'll say that.",
    price: "Free",
    cta: "Book on Calendly",
    href: CALENDLY,
    free: true,
  },
];

export const SESSION_OFFERS: Offer[] = [
  {
    name: "Online Session",
    blurb:
      "One-to-one, by video. Sustained fascia work — regulation, not stimulation.",
    price: "£65",
    cta: "Pay & book →",
    href: STRIPE.online,
  },
  {
    name: "In-Person Session",
    blurb: "The same work, in the room.",
    price: "£75",
    cta: "Pay & book →",
    href: STRIPE.inPerson,
  },
];

export const MONTHLY_OFFERS: Offer[] = [
  {
    name: "The Programme",
    blurb:
      "8 hours of live group sessions a month, the full replay library, and the community.",
    price: "£39",
    priceClass: "sub",
    cta: "Join →",
    href: STRIPE.programme,
  },
  {
    name: "The 7 Day Programme",
    blurb:
      "A personalised programme built for you from the library, based on your assessment.",
    price: "£49",
    priceClass: "once",
    cta: "Join →",
    href: STRIPE.sevenDay,
  },
  {
    name: "The Coaching",
    blurb:
      "4 one-to-one hours a month, a monthly 90-minute deep dive, the full replay library and the community.",
    price: "£149",
    priceClass: "sub",
    cta: "Join →",
    href: STRIPE.coaching,
  },
  {
    name: "The Training",
    blurb:
      "8 one-to-one hours a month — twice weekly works best — with a full fascia assessment, WhatsApp check-ins and progress tracking.",
    price: "£392",
    priceClass: "sub",
    cta: "Join →",
    href: STRIPE.training,
  },
  {
    name: "The Intensive",
    blurb:
      "12 sessions a month, or 8 plus full coaching. The greatest flexibility — everything in The Training, and more.",
    price: "£588",
    priceClass: "sub",
    cta: "Join →",
    href: STRIPE.intensive,
  },
];

export const DONATION_OFFER: Offer = {
  name: "The 21-Day Reset",
  blurb:
    "Three weeks of guided live fascia and grounding practice with me. Pay what it's worth to you.",
  price: "You choose",
  cta: "Join the next one →",
  href: STRIPE.reset21,
};
