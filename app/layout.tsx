import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

/**
 * Kept under ~60 characters so Google shows it whole, keyword-first and brand
 * last — the previous title led with the legal name and was truncated before a
 * searcher ever reached "VIP Protection".
 */
const title = `VIP Protection & Vehicle Recovery ${site.region} | ${site.name}`;

/** ~160 characters: the practical limit before Google clips the snippet. */
const description =
  "24/7 VIP and executive protection, event security, CCTV installation, chauffeur hire and stolen vehicle recovery across Gauteng and South Africa. Call 062 651 5803.";

/** Longer, fuller headline for link previews, where there is room for it. */
const socialTitle = `${site.legalName} | VIP Protection & Vehicle Recovery in ${site.region}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Security Services",
  keywords: [
    "VIP protection South Africa",
    "close protection officer Johannesburg",
    "executive protection Gauteng",
    "bodyguard services Johannesburg",
    "stolen vehicle recovery South Africa",
    "vehicle tracking and recovery",
    "event security Johannesburg",
    "CCTV installation Johannesburg",
    "CCTV camera installation Gauteng",
    "solar powered CCTV cameras South Africa",
    "home security cameras Johannesburg",
    "K9 security unit",
    "chauffeur hire Sandton",
    "airport transfer Johannesburg",
    "armed escort services",
    "private security company Gauteng",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.legalName,
    title: socialTitle,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: `${site.legalName} — ${site.mission.lead} ${site.mission.accent}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  /**
   * Set GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION in Vercel to verify
   * ownership via meta tag. Omitted entirely when unset, so no empty tag ships.
   */
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
