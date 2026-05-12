export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you’re looking for help with tax preparation or planning,
            feel free to reach out. The process is simple and straightforward.
          </p>
        </div>

        {/* Form */}
        <form className="mt-12 space-y-6">
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                First name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Last name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              What can I help you with?
            </label>
            <textarea
              rows="4"
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-900 focus:outline-none"
              placeholder="Briefly describe your situation..."
            />
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition"
            >
              Submit Request
            </button>
          </div>
        </form>

        {/* Alternative Contact */}
        <div className="mt-10 text-center text-sm text-slate-600">
          Prefer email? Reach out directly at{" "}
          <span className="font-medium text-slate-900">
            your@email.com
          </span>
        </div>

      </div>
    </div>
  );
}