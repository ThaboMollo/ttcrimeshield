import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — ${site.mission.lead}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.blurb} VIP and executive protection, travel close protection, event security, chauffeured vehicle hire and stolen vehicle recovery across South Africa. ${site.slogan}.`,
  keywords: [
    "VIP protection South Africa",
    "close protection officer",
    "executive protection Johannesburg",
    "event security",
    "stolen vehicle recovery",
    "bodyguard services",
    "chauffeur hire",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} — ${site.mission.lead}`,
    description: site.blurb,
    images: [{ url: "/img/team.jpg", width: 1179, height: 810, alt: site.legalName }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#070707",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink">{children}</body>
    </html>
  );
}
