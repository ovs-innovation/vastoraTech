import HomeFive from "@/components/homes/home-5";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "Vastora Tech - Software Development & Digital Marketing Agency",
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
