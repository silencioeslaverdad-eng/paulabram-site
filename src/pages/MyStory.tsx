import Seo from "@/components/Seo";
import { Ground, Header, FloatCTA, Footer } from "@/v3/Chrome";

const BOOKS = [
  {
    img: "/images/books/hypnotised.jpg",
    alt: "Hypnotised to Death book cover",
    title: "Hypnotised to Death",
    sub: "Trance-ending freedom",
    body: "Awakening and liberation from the illusions that bind us — written after twenty years in the military ended in collapse. It dismantles the conditioning that creates suffering and maps the way back to the authentic self.",
    href: "https://www.amazon.co.uk/Hypnotised-Death-Trance-Ending-paul-abram/dp/B0DTY9HB1C/",
  },
  {
    img: "/images/books/awaken.jpg",
    alt: "Awaken Your True Potential book cover",
    title: "Awaken Your True Potential",
    sub: "A sobering guide to men's mental health",
    body: "A raw and transformative guide for men — strength without silence, resilience without repression, and vulnerability as the gateway rather than the weakness.",
    href: "https://www.amazon.co.uk/Awaken-Your-True-Potential-Addressing/dp/B0DWK456W4/",
  },
  {
    img: "/images/books/night-shift.jpg",
    alt: "The Night Shift book cover",
    title: "The Night Shift",
    sub: "Manifesting your dream reality while you sleep",
    body: "A practical guide to using sleep as the most underrated tool for change — feed your intentions to the subconscious at night and let it do the work while you rest.",
    href: "https://www.amazon.co.uk/gp/product/B0DKW6QPZG/",
  },
];

export default function MyStory() {
  return (
    <div className="g3">
      <Seo
        title="The story"
        description="Portugal, the dark days, and the eighteen years between the mind and the body. The story behind the work."
      />
      <Ground />
      <div className="g3-page">
        <Header current="story" />
        <main>
          {/* Page head */}
          <section className="g3-section">
            <div className="g3-inner">
              <div className="g3-kicker">My story</div>
              <h1>The story behind the work</h1>
              <p className="g3-standfirst">
                Because we all love a story — and storytellers. This is the longer
                version, so take your time.
              </p>
            </div>
          </section>

          {/* Chapter 01 — The dark days */}
          <section className="g3-section">
            <div className="g3-inner">
              <div className="g3-chapter">
                <h3>
                  <span className="num">01</span>The dark days
                </h3>
                <p>
                  In Portugal, I tried to end my life. I was revived at home and taken to
                  hospital, and from the ward I was moved into a spare room with no
                  windows. I needed the dark. Alone in that room, I opened a vein in my
                  wrist and began to bleed out.
                </p>
                <p>
                  This was not my first time at that edge. It was the third. The second
                  only twenty-four hours earlier. At the time, I really did just want it
                  all to stop. The noise, the pain, the masking and hiding. Over twenty
                  years of duty, of being the capable one, of overriding everything my
                  body was trying to say. It had cost, and that cost came due all at once.
                </p>
                <p>
                  And one sentence came through, as clear as anything I have ever heard:
                </p>
                <p className="g3-pull red">
                  You cannot take a life that is not yours to take.
                </p>
                <p>I asked if I had a purpose.</p>
                <p>The answer came back: live, and find out.</p>
                <p>
                  That was not a cure. It was not the ending I expected. It was the
                  beginning I had not considered.
                </p>
                <p className="g3-careline">
                  If you are in crisis right now, call Samaritans free on 116 123, or
                  999. You matter more than this story.
                </p>
              </div>

              {/* Chapter 02 — The fight back */}
              <div className="g3-chapter">
                <h3>
                  <span className="num">02</span>The fight back
                </h3>
                <p>
                  What followed was not a miracle — not in the true sense, or not in the
                  way we usually mean it, anyway. It was work. But it was real work.
                  Learning, researching, an almost pathological desire to uncover what
                  was real. I am not someone who tried one thing and found it wanting. I
                  did the things.
                </p>
                <p>
                  I did not know who I was. I had to find out. I did not know what I
                  believed in — what, in the end, I actually believed. I searched through
                  faith. Then came the end of that military life, and with it the loss of
                  the self that had been earned and proven and worn, something like body
                  armour. When the uniform came off, the ground went with it for a while.
                </p>
                <p>Years later came my mother's sudden death. I found her, and I could not bring her back.</p>
                <p>
                  And there was addiction, and recovery from it, and CPTSD that nobody
                  named at the time. Much later came the ADHD diagnosis — late, as it so
                  often is — and with it a different understanding of my whole life. The
                  masking, the overriding, the need to be the capable one: none of it was
                  character. It was neurology, doing its best. I say it here because
                  someone reading this will recognise themselves. A lot of veterans do.
                </p>
                <p>
                  And I was being a dad, properly, for the first time. It was all up to
                  me. I was the one at home. I was the one who ended up taking the
                  children — my daughters. Being the parent who is always there to two
                  young girls is a kind of pressure nothing prepares you for. Nobody can
                  show you. I spent nearly a decade raising them on my own —
                  homeschooling, growing our own food, being the carer, sometimes mother
                  and father. Learning to be the very thing I had not been, not truly,
                  while I was in the military.
                </p>
                <p>
                  I would not trade those years for anything. They taught me a strength
                  that does not oppose gentleness. They coexist. And most of what I know
                  about holding a safe space, I learned in a kitchen with my girls.
                </p>
                <p>Real progress. At least, that is what I thought.</p>
              </div>

              {/* Chapter 03 — The revelation */}
              <div className="g3-chapter">
                <h3>
                  <span className="num">03</span>The revelation
                </h3>
                <p>
                  Eighteen years later — to my complete surprise — it was the body I had
                  been ignoring all that time that showed me what had been happening. I
                  need to be precise about this. That is the whole point.
                </p>
                <p>
                  The years of work were not wasted. I am not telling you that thinking
                  does nothing. I am telling you what happened to me. Yes, I had
                  understood my patterns. Yes, I had named them, forgiven them, even
                  outgrown most of them. But my body was keeping the score in a language
                  I had not learned to read. Tissue — especially the fascia — does not
                  release because you have finished the sentence about it.
                </p>
                <p>
                  My spine had been failing since I was eleven, a compression they did
                  not even understand until I was twenty-four. And I masked it with the
                  stoic bravado you would expect of a traumatised boy who was expected to
                  be the tough one, all the time. I performed at a high level over the
                  top of it for decades. Nobody knew. I barely knew. The body kept its
                  own accounts, and it was always balanced.
                </p>
                <p>
                  What I was holding could only be let out through that body — through
                  movement, aided by breath, and the slow, deliberate release of what my
                  system had been guarding for years. When I found the fascia work, and
                  then Human Garage with Fascia Manoeuvres, I finally had the method that
                  matched the truth I had lived. The last part of healing was physical,
                  and it could be learned.
                </p>
                <p>That discovery became the work I do now.</p>
                <p className="g3-pull">
                  I thought I did all the work. In the end I was still holding on.
                </p>
                <p style={{ color: "var(--red)" }}>
                  The last part of my healing was not in my mind. It was in my body —
                  and that is where I work with people.
                </p>
              </div>
            </div>
          </section>

          {/* How I work */}
          <section className="g3-section">
            <div className="g3-inner">
              <h2>How I work</h2>
              <p className="g3-standfirst">Tested on myself first, always.</p>
              <p style={{ maxWidth: 760 }}>
                I am monotropic: I go all the way into one thing rather than skimming
                many. I learn by direct experience, tested on myself first — always. I do
                not teach what I have read. I teach what I have lived, and what I have
                watched happen with the people I work with.
              </p>
              <p style={{ maxWidth: 760, marginTop: 20 }}>
                Fasting, stillness, long silences. Not to be impressive — because I
                cannot ask anyone to do what I have not done.
              </p>
              <p className="g3-pull">
                You cannot think your way out of physical tension. You have to move your
                way through it.
              </p>
            </div>
          </section>

          {/* Where this leaves me */}
          <section className="g3-section">
            <div className="g3-inner">
              <h2>Where this leaves me</h2>
              <p style={{ maxWidth: 760 }}>
                I once thought I was broken. I now know I was always whole — and that
                most of what was wrong was charge in a body that had never been allowed
                to discharge. Protection I no longer needed — or need — and tension that
                has outlived its reason.
              </p>
              <p style={{ maxWidth: 760, marginTop: 20 }}>
                I think that is true of most of the people who come to me, too. They are
                not broken. They are holding.
              </p>
              <p style={{ maxWidth: 760, marginTop: 20 }}>
                The choice to put it down is always yours. I can show you where your
                hands are gripping. I cannot let go for you — nobody can. But you do not
                have to figure out the mechanics alone.
              </p>
            </div>
          </section>

          {/* The books */}
          <section className="g3-section">
            <div className="g3-inner">
              <h2>The books</h2>
              <p className="g3-standfirst">Everything in them was lived first.</p>
              <div className="g3-books">
                {BOOKS.map((b) => (
                  <article className="g3-book" key={b.title}>
                    <img src={b.img} alt={b.alt} loading="lazy" />
                    <h3>{b.title}</h3>
                    <div className="bsub">{b.sub}</div>
                    <p className="bbody">{b.body}</p>
                    <a href={b.href} target="_blank" rel="noopener noreferrer">
                      Get the book →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Next steps */}
          <section className="g3-section" style={{ borderBottom: "none", padding: "0 40px 80px" }}>
            <div className="g3-inner">
              <div className="g3-next">
                <a href="/work-with-me">Work with me →</a>
                <a href="/blog">The Guarded Body →</a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}
