// src/components/PrivacyPolicy.jsx

import "../styles/privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <main className="privacy-container">
        <section className="privacy-card">
          <div className="privacy-eyebrow">Privacy</div>

          <h1 className="privacy-title">Privacy Policy</h1>

          <div className="privacy-rule" />

          <div className="privacy-content">
            <p>
              Foley Tax, OC respects your privacy and is committed to
              protecting the information you choose to share through this website.
              This Privacy Policy explains, in general terms, how information may
              be collected, used, and protected when you visit this site or submit
              information through its forms.
            </p>

            <section>
              <h2>Information Collected</h2>
              <p>
                Information submitted through this website may include your name,
                email address, phone number, and any other details you voluntarily
                provide when requesting contact or consultation.
              </p>
            </section>

            <section>
              <h2>Use of Information</h2>
              <p>
                Information provided through this website may be used to respond to
                inquiries, communicate regarding services, and maintain internal
                business records. Information will not be sold or shared with third
                parties except as reasonably necessary to operate the website,
                comply with legal obligations, or protect business interests.
              </p>
            </section>

            <section>
              <h2>Website and Communication Security</h2>
              <p>
                Reasonable measures may be used to protect information transmitted
                through this website. However, no website, email system, or online
                transmission method can be guaranteed completely secure. Visitors
                should avoid sending highly sensitive personal or financial
                information through general website forms or unsecured email unless
                specifically instructed to do so through an approved secure method.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                This website may use standard website technologies such as cookies
                or analytics tools to improve functionality, understand traffic,
                and enhance the user experience.
              </p>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites or portals.
                Foley Tax, OC is not responsible for the privacy practices,
                content, or security of third-party sites.
              </p>
            </section>

            <section>
              <h2>Policy Updates</h2>
              <p>
                This Privacy Policy may be updated from time to time without prior
                notice. Continued use of the website indicates acceptance of any
                revised policy.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}