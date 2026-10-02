const themes = [
  {
    n: "T1",
    title: "Grounding",
    body: "This is where we actually learn to let go.",
  },
  {
    n: "T2",
    title: "Tension → Regulation",
    body: "Coming out of guarding, hyper-vigilance and performance.",
  },
  {
    n: "T3",
    title: "Embodiment",
    body: "Knowing about your hidden patterns is simply not the same as being free of them.",
  },
  {
    n: "T4",
    title: "Authentic self-expression",
    body: "Living from genuine intuition instead of tension.",
  },
];

export default function Themes() {
  return (
    <section id="work" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="stretch-wide font-display text-[clamp(1.5rem,3vw,2rem)] font-black uppercase leading-none">
            What the work is
          </h2>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-fog">
            One path, honestly described — including its limits
          </p>
        </div>

        <div className="border-t border-paper/20">
          {themes.map((t) => (
            <div
              key={t.n}
              className="group grid items-baseline gap-2 border-b border-paper/20 py-8 transition-colors md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="font-mono text-xs text-fog md:col-span-1">
                {t.n}
              </span>
              <h3 className="stretch-wide font-display text-[clamp(1.5rem,3vw,1.75rem)] font-black uppercase leading-tight transition-colors duration-200 group-hover:text-ember md:col-span-6">
                {t.title}
              </h3>
              <p className="max-w-[40ch] text-base leading-relaxed text-paper/70 md:col-span-5">
                {t.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[62ch] text-base leading-relaxed text-paper/70">
          This isn't therapy and it isn't medicine. I don't treat or cure
          anything. What I offer is a way of working with the body that I've
          lived, tested on myself first, and watched change people's lives.
          Where your path needs a clinician, I'll say so.
        </p>
      </div>
    </section>
  );
}
