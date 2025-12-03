import ScrollToTop from "@/components/common/scroll-to-top";
import PortfolioTwo from "@/components/inner-pages/portfolio-2";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
    alternates: {
        canonical: "https://vastoratech.com/projects",
    },
};
const index = () => {
    return (
        <Wrapper>
            <PortfolioTwo />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;