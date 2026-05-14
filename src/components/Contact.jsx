export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#1D211E]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* PAGE INTRO */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8C6A35]">
              Contact
            </div>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#183A31] sm:text-5xl">
              Get in touch
            </h1>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#5E574A]">
            Whether you are looking for help with tax preparation or planning,
            feel free to reach out. The process is simple, thoughtful, and
            straightforward.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
          {/* FORM */}
          <form className="border-y border-[#D6C6A3] py-10">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8C6A35]">
                Submit a request
              </div>

              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-[#183A31] sm:text-4xl">
                Tell us a little about your tax situation.
              </h2>

              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-[#4F4A40]">
                      First name
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full border border-[#D6C6A3] bg-[#FBF8F1] px-4 py-3 text-[#183A31] outline-none transition placeholder:text-[#8A806D] focus:border-[#8C6A35] focus:bg-[#FFFDF8]"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#4F4A40]">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full border border-[#D6C6A3] bg-[#FBF8F1] px-4 py-3 text-[#183A31] outline-none transition placeholder:text-[#8A806D] focus:border-[#8C6A35] focus:bg-[#FFFDF8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#4F4A40]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full border border-[#D6C6A3] bg-[#FBF8F1] px-4 py-3 text-[#183A31] outline-none transition placeholder:text-[#8A806D] focus:border-[#8C6A35] focus:bg-[#FFFDF8]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#4F4A40]">
                    What can I help you with?
                  </label>
                  <textarea
                    rows="5"
                    className="mt-2 w-full resize-none border border-[#D6C6A3] bg-[#FBF8F1] px-4 py-3 text-[#183A31] outline-none transition placeholder:text-[#8A806D] focus:border-[#8C6A35] focus:bg-[#FFFDF8]"
                    placeholder="Briefly describe your situation..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-[#183A31] bg-[#183A31] px-6 py-3.5 text-sm font-semibold text-[#FAF5EA] transition hover:bg-[#244D42]"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>

          {/* SIDE DETAILS */}
          <aside className="lg:sticky lg:top-28">
            <div className="border border-[#D6C6A3] bg-[#FBF8F1] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8C6A35]">
                Direct email
              </div>

              <div className="mt-3 text-base leading-7 text-[#183A31]">
                Devin@FoleyTax.com
              </div>

              <p className="mt-4 text-sm leading-7 text-[#5E574A]">
                Use the form or reach out directly by email. A brief description
                of your situation can help make the first conversation more
                productive.
              </p>
            </div>

            <div className="mt-4 border border-[#D6C6A3] bg-[#FBF8F1] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8C6A35]">
                Services
              </div>

              <div className="mt-4 space-y-3 text-sm leading-6 text-[#4F4A40]">
                <p>Individual tax preparation</p>
                <p>Business tax preparation</p>
                <p>Estate and trust tax preparation</p>
                <p>Tax planning and strategy</p>
              </div>
            </div>

            <div className="mt-4 border border-[#D6C6A3] bg-[#FBF8F1] p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8C6A35]">
                Process
              </div>

              <div className="mt-4 space-y-3 text-sm leading-6 text-[#4F4A40]">
                <p>1. Submit a request</p>
                <p>2. Review your needs</p>
                <p>3. Determine the next steps</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}