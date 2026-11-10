// One-off: screenshot the built homepage hero for review.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2" };

const server = createServer(async (req, res) => {
  let p = req.url.split("?")[0];
  if (p.endsWith("/")) p += "index.html";
  let file = join(DIST, p);
  if (!existsSync(file)) file = join(DIST, p, "index.html");
  try {
    const data = await readFile(file);
    res.writeHead(200, { "content-type": MIME[extname(file)] || "application/octet-stream" });
    res.end(data);
  } catch { res.writeHead(404); res.end("nf"); }
});
await new Promise((r) => server.listen(4901, r));

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1400, deviceScaleFactor: 1 });
await page.goto("http://localhost:4901/", { waitUntil: "networkidle0" });
await page.screenshot({ path: "/Users/Admin/Documents/kimi/workspace/hero-v4-preview.png" });
const mob = await browser.newPage();
await mob.setViewport({ width: 390, height: 1600, deviceScaleFactor: 2 });
await mob.goto("http://localhost:4901/", { waitUntil: "networkidle0" });
await mob.screenshot({ path: "/Users/Admin/Documents/kimi/workspace/hero-v4-preview-mobile.png" });
await browser.close();
server.close();
console.log("done");
