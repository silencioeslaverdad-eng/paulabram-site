import { useMemo } from "react";
import Seo from "@/components/Seo";
import courseData from "@/content/reset-course.json";

/**
 * 7-Day Fascia Reset — buyer course page (standalone, no site chrome).
 *
 * URL: /reset-course?area=legs&start=2026-10-30
 *  - area: comma-separated keys from jaw | shoulder | breath | back | legs | organs
 *    (the assessment can point at more than one area; each day then carries one
 *    focus clip per area). Default: back
 *  - start: ISO date of the buyer's Day 1 (default: today)
 * Days unlock one per day from the start date. Videos are unlisted YouTube
 * embeds: one core session + the buyer's focus clip(s) per day.
 *
 * area + start persist in localStorage after the first visit, so a buyer who
 * bookmarks the page, strips the params, or revisits from a different email
 * keeps their week — before this, a param-less revisit silently restarted the
 * course at "today" every day. URL params always win when present (a fresh
 * link from an email re-anchors the week).
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

function parseAreas(s: string | null): string[] {
  const valid = Object.keys(courseData.areas);
  const keys = (s || "back")
    .split(",")
    .map((k) => k.trim().toLowerCase())
    .filter((k) => valid.includes(k));
  const unique = [...new Set(keys)];
  return unique.length ? unique : ["back"];
}

function parseDate(s: string | null): Date {
  const d = s ? new Date(s + "T00:00:00") : new Date();
  return isNaN(d.getTime()) ? new Date() : d;
}

const STORAGE_KEY = "tgm-reset-course";

function readStored(): { area?: string; start?: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function ResetCourse() {
  const params = new URLSearchParams(window.location.search);
  const stored = readStored();
  // Area: URL wins when present, else whatever this browser had, else default.
  const areaParam = params.get("area") || stored.area || null;
  // Start date: never let the week drift LATER. A param-less revisit reuses the
  // stored start; a re-done assessment generates start=tomorrow, which would
  // push the week out a day each time — so when both exist, the earlier wins.
  // An earlier URL start (e.g. PaulAbram sends a corrected link) re-anchors.
  const paramStart = params.get("start");
  let startParam: string | null;
  if (paramStart && stored.start) {
    startParam = parseDate(paramStart) <= parseDate(stored.start) ? paramStart : stored.start;
  } else {
    startParam = paramStart || stored.start || null;
  }
  const areas = parseAreas(areaParam);
  const start = parseDate(startParam);
  const startYmd =
    start.getFullYear() +
    "-" +
    String(start.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(start.getDate()).padStart(2, "0");
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ area: areaParam || areas.join(","), start: startYmd })
    );
  } catch {
    // private browsing — the page still works for this visit
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const stock: StockDay[] = courseData.stockSessions;
  const allAreas = courseData.areas as Record<string, AreaDay[]>;
  const clipsForDay = (day: number): Clip[] => {
    const seen = new Set<string>();
    return areas
      .flatMap((a) => allAreas[a].find((x) => x.day === day)?.clips ?? [])
      .filter((c) => (seen.has(c.videoId) ? false : (seen.add(c.videoId), true)));
  };

  const areaLabel =
    areas.length === 1
      ? AREA_LABELS[areas[0]]
      : areas.length === 2
        ? `${AREA_LABELS[areas[0]]}, and ${AREA_LABELS[areas[1]]}`
        : areas.slice(0, -1).map((a) => AREA_LABELS[a]).join(", ") +
          ", and " + AREA_LABELS[areas[areas.length - 1]];

  const days = useMemo(
    () =>
      stock.map((s) => {
        const unlock = new Date(start);
        unlock.setDate(unlock.getDate() + (s.day - 1));
        return { ...s, unlock, clips: clipsForDay(s.day), open: today >= unlock };
      }),
    [areas.join(",")]
  );

  const openCount = days.filter((d) => d.open).length;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Seo title="Your 7-Day Reset" description="Your tailored week of Fascia Manoeuvres." />
      <div className="mx-auto max-w-3xl px-5 py-10">
        <p className="text-sm uppercase tracking-widest text-red-500">The Grounded Man</p>
        <h1 className="mt-2 text-3xl font-bold">Your 7-Day Reset</h1>
        <p className="mt-3 text-neutral-300">
          Your assessment points at your {areaLabel}. Every day you get the core
          session everyone shares, plus a short focus manoeuvre
          {areas.length > 1 ? " for each of those areas" : " chosen for you"}. One day
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
