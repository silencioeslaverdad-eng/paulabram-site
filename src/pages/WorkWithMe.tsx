import Seo from '../components/Seo'
import { CALENDLY_URL, WHATSAPP_URL, EMAIL } from '../components/Layout'
import { liveDay } from '../lib/liveDay'

const YOUTUBE_URL = 'https://www.youtube.com/@TheGroundedMan-TV'

const resetTiers = [
  {
    eyebrow: 'Free',
    title: 'The Free Reset',
    body: `Easy follow-along videos on YouTube, done at home at your own pace, plus a live guided practice at 7am BST every morning through The Grounded Plan, day ${liveDay} of a 365-day commitment, and Sunday Q&As where you can ask me anything about the practice. No equipment, no experience, no cost. It is the same starting point I use with private clients, because your body needs to trust the process before deeper work makes sense.`,
    forWhom: 'For you if you know something has to change but you are not ready to commit to anything yet.',
    cta: 'Start Free on YouTube',
    href: YOUTUBE_URL,
    external: true,
  },
  {
    eyebrow: 'Guided group · Price on application',
    title: 'The Community Reset',
    body: 'The same 28 days, done together. A guided group reset with live sessions, shared momentum, and direct access to me throughout. Runs at set points through the year with a limited number of places.',
    forWhom: 'For you if you do better with structure, company, and a fixed start date.',
    cta: 'Ask About the Next Community Reset',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    eyebrow: 'Private · Price on application',
    title: 'The Bespoke Reset',
    body: 'The reset built around you. Private and one to one, paced to your body, your history, and your life, with direct guidance from me across the full 28 days. The fastest way to feel what this work can do when it is aimed precisely at you.',
    forWhom: 'For you if you want the work tailored, private, and paced to exactly where you are.',
    cta: 'Start With a Clarity Session',
    href: CALENDLY_URL,
    external: true,
  },
]

const offers = [
  {
    eyebrow: 'One session · Free',
    title: 'The Clarity Session',
    body: 'Twenty minutes, one to one. We look at where your body is holding the load, what you have already tried, and whether the way I work fits what you need. You leave with a clear next step either way. If I am not the right person to help you, I will say so and point you somewhere better.',
    forWhom: 'For you if you want a straight answer about whether this work can help, before you spend anything.',
    cta: 'Book Your Free Session',
    href: CALENDLY_URL,
    external: true,
  },
  {
    eyebrow: '12 weeks · One to one',
    title: 'Rebuild From the Body Up',
    body: 'The full programme. Twelve weeks of private coaching through the three stages of the method. Release the stored tension driving your symptoms. Regulate a nervous system that has forgotten how to stand down. Reconstruct strength, sleep, and a life that does not run on adrenaline. Sessions are weekly, with practices to do between them.',
    forWhom: 'For you if you are done managing symptoms and want to change the pattern underneath them.',
    cta: 'Start With a Clarity Session',
    href: CALENDLY_URL,
    external: true,
  },
  {
    eyebrow: 'Groups · In person & online',
    title: 'Workshops & Group Work',
    body: 'Small-group workshops on stress, the nervous system, and body-led recovery. Practical from the first hour. Suitable for teams, veteran groups, and organisations whose people are running on empty.',
    forWhom: 'For you if you are booking for a group, a team, or an organisation.',
    cta: 'Ask About Group Work',
    href: `mailto:${EMAIL}?subject=Group%20workshops`,
    external: false,
  },
]

type Offer = {
  eyebrow: string
  title: string
  body: string
  forWhom: string
  cta: string
  href: string
  external: boolean
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="card flex flex-col p-8">
      <p className="eyebrow">{offer.eyebrow}</p>
      <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{offer.title}</h3>
      <p className="mt-4 leading-relaxed text-soft">{offer.body}</p>
      <p className="mt-4 border-l-2 border-gold/60 pl-4 text-sm italic leading-relaxed text-soft">
        {offer.forWhom}
      </p>
      <div className="mt-6 pt-2">
        <a
          href={offer.href}
          {...(offer.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className="btn-primary"
        >
          {offer.cta}
        </a>
      </div>
    </article>
  )
}

export default function WorkWithMe() {
  return (
    <>
      <Seo
        title="Work With Me — 28-Day Reset, Clarity Sessions & Programmes | PaulAbram"
        description="Body-led coaching for stress and burnout. Start free with the 28-Day Reset on YouTube, join a guided community or bespoke reset, book a free Clarity Session, or commit to the 12-week programme."
        path="/work-with-me"
      />

      <section className="container-site py-20 sm:py-24">
        <p className="eyebrow">Work with me</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Every way in starts with your body, not your to-do list.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-soft">
          There is no hard sell here. Each option exists because it meets people at a different
          level of readiness. Pick the one that matches where you actually are.
        </p>
      </section>

      {/* 28-DAY RESET — THREE VERSIONS */}
      <section className="container-site pb-20">
        <p className="eyebrow mb-4">The 28-Day Reset</p>
        <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
          Three ways to do it. One place to start.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-soft">
          However you do it, the reset is twenty-eight days of short, guided practices that teach
          your body how to come down from high alert. The only difference is how much of me you
          want alongside you.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {resetTiers.map((tier) => (
            <OfferCard key={tier.title} offer={tier} />
          ))}
        </div>
      </section>

      {/* OTHER WAYS TO WORK */}
      <section className="band-stone py-20">
        <div className="container-site">
          <p className="eyebrow mb-4">Beyond the reset</p>
          <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
            When you are ready for more.
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.title} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-site max-w-3xl py-16 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Not sure which one fits?
          </h2>
          <p className="mt-4 text-soft">
            Book the Clarity Session. Twenty minutes, no charge, and you will leave knowing your
            next step whether we work together or not.
          </p>
          <div className="mt-8">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Free Clarity Session
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
