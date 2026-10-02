export const site = {
  name: "PaulAbram",
  title: "PaulAbram — The Fascia Personal Trainer",
  domain: "https://paulabram.io",
  email: "hello@paulabram.io",
  calendly: "https://calendly.com/paulabram/20min",
  youtube: "https://www.youtube.com/@TheGroundedMan-TV",
  blog: "https://paulabram.blogspot.com/",
  instagram: "https://www.instagram.com/paulabramofficial/",
  linkedin:
    "https://www.linkedin.com/in/paulabram-embodiment-architect-0bb170409/",
  assessment: "https://paulabram.io/assessment/",
  apply: "https://paulabram.io/apply/",
  guide: "https://fascia.paulabram.io/",
  description:
    "I work as a personal trainer, but on your fascia, not your muscles. Fascia Manoeuvres — slow, simple movements that release stored stress. Live and free every morning at 7:00 a.m. BST.",
};

/**
 * Form submission: no backend is wired yet, so the form opens the visitor's
 * email client with a pre-filled message to hello@paulabram.io. To use a
 * real endpoint instead (Formspree, Web3Forms, MailerLite…), implement
 * submitToEndpoint and swap the call in Contact.tsx.
 */
export function submitViaMailto(data: {
  name: string;
  email: string;
  message: string;
}) {
  const subject = encodeURIComponent(`Website enquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}\n\n— sent from paulabram.io`
  );
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}
