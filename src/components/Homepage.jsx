// src/components/Homepage.jsx

import { Link, useNavigate } from "react-router-dom";
import homepageBackground from "../assets/homepage-vintage-background.png";
import "../styles/homepage.css";

export default function Homepage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Individual Tax Preparation",
      description:
        "Careful preparation for individuals and families with attention to income, deductions, credits, and filing position.",
      path: "/services#individual",
    },
    {
      title: "Business Tax Preparation",
      description:
        "Tax support for business owners who need accurate filings and a clearer understanding of their tax picture.",
      path: "/services#business",
    },
    {
      title: "Estate & Trust Tax Preparation",
      description:
        "Preparation for fiduciary tax matters requiring careful review, organization, and detail-oriented handling.",
      path: "/services#estate-trust",
    },
    {
      title: "Tax Planning",
      description:
        "Forward-looking guidance designed to help clients make more informed tax decisions before filing season arrives.",
      path: "/services#planning",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="homepage-hero">
        <div className="homepage-hero-inner">
          <div className="homepage-hero-copy">
            <div className="homepage-eyebrow">Foley Tax, OC</div>

            <h1 className="homepage-title">
              Tax preparation services for clients who value clarity, care,
              and attention.
            </h1>

            <p className="homepage-hero-text">
              Professional tax preparation and planning for individuals,
              families, business owners, estates, and trusts — delivered with
              care, clarity, and close attention to detail.
            </p>

            <div className="homepage-actions">
              <button
                type="button"
                className="homepage-primary-button"
                onClick={() => navigate("/contact")}
              >
                Schedule Consultation
              </button>

              <button
                type="button"
                className="homepage-secondary-button"
                onClick={() => navigate("/client-portal")}
              >
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

            <aside className="homepage-focus-card" aria-label="Practice focus">
              <div className="homepage-focus-border">
                <div className="homepage-focus-label">Practice Focus</div>

                <div className="homepage-focus-list">
                  <div className="homepage-focus-item">
                    <div className="homepage-focus-number">01</div>

                    <div>
                      <h3 className="homepage-focus-title">Individual</h3>
                      <p className="homepage-focus-text">
                        Tax preparation for clients who value accuracy,
                        communication, and careful review.
                      </p>
                    </div>
                  </div>

                  <div className="homepage-focus-divider" />

                  <div className="homepage-focus-item">
                    <div className="homepage-focus-number">02</div>

                    <div>
                      <h3 className="homepage-focus-title">Business</h3>
                      <p className="homepage-focus-text">
                        Support for business owners who want their tax work
                        handled with structure and context.
                      </p>
                    </div>
                  </div>

                  <div className="homepage-focus-divider" />

                  <div className="homepage-focus-item">
                    <div className="homepage-focus-number">03</div>

                    <div>
                      <h3 className="homepage-focus-title">Planning</h3>
                      <p className="homepage-focus-text">
                        Guidance designed to help clients think ahead rather
                        than only react at filing time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="homepage-intro-section">
        <div className="homepage-section-inner homepage-intro-grid">
          <div>
            <div className="homepage-section-eyebrow">
              A More Attentive Standard
            </div>

            <h2 className="homepage-section-title">
              For clients who want more than a rushed filing.
            </h2>
          </div>

          <div className="homepage-intro-copy">
            <p>
              Tax preparation should not feel impersonal, rushed, or unclear.
              Our promise is to provide a more thoughtful experience — one that
              considers the client’s full situation, explains what matters, and
              handles the details with care.
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
      <section className="homepage-services-section">
        <div className="homepage-section-inner">
          <div className="homepage-services-heading-row">
            <button
              type="button"
              onClick={() => navigate("/services")}
              className="homepage-section-eyebrow homepage-section-button"
            >
              Services
            </button>

            <h2 className="homepage-section-title">Areas of focus.</h2>
          </div>

          <div className="homepage-services-grid">
            {services.map((service) => (
              <Link
                to={service.path}
                className="homepage-service-card"
                key={service.title}
              >
                <div className="homepage-service-rule" />
                <h3 className="homepage-service-title">{service.title}</h3>
                <p className="homepage-service-text">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}