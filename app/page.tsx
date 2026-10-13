import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pillars } from "@/components/Pillars";
import { QuoteBuilder } from "@/components/QuoteBuilder";
import { Recovery } from "@/components/Recovery";
import { Services } from "@/components/Services";
import { Transport } from "@/components/Transport";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: site.legalName,
  slogan: site.slogan,
  description: site.blurb,
  url: site.url,
  image: `${site.url}/logo-shield.png`,
  telephone: "+27626515803",
  email: site.emails[0],
  areaServed: { "@type": "Country", name: "South Africa" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.name, description: service.description },
      ...(service.price ? { priceCurrency: "ZAR", priceSpecification: { "@type": "PriceSpecification", price: service.price } } : {}),
    })),
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Services />
        <QuoteBuilder />
        <Transport />
        <Recovery />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
