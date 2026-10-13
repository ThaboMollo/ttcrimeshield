export type FieldType = "text" | "date" | "number" | "textarea";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
}

export type CategoryId =
  | "close-protection"
  | "events"
  | "transport"
  | "recovery"
  | "investigations";

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: CategoryId;
  icon: string;
  /** Advertised price, where the business publishes one. */
  price?: string;
  /** Bullet points shown on the service card. */
  highlights?: string[];
  /** Extra questions the WhatsApp request should carry for this service. */
  fields: Field[];
}

export const categories: { id: CategoryId; label: string }[] = [
  { id: "close-protection", label: "Close Protection" },
  { id: "events", label: "Events" },
  { id: "transport", label: "Transport" },
  { id: "recovery", label: "Vehicle Recovery" },
  { id: "investigations", label: "Investigations" },
];

const f = {
  startDate: { id: "startDate", label: "Start date", type: "date" },
  endDate: { id: "endDate", label: "End date", type: "date" },
  area: { id: "area", label: "Area / city", type: "text", placeholder: "e.g. Sandton, Johannesburg" },
  destination: { id: "destination", label: "Destination(s)", type: "text", placeholder: "e.g. Cape Town, Maputo" },
  principals: { id: "principals", label: "People to protect", type: "number", placeholder: "1" },
  duration: { id: "duration", label: "Duration", type: "text", placeholder: "e.g. 3 days / 8 hours" },
  pickup: { id: "pickup", label: "Pick-up point", type: "text", placeholder: "e.g. OR Tambo International" },
  dropoff: { id: "dropoff", label: "Drop-off point", type: "text", placeholder: "e.g. Sandton City" },
  passengers: { id: "passengers", label: "Passengers", type: "number", placeholder: "4" },
  eventType: { id: "eventType", label: "Event type", type: "text", placeholder: "e.g. corporate launch, wedding" },
  guests: { id: "guests", label: "Expected guests", type: "number", placeholder: "250" },
  venue: { id: "venue", label: "Venue", type: "text" },
  cargo: { id: "cargo", label: "What is being escorted", type: "text", placeholder: "e.g. family, cash, equipment" },
  vehicle: { id: "vehicle", label: "Vehicle make, model & colour", type: "text", placeholder: "e.g. White VW Polo 2021" },
  registration: { id: "registration", label: "Registration number", type: "text", placeholder: "e.g. KZ 12 AB GP" },
  lastSeen: { id: "lastSeen", label: "Last seen — where and when", type: "text" },
  caseRef: { id: "caseRef", label: "SAPS case number (if any)", type: "text" },
  subject: { id: "subject", label: "Person / subject", type: "text", placeholder: "Name or description" },
  lastKnown: { id: "lastKnown", label: "Last known location", type: "text" },
} satisfies Record<string, Field>;

export const services: Service[] = [
  {
    id: "vip-protection",
    name: "VIP & Executive Protection",
    tagline: "Discreet close protection",
    description:
      "Discreet, professional and reliable close protection for individuals, executives and families.",
    category: "close-protection",
    icon: "shield-user",
    highlights: ["Executive protection", "Family protection", "Residential standby"],
    fields: [f.startDate, f.endDate, f.area, f.principals],
  },
  {
    id: "travel-cpo",
    name: "Domestic & International Travel CPO",
    tagline: "Protection across borders",
    description:
      "Professional close protection officers for every journey, at home and across borders.",
    category: "close-protection",
    icon: "globe",
    highlights: ["Tailored travel security", "Cross-border operations", "Airport meet & greet"],
    fields: [f.startDate, f.endDate, f.destination, f.principals],
  },
  {
    id: "escort",
    name: "Escort Services",
    tagline: "People and valuable cargo",
    description:
      "Safe and secure escort services for you, your loved ones or valuable cargo.",
    category: "close-protection",
    icon: "route",
    highlights: ["Convoy escort", "Valuable cargo", "Loved ones"],
    fields: [f.startDate, f.pickup, f.dropoff, f.cargo],
  },
  {
    id: "itinerary",
    name: "Protection Logistics & Itinerary Planning",
    tagline: "Planned down to the minute",
    description:
      "Detailed planning and logistics for seamless and secure travel, start to finish.",
    category: "close-protection",
    icon: "clipboard",
    highlights: ["Route planning", "Advance work", "Secure logistics"],
    fields: [f.startDate, f.endDate, f.destination],
  },
  {
    id: "advisory",
    name: "Travel Advisory & Risk Assessment",
    tagline: "Informed decisions",
    description:
      "Risk assessments and advisory so you move with full awareness of the ground.",
    category: "close-protection",
    icon: "message",
    highlights: ["Threat assessment", "Area risk reports", "Pre-travel briefings"],
    fields: [f.destination, f.startDate],
  },
  {
    id: "event-security",
    name: "Event Security",
    tagline: "Venue to final guest",
    description:
      "Full-spectrum event security — from the gate to crowd control to on-site medical.",
    category: "events",
    icon: "users",
    highlights: [
      "Venue security & access control",
      "Crowd management",
      "Drug, gun and weapon detection",
      "K9 unit",
      "Medical teams",
    ],
    fields: [f.eventType, f.startDate, f.venue, f.guests],
  },
  {
    id: "vehicle-hire",
    name: "Vehicle for Hire",
    tagline: "Driver included",
    description:
      "Long and short distance travel in comfort. Every vehicle comes with a professional driver.",
    category: "transport",
    icon: "van",
    highlights: [
      "Airport transfers",
      "Corporate travel",
      "Events & functions",
      "Family trips",
      "Long & short distance",
    ],
    fields: [f.startDate, f.pickup, f.dropoff, f.passengers],
  },
  {
    id: "chauffeur",
    name: "Luxury Chauffeur",
    tagline: "Arrive in style",
    description:
      "Professional, punctual and discreet chauffeur service for executives and guests.",
    category: "transport",
    icon: "steering",
    highlights: ["Executive transfers", "Hourly hire", "Discreet drivers"],
    fields: [f.startDate, f.pickup, f.dropoff, f.duration],
  },
  {
    id: "locate-vehicle",
    name: "Locate Your Stolen Vehicle",
    tagline: "We find it",
    description: "Tracing and location of your stolen vehicle, 24 hours a day.",
    category: "recovery",
    icon: "pin",
    price: "R10 000",
    fields: [f.vehicle, f.registration, f.lastSeen, f.caseRef],
  },
  {
    id: "recover-vehicle",
    name: "Recover Your Stolen Vehicle",
    tagline: "We bring it back",
    description: "Fast, efficient recovery once your vehicle has been located.",
    category: "recovery",
    icon: "tow",
    price: "R15 500",
    fields: [f.vehicle, f.registration, f.lastSeen, f.caseRef],
  },
  {
    id: "locate-recover",
    name: "Locate and Recover",
    tagline: "End to end",
    description:
      "The complete operation — we locate the vehicle and bring it back to you.",
    category: "recovery",
    icon: "shield-car",
    price: "R20 000",
    fields: [f.vehicle, f.registration, f.lastSeen, f.caseRef],
  },
  {
    id: "tracing",
    name: "Tracing & Missing Persons",
    tagline: "Bounty Hunter unit",
    description:
      "Locating people, tracing and information gathering, including missing persons.",
    category: "investigations",
    icon: "search",
    price: "From R5 000",
    highlights: ["Missing persons", "Skip tracing", "Information gathering"],
    fields: [f.subject, f.lastKnown],
  },
];

export const serviceById = (id: string) => services.find((s) => s.id === id);

/** Union of the questions the selected services need, in catalogue order, de-duplicated. */
export function fieldsFor(selectedIds: string[]): Field[] {
  const seen = new Set<string>();
  const out: Field[] = [];
  for (const id of selectedIds) {
    for (const field of serviceById(id)?.fields ?? []) {
      if (!seen.has(field.id)) {
        seen.add(field.id);
        out.push(field);
      }
    }
  }
  return out;
}
