import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arif Tour and Travels - Your Gateway to Amazing Adventures",
  description:
    "Explore India and the world with Arif Tour and Travels. Professional tour packages for domestic and international destinations. Best prices guaranteed with 24/7 support.",
  keywords:
    "tour packages, Travels, domestic tours, international tours, Kerala, Himachal, Rajasthan, Dubai, Thailand, Singapore, Bali, Malaysia, Europe, Turkey",
  authors: [{ name: "Arif Tour and Travels" }],
  creator: "Arif Tour and Travels",
  publisher: "Arif Tour and Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ariftourandTravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arif Tour and Travels - Your Gateway to Amazing Adventures",
    description:
      "Professional tour packages for domestic and international destinations",
    type: "website",
    locale: "en_US",
    siteName: "Arif Tour and Travels",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Tour and Travels - Your Gateway to Amazing Adventures",
    description:
      "Professional tour packages for domestic and international destinations",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
