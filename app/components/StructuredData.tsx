const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Arif Tour and Travel",
    description:
      "Professional tour packages for domestic and international destinations",
    url: "https://ariftourandtravel.com",
    logo: "https://ariftourandtravel.com/logo.png",
    telephone: "+919305396179",
    email: "info@ariftourandtravel.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
    },
    sameAs: ["https://wa.me/919305396179"],
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tour Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "Domestic Tour Packages",
            description: "Explore India with our domestic tour packages",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "TouristTrip",
            name: "International Tour Packages",
            description:
              "Discover the world with our international tour packages",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arif Tour and Travel",
    url: "https://ariftourandtravel.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ariftourandtravel.com?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ariftourandtravel.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
