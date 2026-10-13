import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pillars } from "@/components/Pillars";
import { QuoteBuilder } from "@/components/QuoteBuilder";
import { Recovery } from "@/components/Recovery";
import { Services } from "@/components/Services";
import { Transport } from "@/components/Transport";
import { buildSchema } from "@/lib/schema";

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
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />
    </>
  );
}
