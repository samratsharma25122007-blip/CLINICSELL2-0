import {
  CalendarCheck,
  FileText,
  PhoneCall,
  Pill,
  Wallet,
} from "lucide-react";
import { GlassPanel } from "./glass";
import { Reveal } from "./reveal";

const features = [
  {
    icon: CalendarCheck,
    title: "Same-day & online booking",
    description:
      "Reserve a slot in under a minute — most patients are seen the same day they book.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing, insurance accepted",
    description:
      "Know the cost before you walk in. We work with all major insurance providers.",
  },
  {
    icon: FileText,
    title: "Digital records & e-prescriptions",
    description:
      "Your history, results, and prescriptions live in one secure place you can access anytime.",
  },
  {
    icon: Pill,
    title: "In-house pharmacy & lab",
    description:
      "Pick up medication and get tests done right after your consultation — no extra trips.",
  },
  {
    icon: PhoneCall,
    title: "24/7 emergency helpline",
    description:
      "A doctor on the line whenever you need one, day or night, weekends included.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-28 px-4 pb-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left">
          <GlassPanel
            className="rounded-[2rem] lg:order-none"
            contentClassName="p-3"
            tint="bg-white/55"
          >
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1028&auto=format&fit=crop"
              alt="Bright, modern clinic corridor"
              className="h-[380px] w-full rounded-[1.6rem] object-cover sm:h-[520px]"
              loading="lazy"
            />
          </GlassPanel>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Why ClinicSell
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A clinic built around your time, not ours
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            We redesigned the clinic visit from the ground up — less paperwork,
            less waiting, and a care team that already knows your story when
            you walk in.
          </p>

          <ul className="mt-8 space-y-5">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 ring-1 ring-teal-600/20">
                  <feature.icon
                    className="h-5 w-5 text-teal-600"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
