import { Link } from "react-router";
import { CALENDLY } from "../content/offers";
import "./v3.css";

/** Fixed ghosts + lens flares that sit behind every v3 page. */
export function Ground() {
  return (
    <div className="g3-ground" aria-hidden="true">
      <div className="ghosts" />
      <div className="flare white" />
      <div className="flare red" />
    </div>
  );
}

export function Header({ current }: { current?: string }) {
  return (
    <header className="g3-header">
      <div>
        <div className="g3-logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            PaulAbram<span className="dot">.</span>{" "}
            <span className="sub">Fascia Personal Trainer</span>
          </Link>
        </div>
        <div className="g3-tagline">The Grounded Man</div>
      </div>
      <nav className="g3-nav">
        <Link to="/work-with-me" className={current === "work" ? "current" : ""}>
          Work with me
        </Link>
        <Link to="/#the-work">The Work</Link>
        <Link to="/story" className={current === "story" ? "current" : ""}>
          The Story
        </Link>
        <Link to="/blog" className={current === "blog" ? "current" : ""}>
          The Guarded Body
        </Link>
        <Link to="/links" className={current === "links" ? "current" : ""}>
          Links
        </Link>
      </nav>
    </header>
  );
}

export function FloatCTA() {
  return (
    <a className="g3-float" href={CALENDLY} target="_blank" rel="noopener">
      Book your free call →
    </a>
  );
}

export function Footer() {
  return (
    <footer className="g3-footer">
      <div>
        Crown Copyright © 2026 PaulAbram — Fascia Personal Trainer · Author of{" "}
        <em>Hypnotised to Death</em> · Human Garage Certified Coach
      </div>
      <div className="care">
        If you need urgent support: Samaritans 116 123 (UK — free, 24 hours) · In an
        emergency, call 999
      </div>
    </footer>
  );
}

/** Quiet client mention — verbatim, italic, red quote marks, unnamed. */
export function Quote({ text, by }: { text: string; by: string }) {
  return (
    <aside className="g3-quote">
      <blockquote>
        <span className="qm">&ldquo;</span>
        {text}
        <span className="qm">&rdquo;</span>
      </blockquote>
      <cite>— {by}</cite>
    </aside>
  );
}
