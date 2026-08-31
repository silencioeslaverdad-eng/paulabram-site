import { liveDay } from '../lib/liveDay'

const CHANNEL_URL = 'https://www.youtube.com/@TheGroundedMan-TV'

export default function LiveCounter() {
  return (
    <section style={{ background: 'rgb(var(--slate))' }}>
      <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-[auto_1fr_auto] lg:gap-14">
        <div className="text-center lg:text-left">
          <p className="font-display text-7xl font-light leading-none text-white md:text-8xl">
            {liveDay}
          </p>
          <p
            className="mt-2 text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'rgb(246 245 242 / 0.65)' }}
          >
            of 365 days live
          </p>
        </div>
        <div>
          <p className="eyebrow" style={{ color: 'rgb(var(--accent) / 0.9)' }}>
            The Grounded Plan
          </p>
          <p className="mt-3 font-display text-2xl font-medium leading-snug text-white md:text-3xl">
            Live at 7am BST, every morning, for a full year.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed" style={{ color: 'rgb(246 245 242 / 0.75)' }}>
            I committed to 365 days of live practice, free, so anyone can experience what Fascia
            Maneuvers can do. The people who keep showing up have become the Grounded Clan. Come
            as you are. Practise with us.
          </p>
        </div>
        <div className="text-center">
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !bg-white"
            style={{ color: 'rgb(var(--slate))' }}
          >
            Join Us Live at 7am
          </a>
        </div>
      </div>
    </section>
  )
}
