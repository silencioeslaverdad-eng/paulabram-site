const actions = [
  {
    label: "Free · 2 minutes",
    title: "Take the assessment",
    href: "https://paulabram.io/assessment/",
  },
  {
    label: "Free download",
    title: "The Fascia Guide",
    href: "https://fascia.paulabram.io/",
  },
  {
    label: "Work with me",
    title: "Apply",
    href: "https://paulabram.io/apply/",
  },
  {
    label: "Daily · Free",
    title: "YouTube",
    href: "https://www.youtube.com/@TheGroundedMan-TV",
  },
];

export default function QuickActions() {
  return (
    <section aria-label="Quick actions" className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-4">
        {actions.map((a, i) => (
          <a
            key={a.title}
            href={a.href}
            className={`group flex flex-col gap-2 px-5 py-6 transition-colors hover:bg-ink hover:text-paper md:px-10 md:py-8 ${
              i > 0 ? "border-t border-ink/15 md:border-l md:border-t-0" : "border-t-0"
            }`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-smoke transition-colors group-hover:text-fog">
              {a.label}
            </span>
            <span className="stretch-semi flex items-center justify-between font-display text-lg font-extrabold uppercase md:text-xl">
              {a.title}
              <span aria-hidden className="text-clay transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
