import dynamicImport from "next/dynamic";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const dynamic = "force-static";
export const revalidate = 3600;

const HomeFive = dynamicImport(() => import("@/components/homes/home-5"), {
  ssr: true,
});

export const metadata = {
  title: "Ecommerce & Website Development Company in India | Vastora Tech",
  description: "Get professional ecommerce website development services in India. We create fast, secure, and scalable online stores to help grow your business. Contact Vastora Tech today.",
  keywords: [
    "ecommerce website development company in india",
    "best website development company in india",
    "ecommerce website development cost in india",
    "ecommerce platform in india",
    "best ecommerce website development company india",
    "best ecommerce solutions services in india"
  ],
  alternates: {
    canonical: "https://vastoratech.com/",
  },
  openGraph: {
    title: "Ecommerce & Website Development Company in India | Vastora Tech",
    description: "Get professional ecommerce website development services in India. We create fast, secure, and scalable online stores to help grow your business. Contact Vastora Tech today.",
    type: "website",
    url: "https://vastoratech.com/",
    images: [
      {
        url: "https://vastoratech.com/images/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Vastora Tech - Web Development & Digital Marketing Agency",
      },
    ],
    siteName: "Vastora Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce & Website Development Company in India | Vastora Tech",
    description: "Get professional ecommerce website development services in India. We create fast, secure, and scalable online stores to help grow your business. Contact Vastora Tech today.",
    images: ["https://vastoratech.com/images/homepage.jpg"],
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
      "website development company in India",
      "website design and development",
      "web design and development",
      "website development services",
      "top web development agencies",
      "web developers near me",
      "web development agency",
      "eCommerce website development",
      "ecommerce web development India",
      "ecommerce website developer",
      "ecommerce website development agency",
      "ecommerce website development services",
      "ecommerce app development company",
      "web development company",
      "eCommerce website development",
      "ecommerce website development company near me",
      "ecommerce website development company in noida",
      "e commerce platform in india",
      "ecommerce website development cost in india",
      "website design and development",
      "website development company in India",
      "web design and development",
      "best social media agency",
      "SMM Company in Noida",
      "Best Social Media Marketing Agency",
      "SMM Company near me",
      "social media in marketing",
      "SEO services company",
      "seo services",
      "seo company near me",
      "Seo service in Noida",
      "Seo services near me",
      "Seo services for ecommerce",
      "seo agency near me",
      "best seo services in Noida",
      "search engine optimization agencies",
      "seo for agencies",
      "best Indian seo company",
      "seo in e commerce",
      "best company for seo in India",
      "mobile app development",
      "mobile app development services",
      "mobile app development company in Noida",
      "mobile app development company",
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

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vastora Tech",
    "url": "https://vastoratech.com",
    "logo": "https://vastoratech.com/logo.png",
    "description": "Vastora Tech provides web development, ecommerce development, SEO services and digital marketing solutions.",
    "areaServed": "Worldwide",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/"
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
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a web development company do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A web development company helps businesses create and manage their online presence. This includes website design and development, building responsive websites, improving performance, and ensuring the website works smoothly on all devices."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer website design and development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete website design and development solutions for businesses. Our team creates modern, user-friendly websites that look professional and perform well on both desktop and mobile devices."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide eCommerce website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in eCommerce website development for businesses that want to sell products or services online. Our team builds secure and scalable online stores with product management, payment gateway integration, and a smooth shopping experience."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a website development company in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work as a website development company in India and provide professional web design and development services to businesses looking for reliable and scalable website solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What digital marketing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our digital marketing services help businesses increase their online visibility and attract more customers. We provide search engine optimization, content marketing, social media marketing, and performance marketing strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO services for websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are an experienced SEO services company that helps businesses improve their rankings on search engines. Our SEO strategies focus on increasing organic traffic and improving website visibility."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a digital marketing agency in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we operate as a digital marketing agency in Noida and help businesses grow through effective digital marketing strategies including SEO, social media marketing, and online advertising."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide digital marketing services near me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team provides digital marketing services for businesses looking to improve their online presence. We work with companies from different industries to help them reach their target audience and grow their business."
        }
      },
      {
        "@type": "Question",
        "name": "Can a digital marketing agency help grow my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Working with a professional digital marketing agency can help your business reach more potential customers online. Through SEO, advertising, and content marketing, digital marketing services can increase website traffic, leads, and sales."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeFive />
      <ScrollToTop style={true} />
    </Wrapper>
  );
};

export default index;
