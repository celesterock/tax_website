// src/components/Resources.jsx

import "../styles/resources.css";

export default function Resources() {
  const resourceGroups = [
    {
      title: "Federal",
      description: "IRS resources for refunds, payments, forms, and withholding.",
      links: [
        { name: "Check Refund Status", url: "https://www.irs.gov/refunds" },
        { name: "Make a Payment", url: "https://www.irs.gov/payments" },
        {
          name: "Check Amended Return Status",
          url: "https://www.irs.gov/filing/wheres-my-amended-return",
        },
        {
          name: "W-4 Tax Withholding Estimator",
          url: "https://www.irs.gov/individuals/tax-withholding-estimator",
        },
        {
          name: "IRS Forms & Publications",
          url: "https://www.irs.gov/forms-instructions",
        },
      ],
    },
    {
      title: "California",
      description:
        "California Franchise Tax Board resources for state filings, payments, and forms.",
      links: [
        {
          name: "Check Refund Status",
          url: "https://www.ftb.ca.gov/refund/index.asp",
        },
        {
          name: "Make a Payment",
          url: "https://www.ftb.ca.gov/pay/index.html",
        },
        {
          name: "State Tax Forms",
          url: "https://www.ftb.ca.gov/forms/",
        },
        {
          name: "Estimated Tax Information",
          url: "https://www.ftb.ca.gov/pay/estimated-tax-payments.html",
        },
      ],
    },
    {
      title: "General",
      description:
        "Common reference links for due dates, records, and general tax information.",
      links: [
        {
          name: "Tax Due Dates",
          url: "https://www.irs.gov/filing/individuals/when-to-file",
        },
        {
          name: "Record Retention Guide",
          url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records",
        },
      ],
    },
  ];

  return (
    <div className="resources-page">
      <main>
        <section className="resources-intro-section">
          <div className="resources-container resources-intro-grid">
            <div className="resources-intro-copy">
              <div className="resources-eyebrow">Resources</div>

              <h1 className="resources-title">Tax resources</h1>

              <p className="resources-intro">
                Helpful links for refunds, payments, forms, due dates,
                withholding, and general tax information.
              </p>

              <div className="resources-hero-rule" />
            </div>

            <aside
              className="resources-reference-card"
              aria-label="Resource overview"
            >
              <p className="resources-card-label">Reference Links</p>

              <div className="resources-quick-list">
                {resourceGroups.map((group, index) => (
                  <a key={group.title} href={`#${group.title.toLowerCase()}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{group.title}</strong>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="resources-statement-section">
          <div className="resources-container">
            <div className="resources-statement">
              <div className="resources-statement-label">Reference</div>

              <p>
                These links are provided as a convenient starting point for
                common tax questions, payment needs, refund tracking, and
                federal or state forms.
              </p>
            </div>
          </div>
        </section>

        <section className="resources-list-section">
          <div className="resources-container">
            <div className="resources-list">
              {resourceGroups.map((group, index) => (
                <article
                  className="resource-panel"
                  id={group.title.toLowerCase()}
                  key={group.title}
                >
                  <div className="resource-panel-heading">
                    <div className="resource-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="resource-category">Resource Area</p>
                      <h2>{group.title}</h2>
                    </div>
                  </div>

                  <div className="resource-panel-body">
                    <p className="resource-description">
                      {group.description}
                    </p>

                    <div className="resource-links">
                      {group.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.name}
                          <span aria-hidden="true">→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="resources-note">
              <p>
                These links are provided as convenient references to federal and
                state tax resources. For questions about how a tax rule applies
                to your specific situation, professional guidance is recommended.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}