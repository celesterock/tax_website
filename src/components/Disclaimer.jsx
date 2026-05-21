// src/components/Disclaimer.jsx

import "../styles/disclaimer.css";

export default function Disclaimer() {
  return (
    <div className="disclaimer-page">
      <main className="disclaimer-container">
        <section className="disclaimer-card">
          <div className="disclaimer-eyebrow">Website Notice</div>

          <h1 className="disclaimer-title">Disclaimer</h1>

          <div className="disclaimer-rule" />

          <div className="disclaimer-content">
            <p>
              The information provided on this website is for general informational
              purposes only and should not be relied upon as tax, legal, or
              financial advice.
            </p>

            <section>
              <h2>No Professional Advice</h2>
              <p>
                Content on this website is not intended to serve as a substitute
                for professional advice tailored to your individual situation.
                Tax laws and regulations are complex and subject to change.
                You should consult with a qualified professional before making
                any decisions based on information found on this website.
              </p>
            </section>

            <section>
              <h2>No Client Relationship</h2>
              <p>
                Accessing this website, sending messages, or interacting with
                content does not create a client, advisory, or fiduciary
                relationship. A formal engagement agreement is required before
                any professional services are provided.
              </p>
            </section>

            <section>
              <h2>Accuracy of Information</h2>
              <p>
                While reasonable efforts may be made to keep the information on
                this website accurate and up to date, no guarantee is made as to
                its completeness or accuracy. Information may become outdated or
                may not apply to your specific circumstances.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                Foley Tax, OC is not responsible for any loss or damages
                resulting from reliance on information contained on this website
                or from the use of this site.
              </p>
            </section>

            <section>
              <h2>External Links</h2>
              <p>
                This website may include links to third-party websites for
                convenience. Foley Tax, OC does not control and is not
                responsible for the content or practices of those external sites.
              </p>
            </section>

            <section>
              <h2>Changes to This Disclaimer</h2>
              <p>
                This disclaimer may be updated from time to time without prior
                notice. Continued use of the website indicates acceptance of any
                changes.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}