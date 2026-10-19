// Prerender all routes into static HTML after `vite build`, so crawlers and AI
// tools that don't run JavaScript still see the full copy. Uses the installed
// Chrome via puppeteer-core (no Chromium download). Runs as part of `npm run build`.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = 4899;
const ROUTES = [
  "/",
  "/work-with-me",
  "/story",
  "/moonrise",
  "/reset",
  "/links",
  "/blog",
  "/blog/regulation-vs-stimulation",
  "/blog/silica-illusion-diatomaceous-earth",
  "/blog/cbt-does-not-help-trauma",
  "/blog/cell-danger-response",
  "/blog/fascial-signature-trauma-bond",
  "/blog/stop-stretching-start-moving-fascia",
  "/privacy",
  "/terms",
  "/disclaimer",
];
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://local").pathname);
  let file = join(DIST, path);
  if (path.endsWith("/")) file = join(DIST, path, "index.html");
  if (!existsSync(file)) file = join(DIST, "index.html"); // SPA fallback
  try {
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[extname(file).toLowerCase()] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end();
  }
});

await new Promise((r) => server.listen(PORT, "127.0.0.1", r));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox"],
});

for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${PORT}${route}`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 600)); // let fonts/sections settle
  const html = await page.content();
  const out = route === "/" ? join(DIST, "index.html") : join(DIST, route, "index.html");
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
  await page.close();
  console.log("prerendered", route);
}

// 404 page: render the app's NotFound route into dist/404.html (Pages serves it
// for unknown URLs now that the SPA catch-all redirect is gone).
{
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${PORT}/route-that-does-not-exist`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 600));
  await writeFile(join(DIST, "404.html"), await page.content());
  await page.close();
  console.log("prerendered 404.html");
}

await browser.close();
server.close();
console.log("prerender complete:", ROUTES.length, "routes + 404");
