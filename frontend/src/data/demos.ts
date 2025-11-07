export type DemoProduct = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  image: string; // public path
  demoUrl?: string; // external/live demo URL
  category?: string;
};

export const demos: DemoProduct[] = [
  {
    slug: "grocery-store",
    title: "Grocery Store Website",
    subtitle: "Clean, fast, conversion-focused",
    description:
      "A modern grocery e‑commerce theme with product categories, filters, cart and checkout flows.",
    features: [
      "Home, Category, Product, Cart, Checkout",
      "CMS-driven content sections",
      "SEO optimized, mobile-first",
    ],
    image: "/assets/img/landingpage/mern.png",
    demoUrl: "#",
    category: "E‑commerce",
  },
  {
    slug: "electronics-shop",
    title: "Electronics Shop Website",
    subtitle: "High-performance storefront",
    description:
      "Electronics-focused storefront with product comparisons, specs, and clean product detail pages.",
    features: [
      "Product specs & comparisons",
      "Advanced search",
      "Optimized product gallery",
    ],
    image: "/assets/img/landingpage/shopify.png",
    demoUrl: "#",
    category: "E‑commerce",
  },
  {
    slug: "restaurant",
    title: "Restaurant Website",
    subtitle: "Menu, booking and delivery",
    description:
      "Showcase your restaurant menu, table reservations, and online ordering integration.",
    features: [
      "Menu management",
      "Reservation form",
      "Delivery partner links",
    ],
    image: "/assets/img/landingpage/wordpress.png",
    demoUrl: "#",
    category: "Hospitality",
  },
];

export function getDemoBySlug(slug: string): DemoProduct | undefined {
  return demos.find((d) => d.slug === slug);
}

