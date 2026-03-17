import About from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import Script from "next/script";

export const metadata = {
  title: "About Vastora Tech – Web & eCommerce Experts",
  description:
    "Learn about Vastora Tech, a leading web and eCommerce development company. We help businesses grow with modern websites and digital solutions.",
  alternates: {
    canonical: "https://vastoratech.com/about",
  },
  authors: [{ name: "Vastora Tech" }],
  keywords: [
     "about Vastora Tech",
     "digital marketing agency",
     "eCommerce development company",
     "web development company"
  ],
  robots: {
    index: true,
    follow: true,
  },
};


const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Vastora Tech",
  url: "https://vastoratech.com/about",
  description:
    "Vastora Tech provides website development, e-commerce solutions, SEO, social media marketing, and custom CMS development for growing businesses.",
  publisher: {
    "@type": "Organization",
    name: "Vastora Tech",
    url: "https://vastoratech.com/",
    logo: "https://vastoratech.com/logo.png",
  },
};

const AboutPage = () => {
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
        "name": "About",
        "item": "https://vastoratech.com/about"
      }
    ]
  };

  return (
    <Wrapper>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <About />
      <ScrollToTop />
    </Wrapper>
  );
};

export default AboutPage;