import { site } from "./site";
import { fieldsFor, serviceById } from "./services";

export interface QuoteRequest {
  serviceIds: string[];
  answers: Record<string, string>;
  name: string;
  notes: string;
}

/** WhatsApp link that opens a chat with the request already typed out. */
export function waLink(text: string) {
  return `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(text)}`;
}

/** Plain "say hello" link used by the header and floating button. */
export const waGeneralLink = waLink(
  `Hello ${site.name}, I would like to enquire about your security services.`,
);

export function buildRequestMessage({
  serviceIds,
  answers,
  name,
  notes,
}: QuoteRequest): string {
  const lines: string[] = [`*${site.legalName.toUpperCase()} — SERVICE REQUEST*`, ""];

  lines.push("*Services requested*");
  for (const id of serviceIds) {
    const service = serviceById(id);
    if (!service) continue;
    lines.push(`• ${service.name}${service.price ? ` — ${service.price}` : ""}`);
  }

  const answered = fieldsFor(serviceIds).filter((field) =>
    answers[field.id]?.trim(),
  );
  if (answered.length) {
    lines.push("", "*Details*");
    for (const field of answered) {
      lines.push(`${field.label}: ${answers[field.id].trim()}`);
    }
  }

  lines.push("", "*Contact*", `Name: ${name.trim() || "—"}`);
  if (notes.trim()) lines.push("", `*Notes*`, notes.trim());
  lines.push("", `_Sent from ${site.url.replace(/^https?:\/\//, "")}_`);

  return lines.join("\n");
}
