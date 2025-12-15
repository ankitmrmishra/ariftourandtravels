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
  title: {
    default: "Arif Tour and Travels",
    template: "%s | Arif Tour and Travels",
  },
  description:
    "Discover unforgettable travel experiences with Arif Tour and Travels. Expert-curated domestic and international tour packages to Kerala, Himachal, Rajasthan, Dubai, Thailand, Singapore, Bali, Malaysia, Europe & more. Best prices, 24/7 support, customized itineraries.",
  keywords: [
    "tour packages India",
    "international tour packages",
    "domestic tour packages",
    "travel agency",
    "holiday packages",
    "Kerala tour packages",
    "Himachal tour packages",
    "Rajasthan tour packages",
    "Dubai tour packages",
    "Thailand tour packages",
    "Singapore tour packages",
    "Bali tour packages",
    "Malaysia tour packages",
    "Europe tour packages",
    "Turkey tour packages",
    "family tour packages",
    "honeymoon packages",
    "group tour packages",
    "customized tour packages",
    "budget tour packages",
    "luxury travel packages",
    "adventure tours",
    "beach holidays",
    "hill station tours",
    "international travel agency",
    "best tour operator",
  ],
  authors: [
    { name: "Arif Tour and Travels", url: "https://www.clholidays.com" },
  ],
  creator: "Arif Tour and Travels",
  publisher: "Arif Tour and Travels",
  applicationName: "Arif Tour and Travels",
  category: "Travel & Tourism",
  classification: "Travel Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.clholidays.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title:
      "Arif Tour and Travels - Best National & International Tour Packages",
    description:
      "Discover unforgettable travel experiences with expert-curated domestic and international tour packages. Best prices, 24/7 support, customized itineraries for Kerala, Dubai, Thailand, Singapore, Bali, Europe & more.",
    url: "https://www.clholidays.com",
    siteName: "Arif Tour and Travels",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arif Tour and Travels - National & International Tour Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Arif Tour and Travels - Best National & International Tour Packages",
    description:
      "Discover unforgettable travel experiences with expert-curated domestic and international tour packages. Best prices, 24/7 support, customized itineraries.",
    images: ["/twitter-image.jpg"],
    creator: "@ariftourTravelss",
    site: "@ariftourTravelss",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "og:phone_number": "+917845818773",
    "og:email": "salesariftourTravelss@gmail.com",
    "og:latitude": "28.6139",
    "og:longitude": "77.2090",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://www.clholidays.com/#organization",
        name: "Arif Tour and Travels",
        url: "https://www.clholidays.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.clholidays.com/logo.svg",
          width: 250,
          height: 60,
        },
        image: "https://www.clholidays.com/opengraph-image.jpg",
        description:
          "Leading travel agency offering domestic and international tour packages with best prices and 24/7 support.",
        telephone: "+917845818773",
        email: "salesariftourTravelss@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "India",
        },
        sameAs: [
          "https://wa.me/917845818773",
          "https://www.youtube.com/@ariftourTravelss",
          "https://www.instagram.com/ariftourTravelss",
        ],
        priceRange: "₹₹",
        areaServed: ["India", "International"],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.clholidays.com/#website",
        url: "https://www.clholidays.com",
        name: "Arif Tour and Travels",
        description:
          "Best national and international tour packages with customized itineraries",
        publisher: {
          "@id": "https://www.clholidays.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.clholidays.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.clholidays.com/#webpage",
        url: "https://www.clholidays.com",
        name: "Arif Tour and Travels - Best National & International Tour Packages",
        isPartOf: {
          "@id": "https://www.clholidays.com/#website",
        },
        about: {
          "@id": "https://www.clholidays.com/#organization",
        },
        description:
          "Discover unforgettable travel experiences with expert-curated domestic and international tour packages.",
        breadcrumb: {
          "@id": "https://www.clholidays.com/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.clholidays.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.clholidays.com",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <StructuredData />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
