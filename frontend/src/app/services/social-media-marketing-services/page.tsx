import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SocialMediaMarketingServices from "@/components/services/social-media-marketing-services";

export const metadata = {
    title: "Social Media Marketing Services in Noida | Vastora Tech",
    description: "Looking for expert social media marketing services in Noida? Vastora Tech helps businesses grow with targeted strategies, creative content, and result-driven campaigns. Boost your brand today.",
    keywords: [
     "social media marketing agency",
     "social media management agencies",
     "social marketing agency",
     "best social media agency",
     "SMM Company in noida",
     "Best Social Media Marketing Agency",
     "SMM Company near me",
     "social media in marketing"
    ],
    alternates: {
        canonical: "https://vastoratech.com/services/social-media-marketing-services",
    },
    openGraph: {
        title: "Social Media Marketing Services in Noida | Vastora Tech",
        description: "Looking for expert social media marketing services in Noida? Vastora Tech helps businesses grow with targeted strategies, creative content, and result-driven campaigns. Boost your brand today.",
        type: "website",
        url: "https://vastoratech.com/services/social-media-marketing-services",
        images: [
            {
                url: "https://vastoratech.com/images/social-media-marketing-services.jpg",
                width: 1200,
                height: 630,
                alt: "Social Media Marketing Agency Noida",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Social Media Marketing Services in Noida | Vastora Tech",
        description: "Looking for expert social media marketing services in Noida? Vastora Tech helps businesses grow with targeted strategies, creative content, and result-driven campaigns. Boost your brand today.",
        images: ["https://vastoratech.com/images/social-media-marketing.jpg"],
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
    "@type": "WebSite",
    "name": "Vastora Tech",
    "url": "https://vastoratech.com",
    "description": "Vastora Tech offers professional web development, eCommerce solutions, digital marketing, SEO, social media marketing, and mobile app development services in India. We deliver end-to-end solutions for businesses of all sizes.",
    "keywords": [
     "social media marketing agency",
     "social media management agencies",
     "social marketing agency",
     "best social media agency",
     "SMM Company in noida",
     "Best Social Media Marketing Agency",
     "SMM Company near me",
     "social media in marketing"
    ]
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
        "name": "Social Media Marketing",
        "item": "https://vastoratech.com/social-media-marketing-services"
      }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a social media marketing agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A social media marketing agency helps businesses promote their brand on platforms like Facebook, Instagram, and LinkedIn through content, ads, and account management."
        }
      },
      {
        "@type": "Question",
        "name": "Why is social media important in marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Social media in marketing helps businesses reach their audience, build brand awareness, and connect with potential customers online."
        }
      },
      {
        "@type": "Question",
        "name": "What services do social media management agencies provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Social media management agencies provide content creation, post scheduling, account management, and social media advertising."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best social media agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To choose the best social media agency, check their experience, past work, and ability to create effective social media strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work as an SMM company in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide professional social media marketing services as an SMM company in Noida for businesses looking to grow online."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services for businesses searching for an SMM company near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we help businesses looking for an SMM company near me with complete social media marketing and management services."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms do social marketing agencies manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A social marketing agency usually manages platforms like Facebook, Instagram, LinkedIn, and Twitter."
        }
      },
      {
        "@type": "Question",
        "name": "How can the best social media marketing agency help my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best social media marketing agency helps increase brand visibility, engagement, and customer reach through strategic campaigns."
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
            <SocialMediaMarketingServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index; 