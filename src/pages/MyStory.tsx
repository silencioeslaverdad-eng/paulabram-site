import Seo from "@/components/Seo";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const chapters = [
  {
    n: "01",
    title: "The edge",
    care: true,
    body: (
      <>
        <p>
          In Portugal, I tried to end my life. I was revived at home and taken
          to hospital, and from the ward I was moved into a spare room with no
          windows. I needed the dark. Alone in that room, I opened a vein in my
          wrist and began to bleed out.
        </p>
        <p className="mt-6">
          This was not my first time at that edge. It was the third. The second
          only twenty-four hours earlier. At the time, I really did just want it
          all to stop. The noise, the pain, the masking and hiding. Over twenty
          years of duty, of being the capable one, of overriding everything my
          body was trying to say. It had cost, and that cost came due all at
          once.
        </p>
        <p className="mt-6">
          And one sentence came through, as clear as anything I have ever
          heard:
        </p>
        <p className="stretch-semi mt-6 font-display text-[clamp(1.25rem,2.6vw,1.7rem)] font-black uppercase leading-tight text-clay">
          You cannot take a life that is not yours to take.
        </p>
        <p className="mt-6">I asked if I had a purpose.</p>
        <p className="mt-6">The answer came back: live, and find out.</p>
        <p className="mt-6">
          That was not a cure. It was not the ending I expected. It was the
          beginning I had not considered.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "The long work",
    body: (
      <>
        <p>
          What followed was not a miracle — not in the true sense, or not in
          the way we usually mean it, anyway. It was work. But it was real
          work. Learning, researching, an almost pathological desire to uncover
          what was real. I am not someone who tried one thing and found it
          wanting. I did the things.
        </p>
        <p className="mt-6">
          I did not know who I was. I had to find out. I did not know what I
          believed in — what, in the end, I actually believed. I searched
          through faith. Then came the end of that military life, and with it
          the loss of the self that had been earned and proven and worn,
          something like body armour. When the uniform came off, the ground
          went with it for a while.
        </p>
        <p className="mt-6">
          Years later came my mother's sudden death. I found her, and I could
          not bring her back.
        </p>
        <p className="mt-6">
          And there was addiction, and recovery from it, and CPTSD that nobody
          named at the time. Much later came the ADHD diagnosis — late, as it
          so often is — and with it a different understanding of my whole
          life. The masking, the overriding, the need to be the capable one:
          none of it was character. It was neurology, doing its best. I say it
          here because someone reading this will recognise themselves. A lot of
          veterans do.
        </p>
        <p className="mt-6">
          And I was being a dad, properly, for the first time. It was all up to
          me. I was the one at home. I was the one who ended up taking the
          children — my daughters. Being the parent who is always there to two
          young girls is a kind of pressure nothing prepares you for. Nobody
          can show you. I spent nearly a decade raising them on my own —
          homeschooling, growing our own food, being the carer, sometimes
          mother and father. Learning to be the very thing I had not been, not
          truly, while I was in the military.
        </p>
        <p className="mt-6">
          I would not trade those years for anything. They taught me a strength
          that does not oppose gentleness. They coexist. And most of what I
          know about holding a safe space, I learned in a kitchen with my
          girls.
        </p>
      </>
    ),
    after: (
      <p className="mt-6">Real progress. At least, that is what I thought.</p>
    ),
  },
  {
    n: "03",
    title: "The body",
    featured: true,
    body: (
      <>
        <p>
          Thirteen years later — to my complete surprise — it was the body I
          had been ignoring all that time that showed me what had been
          happening. I need to be precise about this. That is the whole point.
        </p>
        <p className="mt-6">
          The years of work were not wasted. I am not telling you that thinking
          does nothing. I am telling you what happened to me. Yes, I had
          understood my patterns. Yes, I had named them, forgiven them, even
          outgrown most of them. But my body was keeping the score in a
          language I had not learned to read. Tissue — especially the fascia —
          does not release because you have finished the sentence about it.
        </p>
        <p className="mt-6">
          My spine had been failing since I was eleven, a compression they did
          not even understand until I was twenty-four. And I masked it with the
          stoic bravado you would expect of a traumatised boy who was expected
          to be the tough one, all the time. I performed at a high level over
          the top of it for decades. Nobody knew. I barely knew. The body kept
          its own accounts, and it was always balanced.
        </p>
        <p className="mt-6">
          What I was holding could only be let out through that body — through
          movement, aided by breath, and the slow, deliberate release of what
          my system had been guarding for years. When I found the fascia work,
          and then Human Garage with Fascia Manoeuvres, I finally had the
          method that matched the truth I had lived. The last part of healing
          was physical, and it could be learned.
        </p>
        <p className="mt-6">That discovery became the work I do now.</p>
        <p className="stretch-semi mt-10 font-display text-[clamp(1.25rem,2.6vw,1.7rem)] font-black uppercase leading-tight">
          I did all the work. I was still holding it.
        </p>
        <p className="mt-6 text-clay">
          The last part of my healing was not in my mind. It was in my body —
          and that is where I work with people.
        </p>
      </>
    ),
  },
];

export default function MyStory() {
  return (
    <>
      <Seo
        title="My Story"
        description="Portugal, the edge, and the thirteen years between the mind and the body. The story behind the work, told plainly."
      />
      <Header />
      <main>
        {/* Page head */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
              My story
            </p>
            <h1 className="stretch-wide max-w-[16ch] font-display text-[clamp(2.2rem,5.5vw,4rem)] font-black uppercase leading-[0.95]">
              The story behind the work
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/80">
              Told plainly, because the facts carry it. This is why the work
              exists.
            </p>
            <p className="mt-4 max-w-[52ch] font-mono text-[12px] uppercase tracking-[0.2em] text-smoke">
              This is the longer version. Nobody lands here by accident — so
              take your time.
            </p>
          </div>
        </section>

        {/* The three chapters */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            {chapters.map((c) => (
              <article
                key={c.n}
                className="grid gap-4 border-b border-ink/15 py-12 md:grid-cols-12 md:gap-8 md:py-16"
              >
                <span
                  className={`font-mono text-sm md:col-span-1 ${
                    c.featured ? "text-clay" : "text-smoke"
                  }`}
                >
                  {c.n}
                </span>
                <h2
                  className={`stretch-semi font-display uppercase leading-tight md:col-span-4 ${
                    c.featured
                      ? "text-[clamp(1.4rem,2.6vw,1.8rem)] font-black text-clay"
                      : "text-[clamp(1.3rem,2.4vw,1.7rem)] font-extrabold"
                  }`}
                >
                  {c.title}
                </h2>
                <div className="md:col-span-7">
                  <div className="max-w-[58ch] text-lg leading-relaxed text-ink/80">
                    {c.body}
                    {c.after}
                  </div>
                  {c.care && (
                    <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-smoke">
                      If you are in crisis right now, call Samaritans free on
                      116 123, or 999. You matter more than this story.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How I work */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="stretch-semi font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-extrabold uppercase leading-tight">
                  How I work
                </h2>
                <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.2em] text-smoke">
                  Tested on myself first, always
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="max-w-[58ch] text-lg leading-relaxed text-ink/80">
                  <p>
                    I am monotropic: I go all the way into one thing rather
                    than skimming many. I learn by direct experience, tested on
                    myself first — always. I do not teach what I have read. I
                    teach what I have lived, and what I have watched happen
                    with the people I work with.
                  </p>
                  <p className="mt-6">
                    Fasting, stillness, long silences. Not to be impressive —
                    because I cannot ask anyone to do what I have not done.
                  </p>
                  <p className="stretch-semi mt-10 font-display text-[clamp(1.25rem,2.6vw,1.7rem)] font-black uppercase leading-tight">
                    You cannot think your way out of physical tension. You have
                    to move your way through it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where this leaves me */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="stretch-semi font-display text-[clamp(1.3rem,2.4vw,1.7rem)] font-extrabold uppercase leading-tight">
                  Where this leaves me
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="max-w-[58ch] text-lg leading-relaxed text-ink/80">
                  <p>
                    I once thought I was broken. I now know I was always whole —
                    and that most of what was wrong was charge in a body that
                    had never been allowed to discharge. Protection I no longer
                    needed — or need — and tension that has outlived its
                    reason.
                  </p>
                  <p className="mt-6">
                    I think that is true of most of the people who come to me,
                    too. They are not broken. They are holding.
                  </p>
                  <p className="mt-6">
                    The choice to put it down is always yours. I can show you
                    where your hands are gripping. I cannot let go for you —
                    nobody can. But you do not have to figure out the mechanics
                    alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The books */}
        <section className="border-b border-ink/15">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <div className="mb-12">
              <h2 className="stretch-wide font-display text-[clamp(1.5rem,3vw,2rem)] font-black uppercase leading-none">
                The books
              </h2>
              <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.2em] text-smoke">
                Everything in them was lived first
              </p>
            </div>

            <div className="grid gap-10 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  img: "/images/books/hypnotised.jpg",
                  alt: "Hypnotised to Death book cover",
                  title: "Hypnotised to Death",
                  sub: "Trance-ending freedom",
                  body: "Awakening and liberation from the illusions that bind us — written after twenty years in the military ended in collapse. It dismantles the conditioning that creates suffering and maps the way back to the authentic self.",
                  href: "https://www.amazon.co.uk/Hypnotised-Death-Trance-Ending-paul-abram/dp/B0DTY9HB1C/",
                },
                {
                  img: "/images/books/awaken.jpg",
                  alt: "Awaken Your True Potential book cover",
                  title: "Awaken Your True Potential",
                  sub: "A sobering guide to men's mental health",
                  body: "A raw and transformative guide for men — strength without silence, resilience without repression, and vulnerability as the gateway rather than the weakness.",
                  href: "https://www.amazon.co.uk/Awaken-Your-True-Potential-Addressing/dp/B0DWK456W4/",
                },
                {
                  img: "/images/books/night-shift.jpg",
                  alt: "The Night Shift book cover",
                  title: "The Night Shift",
                  sub: "Manifesting your dream reality while you sleep",
                  body: "A practical guide to using sleep as the most underrated tool for change — feed your intentions to the subconscious at night and let it do the work while you rest.",
                  href: "https://www.amazon.co.uk/gp/product/B0DKW6QPZG/",
                },
              ].map((b) => (
                <article key={b.title} className="flex flex-col">
                  <img
                    src={b.img}
                    alt={b.alt}
                    loading="lazy"
                    className="aspect-[2/3] w-2/3 border border-ink/15 object-cover sm:w-full"
                  />
                  <h3 className="stretch-semi mt-6 font-display text-xl font-extrabold uppercase leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                    {b.sub}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ink/80">
                    {b.body}
                  </p>
                  <p className="mt-5">
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay"
                    >
                      Get the book →
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quiet next steps */}
        <section>
          <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
            <a
              href="/work-with-me"
              className="group flex flex-col gap-2 border-b border-ink/15 px-5 py-8 transition-colors hover:bg-ink hover:text-paper md:border-r md:px-10 md:py-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke transition-colors group-hover:text-fog">
                Ready when you are
              </span>
              <span className="stretch-semi flex items-center justify-between font-display text-lg font-extrabold uppercase md:text-xl">
                Work with me
                <span
                  aria-hidden
                  className="text-clay transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
            <a
              href="https://paulabram.blogspot.com/"
              className="group flex flex-col gap-2 border-b border-ink/15 px-5 py-8 transition-colors hover:bg-ink hover:text-paper md:px-10 md:py-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke transition-colors group-hover:text-fog">
                The longer writing
              </span>
              <span className="stretch-semi flex items-center justify-between font-display text-lg font-extrabold uppercase md:text-xl">
                Read the blog
                <span
                  aria-hidden
                  className="text-clay transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
