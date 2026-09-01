import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work-with-me', label: 'Work With Me' },
  { to: '/books', label: 'Books' },
  { to: '/watch', label: 'Watch' },
  { to: '/contact', label: 'Contact' },
]

export const CALENDLY_URL = 'https://calendly.com/paulabram/20min'
export const WHATSAPP_URL = 'https://wa.me/447470065000'
export const EMAIL = 'permanentchange@pm.me'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          background: 'rgb(246 245 242 / 0.9)',
          borderColor: 'rgb(var(--line) / 0.5)',
        }}
      >
        <div className="container-site flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-xl font-medium tracking-wide">
            Paul<span style={{ color: 'rgb(var(--accent))' }}>Abram</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive ? 'font-semibold' : 'opacity-70 hover:opacity-100'
                  }`
                }
                style={({ isActive }) => (isActive ? { color: 'rgb(var(--accent))' } : {})}
              >
                {item.label}
              </NavLink>
            ))}
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary !px-5 !py-2.5">
              Book a Clarity Session
            </a>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t px-6 pb-6 pt-4 lg:hidden" style={{ borderColor: 'rgb(var(--line) / 0.5)' }}>
            <div className="flex flex-col gap-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-base opacity-80"
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary mt-2">
                Book a Clarity Session
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-12" style={{ borderColor: 'rgb(var(--line) / 0.5)', background: 'rgb(var(--surface))' }}>
        <div className="container-site grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg">Paul<span style={{ color: 'rgb(var(--accent))' }}>Abram</span></p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
              Body-led coaching for stress and burnout. Human Garage qualified.
              Newark-on-Trent, UK and online worldwide.
            </p>
          </div>
          <div className="text-sm" style={{ color: 'rgb(var(--muted))' }}>
            <p className="mb-3 font-semibold uppercase tracking-widest text-xs" style={{ color: 'rgb(var(--accent))' }}>Contact</p>
            <p><a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a></p>
            <p className="mt-1"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></p>
            <p className="mt-1"><a href="https://www.linkedin.com/in/paulabram-embodiment-architect-0bb170409/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></p>
            <p className="mt-1"><a href="https://www.youtube.com/@TheGroundedMan-TV" target="_blank" rel="noreferrer" className="hover:underline">YouTube</a></p>
            <p className="mt-1"><a href="https://ko-fi.com/paulabram" target="_blank" rel="noreferrer" className="hover:underline">Support this work on Ko-fi</a></p>
          </div>
          <div className="text-xs leading-relaxed" style={{ color: 'rgb(var(--muted))' }}>
            <p className="mb-3 font-semibold uppercase tracking-widest" style={{ color: 'rgb(var(--accent))' }}>Please note</p>
            <p>
              This work is coaching and body-led self-release education. It is not therapy,
              diagnosis or medical treatment, and it does not replace professional healthcare.
              If you are in crisis, please contact your GP or emergency services.
            </p>
            <p className="mt-4">© {new Date().getFullYear()} PaulAbram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
