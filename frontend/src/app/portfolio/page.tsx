import ScrollToTop from "@/components/common/scroll-to-top";
import PortfolioTwo from "@/components/inner-pages/portfolio-2";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Web & eCommerce Projects Portfolio | Vastora Tech",
    description: "View our portfolio of websites, branding work and ready-to-use E-Commerce stores developed for businesses across multiple industries.",
    alternates: {
        canonical: "https://vastoratech.com/projects",
    },
    keywords: [
        "website development portfolio",
        "eCommerce website projects",
        "web design portfolio",
        "Vastora Tech projects",
        "website design case studies",
        "business website projects"
    ],
    authors: [{ name: "Vastora Tech" }],
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
            "website development portfolio",
            "eCommerce website projects",
            "web design portfolio",
            "Vastora Tech projects",
            "website design case studies",
            "business website projects"
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
                "name": "Projects",
                "item": "https://vastoratech.com/projects"
            }
        ]
    };

    return (
        <Wrapper>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <PortfolioTwo />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;