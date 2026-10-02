import { useState } from "react";
import Seo from "@/components/Seo";

/**
 * Moonrise Reset — minimal join page (standalone, no site chrome).
 *
 * Flow: moon + title + dates + one big JOIN button → the MailerLite form
 * ("Moonrise join up", embedded via its share URL) → MailerLite shows its
 * own "Thank you!" and the automation emails the Zoom link.
 * The by-donation note + PayPal button sit under the form.
 */
const ML_SHARE_URL =
  "https://preview.mailerlite.io/forms/2538549/200204709183620485/share";
const DONATE_URL = "https://www.paypal.com/ncp/payment/X4PCYBV2ZLRZJ";

export default function Moonrise() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white antialiased">
      <Seo
        title="Moonrise Reset — 21-Day Energy Body Reset"
        description="21 days to rebuild the energy body, from the waning moon to the Full Hunter's Moon. By donation. All welcome."
      />
      <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
        {/* Moon */}
        <div
          aria-hidden
          className="mb-10 h-40 w-40 rounded-full sm:h-52 sm:w-52"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #ffeeb3 0%, #ffb347 60%, #d48a2e 100%)",
            boxShadow: "0 0 60px rgba(255, 179, 71, 0.35)",
          }}
        />

        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-amber-300/90">
          The Grounded Man TV
        </p>
        <h1 className="mb-3 font-display text-5xl italic tracking-tight sm:text-6xl">
          Moonrise Reset
        </h1>
        <p className="mb-1 text-slate-300">21 days to rebuild the energy body</p>
        <p className="mb-10 text-sm text-slate-400">
          Mon 5 Oct → Full Hunter's Moon, 26 Oct · By donation
        </p>

        {!showForm ? (
          <>
            <button
              onClick={() => setShowForm(true)}
              className="rounded-full bg-amber-400 px-16 py-4 text-xl font-bold tracking-wide text-[#0a0b1a] transition hover:bg-amber-300"
            >
              JOIN
            </button>
            <p className="mt-6 text-sm text-slate-500">
              You'll receive your Zoom link by email before we begin.
            </p>
          </>
        ) : (
          <div className="w-full max-w-md">
            <div className="overflow-hidden rounded-2xl bg-white">
              <iframe
                src={ML_SHARE_URL}
                title="Join the Moonrise Reset"
                className="h-[700px] w-full border-0 sm:h-[720px]"
              />
            </div>
            <p className="mt-6 text-sm text-slate-400">
              The Reset runs by donation — no fixed fee. After you've joined,
              you're welcome to give what feels right. No one turned away.
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-amber-400 px-10 py-3 font-bold text-[#0a0b1a] transition hover:bg-amber-300"
            >
              Make a donation
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
