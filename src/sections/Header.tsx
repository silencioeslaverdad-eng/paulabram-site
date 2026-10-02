export default function Header() {
  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-14 w-12 items-end justify-center overflow-hidden bg-ink">
            <img
              src="/images/paul-cutout.png"
              alt="PaulAbram"
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="stretch-semi font-display text-2xl font-black tracking-tight transition-colors group-hover:text-clay">
            PaulAbram
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/70 md:flex"
        >
          <a href="#work" className="transition-colors hover:text-clay">
            The work
          </a>
          <a href="#story" className="transition-colors hover:text-clay">
            Story
          </a>
          <a href="#words" className="transition-colors hover:text-clay">
            Words
          </a>
          <a href="#contact" className="transition-colors hover:text-clay">
            Contact
          </a>
        </nav>

        <a
          href="/work-with-me"
          className="stretch-semi bg-ink px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wide text-paper transition-colors hover:bg-clay md:px-5 md:text-sm"
        >
          Work with me
        </a>
      </div>
    </header>
  );
}
