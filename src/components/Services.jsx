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
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#1D211E]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8C6A35]">
            Services
          </div>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#183A31] sm:text-5xl">
            Tax services
          </h1>

          <p className="mt-5 text-base leading-8 text-[#5E574A]">
            Professional tax preparation and planning for individuals, families,
            business owners, estates, and trusts.
          </p>
        </div>

        <div className="divide-y divide-[#D6C6A3] border-y border-[#D6C6A3]">
          {services.map((service, index) => (
            <section
              key={service.title}
              className="grid gap-8 py-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8C6A35]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="mt-4 max-w-md font-serif text-3xl font-semibold tracking-tight text-[#183A31] sm:text-4xl">
                  {service.title}
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-base leading-8 text-[#4F4A40]">
                  {service.description}
                </p>

                <p className="mt-5 max-w-3xl border-l border-[#A77A35] pl-5 text-sm leading-7 text-[#6B614F]">
                  {service.note}
                </p>

                <div className="mt-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C6A35]">
                    Common situations
                  </div>

                  <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-[#183A31]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A77A35]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}