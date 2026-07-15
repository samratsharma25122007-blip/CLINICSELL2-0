import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { GlassPanel, GlassCTA, SectionHeading } from "./glass";
import { Reveal } from "./reveal";

const contactItems = [
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["221 Wellness Avenue, Suite 4", "Midtown, Your City 400001"],
  },
  {
    icon: Phone,
    title: "Call us",
    lines: ["+91 98765 43210", "24/7 emergency helpline"],
  },
  {
    icon: Mail,
    title: "Write to us",
    lines: ["hello@clinicsell.com", "We reply within a few hours"],
  },
  {
    icon: Clock,
    title: "Opening hours",
    lines: ["Mon–Sat: 8:00 AM – 9:00 PM", "Sun: 9:00 AM – 2:00 PM"],
  },
];

const departments = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Orthopedics",
  "Ophthalmology",
  "Diagnostics & Lab",
];

const inputClasses =
  "w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-sm transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500/60";

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="appointment" className="scroll-mt-28 px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Book a visit"
            title="See a doctor this week — often today"
            subtitle="Tell us what you need and we'll confirm your appointment within 15 minutes during opening hours."
          />
        </Reveal>

        <Reveal delay={0.1}>
        <GlassPanel
          className="rounded-[2rem]"
          contentClassName="grid gap-0 lg:grid-cols-5"
          tint="bg-white/55"
        >
          <div className="border-b border-slate-900/10 p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
            <h3 className="text-xl font-semibold text-slate-900">
              Contact & location
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Walk-ins are welcome, but booking ahead means little to no
              waiting.
            </p>

            <ul className="mt-8 space-y-6">
              {contactItems.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 ring-1 ring-teal-600/20">
                    <item.icon
                      className="h-5 w-5 text-teal-600"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-slate-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-3">
            {submitted ? (
              <div
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                role="status"
              >
                <CheckCircle2
                  className="h-14 w-14 text-teal-600"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  Request received!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  Thank you — our care team will call you within 15 minutes
                  during opening hours to confirm your appointment.
                </p>
                <GlassCTA
                  type="button"
                  variant="secondary"
                  className="mt-7"
                  onClick={() => setSubmitted(false)}
                >
                  Book another appointment
                </GlassCTA>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="department"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    required
                    defaultValue=""
                    className={`${inputClasses} [&>option]:text-neutral-900`}
                  >
                    <option value="" disabled>
                      Choose a department
                    </option>
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Preferred date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className={inputClasses}
                    style={{ colorScheme: "light" }}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Anything we should know?{" "}
                    <span className="font-normal text-slate-400">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Symptoms, preferred doctor, insurance provider…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <GlassCTA type="submit" className="w-full sm:w-auto">
                    Request appointment
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </GlassCTA>
                  <p className="mt-3 text-xs text-slate-500">
                    By submitting, you agree to be contacted about your
                    appointment. We never share your details.
                  </p>
                </div>
              </form>
            )}
          </div>
        </GlassPanel>
        </Reveal>
      </div>
    </section>
  );
}
