export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-paper px-5 text-ink md:px-10">
      <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-smoke">
        404 — this page moved
      </p>
      <h1 className="stretch-wide mt-4 max-w-[16ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95]">
        Nothing here — but the practice is live
      </h1>
      <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink/80">
        Every morning, 7:00 a.m. BST, free. That's the best place to start
        anyway.
      </p>
      <div className="mt-8 flex flex-wrap gap-6">
        <a
          href="/"
          className="stretch-semi bg-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-clay"
        >
          Back to home
        </a>
        <a
          href="https://www.youtube.com/@TheGroundedMan-TV"
          className="stretch-semi border border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:bg-ink hover:text-paper"
        >
          Watch live
        </a>
      </div>
    </div>
  );
}
