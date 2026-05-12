import devinPhoto from "../assets/devin.png";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            About
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A more personal, thoughtful approach to tax preparation and planning.
          </p>

          {/* Credential Strip */}
  <div className="mt-8 flex flex-wrap gap-3">
  {[
    "CTEC Registered Tax Preparer",
    "Master of Science, Taxation",
    "Bachelor of Business Administration, Accounting",
  ].map((item) => (
    <div
      key={item}
      className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-900 shadow-sm"
    >
      {item}
    </div>
  ))}
</div>
           </div> {/* 👈 THIS WAS MISSING */}

        {/* Main Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Side - Narrative */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">
              Devin Foley
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Devin began working in tax professionally in 2019, focusing on both
              individual and business tax preparation. Over time, his work has
              expanded beyond filing returns into helping clients better understand
              their financial position and make more informed decisions throughout
              the year.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              His approach is centered on making the process as simple and low-stress 
              as possible for his clients, while still keeping them informed and confident 
              in their decisions. Rather than expecting clients to navigate complex tax 
              rules on their own, Devin acts as a bridge between the technical side of tax 
              and what it actually means for their situation, helping them stay in the best 
              possible position.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
            In addition to tax preparation, Devin works closely with clients on tax strategy, 
            taking a more attentive and individualized approach compared to high-volume practices. 
            By spending the time to fully understand each client’s situation, he is often able to 
            identify opportunities that might otherwise be overlooked, leading to more effective 
            planning and meaningful tax savings over time.
            </p>
          </div>

          {/* Right Side - Photo + Cards */}
          <div className="space-y-4">
            <img
              src={devinPhoto}
              alt="Devin Foley"
              className="w-full rounded-2xl object-cover shadow-sm"
            />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium text-slate-500">
                Credentials
              </div>
              <div className="mt-2 text-base text-slate-900">
                CTEC Registered Tax Preparer (California)
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium text-slate-500">
                7+ Years of Professional Experience
              </div>
              <div className="mt-2 text-base text-slate-900">
                Individual & business tax preparation
              </div>
              <div className="mt-1 text-base text-slate-900">
                Tax planning & strategy
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-medium text-slate-500">
                Education - CSU Fullerton
              </div>
              <div className="mt-2 text-base text-slate-900">
                Bachelor of Business Administration (Accounting)
              </div>
              <div className="mt-1 text-base text-slate-900">
                Master of Taxation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}