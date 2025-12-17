import About from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import Script from "next/script";

export const metadata = {
  title: "About Vastora Tech – Website Development & E-Commerce Solutions Company",
  description:
    "Learn about Vastora Tech, a company offering website development, e-commerce solutions, SEO and social media services to help businesses grow online.",
  alternates: {
    canonical: "https://vastoratech.com/about",
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
  return (
    <Wrapper>
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <About />
      <ScrollToTop />
    </Wrapper>
  );
};

export default AboutPage;