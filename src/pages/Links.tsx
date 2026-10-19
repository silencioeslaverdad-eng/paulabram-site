import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Instagram,
  Linkedin,
  Mail,
  Mic,
  Play,
  Sparkles,
  Youtube,
} from "lucide-react";
import Seo from "@/components/Seo";
import { Ground, Header, FloatCTA, Footer } from "@/v3/Chrome";
import { STRIPE, CALENDLY, YOUTUBE } from "@/content/offers";
import { POSTS } from "@/content/posts";

/**
 * /links — v3 link-in-bio. Black ground, ghosts + flares from shared Chrome,
 * white-bordered cards, red aimed at action only. Every offer row carries its
 * live Stripe/Calendly/YouTube link.
 */

const links = {
  site: "https://paulabram.io",
  assessment: "/assessment/",
  classVideo: "https://youtu.be/70Bmqrrj2ts",
  classThumb: "https://i.ytimg.com/vi/70Bmqrrj2ts/sddefault.jpg",
  instagram: "https://www.instagram.com/paulabramofficial/",
  linkedin:
    "https://www.linkedin.com/in/paulabram-personal-fascia-trainer-0bb170409/",
  email: "mailto:hello@paulabram.io",
  guide: "https://fascia.paulabram.io/guide/",
  blog: "/blog",
};

const offers = [
  { name: "The Daily Practice", price: "Free", href: YOUTUBE },
  { name: "The Programme", price: "£39 /month", href: STRIPE.programme },
  { name: "The 7 Day Programme", price: "£49 one-off", href: STRIPE.sevenDay },
  { name: "The Coaching", price: "£149 /month", href: STRIPE.coaching },
  { name: "The Training", price: "£392 /month", href: STRIPE.training },
  { name: "The Intensive", price: "£588 /month", href: STRIPE.intensive },
  { name: "Online Session", price: "£65", href: STRIPE.online },
  { name: "In-Person Session", price: "£75", href: STRIPE.inPerson },
];

const books = [
  {
    title: "Hypnotised to Death",
    price: "£7.99",
    img: "/images/books/hypnotised.jpg",
    href: "https://www.amazon.co.uk/Hypnotised-Death-Trance-Ending-paul-abram/dp/B0DTY9HB1C/",
  },
  {
    title: "Awaken Your True Potential",
    price: "£5.99",
    img: "/images/books/awaken.jpg",
    href: "https://www.amazon.co.uk/Awaken-Your-True-Potential-Addressing/dp/B0DWK456W4/",
  },
  {
    title: "The Night Shift",
    price: "£3.99",
    img: "/images/books/night-shift.jpg",
    href: "https://www.amazon.co.uk/gp/product/B0DKW6QPZG/",
  },
];

const press = [
  {
    title: "Your Body Is the Channel",
    show: "Apple Podcasts",
    href: "https://podcasts.apple.com/gb/podcast/your-body-is-the-channel/id1535728757?i=1000796446802",
  },
  {
    title: "The Missing Link Between Fascia, Intuition and Purpose",
    show: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/the-missing-link-between-fascia-intuition-and-purpose/id1895388754?i=1000780885584",
  },
  {
    title: "Is Fascia Manifested Consciousness",
    show: "The Jörni Podcast, Ep 423",
    href: "https://thejornipodcast.com/episode-423-is-fascia-manifested-consciousness-with-paulabram/",
  },
  {
    title: "The Signal Beneath the Distortion",
    show: "Remembering the Forgotten, Ep 68",
    href: "https://youtu.be/E7xvCDu4UEQ",
  },
];

const startHere = [
  { label: "Watch free fascia lessons", href: YOUTUBE },
  { label: "Join the live class — 7:00 a.m. UK time", href: YOUTUBE },
  { label: "Take the free assessment", href: links.assessment },
  { label: "Book a 20-minute call", href: CALENDLY },
];

const aroundWeb = [
  { label: "paulabram.io", href: links.site },
  { label: "Work with me", href: "/work-with-me" },
  { label: "The story", href: "/story" },
  { label: "The Guarded Body — the blog", href: links.blog },
  { label: "YouTube — The Grounded Man", href: YOUTUBE },
  { label: "Instagram", href: links.instagram },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Email me", href: links.email },
];

function Kicker({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="g3-lk">
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default function Links() {
  return (
    <div className="g3">
      <Seo
        title="Links"
        description="Everything PaulAbram in one place — the free daily class, the books, the podcasts, and the ways to work together."
      />
      <Ground />
      <div className="g3-page">
        <Header current="links" />
        <main>
          {/* Profile head */}
          <section className="g3-links-head">
            <img
              className="avatar"
              src="/images/profile-porthole.jpg"
              alt="PaulAbram"
            />
            <h1>PaulAbram</h1>
            <div className="g3-links-sub">Fascia Personal Trainer</div>
            <p className="g3-links-bio">
              Personal training for your fascia, not your muscles. Free live
              class every morning at 7:00 a.m. UK time.
            </p>
            <div className="g3-links-social">
              <a href={YOUTUBE} aria-label="YouTube"><Youtube size={26} /></a>
              <a href={links.instagram} aria-label="Instagram"><Instagram size={26} /></a>
              <a href={links.linkedin} aria-label="LinkedIn"><Linkedin size={26} /></a>
              <a href={links.email} aria-label="Email"><Mail size={26} /></a>
            </div>
          </section>

          <div className="g3-links-grid">
            {/* Work together */}
            <section className="g3-lcard">
              <Kicker icon={<Calendar size={16} />}>Work with PaulAbram</Kicker>
              <h3>Ways to work together</h3>
              <div>
                {offers.map((o) => (
                  <a key={o.name} href={o.href} className="g3-lrow" target="_blank" rel="noopener noreferrer">
                    <span>{o.name}</span>
                    <span className="p">{o.price}</span>
                  </a>
                ))}
              </div>
              <a className="g3-lbtn" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                Start with a 20-minute call →
              </a>
              <p className="g3-lnote">Every link goes straight to the booking or payment page.</p>
            </section>

            {/* Free guide */}
            <section className="g3-lcard">
              <Kicker icon={<BookOpen size={16} />}>Free guide</Kicker>
              <h3>New here? Start with this.</h3>
              <a href={links.guide} target="_blank" rel="noopener noreferrer">
                <img
                  className="thumb"
                  src="/images/guide-cover.jpg"
                  alt="New Here? Start With This — free fascia guide"
                />
              </a>
              <p className="g3-lbody">
                Twelve pages, mostly pictures — what fascia is, why your body
                holds on, and four gentle manoeuvres you can try today.
              </p>
              <a className="g3-lbtn" href={links.guide} target="_blank" rel="noopener noreferrer">
                Get your free guide →
              </a>
            </section>

            {/* Free daily class */}
            <section className="g3-lcard">
              <Kicker icon={<Play size={16} />}>Video</Kicker>
              <h3>The free daily class</h3>
              <a className="g3-lvideo" href={links.classVideo} target="_blank" rel="noopener noreferrer">
                <img className="thumb" src={links.classThumb} alt="Free fascia class on YouTube" />
                <span className="playbadge"><Play size={22} fill="currentColor" /></span>
              </a>
              <p className="g3-lbody">
                Live and free every morning, 7:00 a.m. UK time, on The Grounded
                Man — my YouTube channel.
              </p>
            </section>

            {/* Story */}
            <section className="g3-lcard">
              <Kicker icon={<BookOpen size={16} />}>Story</Kicker>
              <h3>My story</h3>
              <a href="/story">
                <img className="thumb" src="/images/paul-chair.jpg" alt="PaulAbram's story" />
              </a>
              <p className="g3-lbody">
                Twenty years in the military, the dark days that followed, and
                the eighteen years between the mind and the body.
              </p>
              <a className="g3-lbtn ghost" href="/story">Read the story →</a>
            </section>

            {/* The Guarded Body — the blog, every post */}
            <section className="g3-lcard">
              <Kicker icon={<BookOpen size={16} />}>The blog</Kicker>
              <h3>The Guarded Body</h3>
              <div>
                {POSTS.map((p) => (
                  <a key={p.slug} href={`/blog/${p.slug}`} className="g3-lrow press">
                    <span>
                      <span className="bt">{p.title}</span>
                      <span className="bs">{p.date}</span>
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
              <a className="g3-lbtn ghost" href="/blog">All posts →</a>
            </section>

            {/* Books */}
            <section className="g3-lcard">
              <Kicker icon={<BookOpen size={16} />}>Shop</Kicker>
              <h3>Books by PaulAbram</h3>
              <div>
                {books.map((b) => (
                  <a key={b.title} href={b.href} className="g3-lrow book" target="_blank" rel="noopener noreferrer">
                    <img src={b.img} alt={b.title} />
                    <span className="bt">{b.title}</span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
              <p className="g3-lnote">
                The books are the waking up. The fascia work is the living it.
              </p>
            </section>

            {/* Press */}
            <section className="g3-lcard">
              <Kicker icon={<Mic size={16} />}>Press</Kicker>
              <h3>Podcast conversations</h3>
              <div>
                {press.map((p) => (
                  <a key={p.title} href={p.href} className="g3-lrow press" target="_blank" rel="noopener noreferrer">
                    <span>
                      <span className="bt">{p.title}</span>
                      <span className="bs">{p.show}</span>
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
            </section>

            {/* Start here */}
            <section className="g3-lcard">
              <Kicker icon={<Sparkles size={16} />}>Start here</Kicker>
              <h3>Not sure where to begin?</h3>
              <div>
                {startHere.map((s) => (
                  <a key={s.label} href={s.href} className="g3-lrow" target="_blank" rel="noopener noreferrer">
                    <span>{s.label}</span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
            </section>

            {/* Around the web */}
            <section className="g3-lcard">
              <Kicker icon={<ArrowUpRight size={16} />}>Links</Kicker>
              <h3>PaulAbram around the web</h3>
              <div>
                {aroundWeb.map((l) => (
                  <a key={l.label} href={l.href} className="g3-lrow" target="_blank" rel="noopener noreferrer">
                    <span>{l.label}</span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}
