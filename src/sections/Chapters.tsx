const chapters = [
  {
    n: "01",
    title: "The edge",
    body: "In Portugal, I tried to end my life. Alone in a hospital bed in a windowless room, bleeding out. One sentence came through: \u201CYou cannot take a life that is not yours to take.\u201D That wasn't the cure. It wasn't the end I expected. It was the beginning I hadn't considered.",
    care: true,
  },
  {
    n: "02",
    title: "The long work",
    body: "Years of honest, emotional and psychological work followed. Identity. Faith. Divorce. A real commitment to my children — raising my youngest daughters on my own. The end of two decades of military life. Real progress — and yet something still held on.",
    care: false,
  },
  {
    n: "03",
    title: "The body",
    body: (
      <>
        Thirteen years later, fascia showed me where the holding{" "}
        <em className="italic">on</em> was. Not in my mind at all — in my
        body. What I was holding could only be let out through the body. That
        discovery became the work I do now.
      </>
    ),
    care: false,
    featured: true,
  },
];

export default function Chapters() {
  return (
    <section id="story" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="stretch-wide font-display text-[clamp(1.5rem,3vw,2rem)] font-black uppercase leading-none">
              The story
            </h2>
            <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.2em] text-smoke">
              Told plainly, because the facts carry it
            </p>
          </div>
          <figure className="w-36 md:w-44">
            <img
              src="/images/portrait-story.jpg"
              alt="PaulAbram, by the window"
              className="aspect-[4/5] w-full border border-ink/15 object-cover object-top"
            />
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-smoke">
              Newark-on-Trent
            </figcaption>
          </figure>
        </div>

        <div className="border-t border-ink/15">
          {chapters.map((c) => (
            <article
              key={c.n}
              className="grid gap-4 border-b border-ink/15 py-10 md:grid-cols-12 md:gap-8"
            >
              <span
                className={`font-mono text-sm md:col-span-1 ${
                  c.featured ? "text-clay" : "text-smoke"
                }`}
              >
                {c.n}
              </span>
              <h3
                className={`stretch-semi font-display uppercase leading-tight md:col-span-4 ${
                  c.featured
                    ? "text-[clamp(1.25rem,2.4vw,1.5rem)] font-black text-clay"
                    : "text-[clamp(1.2rem,2.2vw,1.5rem)] font-extrabold"
                }`}
              >
                {c.title}
              </h3>
              <div className="md:col-span-7">
                <p className="max-w-[58ch] text-lg leading-relaxed text-ink/80">
                  {c.body}
                </p>
                {c.care && (
                  <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-smoke">
                    If you're in crisis right now — Samaritans, 116 123. Free,
                    UK, 24 hours.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8">
          <a
            href="/story"
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay"
          >
            Read the full story →
          </a>
        </p>
      </div>
    </section>
  );
}
