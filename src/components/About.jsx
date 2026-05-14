import devinPhoto from "../assets/devin.png";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#1D211E]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* PAGE INTRO */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8C6A35]">
              About
            </div>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#183A31] sm:text-5xl">
              Devin Foley
            </h1>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
          {/* LEFT SIDE - NARRATIVE */}
          <div className="border-y border-[#D6C6A3] py-10">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8C6A35]">
                Professional Background
              </div>

              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-[#183A31] sm:text-4xl">
                Tax guidance with a practical, client-centered perspective.
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#4F4A40]">
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
          <div className="space-y-4 lg:sticky lg:top-28">
            <div className="border border-[#D6C6A3] bg-[#F7F0E3] p-3 shadow-sm">
              <img
                src={devinPhoto}
                alt="Devin Foley"
                className="w-full object-cover shadow-sm"
              />
            </div>

            <div className="border border-[#D6C6A3] bg-[#FBF8F1] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8C6A35]">
                Credentials
              </div>
              <div className="mt-3 text-base leading-7 text-[#183A31]">
                CTEC Registered Tax Preparer (California)
              </div>
            </div>

            <div className="border border-[#D6C6A3] bg-[#FBF8F1] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8C6A35]">
                7+ Years of Professional Experience
              </div>
              <div className="mt-3 text-base leading-7 text-[#183A31]">
                Individual & business tax preparation
              </div>
              <div className="mt-1 text-base leading-7 text-[#183A31]">
                Tax planning & strategy
              </div>
            </div>

            <div className="border border-[#D6C6A3] bg-[#FBF8F1] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8C6A35]">
                Education - CSU Fullerton
              </div>
              <div className="mt-3 text-base leading-7 text-[#183A31]">
                Bachelor of Business Administration (Accounting)
              </div>
              <div className="mt-1 text-base leading-7 text-[#183A31]">
                Master of Taxation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}