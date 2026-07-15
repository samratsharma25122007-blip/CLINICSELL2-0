import {
  ArrowRight,
  CalendarCheck,
  Clock,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { GlassPanel, GlassCTA, GlassChip } from "./glass";

const trustItems = [
  { icon: ShieldCheck, label: "Insurance friendly" },
  { icon: Clock, label: "Open 7 days a week" },
  { icon: Stethoscope, label: "40+ specialists" },
];

export function Hero() {
  return (
    <section id="top" className="px-4 pb-20 pt-32 sm:px-6 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <GlassChip>
              <Sparkles className="h-4 w-4 text-teal-300" aria-hidden="true" />
              Rated 4.9/5 by 2,000+ patients
            </GlassChip>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Care that revolves{" "}
            <span className="text-teal-300">around you.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:mx-0">
            ClinicSell brings board-certified doctors, same-day appointments,
            and modern diagnostics together under one roof — so you can focus
            on living well, not waiting rooms.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <GlassCTA href="#appointment">
              Book an appointment
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </GlassCTA>
            <GlassCTA href="#services" variant="secondary">
              Explore services
            </GlassCTA>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start">
            {trustItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-white/70"
              >
                <item.icon
                  className="h-4 w-4 text-teal-300"
                  aria-hidden="true"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <GlassPanel
            className="rounded-[2rem]"
            contentClassName="p-3"
            tint="bg-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=987&auto=format&fit=crop"
              alt="Smiling doctor with a stethoscope welcoming a patient"
              className="h-[420px] w-full rounded-[1.6rem] object-cover sm:h-[500px]"
              loading="eager"
            />
          </GlassPanel>

          <div className="absolute -left-3 top-8 sm:-left-6">
            <GlassChip>
              <CalendarCheck
                className="h-4 w-4 text-teal-300"
                aria-hidden="true"
              />
              Next slot: today, 4:30 PM
            </GlassChip>
          </div>

          <div className="absolute -right-3 bottom-8 sm:-right-6">
            <GlassChip>
              <Star
                className="h-4 w-4 fill-amber-300 text-amber-300"
                aria-hidden="true"
              />
              4.9 average rating
            </GlassChip>
          </div>
        </div>
      </div>
    </section>
  );
}
