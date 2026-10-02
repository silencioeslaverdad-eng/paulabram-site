export default function Hero() {  return (
    <section id="top" className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 pt-12 md:grid-cols-12 md:px-10 md:pb-24 md:pt-20">
        {/* Type column */}
        <div className="flex flex-col justify-between md:col-span-7">
          <div>
            <p className="mb-8 font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
              <span className="block">Nervous system regulation</span>
              <span className="block">Fascia — Grounding</span>
            </p>

            <h1 className="font-display leading-[0.95]">
              <span className="stretch-wide block text-[clamp(2.25rem,5vw,3.75rem)] font-black uppercase tracking-[-0.01em]">
                I did all
                <br />
                the work
              </span>
              <span className="mt-3 block text-[clamp(1.15rem,2vw,1.5rem)] font-medium leading-tight text-ink/85">
                But I was still{" "}
                <span className="stretch-semi font-display font-extrabold text-clay">
                  holding on.
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-ink/80 md:text-xl">
              The last part of my healing wasn't in my mind, it was in my
              body. I help people release what they're holding, physically and
              emotionally, so that they can stop hiding, stop reacting, and
              live an emotionally regulated life.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="stretch-semi bg-ink px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-clay"
              >
                Book a conversation
              </a>
              <a
                href="#story"
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink underline decoration-clay decoration-2 underline-offset-8 transition-colors hover:text-clay"
              >
                Read the story
              </a>
            </div>
          </div>

          <p className="mt-12 font-mono text-[12px] uppercase tracking-[0.18em] text-smoke">
            A short form, then a personal reply from me. Usually within two
            working days.
          </p>
        </div>

        {/* Photo column */}
        <div className="md:col-span-5">
          <figure className="border border-ink/15">
            <img
              src="/images/hero-portrait.jpg"
              alt="PaulAbram, natural light portrait"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke">
            PaulAbram — fascia personal trainer
          </p>
        </div>
      </div>

      {/* Chapter strip */}
      <div className="border-t border-ink/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke md:px-10">
          <span>Three chapters</span>
          <span aria-hidden className="text-clay">
            →
          </span>
          <span>The edge</span>
          <span aria-hidden className="text-clay">
            →
          </span>
          <span>The long work</span>
          <span aria-hidden className="text-clay">
            →
          </span>
          <span>The body</span>
          <span className="ml-auto hidden md:inline">
            Thirteen years apart, not one moment
          </span>
        </div>
      </div>
    </section>
  );
}
