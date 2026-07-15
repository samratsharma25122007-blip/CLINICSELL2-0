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
        className="mx-auto max-w-6xl rounded-2xl"
        contentClassName="flex items-center justify-between gap-4 px-4 py-3 sm:px-6"
        tint="bg-white/10"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-white"
          aria-label="ClinicSell — back to top"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/30 ring-1 ring-white/30">
            <HeartPulse className="h-5 w-5 text-teal-200" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Clinic<span className="text-teal-300">Sell</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 md:hidden"
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
          tint="bg-black/40"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
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
