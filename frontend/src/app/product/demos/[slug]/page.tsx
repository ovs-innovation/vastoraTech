import { notFound } from "next/navigation";
import { getDemoBySlug } from "@/data/demos";
import DemoDetails from "@/components/demos/DemoDetails";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

type PageProps = {
  params: { slug: string };
};

export const metadata = {
    title: "Demo Details - Ready Website Demos | Next js Template",
};

export default function DemoProductPage({ params }: PageProps) {
  const demo = getDemoBySlug(params.slug);
  if (!demo) return notFound();

  return (
    <Wrapper>
      <DemoDetails demo={demo} />
      <ScrollToTop />
    </Wrapper>
  );
}

