import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import { Libre_Franklin, Allura, Corinthia, Cormorant_Garamond } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: "K & K Wedding Invite",
  description: "Kenneth & Ky Wedding Invitaiton",
  icons: {
    icon: [
      { rel: "icon", url: "/icon.png" },
    ]
  },
};

export const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-family-base",
  weight: ["300", "400", "600", "700"], // Libre Franklin weights
});

export const allura = Allura({
  subsets: ["latin"],
  variable: "--font-family-script",
  weight: ["400"], // Allura single weight
});

export const corinthia = Corinthia({
  subsets: ["latin"],
  variable: "--font-family-script2",
  weight: ["400"], // Corinthia single weight
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-family-logo",
  weight: ["400", "500", "700"], // Logo font weights
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} ${allura.variable} ${corinthia.variable} ${cormorantGaramond.variable} antialiased`}
      >

        <Layout>
          {children}
          <Analytics />
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
}
