import {
  Inter,
  IBM_Plex_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SkipLink from "@/components/ui/SkipLink";
import { site } from "@/data/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-hrishiilit.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hrishikesh Patil — Developer & Competitive Programmer",
    template: "%s — Hrishikesh Patil",
  },
  description:
    "Portfolio of Hrishikesh Patil (Hrishi), a third-year Computer Science and Engineering (AI) student at KLE Technological University — developer, ICPC regional qualifier, and President of Code Club.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.name,
    title: "Hrishikesh Patil — Developer & Competitive Programmer",
    description:
      "Third-year CS (AI) student at KLE Technological University. Developer, ICPC regional qualifier, President of Code Club.",
    image: "/og.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishikesh Patil — Developer & Competitive Programmer",
    description:
      "Third-year CS (AI) student at KLE Technological University. Developer, ICPC regional qualifier, President of Code Club.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
