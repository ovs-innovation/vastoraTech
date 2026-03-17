 
import Blog from '@/components/blogs/blog';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
export const metadata = {
    title: "Web, E-Commerce & Digital Marketing | Vastora Tech",
    description: "Grow your business with Vastora Tech’s digital marketing services including SEO, social media marketing, and website optimization for better online visibility.",
    alternates: {
        canonical: "https://vastoratech.com/blog",
    },
    authors: [{ name: "Vastora Tech" }],
    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        title: "Best Digital Marketing Services in India | Vastora Tech",
        description: "Grow your business with Vastora Tech’s digital marketing services including SEO, social media marketing, and website optimization for better online visibility.",
        type: "website",
        locale: "en_IN",
        siteName: "Vastora Tech",
        images: [
            {
                url: "https://vastoratech.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Vastora Tech",
            },
        ],
    },
    twitter: {
        title: "Best Digital Marketing Services in India | Vastora Tech",
        description: "Grow your business with Vastora Tech’s digital marketing services including SEO, social media marketing, and website optimization for better online visibility.",
        card: "summary_large_image",
        images: [
            {
                url: "https://vastoratech.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Vastora Tech",
            },
        ],
    },

    keywords: ["digital marketing services, web development company, best website development company noida", "online visibility"],
    
    article: {
        author: "Vastora Tech",
        publishedTime: "2026-03-10",
        modifiedTime: "2026-03-10",
        section: "Blog",
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
                "name": "Blog",
                "item": "https://vastoratech.com/blog"
            }
        ]
    };
    return (
        <Wrapper>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Blog />
            <ScrollToTop />            
        </Wrapper>
    );
};

export default index;