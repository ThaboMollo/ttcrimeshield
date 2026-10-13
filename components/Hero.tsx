import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { waGeneralLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/img/operative.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_4%] opacity-55"
      />
      <div
        className="absolute inset-0 -z-0 bg-[linear-gradient(100deg,#070707_6%,rgba(7,7,7,0.92)_38%,rgba(7,7,7,0.35)_72%,rgba(7,7,7,0.75)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:pt-32">
        <div className="max-w-2xl">
          <p className="rise-in flex items-center gap-3 font-display text-[0.7rem] tracking-[0.34em] text-gold uppercase sm:text-xs">
            {site.slogan}
            <span className="h-px flex-1 max-w-24 gold-rule" aria-hidden />
          </p>

          <h1 className="rise-in mt-6 font-display text-5xl leading-[0.95] font-700 tracking-tight uppercase sm:text-6xl lg:text-7xl" style={{ animationDelay: "90ms" }}>
            <span className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Your Safety.
            </span>
            <span className="block bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              Our Mission.
            </span>
            <span className="gold-text mt-1 block">Anywhere.</span>
            <span className="gold-text block">Everywhere.</span>
          </h1>

          <p className="rise-in mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg" style={{ animationDelay: "180ms" }}>
            {site.blurb} We protect what matters most.
          </p>

          <div className="rise-in mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "270ms" }}>
            <a
              href="#request"
              className="rounded-full bg-gradient-to-r from-gold-light to-gold px-7 py-3.5 font-display text-xs font-600 tracking-[0.18em] text-ink uppercase transition-opacity hover:opacity-90"
            >
              Request protection
            </a>
            <a
              href={waGeneralLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-display text-xs font-500 tracking-[0.18em] text-white uppercase transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp us
            </a>
          </div>

          <a
            href={site.phone.href}
            className="rise-in mt-8 inline-flex items-center gap-3 text-white/55 transition-colors hover:text-gold"
            style={{ animationDelay: "360ms" }}
          >
            <span className="grid size-10 place-items-center rounded-full border border-gold/35 text-gold">
              <Phone className="size-4" aria-hidden />
            </span>
            <span className="font-display">
              <span className="block text-[0.65rem] tracking-[0.24em] text-gold uppercase">
                24/7 Control Room
              </span>
              <span className="block text-lg tracking-wide text-white">{site.phone.display}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
