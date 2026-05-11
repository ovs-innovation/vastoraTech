import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SocialMediaMarketingServices from "@/components/services/social-media-marketing-services";

export const metadata = {
    title: "Social Media Marketing Services in Noida | Vastora Tech",
    description: "Looking for expert social media marketing services in Noida? Vastora Tech helps businesses grow with targeted strategies, creative content, and result-driven campaigns. Boost your brand today.",
    keywords: [
        "Social Media Marketing Services in Noida",
        "Best Social Media Marketing Agency",
        "social media marketing in small business",
        "what is social media in marketing",
        "social media agency in noida",
        "SMM Company in noida",
        "Smm Company near me"
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
    "@type": "WebPage",
    "name": "Social Media Marketing Services in Noida | Vastora Tech",
    "url": "https://vastoratech.com/services/social-media-marketing-services",
    "description": "Looking for expert social media marketing services in Noida? Vastora Tech helps businesses grow with targeted strategies, creative content, and result-driven campaigns. Boost your brand today.",
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
        "name": "Social Media Marketing",
        "item": "https://vastoratech.com/services/social-media-marketing-services"
      }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are social media marketing services in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Social media marketing services in Noida include content creation, account management, paid advertising, and audience targeting to help businesses grow on platforms like Instagram, Facebook, and LinkedIn."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best social media marketing agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose an agency that offers clear strategies, proven results, transparent reporting, and customized campaigns aligned with your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "Is social media marketing useful for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, social media marketing is highly effective for small businesses. It helps increase brand awareness, generate leads, and connect directly with your target audience at a lower cost."
        }
      },
      {
        "@type": "Question",
        "name": "What is social media in marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Social media marketing is the process of promoting products, services, or brands through platforms like Facebook, Instagram, LinkedIn, and X to increase brand awareness, engage customers, and drive sales."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in social media marketing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Services typically include content planning, post design, caption writing, ad campaign management, audience targeting, and performance tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide social media marketing services in Noida for all industries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our services are suitable for startups, small businesses, and established brands across various industries."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a good social media agency in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good agency focuses on strategy, creativity, consistency, and data-driven results rather than just posting content."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from social media marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial engagement can be seen within a few weeks, but consistent growth and lead generation usually take 2–3 months with the right strategy."
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