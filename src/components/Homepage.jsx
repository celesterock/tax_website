import { useNavigate } from "react-router-dom";
import homepageBackground from "../assets/homepage-vintage-background.png";
import individualIcon from "../assets/icon-individual.png";
import businessIcon from "../assets/icon-business.png";
import planningIcon from "../assets/icon-planning.png";

function LedgerLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(184,154,98,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,154,98,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,154,98,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,27,11,0.12),transparent_36%)]" />
    </div>
  );
}

export default function Homepage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Individual Tax Preparation",
      description:
        "Careful preparation for individuals and families with attention to income, deductions, credits, and filing position.",
    },
    {
      title: "Business Tax Preparation",
      description:
        "Tax support for business owners who need accurate filings and a clearer understanding of their tax picture.",
    },
    {
      title: "Estate & Trust Tax Preparation",
      description:
        "Preparation for fiduciary tax matters requiring careful review, organization, and detail-oriented handling.",
    },
    {
      title: "Tax Planning",
      description:
        "Forward-looking guidance designed to help clients make more informed tax decisions before filing season arrives.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F0E3] text-[#1D211E]">
      <main>
        {/* HERO */}
<section className="homepage-hero">
  <LedgerLines />

  <div className="homepage-hero-inner">
    <div className="homepage-hero-copy">
      <div className="homepage-eyebrow">Foley Tax, OC</div>

      <h1 className="homepage-title">
        Thoughtful tax preparation for clients who value clarity, care, and
        attention.
      </h1>

      <p className="homepage-hero-text">
        Professional tax preparation and planning for individuals, families,
        business owners, estates, and trusts — delivered with care, clarity, and
        close attention to detail.
      </p>

      <div className="homepage-actions">
        <button className="homepage-primary-button">
          Schedule Consultation
        </button>

        <button className="homepage-secondary-button">
          Client Portal
        </button>
      </div>
    </div>

    <div className="homepage-focus-wrap">
      <div
        className="homepage-focus-background"
        style={{ backgroundImage: `url(${homepageBackground})` }}
        aria-hidden="true"
      />

      <div className="homepage-focus-card">
        <div className="homepage-focus-border">
          <div className="homepage-focus-label">Practice Focus</div>

          <div className="homepage-focus-list">
            <div className="homepage-focus-item">
              <img
                src={individualIcon}
                alt=""
                className="homepage-focus-icon"
                aria-hidden="true"
              />

              <div>
                <div className="homepage-focus-title">Individual</div>
                <p className="homepage-focus-text">
                  Tax preparation for clients who value accuracy,
                  communication, and careful review.
                </p>
              </div>
            </div>

            <div className="homepage-focus-divider" />

            <div className="homepage-focus-item">
              <img
                src={businessIcon}
                alt=""
                className="homepage-focus-icon"
                aria-hidden="true"
              />

              <div>
                <div className="homepage-focus-title">Business</div>
                <p className="homepage-focus-text">
                  Support for business owners who want their tax work handled
                  with structure and context.
                </p>
              </div>
            </div>

            <div className="homepage-focus-divider" />

            <div className="homepage-focus-item">
              <img
                src={planningIcon}
                alt=""
                className="homepage-focus-icon"
                aria-hidden="true"
              />

              <div>
                <div className="homepage-focus-title">Planning</div>
                <p className="homepage-focus-text">
                  Guidance designed to help clients think ahead rather than only
                  react at filing time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9F7435]">
                A More Attentive Standard
              </div>

              <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold tracking-tight text-[#101b0b] sm:text-5xl">
                For clients who want more than a rushed filing.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#5C5548]">
              <p>
                Tax preparation should not feel impersonal, rushed, or unclear.
                Our promise is to provide a more thoughtful experience — one
                that considers the client’s full situation, explains what
                matters, and handles the details with care.
              </p>

              <p>
                Whether the matter is straightforward or more involved, the work
                is approached with the same professional standard: organization,
                accuracy, discretion, and clear communication.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-[#B89A62]/25 bg-[#EFE3CB]/45">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <button
                  onClick={() => navigate("/services")}
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9F7435] transition hover:text-[#101b0b]"
                >
                  Services
                </button>

                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#101b0b] sm:text-5xl">
                  Areas of focus.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-[#B89A62]/35 bg-[#F7F0E3] p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#9F7435] hover:shadow-lg"
                >
                  <div className="mb-6 h-px w-14 bg-[#9F7435]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#101b0b]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5C5548]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATOR */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="border border-[#B89A62]/35 bg-[#101b0b] p-8 text-[#F7F0E3]">
              <div className="border border-[#C9B48A]/30 p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9B48A]">
                  Professional Approach
                </div>

                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight">
                  Clear guidance without the high-volume feel.
                </h2>

                <p className="mt-6 text-base leading-8 text-[#D8C9A9]">
                  The practice is designed around careful review and client
                  understanding — not simply moving returns through a queue.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l border-[#B89A62] pl-6">
                <h3 className="font-serif text-2xl font-semibold text-[#101b0b]">
                  Detail-oriented preparation
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5C5548]">
                  Each return is reviewed with attention to the client’s facts,
                  documents, and filing position.
                </p>
              </div>

              <div className="border-l border-[#B89A62] pl-6">
                <h3 className="font-serif text-2xl font-semibold text-[#101b0b]">
                  Planning-minded perspective
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5C5548]">
                  The work is not limited to compliance. Where appropriate, tax
                  planning opportunities are identified and discussed.
                </p>
              </div>

              <div className="border-l border-[#B89A62] pl-6">
                <h3 className="font-serif text-2xl font-semibold text-[#101b0b]">
                  Clear communication
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5C5548]">
                  Clients should understand what is relevant, what is needed,
                  and what decisions may affect their tax outcome.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}