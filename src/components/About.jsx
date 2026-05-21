import devinPhoto from "../assets/devin.png";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-main-section">
        <div className="about-main-inner">
          {/* LEFT SIDE - NARRATIVE */}
          <div className="about-narrative">
            <div className="about-narrative-inner">
              <div className="about-section-label">Professional Background</div>

              <h2 className="about-section-title">
                Tax guidance with a practical, client-centered perspective.
              </h2>

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
          </div>

          {/* RIGHT SIDE - PHOTO + CARDS */}
          <aside className="about-sidebar">
            <div className="about-photo-frame">
              <img src={devinPhoto} alt="Devin Foley" className="about-photo" />
            </div>

            <div className="about-info-card">
              <div className="about-card-label">Credentials</div>
              <div className="about-card-text">
                CTEC Registered Tax Preparer (California)
              </div>
            </div>

            <div className="about-info-card">
              <div className="about-card-label">
                7+ Years of Professional Experience
              </div>
              <div className="about-card-text">
                Individual &amp; business tax preparation
              </div>
              <div className="about-card-text">Tax planning &amp; strategy</div>
            </div>

            <div className="about-info-card">
              <div className="about-card-label">Education - CSU Fullerton</div>
              <div className="about-card-text">
                Bachelor of Business Administration (Accounting)
              </div>
              <div className="about-card-text">Master of Taxation</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}