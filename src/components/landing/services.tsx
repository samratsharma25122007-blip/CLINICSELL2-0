import {
  ArrowRight,
  Baby,
  Bone,
  Eye,
  HeartPulse,
  Microscope,
  Stethoscope,
} from "lucide-react";
import { GlassPanel, SectionHeading } from "./glass";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Everyday health, checkups, and preventive care for the whole family — with time to actually talk to your doctor.",
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    description:
      "From ECGs to long-term heart health plans, our cardiac team keeps the most important muscle in your body on beat.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Gentle, kid-friendly care from vaccinations to growth tracking, in a space designed to keep little patients calm.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Sports injuries, joint pain, and physiotherapy under one roof — get moving again with a clear recovery plan.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description:
      "Comprehensive eye exams, screenings, and minor procedures with same-week appointments and modern equipment.",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Lab",
    description:
      "In-house lab with same-day results for most tests, digitally delivered straight to you and your doctor.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our services"
          title="Everything your family needs, under one roof"
          subtitle="Six departments, one shared record, zero running between buildings. Book any of them in under a minute."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <GlassPanel
              key={service.title}
              className="group rounded-3xl transition-transform duration-300 hover:-translate-y-1.5"
              contentClassName="flex h-full flex-col p-7"
              tint="bg-white/10"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/25 ring-1 ring-white/25">
                <service.icon
                  className="h-6 w-6 text-teal-200"
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                {service.description}
              </p>
              <a
                href="#appointment"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
              >
                Book a visit
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
