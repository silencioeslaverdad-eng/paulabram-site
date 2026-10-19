import { Ground, Header, FloatCTA, Footer, Quote } from "@/v3/Chrome";
import {
  Hero,
  OfferSummary,
  Story,
  WorkCards,
  Honest,
  LiveStrip,
  Zones,
} from "@/v3/HomeSections";

export default function Home() {
  return (
    <div className="g3">
      <Ground />
      <div className="g3-page">
        <Header />
        <main>
          <Hero />
          <Quote
            text="Morning Paul, just wanted to let you know that from doing those somatic movements you suggested in your blog and by listening to my own body, I felt like I was breathing new avenues /streets inside - felt awesome - I would have to say that I felt more whole than in two parts 🎉. Thank you 🙏🏻"
            by="a client message"
          />
          <OfferSummary />
          <Story />
          <Quote
            text="Ehi Paul, I am enjoying your classes! I am deeply releasing!"
            by="a client in Italy"
          />
          <WorkCards />
          <Honest />
          <Quote
            text="Just finiahed this i feel so different wow! Ive boycoted the ADHD meds today and have opted to try this before faceing the shops! Thank you paul!"
            by="a client message"
          />
          <LiveStrip />
          <Zones />
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}
