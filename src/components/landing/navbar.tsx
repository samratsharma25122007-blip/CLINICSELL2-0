import { useState } from "react";
import { HeartPulse, Menu, X } from "lucide-react";
import { GlassPanel, GlassCTA } from "./glass";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Doctors", href: "#doctors" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#appointment" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <GlassPanel
        distort
        className="reveal-down mx-auto max-w-6xl rounded-2xl"
        contentClassName="flex items-center justify-between gap-4 px-4 py-3 sm:px-6"
        tint="bg-white/55"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-slate-900"
          aria-label="ClinicSell — back to top"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 ring-1 ring-teal-600/20">
            <HeartPulse className="h-5 w-5 text-teal-600" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Clinic<span className="text-teal-600">Sell</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-900/5 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GlassCTA href="#appointment" className="px-5 py-2.5 text-sm">
            Book Appointment
          </GlassCTA>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-slate-900/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </GlassPanel>

      {open && (
        <GlassPanel
          id="mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-2xl md:hidden"
          contentClassName="flex flex-col gap-1 p-4"
          tint="bg-white/70"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-900/5 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <GlassCTA
            href="#appointment"
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Book Appointment
          </GlassCTA>
        </GlassPanel>
      )}
    </header>
  );
}
