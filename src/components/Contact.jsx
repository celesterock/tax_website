// src/components/Contact.jsx

import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <main>
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-main">
              <div className="contact-eyebrow">Contact</div>

              <h1 className="contact-title">Get in touch</h1>

              <p className="contact-intro">
                Whether you are looking for help with tax preparation or
                planning, feel free to reach out. The process is simple,
                thoughtful, and straightforward.
              </p>

              <form className="contact-form">
                <div className="contact-form-heading">
                  <div className="contact-card-rule" />

                  <p className="contact-form-label">Submit a request</p>

                  <h2>Tell us a little about your tax situation.</h2>
                </div>

                <div className="contact-form-grid">
                  <label className="contact-field">
                    <span>First name</span>
                    <input type="text" name="firstName" />
                  </label>

                  <label className="contact-field">
                    <span>Last name</span>
                    <input type="text" name="lastName" />
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>Email</span>
                    <input type="email" name="email" />
                  </label>

                  <label className="contact-field contact-field-full">
                    <span>What can I help you with?</span>
                    <textarea name="message" rows="7" />
                  </label>
                </div>

                <button type="submit" className="contact-submit-button">
                  Submit Request
                </button>
              </form>

              <p className="contact-note">
                Please do not include sensitive personal information, Social
                Security numbers, or tax documents in this form. After your
                request is reviewed, you will be contacted with the appropriate
                next step.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}