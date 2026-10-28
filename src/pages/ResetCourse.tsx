import { useMemo } from "react";
import Seo from "@/components/Seo";
import courseData from "@/content/reset-course.json";

/**
 * 7-Day Fascia Reset — buyer course page (standalone, no site chrome).
 *
 * URL: /reset-course?area=legs&start=2026-10-30
 *  - area: jaw | shoulder | breath | back | legs | organs (default: back)
 *  - start: ISO date of the buyer's Day 1 (default: today)
 * Days unlock one per day from the start date. Videos are unlisted YouTube
 * embeds: one core session + the buyer's focus clip(s) per day.
 */

type Clip = { title: string; videoId: string };
type StockDay = { day: number; theme: string; videoId: string };
type AreaDay = { day: number; clips: Clip[] };

const AREA_LABELS: Record<string, string> = {
  jaw: "jaw and face",
  shoulder: "shoulders and neck",
  breath: "breath and chest",
  back: "lower back and hips",
  legs: "legs, knees and feet",
  organs: "digestion and the organs",
};

function parseDate(s: string | null): Date {
  const d = s ? new Date(s + "T00:00:00") : new Date();
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function ResetCourse() {
  const params = new URLSearchParams(window.location.search);
  const areaParam = (params.get("area") || "back").toLowerCase();
  const area = areaParam in courseData.areas ? areaParam : "back";
  const start = parseDate(params.get("start"));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const stock: StockDay[] = courseData.stockSessions;
  const focus: AreaDay[] = (courseData.areas as Record<string, AreaDay[]>)[area];

  const days = useMemo(
    () =>
      stock.map((s) => {
        const unlock = new Date(start);
        unlock.setDate(unlock.getDate() + (s.day - 1));
        const f = focus.find((x) => x.day === s.day);
        return { ...s, unlock, clips: f ? f.clips : [], open: today >= unlock };
      }),
    [area]
  );

  const openCount = days.filter((d) => d.open).length;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo title="Your 7-Day Reset" description="Your tailored week of Fascia Manoeuvres." />
      <div className="mx-auto max-w-3xl px-5 py-10">
        <p className="text-sm uppercase tracking-widest text-red-500">The Grounded Man</p>
        <h1 className="mt-2 text-3xl font-bold">Your 7-Day Reset</h1>
        <p className="mt-3 text-neutral-300">
          Your assessment points at your {AREA_LABELS[area]}. Every day you get the core
          session everyone shares, plus a short focus manoeuvre chosen for you. One day
          unlocks at a time — there is no behind and no catching up.
        </p>

        <ol className="mt-8 space-y-6">
          {days.map((d) => (
            <li
              key={d.day}
              className={`rounded-lg border p-5 ${
                d.open ? "border-neutral-700 bg-neutral-900" : "border-neutral-800 bg-neutral-925 opacity-60"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold">
                  Day {d.day} — {d.theme}
                </h2>
                {!d.open && (
                  <span className="text-sm text-neutral-400">
                    Unlocks {d.unlock.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
                  </span>
                )}
              </div>

              {d.open ? (
                <div className="mt-4 space-y-5">
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${d.videoId}`}
                      title={`Day ${d.day} core session`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  {d.clips.map((c) => (
                    <div key={c.videoId}>
                      <p className="mb-2 text-sm font-medium text-red-400">Your focus: {c.title.replace(/^Reset Focus - /, "")}</p>
                      <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${c.videoId}`}
                          title={c.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-neutral-500">
                  The session and your focus clip appear here on the day.
                </p>
              )}
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center text-sm text-neutral-500">
          {openCount} of 7 days unlocked · Questions — reply to any of your Reset emails.
        </p>
      </div>
    </div>
  );
}
