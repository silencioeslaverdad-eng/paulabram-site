import { Link } from "react-router";

export default function MoonriseBanner() {
  return (
    <section className="bg-[#0a0b1a] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-5 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300/90">
          Starts Monday 5 October · 21 days · By donation
        </p>
        <Link
          to="/moonrise"
          className="rounded-full bg-amber-400 px-10 py-3.5 text-lg font-bold text-[#0a0b1a] transition hover:bg-amber-300"
        >
          Join the 21-Day Moonrise Reset
        </Link>
        <p className="text-sm text-slate-300">
          Rebuild your energy body from the waning moon to the Full Hunter's
          Moon, 26 Oct.
        </p>
      </div>
    </section>
  );
}
