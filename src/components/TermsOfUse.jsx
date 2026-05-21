// src/components/TermsOfUse.jsx

import "../styles/terms-of-use.css";

export default function TermsOfUse() {
  return (
    <div className="terms-page">
      <main className="terms-container">
        <section className="terms-card">
          <div className="terms-eyebrow">Website Terms</div>

          <h1 className="terms-title">Terms of Use</h1>

          <div className="terms-rule" />

          <div className="terms-content">
            <p>
              These Terms of Use govern your access to and use of this website.
              By using this site, you agree to these terms. If you do not agree,
              you should not use this website.
            </p>

            <section>
              <h2>Website Content</h2>
              <p>
                The content provided on this website is for general informational
                purposes only. While every effort may be made to keep information
                accurate and current, no representation or warranty is made as to
                the completeness, accuracy, or applicability of any information to
                your specific circumstances.
              </p>
            </section>

            <section>
              <h2>No Professional Relationship Created</h2>
              <p>
                Use of this website, including sending messages through forms or
                email links, does not create a client relationship, fiduciary
                relationship, or any obligation to provide services unless and
                until a formal engagement has been agreed upon.
              </p>
            </section>

            <section>
              <h2>No Legal or Tax Advice</h2>
              <p>
                Information on this website should not be interpreted as legal,
                tax, accounting, or other professional advice for any specific
                person or situation. Decisions should not be made solely on the
                basis of website content without obtaining advice tailored to your
                circumstances.
              </p>
            </section>

            <section>
              <h2>Permitted Use</h2>
              <p>
                You may use this website only for lawful purposes and in a manner
                consistent with these Terms of Use. You may not use this website
                in a way that could damage, disable, interfere with, or impair the
                website or its operation.
              </p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, layout, graphics,
                branding, and other materials, is owned by or used with permission
                by Foley Tax, OC unless otherwise stated. Content may not be
                copied, reproduced, distributed, or reused without prior written
                permission.
              </p>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites for
                convenience or reference. Foley Tax, OC does not control and
                is not responsible for the content, accuracy, or availability of
                any third-party site.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Foley Tax, OC
                disclaims liability for any loss or damages arising out of or
                related to the use of this website or reliance on its content.
              </p>
            </section>

            <section>
              <h2>Changes to These Terms</h2>
              <p>
                These Terms of Use may be updated from time to time without prior
                notice. Continued use of the website after changes are posted
                constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}