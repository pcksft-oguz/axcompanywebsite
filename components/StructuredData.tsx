export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AX Company",
    "alternateName": "Axionvate",
    "url": "https://axionvate.com",
    "logo": "https://axionvate.com/images/logo/logo.png",
    "description": "Leading provider of Data Science, Artificial Intelligence, and Machine Learning solutions",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building A1, Dubai Digital Park, Dubai Silicon Oasis",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+208-6666-0112",
      "contactType": "customer service",
      "email": "info@axionvate.com",
      "areaServed": ["AE", "GB", "AZ", "TR"],
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/axcompany",
      "https://twitter.com/axcompany"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AX Company",
    "url": "https://axionvate.com",
    "description": "Data Science, AI & Machine Learning Solutions",
    "publisher": {
      "@type": "Organization",
      "name": "AX Company"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AX Company",
    "url": "https://axionvate.com",
    "description": "Data Science, Artificial Intelligence, and Machine Learning solutions",
    "serviceType": [
      "Data Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Big Data Analytics",
      "Predictive Analytics",
      "Natural Language Processing"
    ],
    "areaServed": {
      "@type": "Place",
      "name": ["United Arab Emirates", "United Kingdom", "Azerbaijan", "Turkey"]
    },
    "provider": {
      "@type": "Organization",
      "name": "AX Company"
    }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

