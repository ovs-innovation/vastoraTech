import ScrollToTop from "@/components/common/scroll-to-top";
import PortfolioDetails from "@/components/inner-pages/portfolio-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Vastora Tech - Software Development & Digital Marketing Agency",
};

const index = () => {
    return (
        <Wrapper>
            <PortfolioDetails />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;