import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import localFont from 'next/font/local';
import { Libre_Franklin, Allura, Corinthia, Cormorant_Garamond } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Kenneth & Khy Wedding",
  description: "Join us to celebrate our union on December 22, 2024, at Nature's Village Resort.",
  openGraph: {
    title: "Kenneth & Khy Wedding",
    description: "Join us to celebrate our union on December 22, 2024, at Nature's Village Resort.",
  },
  icons: {
    icon: [
      { rel: "icon", url: "/icon.png" },
    ]
  },
  metadataBase: new URL("https://kenneth-and-khy.vercel.app"),
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

// Define the Almyra font with weights
const almyra = localFont({
  src: '/fonts/Almyra.ttf', // Correct path if it's in `public/fonts`
  variable: '--font-family-script3',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} ${allura.variable} ${corinthia.variable} ${cormorantGaramond.variable} ${almyra.variable} antialiased`}
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
