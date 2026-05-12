import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              Foley Tax, OC
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Individual &amp; Business Tax Services
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <Link to="/privacy" className="transition hover:text-slate-900">
                Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-slate-900">
                Terms of Use
            </Link>
            <Link to="/disclaimer" className="transition hover:text-slate-900">
                Disclaimer
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {year} Foley Tax, OC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}