import Demos from "@/components/demos";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Top eCommerce Website Development Services Online",
   description: "Professional eCommerce website development services in India. Trusted eCommerce website development agency building secure, scalable online stores and mobile commerce applications for businesses.",
   keywords: [
    "ecommerce web development india",
    "ecommerce website developer",
    "ecommerce website development agency",
    "ecommerce website development services",
    "ecommerce app development company",
   ],
   alternates: {
       canonical: "https://vastoratech.com/product/e-commerce-solutions",
   },
   openGraph: {
       title: "Ecommerce Web Development India | Ecommerce Website Services",
       description: "Looking for ecommerce website development services? Vastora Tech provides ecommerce web development in India with custom online stores, secure payment integration, and scalable solutions.",
       type: "website",
       url: "https://vastoratech.com/services/ecommerce-development",
       images: [
           {
               url: "https://vastoratech.com/images/ecommerce-development-services.jpg",
               width: 1200,
               height: 630,
               alt: "Ecommerce Web Development India",
           },
       ],
   },
   twitter: {
       card: "summary_large_image",
       title: "Ecommerce Web Development India | Ecommerce Website Services",
       description: "Looking for ecommerce website development services? Vastora Tech provides ecommerce web development in India with custom online stores, secure payment integration, and scalable solutions.",
       images: ["https://vastoratech.com/images/ecommerce-development-services.jpg"],
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
     "ecommerce web development india",
     "ecommerce website developer",
     "ecommerce website development agency",
     "ecommerce website development services",
     "ecommerce app development company",
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
        "name": "eCommerce Development",
        "item": "https://vastoratech.com/ecommerce-development-services"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are eCommerce website development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "eCommerce website development services involve building online stores where businesses can sell products or services through a website."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I hire an eCommerce website developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ecommerce website developer helps create a professional online store with secure payments, product management, and smooth navigation."
        }
      },
      {
        "@type": "Question",
        "name": "What does an eCommerce website development agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An ecommerce website development agency designs, develops, and manages online stores for businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Is eCommerce web development in India reliable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ecommerce web development India services are widely used by businesses because of strong technical expertise and cost-effective solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide custom eCommerce website development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide custom ecommerce website development services based on your business needs and goals."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms are used for eCommerce website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular platforms include Shopify, WooCommerce, Magento, and custom-built solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build mobile apps for eCommerce businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as an ecommerce app development company we create mobile shopping apps for businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an eCommerce website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The development time depends on the features and design requirements, but most projects take a few weeks to complete."
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
            <Demos />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;

