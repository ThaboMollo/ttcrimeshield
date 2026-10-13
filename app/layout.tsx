import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({ variable: "--font-body", subsets: ["latin"], display: "swap" });

const title = `${site.legalName} | VIP Protection & Vehicle Recovery in ${site.region}`;
const description =
  "24/7 VIP and executive protection, event security, CCTV camera installation, chauffeured vehicle hire and stolen vehicle recovery across Gauteng and South Africa. Locate your stolen vehicle from R10 000. Call 062 651 5803.";

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
    title,
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
    title,
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
  // Paste the token from Google Search Console here to verify ownership.
  // verification: { google: "..." },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink">{children}</body>
    </html>
  );
}
