import { Ground, Header, FloatCTA, Footer } from "@/v3/Chrome";
import AgentChat from "@/components/AgentChat";
import {
  FREE_OFFERS,
  SESSION_OFFERS,
  MONTHLY_OFFERS,
  type Offer,
} from "../content/offers";

function OfferTable({ offers }: { offers: Offer[] }) {
  return (
    <div className="g3-offer whitebox">
      {offers.map((o) => (
        <div className="g3-offer-row" key={o.name}>
          <div className="g3-offer-name">
            {o.name} <small>{o.blurb}</small>
          </div>
          <div className={`g3-offer-price${o.priceClass ? " " + o.priceClass : ""}`}>
            {o.price}
          </div>
          <a
            className={o.free ? "g3-pay free" : "g3-pay"}
            href={o.href}
            target="_blank"
            rel="noopener"
          >
            {o.cta}
          </a>
        </div>
      ))}
    </div>
  );
}

export default function WorkWithMe() {
  return (
    <div className="g3">
      <Ground />
      <div className="g3-page">
        <Header current="work" />
        <main>
          <section className="g3-section">
            <div className="g3-inner">
              <h1>
                Work with me.
                <br />
                <em>Here's everything, priced.</em>
              </h1>
              <p className="g3-standfirst">
                The order is important. So we work with the body first —
                because the body literally keeps score. It somehow seems to just
                keep holding onto these protection patterns long after you'd think
                the work has been done — the psychological work, the emotional
                work, even the spiritual work.
              </p>
              <p className="g3-standfirst" style={{ marginTop: 14 }}>
                But then the things that are held onto through the body release,
                and when that surfaces, it can bring with it a deeper understanding
                — an integration, an embodiment of the reason why we've been hiding
                or held back. At that point, there may be a deeper emotional and
                psychological journey required — maybe a little hypnotherapy, maybe
                some pure, simple energy work. Ultimately what we're looking for is
                harmony, so that the nervous system is regulated — and that means
                we can flex and respond to real problems, instead of problems
                perceived from a past position where a threat or a risk once
                happened.
              </p>
              <p className="g3-standfirst" style={{ marginTop: 14 }}>
                So: start free, then we go deeper if it's needed. Everything is
                priced below — you won't need a call to find out what it costs.
              </p>

              <h2>
                <span className="num">01</span>Start free
              </h2>
              <OfferTable offers={FREE_OFFERS} />

              <h2>
                <span className="num">02</span>One-to-one sessions
              </h2>
              <OfferTable offers={SESSION_OFFERS} />

              <h2>
                <span className="num">03</span>Monthly — the real work
              </h2>
              <OfferTable offers={MONTHLY_OFFERS} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <FloatCTA />
      <AgentChat page="work-with-me" />
    </div>
  );
}
