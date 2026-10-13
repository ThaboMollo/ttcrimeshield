import { services } from "./services";
import { faqs, site } from "./site";

const ORG = `${site.url}/#organization`;

/**
 * One JSON-LD graph describing the business, what it sells, and the FAQ.
 * Linked by @id so Google reads it as a single entity rather than three.
 */
export function buildSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SecurityService", "LocalBusiness"],
        "@id": ORG,
        name: site.legalName,
        alternateName: site.name,
        slogan: site.slogan,
        description: site.blurb,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/logo-shield.png`,
          width: 572,
          height: 575,
        },
        image: `${site.url}/og.jpg`,
        telephone: site.phone.e164,
        email: site.emails[0],
        priceRange: "R5 000 – R20 000",
        currenciesAccepted: "ZAR",
        address: {
          "@type": "PostalAddress",
          addressRegion: site.region,
          addressCountry: "ZA",
        },
        areaServed: [
          { "@type": "Country", name: "South Africa" },
          { "@type": "AdministrativeArea", name: site.region },
          ...site.cities.map((city) => ({ "@type": "City", name: city })),
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: site.phone.e164,
            contactType: "emergency",
            availableLanguage: ["en"],
            areaServed: "ZA",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
          },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        ...(site.social.length ? { sameAs: site.social } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Security services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            ...(service.price
              ? {
                  priceCurrency: "ZAR",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: service.price.replace(/[^0-9]/g, ""),
                    priceCurrency: "ZAR",
                  },
                }
              : {}),
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              serviceType: service.name,
              provider: { "@id": ORG },
              areaServed: { "@type": "Country", name: "South Africa" },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.legalName,
        publisher: { "@id": ORG },
        inLanguage: "en-ZA",
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
