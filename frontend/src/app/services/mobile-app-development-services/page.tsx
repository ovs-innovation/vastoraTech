import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import MobileAppDevelopment from "@/components/services/mobile-app-development-services";

export const metadata = {
    title: "Mobile App Development Company in Noida | Vastora Tech",
    description: "Looking for a reliable mobile app development company in Noida? Vastora Tech builds high-performance Android and iOS apps tailored for startups and businesses. Get scalable and affordable solutions today",
    keywords: [
        "Mobile App Development Company in Noida",
        "website app development agency",
        "iOS app development company",
        "best app development agency",
        "best mobile app development company with stanga",
        "web app development service"
    ],
    alternates: {
        canonical: "https://vastoratech.com/services/mobile-app-development-services",
    },
    openGraph: {
        title: "Mobile App Development Company in Noida | Vastora Tech",
        description: "Looking for a reliable mobile app development company in Noida? Vastora Tech builds high-performance Android and iOS apps tailored for startups and businesses. Get scalable and affordable solutions today",
        type: "website",
        url: "https://vastoratech.com/services/mobile-app-development-services",
        images: [
            {
                url: "https://vastoratech.com/images/mobile-app-development.jpg",
                width: 1200,
                height: 630,
                alt: "Mobile App Development Company Noida",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Company in Noida | Vastora Tech",
        description: "Looking for a reliable mobile app development company in Noida? Vastora Tech builds high-performance Android and iOS apps tailored for startups and businesses. Get scalable and affordable solutions today",
        images: ["https://vastoratech.com/images/mobile-app-development.jpg"],
    },
    authors: [{ name: "Vastora Tech"}],
    robots: {
        index: true,
        follow: true,
    },
};
const index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mobile App Development Company in Noida | Vastora Tech",
    "url": "https://vastoratech.com/services/mobile-app-development-services",
    "description": "Looking for a reliable mobile app development company in Noida? Vastora Tech builds high-performance Android and iOS apps tailored for startups and businesses. Get scalable and affordable solutions today",
    "publisher": {
      "@type": "Organization",
      "name": "Vastora Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vastoratech.com/images/logo.png"
      }
    }
  };
    const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vastoratech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mobile App Development",
        "item": "https://vastoratech.com/services/mobile-app-development-services"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a mobile app development company do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mobile app development company designs and builds mobile applications for businesses and startups."
        }
      },
      {
        "@type": "Question",
        "name": "What services are included in mobile app development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile app development services include app design, development, testing, and launch."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile app development company in Noida services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work as a mobile app development company in Noida and build apps for businesses across different industries."
        }
      },
      {
        "@type": "Question",
        "name": "What is a web app development service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A web app development service focuses on building web-based applications that work through a browser."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best app development agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for experience, a strong portfolio, and developers who understand your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work as a website app development agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team works as a website app development agency creating both websites and mobile applications."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hire mobile app developers near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, businesses looking for mobile app developers near me can work with our experienced development team."
        }
      },
      {
        "@type": "Question",
        "name": "What is mobile commerce app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile commerce app development focuses on creating mobile apps for online shopping and digital payments."
        }
      }
    ]
  };

    return (
        <Wrapper>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <MobileAppDevelopment/>
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;