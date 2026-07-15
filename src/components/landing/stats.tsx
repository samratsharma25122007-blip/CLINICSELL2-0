import { Award, Building2, Star, Users } from "lucide-react";
import { GlassPanel } from "./glass";
import { Reveal } from "./reveal";

const stats = [
  { icon: Award, value: "15+", label: "Years of care" },
  { icon: Users, value: "20k+", label: "Happy patients" },
  { icon: Building2, value: "40+", label: "Specialists on staff" },
  { icon: Star, value: "4.9", label: "Average rating" },
];

export function Stats() {
  return (
    <section className="px-4 pb-20 sm:px-6" aria-label="Clinic statistics">
      <Reveal className="mx-auto max-w-6xl">
        <GlassPanel
          className="rounded-3xl"
          contentClassName="grid grid-cols-2 gap-8 px-6 py-10 sm:px-10 lg:grid-cols-4"
          tint="bg-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <stat.icon className="h-6 w-6 text-teal-300" aria-hidden="true" />
              <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/70">
                {stat.label}
              </span>
            </div>
          ))}
        </GlassPanel>
      </Reveal>
    </section>
  );
}
