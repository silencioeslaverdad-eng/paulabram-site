// Day 1 of the 365-day live practice commitment: 16 June 2026 (7am BST).
// The counter ticks up automatically at midnight local time.
const DAY_ONE = new Date('2026-06-16T07:00:00+01:00').getTime()

export const liveDay = Math.max(1, Math.floor((Date.now() - DAY_ONE) / 86_400_000) + 1)
