import { Star } from "lucide-react";
import { GlassPanel, SectionHeading } from "./glass";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "Booked at 9 AM, saw a cardiologist by noon, and had my test results on my phone the same evening. I didn't know clinics could work like this.",
    name: "Priya S.",
    role: "Patient since 2022",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The pediatric team is incredible with my daughter. She actually looks forward to her checkups now — that alone is worth everything.",
    name: "Marcus J.",
    role: "Parent of two",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Transparent pricing, no surprise bills, and the doctor actually called me two days later to check in. This is what healthcare should feel like.",
    name: "Elena R.",
    role: "Patient since 2023",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Patient stories"
            title="Don't take our word for it"
            subtitle="Thousands of patients trust ClinicSell with their family's health. Here's what a few of them say."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.12}
              className="h-full"
            >
              <GlassPanel
                className="h-full rounded-3xl"
                contentClassName="flex h-full flex-col p-7"
                tint="bg-white/55"
              >
              <div
                className="flex gap-1"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </figcaption>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
