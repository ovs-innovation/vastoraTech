import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import WebDevelopment from "@/components/services/web-development-services";

export const metadata = {
    title: "Top Web Development Company in Noida | Vastora Tech",
    description: "Looking for a professional website designing company in Noida? Vastora Tech offers expert web development services tailored for small businesses and startups. Get a fast, secure, and SEO-friendly website.",
    keywords: [
        "Top Web Development Company in Noida",
        "business website development services",
        "website designing company in noida",
        "website development company in noida",
        "best web design company websites"
    ],
    alternates: {
        canonical: "https://vastoratech.com/services/web-development-services",
    },
    openGraph: {
        title: "Top Web Development Company in Noida | Vastora Tech",
        description: "Looking for a professional website designing company in Noida? Vastora Tech offers expert web development services tailored for small businesses and startups. Get a fast, secure, and SEO-friendly website.",
        type: "website",
        url: "https://vastoratech.com/services/web-development-services",
        images: [
            {
                url: "https://vastoratech.com/images/web-development.jpg",
                width: 1200,
                height: 630,
                alt: "Website Development Company",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Web Development Company in Noida | Vastora Tech",
        description: "Looking for a professional website designing company in Noida? Vastora Tech offers expert web development services tailored for small businesses and startups. Get a fast, secure, and SEO-friendly website.",
        images: ["https://vastoratech.com/images/web-development.jpg"],
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
    "name": "Top Web Development Company in Noida | Vastora Tech",
    "url": "https://vastoratech.com/services/web-development-services",
    "description": "Looking for a professional website designing company in Noida? Vastora Tech offers expert web development services tailored for small businesses and startups. Get a fast, secure, and SEO-friendly website.",
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
        "name": "Web Development",
        "item": "https://vastoratech.com/services/web-development-services"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the top web development company in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vastora Tech is a trusted web development company in Noida, known for delivering high-quality, SEO-friendly, and performance-driven websites tailored to different business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer business website development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete website development services, including design, development, and optimization to help you build a strong online presence."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a website designing company in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer modern, user-friendly, and responsive website design services that improve user experience and engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website development for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in building affordable and scalable websites for small businesses and startups, tailored to your goals and budget."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you the best web design company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on clean design, fast performance, SEO optimization, and user experience to create websites that not only look good but also deliver results."
        }
      },
      {
        "@type": "Question",
        "name": "How much does website development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on your requirements, features, and design. Basic websites typically start from ₹10,000–₹30,000, while advanced or custom websites may cost more."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard business website usually takes 1–3 weeks. More complex or custom projects may take longer depending on features and requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be SEO-friendly and mobile responsive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our websites are SEO-friendly, fast-loading, and fully responsive across mobile, tablet, and desktop devices."
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
            
            <WebDevelopment />
            
            
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;