import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
import Service from '@/components/inner-pages/service';

export const metadata = {
    title: "Our Services – Website Development, E-Commerce, Social Media & SEO | Vastora Tech",
    description: "Explore Vastora Tech services: business website development, ready-to-use E-Commerce stores, social media management, SEO services and performance marketing.",
    alternates: {
        canonical: "https://vastoratech.com/services/web-development-services",
    },
    authors: [{ name: "Vastora Tech"}],
    robots: {
        index: true,
        follow: true,
    },

};
    const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development and Digital Marketing",
    "provider": {
      "@type": "Organization",
      "name": "Vastora Tech",
      "url": "https://vastoratech.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ecommerce Website Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing"
          }
        }
      ]
    }
  };    

const index = () => {
    return (
        <Wrapper>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
            <Service />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;
