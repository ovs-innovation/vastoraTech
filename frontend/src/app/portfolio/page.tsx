import ScrollToTop from "@/components/common/scroll-to-top";
import PortfolioTwo from "@/components/inner-pages/portfolio-2";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Our Projects – Websites & E-Commerce Stores Built by Vastora Tech",
    description: "View our portfolio of websites, branding work and ready-to-use E-Commerce stores developed for businesses across multiple industries.",
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