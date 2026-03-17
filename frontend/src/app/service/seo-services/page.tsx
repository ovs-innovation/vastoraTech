import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SeoServices from "@/components/services/seo-services";

export const metadata = {
    title: "Best SEO Service in Noida | SEO Services Near Me",
    description: "Vastora Tech provides reliable SEO services near me and expert SEO service in Noida to help businesses improve search rankings, traffic, and online visibility.",
    keywords: [
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
      "best company for seo in India"
    ],
    alternates: {
        canonical: "https://vastoratech.com/services/seo-services",
    },
    openGraph: {
        title: "Best SEO Service in Noida | SEO Services Near Me",
        description: "Vastora Tech provides reliable SEO services near me and expert SEO service in Noida to help businesses improve search rankings, traffic, and online visibility.",
        type: "website",
        url: "https://vastoratech.com/services/seo-services",
        images: [
            {
                url: "https://vastoratech.com/images/seo-services.jpg",
                width: 1200,
                height: 630,
                alt: "Best SEO Service Noida",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best SEO Service in Noida | SEO Services Near Me",
        description: "Vastora Tech provides reliable SEO services near me and expert SEO service in Noida to help businesses improve search rankings, traffic, and online visibility.",
        images: ["https://vastoratech.com/images/seo-services.jpg"],
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
      "best company for seo in India"
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
        "name": "SEO Services",
        "item": "https://vastoratech.com/seo-services"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO services are strategies used to improve a website’s ranking on search engines like Google. These services include keyword optimization, content improvements, and technical updates."
        }
      },
      {
        "@type": "Question",
        "name": "Why is SEO important for businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO helps businesses appear in search results when people look for products or services online. This increases website traffic and potential customers."
        }
      },
      {
        "@type": "Question",
        "name": "What is SEO in eCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO in eCommerce focuses on optimizing online stores so product pages and categories appear in search results and attract buyers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO service in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide SEO service in Noida for businesses that want to improve their website rankings and reach more customers online."
        }
      },
      {
        "@type": "Question",
        "name": "Can I find SEO services near me through your company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer SEO services near me for businesses looking for reliable search engine optimization support."
        }
      },
      {
        "@type": "Question",
        "name": "What does an SEO agency near me do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An SEO agency near me helps businesses improve their search engine rankings through website optimization, keyword research, and content strategies."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the best SEO services in Noida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To choose the best SEO services in Noida, check the agency’s experience, past results, and SEO strategy before making a decision."
        }
      },
      {
        "@type": "Question",
        "name": "What do search engine optimization agencies focus on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Search engine optimization agencies focus on improving website visibility, increasing organic traffic, and helping businesses rank higher in search engines."
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
            <SeoServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;