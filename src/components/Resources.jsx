export default function Resources() {
  const resourceGroups = [
    {
      title: "Federal",
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
    <div className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Tax Resources
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Helpful links for refunds, payments, forms, and general tax
            information.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resourceGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                {group.title}
              </h2>

              <div className="mt-6 space-y-3">
                {group.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}