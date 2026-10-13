import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/lib/site";

const creed = [
  "Trusted protection",
  "Proven professionalism",
  "Total peace of mind",
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-hairline bg-ink-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-16/11 overflow-hidden rounded-xl border border-hairline">
              <Image
                src="/img/team.jpg"
                alt="The TT Crimeshield protection team"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              label="Who we are"
              title="Tactical brilliance"
              accent="at work."
              lead={site.blurb}
            />
            <ul className="mt-8 space-y-4">
              {creed.map((line) => (
                <li key={line} className="flex items-center gap-4">
                  <span className="h-px w-8 shrink-0 gold-rule" aria-hidden />
                  <span className="font-display text-base tracking-[0.14em] text-white/85 uppercase">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 grid grid-cols-2 gap-3">
              <div className="relative aspect-3/2 overflow-hidden rounded-lg border border-hairline">
                <Image
                  src="/img/motorcade.jpg"
                  alt="Protection motorcade on deployment"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-3/2 overflow-hidden rounded-lg border border-hairline">
                <Image
                  src="/img/fleet-home.jpg"
                  alt="Residential protection detail"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
