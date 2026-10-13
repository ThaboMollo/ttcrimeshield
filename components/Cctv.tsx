import Image from "next/image";
import { CalendarClock, Check, HandCoins } from "lucide-react";
import { Reveal } from "./Reveal";
import { RequestServiceButton } from "./RequestServiceButton";
import { SectionHeading } from "./SectionHeading";
import { serviceById } from "@/lib/services";

/** The two ways the business sells a system, exactly as advertised. */
const options = [
  {
    icon: HandCoins,
    label: "Option one",
    title: "Once-off payment",
    points: ["Pay for the system up front", "Free installation"],
  },
  {
    icon: CalendarClock,
    label: "Option two",
    title: "Monthly payment",
    points: ["Spread the cost month to month", "Installation fee will apply"],
  },
];

export function Cctv() {
  const cctv = serviceById("cctv")!;

  return (
    <section id="cctv" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              label="CCTV installation"
              title="Watch your property."
              accent="From anywhere."
              lead="CCTV for homes and businesses, installed by our own technicians. Wired, solar powered, SIM card or WiFi — and you watch it all live from your phone."
            />

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {cctv.highlights?.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-4xl font-700 tracking-tight">
              <span className="gold-text">4 – 16</span>{" "}
              <span className="text-sm tracking-[0.18em] text-white/45 uppercase">channels</span>
            </p>

            <div className="mt-8">
              <RequestServiceButton
                serviceId={cctv.id}
                label="Get a CCTV quote"
                className="rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-3 !text-ink hover:opacity-90"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-3">
              <div className="relative aspect-[524/257] overflow-hidden rounded-xl border border-hairline">
                <Image
                  src="/img/cctv-cameras.jpg"
                  alt="CCTV dome and bullet cameras installed by TT Crimeshield at a home in Gauteng"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[559/190] overflow-hidden rounded-xl border border-hairline">
                <Image
                  src="/img/cctv-system.jpg"
                  alt="CCTV recorder with a live multi-camera view, phone app and a solar powered WiFi camera"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {options.map((option, i) => (
            <Reveal key={option.label} delay={i * 90}>
              <article className="card-edge flex h-full flex-col rounded-xl p-6 transition-colors hover:border-gold/60 sm:p-8">
                <option.icon className="size-9 text-gold" strokeWidth={1.4} aria-hidden />
                <span className="mt-5 block font-display text-xs tracking-[0.2em] text-gold uppercase">
                  {option.label}
                </span>
                <h3 className="mt-2 font-display text-xl leading-tight font-600 tracking-wide text-white uppercase">
                  {option.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-white/60">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
