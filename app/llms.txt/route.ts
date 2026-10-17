import { categories, services } from "@/lib/services";
import { faqs, site } from "@/lib/site";

/**
 * /llms.txt — a plain-text brief for AI assistants and answer engines, which
 * increasingly send enquiries that never touch a search results page. Generated
 * from the same source of truth as the page so it cannot drift out of date.
 */
async function build(): Promise<string> {
  // The cache boundary sits here, not on the handler: a Response object is not
  // serializable and cannot cross it.
  "use cache";
  const lines: string[] = [
    `# ${site.legalName}`,
    "",
    `> ${site.blurb} ${site.promise}`,
    "",
    `- Slogan: ${site.slogan}`,
    `- Website: ${site.url}`,
    `- Phone (24/7 control room): ${site.phone.display} (${site.phone.e164})`,
    `- WhatsApp: ${site.whatsapp.display}`,
    `- Email: ${site.emails.join(", ")}`,
    `- Based in: ${site.region}, South Africa`,
    `- Areas served: ${site.areaServed}. Cities: ${site.cities.join(", ")}.`,
    `- Hours: 24 hours a day, 7 days a week.`,
    "",
    "## Services",
    "",
  ];

  for (const category of categories) {
    const inCategory = services.filter((s) => s.category === category.id);
    if (!inCategory.length) continue;
    lines.push(`### ${category.label}`, "");
    for (const service of inCategory) {
      const price = service.price ? ` Price: ${service.price}.` : "";
      lines.push(`- **${service.name}** — ${service.description}${price}`);
    }
    lines.push("");
  }

  lines.push("## Frequently asked questions", "");
  for (const { q, a } of faqs) lines.push(`### ${q}`, "", a, "");

  return lines.join("\n");
}

export async function GET() {
  return new Response(await build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
