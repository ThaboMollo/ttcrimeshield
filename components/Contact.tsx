import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/lib/site";
import { waGeneralLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              label="Contact us"
              title="Always available."
              accent="Always ready."
              lead="Speak to our control room any hour of the day. For the fastest response, send us a WhatsApp."
            />

            <div className="mt-10 space-y-3">
              <a
                href={site.phone.href}
                className="card-edge group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-gold/60"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[0.65rem] tracking-[0.24em] text-gold uppercase">
                    Calls — 24/7
                  </span>
                  <span className="block font-display text-xl tracking-wide text-white">
                    {site.phone.display}
                  </span>
                </span>
              </a>

              <a
                href={waGeneralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-edge group flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-[#25D366]/60"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#25D366]/50 text-[#25D366]">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[0.65rem] tracking-[0.24em] text-[#25D366] uppercase">
                    WhatsApp
                  </span>
                  <span className="block font-display text-xl tracking-wide text-white">
                    {site.whatsapp.display}
                  </span>
                </span>
              </a>

              <div className="card-edge flex items-start gap-4 rounded-xl p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[0.65rem] tracking-[0.24em] text-gold uppercase">
                    Email
                  </span>
                  {site.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      {email}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-hairline">
              <Image
                src="/img/cpo-red.jpg"
                alt="Close protection officer on duty"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                aria-hidden
              />
              <p className="absolute inset-x-0 bottom-0 p-6 font-display text-lg tracking-[0.12em] text-white uppercase sm:text-xl">
                <span className="gold-text">{site.promise}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
