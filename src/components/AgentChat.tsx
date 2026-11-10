import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * Ask PaulAbram — site chat widget (production).
 * Talks to /api/chat (k2 + transcript retrieval, crisis-intercepted server-side)
 * and /api/lead (MailerLite capture). Styling is self-contained: black/white/red,
 * hard borders, matching the v3 "Grounded Contrast" system.
 * Behaviour per agent-spec.md §5: nudge-opens once after ~8s dwell or 70% scroll,
 * never more than once per session; page-aware via the `page` prop.
 */

interface ChatMessage { role: "user" | "assistant"; content: string }

const CSS = `
.pa-fab { position: fixed; right: 20px; bottom: 20px; z-index: 80;
  display: flex; align-items: center; gap: 8px;
  background: #0a0a0a; color: #fff; border: 2px solid #0a0a0a;
  padding: 13px 18px; font: 600 14px "Archivo", "Inter", sans-serif;
  letter-spacing: .03em; cursor: pointer; box-shadow: 4px 4px 0 rgba(10,10,10,.25); }
.pa-fab:hover { background: #d42b2b; border-color: #d42b2b; }
.pa-fab .pa-dot { width: 8px; height: 8px; background: #d42b2b; }
.pa-fab:hover .pa-dot { background: #fff; }
.pa-panel { position: fixed; right: 20px; bottom: 20px; z-index: 81;
  width: 368px; max-width: calc(100vw - 40px);
  height: 540px; max-height: calc(100vh - 40px);
  background: #fff; border: 2px solid #0a0a0a; box-shadow: 8px 8px 0 #0a0a0a;
  display: flex; flex-direction: column; }
.pa-head { background: #0a0a0a; color: #fff; padding: 12px 14px;
  display: flex; justify-content: space-between; align-items: center; gap: 8px;
  font: 600 14px "Archivo", sans-serif; }
.pa-head small { display: block; font: 400 11px "Inter", sans-serif; color: #bbb; margin-top: 2px; }
.pa-head-actions { display: flex; gap: 4px; align-items: center; }
.pa-head button { background: none; border: 1px solid rgba(255,255,255,.4); color: #fff;
  cursor: pointer; padding: 3px 7px; font: 600 11px "Inter", sans-serif; }
.pa-head button:hover { background: #d42b2b; border-color: #d42b2b; }
.pa-log { flex: 1; overflow-y: auto; padding: 14px; display: flex; flex-direction: column; gap: 10px; color: #0a0a0a; }
.pa-msg { max-width: 88%; padding: 10px 12px; font-size: 14px; line-height: 1.5;
  white-space: pre-wrap; overflow-wrap: break-word; }
.pa-msg.bot { background: #fff; border: 2px solid #0a0a0a; align-self: flex-start; }
.pa-msg.bot.crisis { border-color: #d42b2b; }
.pa-msg.user { background: #0a0a0a; color: #fff; align-self: flex-end; }
.pa-msg a { color: #d42b2b; font-weight: 600; }
.pa-msg.user a { color: #ffb3b3; }
.pa-typing { color: #6b6b6b; font-style: italic; font-size: 13px; }
.pa-input-row { display: flex; border-top: 2px solid #0a0a0a; }
.pa-input-row input { flex: 1; border: none; padding: 12px; font: inherit; font-size: 14px; outline: none; background: #fff; color: #0a0a0a; }
.pa-input-row button { border: none; border-left: 2px solid #0a0a0a; background: #0a0a0a;
  color: #fff; padding: 0 18px; font-weight: 600; cursor: pointer; }
.pa-input-row button:hover { background: #d42b2b; }
.pa-capture { border: 2px solid #0a0a0a; padding: 12px; background: #fafafa; }
.pa-capture input[type=email] { width: 100%; border: 2px solid #0a0a0a; padding: 8px;
  font: inherit; font-size: 14px; margin-bottom: 6px; box-sizing: border-box; background: #fff; color: #0a0a0a; }
.pa-capture label { font-size: 12px; display: flex; gap: 6px; align-items: flex-start;
  margin: 6px 0; color: #6b6b6b; line-height: 1.4; }
.pa-capture button { background: #0a0a0a; color: #fff; border: 2px solid #0a0a0a;
  padding: 8px 14px; font-weight: 600; cursor: pointer; width: 100%; }
.pa-capture button:hover { background: #d42b2b; border-color: #d42b2b; }
.pa-capture .err { color: #d42b2b; font-size: 12px; margin-top: 4px; }
@media (max-width: 480px) {
  .pa-panel { right: 10px; bottom: 10px; max-width: calc(100vw - 20px); height: 70vh; }
  .pa-fab { right: 10px; bottom: 10px; }
}
`;

function linkify(text: string): string {
  const esc = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc.replace(
    /\bhttps?:\/\/[^\s<>"]+/g,
    (m) => `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`
  );
}

export default function AgentChat({ page }: { page: string }) {
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [capture, setCapture] = useState<{ tag: string; topic: string } | null>(null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo(0, logRef.current.scrollHeight);
  }, [messages, capture, busy]);

  // One gentle nudge per session: open after 8s dwell, or at 70% scroll.
  useEffect(() => {
    if (sessionStorage.getItem("pa_agent_nudged")) return;
    const openOnce = () => {
      if (sessionStorage.getItem("pa_agent_nudged")) return;
      sessionStorage.setItem("pa_agent_nudged", "1");
      setOpen(true);
    };
    const t = setTimeout(openOnce, 8000);
    const onScroll = () => {
      if (window.scrollY / Math.max(1, document.body.scrollHeight - innerHeight) > 0.7) {
        openOnce();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  // Any page element can open the chat: window.dispatchEvent(new Event("pa-agent-open"))
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("pa-agent-open", onOpen);
    return () => window.removeEventListener("pa-agent-open", onOpen);
  }, []);

  const greet = () => {
    if (greeted) return;
    setGreeted(true);
    setMessages([
      { role: "assistant", content: "You're not broken. You're just guarded. What would you like to sort out first?" },
    ]);
  };

  const send = async () => {
    const v = input.trim();
    if (!v || busy) return;
    const next = [...messages, { role: "user" as const, content: v }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, page }),
      });
      const data = await r.json();
      setMessages([...next, { role: "assistant", content: data.reply || "The assistant hiccuped — try again in a moment." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Connection hiccup — try again in a moment." }]);
    }
    setBusy(false);
  };

  const submitLead = async () => {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && consent;
    setEmailErr(!ok);
    if (!ok) return;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), tag: capture?.tag ?? "", topic: capture?.topic ?? "", page }),
      });
    } catch { /* ack either way — don't trap the visitor */ }
    setCapture(null);
    setLeadDone(true);
  };

  const copyTranscript = () => {
    const lines = messages.map((m) => (m.role === "user" ? "VISITOR: " : "AGENT:  ") + m.content.trim());
    const text = `ASK PAULABRAM — transcript\npage: /${page}\n\n` + lines.join("\n\n");
    navigator.clipboard.writeText(text).then(() => {
      const b = document.getElementById("pa-copy");
      if (b) { b.textContent = "Copied"; setTimeout(() => { b.textContent = "Copy"; }, 1500); }
    });
  };

  return (
    <>
      {!open && (
        <button className="pa-fab" onClick={() => { setOpen(true); greet(); }} aria-label="Ask PaulAbram">
          <span className="pa-dot" />
          ASK PAULABRAM
        </button>
      )}

      {open && (
        <div className="pa-panel" role="dialog" aria-label="Ask PaulAbram chat">
          <div className="pa-head">
            <div>
              ASK PAULABRAM
              <small>Fascia Personal Trainer · replies instantly</small>
            </div>
            <div className="pa-head-actions">
              <button id="pa-copy" onClick={copyTranscript}>Copy</button>
              <button onClick={() => setOpen(false)} aria-label="Close chat"><X size={13} /></button>
            </div>
          </div>

          <div className="pa-log" ref={logRef}>
            {messages.map((m, i) => (
              <div key={i}
                className={"pa-msg " + (m.role === "user" ? "user" : "bot")}
                dangerouslySetInnerHTML={{ __html: linkify(m.content) }}
              />
            ))}
            {busy && <div className="pa-msg bot pa-typing">…</div>}

            {capture && (
              <div className="pa-capture">
                <input
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                  I agree PaulAbram can email me about this — no spam, unsubscribe anytime.
                </label>
                <button type="button" onClick={submitLead}>Send it to me</button>
                {emailErr && <div className="err">Enter a valid email and tick the consent box.</div>}
              </div>
            )}
            {leadDone && !capture && (
              <div className="pa-msg bot">Done — it's on its way.</div>
            )}
          </div>

          <div className="pa-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(); }}
              placeholder="Ask about the work, prices, the free class…"
              aria-label="Message"
            />
            <button onClick={send} disabled={busy}>Send</button>
          </div>
          {!capture && (
            <div style={{ borderTop: "1px solid #ddd", padding: "6px 12px", fontSize: 11, color: "#6b6b6b", display: "flex", justifyContent: "space-between" }}>
              <span>The assistant · PaulAbram reads everything himself</span>
              <button
                style={{ background: "none", border: "none", color: "#d42b2b", fontSize: 11, fontWeight: 600, cursor: "pointer", padding: 0 }}
                onClick={() => { setCapture({ tag: "widget", topic: "asked to be contacted from the chat" }); setLeadDone(false); }}
              >
                Leave your email →
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
