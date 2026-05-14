import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#B89A62]/30 bg-[#183A31] text-[#F7F0E3]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="font-serif text-2xl font-semibold tracking-tight">
              Foley Tax, OC
            </div>
            <div className="mt-2 text-sm uppercase tracking-[0.22em] text-[#C9B48A]">
              Individual & Business Tax Services
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#D8C9A9]">
              Thoughtful tax preparation and planning for individuals, families,
              business owners, estates, and trusts.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9B48A]">
              Navigation
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#F7F0E3]/85">
              <Link to="/" className="transition hover:text-[#C9B48A]">
                Home
              </Link>
              <Link to="/services" className="transition hover:text-[#C9B48A]">
                Services
              </Link>
              <Link to="/about" className="transition hover:text-[#C9B48A]">
                About
              </Link>
              <Link to="/contact" className="transition hover:text-[#C9B48A]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9B48A]">
              Legal
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#F7F0E3]/85">
              <Link to="/privacy" className="transition hover:text-[#C9B48A]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition hover:text-[#C9B48A]">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="transition hover:text-[#C9B48A]">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#F7F0E3]/15 pt-6 text-xs text-[#D8C9A9]">
          © {year} Foley Tax, OC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}