import HomeFive from "@/components/homes/home-5";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Vastora Tech – Website Development, E-Commerce Solutions & Digital Marketing",
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
