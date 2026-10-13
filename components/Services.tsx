import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { RequestServiceButton } from "./RequestServiceButton";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/lib/services";

export function Services() {
  const core = services.filter(
    (s) => s.category === "close-protection" || s.category === "events",
  );

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <SectionHeading
            label="Our services"
            title="Professional protection"
            accent="you can trust."
            lead="Trusted protection. Proven professionalism. Total peace of mind — for executives, families and individuals, at home and across borders."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {core.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 90}>
              <article className="card-edge group flex h-full flex-col rounded-xl p-6 transition-colors hover:border-gold/60">
                <Icon name={service.icon} className="size-9 text-gold" />
                <h3 className="mt-5 font-display text-lg leading-tight font-600 tracking-wide text-white uppercase">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
                {service.highlights?.length ? (
                  <ul className="mt-4 space-y-1.5">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/45">
                        <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-gold" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-auto pt-6">
                  <RequestServiceButton serviceId={service.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
