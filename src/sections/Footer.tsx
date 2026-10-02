export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="stretch-semi font-display text-2xl font-black">
              PaulAbram
            </p>
            <p className="mt-3 max-w-[52ch] font-mono text-[12px] uppercase leading-relaxed tracking-[0.14em] text-fog">
              If you need urgent support: Samaritans 116 123 (UK — free, 24
              hours) · In an emergency, call 999
            </p>
          </div>
          <nav
            aria-label="Legal"
            className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70"
          >
            <a href="/privacy" className="transition-colors hover:text-ember">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-ember">
              Terms
            </a>
            <a href="/disclaimer" className="transition-colors hover:text-ember">
              Disclaimer
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-paper/20 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-fog md:flex-row md:justify-between">
          <span>© 2026 PaulAbram</span>
        </div>
      </div>
    </footer>
  );
}
