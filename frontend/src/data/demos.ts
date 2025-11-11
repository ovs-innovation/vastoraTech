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

