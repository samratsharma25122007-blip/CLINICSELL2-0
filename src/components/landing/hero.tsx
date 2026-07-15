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
          <div
            className="reveal-left mb-6 flex justify-center lg:justify-start"
            style={{ animationDelay: "0.15s" }}
          >
            <GlassChip>
              <Sparkles className="h-4 w-4 text-teal-600" aria-hidden="true" />
              Rated 4.9/5 by 2,000+ patients
            </GlassChip>
          </div>

          <h1
            className="reveal-left text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.28s" }}
          >
            Care that revolves{" "}
            <span className="text-teal-600">around you.</span>
          </h1>

          <p
            className="reveal-left mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0"
            style={{ animationDelay: "0.4s" }}
          >
            ClinicSell brings board-certified doctors, same-day appointments,
            and modern diagnostics together under one roof — so you can focus
            on living well, not waiting rooms.
          </p>

          <div
            className="reveal-left mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.52s" }}
          >
            <GlassCTA href="#appointment">
              Book an appointment
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </GlassCTA>
            <GlassCTA href="#services" variant="secondary">
              Explore services
            </GlassCTA>
          </div>

          <ul
            className="reveal-left mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start"
            style={{ animationDelay: "0.64s" }}
          >
            {trustItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <item.icon
                  className="h-4 w-4 text-teal-600"
                  aria-hidden="true"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <GlassPanel
            className="reveal-right rounded-[2rem]"
            contentClassName="p-3"
            tint="bg-white/55"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=987&auto=format&fit=crop"
              alt="Smiling doctor with a stethoscope welcoming a patient"
              className="h-[420px] w-full rounded-[1.6rem] object-cover sm:h-[500px]"
              loading="eager"
            />
          </GlassPanel>

          <div
            className="reveal-left absolute -left-3 top-8 sm:-left-6"
            style={{ animationDelay: "0.72s" }}
          >
            <GlassChip>
              <CalendarCheck
                className="h-4 w-4 text-teal-600"
                aria-hidden="true"
              />
              Next slot: today, 4:30 PM
            </GlassChip>
          </div>

          <div
            className="reveal-right absolute -right-3 bottom-8 sm:-right-6"
            style={{ animationDelay: "0.84s" }}
          >
            <GlassChip>
              <Star
                className="h-4 w-4 fill-amber-400 text-amber-400"
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
