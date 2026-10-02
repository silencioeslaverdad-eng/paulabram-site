const HANDS = [
  "hand-12.49.24.jpg",
  "hand-12.49.39.jpg",
  "hand-12.51.16.jpg",
  "hand-12.52.42.jpg",
  "hand-12.52.50.jpg",
  "hand-12.53.40.jpg",
  "hand-12.53.48.jpg",
  "hand-12.54.03.jpg",
  "hand-12.55.40.jpg",
];

export default function Proof() {
  return (
    <section id="words" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-8 font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
              In a client's words
            </p>

            <blockquote className="stretch-semi font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-bold leading-[1.15]">
              “
              <span className="text-ink/40">
                I'm genuinely in awe of your strength and perseverance. It
                inspires me to see someone who has been through physical pain
                and yet continues to show up every day and give their best to
                others.
              </span>
              ”
            </blockquote>

            <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.18em] text-smoke">
              Private coaching client — shared with permission
            </p>

            <p className="mt-4">
              <a
                href="https://paulabram.blogspot.com/"
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay"
              >
                More words on the blog →
              </a>
            </p>

            <div className="mt-14 border-t border-ink/15 pt-6">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
                The facts
              </p>
              <p className="font-mono text-[13px] uppercase leading-loose tracking-[0.12em] text-ink/75">
                Author — Hypnotised to Death · 20 years, British military ·
                Human Garage Certified Coach, Fascia Manoeuvres
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <figure>
              <div className="grid grid-cols-3 gap-2">
                {HANDS.map((src) => (
                  <img
                    key={src}
                    src={`/images/hands/${src}`}
                    alt="PaulAbram working hands-on with a client"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                ))}
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
                The hands-on work — Fascia Manoeuvres, in person
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
