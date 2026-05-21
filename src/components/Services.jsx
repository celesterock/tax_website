// src/components/Services.jsx

import "../styles/services.css";

const services = [
  {
    id: "individual",
    number: "01",
    title: "Individual Tax Preparation",
    description:
      "Careful preparation of federal and state income tax returns for individuals and families, with attention to income, deductions, credits, filing position, and the details that affect the final return.",
    items: [
      "W-2 income",
      "1099 income and independent contractors",
      "Investment income, dividends, and capital gains",
      "Rental property activity",
      "Retirement income, including pensions and IRAs",
    ],
    note:
      "Appropriate for first-time filers, working professionals, retirees, and individuals with more involved reporting needs.",
  },
  {
    id: "business",
    number: "02",
    title: "Business Tax Preparation",
    description:
      "Tax return preparation for business owners who need accurate filings, organized records, and a clearer understanding of how their business activity affects their tax position.",
    items: [
      "Sole proprietorships",
      "Partnerships",
      "S-Corporations",
      "C-Corporations",
      "Owner compensation and tax planning considerations",
    ],
    note:
      "Designed for business owners who want a dependable process and more context around their annual filing obligations.",
  },
  {
    id: "estate-trust",
    number: "03",
    title: "Estate & Trust Tax Preparation",
    description:
      "Preparation and support for estate and trust tax matters requiring careful organization, fiduciary awareness, and coordination with the broader financial picture.",
    items: [
      "Trust income tax return preparation",
      "Estate tax return preparation",
      "Gift tax reporting considerations",
      "Trust administration support",
      "Coordination with attorneys and financial advisors",
    ],
    note:
      "Estate and trust work often involves multiple parties and sensitive timelines. A structured approach helps keep the process clear and properly documented.",
  },
  {
    id: "planning",
    number: "04",
    title: "Tax Planning & Strategy",
    description:
      "Forward-looking guidance for clients who want to better understand their position, avoid surprises, and make tax decisions before filing season arrives.",
    items: [
      "Estimated tax planning",
      "Entity structure considerations",
      "Income timing and deduction strategies",
      "Long-term tax positioning",
      "Planning for major financial changes",
    ],
    note:
      "Helpful for clients who prefer a proactive relationship rather than only addressing tax questions after the year has ended.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <main>
        <section className="services-hero">
          <div className="services-container services-hero-inner">
            <div className="services-hero-copy">
              <div className="services-eyebrow">Services</div>

              <h1 className="services-title">
                Professional tax preparation and planning services.
              </h1>

              <p className="services-intro">
                Tax support for individuals, families, business owners, estates,
                and trusts, with an emphasis on careful preparation, clear
                communication, and thoughtful planning.
              </p>

              <div className="services-hero-rule" />
            </div>

            <aside className="services-hero-card" aria-label="Service overview">
              <div className="services-card-kicker">Practice Areas</div>

              <div className="services-quick-list">
                {services.map((service) => (
                  <a key={service.id} href={`#${service.id}`}>
                    <span>{service.number}</span>
                    <strong>{service.title}</strong>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="services-statement-section">
          <div className="services-container">
            <div className="services-statement">
              <div className="services-statement-label">Approach</div>
              <p>
                Tax preparation should feel organized, understandable, and
                proactive — with each service structured around accuracy,
                communication, and a clear view of the client’s overall tax
                position.
              </p>
            </div>
          </div>
        </section>

        <section className="services-list-section">
          <div className="services-container">
            <div className="services-list">
              {services.map((service) => (
                <article
                  className="service-panel"
                  id={service.id}
                  key={service.id}
                >
                  <div className="service-panel-heading">
                    <div className="service-number">{service.number}</div>

                    <div>
                      <p className="service-category">Service Area</p>
                      <h3>{service.title}</h3>
                    </div>
                  </div>

                  <div className="service-panel-body">
                    <p className="service-description">
                      {service.description}
                    </p>

                    <div className="service-details">
                      <p className="service-details-label">
                        Common situations
                      </p>

                      <ul>
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="service-note">{service.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}