import Image from "next/image";
import { Clock } from "lucide-react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { RequestServiceButton } from "./RequestServiceButton";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/lib/services";

export function Recovery() {
  const recovery = services.filter((s) => s.category === "recovery");
  const tracing = services.find((s) => s.category === "investigations");

  return (
    <section id="recovery" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionHeading
            label="Vehicle recovery"
            title="We locate. We recover."
            accent="We protect."
            lead="Vehicle stolen? Every hour counts. Our recovery unit is on call around the clock."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {recovery.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <article className="card-edge flex h-full flex-col rounded-xl p-6 transition-colors hover:border-gold/60">
                <Icon name={service.icon} className="size-9 text-gold" />
                <h3 className="mt-5 font-display text-lg leading-tight font-600 tracking-wide text-white uppercase">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-white/55">{service.description}</p>
                <p className="mt-5 font-display text-3xl font-700 tracking-tight">
                  <span className="gold-text">{service.price}</span>
                </p>
                <div className="mt-auto pt-6">
                  <RequestServiceButton serviceId={service.id} label="Start recovery" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs tracking-[0.18em] text-white/40 uppercase">
            <Clock className="size-3.5 text-gold" aria-hidden />
            Available 24/7 — advancement prices, payable on instruction
          </p>
        </Reveal>

        {tracing ? (
          <Reveal delay={160}>
            <div className="card-edge mt-14 grid items-center gap-8 overflow-hidden rounded-xl p-6 sm:p-10 lg:grid-cols-[auto_1fr_auto]">
              <Image
                src="/badge-bounty.png"
                alt="TT Crimeshield Bounty Hunter unit badge — tracing and missing persons"
                width={1145}
                height={1140}
                className="mx-auto h-28 w-28 object-contain sm:h-32 sm:w-32"
              />
              <div>
                <span className="font-display text-xs tracking-[0.2em] text-gold uppercase">
                  {tracing.tagline}
                </span>
                <h3 className="mt-2 font-display text-2xl font-600 tracking-wide text-white uppercase sm:text-3xl">
                  {tracing.name}
                </h3>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/55">
                  {tracing.description} Our team traces, locates and gathers the information you
                  need — handled discreetly and lawfully.
                </p>
              </div>
              <div className="text-left lg:text-right">
                <p className="font-display text-2xl font-700">
                  <span className="gold-text">{tracing.price}</span>
                </p>
                <RequestServiceButton
                  serviceId={tracing.id}
                  label="Open a case"
                  className="mt-3"
                />
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
