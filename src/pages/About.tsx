import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { CALENDLY_URL } from '../components/Layout'
import paulBw from '../assets/paul-bw.jpg'
import paulHumanGarage from '../assets/paul-human-garage.jpg'

export default function About() {
  return (
    <>
      <Seo
        title="About PaulAbram — From Military Officer to Body-Led Coach"
        description="Twenty years in the military, a spine that gave out, PTSD, addiction, and the long road back. Why PaulAbram works through the body, and what that means for the people he coaches."
        path="/about"
      />

      <section className="container-site py-20 sm:py-24">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          I know what it costs to carry on when your body has already stopped.
        </h1>
      </section>

      <section className="container-site grid gap-12 pb-20 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div className="prose-site space-y-6 text-lg leading-relaxed text-soft">
          <p>
            I spent over twenty years in the military. I left school with nothing much and
            worked as a labourer on building sites. Then I joined the Royal Engineers, where I
            served for fifteen years before being commissioned into the Royal Air Force. On
            paper it looked like a steady climb. Inside, it was something else.
          </p>
          <p>
            I was hyper-aware of danger from childhood, and the military rewarded exactly that.
            I was driven by a need to be accepted, to be enough. Perfectionism looks like high
            standards until you see the cost. Every step up came with more responsibility, more
            hours, and less of me left over. The institution I served took everything I had.
            When I finally broke, it sent me home.
          </p>
          <p>
            My spine had been a problem since I was eleven. Years of carrying weight, literally
            and otherwise, turned it into constant pain. Then came the other diagnoses. Complex
            PTSD. Addiction, because that is where a mind that cannot switch off eventually goes
            looking for rest.
          </p>
          <p className="text-ink">
            There came a night where I stood at the edge of not wanting to be here at all.
          </p>
          <p>
            I do not dress that up. It was the worst moment of my life, and it was also the
            turning point. Something in me got hold of a single sentence and would not let go.
            <span className="text-ink"> Your life still has purpose.</span> I did not believe
            it at first. I repeated it anyway.
          </p>
          <p>
            What rebuilt me was not more thinking. I had been thinking my whole life. It was
            learning to work with my body. Releasing what decades of tension had stored.
            Regulating a nervous system that had been on watch since I was a boy. Then, slowly,
            rebuilding strength I could actually trust.
          </p>
          <p>
            That is why I work the way I work. Not because a textbook told me the body keeps
            score, but because I lived it. The clients who do best with me are the ones who
            have tried the talking, read the books, done everything right, and still feel wrong
            in their own skin. I recognise them. I was one.
          </p>
        </div>

        <div>
          <div className="card overflow-hidden">
            <img
              src={paulBw}
              alt="Portrait of PaulAbram in black and white"
              className="w-full object-cover"
            />
          </div>
          <div className="card mt-6 overflow-hidden">
            <img
              src={paulHumanGarage}
              alt="PaulAbram wearing his Human Garage shirt"
              className="w-full object-cover"
            />
            <p className="p-4 text-sm text-soft">
              Qualified through Human Garage. Fascia Maneuvers is a method for releasing fascial
              tension and retraining how the body holds stress.
            </p>
          </div>
          <div className="card mt-6 p-7">
            <p className="eyebrow">Training &amp; experience</p>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-soft">
              <li>13 years coaching and facilitation</li>
              <li>300+ classes taught since May this year</li>
              <li>Human Garage qualified practitioner</li>
              <li>Qualified hypnotherapist</li>
              <li>NLP practitioner</li>
              <li>Bachelor of Metaphysical Science</li>
              <li>Qualified Reiki 2-Mo practitioner</li>
              <li>Yoga and meditation teacher</li>
              <li>Qualifications in mindfulness and nutrition</li>
              <li>Energy work and awakening facilitator</li>
              <li>Royal Engineers veteran, later commissioned RAF Officer</li>
              <li>20+ years of military service</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-stone">
        <div className="container-site py-20">
          <p className="eyebrow">Where I stand</p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            What this work is. And what it is not.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card p-7">
              <h3 className="font-display text-xl font-semibold text-ink">This work is</h3>
              <ul className="mt-4 space-y-3 text-soft">
                {[
                  'Body-led coaching for stress, burnout, and nervous system overload',
                  'Grounded in a structured body-led method and in lived experience',
                  'Structured, honest, and paced to what your body can actually do',
                  'A strong complement to counselling, therapy, and medical care',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7">
              <h3 className="font-display text-xl font-semibold text-ink">This work is not</h3>
              <ul className="mt-4 space-y-3 text-soft">
                {[
                  'Therapy, counselling, or medical treatment',
                  'A quick fix or a guaranteed outcome',
                  'Positive thinking repackaged',
                  'A replacement for your GP, psychiatrist, or therapist',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-soft">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-soft">
            If you are in crisis right now, please contact your GP, call 999, or reach the
            Samaritans on 116 123 (UK, free, day or night). Coaching can come later. You come
            first.
          </p>
        </div>
      </section>

      <section className="container-site py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          If any of this sounds like your life, we should talk.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
            Book a Free Clarity Session
          </a>
          <Link to="/work-with-me" className="btn-ghost">
            See How We Could Work Together
          </Link>
        </div>
      </section>
    </>
  )
}
