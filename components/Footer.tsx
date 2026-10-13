import Image from "next/image";
import { site } from "@/lib/site";

export async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-12 text-center">
        <Image
          src="/logo-shield.png"
          alt={site.legalName}
          width={572}
          height={575}
          className="h-16 w-auto"
        />
        <p className="font-display text-xs tracking-[0.3em] text-gold uppercase">
          &ldquo;{site.slogan}&rdquo;
        </p>
        <p className="max-w-md text-xs leading-relaxed text-white/35">
          {site.legalName} · Professional service · Punctual · Discreet
          {site.psira ? ` · PSIRA ${site.psira}` : ""}
        </p>
        <p className="text-xs text-white/25">
          &copy; {year} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
