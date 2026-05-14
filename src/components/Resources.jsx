export default function Resources() {
  const resourceGroups = [
    {
      title: "Federal",
      description: "IRS resources for refunds, payments, forms, and withholding.",
      links: [
        {
          name: "Check Refund Status",
          url: "https://www.irs.gov/refunds",
        },
        {
          name: "Make a Payment",
          url: "https://www.irs.gov/payments",
        },
        {
          name: "Check Amended Return Status",
          url: "https://www.irs.gov/filing/wheres-my-amended-return",
        },
        {
          name: "W-4 Tax Withholding Estimator",
          url: "https://www.irs.gov/individuals/tax-withholding-estimator",
        },
        {
          name: "IRS Forms & Publications",
          url: "https://www.irs.gov/forms-instructions",
        },
      ],
    },
    {
      title: "California",
      description:
        "California Franchise Tax Board resources for state filings, payments, and forms.",
      links: [
        {
          name: "Check Refund Status",
          url: "https://www.ftb.ca.gov/refund/index.asp",
        },
        {
          name: "Make a Payment",
          url: "https://www.ftb.ca.gov/pay/index.html",
        },
        {
          name: "State Tax Forms",
          url: "https://www.ftb.ca.gov/forms/",
        },
        {
          name: "Estimated Tax Information",
          url: "https://www.ftb.ca.gov/pay/estimated-tax-payments.html",
        },
      ],
    },
    {
      title: "General",
      description:
        "Common reference links for due dates, records, and general tax information.",
      links: [
        {
          name: "Tax Due Dates",
          url: "https://www.irs.gov/filing/individuals/when-to-file",
        },
        {
          name: "Record Retention Guide",
          url:
            "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#1D211E]">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* PAGE INTRO */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8C6A35]">
              Resources
            </div>

            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#183A31] sm:text-5xl">
              Tax resources
            </h1>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#5E574A]">
            Helpful links for refunds, payments, forms, due dates, withholding,
            and general tax information.
          </p>
        </div>

        {/* RESOURCE GROUPS */}
        <div className="divide-y divide-[#D6C6A3] border-y border-[#D6C6A3]">
          {resourceGroups.map((group, index) => (
            <section
              key={group.title}
              className="grid gap-8 py-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8C6A35]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#183A31] sm:text-4xl">
                  {group.title}
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#6B614F]">
                  {group.description}
                </p>
              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-[#D6C6A3] bg-[#FBF8F1] px-5 py-4 text-sm font-medium text-[#183A31] transition hover:border-[#8C6A35] hover:bg-[#F7F0E3]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span>{link.name}</span>
                        <span className="text-[#8C6A35] transition group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* NOTE */}
        <div className="mt-10 max-w-3xl border-l border-[#A77A35] pl-5 text-sm leading-7 text-[#6B614F]">
          These links are provided as convenient references to federal and state
          tax resources. For questions about how a tax rule applies to your
          specific situation, professional guidance is recommended.
        </div>
      </section>
    </div>
  );
}