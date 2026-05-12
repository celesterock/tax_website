import { useNavigate } from "react-router-dom";
import heroImage from "../assets/taxes.jpeg";

function AnimatedBlueLines() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] overflow-hidden lg:block">
      <svg
        viewBox="0 0 900 520"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {[...Array(22)].map((_, i) => (
          <path
            key={i}
            d={`M -80 ${220 + i * 7} C 160 ${80 + i * 5}, 350 ${
              380 - i * 4
            }, 560 ${250 + i * 4} S 860 ${130 + i * 5}, 980 ${
              250 + i * 3
            }`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            opacity={0.08 + i * 0.01}
            className="animate-wave"
            style={{
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Homepage() {
  const navigate = useNavigate();

  const services = [
    { title: "Individual Tax Preparation" },
    { title: "Business Tax Preparation" },
    {title: "Estate & Trust Tax Preparation"},
    { title: "Tax Planning" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(15,23,42,0.08),_transparent_28%)]" />
           <AnimatedBlueLines />
          
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28"><div>
              <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Foley Tax, OC
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Tax preparation and planning for individuals and businesses.
              </h1>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:bg-slate-700">
                  Schedule Consultation
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100">
                  Client Portal
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Overview
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Professional tax support built around the client’s unique situation.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Services are available for individuals, families, and business
                owners across a wide range of tax situations. Whether a return is
                relatively straightforward or more involved, the goal is to provide
                the same level of care, accuracy, and attention to detail.
              </p>

              <p>
                The practice is built around a more attentive approach than
                high-volume preparation. That means taking the time to understand
                the client’s circumstances, explain what is relevant, and identify
                opportunities that may otherwise be missed.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => navigate("/services")}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-700"
            >
              Services
            </button>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Areas of focus.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                {service.title}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Foley Tax, OC
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Thoughtful tax preparation and planning for individuals and businesses.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  If you are looking for a more attentive, structured approach to
                  handling your taxes, the next step is to schedule a consultation.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                  Schedule Consultation
                </button>
                <button className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Client Portal
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}