import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { RequestServiceButton } from "./RequestServiceButton";
import { SectionHeading } from "./SectionHeading";
import { serviceById } from "@/lib/services";

const idealFor = [
  "Airport transfers",
  "Corporate travel",
  "Events & functions",
  "Family trips",
  "Long & short distance travel",
];

export function Transport() {
  const hire = serviceById("vehicle-hire")!;
  const chauffeur = serviceById("chauffeur")!;

  return (
    <section
      id="transport"
      className="scroll-mt-24 border-y border-hairline bg-ink-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              label="Vehicle for hire"
              title="Travel in comfort."
              accent="Arrive in style."
              lead="Long and short distance. Every vehicle comes with a professional driver — punctual, discreet and security trained."
            />

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {idealFor.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
                  <Check className="size-4 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <RequestServiceButton
                serviceId={hire.id}
                label="Book a vehicle"
                className="rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-3 !text-ink hover:opacity-90"
              />
              <RequestServiceButton serviceId={chauffeur.id} label="Request a chauffeur" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl border border-hairline">
                <Image
                  src="/img/van-front.jpg"
                  alt="TT Crimeshield chauffeur van with professional driver for airport transfers"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-hairline">
                <Image
                  src="/img/van-side.jpg"
                  alt="TT Crimeshield hire vehicle for long and short distance travel"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-hairline">
                <Image
                  src="/img/fleet-air.jpg"
                  alt="TT Crimeshield protection fleet and helicopter transfer logistics"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
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
