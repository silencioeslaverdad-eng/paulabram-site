import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import VideoEmbed from '../components/VideoEmbed'
import { CALENDLY_URL } from '../components/Layout'
import LiveCounter from '../components/LiveCounter'
import portrait from '../assets/paul-terrace.jpg'

const SYMPTOMS = [
  'A jaw, neck or shoulders that never fully let go',
  'Wired but tired. Exhausted all day, wide awake at midnight',
  'Breath that stays shallow, no matter how much you meditate',
  'A flatness where your energy used to live',
  'Doing everything right; still feeling wrong',
  'Snapping at people you love, then carrying the guilt of it',
]

const STEPS = [
  {
    n: '01',
    title: 'Release',
    body: 'We start with the body, not the story. Using simple, self-led Fascial Maneuvers, you learn to find where stress has been holding and let it go. No forcing, no digging up the past. The body lets go when it feels safe, so that is where we begin.',
  },
  {
    n: '02',
    title: 'Regulate',
    body: 'Once the tension starts to move, we work with your nervous system. You learn why your breath, posture and sleep behave the way they do under pressure, and how to bring yourself back to level ground. Practical tools you keep for life.',
  },
  {
    n: '03',
    title: 'Reconstruct',
    body: 'With a calmer system underneath you, we rebuild. Sleep, energy, patience, presence. The things stress quietly took, put back where they belong. Not a nicer way to cope; a different baseline to live from.',
  },
]

const TESTIMONIALS = [
  {
    quote: "I'm genuinely in awe of your strength and perseverance. It inspires me to see someone who has been through physical pain and yet continues to show up every day and give their best to others.",
    name: 'Private coaching client',
    context: 'One-to-one programme',
  },
  {
    quote: "I'm feeling much better today, and I've also been practicing what you've taught me. I'm genuinely excited to see how this unfolds.",
    name: 'Private coaching client',
    context: 'One-to-one programme',
  },
  {
    quote: 'Fantastic weekend, brilliant team of facilitators, amazing group of people. The experience has changed my life for the better.',
    name: 'Danny',
    context: 'Retreat participant',
  },
  {
    quote: 'Came on this morning and Paul well has hurt himself and still showing up for us that just melts my soul really does how caring one person can be to all',
    name: 'Class participant',
    context: 'Live class',
  },
]

const PROOF = [
  { stat: '13', label: 'Years coaching' },
  { stat: '300+', label: 'Classes taught since May' },
  { stat: '20+', label: 'Years of military service' },
  { stat: '3', label: 'Books published' },
]

const FAQS = [
  {
    q: 'Is this therapy?',
    a: 'No. This is coaching and body-led self-release work. I am a qualified hypnotherapist and NLP coach, and Human Garage qualified, but this does not replace counselling, psychotherapy or medical care. Many clients do this alongside therapy; the two work well together.',
  },
  {
    q: 'Is it massage or bodywork?',
    a: 'No. Nobody works on you. You learn to use the maneuvers on your own body, guided by me. The point is that the change belongs to you, so it stays with you after the session ends.',
  },
  {
    q: 'Do I need to be fit or flexible?',
    a: 'No. The maneuvers are gentle and self-paced. I work with people living with long-term pain, old injuries and limited mobility, including complex cases. Your body sets the pace, not me.',
  },
  {
    q: 'I have tried everything. Why would this be different?',
    a: 'Most approaches work from the mind down: thinking, talking, reframing. This works from the body up. If your stress is held as physical tension, and for most people it is, then no amount of thinking reaches it. Movement does. That is the difference.',
  },
  {
    q: 'Where do sessions happen?',
    a: 'Online, worldwide, over video. In person around Newark-on-Trent and Nottingham for local clients. The free 28-Day Reset runs on YouTube, with a live practice at 7am BST every morning and live Q&As every Sunday.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Body-Led Stress & Burnout Coaching | PaulAbram — Somatic Coach, Nottingham UK"
        description="Wired, tired, tried everything? Body-led coaching that releases the stress your body has been holding. Human Garage qualified. Nottingham UK & online. Book a free clarity session."
        path="/"
      />

      {/* HERO */}
      <section className="container-site grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow mb-6">Body-led coaching for stress & burnout</p>
          <h1 className="font-display text-4xl font-medium leading-[1.15] md:text-5xl lg:text-[3.4rem]">
            You can't think your way out of stress that lives in your body.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            If you are wired, tired and running on empty, and nothing you have tried has held,
            there is a reason. Stress is not just in your head. It is held in your tissue, your
            breath, your posture. I teach you to release it there.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Free Clarity Session
            </a>
            <a
              href="https://www.youtube.com/@TheGroundedMan-TV"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Start the Free Reset on YouTube
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-7">
            <div className="cred-mark">
              <p className="text-sm font-semibold">Human Garage</p>
              <p className="text-[13px] text-soft">Qualified practitioner</p>
            </div>
            <div className="cred-mark">
              <p className="text-sm font-semibold">13 years coaching</p>
              <p className="text-[13px] text-soft">Hypnotherapy, NLP, energy work</p>
            </div>
            <div className="cred-mark">
              <p className="text-sm font-semibold">20+ years military</p>
              <p className="text-[13px] text-soft">Royal Engineers & RAF</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-5 band-stone">
          <VideoEmbed
            id="Pr_DdeW4D2A"
            title="Start here, an introduction to body-led coaching with PaulAbram"
          />
          <p className="mt-4 text-center text-[13px] text-soft">
            The 100-second version. Then start the free reset.
          </p>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section style={{ background: 'rgb(var(--slate))' }}>
        <div className="container-site grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4">
          {PROOF.map((p) => (
            <div key={p.label} className="text-center">
              <p className="font-display text-4xl font-medium text-white md:text-5xl">{p.stat}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgb(246 245 242 / 0.65)' }}>
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="band-stone py-20">
        <div className="container-site">
          <p className="eyebrow mb-4">Sound familiar?</p>
          <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
            Your body has been keeping score for years.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SYMPTOMS.map((s) => (
              <div key={s} className="card !p-6">
                <p className="leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-soft">
            None of these are character flaws. They are what a nervous system looks like after
            years of guarding. Your body tightened to protect you, probably a long time ago,
            and nobody ever told it the war was over. So it kept holding. That is all this is.
          </p>
        </div>
      </section>

      {/* REFRAME */}
      <section className="container-site py-20 text-center">
        <p className="font-display mx-auto max-w-3xl text-3xl font-medium leading-snug md:text-4xl">
          "I was doing everything right.
          <span className="text-gold"> But I still felt wrong."</span>
        </p>
        <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-soft">
          Exercise, supplements, meditation, mindset work. All good things. None of them reach
          the place where stress actually lives. You cannot stretch a clenched jaw with a
          positive thought. You cannot affirm your way out of a guarded chest. The way in is
          through the body, and it is simpler than you think.
        </p>
      </section>

      {/* METHOD */}
      <section className="band-stone py-20">
        <div className="container-site">
          <p className="eyebrow mb-4">The method</p>
          <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
            Release. Regulate. Reconstruct.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-soft">
            A grounded progression, not a mystery. Qualified with Human Garage, shaped by more
            than twenty years of my own rebuilding.
          </p>
          <div className="mt-12 border-t" style={{ borderColor: 'rgb(var(--line))' }}>
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="grid gap-2 border-b py-8 md:grid-cols-[90px_220px_1fr] md:gap-8 md:py-9"
                style={{ borderColor: 'rgb(var(--line))' }}
              >
                <p className="font-display text-3xl font-light italic text-gold">{step.n}</p>
                <h3 className="font-display text-2xl font-medium">{step.title}</h3>
                <p className="leading-relaxed text-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GROUNDED PLAN — LIVE COUNTER */}
      <LiveCounter />

      {/* STORY BRIDGE */}
      <section className="container-site py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="rounded-lg p-5 band-stone">
            <img
              src={portrait}
              alt="PaulAbram, somatic coach, seated outdoors with hills behind him"
              className="w-full rounded object-cover"
              style={{ aspectRatio: '4/4.4' }}
            />
            <p className="mt-4 text-center text-[13px] text-soft">
              PaulAbram · Somatic coach · Nottingham, UK
            </p>
          </div>
          <div>
            <p className="font-display text-3xl font-medium leading-snug md:text-4xl">
              I know this terrain because I nearly didn't make it back from it.
            </p>
            <div className="prose-site mt-6">
              <p>
                I spent over twenty years in the military, including service as an RAF Officer.
                Structure, rank, duty; I was very good at holding it together. Then my body
                stopped asking politely. Injury, CPTSD, addiction, and eventually the edge of
                suicide.
              </p>
              <p>
                What brought me back was not thinking. It was learning, slowly, to release what
                my body had been holding for decades. That rebuilding became my work. I trained,
                I qualified with Human Garage, and now I help other people find the same way
                back, without having to go as far down as I did.
              </p>
            </div>
            <Link to="/about" className="btn-ghost mt-4">
              Read my full story
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="band-stone py-20">
        <div className="container-site">
          <p className="eyebrow mb-4">What people say</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <figure key={`${t.name}-${i}`} className="card">
                <blockquote className="leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm text-gold">
                  {t.name} <span className="text-soft">· {t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS STRIP */}
      <section className="container-site py-20">
        <p className="eyebrow mb-4">Ways to start</p>
        <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
          Three doors in. Pick the one that fits.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="card flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Free to start</p>
            <h3 className="font-display mt-3 text-2xl font-medium">The 28-Day Reset</h3>
            <p className="mt-3 flex-1 leading-relaxed text-soft">
              Twenty-eight days of short, guided practices. Free to start with follow-along
              videos on YouTube and live Sunday Q&As. Guided community and private bespoke
              versions when you want more of me alongside you.
            </p>
            <Link to="/work-with-me" className="btn-ghost mt-6">
              See the three versions
            </Link>
          </div>
          <div className="card flex flex-col" style={{ borderColor: 'rgb(var(--slate))', borderWidth: 2 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Best first step</p>
            <h3 className="font-display mt-3 text-2xl font-medium">Body-Led Clarity Session</h3>
            <p className="mt-3 flex-1 leading-relaxed text-soft">
              One-to-one. We map what you are carrying and where it sits in your body, and you
              leave with an honest recommendation for your next step. No pitch either way.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              Book a Clarity Session
            </a>
          </div>
          <div className="card flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Deep work</p>
            <h3 className="font-display mt-3 text-2xl font-medium">Rebuild From the Body Up</h3>
            <p className="mt-3 flex-1 leading-relaxed text-soft">
              My 12-week programme for deeper stress, trauma and life transition. Structured,
              one-to-one, body-led. For when you are ready to do the work properly.
            </p>
            <Link to="/work-with-me" className="btn-ghost mt-6">
              Explore the programme
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band-stone py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow mb-4">Honest answers</p>
          <h2 className="font-display text-3xl font-medium md:text-4xl">Common questions</h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="card group !p-6">
                <summary className="cursor-pointer list-none font-semibold leading-relaxed">
                  {f.q}
                  <span className="float-right text-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24" style={{ background: 'rgb(var(--slate))' }}>
        <div className="container-site text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-medium leading-snug text-white md:text-4xl">
            You have been strong for long enough.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed" style={{ color: 'rgb(246 245 242 / 0.75)' }}>
            One conversation. We map what you are carrying, and you leave knowing exactly what
            your next step is, whether that is with me or not.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-9 !bg-white"
            style={{ color: 'rgb(var(--slate))' }}
          >
            Book a Free Clarity Session
          </a>
        </div>
      </section>
    </>
  )
}
