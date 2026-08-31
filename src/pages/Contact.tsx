import Seo from '../components/Seo'
import { CALENDLY_URL, WHATSAPP_URL, EMAIL } from '../components/Layout'

const channels = [
  {
    title: 'Book a Clarity Session',
    detail: 'Twenty minutes, free, one to one. The fastest way to a straight answer.',
    action: 'Pick a time',
    href: CALENDLY_URL,
    external: true,
  },
  {
    title: 'WhatsApp',
    detail: 'Quickest for a short question or to get the free 28-Day Reset.',
    action: 'Message me',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    title: 'Email',
    detail: 'Better for longer questions, group bookings, or anything formal.',
    action: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
]

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/paulabram-embodiment-architect-0bb170409/',
  },
  { name: 'Instagram', href: 'https://www.instagram.com/paulabramofficial/' },
  { name: 'YouTube', href: 'https://www.youtube.com/@TheGroundedMan-TV' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact PaulAbram — Book a Session or Ask a Question"
        description="Get in touch with PaulAbram. Book a free Clarity Session, message on WhatsApp, or email about coaching, workshops, or group work."
        path="/contact"
      />

      <section className="container-site py-20 sm:py-24">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          One conversation is usually enough to know if this is right for you.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-soft">
          No forms that disappear into the void. These come straight to me, and I answer them
          myself.
        </p>
      </section>

      <section className="container-site grid gap-6 pb-16 md:grid-cols-3">
        {channels.map((channel) => (
          <div key={channel.title} className="card flex flex-col p-7">
            <h2 className="font-display text-xl font-semibold">{channel.title}</h2>
            <p className="mt-3 flex-1 leading-relaxed text-soft">{channel.detail}</p>
            <a
              href={channel.href}
              {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="btn-primary mt-6 self-start"
            >
              {channel.action}
            </a>
          </div>
        ))}
      </section>

      <section className="container-site pb-24">
        <div className="card flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-soft">Elsewhere, if you want a feel for the work first:</p>
          <div className="flex flex-wrap gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold uppercase tracking-wider text-soft transition-colors hover:text-gold"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-soft">
          If you are in crisis right now, please contact your GP, call 999, or reach the
          Samaritans on 116 123 (UK, free, day or night).
        </p>
      </section>
    </>
  )
}
