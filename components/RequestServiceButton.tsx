"use client";

import { ArrowRight } from "lucide-react";
import { requestService } from "@/lib/quote-bus";

export function RequestServiceButton({
  serviceId,
  label = "Request this service",
  className = "",
}: {
  serviceId: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => requestService(serviceId)}
      className={`group inline-flex items-center gap-1.5 font-display text-xs font-500 tracking-[0.14em] text-gold uppercase transition-colors hover:text-gold-light ${className}`}
    >
      {label}
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </button>
  );
}
