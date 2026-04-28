import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best Ecommerce Website Development Company in Noida | Vastora Tech",
    description: "Looking for an ecommerce website development company in Noida? Vastora Tech offers expert ecommerce design, development, and mobile app solutions to grow your online business",
    keywords: [
      "ecommerce web development india",
      "ecommerce website developer",
      "ecommerce website development agency",
      "ecommerce website development services",
      "ecommerce app development company",
      "best ecommerce developer india",
      "custom ecommerce solutions",
      "online store development",
      "ecommerce platform development",
      "b2b ecommerce development",
      "b2c ecommerce development"
    ],
    alternates: {
        canonical: "https://vastoratech.com/best-e-commerce-website-developer-in-india",
    },
    authors: [{ name: "Vastora Tech"}],
    robots: {
        index: true,
        follow: true,
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
