import dynamicImport from "next/dynamic";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const dynamic = "force-static";
export const revalidate = 3600;

const HomeFive = dynamicImport(() => import("@/components/homes/home-5"), {
  ssr: false,
});

export const metadata = {
  title: "Vastora Tech – Web Development & E-Commerce Solutions",
  description: "Vastora Tech offers modern website development, ready-to-use E-Commerce solutions, social media marketing, SEO services and paid ads support for business growth.",
  alternates: {
    canonical: "https://vastoratech.com/",
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeFive />
      <ScrollToTop style={true} />
    </Wrapper>
  );
};

export default index;
