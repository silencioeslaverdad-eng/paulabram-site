import { Ground, Header, FloatCTA, Footer } from "@/v3/Chrome";
import {
  FREE_OFFERS,
  SESSION_OFFERS,
  MONTHLY_OFFERS,
  DONATION_OFFER,
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
                This is what I offer and what it costs. Start free; go deeper when it
                earns it.
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

              <h2>
                <span className="num">04</span>By donation
              </h2>
              <OfferTable offers={[DONATION_OFFER]} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}
