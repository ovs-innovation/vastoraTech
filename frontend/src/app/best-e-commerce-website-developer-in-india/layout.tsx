import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "E-Commerce Website Development Services India - Vastora Tech",
    description: "Premium e-commerce website development services in India. We specialize in custom e-commerce solutions, app development, and online store management for 10x business growth.",
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
