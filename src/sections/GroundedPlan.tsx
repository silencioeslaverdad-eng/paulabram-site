const START = new Date("2026-06-16T07:00:00+01:00").getTime();
const day = Math.max(1, Math.floor((Date.now() - START) / 86400000) + 1);

export default function GroundedPlan() {
  return (
    <section className="border-b border-ink/15 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <p className="mb-8 font-mono text-[12px] uppercase tracking-[0.22em] text-fog">
            The Grounded Plan — on YouTube
          </p>
          <p className="stretch-wide font-display text-[clamp(1.5rem,3vw,2rem)] font-black uppercase leading-tight">
            One live practice.
            <br />
            Every morning.
            <br />
            Free — for a year.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-10 md:col-span-7">
          <div className="flex items-baseline gap-4">
            <span className="stretch-wide font-display text-[clamp(3rem,8vw,6rem)] font-black leading-none text-ember">
              {day}
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-fog">
              of 365 days live
            </span>
          </div>

          <div className="max-w-[58ch]">
            <p className="text-base leading-relaxed text-paper/80 md:text-lg">
              I committed to 365 days of live practice, free, so anyone can
              experience what this work does — not read about it, do it. Live
              at 7am BST every morning, with Sunday Q&amp;As where you can ask
              me anything. Not quite halfway. Not stopping.
            </p>
            <a
              href="https://www.youtube.com/@TheGroundedMan-TV"
              className="stretch-semi mt-8 inline-block bg-paper px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ember hover:text-ink"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
