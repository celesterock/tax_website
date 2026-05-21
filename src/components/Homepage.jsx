import { useNavigate } from "react-router-dom";
import homepageBackground from "../assets/homepage-vintage-background.png";
import individualIcon from "../assets/icon-individual.png";
import businessIcon from "../assets/icon-business.png";
import planningIcon from "../assets/icon-planning.png";
import "../styles/homepage.css";


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
<section className="homepage-intro-section">
  <div className="homepage-section-inner homepage-intro-grid">
    <div className="homepage-section-heading">
      <div className="homepage-section-eyebrow">
        A More Attentive Standard
      </div>

      <h2 className="homepage-section-title">
        For clients who want more than a rushed filing.
      </h2>
    </div>

    <div className="homepage-intro-copy">
      <p>
        Tax preparation should not feel impersonal, rushed, or unclear. Our
        promise is to provide a more thoughtful experience — one that considers
        the client’s full situation, explains what matters, and handles the
        details with care.
      </p>

      <p>
        Whether the matter is straightforward or more involved, the work is
        approached with the same professional standard: organization, accuracy,
        discretion, and clear communication.
      </p>
    </div>
  </div>
</section>

{/* SERVICES */}
<section className="homepage-services-section">
  <LedgerLines />

  <div className="homepage-section-inner">
    <div className="homepage-services-heading-row">
      <div className="homepage-section-heading">
        <button
          onClick={() => navigate("/services")}
          className="homepage-section-eyebrow homepage-section-button"
        >
          Services
        </button>

        <h2 className="homepage-section-title">Areas of focus.</h2>
      </div>
    </div>

    <div className="homepage-services-grid">
      {services.map((service) => (
        <div key={service.title} className="homepage-service-card">
          <div className="homepage-service-rule" />

          <h3 className="homepage-service-title">{service.title}</h3>

          <p className="homepage-service-text">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      </main>
    </div>
  );
}