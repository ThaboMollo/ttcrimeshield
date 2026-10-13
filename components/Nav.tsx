"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#transport", label: "Vehicle Hire" },
  { href: "#recovery", label: "Recovery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "border-b border-hairline bg-ink/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-shield.png"
            alt=""
            width={572}
            height={575}
            priority
            className="h-10 w-auto sm:h-12"
          />
          <span className="font-display leading-none">
            <span className="block text-sm font-600 tracking-[0.18em] text-white uppercase sm:text-base">
              TT Crimeshield
            </span>
            <span className="block text-[0.6rem] tracking-[0.26em] text-gold uppercase">
              Protection &amp; Security
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs tracking-[0.16em] text-white/70 uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#request"
            className="rounded-full bg-gradient-to-r from-gold-light to-gold px-5 py-2.5 font-display text-xs font-600 tracking-[0.16em] text-ink uppercase transition-opacity hover:opacity-90"
          >
            Request protection
          </a>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phone.href}
            aria-label={`Call ${site.phone.display}`}
            className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center text-white"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-hairline bg-ink px-5 pb-6 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-4 font-display text-sm tracking-[0.16em] text-white/80 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#request"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-gradient-to-r from-gold-light to-gold py-3 text-center font-display text-xs font-600 tracking-[0.16em] text-ink uppercase"
          >
            Request protection
          </a>
        </nav>
      ) : null}
    </header>
  );
}
