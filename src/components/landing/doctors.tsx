import { Star } from "lucide-react";
import { GlassPanel, SectionHeading } from "./glass";

const doctors = [
  {
    name: "Dr. Aisha Verma",
    specialty: "Cardiologist",
    experience: "14 yrs experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Dr. Rohan Mehta",
    specialty: "Orthopedic Surgeon",
    experience: "12 yrs experience",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Dr. Sarah Kim",
    specialty: "Pediatrician",
    experience: "10 yrs experience",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=987&auto=format&fit=crop",
  },
  {
    name: "Dr. Daniel Osei",
    specialty: "General Physician",
    experience: "16 yrs experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=987&auto=format&fit=crop",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="scroll-mt-28 px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Meet the team"
          title="Doctors patients come back to"
          subtitle="Board-certified specialists who take the time to listen — and explain things in plain language."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <GlassPanel
              key={doctor.name}
              className="group rounded-3xl transition-transform duration-300 hover:-translate-y-1.5"
              contentClassName="p-3"
              tint="bg-white/10"
            >
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}, ${doctor.specialty}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <Star
                    className="h-3.5 w-3.5 fill-amber-300 text-amber-300"
                    aria-hidden="true"
                  />
                  {doctor.rating}
                </span>
              </div>
              <div className="px-3 pb-4 pt-4">
                <h3 className="text-lg font-semibold text-white">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-teal-300">
                  {doctor.specialty}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  {doctor.experience}
                </p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
