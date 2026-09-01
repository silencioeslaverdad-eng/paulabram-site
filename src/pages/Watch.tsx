import Seo from '../components/Seo'
import VideoEmbed from '../components/VideoEmbed'
import { CALENDLY_URL } from '../components/Layout'
import { liveDay } from '../lib/liveDay'

const INTRO_ID = 'Pr_DdeW4D2A'
const START_HERE_LIST = 'PLBxeTMf6DlIU'
const RESET_LIST = 'PLfz0OVQQQ0LTF0rLr0Ot8d5byJQEOvfDK'
const SUBSCRIBE_URL = 'https://www.youtube.com/@TheGroundedMan?sub_confirmation=1'
const KOFI_URL = 'https://ko-fi.com/paulabram'

function PlaylistEmbed({ listId, title }: { listId: string; title: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-md border"
      style={{ aspectRatio: '16/9', borderColor: 'rgb(var(--line))', background: 'rgb(var(--slate))' }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${listId}&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

export default function Watch() {
  return (
    <>
      <Seo
        title="Watch — Videos on Stress, the Body & the 28-Day Reset | PaulAbram"
        description="Watch PaulAbram explain body-led stress work, follow the Start Here series, and join the free 28-Day Reset follow-along videos with a live practice at 7am daily and Sunday Q&As."
        path="/watch"
      />

      <section className="container-site py-20 sm:py-24">
        <p className="eyebrow">Watch</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          The work makes more sense when you can see it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-soft">
          Reading about body-led work only goes so far. These videos show you what it actually
          looks like, who it is for, and how to start.
        </p>
      </section>

      {/* FEATURED INTRO */}
      <section className="container-site pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">Start here</p>
            <h2 className="font-display text-3xl font-medium leading-snug md:text-4xl">
              A hundred seconds that say it better than I can write it.
            </h2>
            <p className="mt-6 leading-relaxed text-soft">
              If you want to know whether the way I work feels right for you, watch this first.
              No pitch. Just what the work is, who it is for, and why I do it.
            </p>
          </div>
          <VideoEmbed id={INTRO_ID} title="Start here, an introduction to body-led coaching with PaulAbram" />
        </div>
      </section>

      {/* START HERE PLAYLIST */}
      <section className="band-stone py-20">
        <div className="container-site">
          <p className="eyebrow mb-4">The foundations</p>
          <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
            The Start Here series.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-soft">
            The core ideas and first practices, in order. Watch one a day and you will understand
            more about your own stress than years of reading will teach you.
          </p>
          <div className="mt-10 max-w-4xl">
            <PlaylistEmbed listId={START_HERE_LIST} title="Start Here playlist" />
          </div>
        </div>
      </section>

      {/* 28-DAY RESET SERIES */}
      <section className="container-site py-20">
        <p className="eyebrow mb-4">Free follow-along</p>
        <h2 className="font-display max-w-2xl text-3xl font-medium leading-snug md:text-4xl">
          The 28-Day Reset, on video.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-soft">
          Every practice in the free reset, filmed so you can follow along at home. Add the live
          practice at 7am BST every morning, today is day {liveDay} of The Grounded Plan, a
          365-day live commitment, and the Sunday Q&As, and you have everything you need to
          start. No cost, no equipment, no experience.
        </p>
        <div className="mt-10 max-w-4xl">
          <PlaylistEmbed listId={RESET_LIST} title="28 Day Reset follow-along series" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'rgb(var(--slate))' }}>
        <div className="container-site text-center">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-medium leading-snug text-white md:text-4xl">
            Watched enough to be curious?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed" style={{ color: 'rgb(246 245 242 / 0.75)' }}>
            The Clarity Session is twenty minutes, free, and one to one. Bring whatever the
            videos stirred up and we will map your next step.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !bg-white"
              style={{ color: 'rgb(var(--slate))' }}
            >
              Book a Free Clarity Session
            </a>
            <a
              href={SUBSCRIBE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !border-white/40 !text-white hover:!border-white hover:!text-white"
            >
              Subscribe on YouTube
            </a>
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !border-white/40 !text-white hover:!border-white hover:!text-white"
            >
              Support on Ko-fi
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
