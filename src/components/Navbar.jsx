import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
    <Link
    to="/"
    onClick={() => {
        if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }}
    className="block"
    >
    <div className="text-xl font-semibold tracking-tight">
        Foley Tax, OC
    </div>
    <div className="text-sm text-slate-500">
        Individual & Business Tax Services
    </div>
    </Link>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
            <Link to="/" className="transition hover:text-slate-600">
            Home
            </Link>
            <Link to="/services" className="transition hover:text-slate-600">
            Services
            </Link>
          <Link to="/about" className="transition hover:text-slate-600">
            About
          </Link>
          <Link to="/contact" className="transition hover:text-slate-600">
            Contact
          </Link>
          <Link to="/resources" className="transition hover:text-slate-600">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100">
            Client Portal
          </button>
          <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700">
            Schedule Consultation
          </button>
        </div>
      </div>
    </header>
  );
}