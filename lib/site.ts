export const site = {
  name: "TT Crimeshield",
  legalName: "TT Crimeshield Protection & Security",
  slogan: "Tactical Brilliance at Work",
  mission: { lead: "Your Safety. Our Mission.", accent: "Anywhere. Everywhere." },
  promise: "Protecting what matters most.",
  blurb:
    "TT Crimeshield Protection & Security delivers elite security solutions with professionalism, discretion and tactical excellence.",
  phone: { display: "062 651 5803", href: "tel:+27626515803" },
  whatsapp: { display: "065 805 5466", e164: "27658055466" },
  emails: ["info@ttcrimeshield.co.za", "ttcrimeshield@gmail.com"],
  url: "https://ttcrimeshield.co.za",
  /** Set once the PSIRA registration number is confirmed — renders in the footer when present. */
  psira: "",
} as const;

export const pillars = [
  { title: "Safety First", body: "Your safety is our priority." },
  { title: "Trained Professionals", body: "Highly skilled and ready to respond." },
  { title: "Discreet Operations", body: "Low profile. Maximum protection." },
  { title: "24/7 Support", body: "Always available. Always ready." },
] as const;
