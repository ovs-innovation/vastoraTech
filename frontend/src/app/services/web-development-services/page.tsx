import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import WebDevelopment from "@/components/services/web-development-services";

export const metadata = {
    title: "Top Web Development Company in Noida | Vastora Tech",
    description: "Looking for a professional website designing company in Noida? Vastora Tech offers expert web development services tailored for small businesses and startups. Get a fast, secure, and SEO-friendly website.",
    keywords: [
      "web development company",
      "web app development service",
      "best app development agency",
      "website app development agency",
      "mobile app developers near me",
      "mobile commerce app development",
      "web design company site",
      "design in web development",
      "best website development company Noida",
      "web design and web development services",
      "website development company near me"
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
    "@type": "WebSite",
    "name": "Vastora Tech",
    "url": "https://vastoratech.com",
    "description": "Vastora Tech offers professional web development, eCommerce solutions, digital marketing, SEO, social media marketing, and mobile app development services in India. We deliver end-to-end solutions for businesses of all sizes.",
    "keywords": [
      "web development company",
      "web app development service",
      "best app development agency",
      "website app development agency",
      "mobile app developers near me",
      "mobile commerce app development",
      "web design company site",
      "design in web development",
      "best website development company Noida",
      "web design and web development services",
      "website development company near me"
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
        "name": "Web Development",
        "item": "https://vastoratech.com/web-development-services"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does a website development company provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A website development company provides website development services such as building business websites, creating responsive designs, developing custom features, and maintaining websites to ensure they perform well."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between web design and web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Web design focuses on the visual layout and user experience of a website, while web development involves building the technical structure and functionality. Together, web design and web development services create a complete website solution."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best website development company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When choosing the best website development company in Noida or any other location, look for experience, portfolio quality, client reviews, and the ability to deliver custom solutions that match your business goals."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer website development company near me services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team works with businesses looking for a website development company near me. We provide professional development services and support for companies that want reliable website solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What does a web development agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A web development agency helps businesses create, design, and manage websites. This includes planning the website structure, developing features, optimizing performance, and ensuring the website works smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "Why are professional web developers important for a business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional web developers ensure your website is secure, fast, and optimized for users. Working with experienced developers helps businesses create websites that perform well and provide a better experience for visitors."
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