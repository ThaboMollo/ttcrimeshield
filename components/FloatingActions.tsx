"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { waGeneralLink } from "@/lib/whatsapp";

export function FloatingActions() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-4 z-40 flex flex-col gap-3 transition-all duration-300 sm:right-6 sm:bottom-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={site.phone.href}
        aria-label={`Call ${site.phone.display} — 24/7`}
        className="grid size-12 place-items-center rounded-full border border-gold/50 bg-ink/90 text-gold shadow-lg backdrop-blur transition-colors hover:bg-gold hover:text-ink"
      >
        <Phone className="size-5" aria-hidden />
      </a>
      <a
        href={waGeneralLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-[#25D366] text-black shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" aria-hidden />
      </a>
    </div>
  );
}
