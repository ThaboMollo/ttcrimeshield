export const site = {
  name: "TT Crimeshield",
  legalName: "TT Crimeshield Protection & Security",
  slogan: "Tactical Brilliance at Work",
  mission: { lead: "Your Safety. Our Mission.", accent: "Anywhere. Everywhere." },
  promise: "Protecting what matters most.",
  blurb:
    "TT Crimeshield Protection & Security delivers elite security solutions with professionalism, discretion and tactical excellence.",
  phone: { display: "062 651 5803", href: "tel:+27626515803", e164: "+27626515803" },
  whatsapp: { display: "065 805 5466", e164: "27658055466" },
  emails: ["info@ttcrimeshield.co.za", "ttcrimeshield@gmail.com"],

  /**
   * The address the site is actually served from. Everything canonical — og:url,
   * sitemap, structured data — is derived from this, so moving to the .co.za
   * domain later is a one-line change here.
   */
  url: "https://ttcrimeshield.vercel.app",

  /** Home province first, then the national footprint. Used in copy and schema. */
  region: "Gauteng",
  cities: ["Johannesburg", "Sandton", "Pretoria", "Midrand", "Centurion", "Ekurhuleni"],
  areaServed: "Gauteng and nationwide across South Africa",

  /** Public profiles, once they exist — they feed schema.org `sameAs`. */
  social: [] as string[],

  /** Set once the PSIRA registration number is confirmed — renders in the footer when present. */
  psira: "",
} as const;

export const pillars = [
  { title: "Safety First", body: "Your safety is our priority." },
  { title: "Trained Professionals", body: "Highly skilled and ready to respond." },
  { title: "Discreet Operations", body: "Low profile. Maximum protection." },
  { title: "24/7 Support", body: "Always available. Always ready." },
] as const;

/**
 * Questions real clients ask, answered only from what the business publishes.
 * Rendered on the page and emitted as FAQPage structured data.
 */
export const faqs = [
  {
    q: "What areas does TT Crimeshield cover?",
    a: "We are based in Gauteng and operate across Johannesburg, Sandton, Pretoria, Midrand, Centurion and Ekurhuleni, as well as nationwide across South Africa. Our close protection officers also work internationally, accompanying clients across borders.",
  },
  {
    q: "How much does stolen vehicle recovery cost?",
    a: "We publish fixed advancement prices: R10 000 to locate your stolen vehicle, R15 500 to recover it, and R20 000 for the complete locate-and-recover operation. The recovery unit is on call 24 hours a day.",
  },
  {
    q: "Do you provide VIP and executive protection?",
    a: "Yes. We provide discreet close protection for individuals, executives and families — including residential standby, travel close protection and escort services for loved ones or valuable cargo.",
  },
  {
    q: "Do you install CCTV cameras?",
    a: "Yes. We install CCTV systems from 4 channels up to 16 channels for homes and businesses — wired cameras as well as solar powered, SIM card and WiFi cameras you can view live from your phone. There are two ways to pay: a once-off payment, which includes free installation, or a monthly payment, where an installation fee applies.",
  },
  {
    q: "Can I hire a vehicle with a driver?",
    a: "Yes. Every vehicle we hire out comes with a professional driver. Our fleet handles airport transfers, corporate travel, events and functions, family trips, and both long and short distance travel.",
  },
  {
    q: "What does your event security include?",
    a: "Full-spectrum event security: venue security and access control, crowd management, drug, gun and weapon detection, a K9 unit, and on-site medical teams.",
  },
  {
    q: "Do you operate outside South Africa?",
    a: "Yes. Our domestic and international travel CPO service provides professional close protection across borders, along with protection logistics, itinerary planning and pre-travel risk assessments.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "Select the services you need on this page and we will open WhatsApp with your request already written out. You can also call our control room on 062 651 5803 at any hour, or WhatsApp 065 805 5466.",
  },
  {
    q: "Are you available 24/7?",
    a: "Yes. Our control room is staffed around the clock, every day of the year. Always available. Always ready.",
  },
] as const;
