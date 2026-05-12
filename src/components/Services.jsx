export default function Services() {
  const services = [
    {
      title: "Individual Tax Preparation",
      description:
        "Preparation of federal and state income tax returns for individuals across a wide range of financial situations, from simple filings to more involved returns.",
      items: [
        "W-2 income",
        "1099 income and independent contractors",
        "Investment income, dividends, and capital gains",
        "Rental property activity",
        "Retirement income, including pensions and IRAs",
      ],
      note:
        "Appropriate for first-time filers, working professionals, retirees, and individuals with more complex reporting needs.",
    },
    {
      title: "Business Tax Preparation",
      description:
        "Tax return preparation for businesses with an emphasis on accuracy, organization, and a dependable filing process year after year.",
      items: [
        "Sole proprietorships",
        "Partnerships",
        "S-Corporations",
        "C-Corporations",
      ],
      note:
        "Designed for business owners who want a clear and reliable process for staying current and well-positioned.",
    },
    {
      title: "Estate & Trust Tax Preparation",
      description:
        "Preparation and planning for estate and trust tax matters, with a focus on preserving assets, managing fiduciary obligations, and supporting long-term family and business continuity.",
      items: [
        "Trust income tax return preparation",
        "Estate tax return preparation",
        "Gift tax reporting and planning considerations",
        "Business succession and transition planning",
        "Trust administration support",
        "Coordination with attorneys and financial advisors",
      ],
      note:
        "Estate and trust work often involves multiple parties and evolving tax rules. A structured approach helps ensure compliance while maintaining alignment with broader financial objectives.",
    },
    {
      title: "Tax Planning & Strategy",
      description:
        "Forward-looking tax guidance for clients who want to better understand their position and identify planning opportunities before deadlines arrive.",
      items: [
        "Estimated tax planning",
        "Entity structure considerations",
        "Income timing and deduction strategies",
        "Long-term tax positioning",
      ],
      note:
        "Helpful for clients who want to be more proactive and thoughtful about tax decisions throughout the year.",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Services
          </div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tax support built for a wide range of clients and situations.
          </h1>
        </div>

        <div className="mt-14 grid gap-8">
          {services.map((service) => (
            <section
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                    {service.description}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {service.note}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                  <div className="text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
                    Common situations
                  </div>
                  <div className="mt-4 space-y-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-white px-4 py-3 text-sm text-slate-800 ring-1 ring-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}