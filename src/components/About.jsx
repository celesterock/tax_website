// src/components/About.jsx

import devinPhoto from "../assets/devin.png";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      <main>
        <section className="about-section">
          <div className="about-container about-grid">
            <div className="about-narrative">
              <div className="about-eyebrow">Professional Background</div>

              <h1 className="about-title">
                Tax guidance with a practical, client-centered perspective.
              </h1>

              <div className="about-copy">
                <p>
                  Devin began working in tax professionally in 2019, focusing on
                  both individual and business tax preparation. Over time, his
                  work has expanded beyond filing returns into helping clients
                  better understand their financial position and make more
                  informed decisions throughout the year.
                </p>

                <p>
                  His approach is centered on making the process as simple and
                  low-stress as possible for his clients, while still keeping
                  them informed and confident in their decisions. Rather than
                  expecting clients to navigate complex tax rules on their own,
                  Devin acts as a bridge between the technical side of tax and
                  what it actually means for their situation, helping them stay
                  in the best possible position.
                </p>

                <p>
                  In addition to tax preparation, Devin works closely with
                  clients on tax strategy, taking a more attentive and
                  individualized approach compared to high-volume practices. By
                  spending the time to fully understand each client’s situation,
                  he is often able to identify opportunities that might otherwise
                  be overlooked, leading to more effective planning and
                  meaningful tax savings over time.
                </p>
              </div>
            </div>

            <aside className="about-sidebar" aria-label="Credentials and education">
              <div className="about-photo-card">
                <div className="about-photo-frame">
                  <img
                    src={devinPhoto}
                    alt="Devin Foley"
                    className="about-photo"
                  />
                </div>
              </div>

              <div className="about-info-card">
                <div className="about-card-rule" />
                <p className="about-card-label">Credentials</p>

                <div className="about-card-list">
                  <p>CTEC Registered Tax Preparer (California)</p>
                  <p>7+ Years of Professional Experience</p>
                </div>
              </div>

              <div className="about-info-card">
                <div className="about-card-rule" />
                <p className="about-card-label">Practice Focus</p>

                <div className="about-card-list">
                  <p>Individual &amp; business tax preparation</p>
                  <p>Tax planning &amp; strategy</p>
                </div>
              </div>

              <div className="about-info-card">
                <div className="about-card-rule" />
                <p className="about-card-label">Education - CSU Fullerton</p>

                <div className="about-card-list">
                  <p>Bachelor of Business Administration (Accounting)</p>
                  <p>Master of Taxation</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}