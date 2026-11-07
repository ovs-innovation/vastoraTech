import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import UxUiDesignServices from "@/components/services/ux-ui-design-services/index";

export const metadata = {
  title: "Best UI/UX Design Company in Noida | UI/UX Design Services | Vastora Tech",
  description: "Transform your digital products with top UI/UX design services in Noida. Vastora Tech creates human-centric, high-converting Figma prototypes, design systems, and mobile & web interfaces.",
  keywords: [
    "UI UX Design Services in Noida",
    "Best UI UX Design Company in Noida",
    "UX UI design agency",
    "User interface design company",
    "Mobile app UI UX design services",
    "Figma design system agency Noida"
  ],
  alternates: {
    canonical: "https://vastoratech.com/services/ui-ux-design",
  },
  openGraph: {
    title: "Best UI/UX Design Company in Noida | UI/UX Design Services | Vastora Tech",
    description: "Transform your digital products with top UI/UX design services in Noida. Vastora Tech creates human-centric, high-converting Figma prototypes, design systems, and mobile & web interfaces.",
    type: "website",
    url: "https://vastoratech.com/services/ui-ux-design",
    images: [
      {
        url: "https://vastoratech.com/images/ui-ux-design.jpg",
        width: 1200,
        height: 630,
        alt: "Best UI UX Design Agency Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best UI/UX Design Company in Noida | UI/UX Design Services | Vastora Tech",
    description: "Transform your digital products with top UI/UX design services in Noida. Vastora Tech creates human-centric, high-converting Figma prototypes, design systems, and mobile & web interfaces.",
    images: ["https://vastoratech.com/images/ui-ux-design.jpg"],
  },
  authors: [{ name: "Vastora Tech" }],
  robots: {
    index: true,
    follow: true,
  },
};

const index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best UI/UX Design Company in Noida | UI/UX Design Services | Vastora Tech",
    "url": "https://vastoratech.com/services/ui-ux-design",
    "description": "Transform your digital products with top UI/UX design services in Noida. Vastora Tech creates human-centric, high-converting Figma prototypes, design systems, and mobile & web interfaces.",
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
        "name": "UI/UX Design Services",
        "item": "https://vastoratech.com/services/ui-ux-design"
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
      <UxUiDesignServices />
      <ScrollToTop style={false} />
    </Wrapper>
  );
};

export default index;