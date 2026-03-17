import Contact from "@/components/contact";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Contact Vastora Tech – Book a Call for Website or E-Commerce Solutions",
    description: "Contact Vastora Tech for website development, E-Commerce solutions, SEO, social media or digital marketing services. Let's grow your business together.",
    alternates: {
        canonical: "https://vastoratech.com/contact",
    },
    authors: [{ name: "Vastora Tech" }],
    robots: {
        index: true,
        follow: true,
    },
};

const index = () => {
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
                "name": "Contact",
                "item": "https://vastoratech.com/contact"
            }
        ]
    };

    return (
        <Wrapper>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Contact />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;