import Seo from '../components/Seo'
import bookAwaken from '../assets/book-awaken.jpg'
import bookHypnotised from '../assets/book-hypnotised.jpg'
import bookNightshift from '../assets/book-nightshift.jpg'
import paulChair from '../assets/paul-chair.jpg'

const books = [
  {
    title: 'Awaken Your True Potential',
    year: '2025',
    cover: bookAwaken,
    alt: 'Cover of Awaken Your True Potential by PaulAbram',
    blurb:
      'The practical companion to the work. How stress and conditioning shape the body, and what it actually takes to change the pattern rather than cope with it.',
    href: 'https://www.amazon.co.uk/dp/B0DWK456W4',
  },
  {
    title: 'Hypnotised to Death',
    year: '2025',
    cover: bookHypnotised,
    alt: 'Cover of Hypnotised to Death by PaulAbram',
    blurb:
      'The harder read. How a mind trained for vigilance learns to obey, to endure, and to ignore what the body is saying, and what it costs when that training never switches off.',
    href: 'https://www.amazon.co.uk/dp/B0DTY9HB1C',
  },
  {
    title: 'Night Shift',
    year: '2024',
    cover: bookNightshift,
    alt: 'Cover of Night Shift by PaulAbram',
    blurb:
      'Written from inside the years when sleep would not come and the mind would not stand down. For anyone who knows what 3am feels like when the rest of the house is quiet.',
    href: 'https://www.amazon.co.uk/gp/product/B0DKW6QPZG',
  },
]

export default function Books() {
  return (
    <>
      <Seo
        title="Books by PaulAbram — Stress, the Body & the Long Road Back"
        description="Books by PaulAbram on stress, the nervous system, and rebuilding a life from the body up. Available on Amazon."
        path="/books"
      />

      <section className="container-site py-20 sm:py-24">
        <p className="eyebrow">Books</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          The writing came before the coaching. It is where I made sense of it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-soft">
          Three books, written across the years I was rebuilding. They are not self-help with a
          smile. They are an honest account of what breaks a person and what puts one back
          together.
        </p>
      </section>

      <section className="container-site grid gap-10 pb-24 md:grid-cols-3">
        {books.map((book) => (
          <article key={book.title} className="card flex flex-col overflow-hidden">
            <img src={book.cover} alt={book.alt} className="w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-soft">{book.year}</p>
              <h2 className="mt-1 font-display text-xl font-semibold">{book.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-soft">{book.blurb}</p>
              <a
                href={book.href}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-6 self-start"
              >
                View on Amazon
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line bg-stone">
        <div className="container-site grid items-center gap-10 py-20 md:grid-cols-[2fr_3fr] md:gap-14">
          <div className="card overflow-hidden">
            <img
              src={paulChair}
              alt="PaulAbram seated in an armchair against a stone wall"
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">About the author</p>
            <div className="prose-site mt-4 space-y-5 text-lg leading-relaxed text-soft">
              <p>
                I did not set out to write books. I wrote because I had to make sense of what
                happened to me, and the page was the one place I could be completely honest.
              </p>
              <p>
                Everything in these books was lived first. Twenty years in the military, a spine
                that gave out, PTSD, addiction, and the slow work of rebuilding from the body up.
                If any of that sounds familiar, start anywhere. They were written for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
