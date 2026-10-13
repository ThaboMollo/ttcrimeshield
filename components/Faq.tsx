import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { faqs, site } from "@/lib/site";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-y border-hairline bg-ink-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <SectionHeading
            label="Questions"
            title="What clients ask"
            accent="before they call."
            lead={`Straight answers on cover, pricing and response times. Still unsure? Call ${site.phone.display} — any hour.`}
          />
        </Reveal>

        <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base leading-snug font-500 tracking-wide text-white transition-colors group-hover:text-gold sm:text-lg">
                    {item.q}
                  </h3>
                  <Plus
                    className="size-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="pb-6 text-sm leading-relaxed text-white/60 sm:text-base">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-white/45">
            Operating across {site.areaServed}.{" "}
            <a href="#request" className="text-gold hover:underline">
              Request a service
            </a>{" "}
            or WhatsApp{" "}
            <a
              href={`https://wa.me/${site.whatsapp.e164}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {site.whatsapp.display}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
