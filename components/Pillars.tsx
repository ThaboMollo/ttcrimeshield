import { Clock, EyeOff, ShieldCheck, Users } from "lucide-react";
import { pillars } from "@/lib/site";
import { Reveal } from "./Reveal";

const icons = [ShieldCheck, Users, EyeOff, Clock];

export function Pillars() {
  return (
    <section className="border-y border-hairline bg-gradient-to-b from-black to-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => {
          const Glyph = icons[i];
          return (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="flex items-start gap-4 px-2 py-4 lg:px-6">
                <Glyph className="size-8 shrink-0 text-gold" strokeWidth={1.3} aria-hidden />
                <div>
                  <h3 className="font-display text-sm font-600 tracking-[0.16em] text-white uppercase">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50">{pillar.body}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
